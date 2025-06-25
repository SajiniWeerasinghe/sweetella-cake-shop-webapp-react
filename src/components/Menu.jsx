const items = [
    {
        img: "images/chocolate-cake.png",
        name: "Cherry Chocolate Bliss",
        text:
            "A rich chocolate cake topped with cherries for a sweet, indulgent treat.",
    },
    {
        img: "images/Pink Chocolate Gâteau Cake.png",
        name: "Pink Chocolate Gâteau",
        text:
            "A delicious chocolate cake topped with creamy pink frosting for a sweet and colorful treat.",
    },
    {
        img: "images/Purple Oreo Bliss.png",
        name: "Purple Oreo Bliss",
        text:
            "Creamy cake with purple drizzle, Oreo toppings, and a touch of elegance.",
    },
    {
        img: "images/heartshaped-chocolate-drizzled-cake.png",
        name: "Chocolate Heart Delight",
        text:
            "Heart-shaped chocolate cake with pink frosting, chocolate drizzle, and crunchy toppings.",
    },
    {
        img: "images/Decorated Cupcakes.png",
        name: "Rainbow Cupcake",
        text:
            "A light and fluffy cupcake topped with colorful rainbow sprinkles for a fun and sweet treat.",
    },
    {
        img: "images/strawberry-cheesecake-.png",
        name: "Strawberry Cheesecake",
        text:
            "A creamy cheesecake topped with fresh strawberries for a sweet, tangy treat.",
    },
];

export default function Menu() {
    return (
        <section className="menu-section" id="menu">
            <h2 className="section-title">Our Menu</h2>

            <div className="section-content">
                <ul className="menu-list">
                    {items.map((m) => (
                        <li className="menu-item" key={m.name}>
                            <img src={m.img} alt={m.name} className="menu-image" />
                            <h3 className="name">{m.name}</h3>
                            <p className="text">{m.text}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}
