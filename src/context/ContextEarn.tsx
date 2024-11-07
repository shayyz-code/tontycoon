"use client";

import { createContext, ReactNode, useEffect, useState } from "react";

export type TTask = {
  icon: JSX.Element;
  tname: string;
  points: number;
  cluster: string;
  url: string;
};

export type TQGTask = {
  icon: JSX.Element;
  tname: string;
  points: number;
  url: string;
};

export type TQuest = {
  icon_url: string;
  qname: string;
  points: number;
  description: string;
  tasks: TQGTask[];
};

export type TGoal = {
  gname: string;
  points: number;
  tasks: TQGTask[];
};

type TContextEarn = {
  quests: TQuest[];
  goal: TGoal;
  tasks: TTask[];
};

const DVTask = {
  icon: <div></div>,
  tname: "",
  points: 0,
  cluster: "",
  url: "",
};

const DVQGTask = {
  icon: <div></div>,
  tname: "",
  points: 0,
  url: "",
};

export const DVQuest = {
  icon_url: "",
  qname: "",
  points: 0,
  description: "",
  tasks: [DVQGTask],
};

export const DVGoal = {
  gname: "",
  points: 0,
  tasks: [DVQGTask],
};

const DVContextEarn = {
  quests: [DVQuest],
  goal: DVGoal,
  tasks: [DVTask],
};

export const ContextEarn = createContext<TContextEarn>(DVContextEarn);

export default function EarnProvider({ children }: { children: ReactNode }) {
  const [quests, setQuests] = useState<TQuest[]>([DVQuest]);
  const [goal, setGoal] = useState<TGoal>(DVGoal);
  const [tasks, setTasks] = useState<TTask[]>([DVTask]);

  useEffect(() => {
    setQuests([
      {
        icon_url: "",
        qname: "The Open League S1E1 Quest",
        points: 750,
        description:
          "Complete three tasks & be active on-chain to be eligible for the TON's Normie or Degen Airdrop. Task & Quest Claim can take some time. It's related to TON Blockchain performance.",
        tasks: [
          {
            icon: <div></div>,
            tname: "Mint a Normie Badge",
            points: 250,
            url: "",
          },
          {
            icon: <div></div>,
            tname: "Boost Blum in Open League",
            points: 500,
            url: "",
          },
        ],
      },
      {
        icon_url: "",
        qname: "Join CheatKott News",
        points: 555,
        description: "Join and earn",
        tasks: [
          {
            icon: <div></div>,
            tname: "CheatKott",
            points: 555,
            url: "",
          },
        ],
      },
    ]);
    setGoal({
      gname: "Earn for checking socials",
      points: 150,
      tasks: [
        {
          icon: <div></div>,
          tname: "Mint a Normie Badge",
          points: 50,
          url: "",
        },
        {
          icon: <div></div>,
          tname: "Boost Blum in Open League",
          points: 50,
          url: "",
        },
        {
          icon: <div></div>,
          tname: "Mint a Normie Badge",
          points: 50,
          url: "",
        },
      ],
    });
    setTasks([
      {
        icon: <div></div>,
        tname: "How To Find Altcoins?",
        points: 250,
        cluster: "New",
        url: "",
      },
      {
        icon: <div></div>,
        tname: "DeFi Explained",
        points: 250,
        cluster: "New",
        url: "",
      },
      {
        icon: <div></div>,
        tname: "Sharding Explained",
        points: 250,
        cluster: "New",
        url: "",
      },
      {
        icon: <div></div>,
        tname: "Follow DOGS Farm on Facebook",
        points: 90,
        cluster: "Socials",
        url: "",
      },
    ]);
  }, []);

  return (
    <ContextEarn.Provider value={{ quests, goal, tasks }}>
      {children}
    </ContextEarn.Provider>
  );
}
