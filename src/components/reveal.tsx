import { motion, useReducedMotion  } from "framer-motion"
import type { ReactNode } from 'react'

type Direction = "up" | "down" | "left" | "right" | "none"

type RevealProps = {
  children: ReactNode
  delay?: number
  duration?: number
  direction?: Direction
  distance?: number 
  scale?: number
  blur?: number
  once?: boolean
  amount?: number
  className?: string
}


const getOffset = (direction: Direction, distance: number) => {
  switch (direction) {
    case "up":    return { x: 0, y: distance }    // slides up into place
    case "down":  return { x: 0, y: -distance }
    case "left":  return { x: distance, y: 0 }    // slides in from the right
    case "right": return { x: -distance, y: 0 }
    default:      return { x: 0, y: 0 }
  }
}

export function Reveal({
    children,
    delay = 0,
    duration = 0.7,
    direction = "up",
    distance = 24,
    scale = 1,
    blur = 0,
    once = true,
    amount = 0.2,
    className,
}: RevealProps) {
    const reduce = useReducedMotion()
    const { x, y } = reduce ? { x: 0, y: 0 } : getOffset(direction, distance)

    return (
        <motion.div
        className={className}
        initial={{
            opacity: 0,
            x,
            y,
            scale: reduce ? 1 : scale,
            filter: reduce ? "blur(0px)" : `blur(${blur}px)`,
        }}
        whileInView={{ opacity: 1, x: 0, y: 0, scale: 1, filter: "blur(0px)" }}
        viewport={{ once, amount, margin: "0px 0px -10% 0px" }}
        transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
        >
        {children}
        </motion.div>
    )
}