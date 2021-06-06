import React, {useContext} from 'react';
import {Card, CardHeader, CardContent, Typography,  FormControl, InputLabel, Select, MenuItem, Grid, TextField, Button, Link} from '@material-ui/core';
import useStyles  from './styles';
import {AuthContext} from '../../context/AuthContext';

const SignUp = () => {
    const styles = useStyles();
    const {signUp} = useContext(AuthContext);

    const signUpClicked = () => {
        signUp();
    }

    return (
        <div>
            <Grid container spacing={2}>
                <Grid item xs={6}>
                    <Card>
                        <CardHeader title={'SIGN UP'}/>
                        <CardContent>
                            <FormControl fullWidth>
                                <TextField type="text" label="Email" fullWidth  onChange={(e) => {}} />
                            </FormControl>
                            <FormControl fullWidth>
                                <TextField type="text" label="Password" fullWidth  onChange={(e) => {}} />
                            </FormControl>
                            <FormControl fullWidth>
                                <TextField type="text" label="Confirm Password" fullWidth  onChange={(e) => {}} />
                            </FormControl>
                            <FormControl fullWidth>

                             <Button className={styles.button} variant="outlined" color="primary" fullWidth onClick={signUpClicked}>Sign Up</Button>
                            </FormControl>
                            <Typography className={styles.txt}>Already have an account? <Link>Sign In</Link></Typography> 
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
            
        </div>
    )
}

export default SignUp
