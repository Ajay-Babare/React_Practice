import {useEffect, useState} from "react";

const Profile = (props) =>{
    const[count,setcount]=useState(0);
    const[count2,setCount2]=useState(0);
    useEffect(()=>{
        //API Call
        //console.log("useEffect");
    },[count, count2]);

    // useEffect(()=>{

    //     const timer=setInterval(()=>{
    //         console.log("Namaste React Op");
    //     },1000);

    //     console.log("useEffect Return");
    //     return()=>{
    //         clearInterval(timer);
    //         console.log("useEffect Return")
    //     };
    // },[]);


    //console.log("render");
  return( 
    <div>
        <h1>Profile Component</h1>
        <h2>Name:{props.name}</h2>
        <h2>Location:{props.location}</h2>
        <h3>Count:{count}</h3>
        <button onClick={()=>{
            setcount(1);
            setCount2(2);
        }}>setCount</button>
    </div>
  );  
};
export default Profile;