import './index.css'
import { FaRegHandPointRight } from "react-icons/fa";
import { VscDebugBreakpointLog } from "react-icons/vsc";

const serviceslist = [
    {
        id: 1,
        service: 'Suites',
        sub_services: ["Zoho One", "Zoho CRM Plus", "Zoho Finance Plus"],
        service_image: "https://res.cloudinary.com/dmadollpi/image/upload/v1752730103/Artboard_1_1_fdoeoa.png"
    },
    {
        id: 2,
        service: 'Sales & Marketing Automation',
        sub_services: ["Zoho CRM – for lead management & sales pipeline",
            "Zoho SalesIQ – for website chat & lead capture",
            "Zoho Campaigns & Zoho Social – for automated outreach"],
        service_image: 'https://res.cloudinary.com/dmadollpi/image/upload/v1752730155/Artboard_2_1_nlvtya.png'
    },
    {
        id: 3,
        service: 'Finance & Billing',
        sub_services: ["Zoho Books – for accounting",
            "Zoho Inventory, Invoices & Subscriptions – for smooth finance ops"],
        service_image: "https://res.cloudinary.com/dmadollpi/image/upload/v1752730203/Artboard_3_1_qbw9bq.png"
    },
    {
        id: 4,
        service: 'Business Process & Analytics',
        sub_services: ["Zoho Creator – build custom apps",
            "Zoho Analytics – real-time dashboards",
            "Zoho Flow – connect and automate workflows"],
        service_image: "https://res.cloudinary.com/dmadollpi/image/upload/v1752730233/Artboard_4_1_ug3vjw.png"
    },
    {
        id: 5,
        service: 'Support & Survey',
        sub_services: ["Zoho Desk – for client ticketing",
            "Zoho Assist – for remote support",
            "Zoho Survey – for gathering insights"],
        service_image: ""
    },
    {
        id: 6,
        service: 'Team Collaboration & Productivity',
        sub_services: ["Zoho Mail, Cliq, Docs & Workplace – for internal communication",
            "Zoho Projects & Zoho Connect – for team management"],
        service_image: ""
    },
    {
        id: 7,
        service: 'HR & People Ops',
        sub_services: ["Zoho People, Recruit & Payroll – for hiring, onboarding, and payroll automation"],
        service_image: ""
    }
]

const Services = () => {
    return (
        <div id='services' className='crm-bg-cont'>
            <h1 className='hon-h'>What we Implement for you</h1>
            <p className='hon-p'>We don’t just set up Zoho CRM — we build your entire business OS.</p>
            <p className=''>Hakimi helps you transition from scattered tools to a seamless, automated system using Zoho’s full suite of business apps.</p>
            {/*<ul className='crm-ul'>
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
                            src="https://res.cloudinary.com/dmadollpi/image/upload/v1752730203/Artboard_3_1_qbw9bq.png"
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
            </ul>*/}
            <ul className='crm-ul'>
                {serviceslist.map(each => (
                    <li key={each.id} className='li-crm'>
                        <div className='li-crm-cont'>
                            <img
                                src={each.service_image}
                                alt="service image"
                                className='crm-imh'
                            />
                            <h1 className='crm-li-h'>{each.service}</h1>
                            {each.sub_services.map(eachserve => 
                                <p className='crem-li-p'><VscDebugBreakpointLog className='point' />  {eachserve}</p>
                            )}
                            </div>
                    </li>
                ))
                }
            </ul>
        </div>
    )
}

export default Services