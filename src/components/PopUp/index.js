import './index.css'

const PopUp = ({ message, onClose }) => {
    return (
        <div className="popup-overlay">
            <div className="popup-box">
                <h1>GET FREE QUOTE</h1>
                <p>If you have any requirement please share with us at
                    info@useo.ae or simply send us your inquiry by filling out the form below.</p>
                <form type="">

                    <label>Full Name<span>*</span></label>
                    <input type='text' />

                    <lable>Email<span>*</span></lable>
                    <input type='text' />

                    <label>Phone*</label>
                    <input type="text" />

                    <button type='submit'>Submit</button>
                </form>

                <h3>Popup</h3>
                <p>{message}</p>
                <button className="popup-close-btn" onClick={onClose}>Close</button>
            </div>
        </div>
    );
};

export default PopUp;
