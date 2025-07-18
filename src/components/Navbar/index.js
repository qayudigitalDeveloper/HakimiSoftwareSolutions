import './index.css'
import logo from './../../assets/logo.png'

const navContent=[
    {
        id: 1,
        text: "Home",
        index: '#home'
    },
    {
        id: 2,
        text: "About Us",
        index: "#aboutus"
    },
    {
        id: 3,
        text: "Services",
        index: '#services'
    },
    {
        id: 4,
        text: "Blog",
        index: "#blog"
    },
    {
        id: 5,
        text: "Testimonials",
        index: '#testimolials'
    }
]

const Navbar=()=>{
    return (
        <div className="outer-cont">
            <img className='logo' src={logo} alt="logo" />
            <div className='nav-sub-cont'>
                <ul className='ul-nav'>
                    {navContent.map(each => 
                    <li className='li-nav' key={each.id} >
                        <a href={each.index}><p className='nav-text'>{each.text}</p></a>
                    </li> 
                    )}
                </ul>
            </div>
            <h1 className='big-text'>Contact Us</h1>
        </div>
    )
}

export default Navbar