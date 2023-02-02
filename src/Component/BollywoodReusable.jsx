import React from 'react'
import '../Component/ReusableComponent.css'
const BollywoodReusable = (props) => {
    return (
        <div className="reusable-cmp-mian-div">
            <img src={props.img} width='30%' />
            <h2>{props.heading}</h2>
            <p>{props.para}</p>
        </div>
    )
}

export default BollywoodReusable