import { useState } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';

function Nav(){


    function popupclick () {
        let popup = document.getElementById(`popup`)
        if (popup.style.display === `none`) {
            popup.style.display = `flex`
        } else {
            popup.style.display = `none`
        }
        
    }
   

   

    

    return(
        <section className='navigation'>            
        <div className="nav">
            <div className="logo">
                <img alt='some' src='./demopic/logo.png'/>
            </div>
            <div className="list">
                <span className="ul li">Stories</span>
                <span className="ul">Post</span>
                <span className="ul">Author</span>
                <input type='text' placeholder="  Search" className="input"/>
            </div>
            <div className='menuIcon' onClick={popupclick}>
                <AiOutlineMenu />
            </div>
            
        </div>
        <div className='popup' id='popup'>
                <span className="ul li">Stories</span>
                <span className="ul">Post</span>
                <span className="ul">Author</span>
                <input type='text' placeholder="  Search" className="input"/>
        </div>
        </section>
    )
}
export default Nav