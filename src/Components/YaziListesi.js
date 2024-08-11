import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const YaziListesi = ({ formatDate }) => {
  const [yaziListesi, setYaziListesi] = useState([]);
  useEffect(() => {
    axios
    .get("http://localhost:8080/api/Items")
      .then((response) => {
        setYaziListesi(response.data);
      })
      .catch((error) => console.error("Error:", error));
  }, []);

  return (
    <div className="ui relaxed divided list">
      {yaziListesi.map((yazi) => {
        return (
          <div key={yazi.id} className="item">
            <i className="large github middle aligned icon"></i>
            <div className="content">
              <Link to={`/posts/${yazi.id}`} className="header">
                {yazi.title}
              </Link>
              <div className="description">{formatDate(yazi.createdAt)}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default YaziListesi;
