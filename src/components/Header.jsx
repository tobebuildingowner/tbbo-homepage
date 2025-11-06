import { menuList } from "../constants/menuList";
import CI from "../assets/images/CI_full.png"

export default function Header({refs}) {

    const handleClick = (key) => {
        refs[key]?.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
        })
    }

    return(
        <header>
            <img src={CI} alt="CI"/>
            <div>
                {Object.values(menuList).map((v)=>(
                    <div onClick={()=>handleClick(v.ref)} key={v.ref}>{v.menu}</div>
                ))}
            </div>
        </header>
    )
} 