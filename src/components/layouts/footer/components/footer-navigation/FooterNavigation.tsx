import { Link } from "react-router"
import type { FooterNavigationProps } from "./FooterNavigationProps"
import { FOOTER_NAVIGATION } from "./FooterNavigationItems"

export function FooterNavigation() {
  return (
    <nav className="flex gap-12">
      {FOOTER_NAVIGATION.map((list: FooterNavigationProps) => (
        <div>
          <p className="text-xl font-bold">{list.title}</p>
          <ul className="mt-2">
            {list.items.map(item =>
              item.external ? (
                <li key={crypto.randomUUID()}>
                  <a href={item.href} target="_blank" rel="noopener noreferrer" className="block py-1 hover:underline">
                    {item.label}
                  </a>
                </li>
              ) : item.to ? (
                <li key={crypto.randomUUID()}>
                  <Link to={item.to} className="block py-1 hover:underline">
                    {item.label}
                  </Link>
                </li>
              ) : undefined
            )}
          </ul>
        </div>
      ))}
    </nav>
  )
}
