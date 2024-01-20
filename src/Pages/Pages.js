import React from 'react'
import Appbar from '../Components/Appbar/Appbar'
import Content from '../Components/Content/Content'
import "../Pages/Pages.css"

const Pages = () => {
  return (
    <div>
        <div className='appbar'>
            {/* <Appbar/> */}
        </div>
        <div className='body'>
            <Content/>
        </div>

        <div className='image'>

        </div>
      
    </div>
  )
}

export default Pages
