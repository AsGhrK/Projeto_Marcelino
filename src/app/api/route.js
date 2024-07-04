import { NextResponse } from "next/server"

export const listaDeCarros = [
    {
        id: 1,
        modelo: "718 Cayman",
        marca: "Porche",
        anoDoCarro: 2016,
        motor: "Motor boxer biturbo de 2,0 litros",
        preco: "R$ 535 mil",
        descricao: "Ele desenvolve 220 kW (300 CV) a 6.500 1/min. Torque máximo: 380 Nm. Com o transmissão Porsche Doppelkupplung (PDK), o 718 Boxster e o 718 Cayman aceleram de 0 a 100 km/h em apenas 4,9 s, com velocidade máxima de 275 km/h",
        imagem: "---------"
    },
]

export async function GET(){
    return NextResponse.json(listaDeCarros)
}