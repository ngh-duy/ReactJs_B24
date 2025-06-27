import React from 'react'

export default function Event() {
    const handleOnclick = ()=>{
        console.log("Đã click");
        
    }
    const handleOnclickParam = (user, role)=>{
        console.log(user, role);
        
    }
  return (
    <>
    <h1>Event</h1>
    <button onClick={handleOnclick}>Bấm</button>
    <button onClick={()=>handleOnclickParam("Nguyễn Hoàng Duy", "Admin")}>onClick param</button>
    </>
  )
}
