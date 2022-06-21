import React from "react";
class Card extends React.Component 
{
    render() {
        return (
              <div class="col-sm-3 card">
            <img src="https://thumbs.dreamstime.com/z/vector-illustration-isolated-white-background-user-profile-avatar-black-line-icon-user-profile-avatar-black-solid-icon-121102166.jpg"/>
            <h3>{this.props.name} </h3>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" class="btn btn-primary">See Profile</a>
          </div>

           );
    
      }
}

export default Card;