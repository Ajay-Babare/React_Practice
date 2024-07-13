import {Outlet} from "react-router-dom"
import ProfileClassComponent from "./ProfileClass"
import ProfileFunctionalComponent from "./Profile";
import React from "react";

// const About = () => {
//    return(
//     <>

//         <h1>About Page</h1>
//         <Outlet/>
//         <ProfileClassComponent name={"AjayClassProps"} location={"MumbaiClass"}/>
//         <ProfileFunctionalComponent name={"AjayFunctionalProps"} location={"MumbaiFunction"}/>

//     </>
//    ); 
// }
// export default About;

class About extends React.Component{

    constructor(props){
        super(props);

        console.log(" parent - constructor");
    }

    async componentDidMount(){
        //Best place to make API Call


        console.log("Parent- componentDidMount")
    }

    render(){
        console.log("Parent - render");
        return(
            <>
        
                <h1>About Page</h1>
                <Outlet/>
                <ProfileClassComponent name={"AjayClassProps"} location={"MumbaiClass"}/>
                <ProfileFunctionalComponent name={"AjayFunctionalProps"} location={"MumbaiFunction"}/>
        
            </>
           ); 
    }
}
export default About;