import React from 'react';
import Card from './Card';

const CardList = ({robots}) => {
  // MOVED INTO "DIV" (JS WITHIN HTML DIV TAG = JSX)
  // const cardArray = robots.map((user, i) =>{
  //   return (
  //     <Card key={robots[i].username}
  //     id={robots[i].id}
  //     name={robots[i].name}
  //     email={robots[i].email}/>
  //   );
  // })

  return (
    <div>
      {
        robots.map((user, i) =>{
          return (
            <Card key={robots[i].username}
            id={robots[i].id}
            name={robots[i].name}
            email={robots[i].email}/>
          );
        })
      }
    </div>
  );
}
export default CardList;
