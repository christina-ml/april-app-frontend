import React from 'react'
import './FieldKey.css';

const FieldKey = () => {
  return (
    <div className='fieldKey'>
        <h3>Field Key</h3>
        <ul>
            <li className="landKey">Land</li>
            <li className="houseKey">House</li>
            <li className="forestKey">Forest</li>
            <li className="waterKey">Water</li>
        </ul>
    </div>
  )
}

export default FieldKey