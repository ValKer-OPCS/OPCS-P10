import styles from './style.module.scss'

import { useDispatch, useSelector } from "react-redux";
import { useState, type FormEvent, useEffect } from "react";
import type { AppDispatch, RootState } from "../../main";
import { updateUsername } from '../../Redux/updateUsernameSlice';
import { useNavigate } from 'react-router-dom';


import FormTextField from '../../Components/FormTextField/FormTextField';
import Button from '../../Components/Button/Button';

type ModifyUserFormProps = {
  onClose: () => void
}

const ModifyUserForm = ({ onClose }: ModifyUserFormProps) => {
    
    const dispatch = useDispatch<AppDispatch>()
    const navigate = useNavigate();

    const { user } = useSelector((state: RootState) => state.user)
    const userNameDefault = user?.userName 
    const firstName = user?.firstName ?? ''
    const lastName = user?.lastName ?? ''

     const { loading, error } = useSelector((state: RootState) => state.modifyUser)


    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (!userName.trim() || userName.length > 20) return;

        const resultAction = await dispatch(updateUsername({ userName, navigate }));

        if (updateUsername.fulfilled.match(resultAction)) {
            onClose()
        }
    }

    const handleCancel = () => {
        setUserName(userNameDefault ?? '')
        onClose()
    }

    const [userName, setUserName] = useState<string>('')
    

    useEffect(() => {
    if (user?.userName) {
        setUserName(user.userName)
    }
}, [user])

    return (
        <form className={styles.formContainer} onSubmit={handleSubmit}>
            <h1>Edit user info</h1>

            <FormTextField id="userName" variant="username-change" text="User name: " type="text" value={userName} onChange={(e) => setUserName(e.target.value)} maxLength={20} />
            <FormTextField id="firstName" variant="username-change" text="First name: " type="text" value={firstName} disabled={true} />
            <FormTextField id="lastName" variant="username-change" text="Last name: " type="text" value={lastName} disabled={true} />

            

            <div className={styles.btnContainer} >
                <Button type="submit" variant="edit-button" text={'Save'} disabled={!userName.trim() || loading} />
                <Button type="button" variant="edit-button" text={'Cancel'} disabled={loading} onClick={handleCancel}/>
            </div>
            {error && <p className={styles.formError}>{error}</p>}



        </form>
    )
};

export default ModifyUserForm
