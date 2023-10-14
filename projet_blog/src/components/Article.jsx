import React, { useState } from "react";
import axios from "axios";

const Article = ({ article,onDelete }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedContent, setEditedContent] = useState(article.content || "");

  //gere l'édition de notre contenue______________________________________

  const handleEdit = () => {
    const data = {
        author: article.author,
        content: editedContent ? editedContent : article.content,
        date: article.date
    };

    axios
    .put(`http://localhost:3003/articles/${article.id}`, data)
    .then(()=>setIsEditing(false));
    
  };

  // suppression du post -------------------------------

  const handleDelete = () => {
    axios
    .delete(`http://localhost:3003/articles/${article.id}`).then(() => {
        onDelete(article.id);
    })
    .catch(error => {
        console.log("erreur de la suppression du post: ", error);
    });
    

  };

  return (
    <div 
      className="article"
      style={{ background: isEditing ? "orange" : "white" }}
    >
      <div className="card_header">
        <h3>
          {article.author}
        </h3>
        <br />
        <em>
          {" "}posté le : {article.date}{" "}
        </em>
      </div>

      <div>

        {isEditing
          ? <textarea
          onChange={e=> setEditedContent(e.target.value)}
              cols="30"
              rows="10"
              defaultValue={editedContent ? editedContent : article.content}
            />
          : <p>
              {editedContent ? editedContent : article.content}
            </p>}
      </div>

      <div className="btn_container">
        {isEditing 
        ? <button onClick={handleEdit}> Valider </button> 
        : <button onClick={() => setIsEditing(true)}> Editer </button>}
        
        <button onClick={handleDelete}> Supprimer </button>
      </div>
    </div>
  );
};

export default Article;
