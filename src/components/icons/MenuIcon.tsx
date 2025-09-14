import type { IconProps } from "./IconProps"
import { getIconSize, getIconColor } from "./IconProps"

export function MenuIcon({ size, color }: IconProps) {
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
          d="M256,0C114.617,0,0,114.618,0,256c0,141.383,114.617,256,256,256c141.382,0,256-114.617,256-256
		C512,114.618,397.382,0,256,0z M373.649,366.297H138.351V322.18h235.298V366.297z M373.649,278.055H138.351v-44.102h235.298
		V278.055z M373.649,189.828H138.351v-44.117h235.298V189.828z"></path>
      </g>
    </svg>
  )
}
