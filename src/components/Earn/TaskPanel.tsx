import { ContextEarn } from "@context/ContextEarn";
import { useContext, useEffect, useState } from "react";
import TaskCard from "./TaskCard";

export default function TaskPanel() {
  const { tasks } = useContext(ContextEarn);
  const [taskHeads, setTaskHeads] = useState<string[]>([]);
  const [tab, setTab] = useState<string>("New");

  useEffect(() => {
    tasks.forEach((task) => {
      if (!taskHeads.includes(task.cluster))
        setTaskHeads([task.cluster, ...taskHeads]);
    });
  }, [tasks, taskHeads]);
  return (
    <section className="w-full">
      <ul className="flex gap-5">
        {taskHeads.length > 0 &&
          taskHeads.map((taskHead, index) => (
            <li key={index} className="font-semibold flex">
              <button onClick={() => setTab(taskHead)}>
                {taskHead}
                <span
                  className={`${
                    taskHead === tab ? "text-lime-400" : "text-transparent"
                  }`}
                >
                  *
                </span>
              </button>
            </li>
          ))}
      </ul>
      <div className="flex flex-col gap-2 py-4">
        {tasks
          .filter((task) => task.cluster === tab)
          .map((task, index) => (
            <TaskCard task={task} key={index} />
          ))}
      </div>
    </section>
  );
}
