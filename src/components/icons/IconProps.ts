export type IconProps = {
  size: "sm" | "md" | "lg"
  color: "black" | "gray" | "white" | "primary"
}

export const getIconSize = (size: IconProps["size"]): string => {
  switch (size) {
    case "sm":
      return "16"
    case "md":
      return "20"
    case "lg":
      return "24"
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
    default:
      return color satisfies never
  }
}
