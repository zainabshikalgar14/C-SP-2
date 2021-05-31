// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.5.16;
pragma experimental ABIEncoderV2;
contract C_SP {
    //mappings
    mapping(address => uint) authCaller;
    mapping(address => string) userType;
    mapping(address => user) UData;
    mapping(address=> address[]) userToServicepro;
    mapping(address => serviceprovider) SpData;
 
    //constructor
    constructor() public{
        authCaller[msg.sender] = 1;
    }
    
    
    //events
     event ServiceProviderAdded(address serviceproviderAdd);

    //structs
     struct user{
        string Uhash; 
        uint [] treatmentId;
        string precautions;

    }
    struct serviceprovider{
        string Sphash;
    }
   
    //struct variable
    
    function addUser_c(string memory _Uhash) public returns(bool){
        require(keccak256(abi.encodePacked(userType[msg.sender])) == keccak256(abi.encodePacked("")));
        user memory usr;
        usr.Uhash = _Uhash;
        userType[msg.sender] = 'user';
        UData[msg.sender] = usr;
        return true;
    }
    


    function getUser_c(address _Uadd) public returns(string memory,uint[] memory,string memory){
        require(msg.sender == _Uadd);
        require(keccak256(abi.encodePacked(userType[msg.sender])) == keccak256(abi.encodePacked("user")));
        
        return (UData[msg.sender].Uhash,UData[msg.sender].treatmentId,UData[msg.sender].precautions);
    }
    
    function getServiceProvider(address _Spadd) public returns(string memory){
        //need to complete
         return SpData[_Spadd].Sphash; 
    }
    
    
    function grantAccess(address _Spadd) public returns(bool){
        require(keccak256(abi.encodePacked(userType[msg.sender])) == keccak256(abi.encodePacked("user")));
        userToServicepro[msg.sender].push(_Spadd);
        return true;
    }
    
    //getUser
    function getUser(address _Uaddress) public returns(string memory){
        return userType[_Uaddress];
    }
    
    //Service Provider
    
     function addSer_Pro(string memory _Sphash) public returns(bool){
        require(keccak256(abi.encodePacked(userType[msg.sender])) == keccak256(abi.encodePacked("")));
        userType[msg.sender] = 'serviceprovider';
        SpData[msg.sender].Sphash = _Sphash;
        emit ServiceProviderAdded(msg.sender);
        return true;
    }
    
    
}