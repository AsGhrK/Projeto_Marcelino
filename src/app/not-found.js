import Link from "next/link";
import Image from "next/image";
import style from "../app/style/notFound.module.css"

export default function NotFound() {
    return (
        <div className={style.notfoundcontainer}>
            <Link href={"/"}>
                <h1 className={style.h1notfound}>Página não encontrada</h1>
                <Image width={1000} height={500} src={"https://gringo.com.vc/wp-content/uploads/2022/05/bumerangueseguros.com_.br-bateram-no-meu-carro-e-fugiram-2.jpeg"} />
            </Link>
        </div>
    )
}
