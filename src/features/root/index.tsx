import { Outlet } from '~/lib/router'

export function Root() {
  return (
    <div>
      <h1>This is the root</h1>
      <Outlet />
    </div>
  )
}
