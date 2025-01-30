import React from 'react'

const Input = (props) => {
const {type,placeholder, name} = props;
  return (
    <input type={type}
        className="text-sm border rounded w-full p-2 text-slate-700 placeholder:opacity-55"
        placeholder={placeholder} name={name} id={name} />
  )
}

export default Input
