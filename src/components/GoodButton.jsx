import React from 'react'

import "./GoodButton.css"

const GoodButton = (props) => {
  return (
    <div className="GoodButton">
      <button onClick={props.onClickCallback}>{props.text}
      <span></span><span></span><span></span><span></span>
      </button>
    </div>
  )
}

export default GoodButton
