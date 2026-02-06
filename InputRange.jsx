import './InputRange.css'

export default function InputRange ({
    title, value, onChange, min, max,
}){

return <>
    <section className="inputTitle">
        <h3>{title}</h3>
    </section>
    <section className="inputContainer">
        <input type="range" 
        min={min} max={max}
        value={value}
        onChange={onChange}
        />
    </section>
    <section className="valuesContainer">
        <h4>{min}</h4>
            <strong>
                {value}
            </strong>
        <h4>{max}</h4>
    </section>
</>
}