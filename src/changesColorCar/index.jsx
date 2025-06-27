import React from 'react'
import { useState } from 'react'

export default function ChangeColorCard() {
    let [img,setColor] = useState('./images/red-car.jpg');

    const changImge = (isColor)=>{
        if( isColor === "red"){
            setColor('./images/red-car.jpg');
        }else if(isColor === "silver"){
             setColor("./images/silver-car.jpg");
        }else if(isColor === "black"){
             setColor("./images/black-car.jpg");
        }
    }
    return (
        <div style={{display:"flex"}}>
            <div >
                <img src={img} alt="" width={"500px"} />
            </div>
            <div style={{display:"flex"}}>
                <button onClick={()=> changImge("red")}>Red</button>
                <button onClick={()=> changImge("silver")}>Silver</button>
                <button onClick={()=> changImge("black")}>Black</button>
            </div>
        </div>
    )
}
