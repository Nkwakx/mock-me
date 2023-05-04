import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import MainLayout from '../layouts/MainLayout'
import { RegisterPage } from '../pages/auth/RegisterPage'
import { LoginPage } from '../pages/auth/LoginPage'

export default function MainRoutes() {
      const router = createBrowserRouter(
            createRoutesFromElements(
                  <Route path="/" element={<RegisterPage />}>
                        <Route path="register" element={<RegisterPage />} />
                        <Route path="login" element={<LoginPage />} />
                  </Route>
            )
      )
      return (
            <div className="App">
                  <RouterProvider router={router} />
            </div>
      )
}
