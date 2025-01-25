import { useLocation, useOutlet } from 'react-router-dom'
import { CSSTransition, SwitchTransition } from 'react-transition-group'

const Layout = () => {
  const location = useLocation()
  const currentOutlet = useOutlet()

  return (
    <div className="min-h-screen overflow-hidden">
      <main className="h-screen">
        <div className="relative h-full">
          <SwitchTransition mode="out-in">
            <CSSTransition
              key={location.pathname}
              classNames="page"
              timeout={250}
              appear={true}
              unmountOnExit
            >
              <div className="absolute inset-0 overflow-y-auto">{currentOutlet}</div>
            </CSSTransition>
          </SwitchTransition>
        </div>
      </main>
    </div>
  )
}

export default Layout
