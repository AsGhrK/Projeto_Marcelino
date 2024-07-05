import style from "../app/style/headar.module.css"
import Image from "next/image"
export function Header() {
    return (

        <div className={style.body}>
            <header className={style.headar}>
                <Image width={100} height={100} src={"https://cdn.iconscout.com/icon/premium/png-512-thumb/arrastar-carro-3600143-3001198.png?f=webp&w=256"} />
                <h1 className={style.h1}>Carros Luxuosos</h1>
                <nav className={style.nav}>
                    <ul className={style.navul}>
                        <li className={style.navli}> <Image width={20} height={20} src={"https://cdn-icons-png.flaticon.com/512/126/126510.png"} />  </li>
                        <li className={style.navli}>Usuários</li>
                        <li className={style.navli}>Suporte</li>
                    </ul>
                    <h1 className={style.h1}>Encontre os melhores carros de luxo na nossa loja!</h1>
                </nav>

            </header>

        </div>
    )
}