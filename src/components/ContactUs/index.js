import './index.css'
import { FiPhone } from "react-icons/fi";
import { FiMail } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import image2 from './../../assets/image2.png';
import image3 from './../../assets/image3.png';
import image4 from './../../assets/image4.png';

const ContactUs = () => {

    const phone = "971566601500";
    const message = encodeURIComponent("Hello, I want to know more about Zoho Implementation");
    const whatsappUrl = `https://wa.me/${phone}?text=${message}`

    return (
        <div id="contactus" className="contact-bg-cont">
            <div className='cont-left-cont'>
                <h2 className='conta-h'>CONTACT US</h2>
                <p className='cont-pa'><span className='need' >Need to get in touch with us? </span><br />
                    Fill out the form and our team will get back to you within 24 hours
                    with pricing and customization options.
                </p>

                <h2 className='subhe'>Contact Information</h2>
    
                <p><a className="email-ever" href="mailto:murtaza@hakimisoftwaresolutions.com"><FiMail /> murtaza@hakimisoftwaresolutions.com</a></p>

                <h2 className='subhe'>Our Locations</h2>
                <div className='contac-flag-cont'>
                    <img src={image2} alt="flag1" className='flag' />
                    <div>
                        // <p><span className='span-contac'>
                        //     Alliance Business Centre, </span>
                        // Floor 4, Entrance #2,
                        //     Business Village,- AL Maktoum RD- Dubai
                        // </p>
                             <p><span className='span-contac'>
                            Al Rashidiya 2 - Ajman 
                        </p>
                    </div>
                </div>
                <div className='contac-flag-cont'>
                    <img src={image4} alt="flag1" className='flag' />
                    <div>
                        <p><span className='span-contac'>
                            Olympia Cyberspace,, </span>
                                     Arulayiammanpet, Sidco
        Industrial Estate, Guindy, Chennai, Tamil Nadu
        600032- India</p></div>
                </div>
                <div className='contac-flag-cont'>
                    <img src={image3} alt="flag1" className='flag' />
                    <div>
                        <p><span className='span-contac'>
                            Hormus Grand, </span>
                                      111 AL Matar ST, Muscat 128-
        Oman</p></div>
                </div>


                <h2 className='subhe'>Business Hours</h2>
                <p>Monday - Saturday: 9.30 AM - 6.30 PM</p>
                <p>Sunday: Closed</p>

            </div>

            <div id='crmWebToEntityForm'
                className='cont-ri-cont' >

                <form
                    id="webform5630670000011076052"
                    action="https://crm.zoho.com/crm/WebToLeadForm"
                    name="WebToLeads5630670000011076052"
                    method="POST"
                    acceptCharset="UTF-8"
                    onSubmit={(e) => {
                        document.charset = "UTF-8";
                        if (!window.checkMandatory5630670000011076052()) {
                            e.preventDefault(); // stop submission if validation fails
                            return false;
                        }
                        return true;
                    }}
                >

                    <input type='text' style={{ display: "none" }} name='xnQsjsdp'
                        value='cc3f42e98ebbd43b8b2f16969cb681eb5a9f4ac4efe5a461a8c462af4e360f71' />

                    <input type='hidden' name='zc_gad' id='zc_gad' value='' />

                    <input type='text' style={{ display: "none" }} name='xmIwtLD'
                        value='38aa56abe110fc55dd95c0761802792957742a71ea3957aa6866d3b9222c94a17d3ccb12d3577a242e8021708fd5e9aa' />

                    <input type='text' style={{ display: "none" }} name='actionType' value='TGVhZHM=' />

                    <input type='text' style={{ display: "none" }} name='returnURL' value='null' />
                    <div className='inp-cont'>
                        <div className='cont-inp-cont'>
                            <div className=''>
                                <label htmlFor='Last_Name' className='hon-p'>Your Name <span
                                    style={{ color: "black" }}>*</span> </label>
                            </div>
                            <div className=''>
                                <input 
                                type='text' 
                                className='text' 
                                id='Last_Name' 
                                aria-required='true'
                                aria-label='Last Name'
                                name='Last Name' 
                                maxLength='80' />
                                <div className=''> </div>
                            </div>
                        </div>

                        <div className='cont-inp-cont'>
                            <div className="">
                                <label htmlFor='Company' className='hon-p'>
                                    Company Name
                                    <span style={{ color: "black" }}>*</span>
                                </label> </div>
                            <div className='zcwf_col_fld'>
                                <input type='text' className='text' id='Company' aria-required='true' aria-label='Company'
                                    name='Company'  maxLength='200' />
                                <div className=''>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='inp-cont'>
                        <div className='cont-inp-cont'>
                            <div className=''>
                                <label className='hon-p' htmlFor='Mobile'>Contact Number <span
                                    style={{ color: "black" }}>*</span> </label> </div>
                            <div className=''>
                                <input type='text' className='text' id='Mobile' aria-required='true' aria-label='Mobile' name='Mobile'
                                     maxLength='30' />
                                <div className=''> </div>
                            </div>
                        </div>


                        <div className='cont-inp-cont'>
                            <div className='' > <label className='hon-p' htmlFor='Email'>Your Email <span
                                style={{ color: "black" }}>*</span> </label> </div>
                            <div className=''>
                                <input type='text' className='text' ftype='email' autoComplete='false' id='Email' aria-required='true'
                                    aria-label='Email' name='Email' crmlabel='' maxLength='100' />
                                <div className=''> </div>
                            </div>
                        </div>
                    </div>

                    <div className='cont-inp-cont'>
                        <div className=''>
                            <label htmlFor='Description' className='hon-p'>Tell us about your
                                ZOHO Requirement <span style={{ color: "black" }}>*</span> </label>
                        </div>
                        <div >
                            <textarea className='text-text' cols={30} rows={5} aria-multiline='true'
                                id='Description' aria-required='true' aria-label='Description' name='Description'>
                            </textarea>
                            <div className=''> </div>
                        </div>
                    </div>


                    <div className='inp-cont'>
                        <div className='cont-inp-cont'>
                            <div className=''> </div>
                            <div className=''> 
                                <img id='imgid5630670000011076052' style={{ width: "70%" }} alt="icon"
                                src='https://crm.zoho.com/crm/CaptchaServlet?formId=38aa56abe110fc55dd95c0761802792957742a71ea3957aa6866d3b9222c94a17d3ccb12d3577a242e8021708fd5e9aa&grpid=cc3f42e98ebbd43b8b2f16969cb681eb5a9f4ac4efe5a461a8c462af4e360f71' />
                                {/*<a href='javascript:;' onclick='reloadImg5630670000011076052();'>Reload</a>*/}

                                <button
                                type='button'
                                    className='buttons'
                                    onClick={() => {
                                        window.reloadImg5630670000011076052(); // call the Zoho function
                                    }}
                                >
                                    Reload
                                </button>

                            </div>
                            <div className=''> </div>
                        </div>

                        <div className='cont-inp-cont'>
                            <div className="hon-p" id='reCaptchaField' >Enter the Captcha</div>
                            <div className=''>
                                <input type='text' className='text' id='captchaField5630670000011076052'
                                    aria-labelledby='reCaptchaField' maxLength='10' name='enterdigest' /> </div>
                        </div>

                    </div>
                    <input
                        type="hidden"
                        name="aG9uZXlwb3Q"
                        value=""
                        style={{ display: "none" }}
                    />

                    <div className='cont-inp-cont'>
                        <div className=''> </div>
                        <div className='inp-cont-btns'>
                            <input type='submit' id='formsubmit'  className='sub-buttons'
                                value='Submit' aria-label='Submit' title='Submit' />
                            <input type='reset' className='sub-buttons' 
                                name='reset' value='Reset' aria-label='Reset' title='Reset' />
                        </div>
                    </div>
                </form>
                <iframe title='captcha' name='captchaFrame' style={{ display: "none" }}> </iframe>
            </div>
        </div >
    )
}

export default ContactUs
