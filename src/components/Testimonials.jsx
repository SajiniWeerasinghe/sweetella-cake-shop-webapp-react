import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

const DATA = [
    {
        img: "https://img.freepik.com/free-photo/cheerful-indian-man_1098-18167.jpg",
        name: "Dilan Fernando",
        feedback:
            '"I ordered a customized birthday cake, and it was beyond my expectations. The detailing was perfect, and the taste was simply amazing."',
    },
    {
        img: "https://img.freepik.com/free-photo/woman-trendy-summer-sundress_158538-16608.jpg",
        name: "Sanduni Jayawardena",
        feedback:
            '"The team at Sweetella is so friendly and accommodating. They helped me choose the perfect cake for my anniversary."',
    },
    {
        img: "https://img.freepik.com/free-photo/stylish-indian-man-with-bindi-forehead-glasses-wear-suit-posed-outdoor_627829-1723.jpg",
        name: "Kevin Gewon",
        feedback:
            '"I recently tried their chocolate fudge cake, and it was pure bliss. The perfect balance of sweetness and softness made it one of the best cakes I’ve ever had."',
    },
    {
        img: "https://img.freepik.com/free-photo/beautiful-woman-purple-sweater-skirt_1303-17488.jpg",
        name: "Dinuki Wijesinghe",
        feedback:
            '"From cupcakes to wedding cakes, Sweetella never disappoints. Their cakes are moist, fresh, and packed with flavor."',
    },
    {
        img: "https://img.freepik.com/free-photo/woman-with-floral-shirt-medium-shot_23-2148286112.jpg",
        name: "Jenifer Silva",
        feedback:
            '"If you\'re looking for a beautifully designed cake with amazing taste, this is the place."',
    },
];

export default function Testimonials() {
    return (
        <section className="testimonials-section" id="testimonials">
            <h2 className="section-title">Testimonials</h2>

            <div className="section-content">
                <Swiper
                    className="slider-wrapper"
                    modules={[Navigation, Pagination]}
                    loop
                    grabCursor
                    spaceBetween={25}
                    navigation
                    pagination={{ clickable: true, dynamicBullets: true }}
                    breakpoints={{
                        0: { slidesPerView: 1 },
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                    }}
                >
                    {DATA.map((t) => (
                        <SwiperSlide key={t.name} className="testimonial">
                            <img src={t.img} alt={t.name} className="user-image" />
                            <h3 className="name">{t.name}</h3>
                            <i className="feedback">{t.feedback}</i>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
}
