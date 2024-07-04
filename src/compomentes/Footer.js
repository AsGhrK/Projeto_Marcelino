import style from "../app/style/footer.module.css"
import Image from "next/image"

export function Footer() {
    return (

        <div className={style.body}>
            <header className={style.footer}>
                <nav className={style.nav}>
                    <ul className={style.navul}>
                        <li className={style.navli}> <Image width={50} height={50} src={"https://cdn.iconscout.com/icon/free/png-512/free-instagram-1946323-1646407.png?f=webp&w=256"} /> </li>
                        <li className={style.navli}><Image width={50} height={50} src={"https://cdn-icons-png.flaticon.com/512/5969/5969020.png"} /></li>
                        <li className={style.navli}><Image width={50} height={50} src={"https://cdn-icons-png.flaticon.com/512/187/187189.png"} /></li>
                    </ul>
                </nav>
                <h1 className={style.h1}>Carros Luxuosos</h1>
                <Image width={100} height={100} src={"https://cdn.iconscout.com/icon/premium/png-512-thumb/arrastar-carro-3600143-3001198.png?f=webp&w=256"} />
            </header>

        </div>
    )
}