import React from 'react'

const Random = () => {

    let randomNumber = Math.floor(Math.random() * 100);
    console.log(randomNumber);
    let value;
   switch(true)
   {
       case randomNumber<35:
           value='Failed';
           break;
        case randomNumber<50:
            value='Average';
            break;
        case randomNumber<75:
                value='Good';
                break;
        case randomNumber<100:
                    value='Very good';
                    break;
                    default:
                        
   }
    return (
        <div>
           {
               <div> 
                   <h2>Your score is {randomNumber}</h2>
                   <h4>{value}</h4>
               </div>
              
           } 
        </div>
    )
}

export default Random
