const IMAGES = [
    "https://img.freepik.com/free-photo/view-various-assortment-cakes-stand-bakery_181624-61697.jpg",
    "https://img.freepik.com/free-photo/crop-person-holding-cake_23-2147787022.jpg",
    "https://img.freepik.com/free-photo/view-delicious-sweet-cupcake-desserts-with-frosting_23-2150679642.jpg",
    "https://img.freepik.com/free-photo/groom-bride-hold-knife-while-they-cut-wedding-cake_8353-50.jpg",
    "https://img.freepik.com/free-photo/ai-generated-cake-picture_23-2150649268.jpg",
    "https://img.freepik.com/free-photo/close-up-photo-cakes-girls-party_176420-6172.jpg",
];

export default function Gallery() {
    return (
        <section className="gallery-section" id="gallery">
            <h2 className="section-title">Gallery</h2>

            <div className="section-content">
                <ul className="gallery-list">
                    {IMAGES.map((src, i) => (
                        <li className="gallery-item" key={i}>
                            <img src={src} alt="Gallery" className="gallery-image" />
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}
