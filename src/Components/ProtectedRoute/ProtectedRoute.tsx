import type { RootState } from "../../main";
import { Navigate, Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux'

export default function ProtectedRoute() {
 const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated)

  if (!isAuthenticated) {
    return <Navigate to="/signin" replace />
  }

  return <Outlet />
}
