import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import MainLayout from '../components/layouts/MainLayout'
import Home from '../pages/Home/Home'

export default function MainRoutes() {
      const router = createBrowserRouter(
            createRoutesFromElements(
                  <Route path="/" element={<MainLayout />}>
                        <Route path="/" element={<Home />} />
                        {/* <Route path="login" element={<LoginPage />} />
                        <Route path="register" element={<RegisterPage />} /> */}
                  </Route>
            )
      )
      return (
            <div className="App">
                  <RouterProvider router={router} />
            </div>
      )
}
