import "./Login.scss";
import { Link } from "react-router-dom"
import { LogoIcon } from "../../../shared/icons/Logo/LogoIcon"


export const Login = () => {
  return (
	<>

<div className='box'>
			<div className='login'>
				<LogoIcon />
				<div className='login__desc'>Enjoy the newest movies</div>
				<Link to='/home'>
					<button className='login-button'>Log in</button>
				</Link>
				<div>
					No account? <span> Sign up</span>
				</div>
			</div>
		</div>
  </>
  )
}
