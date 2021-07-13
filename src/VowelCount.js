import React from 'react'



const VowelCount = () => {
        let str = "react";
        let lstr = str.toLowerCase();
        let vCount=0;
        console.log(lstr);
        let vowels = ['a','e','i','o','u'];
        for(let ch of lstr)
        {
            if(vowels.includes(ch))
            {
                vCount++;
            }
        }
    return (
        <div>
            <h2>{vCount}</h2>
        </div>
    )
}

export default VowelCount
