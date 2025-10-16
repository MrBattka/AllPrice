import { useMemo, useState } from "react";
import {
  baseFix,
  baseFixArti,
  baseFixBase,
  baseFixDiscount,
  baseFixElectrozon,
  baseFixF51,
  baseFixGarmin,
  baseFixHi,
  baseFixMiHonor,
  baseFixRacmag,
  baseFixReSale,
  baseFixRPTrade,
  baseFixS5,
  baseFixSuperPrice,
  baseFixVsemi,
} from "../../helpers/baseFix";
import { defaultFixName } from "../../helpers/defaultFixName";
import { getIdByName } from "../../helpers/returnIDByName";
import { fixNameSuperPrice } from "../SuperPrice/helpers/helpers";
import {
  fixNameVseMi,
  returnNameInArrVseMi,
  returnStockPriceVseMi,
} from "../VseMi/helpers/helpers";
import style from "../styles.module.css";
import TableAllPrice from "../CreateAllPriceTable/TableAllPrice";
import {
  fixNameUnimtrn,
  returnNameInArrUnimtrn,
  returnStockPriceUnimtrn,
} from "../Unimtrn/helpers/helpers";
import {
  fixNameHi,
  returnNameInArrHi,
  returnStockPriceHi,
} from "../Hi/helpers/helpers";
import { returnFixPriceHi } from "../../helpers/fixFlags";
import {
  fixNameMihonor,
  returnNameInArrMihonor,
  returnStockPriceMihonor,
} from "../MiHonor/helpers/helpers";
import {
  fixNameGarmin,
  returnFixNameProductGarmin,
  returnStockPriceGarmin,
} from "../Garmin/helpers/helpers";
import {
  fixNameS5,
  returnNameInArrS5,
  returnStockPriceS5,
} from "../S5/helpers/helpers";
import { returnFixNameRPTrade } from "../RPTrade/helpers/helpers";
import {
  returnFixNameRacmag,
  returnNameInArrRacmag,
  returnStockPriceRacmag,
} from "../Racmag/helpers/helpers";
import {
  returnFixNameArti,
  returnNameArti,
  returnStockPriceArti,
} from "../Arti/helpers/helpers";
import { returnFixNameElectrozon } from "../Electrozon/helpers/helpers";
import {
  returnFixNameReSale,
  returnNameReSale,
  returnStockPriceReSale,
} from "../ReSale/helpers/helpers";
import { returnNameF51 } from "../F51/helpers/helpers";
import {
  returnFixNameDiscount,
  returnNameInArrDiscount,
  returnStockPriceDiscount,
} from "../Discount/helpers/helpers";
import { returnFixNameBase } from "../Base/helpers/helpers";

const processors = {
  superprice: {
    processItem: (superprice) => ({
      id: getIdByName(defaultFixName(fixNameSuperPrice(superprice.name))),
      name: fixNameSuperPrice(superprice.name),
      stockPrice: superprice.price,
      provider: "SuperPrice",
    }),
    filters: [baseFixSuperPrice],
  },
  vsemi: {
    processItem: (vsemi) => ({
      id: getIdByName(
        defaultFixName(returnNameInArrVseMi(fixNameVseMi(vsemi.name)))
      ),
      name: returnNameInArrVseMi(fixNameVseMi(vsemi.name)),
      stockPrice: returnStockPriceVseMi(fixNameVseMi(vsemi.name)),
      provider: "VseMi",
    }),
    filters: [baseFixVsemi],
  },
  unimtrn: {
    processItem: (unimtrn) => ({
      id: getIdByName(
        defaultFixName(returnNameInArrUnimtrn(fixNameUnimtrn(unimtrn.name)))
      ),
      name: returnNameInArrUnimtrn(fixNameUnimtrn(unimtrn.name)),
      stockPrice: returnStockPriceUnimtrn(unimtrn.name),
      provider: "Метреон",
    }),
    filters: [baseFix],
  },
  hi: {
    processItem: (hi) => ({
      id: getIdByName(defaultFixName(returnNameInArrHi(fixNameHi(hi.name)))),
      name: returnFixPriceHi(hi, returnNameInArrHi(fixNameHi(hi.name))),
      stockPrice: returnStockPriceHi(fixNameHi(hi.name)),
      provider: "Hi",
    }),
    filters: [baseFixHi],
  },
  mihonor: {
    processItem: (mihonor) => ({
      id: getIdByName(
        defaultFixName(returnNameInArrMihonor(fixNameMihonor(mihonor.name)))
      ),
      name: returnNameInArrMihonor(fixNameMihonor(mihonor.name)),
      stockPrice: returnStockPriceMihonor(fixNameMihonor(mihonor.name)),
      provider: "MiHonor",
    }),
    filters: [baseFixMiHonor],
  },
  garmin: {
    processItem: (garmin) => ({
      id: getIdByName(
        defaultFixName(returnFixNameProductGarmin(fixNameGarmin(garmin.name)))
      ),
      name: returnFixNameProductGarmin(fixNameGarmin(garmin.name)),
      stockPrice: returnStockPriceGarmin(fixNameGarmin(garmin.name)),
      provider: "Garmin",
    }),
    filters: [baseFixGarmin],
  },
  S5: {
    processItem: (S5) => ({
      id: getIdByName(defaultFixName(returnNameInArrS5(fixNameS5(S5.name)))),
      name: returnNameInArrS5(fixNameS5(S5.name)),
      stockPrice: returnStockPriceS5(fixNameS5(S5.name)),
      provider: "S5",
    }),
    filters: [baseFixS5],
  },
  racmag: {
    processItem: (racmag) => ({
      id: getIdByName(
        defaultFixName(returnNameInArrRacmag(returnFixNameRacmag(racmag.name)))
      ),
      name: returnNameInArrRacmag(returnFixNameRacmag(racmag.name)),
      stockPrice: returnStockPriceRacmag(returnFixNameRacmag(racmag.name)),
      provider: "Рацмаг",
    }),
    filters: [baseFixRacmag],
  },
  arti: {
    processItem: (arti) => ({
      id: getIdByName(
        defaultFixName(returnNameArti(returnFixNameArti(arti.name)))
      ),
      name: returnNameArti(returnFixNameArti(arti.name)),
      stockPrice: returnStockPriceArti(returnFixNameArti(arti.name)),
      provider: "Arti",
    }),
    filters: [baseFixArti],
  },
  electrozon: {
    processItem: (electrozon) => ({
      id: getIdByName(defaultFixName(returnFixNameElectrozon(electrozon.name))),
      name: returnFixNameElectrozon(electrozon.name),
      stockPrice: electrozon.price,
      provider: "Electrozon",
    }),
    filters: [baseFixElectrozon],
  },
  resale: {
    processItem: (resale) => ({
      id: getIdByName(
        defaultFixName(returnNameReSale(returnFixNameReSale(resale.name)))
      ),
      name: returnNameReSale(returnFixNameReSale(resale.name)),
      stockPrice: returnStockPriceReSale(returnFixNameReSale(resale.name)),
      provider: "Re:Sale",
    }),
    filters: [baseFixReSale],
  },
  f51: {
    processItem: (f51) => ({
      id: getIdByName(defaultFixName(returnNameF51(f51.name))),
      name: returnNameF51(f51.name),
      stockPrice: f51.price,
      provider: "F51",
    }),
    filters: [baseFixF51],
  },
  discount: {
    processItem: (discount) => ({
      id: getIdByName(
        defaultFixName(
          returnNameInArrDiscount(returnFixNameDiscount(discount.name))
        )
      ),
      name: returnNameInArrDiscount(returnFixNameDiscount(discount.name)),
      stockPrice: returnStockPriceDiscount(
        returnFixNameDiscount(discount.name)
      ),
      provider: "Discount",
    }),
    filters: [baseFixDiscount],
  },
  base: {
    processItem: (base) => ({
      id: getIdByName(defaultFixName(returnFixNameBase(base.name))),
      name: returnFixNameBase(base.name),
      stockPrice: base.price,
      provider: "База",
    }),
    filters: [baseFixBase],
  },
};

const processData = (data, processor, isOpen) => {
  if (!data || !Array.isArray(data) || !processor) return [];

  return data
    .filter(
      (item) =>
        item.name &&
        typeof item.name === "string" &&
        processor.filters.every((fn) => fn(item))
    )
    .map((item) => {
      const processed = processor.processItem(item);
      return processed.id !== "No match" && isOpen ? processed : null;
    })
    .filter(Boolean);
};

const AllPriceWithIDTest = ({
  dataSuperprice,
  dataVsemi,
  dataUnimtrn,
  dataHi,
  dataMihonor,
  dataGarmin,
  S5Data,
  racmagData,
  artiData,
  electrozonData,
  resaleData,
  f51Data,
  discountData,
  baseData,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const allPriceArr = useMemo(() => {
    const results = [];

    results.push(...processData(dataSuperprice, processors.superprice, isOpen));
    results.push(...processData(dataVsemi, processors.vsemi, isOpen));
    results.push(...processData(dataUnimtrn, processors.unimtrn, isOpen));
    results.push(...processData(dataHi, processors.hi, isOpen));
    results.push(...processData(dataMihonor, processors.mihonor, isOpen));
    results.push(...processData(dataGarmin, processors.garmin, isOpen));
    results.push(...processData(S5Data, processors.S5, isOpen));
    results.push(...processData(racmagData, processors.racmag, isOpen));
    results.push(...processData(artiData, processors.arti, isOpen));
    results.push(...processData(electrozonData, processors.electrozon, isOpen));
    results.push(...processData(resaleData, processors.resale, isOpen));
    results.push(...processData(f51Data, processors.f51, isOpen));
    results.push(...processData(discountData, processors.discount, isOpen));
    results.push(...processData(baseData, processors.base, isOpen));

    return results;
  }, [isOpen]);

  const hasData = Object.values({
    dataSuperprice,
    dataVsemi /* и т.д. */,
  }).some((arr) => arr?.length > 2);

  return (
    <div>
      <div>
        {hasData && (
          <span className={style.title} onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? "All Price Для Сайта ▲" : "All Price Для Сайта ▼"}
          </span>
        )}
      </div>
      {isOpen && <TableAllPrice allPriceArr={allPriceArr} />}
    </div>
  );
};

export default AllPriceWithIDTest;
