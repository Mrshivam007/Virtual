import {Link} from 'react-router-dom';
 import './login.css';
 import './util.css';
 import EmailIcon from '@mui/icons-material/Email';
 import LockIcon from '@mui/icons-material/Lock';
const Login = () => {
    return ( 
        <div>
            	<div class="limiter">
		<div class="container-login100">
			<div class="wrap-login100">
				<div className="login100-pic js-tilt" data-tilt>
					<img src="assets/img/login.png" alt="IMG" />
				</div>

				<form class="login100-form validate-form"style={{marginTop: '-8vh'}}>
					<span class="login100-form-title" >
						Member Login
					</span>

					<div class="wrap-input100 validate-input" data-validate = "Valid email is required: ex@abc.xyz">
						<input class="input100" type="text" name="email" placeholder="Email" />
						<span class="focus-input100"></span>
						<span class="symbol-input100">
							{/* <i class="fa fa-envelope" aria-hidden="true"></i> */}
							<EmailIcon />
						</span>
					</div>

					<div class="wrap-input100 validate-input" data-validate = "Password is required">
						<input class="input100" type="password" name="pass" placeholder="Password" />
						<span class="focus-input100"></span>
						<span class="symbol-input100">
							{/* <i class="fa fa-lock" aria-hidden="true"></i> */}
							<LockIcon />
						</span>
					</div>
					
					<div class="container-login100-form-btn">
						<button class="login100-form-btn">
							Login
						</button>
					</div>

					<div class="text-center p-t-12">
						<span class="txt1">
							Forgot
						</span>
						<a class="txt2" href="#">
							Username / Password?
						</a>
					</div>

					<div class="text-center p-t-136">
						<Link class="txt2" to='/signup'>
							Create your Account
							<i class="fa fa-long-arrow-right m-l-5" aria-hidden="true"></i>
						</Link>
					</div>
				</form>
			</div>
		</div>
	</div>
        </div>
     );
}
 
export default Login;