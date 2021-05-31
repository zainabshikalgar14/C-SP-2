import React from 'react'
import {useState,useEffect} from 'react'
import {Paper,Button,Typography,Card,CardContent,CircularProgress} from '@material-ui/core'
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import web3 from '../../../web3'
import contract from '../../../contract'
import ipfs from '../../../ipfs'
function MyDetails(props) {
    const[infoLoaded,setInfoLoaded] = useState(false);
    const[mydata,setMyData] = useState({
      name:"",address:"",mobNo:"",username_email:""
    })
    useEffect(() => {
        async function loadDetails(){
            contract.methods.getUser_c(props.accAdd).call({
              from:props.accAdd
            }).then(async function(mydata){
              await ipfs.catJSON(mydata[0]).
              then(function(ipfsdata){
                console.log(ipfsdata)
                setMyData({
                  name : ipfsdata.name,
                  address : ipfsdata.address,
                  mobNo : ipfsdata.mobNo,
                  
                  
                  username_email : ipfsdata.username_email
                
                })
                setInfoLoaded(true);
              }).
              catch(console.log);
            })
        }
        loadDetails();
    }, [])
    return(
        <div>
        {infoLoaded ?  <div>
          <Card >
          <CardContent>
          <Typography style={{fontSize:50}} color="textSecondary" gutterBottom>
              {mydata.name}
        </Typography>
            <Typography variant="h5" component="h2">
              Address : {mydata.address}
            </Typography>
            <Typography variant="h5" component="h2">
              Mobile No : {mydata.mobNo}
            </Typography>
         
            <Typography variant="h5" component="h2">
              Username / Email : {mydata.username_email}
            </Typography>
          
           
          </CardContent>
        </Card>
          </div> :
        <CircularProgress/>
        }
        </div>
    )
}

export default MyDetails
