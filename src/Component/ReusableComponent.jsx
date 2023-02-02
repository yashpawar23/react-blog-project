import React from 'react'
import '../Component/ReusableComponent.css'


const ReusableComponent = (props) => {

  console.log("props inside ReusableComponent",props);
  return (
    <div style={{backgroundImage : `url(${props.img})`}} className="reusable-cmp-mian-div">
    </div>
  )
}

export default ReusableComponent