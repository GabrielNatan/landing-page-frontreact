import {  ButtonHTMLAttributes } from "react"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{}

export const Button = ({ children, ...props }:ButtonProps)=>{
  return(
    <button 
      className="py-2 px-10 rounded-md bg-purple-700/80 hover:bg-purple-700 text-slate-50 font-medium"
      {...props}
    >
      { children }
    </button>
  )
}