import React from "react";

const ArrayProgram = () => {
  const jobs = {
    Tom: "Manager",
    Dick: "Chief Programmer",
    Harry: "Test and documentation",
    Sue: "DBGuru",
  };
  function printPattern(callBack)
  {
        return callBack();
  }
  function printValue(cb) {
   return cb();
  }
  return (
    <div>
        <div>
             {
        printValue(()=>{
            let value=[];
            for (let key in jobs) {
               value.push(<h5>{`${key} : ${jobs[key]}`}</h5>)
              }
              return value;
        })
    }
        </div>
   

      {printPattern(() => {
        let pattern = [];
        for (let i = 1; i < 10; i = i + 2) {
          for (let j = 1; j <= i; j++) {
           pattern.push(<span key={i}>{i}</span>)
          }
          pattern.push( <br/>); 
        }
        return pattern;
      })}
    </div>
  );
};

export default ArrayProgram;
