import GDetailsPanel from "@components/Earn/GDetailsPanel";
import GoalPanel from "@components/Earn/GoalPanel";
import QDetailsPanel from "@components/Earn/QDetailsPanel";
import QuestPanel from "@components/Earn/QuestPanel";
import TaskPanel from "@components/Earn/TaskPanel";
import EarnProvider from "@context/ContextEarn";
import QGDetailsProvider from "@context/ContextQGDetails";

export default function PageEarn() {
  return (
    <>
      <EarnProvider>
        <QGDetailsProvider>
          <QuestPanel />
          <QDetailsPanel />
          <GDetailsPanel />
          <GoalPanel />
        </QGDetailsProvider>
        <TaskPanel />
      </EarnProvider>
    </>
  );
}
