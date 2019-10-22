import React from 'react';


const Card = ({name, email, id}) => { //destructuring in arguments  instead of "props"
                                      //see below comment for another option (slightly less good)

  // const {name, email, id} = props; //destructuring to avoid props.id,
  //                                  //props.email below, just typing id, email, etc.
  
  return(
    <div className= "tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
      <img src={`https://robohash.org/${id}?200x200`} alt="no data present"/>
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
}

export default Card;
