import React, { Children } from 'react'

const Label = (props) => {
    const {htmlFor,children} = props
  return (
    <label 
     htmlFor={htmlFor}
     className='block text-slate-700 text-sm font-bold my-2'>
        {children}
      </label>
  )
}

export default Label
