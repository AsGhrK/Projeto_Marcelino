import Link from "next/link";
import Image from "next/image";
import style from "../app/style/notFound.module.css"

export default function NotFound() {
    return (
        <div className={style.notfoundcontainer}>
            <Link href={"/"}>
                <h1 className={style.h1notfound}>Página não encontrada</h1>
                <Image width={500} height={500} src={"https://img.freepik.com/fotos-premium/uma-fotografia-de-uma-lhama-alpaca-fofa-e-adoravel_727939-14054.jpg"} />
            </Link>
        </div>
    )
}
