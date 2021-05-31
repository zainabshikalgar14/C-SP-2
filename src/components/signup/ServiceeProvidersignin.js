import * as React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from "@material-ui/core/Button"
import {useState,useEffect} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import {Chip,Typography} from '@material-ui/core/';
import '../../css/forms.css'
import Header from '../header'
import web3 from '../../web3'
import ipfs from '../../ipfs'
import contract from '../../contract'
const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '400px',
    },
    TextField : {
        width: '400px'
    }
  },
}));

export default function ServiceeProvidersignin() {
  const classes = useStyles();
  const [SpData, setData] = useState(
    {name:"",username_email:"",address:"",mobNo:""}
 )
 
   const handleChange = (event)=>{
     const id =event.target.id ;
     console.log(id)
     var value = event.target.value;
     setData({
       ...SpData,
        [id] : value
     })
     console.log(SpData)
   }

   const  submitForm = async (event) =>{
       event.preventDefault();
       await web3.eth.getAccounts().then(async function(acc){
         console.log(acc[0]);
         await ipfs.addJSON(SpData,async (err,hash)=>{
           if(err){
             alert("Problem on storing IPFS")
           }else{
             await contract.methods.addSer_Pro(hash).send({
                       from : acc[0],gas:3000000
                      }).then(function(err2,result){
                        if(err){
                          alert("User already present")
                        }else{
                         console.log(hash);
                          console.log(result)
                          alert("Successfull")
                  }
             })
           }
         })

       })
       alert("form submitted")
   }

  return (
    <div>
    <Header item = "signUp"></Header>
    <div className="center">
    <form className={classes.root} onSubmit={submitForm}  autoComplete="off">
    <div>
    <Typography  variant="h3" color="primary">Service Provider SignUp</Typography>
    <br></br>
      <TextField
        id="name"
        label="Name of Service Provider"
        type="text"
        variant="standard"
        onChange={handleChange}
        value={SpData.name}
        required
      />

      <br></br>
      <TextField
      id="username_email"
      label="Username / Email"
      type="email"
      variant="standard"
      onChange={handleChange}
      value={SpData.username_email}
      required
    />

    <br></br>
    <TextField
      id="address"
      label="Address / Location"
      variant="standard"
      value={SpData.address}
      onChange={handleChange}
      required
    />
    <br></br>
    <TextField
      id="mobNo"
      label="Mobile Number"
      type="text"
      variant="standard"
      onChange={handleChange}
      value={SpData.mobNo}
      required
    />

    <br></br>
    </div>
    <br></br>
    <Button variant="contained" color="primary">
         Submit
        </Button>
  </form>
    </div>
    </div>
  );
}