import type { IconProps } from "./IconProps"
import { getIconSize, getIconColor } from "./IconProps"

export function StopIcon({ size, color }: IconProps) {
  const iconSize = getIconSize(size)
  const iconColor = getIconColor(color)

  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        width={iconSize}
        height={iconSize}
        className={`${iconColor}`}
        fill="currentColor">
        <g>
          <path
            d="M158.367,0H41.299C20.699,0,3.842,16.857,3.842,37.457v437.086c0,20.6,16.857,37.457,37.457,37.457h117.068
		c20.6,0,37.457-16.857,37.457-37.457V37.457C195.824,16.857,178.967,0,158.367,0z"></path>
          <path
            d="M470.705,0H353.637c-20.6,0-37.456,16.857-37.456,37.457v437.086c0,20.6,16.856,37.457,37.456,37.457h117.068
		c20.601,0,37.453-16.857,37.453-37.457V37.457C508.158,16.857,491.306,0,470.705,0z"></path>
        </g>
      </svg>
    </>
  )
}
