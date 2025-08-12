import './index.css'
import bgimg from './../../assets/bgimg.png'
import {Link} from 'react-router-dom'
import { useState } from 'react';
import PopUp from '../PopUp';

const TopCont=()=>{
    const [showPopup, setShowPopup] = useState(false);
    return (
        <div id="home" className="top-cont" style={{backgroundImage: `URL(${bgimg})`}}>
            <h1 className='top-h1'>Still  <div className='text-span'>
                <div className='top-ri'></div> 
                <div className='top-le'></div> 
                <div className='botm-ri'></div>
                <div className='botm-le'></div> tracking leads</div> on Excel?</h1>
            <p className='top-p'>You’re not alone. Most growing businesses are leaking time, 
                leads, and clarity—because the right systems were never set up</p>
               <a href="https://murtazakanchwala-hakimisoftwaresolutions.zohobookings.com/#/meeting" target="_blank">
                    <button className='top-btn'>Book Free Consultation
                        <img className='cursor-img' src="https://res.cloudinary.com/dmadollpi/image/upload/v1752668515/Cursor_pfkmce.png" alt='cursor'/>
                    </button>
               </a>
                {showPopup && (
        <PopUp message="This is a simple popup!" onClose={() => setShowPopup(false)} />
      )}
                
        </div>
    )
}

export default TopCont