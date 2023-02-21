import React, { useState, useEffect } from 'react'
import { createBrowserHistory, Location, State } from 'history'

import { Router, Routes, Route, Link } from '~/lib/router'
import { Home } from '~/features/home'
import { About } from '~/features/about'

export const history = createBrowserHistory()

export const RouterContext = React.createContext({
  route: history.location.pathname,
})

function App() {
  const [route, setRoute] = useState(history.location.pathname)

  const handleRouteChange = (location: { location: any }) => {
    setRoute(location.location.pathname)
  }

  useEffect(() => {
    let unlisten = history.listen(handleRouteChange)
    return () => {
      unlisten()
    }
  }, [])

  return (
    <RouterContext.Provider value={{ route }}>
      <h1>Router Exercise</h1>
      <Router history={history}>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </RouterContext.Provider>
  )
}

export default App
