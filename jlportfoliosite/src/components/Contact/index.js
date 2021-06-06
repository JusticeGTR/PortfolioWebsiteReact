import React from "react";

export function Contact() {
    return (
        <section class="row contact" id="contact">
                <h2 class="col rightBorder rotate">Contact</h2>
                <ul class="col contactList">
                    {/* <!-- email --> */}
                    <li class="contactItems"><a href="mailto:justinlindseylhr@gmail.com"
                            target="_blank">justinlindseylhr@gmail.com</a></li>
                    {/* <!-- linkedin --> */}
                    <li class="contactItems"><a href="https://www.linkedin.com/in/justin-lindsey-7b308622/">LinkedIn</a>
                    </li>
                    {/* <!-- other site links? --> */}
                    <li class="contactItems"><a href="https://github.com/JusticeGTR">Github</a></li>
                </ul>
            </section>
    )
}

export default Contact;