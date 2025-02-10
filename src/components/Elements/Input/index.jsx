import React, { forwardRef } from 'react'

//Components
import Label from './Label';
import Input from './Input';

const InputForm  = forwardRef((props,ref) => {
  const {label, name, type, placeholder} = props;
return (
  <div className="mb-6">
      <Label htmlFor={name}>{label}</Label>
      <Input name={name} 
             ref={ref} type={type} placeholder={placeholder}></Input>         
  </div>
)
} )

export default InputForm
