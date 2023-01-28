import { useState } from 'react'
import history from 'history/browser'

import { Router, Routes, Route, Link } from '~/lib/router'
import { Home } from '~/features/home'
import { About } from '~/features/about'

function App() {
  return (
    <div>
      <h1>Router Exercise</h1>
      <Router history={history}>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
