import { AnimatePresence, motion } from 'framer-motion'
import { Outlet, useLocation } from 'react-router-dom'

const pageVariants = {
  initial: { opacity: 0, x: 10 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -10 },
}

const pageTransition = {
  duration: 0.25,
  ease: [0.32, 0.72, 0, 1],
  opacity: { duration: 0.15 },
}

const Layout = () => {
  const location = useLocation()

  return (
    <div className="min-h-screen overflow-hidden">
      <main className="h-screen">
        <div className="relative h-full">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={location.pathname}
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={pageTransition}
              className="absolute inset-0 overflow-y-auto"
              style={{
                willChange: 'transform, opacity',
              }}
            >
              <Outlet />
            </motion.div>
          </AnimatePresence>
        </div>
      </main>
    </div>
  )
}

export default Layout
