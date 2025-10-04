import { menuList } from "../constants/menuList";

export default function Header({refs}) {


    return(
        <header>
            {Object.values(menuList).map((v, i)=>(
                <div key={i}>{v.menu}</div>
            ))}
        </header>
    )
} 