import React from 'react'
import {useState,useEffect} from 'react'
import {Table,TableContainer,TableHead,TableRow,TableCell,TableBody,Button} from "@material-ui/core"
import web3 from '../../../web3'
import contract from '../../../contract'
import ipfs from '../../../ipfs'
import DataDialog from './DataDialog'
function ShowServiceProviders({data,showData,accAdd}) {
  const [open, setOpen] = useState(false);
  const [DocInfo,setDocInfo] = useState(
    {name:"",address:"",username_email:""}
  );
  const handleClickOpen = async(e) => {
    e.preventDefault()
    //console.log(e.currentTarget.value)
    var add = e.currentTarget.value;
    navigator.clipboard.writeText(add)
   
    await contract.methods.getServiceProvider(add).call().then(async function(res){
      ipfs.catJSON(res)
      .then(async function(docDetails){
        await setDocInfo({
          name : docDetails.name,
          address : docDetails.address,
          username_email : docDetails.username_email
        })
        setOpen(true);
        
        
      })
      .catch(console.log);
    })
    
    
  };
  const handleClose = () => {
    setOpen(false);
  };
        return (
            <div>
                    <TableContainer >
                    <Table stickyHeader aria-label="sticky table">
                      <TableHead>
                        <TableRow>
                            <TableCell>
                              Service Provider Address Address
                            </TableCell>
                        </TableRow>
                      </TableHead>
            
            
                      <TableBody>
                            {data.map(doctors => (
                               <TableRow key = {doctors.index}> 
                               
                               <TableCell>
                               <Button value = {doctors.docAdd} color="primary" onClick={handleClickOpen}>
                                      {doctors.docAdd}
                               </Button>
                                </TableCell>
                               
                               </TableRow> 
                            ))}    
                      </TableBody>
            
                    </Table>
                  </TableContainer>
                  <DataDialog details = {DocInfo}accAdd = {accAdd} handleClose = {handleClose} open = {open} title ="Service Provider Details"></DataDialog>
                  
              </div>
                   
        )
   
}

export default ShowServiceProviders
