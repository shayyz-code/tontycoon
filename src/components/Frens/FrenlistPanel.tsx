"use client"

import { ContextUserData } from "@context/ContextUserData"
import { useContext } from "react"

export default function FrenlistPanel() {
  const { userData } = useContext(ContextUserData)
  const { invitedFrens, pointsFromInvitingFrens } = userData
  return (
    <section className="w-full">
      <div className="my-10 flex flex-col items-center justify-center gap-2">
        <div>Total invited frens:</div>
        <div className="text-6xl">{invitedFrens}</div>
      </div>
      <div className="my-10 flex flex-col items-center justify-center gap-2">
        <div>Total earned:</div>
        <div>
          <span className="font-bold text-6xl">{pointsFromInvitingFrens}</span>
          <span>pts</span>
        </div>
      </div>
    </section>
  )
}
