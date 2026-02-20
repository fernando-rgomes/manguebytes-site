import React from "react"

const NewsCard = ({ image, date, title, description, link }) => {
  return (
    <article className="news-card">
      <div className="news-image">
        <img src={image} alt={title} />
      </div>

      <div className="news-content">
        <span className="news-date">{date}</span>
        <h3 className="news-title">{title}</h3>
        <p className="news-description">{description}</p>

        <a
          href={link}
          className="news-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          continuar leitura ⤴
        </a>
      </div>
    </article>
  )
}

export default NewsCard