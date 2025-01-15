import { useEffect, useState } from "react"
import logo from "../assets/logo.png"
const Header = () => {
    // const [pre, setPre] = useState("");
    const [active, setActive] = useState(JSON.parse(localStorage.getItem("active")) || "light");
    // const [bgColor, setbgColor] = useState(null);
    const bgColor = document.getElementById("root");
    useEffect(() => {
        localStorage.setItem("active", JSON.stringify(active))

        bgColor.removeAttribute("class");
        bgColor.classList.add(active);

    }, [active, bgColor])
    // useEffect(() => {
    //     setbgColor(document.getElementById("root"));
    // }, [])
    // function addBg(color) {
    //     // setActive(color);
    //     // bgColor.classList.remove(pre);
    //     bgColor.classList.remove(active);
    //     bgColor.classList.add(color);
    //     // setPre(color);
    //     setActive(color)
    // }

    return (
        <header>
            <div className="logo">
                <img src={logo} alt="Taskmate logo" />
                <span>Taskmate</span>
            </div>
            <div className="themeSelector">
                <span onClick={() => setActive("light")} className={active === "light" ? "light activeTheme " : "light"} ></span>
                <span onClick={() => setActive("medium")} className={active === "medium" ? "medium activeTheme " : "medium"}></span>
                <span onClick={() => setActive("dark")} className={active === "dark" ? "dark activeTheme " : "dark"} ></span>
                <span onClick={() => setActive("gOne")} className={active === "gOne" ? "gOne activeTheme " : "gOne"}></span>
                <span onClick={() => setActive("gTwo")} className={active === "gTwo" ? "gTwo activeTheme " : "gTwo"}></span>
                <span onClick={() => setActive("gThree")} className={active === "gThree" ? "gThree activeTheme " : "gThree"}></span>
            </div>
            {/* <div className="themeSelector">
                <span onClick={() => setActive("light")} className={active === "light" ? "light activeTheme " : "light"} ></span>
                <span onClick={() => setActive("medium")} className={active === "medium" ? "medium activeTheme " : "medium"}></span>
                <span onClick={() => setActive("dark")} className={active === "dark" ? "dark activeTheme " : "dark"} ></span>
                <span onClick={() => setActive("gOne")} className={active === "gOne" ? "gOne activeTheme " : "gOne"}></span>
                <span onClick={() => setActive("gTwo")} className={active === "gTwo" ? "gTwo activeTheme " : "gTwo"}></span>
                <span onClick={() => setActive("gThree")} className={active === "gThree" ? "gThree activeTheme " : "gThree"}></span>
            </div> */}
        </header >
    )
}

export default Header
