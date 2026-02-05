import type { NavigateFunction } from "react-router-dom";
import type { Dispatch } from "@reduxjs/toolkit";
import { clearUser } from "../Redux/userSlice";
import { logout } from "../Redux/authSlice";

export const errorHandler = (navigate: NavigateFunction, dispatch: Dispatch, errorCode: number | string) => {
  const validErrorCodes = [400, 401, 403, 404, 500];
  const code = validErrorCodes.includes(Number(errorCode)) ? errorCode : 500;

  if (code === 401) {
    localStorage.clear();
    sessionStorage.clear();

    dispatch(clearUser());
    dispatch(logout());
    navigate(`/login`);
    return
  }


  navigate(`/error/${code}`);
};
