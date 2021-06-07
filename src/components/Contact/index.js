import React from "react";

export function Contact() {
    return (
        <section className="row contact" id="contact">
                <h2 className="col rightBorder rotate">Contact</h2>
                <ul className="col contactList">
                    {/* <!-- email --> */}
                    <li className="contactItems"><a href="mailto:justinlindseylhr@gmail.com"
                            target="_blank">justinlindseylhr@gmail.com</a></li>
                    {/* <!-- linkedin --> */}
                    <li className="contactItems"><a href="https://www.linkedin.com/in/justin-lindsey-7b308622/">LinkedIn</a>
                    </li>
                    {/* <!-- other site links? --> */}
                    <li className="contactItems"><a href="https://github.com/JusticeGTR">Github</a></li>
                </ul>
            </section>
    )
}

export default Contact;