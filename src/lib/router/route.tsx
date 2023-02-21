import React, { ReactElement, useEffect } from 'react'
import { useLocation } from './hooks'
import { RouterContext } from '../../App'

type RouteProps = {
  path?: string
  element: ReactElement
  index?: boolean
  children?: (typeof Route)[]
  basename?: string
}

export function Route({
  path,
  element,
  index,
  children,
  basename,
}: RouteProps): ReactElement {
  // const route = useLocation()
  const { route } = React.useContext(RouterContext)

  const pathWithBase = `${basename}${path}`

  useEffect(() => {
    console.log('halp', route, pathWithBase)
  }, [route])

  if (!!route.includes(pathWithBase)) {
    return <></>
  }

  if (route !== path) {
    return <></>
  }
  return <>{element}</>
}
