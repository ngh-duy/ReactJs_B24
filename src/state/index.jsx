import React from 'react'
import {useState} from 'react'

// nếu giá trị của state bị thay đổi thì component sẽ thay đổi
export default function State() {
    let userName = "Nguyễn Duy"
    const [isLogin, setLogin]= useState(true);
    const isTatus = () => {
        if(isLogin){
            setLogin(false);
        }else{
            setLogin(true);
        }
    }
    const renderIfo = () => {
        if (isLogin) {
            return (<div>
                <h1>Đăng nhập</h1>
                <button onClick={isTatus}>Login</button>
            </div>)
        } else {
            return (<div>
                <h1>Heello {userName}</h1>
                <button onClick={isTatus}>Logout</button>
            </div>)
        }
    }

    return (
        <>
            {renderIfo()}
            
            
            {/* {isLogin ? (
            <div>
                <h1>Đăng nhập</h1>
                <button>Login</button>
            </div>
        ): (<div>
                <h1>Heello {userName}</h1>
                <button>Logout</button>
            </div>)} */}
        </>
    )
}
