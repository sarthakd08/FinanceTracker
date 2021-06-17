import React, {useState, useContext} from 'react';
import {Card, CardHeader, CardContent, Typography,  FormControl, InputLabel, Select, MenuItem, Grid, TextField, Button, Link} from '@material-ui/core';
import useStyles  from './styles';
import {AuthContext} from '../../context/AuthContext';
import {useHistory} from 'react-router-dom'

const initialFormState = {
    email: '',
    password: '',
    // confirmPassword: '',
}

const Login = () => {
    const styles = useStyles();
    const history = useHistory();
    const {logIn, currentUser} = useContext(AuthContext);

    const [formState, setFormState] = useState(initialFormState)

    const LogInClicked = () => {
        if(isSubmit()) {
            logIn(formState, (success) => {
                success && history.replace('/');
            });
        }
    }

    const isSubmit = () => {

        // Can add more Validations here but keeping it simple right now :)
        // if(formState.password !== formState.confirmPassword) {
        //     alert('Passwords Do not match');
        //     return;
        // }
        // if(formState.email.length && formState.password.length && formState.confirmPassword.length 
        //     && formState.password === formState.confirmPassword) {
        //     return true;
        // }
        // alert('Please fill all details correctly');
        // return false;
        return true;
    }

    return (
        <div>
            <Grid container spacing={2} className={styles.container}>
                <Grid item xs={6}>
                    <Card>
                        <CardHeader title={'Log In'}/>
                        <CardContent>
                            <FormControl fullWidth>
                                <TextField type="text" label="Email" fullWidth  onChange={(e) => {setFormState({...formState, email: e.target.value})}} />
                            </FormControl>
                            <FormControl fullWidth>
                                <TextField type="text" label="Password" fullWidth  onChange={(e) => {setFormState({...formState, password: e.target.value})}} />
                            </FormControl>
                            <FormControl fullWidth>

                             <Button className={styles.button} variant="outlined" color="primary" fullWidth onClick={LogInClicked}>Log In</Button>
                            </FormControl>
                            <Typography className={styles.txt}>Need an account? <Link onClick={() => {history.replace('/signup')}}>Sign Up</Link></Typography> 
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
            
        </div>
    )
}

export default Login;
