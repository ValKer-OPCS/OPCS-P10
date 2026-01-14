import { useState, type FormEvent, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../../main";
import { login } from '../../Redux/authSlice'
import { useNavigate } from 'react-router-dom'

import Button from '../../Components/Button/Button';
import Checkbox from '../../Components/Checkbox/Checkbox';
import FormTextField from '../../Components/FormTextField/FormTextField';

const LoginForm = () => {
  const dispatch = useDispatch<AppDispatch>()
  const navigate = useNavigate()

  const authLoading = useSelector((state: RootState) => state.auth.loading)
  const userLoading = useSelector((state: RootState) => state.user.loading)
  const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated)
  const user = useSelector((state: RootState) => state.user.user)

  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    dispatch(login({ email, password }))
  }

  useEffect(() => {
    if (isAuthenticated && user) {
      navigate('/account', { replace: true })
    }
  }, [isAuthenticated, user, navigate])

  const loading = authLoading || userLoading

  return (
    <form onSubmit={handleSubmit}>
      <FormTextField id="username" variant="input-wrapper" text="Username" type="text" value={email} onChange={(e) => setEmail(e.target.value)} />

      <FormTextField id="password" variant="input-wrapper" text="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>

      <Checkbox id="remember-me" variant="input-remember" text="Remember me" />

      <Button type="submit" variant="sign-in-button" text={loading ? 'Loading...' : 'Sign In'} disabled={loading} />
    </form>
  );
};

export default LoginForm;
