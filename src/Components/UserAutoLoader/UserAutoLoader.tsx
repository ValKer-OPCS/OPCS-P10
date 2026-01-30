import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchUserProfile } from "../../Redux/userSlice";
import type { RootState, AppDispatch } from "../../main";

const UserAutoLoader = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const { token } = useSelector((state: RootState) => state.auth);
  const { user } = useSelector((state: RootState) => state.user);

  useEffect(() => {
    if (token && !user) {
      dispatch(fetchUserProfile({ token, navigate }));
    }
  }, [token, user, dispatch, navigate]);

  return null;
};

export default UserAutoLoader;
