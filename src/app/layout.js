import { Header } from "@/compomentes/Headar";
import { Footer } from "@/compomentes/Footer";

export const metadata = {
  title: "Carros Luxuosos",
  description: "Loja de Carro",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>
        <Header/>
          {children}
        <Footer/>
      </body>
    </html>
  );
}
