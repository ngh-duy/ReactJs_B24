import React from 'react'
import data from './data.json'
import { useState } from 'react';

export default function changeGlasses() {


    const [glassess, setGlasses] = useState(data);
    const [info, setUrl] = useState({ url: './images/v1.png', name: 'name', desc: 'desc' })

    const renderListGlasses = () => {
        return glassess.map((glasses) => (
            <div key={glasses.id} >
                <button onClick={() => { choosesGlasses(glasses.id) }} style={{ marginLeft: '5px', border: 'none' }}><img width={90} height={50} src={glasses.url} alt={glasses.name} /></button>
            </div>
        ));
    };
    const choosesGlasses = (id) => {
        let findGlassById = glassess.find((glasses) => 
            glasses.id === id
        )
        setUrl({
            url: findGlassById.url, 
            name: findGlassById.name, 
            desc: findGlassById.desc
        });
    }

    return (
        <>
            <div style={{ display: "flex", alignItems: "center", width: "100%", marginTop: "40px", justifyContent: 'space-evenly' }}>{renderListGlasses()}</div>
            <div style={{ justifyContent: "space-evenly", display: "flex", height: "250px", width: "100%", marginTop: "100px" }}>
                <div style={{ position: 'relative' }}>
                    <img width={250} height={250} src="./images/model.jpg" alt="" />
                    <div>
                        <img src={info.url} alt="" style={{ position: "absolute", top: '50px', left: '65px' }} width={120} height={45} />
                        <div style={{ position: 'absolute', width: '100%', height: '40%', bottom: '0', left: '0', backgroundColor: 'blue' }}>
                            <h1 style={{fontSize:'25px',color:'white'}}>{info.name}</h1>
                            <p style={{fontSize:'10px', color:'white'}}>{info.desc}</p>
                        </div>
                    </div>
                </div>
                <img width={250} height={250} src="./images/model.jpg" alt="" />
            </div>
        </>
    )
}
