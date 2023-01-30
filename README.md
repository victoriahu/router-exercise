# Router Exercise

1. Using the empty Router, Routes, Route, and Link components in `lib/router`,
   along with the
   [`history`](https://github.com/remix-run/history/blob/3e9dab413f4eda8d6bce565388c5ddb7aeff9f7e/docs/getting-started.md)
   library, create a router that allows a user to navigate between the Home and
   About routes by clicking the `Links`.
2. Create a `useNavigate` hook that returns a `navigate` function that allows
   programmatic routing between the About and Home components. This hook has
   been started in `lib/router/hooks`.
3. Create a `useLocation` hook that provides the updated `location` based on
   `history` updates. This hook has also been started in `lib/router/hooks`.
4. Allow a custom basename to be passed to the `Router`. This property should
   allow all paths to be relative to this path prefix. For example, make it so
   `/home` and `/about` work for `/app/home` and `/app/about`.
5. Refactor the routes to use the `Root` component to render its children via
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
