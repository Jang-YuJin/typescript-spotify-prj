import React from 'react'
import { FadeLoader } from 'react-spinners'
import './Loading.style.css'

const Loading = () => {
  return (
    <div className='loading'>
      <FadeLoader color="rgb(30, 215, 96)" />
    </div>
  )
}

export default Loading
