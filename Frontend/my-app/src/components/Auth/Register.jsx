import { useState, useEffect } from 'react';
import BgImage from './BgImage';
import { Helmet } from 'react-helmet';


const Register = (props) => {
	

	return (
		<>
			<Helmet>
				<title>User Register</title>
				<meta name='description' content='User register form' />
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
									<h3 className='form-heading'>Register</h3>
								</div>
								<div className='group'>
									<input
										type='text'
										name='name'
										className='group__control'
										placeholder='Enter Name'
										
									/>
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
export default Register;
