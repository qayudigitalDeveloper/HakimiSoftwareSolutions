import './index.css'

const Footer = () => {
    const phone = "971557443213";
    const message = encodeURIComponent("Hello, I want to know more about Zoho CRM");
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

                <button className='footer-btn'>
                    Message directly at +971 56 660 1500
                </button>
            </div>
        </div>
    )
}

export default Footer