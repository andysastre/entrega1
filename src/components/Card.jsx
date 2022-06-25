import React, { useState } from 'react';
import phrases from "./phrases.json"
const Card = () => {

    const colors = [
        "#B9EFCF",
        "#a5c879",
        "#b8b557",
        "#cba135",
        "#66511b",
        "#7aa06f"
    ];


    

    const random = Math.floor(Math.random() * phrases.length);
    const [index, setIndex] = useState(random);
  
    const changePhrase = () => {
      const random = Math.floor(Math.random() * phrases.length);
      setIndex(random);
    };
  
    const randomColorIndex = Math.floor(Math.random() * colors.length);
    const color = colors[randomColorIndex];
   
    document.body.style = `background: ${color}`;


    return (





        <div className='Card' style={{color: color}}>
            <h2><i class="fa-solid fa-quote-left"></i>{phrases[index].quote}</h2>
            <p>{phrases[index].author}{"."}</p>
            <button onClick={changePhrase}> <i class="fa-solid fa-lightbulb-on" style={{color: color}}></i></button>
        </div>
    );
};

export default Card;