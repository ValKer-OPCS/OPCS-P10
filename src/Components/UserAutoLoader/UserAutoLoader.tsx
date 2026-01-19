import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchUserProfile } from "../../Redux/userSlice"
import type { RootState, AppDispatch } from "../../main"

export default function AppInitializer() {
  const dispatch = useDispatch<AppDispatch>()
  
  const { token } = useSelector((state: RootState) => state.auth)
  const { user } = useSelector((state: RootState) => state.user)

  useEffect(() => {
    if (token && !user) {
      dispatch(fetchUserProfile(token))
    }
  }, [token, user, dispatch])

  return null
}
