import React, { useState } from "react";
import './Adjustment.css'
import InputRange from '../Input Range/InputRange'

export default function Adjustment ({title: title}){
    const [adj, setAdj] = useState ({
        brightness: 100,
        saturation: 150,
        vibrance: 125,
    })
return (
<section className='adjustmentWrapper'>
    <h1>{title}</h1>
        <section className="adjustContainer">
            <InputRange title="Brightness"
            min={0} max={200}
            value={adj.brightness}
            onChange={e=>{
                const brightness = e.target.value;
                setAdj(prev=>({
                    ...prev,
                    brightness: brightness,
                }))
            }}
            />
            <InputRange title="Saturation"
            min={0} max={200}
            value={adj.saturation}
            onChange={e=>{
                const saturation = e.target.value;
                setAdj(prev=>({
                    ...prev,
                    saturation: saturation,
                }))
            }}
            />
            <InputRange title="Vibrance"
            min={0} max={200}
            value={adj.vibrance}
            onChange={e=>{
                const vibrance = e.target.value;
                setAdj(prev=>({
                    ...prev,
                    vibrance: vibrance,
                }))
            }}
            />
    </section>

</section>
)
}