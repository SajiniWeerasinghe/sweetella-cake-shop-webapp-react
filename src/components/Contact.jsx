import { useRef } from "react";

export default function Contact() {
    const formRef = useRef();

    const handleSubmit = (e) => {
        // Let Web3Forms handle the submission normally
        // Then reset the form after a short delay
        setTimeout(() => {
            if (formRef.current) {
                formRef.current.reset();
            }
        }, 1000); // Adjust delay if needed
    };

    return (
        <section className="contact-section" id="contact">
            <h2 className="section-title">Contact Us</h2>

            <div className="section-content">
                <ul className="contact-info-list">
                    <li className="contact-info">
                        <i className="fa-solid fa-location-crosshairs" />
                        <p>No 404, Main Road, Ratnapura</p>
                    </li>
                    <li className="contact-info">
                        <i className="fa-regular fa-envelope" />
                        <p>info@sweetella.com</p>
                    </li>
                    <li className="contact-info">
                        <i className="fa-solid fa-phone" />
                        <p>(+94) 456-87906</p>
                    </li>
                    <li className="contact-info">
                        <i className="fa-regular fa-clock" />
                        <p>Monday – Saturday : 9 AM – 5 PM</p>
                    </li>
                    <li className="contact-info">
                        <i className="fa-regular fa-clock" />
                        <p>Sunday : Closed</p>
                    </li>
                    <li className="contact-info">
                        <i className="fa-solid fa-globe" />
                        <p>www.sweetella.com</p>
                    </li>
                </ul>

                {/* Web3Forms-powered form */}
                <form
                    className="contact-form"
                    action="https://api.web3forms.com/submit"
                    method="POST"
                    ref={formRef}
                    onSubmit={handleSubmit}
                >
                    <input
                        type="hidden"
                        name="access_key"
                        value="d1e9cca3-d10c-4e8a-97fc-d27874f8b169"
                    />
                    <input
                        type="text"
                        name="name"
                        placeholder="Your name"
                        className="form-input"
                        required
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Your email"
                        className="form-input"
                        required
                        pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                        title="Enter a valid email address like example@domain.com"
                    />
                    <textarea
                        name="message"
                        placeholder="Your message"
                        className="form-input"
                        rows="4"
                        required
                    />
                    <button className="submit-button" type="submit">
                        Submit
                    </button>
                </form>
            </div>
        </section>
    );
}
