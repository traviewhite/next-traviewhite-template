import { motion } from 'framer-motion'

export const user = 'next-traviewhite-template'

const variant = {
  initial: {
    opacity: 0,
    transition: { duration: 0.2, ease: 'easeInOut' },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.2, ease: 'easeInOut' },
  },
  enter: {
    opacity: 1,
    transition: { duration: 0.2, ease: 'easeInOut' },
  },
}

const Layout = ({ children }) => {
  return (
    <motion.div className='container'>
      <motion.div initial='initial' animate='enter' exit='exit' variants={variant}>
        {children}
      </motion.div>
      <footer>
        <p>
          © {new Date().getFullYear()} {user}
        </p>
        <a
          href='https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
          target='_blank'
          rel='noopener noreferrer'
        >
          Powered by <img src='/vercel.svg' alt='Vercel Logo' className='logo' />
        </a>
      </footer>
    </motion.div>
  )
}

export default Layout
