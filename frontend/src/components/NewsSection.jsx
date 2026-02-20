import React from "react"
import NewsCard from "./NewsCard"
import "./News.css"

const NewsSection = () => {
  const newsData = [
    {
      id: 1,
      image: "/images/noticia1.png",
      date: "Fevereiro 12, 2026",
      title: "Mangue Bytes alcança 1º lugar na seleção para etapa de mercado.",
      description:
        "Equipes do CCAE são selecionados para fase de mercado do Bootcamp Aceler.AI Deep Techs PB...",
      link: "https://www.instagram.com/p/DUqUiZTAYLw/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    },
    {
      id: 2,
      image: "/images/noticia2.png",
      date: "Dezembro 18, 2025",
      title: "MVP da MangueBytes no Aceler.AI Deep Techs PB ",
      description:
        "MangueBytes Apresenta o primeiro MVP do seu sistema BiosatMangue no Aceler.AI Deep Techs Promovido pela Virtus...",
      link: "https://youtu.be/iFtmBeJG33g?si=GR-cHQejGKn2ENxR",
    },
    {
      id: 3,
      image: "/images/noticia3.png",
      date: "Julho 28, 2025",
      title: "Mangue Bytes conquista 3º lugar no Hackathon da EXPOTEC",
      description:
        "Estudantes do Campus IV da UFPB conquistaram o terceiro lugar no Hackathon da EXPOTEC 2025, recebendo um prêmio de...",
      link: "https://www.instagram.com/p/DMqSn58Olqj/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    },
  ]

  return (
    <section className="news-section">
      <div className="news-wrapper">
        <h2 className="news-heading">Últimas notícias</h2>

        <div className="news-grid">
          {newsData.map((item) => (
            <NewsCard key={item.id} {...item} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default NewsSection