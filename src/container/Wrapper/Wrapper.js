import React from 'react'

const Wrapper = (props) => {
  return (
    <div className='grid grid-cols-5 justify-items-center col-span-2 w-full h-full p-4'>
        {props.children}
    </div>
  )
}

export default Wrapper