export default function About() {
    return (
        <section className="about-section" id="about">
            <div className="section-content">
                <div className="about-image-wrapper">
                    <img
                        src="images/hero-img2.png"
                        alt="About"
                        className="about-image"
                    />
                </div>

                <div className="about-details">
                    <h2 className="section-title">About Us</h2>
                    <p className="text">
                        At Sweetella, we create cakes that bring joy and sweetness to every
                        occasion. Our cakes are made with the finest ingredients, ensuring
                        the perfect balance of flavor and texture. Whether you're
                        celebrating a special moment or just treating yourself, Sweetella
                        promises a delightful experience in every bite.
                    </p>

                    <div className="social-link-list">
                        <a href="#" className="social-link">
                            <i className="fa-brands fa-facebook" />
                        </a>
                        <a href="#" className="social-link">
                            <i className="fa-brands fa-instagram" />
                        </a>
                        <a href="#" className="social-link">
                            <i className="fa-brands fa-tiktok" />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
