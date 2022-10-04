import { useState, useEffect } from 'react';
import BgImage from './BgImage';
import { Helmet } from 'react-helmet';
import { useSelector, useDispatch } from 'react-redux';

const Login = () => {
	
	return (
		<>
			<Helmet>
				<title>Blog-User Login</title>
				<meta name='description' content='User login form' />
			</Helmet>
			<div className='row mt-80'>
				<div className='col-8'>
					<BgImage />
				
				</div>
				<div className='col-4'>
					<div className='account'>
						<div className='account__section'>
							<form >
								<div className='group'>
									<h3 className='form-heading'>Login</h3>
								</div>
								<div className='group'>
									<input
										type='email'
										name='email'
										
										className='group__control'
										placeholder='Enter Email'
									/>
								</div>
								<div className='group'>
									<input
										type='password'
										name='password'
										
										className='group__control'
										placeholder='Create Password'
									/>
								</div>
								<div className='group'>
									<input
										type='submit'
										className='btn btn-default btn-block'
										
									/>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
export default Login;
