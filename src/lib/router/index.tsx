import { History } from 'history'
import { ReactElement, ReactNode } from 'react'

type RouterProps = {
  history: History
  children: ReactNode
}

export function Router({ history, children }: RouterProps): ReactElement {
  return <div />
}

export * from './outlet'
export * from './route'
export * from './routes'
export * from './link'
export * from './hooks'
