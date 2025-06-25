export default function Hero() {
    return (
        <section className="hero-section">
            <div className="section-content">
                <div className="hero-details">
                    <h2 className="title">Your Cake, Your Moment</h2>
                    <h3 className="subtitle">
                        Make your day sweeter with our special cakes!
                    </h3>
                    <p className="description">
                        Celebrate with our decadent, freshly baked creations
                    </p>

                    <div className="buttons">
                        <a href="tel:+94 456-87906" className="button order-now">
                            Order Now
                        </a>
                    </div>
                </div>

                <div className="hero-image-wrapper">
                    <img src="images/main-hero.png" alt="" className="hero-image" />
                </div>
            </div>
        </section>
    );
}
