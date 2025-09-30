import './index.css'
import { MdOutlineStarPurple500 } from "react-icons/md";
import { BsDot } from "react-icons/bs";
import projobs4youlogo from './../../assets/projobs4you-logo.png'
import trutermslogo from './../../assets/trutermslogo.png'
import voccalogo from './../../assets/voccalogo.avif'

const Testimonials=()=>{
    return (
        <div id="testimolials" className='texti-bg-cont'>
            <h2 className='hon-h'>Testimonials</h2>
            <p className='hon-p'>What our Clients say about us</p>
            <div className='testi-cards-cont'>
            <div className='testi-cont'>
                <a href='https://trutermsconsultancy.com/' 
                aria-label="Vocca" target='_blank' rel="noopener noreferrer" className='testi-cont-sub'><img 
                className='profile-img' 
                src={trutermslogo}
                alt="profile-img" />
                <h2 className='test-name'>Truterms</h2></a>
                <div className='star-cont'>
                    <MdOutlineStarPurple500 className='blue star' />
                    <MdOutlineStarPurple500 className='blue star' />
                    <MdOutlineStarPurple500 className='blue star' />
                    <MdOutlineStarPurple500 className='blue star' />
                    <MdOutlineStarPurple500 className='blue star' />
                </div>
                <p>“What stood out most for us was that Murtaza and his team took the time to understand our requirements they pay attention to detail, are always a call away, and are commited to delivering top-notch results.”</p>
            </div>
            <div className='testi-cont'>
                <a href='https://vocca.co/' 
                aria-label="Vocca" target='_blank' rel="noopener noreferrer" className='testi-cont-sub' ><img 
                className='profile-img'
                src={voccalogo}
                alt="profile-img"
                 />
                <h2 className='test-name'>VOCCA</h2></a>
                <div className='star-cont'>
                    <MdOutlineStarPurple500 className='blue star'/>
                    <MdOutlineStarPurple500 className='blue star' />
                    <MdOutlineStarPurple500 className='blue star' />
                    <MdOutlineStarPurple500 className='blue star' />
                    <MdOutlineStarPurple500 className='blue star' />
                </div>
                <p>“Murtaza and his team have been our first ZOHO partners when we started off our company. They were very prompt in setting up our initial systems primarily ZOHO CRM, ZOHO email and ZOHO people. The platform is very intuitive and as we scaled it was quite helpful in our early days,
                     and he has always been an integral part in making sure we had a system and a structure in place.”</p>
            </div>
            <div className='testi-cont'>
                <a href='https://projobs4you.com/' 
                aria-label="Vocca" target='_blank' rel="noopener noreferrer" className='testi-cont-sub' ><img 
                className='profile-img' 
                src={projobs4youlogo}
                alt="profile-img"
                />
                <h2 className='test-name'>ProJobs4You</h2></a>
                <div className='star-cont'>
                    <MdOutlineStarPurple500 className='blue star' />
                    <MdOutlineStarPurple500 className='blue star' />
                    <MdOutlineStarPurple500 className='blue star' />
                    <MdOutlineStarPurple500 className='blue star' />
                    <MdOutlineStarPurple500 className='blue star' />
                </div>
                <p>“From the outset the experience has been great, starting with the initial requirement sessions to the final software delivery and also most importantly the post sales service/ support has been exceptional. Mr. Murtaza has been a great support.”</p>
            </div>
            </div>
            <div className='dots'>
            <BsDot className="dot" />
            <BsDot className='dot' />
            <BsDot className='dot' />
            </div>
        </div>
    )
}

export default Testimonials