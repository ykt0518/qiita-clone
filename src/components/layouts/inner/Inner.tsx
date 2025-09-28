import { cva } from "class-variance-authority"
import { cn } from "@/lib/utils"

type InnerProps = {
  width: "md" | "lg" | "auto"
  children: React.ReactNode
}

const InnerVariants = cva("w-full mx-auto", {
  variants: {
    width: {
      md: "max-w-[1040px]",
      lg: "max-w-[1656px]",
      auto: "max-w-auto",
    },
  },
})

export function Inner({ width, children }: InnerProps) {
  return <div className={cn(InnerVariants({ width }))}>{children}</div>
}
