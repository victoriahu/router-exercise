import { Location } from 'history'
import { history } from '../../App'

type Navigate = (to: string) => void

// TODO: Create a `useNavigate` hook that returns a `navigate` function that allows
// programmatic routing between the About and Home components.
export function useNavigate(): Navigate {
  return function (to: string) {
    history.push(to)
  }
}

//  Create a `useLocation` hook that provides the updated `location` based on `history` updates.
export function useLocation(): Location {
  return history.location
}
