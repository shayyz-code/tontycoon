import { navlinks } from "@utils/navlinks"
import { useEffect, useState } from "react"
import { Link, useLocation } from "react-router-dom"

export default function Navbar() {
  const location = useLocation()
  const [path, setPath] = useState<string>("")
  useEffect(() => {
    setPath(location.pathname)
  }, [location])

  return (
    <nav className="flex items-start pt-2 pb-7 justify-evenly h-full">
      {navlinks.map((navlink) => (
        <Link
          key={navlink.href}
          to={navlink.href}
          className={`flex flex-col justify-center items-center w-[60px] h-[60px] rounded-lg`}
        >
          <div
            className={`flex flex-col items-center hover:scale-110 transition-all ease-out ${
              path === navlink.href
                ? "text-white"
                : "text-gray-400 hover:text-white"
            }`}
          >
            {path === navlink.href ? <navlink.iconSolid /> : <navlink.icon />}
            <span className="text-sm">{navlink.name}</span>
          </div>
        </Link>
      ))}
    </nav>
  )
}
