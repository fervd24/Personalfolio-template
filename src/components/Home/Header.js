
import Button from "../Button/Button";
import developer from "../../assets/developer.png"
import { useContext, useEffect } from "react";
import { ThemeContext } from "../../Theme";

import "./Header.css";
import Aos from "aos";


export default function Header() {
    const { theme } = useContext(ThemeContext);

    useEffect(() => {
        Aos.init({ duration: 2100 });
      },[]);

    return(
        <header className={`${theme} whoamiContainer`}>
                <div className="whoamiSubcontainer">
                    <div className={`${theme} whoamiText`} data-aos='fade-right'>
                        <div>
                            <h2>Hi everyone, I'm Fernando</h2>
                            <p>
                                An aspiring web developer who loves to take
                                on new challenging projects and put to the test 
                                his analytical and technological capacities.
                            </p>
                            <div className="btnsContainer">
                                <Button textBtn="Follow me on Github" path={'https://github.com/fervd24'}/>
                                <Button textBtn="See my resume" path={'https://drive.google.com/file/d/1QPjgB9c98D5B5oyKWMaDshY1BDDrUMAc/view?usp=sharing'}/>
                            </div>
                        </div>
                    </div>
                    <div className="imgContainer" data-aos='fade-left'>
                        <img src={developer} alt="dev"/>
                    </div>
                </div>
            </header>
    )
}