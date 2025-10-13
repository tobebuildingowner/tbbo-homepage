import { menuList } from "../constants/menuList";
import CI from "../assets/images/CI_full.png"

export default function Header({refs}) {


    return(
        <header>
            <img src={CI} alt="CI"/>
            <div>
                {Object.values(menuList).map((v, i)=>(
                    <div key={i}>{v.menu}</div>
                ))}
            </div>
        </header>
    )
} 