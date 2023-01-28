import { ReactElement } from 'react'

type RouteProps = {
  path?: string
  element: ReactElement
  index?: boolean
  children?: (typeof Route)[]
}

export function Route({
  path,
  element,
  index,
  children,
}: RouteProps): ReactElement {
  return <div />
}
