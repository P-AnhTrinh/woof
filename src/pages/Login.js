import React from 'react';
import { FormControl } from '@mui/material';
import { TextField } from '@mui/material';
import { FormLabel } from '@mui/material';
import { FormHelperText } from '@mui/material';

let Login = (props) => {
	return (
		<div id='LOGIN'>
			<FormControl>
				<FormLabel component='legend'>Sign Up</FormLabel>
				<br />
				<TextField
					id='form-email'
					label='Email Address'
					variant='standard'
				/>
				<br />
				<TextField
					id='form-password'
					label='Password'
					type='password'
					variant='standard'
				/>

				<br />
				<br />
				<FormHelperText id='my-helper-text'>
					We'll never share your email or password.
				</FormHelperText>
			</FormControl>
		</div>
	);
};

export default Login;
