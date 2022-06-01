import React from "react";
import axios from 'axios';
import '../App.css'
import { useEffect, useState } from 'react';
const Contact = () => {
    const [searchElm, setSearchElm] = useState("");
    const [users, setUser] = useState([])
  
    const handlApi=()=>{
      axios.get(`https://reqres.in/api/users?page=2`)
      .then((res)=> setUser(res.data.data) )
     
    }
    const searchData = () => {
            const res = users.filter((elm)=> elm.first_name.toString().includes(searchElm))
            setUser(res)
            setSearchElm('')
          };

    useEffect(()=>{
      handlApi()
    },[])
  
    console.log(users,'userr');
  return (
    <div className="App" style={{height:'1123'}}>
    <div className="container">
      <h1>Contact App</h1>
  
      <input
        type="search"
        value={searchElm}
        onChange={(e) => setSearchElm(e.target.value)}
      />
      <button type="submit" onClick={searchData}>search </button>
     
      <div className='table-1'>
      <table className="table">
  <thead>
    <tr>
      
    
    </tr>
  </thead>
  <tbody>
    <tr>
    {users.map((elm,i)=>{
       return (
        <tr key={i}>
      <td>  <img src={elm.avatar} alt="display image" /> </td>
       <td>{elm.first_name} </td>
       <td>{elm.last_name} </td>
       <td>{elm.email} </td>
        
        </tr>   )
     })}
     
    </tr>
    
  </tbody>
</table>
 

      </div>
   
    
    </div>
  </div>

  );
};

export default Contact;