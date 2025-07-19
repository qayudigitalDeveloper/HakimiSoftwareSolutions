import './index.css'

const Services = () => {
    return (
        <div id='services' className='crm-bg-cont'>
            <h1 className='hon-h'>What we Implement for you</h1>
            <p className='hon-p'>We don’t just set up Zoho CRM — we build your entire business OS.</p>
            <p className=''>Hakimi helps you transition from scattered tools to a seamless, automated system using Zoho’s full suite of business apps.</p>
            <ul className='crm-ul'>
                <li className='li-crm cont1'>
                    <div className='li-crm-cont'>
                        <img 
                        src="https://res.cloudinary.com/dmadollpi/image/upload/v1752730103/Artboard_1_1_fdoeoa.png" 
                        alt="img-logo" 
                        className='crm-imh' 
                        />
                        <h1 className='crm-li-h'>Lead Management + CRM Setup</h1>
                        <p className='crem-li-p'>Custom setup to track, assign, and follow up leads without losing a single one.</p>
                    </div>
                </li>
                <li className='li-crm cont2'>
                    <div className='li-crm-cont'>
                        <img 
                        src="https://res.cloudinary.com/dmadollpi/image/upload/v1752730155/Artboard_2_1_nlvtya.png"
                         alt="img-logo" 
                         className='crm-imh' 
                         />
                        <h1 className='crm-li-h'>Automated Follow-Ups</h1>
                        <p className='crem-li-p'>Never forget to send a message or proposal again.</p>
                    </div>
                </li>
                <li className='li-crm cont3'>
                    <div className='li-crm-cont'>
                        <img 
                        src= "https://res.cloudinary.com/dmadollpi/image/upload/v1752730203/Artboard_3_1_qbw9bq.png"
                         alt="img-logo" 
                         className='crm-imh' />
                        <h1 className='crm-li-h'>Sales Funnel Dashboards</h1>
                        <p className='crem-li-p'>Real-time insights on how your business is actually performing.</p>
                    </div>
                </li>
                <li className='li-crm cont4'>
                    <div className='li-crm-cont'>
                        <img 
                        src="https://res.cloudinary.com/dmadollpi/image/upload/v1752730233/Artboard_4_1_ug3vjw.png"
                         alt="img-logo" 
                         className='crm-imh' 
                         />
                        <h1 className='crm-li-h'>Client Retention Systems</h1>
                        <p className='crem-li-p'>Keep customers warm, engaged, and coming back—without manual work.</p>
                    </div>
                </li>
            </ul>
        </div>
    )
}

export default Services