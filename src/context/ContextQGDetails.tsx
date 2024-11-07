"use client";

import { createContext, ReactNode, useState } from "react";
import { TQuest, TGoal } from "./ContextEarn";

type TContextQGDetails = {
  quest: TQuest | undefined;
  goal: TGoal | undefined;
  open: (qOrG: "q" | "g", q?: TQuest, g?: TGoal) => void;
  close: () => void;
};

const DVContextQGDetails = {
  quest: undefined,
  goal: undefined,
  open: (qOrG: "q" | "g", q?: TQuest, g?: TGoal) => {
    console.log(qOrG, q, g);
  },
  close: () => {},
};

export const ContextQGDetails =
  createContext<TContextQGDetails>(DVContextQGDetails);

export default function QDetailsProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [quest, setQuest] = useState<TQuest | undefined>();
  const [goal, setGoal] = useState<TGoal | undefined>();

  const open = (qOrG: "q" | "g", q?: TQuest, g?: TGoal) => {
    if (qOrG === "q") {
      setGoal(undefined);
      setQuest(q);
    } else if (qOrG === "g") {
      setQuest(undefined);
      setGoal(g);
    }
  };

  const close = () => {
    setQuest(undefined);
    setGoal(undefined);
  };

  return (
    <ContextQGDetails.Provider
      value={{ quest: quest, goal: goal, open: open, close: close }}
    >
      {children}
    </ContextQGDetails.Provider>
  );
}
