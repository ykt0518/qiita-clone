import type { IconProps } from "./IconProps"
import { getIconSize, getIconColor } from "./IconProps"

export function PencilIcon({ size, color }: IconProps) {
  const iconSize = getIconSize(size)
  const iconColor = getIconColor(color)

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      width={iconSize}
      height={iconSize}
      className={`${iconColor}`}
      fill="currentColor">
      <g>
        <path
          d="M494.56,55.774l-38.344-38.328c-23.253-23.262-60.965-23.253-84.226,0l-35.878,35.878l122.563,122.563
		l35.886-35.878C517.814,116.747,517.814,79.044,494.56,55.774z"></path>
        <polygon points="0,389.435 0,511.998 122.571,511.998 425.246,209.314 302.691,86.751"></polygon>
      </g>
    </svg>
  )
}
