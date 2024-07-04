"use client";
import Image from "next/image";
import style from "../app/style/page.module.css";
import { useEffect, useState } from "react";
import Carregamento from "./Carregamento";
import ErroCapturaDados from "./ErroCapturaDados";
import Link from "next/link";

export default function Main() {
  const [listProduct, setProduct] = useState([]);
  const [listComplete, setListComplete] = useState([]);
  const [textSearch, setTextSearch] = useState("");
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const getProduct = async () => {
      try {
        const resposta = await fetch("http://localhost:3000/api");
        const data = await resposta.json();
        setProduct(data);
        setListComplete(data);
      } catch (error) {
        setIsError(true);
      }
    };
    getProduct();
  }, []);

  const orderAz = () => {
    const listAux = [...listProduct].sort((a, b) => a.modelo.localeCompare(b.modelo));
    setProduct(listAux);
  };

  const orderZa = () => {
    const listAux = [...listProduct].sort((a, b) => b.modelo.localeCompare(a.modelo));
    setProduct(listAux);
  };

  const parsePrice = (price) => {
    const numericPart = price.replace(/[^\d]/g, '');
    return parseInt(numericPart, 10);
  };

  const orderPrecoMenor = () => {
    const listAux = [...listProduct].sort((a, b) => parsePrice(a.preco) - parsePrice(b.preco));
    setProduct(listAux);
  };

  const orderPrecoMaior = () => {
    const listAux = [...listProduct].sort((a, b) => parsePrice(b.preco) - parsePrice(a.preco));
    setProduct(listAux);
  };

  const search = (text) => {
    setTextSearch(text);
    if (text.trim() === "") {
      setProduct(listComplete);
      return;
    }
    const novaLista = listComplete.filter((product) =>
      product.modelo.toUpperCase().trim().includes(text.toUpperCase().trim())
    );
    setProduct(novaLista);
  };

  if (isError) {
    return <ErroCapturaDados />;
  }

  if (listComplete.length === 0) {
    return <Carregamento />;
  }

  return (
    <>
      <div className={style.filters}>
        <div>
          <input
            type="text"
            value={textSearch}
            placeholder="Pesquise um produto"
            onChange={(event) => search(event.target.value)}
          />
        </div>
        <div>
          <button onClick={orderAz}>A - Z</button>
          <button onClick={orderZa}>Z - A</button>
          <button onClick={orderPrecoMenor}>Menor preço</button>
          <button onClick={orderPrecoMaior}>Maior preço</button>
        </div>
      </div>
      <main className={style.corpo}>
        {listProduct.map((carros) => (
          <div className={style.card} key={carros.id}>
            <Image width={300} height={300} src={carros.imagem} alt={carros.modelo} />
            <h1>{carros.modelo} - {carros.anoDoCarro}</h1>
            <h2>{carros.marca}</h2>
            <h3 className={style.preco}>R$: {carros.preco}</h3>
            <Link href={"/api/" + carros.id}>
              <button>Ver mais</button>
            </Link>
          </div>
        ))}
      </main>
    </>
  );
}