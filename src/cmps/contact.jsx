
export function Contact() {

    return (
        <section id='contact' className='contact main-layout'>
            <h2>Contact</h2>
            <p className="subtitle">I look forward to hearing from you! Feel free to contact me for any further information</p>
            <div className="contact-container">
                <div className='contact-info'>
                    <div className="contact-info-1">
                        <div className="info email">
                            <img src={require("../assets/img/contact icons/email.png")} />
                            <a href='mailto:shanianconina310@gmail.com'>shanianconina310@gmail.com</a>
                        </div>
                        <div className="info linkedin">
                            <img src={require("../assets/img/contact icons/linkedin.png")} />
                            <a href='https://www.linkedin.com/in/shani-anconina/' target='_blank'>linkedin.com/in/shani-anconina</a>
                        </div>
                    </div>
                    <div className="contact-info-2">

                        <div className="info phone">
                            <img src={require("../assets/img/contact icons/phone.png")} />
                            <a href='tel:0524411778'>052-4411778</a>
                        </div>
                        <div className="info github">
                            <img src={require("../assets/img/contact icons/github.png")} />
                            <a href='https://github.com/ShaniAnconina' target='_blank'>github.com/ShaniAnconina</a>
                        </div>
                    </div>
                </div>
                <img src={require("../assets/img/shani-contact.png")} />
            </div>
        </section>
    )
}
