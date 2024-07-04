import Image from "next/image"
import style from "../app/style/carregamento.module.css"

export default function Carregamento(){
    return(
        <div className={style.carregamento}>
        <Image width={100} height={100} alt="" src={"/carregando.svg"} />
        </div>
    )
} 