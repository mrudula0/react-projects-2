import { Component } from "react";


const user = {
  name: 'Jane Doe',
  bio: 'Frontend developer who loves React and coffee ☕️',
  image: 'https://do6gp1uxl3luu.cloudfront.net/question-webp/dummyUser.jpg'
};

class UserProfileToggle extends Component{
    state={
        showBio:false
    }
    toggleBtn=()=>{
        this.setState((prevState)=>({
showBio:!prevState.showBio
        }))
    }
    render(){
      const  {showBio}=  this.state;
        return(
            <div className="user-profile">
<img src={user.image} alt="err" style={{width:'150px',borderRadius:'50%'}} />
<h3>{user.name}</h3>
<button onClick={this.toggleBtn}>{showBio?'Hide Bio':'Show Bio'}</button>
{showBio && <p>{user.bio}</p> }
            </div>
        )
    }
}
export default UserProfileToggle