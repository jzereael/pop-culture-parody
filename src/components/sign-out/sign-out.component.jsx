import React from 'react';



import './sign-out.styles.scss';


class SignOut extends React.Component{
    constructor(props){
        super(props);
        this.state = "sign-out";
    }
    render(){

        return(
            <div>
                <h1>Sign Out Page</h1>
            </div>
        );
    }
}

export default SignOut;