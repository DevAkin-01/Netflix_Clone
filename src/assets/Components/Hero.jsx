import "./Hero.css"
import Btn from "./Btn.jsx"
import React from 'react'
import { MdOutlineChevronRight } from "react-icons/md"

function Hero() {
  return (
    <div>
      <sectionn className="parent_container">
        <header className="header_section">
            <div className="header_box">
                <img className="img_1" src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2026-02-12/consent/87b6a5c0-0104-4e96-a291-092c11350111/019ae4b5-d8fb-7693-90ba-7a61d24a8837/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt="" />
               <Btn className="btn_1" text="Sign In"/>
            </div>
        </header>
         <div className="text_container"> 
            <span className="text_box">
                <h3 className="text1">Unlimited movies,TV,<br />shows and more</h3>
                <p className="text2">Starts at ₦2,500. Cancel anytime.</p>
                <p className="text3">Ready to watch? Enter your email to create or restart your <br /> membership.</p>
                <form className="input_parent" action="">
                    <input className="input" placeholder="Email Address" type="text" />
                    <Btn style={{width:"30%",borderRadius:"none",
                        height:"7vh", border:"none",cursor:"pointer"}} className="btn_1" text="Get Started" icon={MdOutlineChevronRight}/>
                </form>
            </span>
         </div>
      </sectionn>
    </div>
  )
}

export default Hero
