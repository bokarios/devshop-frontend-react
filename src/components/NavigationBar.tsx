import { NavLink, useLocation } from "react-router-dom"
import DevLogo from "./DevLogo"
import { UserIcon, ShoppingBagIcon } from "@heroicons/react/24/solid"

function NavigationBar() {
  let location = useLocation()

  const trans = ["/", "/contact", "/about"]

  const links = [
    {
      id: 1,
      name: "store",
      route: "/store",
    },
    {
      id: 2,
      name: "men's clothing",
      route: "/men-clothing",
    },
    {
      id: 3,
      name: "women's clothing",
      route: "/women-clothing",
    },
    {
      id: 4,
      name: "jewelery",
      route: "/jewelery",
    },
    {
      id: 5,
      name: "electronics",
      route: "/electronics",
    },
  ]

  return (
    <nav
      className={`h-28 w-full ${
        trans.includes(location.pathname)
          ? "absolute left-0 top-0 z-50 bg-[#00000014]"
          : "border-b border-b-gray-200 bg-white text-gray-800"
      }`}
    >
      <div className="flex h-full w-full items-center justify-between px-10">
        <div className="flex h-full items-center gap-14">
          <NavLink to="/">
            <div className="w-20">
              <DevLogo dark={!trans.includes(location.pathname)} />
            </div>
          </NavLink>
          <div
            className={`hidden items-center gap-6 lg:flex ${
              trans.includes(location.pathname)
                ? "text-gray-50"
                : "text-gray-800"
            }`}
          >
            {links.map((link) => (
              <NavLink
                to={link.route}
                key={link.id}
                className={({ isActive }) =>
                  `ease font-normal uppercase transition-colors duration-300 ${
                    !trans.includes(location.pathname) && "hover:text-[#0084d6]"
                  } ${isActive && "text-brand-blue"}`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </div>
        </div>
        <div
          className={`hidden items-center gap-8 lg:flex ${
            trans.includes(location.pathname) ? "text-gray-50" : "text-gray-800"
          }`}
        >
          <div className="flex items-center gap-6">
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `ease font-medium uppercase transition-colors duration-300 ${
                  !trans.includes(location.pathname) && "hover:text-[#0084d6]"
                } ${isActive && "text-brand-blue"}`
              }
            >
              about
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `ease font-medium uppercase transition-colors duration-300 ${
                  !trans.includes(location.pathname) && "hover:text-[#0084d6]"
                } ${isActive && "text-brand-blue"}`
              }
            >
              contact us
            </NavLink>
          </div>
          <div className="flex items-center gap-6">
            <button
              className={`group flex gap-1 ${
                trans.includes(location.pathname)
                  ? "text-gray-50"
                  : "text-gray-800 hover:text-[#0084f6]"
              }`}
            >
              <div className="font-bold">$0.00</div>
              <div className="relative">
                <ShoppingBagIcon className="h-5 w-5" />
                <div
                  className={`absolute -right-2 -top-1.5 flex h-4 w-4 items-center justify-center rounded-full ${
                    trans.includes(location.pathname)
                      ? "bg-white text-gray-800"
                      : "bg-gray-800 text-gray-50 group-hover:bg-[#0084f6]"
                  }`}
                >
                  <div className="text-xs">0</div>
                </div>
              </div>
            </button>
            <button>
              <UserIcon
                className={`h-5 w-5 ${
                  trans.includes(location.pathname)
                    ? "text-gray-50"
                    : "text-gray-800 hover:text-[#0084f6]"
                }`}
              />
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default NavigationBar
