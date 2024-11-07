import { ContextQGDetails } from "@context/ContextQGDetails"
import IconXMark from "@utils/icons/xmark"
import { AnimatePresence, motion, MotionConfig } from "framer-motion"
import { useContext } from "react"
import QGTaskCard from "./QGTaskCard"
import bg from "/bg.jpg"

export default function GDetailsPanel() {
  const { goal, close } = useContext(ContextQGDetails)
  return (
    <AnimatePresence initial={false}>
      {goal !== undefined && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute top-0 left-0 w-screen h-screen z-10 bg-black/40"
            onClick={() => close()}
          ></motion.div>

          <MotionConfig transition={{ type: "tween" }}>
            <motion.article
              initial={{ y: 800 }}
              animate={{ y: 0 }}
              exit={{ y: 800 }}
              className="absolute bottom-0 right-0 w-full bg-neutral-800 py-6 px-4 md:px-20 flex flex-col gap-5 z-20 rounded-t-2xl"
            >
              <div className="relative flex justify-center items-center">
                <h3 className="font-bold text-center text-lg max-w-xs">
                  {goal.gname}
                </h3>
                <button
                  className="absolute top-0 right-2 cursor-pointer"
                  onClick={() => close()}
                >
                  <IconXMark />
                </button>
              </div>
              <div className="h-[600px] overflow-y-scroll">
                <div className="w-full px-4 md:px-20">
                  <img src={bg} alt="hi" className="rounded-lg w-full " />
                </div>
                <ul className="flex flex-col gap-2 py-6">
                  {goal.tasks.length > 0 &&
                    goal.tasks.map((task, index) => (
                      <li key={index}>
                        <QGTaskCard task={task} />
                      </li>
                    ))}
                </ul>
              </div>
            </motion.article>
          </MotionConfig>
        </>
      )}
    </AnimatePresence>
  )
}
