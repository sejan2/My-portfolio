
import Phone from '../../../img/phone.png'
import Email from '../../../img/email.png'
import Address from '../../../img/address.png'
import './contact.css'

const Contact = () => {
    return (
        <div className="c" style={{ background: 'black', color: 'white' }} id="contact">
            <div className="c-bg"></div>
            <div className="c-wrapper">
                <div className="c-left">
                    <h5 className="c-title">Let's discuss about project</h5>
                    <div className="c-info">
                        <div className="c-info-item">
                            <img src={Phone} alt="" className="c-icon" />
                            +8801996584977
                        </div>
                        <div className="c-info-item">
                            <img className="c-icon" src={Email} alt="" />
                            sejansiju2020@gmail.com
                        </div>
                        <div className="c-info-item">
                            <img className="c-icon" src={Address} alt="" />
                            Mirpur-2,Dhaka,Bangladesh
                        </div>
                    </div>
                </div>
                <div className="c-right">
                    <div style={{ width: '60%' }}>
                        <h3 className="c-desc">
                            <b>What’s your story?</b> Get in touch. Always available for the
                            job if the right project comes along. me.
                        </h3>
                    </div>
                    <form action="https://formsubmit.co/sejansiju2020@gmail.com" method="POST">
                        <input type="text" placeholder="Name" name="name" required />
                        <input type="email" placeholder="Email" required />

                        <textarea rows="5" placeholder="Message" name="message" /><br />
                        <button type="submit">Submit</button>

                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;