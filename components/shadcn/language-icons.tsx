"use client"

import { motion } from "framer-motion"
import ReactCountryFlag from "react-country-flag"

interface LanguageIconProps {
  selected?: boolean
}

export function EnglishIcon({ selected = false }: Readonly<LanguageIconProps>) {
  return (
    <motion.div
      className="relative w-10 h-10 flex items-center justify-center"
      initial={{ scale: 1 }}
      animate={{ scale: selected ? 1.05 : 1 }}
      transition={{ type: "spring", stiffness: 300, damping: 15 }}
    >
      <ReactCountryFlag
        countryCode="US"
        svg
        style={{
          width: "32px",
          height: "32px",
        }}
        title="English"
      />
      {selected && (
        <motion.div
          className="absolute inset-0 rounded-md bg-primary/10"
          initial={{ scale: 0 }}
          animate={{ scale: [0, 1.2, 1] }}
          transition={{ duration: 0.4 }}
        />
      )}
    </motion.div>
  )
}

export function FrenchIcon({ selected = false }: Readonly<LanguageIconProps>) {
  return (
    <motion.div
      className="relative w-10 h-10 flex items-center justify-center"
      initial={{ scale: 1 }}
      animate={{ scale: selected ? 1.05 : 1 }}
      transition={{ type: "spring", stiffness: 300, damping: 15 }}
    >
      <ReactCountryFlag
        countryCode="FR"
        svg
        style={{
          width: "32px",
          height: "32px",
        }}
        title="Français"
      />
      {selected && (
        <motion.div
          className="absolute inset-0 rounded-md bg-primary/10"
          initial={{ scale: 0 }}
          animate={{ scale: [0, 1.2, 1] }}
          transition={{ duration: 0.4 }}
        />
      )}
    </motion.div>
  )
}

export function SpanishIcon({ selected = false }: Readonly<LanguageIconProps>) {
  return (
    <motion.div
      className="relative w-10 h-10 flex items-center justify-center"
      initial={{ scale: 1 }}
      animate={{ scale: selected ? 1.05 : 1 }}
      transition={{ type: "spring", stiffness: 300, damping: 15 }}
    >
      <ReactCountryFlag
        countryCode="ES"
        svg
        style={{
          width: "32px",
          height: "32px",
        }}
        title="Español"
      />
      {selected && (
        <motion.div
          className="absolute inset-0 rounded-md bg-primary/10"
          initial={{ scale: 0 }}
          animate={{ scale: [0, 1.2, 1] }}
          transition={{ duration: 0.4 }}
        />
      )}
    </motion.div>
  )
}
