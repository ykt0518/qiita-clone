import { Link, useLocation } from "react-router"
import { COMMON_NAVIGATION, AUTH_NAVIGATION } from "./HeaderNavigationItems"
import { TabIcon } from "@/components/icons"

export function HeaderNavigation({ links }: { links: typeof COMMON_NAVIGATION | typeof AUTH_NAVIGATION }) {
  const location = useLocation()

  return (
    <nav className="mt-4">
      <ul className="flex items-center">
        {links.map(link =>
          link.external ? (
            <li key={crypto.randomUUID()}>
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="relative inline-flex gap-2 items-center py-0.5 px-4 text-gray-500 font-medium hover:text-gray-900 duration-300">
                {link.label}
                <span className="flex-shrink-0">
                  <TabIcon size="sm" color="gray" />
                </span>
              </a>
            </li>
          ) : link.to ? (
            <li>
              <Link
                to={link.to}
                className="relative inline-block pt-1 pb-2 px-4 text-gray-500 font-medium hover:text-gray-900 duration-300">
                {link.label}
                {location.pathname === link.to && (
                  <span className="absolute bottom-0 left-0 w-full h-1 bg-green-800 rounded-t"></span>
                )}
              </Link>
            </li>
          ) : undefined
        )}
      </ul>
    </nav>
  )
}
