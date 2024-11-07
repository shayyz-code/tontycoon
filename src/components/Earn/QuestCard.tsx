import { TQuest } from "@context/ContextEarn";
import PrimaryButton from "../PrimaryButton";
import { useContext } from "react";
import { ContextQGDetails } from "@context/ContextQGDetails";

type TQuestCard = {
  quest: TQuest;
};

export default function QuestCard({ quest }: TQuestCard) {
  const { open } = useContext(ContextQGDetails);
  return (
    <div
      className={`relative flex flex-col items-between justify-end min-w-[300px] rounded-lg text-neutral-950 bg-indigo-200 min-h-[240px]`}
    >
      <img
        src={quest.icon_url}
        width={80}
        height={80}
        alt="quest image"
        className="absolute top-7 left-7 rounded-full"
      />
      <div className="p-7 flex justify-between items-center gap-5">
        <div>
          <h3 className="text-sm font-semibold mb-2">{quest.qname}</h3>
          <div className="text-xs">+{quest.points}pts</div>
        </div>
        <div>
          <PrimaryButton handleOnClick={() => open("q", quest)}>
            Open
          </PrimaryButton>
        </div>
      </div>
    </div>
  );
}
