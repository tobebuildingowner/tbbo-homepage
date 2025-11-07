import { menuList } from "../constants/menuList";
import CI from "../assets/images/CI_full.png"

export default function Header({refs}) {

    const handleClick = (key) => {
        const el = refs.current[key]
        if (!el) return
        console.log(key)
        el.scrollIntoView({ behavior: "smooth" })
    }

    return(
        <div id={`header-wrapper`}>
            <header>
                <img src={CI} alt="CI"/>
                <div>
                    {Object.values(menuList).map((v)=>(
                        <div onClick={()=>handleClick(v.ref)} key={v.ref}>{v.menu}</div>
                    ))}
                </div>
            </header>
        </div>
    )
} 