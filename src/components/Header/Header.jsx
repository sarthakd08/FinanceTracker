import React, {useContext} from 'react'
import useStyles from './styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import {AuthContext} from '../../context/AuthContext'
import {useHistory} from 'react-router-dom'

function Header() {
    const classes = useStyles();
    const {logOut, currentUser} = useContext(AuthContext);
    const history = useHistory();

    const handleLogout = async () => {
        console.log('handleLogout', currentUser);
        if(currentUser?.email) {
            await logOut();
            history.push('/login')
        }
    }

    return (
            <AppBar className={classes.root} position="sticky">
                <Toolbar>
                <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" className={classes.title}>
                    Finance Tracker
                </Typography>
                {currentUser?.email ? <Button color="inherit" onClick={handleLogout}>Logout</Button> : <Button color="inherit" onClick={() => history.push('/login')}>Login</Button>}
                
                </Toolbar>
            </AppBar>
    )
}

export default Header
