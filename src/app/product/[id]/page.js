import Image from "next/image";
import { NextResponse } from "next/server";
import style from "../../style/pageId.module.css"

export default async function Api({ params }) {

  const resposta = await fetch("http://localhost:3000/api/" + params.id, {
    next: {
      revalidate: 1
    }
  })
  
  const data = await resposta.json();

  return (
    <main className={style.container}>
      <div className={style.img}>
        <Image width={500} height={400} src={data.imagem} alt={data.modelo} />
      </div>
      <div className={style.card}>
        <h1>{data.modelo} - {data.anoDoCarro}</h1>
        <h2 className={style.h2}>{data.marca}</h2>
        <p className={style.p}>{data.descricao}</p>
        <h3>R$ {data.preco}</h3>

      </div>
      <div className={style.card}>

        <h2 className={style.h2}>Informações Técnicas</h2>
        <p className={style.p}><strong>Motor:</strong> {data.motor}</p>
        <p className={style.p}><strong>Tipo de Combustível:</strong> {data.tipoDeCombustivel}</p>
        <p className={style.p}><strong>Consumo Médio:</strong> {data.consumoMedio}</p>
        <p className={style.p}><strong>Transmissão:</strong> {data.transmissao}</p>
        <p className={style.p}><strong>Tração:</strong> {data.tracao}</p>
        <p className={style.p}><strong>Capacidade do Tanque:</strong> {data.capacidadeDoTanque}</p>
        <p className={style.p}><strong>Aceleração (0 a 100 km/h):</strong> {data.aceleracao0a100}</p>
        <p className={style.p}><strong>Velocidade Máxima:</strong> {data.velocidadeMaxima}</p>
        <p className={style.p}><strong>Potência:</strong> {data.potencia}</p>
        <p className={style.p}><strong>Torque:</strong> {data.torque}</p>
      </div>
      <div className={style.card}>
        <h2>Dimensões</h2>
        <p className={style.p}><strong>Comprimento:</strong> {data.dimensoes.comprimento}</p>
        <p className={style.p}><strong>Largura:</strong> {data.dimensoes.largura}</p>
        <p className={style.p}><strong>Altura:</strong> {data.dimensoes.altura}</p>
        <p className={style.p}><strong>Distância entre Eixos:</strong> {data.dimensoes.distanciaEntreEixos}</p>
        <h2 className={style.h2}>Itens de Série</h2>
        <ul className={style.ul}>
          {data.itensDeSerie.map((item, index) => (
            <li className={style.li} key={index}>{item}</li>
          ))}
        </ul>
        <h2>Segurança</h2>
        <ul>
          {data.seguranca.map((item, index) => (
            <li className={style.li} key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </main>
  );
}
