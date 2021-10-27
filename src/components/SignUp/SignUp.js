import React, {useState, useContext} from 'react';
import {Card, CardHeader, CardContent, Typography,  FormControl, InputLabel, Select, MenuItem, Grid, TextField, Button, Link} from '@material-ui/core';
import useStyles  from './styles';
import {AuthContext} from '../../context/AuthContext';
import {useHistory} from 'react-router-dom';

const initialFormState = {
    email: '',
    password: '',
    confirmPassword: '',
}

const SignUp = () => {
    const styles = useStyles();
    const history = useHistory();
    const {signUp, currentUser} = useContext(AuthContext);

    const [formState, setFormState] = useState(initialFormState)

    const signUpClicked = () => {
        if(isSubmit()) {
            signUp(formState, (success) => {
                success && history.replace('/login');
            });
        }
    }

    const isSubmit = () => {

        // Can add more Validations here but keeping it simple right now :)
        if(formState.password !== formState.confirmPassword) {
            alert('Passwords Do not match');
            return;
        }
        if(formState.email.length && formState.password.length && formState.confirmPassword.length 
            && formState.password === formState.confirmPassword) {
            return true;
        }
        alert('Please fill all details correctly');
        return false;
    }

    return (
        <div>
            <Grid container spacing={2} className={styles.container}>
                <Grid item xs={6}>
                    <Card>
                        <CardHeader title={'SIGN UP'}/>
                        <CardContent>
                            <FormControl fullWidth>
                                <TextField type="text" label="Email" fullWidth  onChange={(e) => {setFormState({...formState, email: e.target.value})}} />
                            </FormControl>
                            <FormControl fullWidth>
                                <TextField type="text" label="Password" fullWidth  onChange={(e) => {setFormState({...formState, password: e.target.value})}} />
                            </FormControl>
                            <FormControl fullWidth>
                                <TextField type="text" label="Confirm Password" fullWidth  onChange={(e) => {setFormState({...formState, confirmPassword: e.target.value})}} />
                            </FormControl>
                            <FormControl fullWidth>

                             <Button className={styles.button} variant="outlined" color="primary" fullWidth onClick={signUpClicked}>Sign Up</Button>
                            </FormControl>
                            <Typography className={styles.txt}>Already have an account? <Link onClick={() => {history.replace('/login')}}>Log In</Link></Typography> 
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
            
        </div>
    )
}

export default SignUp
