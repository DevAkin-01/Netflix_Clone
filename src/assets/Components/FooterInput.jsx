import React from 'react'
import './FooterInput.css'
import Btn from "./Btn"
function FooterInput() {
  return (
    <div className='Input_parent'>
      <hi className="inputText">Ready to watch? Enter your email to create or restart your membership.</hi>
       <form className="input_parent" action="">
                <input style={{width:"70%",background:"black"}} className="input" type="text" placeholder='Email Address' />
                <Btn style={{width:"30%",borderRadius:"none",
                        height:"7vh", border:"none",cursor:"pointer"}} className="btn_1" text="Get Started"/>
         </form>
    </div>
  )
}

export default FooterInput
