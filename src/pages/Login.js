import React, {Fragment, useState, useEffect} from 'react';
import {
	FormControl,
	TextField,
	FormLabel,
	FormHelperText,
	Button,
} from '@mui/material';

//Redux
import {updateCurrentPage} from '../redux/dataActions'
import {connect} from 'react-redux'

let Login = (props) => {

    const [show, setShow] = useState(false)
    const {data: {currentPage}} = props;

    useEffect(()=> {
        if (currentPage == 2){
            setShow(true)
        } else {
            setShow(false)
        }

    }, [currentPage])

    if (show) {
	return (
		<div id='LOGIN'>
			<FormControl>
				<FormLabel className='form-heading'>Sign Up</FormLabel>
				<br />
				<br />
				<TextField
					id='form-firstname'
					label='First Name'
					variant='standard'
				/>
				<br />
				<TextField
					id='form-lastname'
					label='Fast Name'
					variant='standard'
				/>
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
				<Button variant='contained'>SIGN UP</Button>

				<br />
				<br />
				<FormHelperText id='my-helper-text'>
					We'll never share your email or password.
				</FormHelperText>
			</FormControl>
		</div>
	)
    } else {
        return (
            <Fragment></Fragment>
        )
    }
};

const mapStateToProps = (state) => ({
    data: state.data 
})

const mapActionsToProps = {
    updateCurrentPage
}

export default connect(mapStateToProps, mapActionsToProps)(Login);
