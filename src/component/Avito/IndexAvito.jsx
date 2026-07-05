import { useState } from "react";
import { getIdsAndNamesFromAvitoString } from "../../helpers/returnIDByNameFromAvito";
import BasicTable from "../Create Table/Table";
import style from "../styles.module.css";

const IndexAvito = ({ el, avitoData }) => {
  const [isOpen, setIsOpen] = useState(false);
  const resultArr = [];

  avitoData.map((avito) => {
    const productIdString = avito.id;
    if (!productIdString) return;

    const foundProducts = getIdsAndNamesFromAvitoString(productIdString);
    
    foundProducts.forEach((product) => {
      resultArr.push({
        id: product.id,
        name: product.name,
        price: avito.price || "—",
        provider: "Avito",
      });
    });
  });

  return (
    <div>
      <div>
        {el.length > 1 && (
          <span className={style.title} onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? "Avito ▲" : "Avito ▼"}
          </span>
        )}
      </div>

      {isOpen && (
        <div className={style.row}>
          <BasicTable resultArr={resultArr} />
        </div>
      )}
    </div>
  );
};

export default IndexAvito;