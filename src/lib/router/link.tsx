import { ReactElement, ReactNode } from 'react'
import { useNavigate } from './hooks'

type LinkProps = {
  to: string
  children: ReactNode
}

export function Link({ to, children }: LinkProps): ReactElement {
  const navigate = useNavigate()

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault()
    navigate(to)
  }
  return <a onClick={handleClick}>{children}</a>
}
