import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
    const [open, setOpen] = useState(false);

    /* replicate the old “show-mobile-menu” body class for CSS */
    useEffect(() => {
        document.body.classList.toggle("show-mobile-menu", open);
    }, [open]);

    const close = () => setOpen(false);

    const links = [
        ["#", "Home"],
        ["#about", "About"],
        ["#menu", "Menu"],
        ["#testimonials", "Testimonials"],
        ["#gallery", "Gallery"],
        ["#contact", "Contact"],
    ];

    return (
        <header>
            <nav className="navbar section-content">
                <a href="#" className="nav-logo">
                    <img src="images/favicon.png" className="logo-icon" alt="" />
                    <h2 className="logo-text">Sweetella</h2>
                </a>

                {/* --- mobile nav --- */}
                <ul className="nav-menu">
                    <button
                        id="menu-close-button"
                        onClick={close}
                        style={{
                            position: "absolute",
                            top: "30px",
                            right: "30px",
                            background: "none",
                            border: "none",
                            fontSize: "1.5rem",
                            color: "#252525",
                        }}
                    >
                        <FaTimes />
                    </button>

                    {links.map(([href, label]) => (
                        <li className="nav-item" key={href}>
                            <a href={href} className="nav-link" onClick={close}>
                                {label}
                            </a>
                        </li>
                    ))}
                </ul>

                <button
                    id="menu-open-button"
                    onClick={() => setOpen((p) => !p)}
                    style={{
                        background: "none",
                        border: "none",
                        fontSize: "1.5rem",
                        color: "white",
                        display: "block",
                    }}
                >
                    <FaBars />
                </button>
            </nav>
        </header>
    );
}
