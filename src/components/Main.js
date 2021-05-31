import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography'
import {Paper,Card,CardActionArea,CardMedia,CardContent} from '@material-ui/core/'
import  '../css/temp.css'
import {Link} from 'react-router-dom'
import '../css/linkstyle.css'
import Route from 'react-router-dom'
import Header from './header'
import Pimage from "../photos/patient.png"
import Dimage from "../photos/doctor.png"
function Main() {
    const useStyles = makeStyles({
        root: {
          maxWidth: 500,
          marginTop : 50,
          marginLeft : 50,
        },
        media: {
          height: 140,
        },
        Card: {
            display : 'flex',
            justifyContent:'center'

        }
      });
      const classes = useStyles();
    return (
        <div>
        <Header item = "home"></Header>
            <div className={classes.Card}>
            <Link to="/usersignin" style={{ textDecoration: 'none'}}>
            <Card className={classes.root} >
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image={Pimage}
                title="Register As Client"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Client
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Sign Up As Client
                </Typography>
              </CardContent>
            </CardActionArea>
            </Card>
            </Link>
            <Link to="/serviceprovidersignin" style={{ textDecoration: 'none'}}>
            <Card className={classes.root} >
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image={Dimage}
                title="Register As Service Provider"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Service Provider
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Sign Up As Service Provider
                </Typography>
              </CardContent>
            </CardActionArea>
            </Card>
            </Link>
            
        </div>
        </div>
       
    )
}

export default Main
