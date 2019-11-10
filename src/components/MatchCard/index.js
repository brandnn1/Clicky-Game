import React from "react";
import "./MatchCard.css";

const MatchCard = props => (
	<div onClick={() => props.setClicked(props.id)} className="cards col-xs-6 col-sm-6 col-md-4 col-lg-3 col-xl-3">
		<div className="img-container ">
      		<img alt={props.name} src={props.image} />
    	</div>
  </div>
);

export default MatchCard;