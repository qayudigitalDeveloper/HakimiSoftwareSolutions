import './index.css'
import Navbar from '../Navbar'
import Footer from '../Footer'

const ContactUs = () => {
    return (
        <div id="contactus" className="contact-bg-cont">
            <div className='cont-left-cont'>
                <h1 className='conta-h'>Contact us</h1>
                <p className='crem-li-p'>Need to get in touch with us? Either fill out the form with your inquiry or
                    find the department email you'd like to contact below.
                </p>
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
                                <label for='Last_Name' className='hon-p'>Your Name <span
                                    style={{ color: "red" }}>*</span> </label>
                            </div>
                            <div className=''>
                                <input type='text' className='text' id='Last_Name' aria-required='true'
                                    aria-label='Last Name'
                                    name='Last Name' aria-valuemax='80' maxlength='80' />
                                <div className=''> </div>
                            </div>
                        </div>

                        <div className='cont-inp-cont'>
                            <div className="">
                                <label for='Company' className='hon-p'>
                                    Company Name
                                    <span style={{ color: "red" }}>*</span>
                                </label> </div>
                            <div className='zcwf_col_fld'>
                                <input type='text' className='text' id='Company' aria-required='true' aria-label='Company'
                                    name='Company' aria-valuemax='200' maxlength='200' />
                                <div className=''>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='inp-cont'>
                        <div className='cont-inp-cont'>
                            <div className=''>
                                <label className='hon-p' for='Mobile'>Contact Number <span
                                    style={{ color: "red" }}>*</span> </label> </div>
                            <div className=''>
                                <input type='text' className='text' id='Mobile' aria-required='true' aria-label='Mobile' name='Mobile'
                                    aria-valuemax='30' maxlength='30' />
                                <div className=''> </div>
                            </div>
                        </div>


                        <div className='cont-inp-cont'>
                            <div className='' > <label className='hon-p' for='Email'>Your Email <span
                                style={{ color: "red" }}>*</span> </label> </div>
                            <div className=''>
                                <input type='text' className='text' ftype='email' autocomplete='false' id='Email' aria-required='true'
                                    aria-label='Email' name='Email' aria-valuemax='100' crmlabel='' maxlength='100' />
                                <div className=''> </div>
                            </div>
                        </div>
                    </div>

                    <div className='cont-inp-cont'>
                        <div className=''>
                            <label for='Description' className='hon-p'>Tell us about your
                                ZOHO Requirement <span style={{ color: "red" }}>*</span> </label>
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
                            <div className=''> <img id='imgid5630670000011076052' style={{ width: "70%" }}
                                src='https://crm.zoho.com/crm/CaptchaServlet?formId=38aa56abe110fc55dd95c0761802792957742a71ea3957aa6866d3b9222c94a17d3ccb12d3577a242e8021708fd5e9aa&grpid=cc3f42e98ebbd43b8b2f16969cb681eb5a9f4ac4efe5a461a8c462af4e360f71' />
                                {/*<a href='javascript:;' onclick='reloadImg5630670000011076052();'>Reload</a>*/}

                                <a
                                    href="#"
                                    className='buttons'
                                    onClick={(e) => {
                                        e.preventDefault(); // stops page from jumping to top
                                        window.reloadImg5630670000011076052(); // call the Zoho function
                                    }}
                                >
                                    Reload
                                </a>

                            </div>
                            <div className=''> </div>
                        </div>

                        <div className='cont-inp-cont'>
                            <div className="hon-p" id='reCaptchaField' >Enter the Captcha</div>
                            <div className=''>
                                <input type='text' className='text' id='captchaField5630670000011076052'
                                    aria-labelledby='reCaptchaField' aria-valuemax='10' maxlength='10' name='enterdigest' /> </div>
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
                        <div className='inp-cont'>
                            <input type='submit' id='formsubmit' role='button' className='sub-buttons'
                                value='Submit' aria-label='Submit' title='Submit' />
                            <input type='reset' className='sub-buttons' role='button'
                                name='reset' value='Reset' aria-label='Reset' title='Reset' />
                        </div>
                    </div>
                </form>
                <iframe name='captchaFrame' style={{ display: "none" }}> </iframe>
            </div>
        </div >
    )
}

export default ContactUs