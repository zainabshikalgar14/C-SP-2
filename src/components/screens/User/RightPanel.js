import React from 'react'
import {useState,useEffect} from 'react'
import {Paper,Button,Typography,Card,CardContent} from '@material-ui/core'
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import MyDetails from "./MyDetails"
import ServiceProviderDetails from "./ServiceProviderDetails"
import TakeApp from "./TakeApp"
const style = {
    TextField : {width : '400px' }
}
function RightPanel(props) {
    return (
        <div>
        <Paper style={props.style.Paper}>
            {props.action == 0 ? <Typography variant="h2" component="h2" color = 'textSecondary'> 
            User Dashboard
       </Typography> : 
            props.action == 1 ? <TakeApp accAdd = {props.accAdd}></TakeApp>:
            props.action == 2 ? <MyDetails accAdd = {props.accAdd}></MyDetails> : 
            props.action == 3 ? <ServiceProviderDetails accAdd = {props.accAdd}></ServiceProviderDetails> :""
        }
        </Paper>
        </div>
    )
}

export default RightPanel
