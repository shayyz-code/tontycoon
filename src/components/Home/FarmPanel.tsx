import { useContext, useEffect, useState } from "react";
import FarmButton from "./FarmButton";
import { useTimer } from "react-timer-hook";
import { ContextUserData } from "@context/ContextUserData";

const FarmPanel = () => {
  const { userData } = useContext(ContextUserData);
  const [farmingStatus, setFarmingStatus] = useState<
    "farming" | "notfarmed" | "farmed"
  >("notfarmed");
  const [collectPoint, setCollectPoint] = useState<number>(0);

  const time = new Date();
  time.setSeconds(time.getSeconds() + 10);

  const { minutes, seconds, start, restart } = useTimer({
    autoStart: false,
    expiryTimestamp: time,
    onExpire: () => {
      setFarmingStatus("farmed");
    },
  });

  const doFarm = () => {
    if (farmingStatus === "notfarmed") {
      setFarmingStatus("farming");
      start();
    } else if (farmingStatus === "farmed") {
      userData.setPoints(
        userData.points + Number.parseFloat(collectPoint.toFixed(3))
      );
      setCollectPoint(0);
      //   const time = new Date();
      //   time.setSeconds(time.getSeconds() + 10);
      restart(time, false);
      setFarmingStatus("notfarmed");
    }
  };

  useEffect(() => {
    if (farmingStatus === "farming") {
      const interval = setTimeout(() => {
        setCollectPoint(collectPoint + 0.001);
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [farmingStatus, collectPoint]);

  return (
    <div className="flex flex-col items-center justify-center w-full">
      <FarmButton handleOnClick={doFarm}>
        {farmingStatus === "notfarmed"
          ? `Start Farming`
          : farmingStatus === "farming"
          ? `Farming ${collectPoint.toFixed(3)}pts, ${minutes}m ${seconds}s`
          : `Claim ${collectPoint.toFixed(3)}pts`}
      </FarmButton>
    </div>
  );
};

export default FarmPanel;
