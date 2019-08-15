import React, { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'



class Like extends Component {
  render() {
    const { liked, movie } = this.props;
  
    let iconVal = "heart";
    if (!liked) {
      iconVal += "-broken" 
    }
    
    return <FontAwesomeIcon onClick={() => this.props.onLikeOpinion(movie)} icon={iconVal} />;
  }
}

export default Like;
