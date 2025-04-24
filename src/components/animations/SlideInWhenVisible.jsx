import { motion } from "framer-motion";

const SlideInWhenVisible = ({ children, direction = "left", delay = 0 }) => {
  const initialPosition = direction === "left" ? -100 : 100;

  return (
    <motion.div
      initial={{ x: initialPosition, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay }}
      viewport={{ once: true, amount: 0.2 }}
    >
      {children}
    </motion.div>
  );
};

export default SlideInWhenVisible;
