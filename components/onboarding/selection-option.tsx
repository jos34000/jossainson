import { motion } from "framer-motion"

export function SelectionOption({
  children,
  selected,
  onClick,
  ...props
}: Readonly<{
  children: React.ReactNode
  selected: boolean
  onClick: () => void
}>) {
  return (
    <motion.div
      onClick={onClick}
      {...props}
      className={`relative rounded-lg border-2 p-4 cursor-pointer transition-all backdrop-blur-sm overflow-hidden ${
        selected
          ? "border-primary bg-primary/10 shadow-[0_0_15px_rgba(var(--primary-rgb),0.15)]"
          : "border-border hover:border-primary/50 bg-card/30"
      }`}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      {children}

      {selected && (
        <>
          <motion.div
            className="absolute top-2 right-2 w-3 h-3 bg-primary rounded-full"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 500, damping: 15 }}
          />
          <motion.div
            className="absolute inset-0 bg-primary/5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          />
          <motion.div
            className="absolute bottom-0 left-0 right-0 h-1.5 bg-primary"
            initial={{ scaleX: 0, originX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 20,
              delay: 0.1,
            }}
          />
          <motion.div
            className="absolute inset-0 bg-gradient-to-tr from-primary/0 via-primary/0 to-primary/10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          />
        </>
      )}
    </motion.div>
  )
}
