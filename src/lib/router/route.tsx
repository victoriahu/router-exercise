import React, { ReactElement, useEffect } from 'react'
import { useLocation } from './hooks'
import { RouterContext } from '../../App'

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
  // const route = useLocation()
  const { route } = React.useContext(RouterContext)

  useEffect(() => {
    console.log('halp', route)
  }, [route])

  if (route !== path) {
    return <></>
  }
  return <>{element}</>
}
