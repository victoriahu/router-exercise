import { History } from 'history'
import React, { useContext, ReactElement, ReactNode, useEffect } from 'react'

type RouterProps = {
  history: History
  children: ReactNode
}

// Allow a custom basename to be passed to the `Router`. This property should
// allow all paths to be relative to this path prefix. For example, make it so
// `/home` and `/about` work for `/app/home` and `/app/about`.

export function Router({ history, children }: RouterProps): ReactElement {
  return <div>{children}</div>
}

export * from './outlet'
export * from './route'
export * from './routes'
export * from './link'
export * from './hooks'
