import Button from '../../Components/Button/Button';
import Checkbox from '../../Components/Checkbox/Checkbox';
import TextField from '../../Components/TextField/TextField';


const Form = () => {
  return (
    <form>
        <TextField id="username" variant="input-wrapper" text="Username" type="text" />
					
				<TextField id="password" variant="input-wrapper" text="Password" type="password" />
					
				<Checkbox id="remember-me" variant="input-remember" text ="Remember me" />

				<Button type="submit" variant="sign-in-button" text="Sign In"/>
    </form>
  )
};

export default Form
