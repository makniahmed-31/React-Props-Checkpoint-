import React, { Component } from 'react';



class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        console.log(this.props.Infos.fullname)
        return ( <div className="container">
                    
                    <img src={this.props.children} onClick={()=>this.props.handleName(this.props.Infos.fullname)} alt='imageprofile' height='200px' width='200px' />
             
                    <div className="profile" >
                       
                        <h1>{this.props.Infos.fullname}</h1> 
                        <h2>{this.props.Infos.bio}</h2>
                        <h3>{this.props.Infos.profession}</h3>
                    </div>
        </div>
        
         );
         
    }
}
export default Profile;