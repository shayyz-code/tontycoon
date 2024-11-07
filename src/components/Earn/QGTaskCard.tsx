import { TQGTask } from "@context/ContextEarn"
import PrimaryButton from "../PrimaryButton"

type TTaskCard = {
  task: TQGTask
}

export default function QGTaskCard({ task }: TTaskCard) {
  return (
    <div className="relative flex flex-col items-between justify-end rounded-lg bg-neutral-900 ">
      {task.icon}
      <div className="px-6 py-4 flex justify-between items-center gap-5">
        <div>
          <h3 className="text-sm font-semibold mb-2">{task.tname}</h3>
          <div className="text-xs">+{task.points}pts</div>
        </div>
        <div>
          <PrimaryButton>Open</PrimaryButton>
        </div>
      </div>
    </div>
  )
}
