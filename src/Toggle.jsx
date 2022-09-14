import React from 'react'
import {Button} from 'react-bootstrap';

export const Toggle=()=> {
    const [isHappy,setIsHappy]=useState(true)
  return (
    <div className='text-center mt-3'>
        <button onClick={()=>lsetIsHappy(!isHappy)}>Are you happy? {isHappy? '😊':'😢'}  </button>
    </div>
  )
}