"use client";

import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";

import { ContextAuth } from "./ContextAuth";

type TUserData = {
  uid: number;
  points: number;
  setPoints: Dispatch<SetStateAction<number>>;
  invitedFrens: number;
  setInvitedFrens: Dispatch<SetStateAction<number>>;
  pointsFromInvitingFrens: number;
  setPointsFromInvitingFrens: Dispatch<SetStateAction<number>>;
};

const DVUserData = {
  uid: 700,
  points: 0,
  setPoints: () => {},
  invitedFrens: 0,
  setInvitedFrens: () => {},
  pointsFromInvitingFrens: 0,
  setPointsFromInvitingFrens: () => {},
};

type TContextUserData = { userData: TUserData };

const DVContextUserData = { userData: DVUserData };

export const ContextUserData =
  createContext<TContextUserData>(DVContextUserData);

export default function UserDataProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [points, setPoints] = useState<number>(0);
  const [invitedFrens, setInvitedFrens] = useState<number>(0);
  const [pointsFromInvitingFrens, setPointsFromInvitingFrens] =
    useState<number>(0);
  const { userCredentials } = useContext(ContextAuth);
  useEffect(() => {
    setPoints(0);
  }, [userCredentials]);
  return (
    <ContextUserData.Provider
      value={{
        userData: {
          uid: userCredentials.uid,
          points: points,
          setPoints: setPoints,
          invitedFrens: invitedFrens,
          setInvitedFrens: setInvitedFrens,
          pointsFromInvitingFrens: pointsFromInvitingFrens,
          setPointsFromInvitingFrens: setPointsFromInvitingFrens,
        },
      }}
    >
      {children}
    </ContextUserData.Provider>
  );
}
