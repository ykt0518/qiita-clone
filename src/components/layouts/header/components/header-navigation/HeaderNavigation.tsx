import { Link } from "react-router"
import { COMMON_NAVIGATION, AUTH_NAVIGATION } from "./HeaderNavigationItems"

export function HeaderNavigation({ links }: { links: typeof COMMON_NAVIGATION | typeof AUTH_NAVIGATION }) {
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
                className="relative inline-block py-0.5 px-4 text-gray-500 font-medium hover:text-gray-900 duration-300">
                {link.label}
                <span className="block w-full h-0.5 bg-green-950 opacity-0 active:opacity-100"></span>
              </a>
            </li>
          ) : link.to ? (
            <li>
              <Link
                to={link.to}
                className="relative inline-block py-0.5 px-4 text-gray-500 font-medium hover:text-gray-900 duration-300">
                {link.label}
                <span className="block w-full h-0.5 bg-green-950 opacity-0 active:opacity-100"></span>
              </Link>
            </li>
          ) : undefined
        )}
      </ul>
    </nav>
  )
}
