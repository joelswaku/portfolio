
import React, { InputHTMLAttributes } from 'react'
//  interface inputType 
//  extends InputHTMLAttributes<HTMLInputElement> {}


function Input(props: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input {...props} className='bg-white text-black w-sm m-3 p-2.5' />
  )
}

export default Input

// import React, { JSX } from 'react'
// interface inputType {
//     value: string
//    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
//     type?: string
//     placeholder?: string
   
//     className?: string & number 

// }


// function Input({value, type, onChange ,placeholder,className} : inputType) : JSX.Element{
//   return (
//     <input type={type} value={value} onChange={onChange} placeholder={placeholder} className={className} />
       
//   )
// }

// export default Input
