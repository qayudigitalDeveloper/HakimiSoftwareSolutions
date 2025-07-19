import './index.css'

const Footer = () => {
    const phone = "971566601500";
    const message = encodeURIComponent("Hello, I want to know more about Zoho Implementation");
    const whatsappUrl = `https://wa.me/${phone}?text=${message}`
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
        </div>
    )
}

export default Footer