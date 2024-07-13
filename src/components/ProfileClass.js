import React from 'react';

class Profile extends React.Component{
    constructor(props){
        super(props);
        //create state
        this.state = {
            userInfo:{
                name: "Dummy Name",
                location:"Dummy Location",
            },
        };

        console.log("Child -  Constructor"+this.props.name);
    }

    async componentDidMount(){
        //API Calls
        const data = await fetch("https://api.github.com/users/akshaymarch7");
        const json = await data.json();
        this.setState({
            userInfo:json,
        });

        // this.timer= setInterval(()=>{
        //     console.log("Namaste react Op");
        // },1000)


        console.log("child - componentDidMount"+this.props.name);
    }

    componentDidUpdate(){
        // if(this.state.count !== prevState){
        //     //
        // }
        // if(this.state.count2 !== prevState.count2){
        //     // code
        // }
        console.log("Component Did update");
    }

    componentWillUnmount(){
        // clearInterval(this.timemr);
        console.log("componentWillUnmount");
    }

    render(){
        const{count}=this.state;
        console.log("Child - render"+this.props.name)
        return (
            
            <div>
                <h1>Profile Class Component</h1>
                <h2>Name:{this.state.userInfo.name}</h2>0
                <h2>location:{this.state.userInfo.location}</h2>
                <h2 >Count:{count}</h2>
                <button onClick={()=>{
                    // We do not mutate state directky
                    //never do this.state = something
                    this.setState({
                        count:1,
                        count2:2,
                    });
                }}>setCount</button>
            </div>
        );
    }
}

export default Profile;