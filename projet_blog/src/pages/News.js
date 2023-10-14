import React, { useEffect, useState } from "react";
import axios from "axios";
import Article from "../components/Article";

const News = () => {
  const [newsData, setNewData] = useState([]);
  const [author, setAuthor] = useState("");
  const [content, setContent] = useState("");
  const [error, setError] = useState(false);

  //   pour récupérer les données_______________________________________

  const getData = () => {
    axios
      .get("http://localhost:3003/articles")
      .then(res => setNewData(res.data));
  };

  useEffect(() => {
    getData();
  }, []);

  //   pour gérer les posts_______________________________________
  const handleSubmit = e => {
    e.preventDefault();
    // console.log("test");

    if (content.length < 10) {
      setError(true);
    } else {

        const currentDate = new Date().toLocaleDateString();
      axios
        .post("http://localhost:3003/articles", {
          author,
          content,
          date: currentDate
        })
        .then(() => {
          setError(false);
          setAuthor("");
          setContent("");
          getData();
        });
    }
  };

  // fonction pour supprimer un post --------------------------------------

  const handleDelete = id => {
    axios.delete(`http://localhost:3003/articles/${id}`)
    .then(() => {
      setNewData((prevNewsData) => prevNewsData.filter(article => article.id !== id)
    );
  })
  .catch((error) => {
    console.log("Erreur lors de la supression du post : ", error);

  })
  .then(() => {
    setError(false);
    setAuthor("");
    setContent("");
    getData();
  });
};

  return (
    <div className="news_container">
      <h1> News </h1>

      <form onSubmit={e => handleSubmit(e)}>
        <input
          placeholder="Nom"
          type="text"
          value={author}
          onChange={e => setAuthor(e.target.value)}
        />

        <textarea
          style={{ border: error ? "1px solid red" : "1px solid #61dafb" }}
          placeholder="Message"
          value={content}
          onChange={e => setContent(e.target.value)}
        />
        {error && <p> Veuillez écrire un minimum de 10 caractères </p>}

        <input type="submit" value="Envoyer" />
      </form>

      <ul>
        {newsData
        .sort((a,b) => b.date - a.date)
        .map(article =>
          <Article key={article.id} article={article} onDelete={handleDelete} />
        )
        .reverse()}
      </ul>
    </div>
  );
};

export default News;
