import { ContextEarn } from "@context/ContextEarn";
import { useContext } from "react";
import PrimaryButton from "../PrimaryButton";
import { ContextQGDetails } from "@context/ContextQGDetails";

export default function GoalPanel() {
  const { goal } = useContext(ContextEarn);
  const { open } = useContext(ContextQGDetails);
  return (
    <section className="w-full">
      <h1 className="font-semibold">Goal</h1>
      <div className="my-4 p-7 flex flex-col gap-5 rounded-lg bg-indigo-950">
        <div>
          <h3 className="text-sm font-semibold mb-2">{goal.gname}</h3>
          <div className="text-xs">+{goal.points}pts</div>
        </div>
        <div className="flex justify-between items-center">
          <div>
            <PrimaryButton>1/3</PrimaryButton>
          </div>
          <div>
            <PrimaryButton handleOnClick={() => open("g", undefined, goal)}>
              Open
            </PrimaryButton>
          </div>
        </div>
      </div>
    </section>
  );
}
