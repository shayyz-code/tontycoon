import { ContextEarn } from "@context/ContextEarn";
import { useContext } from "react";
import QuestCard from "./QuestCard";

export default function QuestPanel() {
  const { quests } = useContext(ContextEarn);
  return (
    <section className="w-full">
      <h1 className="font-semibold">Quests</h1>
      <div className="flex gap-5 py-4 overflow-x-scroll">
        {quests.map((quest, index) => (
          <QuestCard quest={quest} key={index} />
        ))}
      </div>
    </section>
  );
}
