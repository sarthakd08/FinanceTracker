import { makeStyles } from '@material-ui/core/styles';
import { red, green } from '@material-ui/core/colors';

const aa = {
    background: "linear-gradient(45deg, green 30%, blue 90%)"
  };
export default makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      background: '#12232E',
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    
  }));

  