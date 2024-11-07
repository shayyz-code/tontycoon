"use client"

import WebApp from "@twa-dev/sdk"
import { createContext, ReactNode, useEffect, useState } from "react"

type TUserData = {
  id: number
  first_name: string
  last_name: string
  username?: string
  language_code: string
  is_premium?: boolean
}

type TUserCredentials = {
  uid: number
  username: string | undefined
}

const DVUserCredentials = {
  uid: 700,
  username: "shayy",
}

type TContextAuth = { userCredentials: TUserCredentials }

const DVContextAuth = { userCredentials: DVUserCredentials }

export const ContextAuth = createContext<TContextAuth>(DVContextAuth)

export default function AuthProvider({ children }: { children: ReactNode }) {
  const [userCredentials, setUserCredentials] =
    useState<TUserCredentials>(DVUserCredentials)

  useEffect(() => {
    if (WebApp.initDataUnsafe.user) {
      const userData = WebApp.initDataUnsafe.user as TUserData
      setUserCredentials({
        uid: userData.id,
        username: userData.username,
      })
    } else {
      // setUserCredentials(DVUserCredentials);
    }
  }, [])

  return (
    <ContextAuth.Provider value={{ userCredentials }}>
      {WebApp.initDataUnsafe.user && children}
    </ContextAuth.Provider>
  )
}
