// components/motion/MotionComponents.js
// Reusable motion components with consistent animation behavior

import React from "react";
import { motion } from "framer-motion";
import {
  fadeInUp,
  fadeInRight,
  fadeInLeft,
  staggerContainer,
  hoverScale,
} from "./variants";

// Motion wrapper for entire sections
export const MotionSection = ({ children, className, delay = 0, ...props }) => (
  <motion.section
    className={className}
    variants={staggerContainer}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.1 }}
    transition={{ delay }}
    {...props}
  >
    {children}
  </motion.section>
);

// Motion wrapper for containers that stagger their children
export const MotionContainer = ({
  children,
  className,
  delay = 0,
  ...props
}) => (
  <motion.div
    className={className}
    variants={staggerContainer}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.1 }}
    transition={{ delay }}
    {...props}
  >
    {children}
  </motion.div>
);

// Text elements with fade-in animations
export const MotionHeading = ({
  children,
  className,
  variant = fadeInUp,
  delay = 0,
  ...props
}) => (
  <motion.h2
    className={className}
    variants={variant}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    transition={{ delay }}
    {...props}
  >
    {children}
  </motion.h2>
);

export const MotionParagraph = ({
  children,
  className,
  variant = fadeInUp,
  delay = 0,
  ...props
}) => (
  <motion.p
    className={className}
    variants={variant}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    transition={{ delay }}
    {...props}
  >
    {children}
  </motion.p>
);

// Interactive elements with hover effects
export const MotionButton = ({
  children,
  className,
  variant = fadeInUp,
  delay = 0,
  ...props
}) => (
  <motion.button
    className={className}
    variants={variant}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    whileHover={hoverScale}
    transition={{ delay }}
    {...props}
  >
    {children}
  </motion.button>
);

export const MotionLink = ({
  children,
  className,
  variant = fadeInUp,
  delay = 0,
  href,
  ...props
}) => (
  <motion.a
    href={href}
    className={className}
    variants={variant}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    whileHover={hoverScale}
    transition={{ delay }}
    {...props}
  >
    {children}
  </motion.a>
);

// Media elements
export const MotionImage = ({
  src,
  alt,
  className,
  variant = fadeInLeft,
  delay = 0,
  ...props
}) => (
  <motion.img
    src={src}
    alt={alt}
    className={className}
    variants={variant}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    transition={{ delay }}
    whileHover={hoverScale}
    {...props}
  />
);

// Div wrappers
export const MotionDiv = ({
  children,
  className,
  variant = fadeInUp,
  delay = 0,
  ...props
}) => (
  <motion.div
    className={className}
    variants={variant}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    transition={{ delay }}
    {...props}
  >
    {children}
  </motion.div>
);
