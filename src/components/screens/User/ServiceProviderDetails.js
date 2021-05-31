import React from 'react'
import {useState,useEffect} from 'react'
import {Paper,Button,Typography,Card,CardContent,CircularProgress} from '@material-ui/core'
import TextField from '@material-ui/core/TextField';
import {Table,TableContainer,TableHead,TableRow,TableCell,TableBody} from "@material-ui/core"
import { makeStyles } from '@material-ui/core/styles';
import web3 from '../../../web3'
import contract from '../../../contract'
import ipfs from '../../../ipfs'
import ShowServiceProviders from './ShowServiceProviders'
function ServiceProviderDetails({accAdd}) {
    const[show,setShow] = useState(false);
    const logdata = []
    const [tabledata,settabledata] = useState();
    useEffect(() => {
        async function getDocs(){
        await contract.getPastEvents('ServiceProviderAdded',{
            fromBlock:0
        }).then(async function(events){
                events.forEach(element =>{
                    const object = {}
                    object.docAdd = element.returnValues[0]; 
                    //console.log(element.returnValues[0])
                    logdata.push(object)
                })
                settabledata(logdata)
                setShow(true);
        });
           
       }
       getDocs()

    },[show])
    return (
        <div>
            {show ? <ShowServiceProviders data = {tabledata} showData = {show} accAdd = {accAdd}></ShowServiceProviders> :
                <CircularProgress></CircularProgress>
            }
             
        </div>
    )
}

export default ServiceProviderDetails
//<Button onClick = { e => setShow(true)}>Show Doctors</Button>