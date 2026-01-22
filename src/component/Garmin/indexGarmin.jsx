import { useState } from "react";
import { baseFixGarmin } from "../../helpers/baseFix";
import { defaultFixName } from "../../helpers/defaultFixName";
import { getIdByName } from "../../helpers/returnIDByName";
import BasicTable from "../Create Table/Table";
import style from "../styles.module.css";
import {
  fixNameGarmin,
  returnFixNameProductGarmin,
  returnStockPriceGarmin,
} from "./helpers/helpers";

// Проверка на разделитель
const isSeparator = (str) => /^[-—]{10,}$/.test(str.trim());

// Проверка на строку с датой/отправителем
const isMetadata = (str) => /G-Opt,|GadgetPark/.test(str);

// Проверка, содержит ли строка цену (формат: - XXX XXX)
const hasPrice = (str) => /-\s*\d{2,}\s*\d{0,3}/.test(str);

// Извлечение артикула из строки вида "Артикул: 010-..."
const extractArticle = (str) => {
  const match = str.trim().match(/010-\d{5,6}-\d{2}/);
  return match ? match[0] : "";
};

const IndexGarmin = ({ el, garminData }) => {
  const [isOpen, setIsOpen] = useState(false);
  const resultArr = [];

  // Пересобираем garminData: объединяем товар + артикул
  const processedItems = [];
  for (let i = 0; i < garminData.length; i++) {
    const item = garminData[i];
    if (!item?.name || typeof item.name !== "string") continue;

    const name = item.name.trim();

    // Пропускаем разделители и мусор
    if (isSeparator(name) || isMetadata(name)) continue;

    // Если это товар (есть цена)
    if (hasPrice(name)) {
      let article = "";

      // Проверяем, идёт ли артикул следом
      if (i + 1 < garminData.length) {
        const nextItem = garminData[i + 1];
        if (nextItem?.name && typeof nextItem.name === "string") {
          const nextName = nextItem.name.trim();
          if (nextName.includes("Артикул:") || nextName.match(/010-/)) {
            article = extractArticle(nextName);
            i++; // пропускаем артикул
          }
        }
      }

      // Добавляем товар с артикулом
      processedItems.push({ name, article });
    }
  }

  // Теперь обрабатываем собранные товары
  processedItems.forEach(({ name, article }) => {
    const cleanName = fixNameGarmin(name);
    const fullName = returnFixNameProductGarmin(cleanName, article);
    const stockPrice = returnStockPriceGarmin(name);

    if (!stockPrice) return;

    const productId = getIdByName(defaultFixName(fullName));
    if (productId === "No match") return;

    resultArr.push({
      id: productId,
      name: fullName,
      stockPrice: stockPrice,
      provider: "Garmin",
    });
  });

  return (
    <div>
      <div>
        {el.length > 1 && (
          <span className={style.title} onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? "Garmin ▲" : "Garmin ▼"}
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

export default IndexGarmin;