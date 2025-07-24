import { GoMail } from 'react-icons/go';
import './index.css'
import { IoLogoInstagram } from 'react-icons/io5';
import { FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
    const phone = "971566601500";
    const message = encodeURIComponent("Hello, I want to know more about Zoho Implementation");
    const whatsappUrl = `https://wa.me/${phone}?text=${message}`

    const handlemail = () => {
        const subject = encodeURIComponent("Query from Website");
        const body = encodeURIComponent("Hi Qayu Digital,\n\nI am interested in your services.");
        window.open(
            `https://mail.google.com/mail/?view=cm&fs=1&to=info@qayudigital.com&su=${subject}&body=${body}`,
            '_blank'// Opens in a new tab
        );
    }

    return (
        <div id="footer" className='footer-bg-cont'>
            <h1 className='voc-h'>Your business is too good<br /> to run on duct tape</h1>
            <p className='voc-p'>Let’s clean up the backend—so you can scale without chaos.</p>
            <div className='footer-butns-cont'>
                <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <button className='footer-btn'>
                        Book a free consultation on <span>WhatsApp</span>
                    </button>

                </a>
            </div>
            <div className='footericonscont'>
            <div className='footernav-up-cont'>
                <div style={{ display: "flex", alignItems: 'center', width: "auto", justifyContent: "center" }}>
                    <a><GoMail className='footercontacticons' onClick={handlemail} /></a>
                    <a style={{ textDecoration: "none", margin: "0px" }} href="https://www.linkedin.com/company/hakimisoftwaresolutions/posts/?feedView=all"
                        target='_blank' rel="noopener noreferrer">
                        <FaLinkedinIn className='footercontacticons' />
                    </a>
                    <a href="https://www.instagram.com/hakimisoftwaresolutions" target="_blank" rel="noopener noreferrer">
                        <IoLogoInstagram className='footercontacticons' />
                    </a>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Footer