import { useLocation, useNavigate } from '~/lib/router/hooks'

export function About() {
  const navigate = useNavigate()
  const location = useLocation()

  return (
    <div>
      <h1>About</h1>
      <p>Location.pathname is: {location.pathname}</p>
      <button type="button" onClick={() => navigate('/home')}>
        Navigate
      </button>
    </div>
  )
}
