import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const YaziDetayListesi = ({ formatDate }) => {
  const [yaziDetayi, setYaziDetayi] = useState({});
  const { id } = useParams();
  useEffect(() => {
    axios
    .get(`http://localhost:8080/api/Items/${id}`)
      .then((response) => {
        setYaziDetayi(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  return (
    <React.Fragment>
      <h2 className="ui header">{yaziDetayi.title}</h2>
      <p>{formatDate(yaziDetayi.createdAt)}</p>
      <p>{yaziDetayi.content}</p>
    </React.Fragment>
  ); 
}

export default YaziDetayListesi;
