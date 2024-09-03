import React from 'react'
import './LuckyNumber.css';

let winningGif = 'https://media.tenor.com/991zOaoQIewAAAAM/funny-dance-victory-dance.gif';
let lossingGif = 'data:image/jpeg;base64,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';

const LuckyNumber = () => {

    let randomNumber = Math.floor(Math.random() * 10+1);

  return (
    <div>

    <h3 className='luckysevenHeading'>LuckyNumber</h3>
    <div className='luckyNumber'>LuckyNumber is:{randomNumber}</div>
    {randomNumber === 7 && <img className='img' src={winningGif} />}
    {randomNumber !== 7 && <img className='img' src={lossingGif} />}
    
</div>
  )
}

export default LuckyNumber