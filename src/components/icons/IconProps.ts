export type IconProps = {
  size: "xs" | "sm" | "md" | "lg" | "xl"
  color: "black" | "gray" | "white" | "primary" | "secondary"
}

export const getIconSize = (size: IconProps["size"]): string => {
  switch (size) {
    case "xs":
      return "14"
    case "sm":
      return "16"
    case "md":
      return "20"
    case "lg":
      return "24"
    case "xl":
      return "32"
    default:
      return size satisfies never
  }
}

export const getIconColor = (color: IconProps["color"]): string => {
  switch (color) {
    case "black":
      return "text-black"
    case "gray":
      return "text-gray-500"
    case "white":
      return "text-white"
    case "primary":
      return "text-green-700"
    case "secondary":
      return "text-blue-800"
    default:
      return color satisfies never
  }
}
