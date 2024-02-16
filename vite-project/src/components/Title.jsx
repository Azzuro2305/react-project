import React from 'react'

const Title = ({title}) => {
  return (
    <div>
        <h1 className="text-5xl font-bold text-white uppercase bg-#35D145 text-center p-10 mb-10 ">
           {title}
        </h1>
    </div>
  )
}

export default Title