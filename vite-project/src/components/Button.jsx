import React from 'react'

function Button({txt,onClick}) {
  return (
    <>
      <button className='bg-#27AC35 text-white w-150px p-2 rounded-100px hover:text-black' onClick={onClick}>{txt} </button>
    </>
  )
}

export default Button