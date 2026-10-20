import { motion } from "framer-motion"
import "../css/App.css"

interface CardProps {
  image: string
  title: string
  description: string
  delay?: number
}

export default function Card({ image, title, description, delay = 0 }: CardProps) {
  return (
    <motion.div
      className="card"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0, margin: "0px 0px 15% 0px" }}
      transition={{ duration: 0.5, ease: "easeOut", delay }}
      style={{ willChange: "transform, opacity", boxShadow: "0px 0px 0px rgba(55, 188, 126, 0)" }}
      whileHover={{
        y: -5,
        transition: { duration: 0.3, ease: "easeOut" },
        boxShadow: "0px 10px 30px rgba(55, 188, 126, 0.297)",
      }}
    >
      <div className="card-image-wrapper">
        <img src={image} alt={title} decoding="async"className="cardimage" />
      </div>

      <div className="cardcontent">
        <h3 className="cardtitle">{title}</h3>
        <p className="carddescription">{description}</p>
      </div>
    </motion.div>
  )
}