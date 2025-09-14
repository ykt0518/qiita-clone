import type { IconProps } from "./IconProps"
import { getIconSize, getIconColor } from "./IconProps"

export function TabIcon({ size, color }: IconProps) {
  const iconSize = getIconSize(size)
  const iconColor = getIconColor(color)

  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 48 48"
        width={iconSize}
        height={iconSize}
        className={`${iconColor}`}
        fill="currentColor">
        <rect width="48" height="48" />
        <polyline points="27 12 36 12 36 21" />
        <polyline points="32 26 32 34 14 34 14 16 22 16" />
        <line x1="24" y1="24" x2="35" y2="13" />
      </svg>
    </>
  )
}
