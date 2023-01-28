# Router Exercise

1. Using the Router, Routes, Route, and Link components, along with the
   `history` library, create a router that allows a user to navigate between the
   Home and About routes.
2. Create a `useNavigate` hook that returns a `navigate` function that allows
   programmatic routing between the About and Home components.
3. Allow a custom basename to be passed to the `Router`. This property should
   allow all paths to be relative to this path prefix. For example, make it so
   `/home` and `/about` work for `/app/home` and `/app/about`.
4. Refactor the routes to use the `Root` component to render its children via
   the `Outlet` component. Add an `index` prop to the `Router` component for
   matching the index route. The routes should look like:

   ```jsx
   <Routes>
     <Route path="/" element={<Root />}>
       <Route index element={<Home />} />
       <Route path="about" element={<About />} />
     </Route>
   </Routes>
   ```
