import './index.css'
import group from "./../../assets/group.png"
import { IoCheckmark } from "react-icons/io5";

const Honest=()=>{
    return <div id='aboutus' className='hon-bg-cont'>
        <img className='hon-le-img' src={group} alt="image"/>
        <div className='hon-ri-cont'>
            <h1 className='hon-h'>Let’s be honest—growth shouldn’t feel this chaotic</h1>
            <p className='hon-p'>Most businesses don’t fail because of a bad product. 
                They fail because of broken internal processes.</p>
            <ul className='ul-hon'>
                <li className='li-hon'><IoCheckmark className="tick" /> If you're constantly asking your team for updates...</li> 
                <li className='li-hon'><IoCheckmark className="tick" /> If deals are slipping through the cracks…</li> 
                <li className='li-hon'><IoCheckmark className="tick" /> If follow-ups depend on someone’s memory…</li> 
                <li className='li-hon'><IoCheckmark className="tick" /> It’s not your team’s fault.It’s your system.</li>
            </ul>
            <button className='hon-btn'>At Hakimi Software Solutions, we help you fix that</button>
        </div>
        <ul className='mib-ul'>
                <li className='li-hon'><IoCheckmark className="tick" /> If you're constantly asking your team for updates...</li> 
                <li className='li-hon'><IoCheckmark className="tick" /> If deals are slipping through the cracks…</li> 
                <li className='li-hon'><IoCheckmark className="tick" /> If follow-ups depend on someone’s memory…</li> 
                <li className='li-hon'><IoCheckmark className="tick" /> It’s not your team’s fault.It’s your system.</li>
            </ul>
            <button className='mob-btn'>At Hakimi Software Solutions, we help you fix that</button>
    </div>
}

export default Honest