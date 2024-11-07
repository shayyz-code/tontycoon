import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import "./index.css"
import PageHome from "./pages/PageHome.tsx"
import PageEarn from "./pages/PageEarn.tsx"
import PageFrens from "./pages/PageFrens.tsx"
import PagePayout from "./pages/PagePayout.tsx"
import PageError from "./pages/PageError.tsx"
import App from "./App.tsx"

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <App />,
      errorElement: <PageError />,
      children: [
        { path: "/", element: <PageHome /> },
        {
          path: "/earn",
          element: <PageEarn />,
        },
        {
          path: "/frens",
          element: <PageFrens />,
        },
        {
          path: "/payout",
          element: <PagePayout />,
        },
      ],
    },
  ],
  {
    future: {
      v7_relativeSplatPath: true,
      v7_fetcherPersist: true,
      v7_normalizeFormMethod: true,
      v7_partialHydration: true,
      v7_skipActionErrorRevalidation: true,
    },
  }
)

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} future={{ v7_startTransition: true }} />
  </StrictMode>
)
