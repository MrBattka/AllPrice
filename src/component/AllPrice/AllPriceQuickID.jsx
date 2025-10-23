import { useMemo, useState } from "react";
import {
  baseFix,
  baseFixArti,
  baseFixBase,
  baseFixBigAp,
  baseFixBoltun,
  baseFixBonus,
  baseFixDiscount,
  baseFixElectrozon,
  baseFixF51,
  baseFixGarmin,
  baseFixHi,
  baseFixInfinity,
  baseFixL27,
  baseFixLikemob,
  baseFixLowPrice,
  baseFixMiHonor,
  baseFixMiOpts,
  baseFixMTA,
  baseFixOther,
  baseFixRacmag,
  baseFixReSale,
  baseFixRootOpt,
  baseFixS5,
  baseFixSunrise,
  baseFixSuperPrice,
  baseFixTrub,
  baseFixVsemi
} from "../../helpers/baseFix";
import { defaultFixName } from "../../helpers/defaultFixName";
import { returnFixPriceHi } from "../../helpers/fixFlags";
import { getIdByNameQuickID } from "../../helpers/returnIDByNameQuickID";
import {
  returnFixNameA18,
  returnNameInArrA18,
  returnStockPriceA18,
} from "../A18/helpers/helpers";
import {
  returnFixNameArti,
  returnNameArti,
  returnStockPriceArti,
} from "../Arti/helpers/helpers";
import { returnFixNameBase } from "../Base/helpers/helpers";
import {
  returnFixNameBigAp,
  returnNameInArrBigAp,
  returnStockPriceBigAp,
} from "../BigAp/helpers/helpers";
import { returnFixNameBoltun } from "../Boltun/helpers/helpers";
import { returnFixNameBonus } from "../BonusOPT/helpers/helpers";
import TableAllPrice from "../CreateAllPriceTable/TableAllPrice";
import {
  returnFixNameDiscount,
  returnNameInArrDiscount,
  returnStockPriceDiscount,
} from "../Discount/helpers/helpers";
import { returnFixNameElectrozon } from "../Electrozon/helpers/helpers";
import { returnNameF51 } from "../F51/helpers/helpers";
import {
  fixNameGarmin,
  returnFixNameProductGarmin,
  returnStockPriceGarmin,
} from "../Garmin/helpers/helpers";
import {
  fixNameHi,
  returnNameInArrHi,
  returnStockPriceHi,
} from "../Hi/helpers/helpers";
import {
  fixNameInfinity,
  returnNameInArrInfinity,
  returnStockPriceInfinity,
} from "../Infinity/helpers/helpers";
import {
  returnFixNameL27,
  returnNameInArrL27,
  returnStockPriceL27,
} from "../L27/helpers/helpers";
import {
  returnFixNameLikemob,
  returnNameInArrLikemob,
  returnStockPriceLikemob,
} from "../Likemob/helpers/helpers";
import {
  fixNameLowPrice,
  returnNameInArrLowPrice,
  returnStockPriceLowPrice,
} from "../LowPriceApple/helpers/helpers";
import {
  returnFixNameMTA,
  returnNameInArrMTA,
  returnStockPriceMTA,
} from "../MTA/helpers/helpers";
import {
  fixNameMihonor,
  returnNameInArrMihonor,
  returnStockPriceMihonor,
} from "../MiHonor/helpers/helpers";
import {
  fixNameMiOpts,
  returnNameInArrMiOpts,
  returnStockPriceMiOpts,
} from "../MiOpts/helpers/helpers";
import {
  returnFixNameOther,
  returnNameInArrOther,
  returnStockPriceOther,
} from "../Other/helpers/helpers";
import {
  returnFixNameRacmag,
  returnNameInArrRacmag,
  returnStockPriceRacmag,
} from "../Racmag/helpers/helpers";
import {
  returnFixNameReSale,
  returnNameReSale,
  returnStockPriceReSale,
} from "../ReSale/helpers/helpers";
import { returnFixNameRootOpt } from "../RootOPT/helpers/helpers";
import {
  fixNameS5,
  returnNameInArrS5,
  returnStockPriceS5,
} from "../S5/helpers/helpers";
import {
  returnFixNameSunrise,
  returnNameInArrSunrise,
  returnStockPriceSunrise,
} from "../Sunrise/helpers/helpers";
import { fixNameSuperPrice } from "../SuperPrice/helpers/helpers";
import {
  fixNameTrub,
  returnNameInArrTrub,
  returnStockPriceTrub,
} from "../Trub/helpers/helpers";
import {
  fixNameUnimtrn,
  returnNameInArrUnimtrn,
  returnStockPriceUnimtrn,
} from "../Unimtrn/helpers/helpers";
import {
  fixNameVseMi,
  returnNameInArrVseMi,
  returnStockPriceVseMi,
} from "../VseMi/helpers/helpers";
import style from "../styles.module.css";

const processors = {
  superprice: {
    processItem: (superprice) => ({
      id: getIdByNameQuickID(defaultFixName(fixNameSuperPrice(superprice.name))),
      name: fixNameSuperPrice(superprice.name),
      stockPrice: superprice.price,
      provider: "SuperPrice",
    }),
    filters: [baseFixSuperPrice],
  },
  vsemi: {
    processItem: (vsemi) => ({
      id: getIdByNameQuickID(
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
      id: getIdByNameQuickID(
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
      id: getIdByNameQuickID(
        defaultFixName(returnNameInArrHi(fixNameHi(hi.name)))
      ),
      name: returnFixPriceHi(hi, returnNameInArrHi(fixNameHi(hi.name))),
      stockPrice: returnStockPriceHi(fixNameHi(hi.name)),
      provider: "Hi",
    }),
    filters: [baseFixHi],
  },
  mihonor: {
    processItem: (mihonor) => (
      mihonor.name.indexOf("₽") !== -1 &&
      {
      id: getIdByNameQuickID(
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
      id: getIdByNameQuickID(
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
      id: getIdByNameQuickID(
        defaultFixName(returnNameInArrS5(fixNameS5(S5.name)))
      ),
      name: returnNameInArrS5(fixNameS5(S5.name)),
      stockPrice: returnStockPriceS5(fixNameS5(S5.name)),
      provider: "S5",
    }),
    filters: [baseFixS5],
  },
  racmag: {
    processItem: (racmag) => ({
      id: getIdByNameQuickID(
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
      id: getIdByNameQuickID(
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
      id: getIdByNameQuickID(
        defaultFixName(returnFixNameElectrozon(electrozon.name))
      ),
      name: returnFixNameElectrozon(electrozon.name),
      stockPrice: electrozon.price,
      provider: "Electrozon",
    }),
    filters: [baseFixElectrozon],
  },
  resale: {
    processItem: (resale) =>
      returnStockPriceReSale(returnFixNameReSale(resale.name)).indexOf("00") !==
        -1 && {
        id: getIdByNameQuickID(
          defaultFixName(returnNameReSale(returnFixNameReSale(resale.name)))
        ),
        name: returnNameReSale(returnFixNameReSale(resale.name)),
        stockPrice: returnStockPriceReSale(returnFixNameReSale(resale.name)),
        provider: "Re:Sale",
      },
    filters: [baseFixReSale],
  },
  f51: {
    processItem: (f51) => ({
      id: getIdByNameQuickID(defaultFixName(returnNameF51(f51.name))),
      name: returnNameF51(f51.name),
      stockPrice: f51.price,
      provider: "F51",
    }),
    filters: [baseFixF51],
  },
  discount: {
    processItem: (discount) => ({
      id: getIdByNameQuickID(
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
      id: getIdByNameQuickID(defaultFixName(returnFixNameBase(base.name))),
      name: returnFixNameBase(base.name),
      stockPrice: base.price,
      provider: "База",
    }),
    filters: [baseFixBase],
  },
  other: {
    processItem: (other) => ({
      id: getIdByNameQuickID(
        defaultFixName(returnNameInArrOther(returnFixNameOther(other.name)))
      ),
      name: returnNameInArrOther(returnFixNameOther(other.name)),
      stockPrice: returnStockPriceOther(returnFixNameOther(other.name)),
      provider: "All",
    }),
    filters: [baseFixOther],
  },
  miopts: {
    processItem: (miopts) => ({
      id: getIdByNameQuickID(
        defaultFixName(returnNameInArrMiOpts(fixNameMiOpts(miopts.name)))
      ),
      name: returnNameInArrMiOpts(fixNameMiOpts(miopts.name)),
      stockPrice: returnStockPriceMiOpts(fixNameMiOpts(miopts.name)),
      provider: "MiOpts",
    }),
    filters: [baseFixMiOpts],
  },
  lowPrice: {
    processItem: (lowPrice) => ({
      id: getIdByNameQuickID(
        defaultFixName(returnNameInArrLowPrice(fixNameLowPrice(lowPrice.name)))
      ),
      name: returnNameInArrLowPrice(fixNameLowPrice(lowPrice.name)),
      stockPrice: returnStockPriceLowPrice(fixNameLowPrice(lowPrice.name)),
      provider: "Ghost Re:Sale",
    }),
    filters: [baseFixLowPrice],
  },
  l27: {
    processItem: (l27) => ({
      id: getIdByNameQuickID(
        defaultFixName(returnNameInArrL27(returnFixNameL27(l27.name)))
      ),
      name: returnNameInArrL27(returnFixNameL27(l27.name)),
      stockPrice: returnStockPriceL27(returnFixNameL27(l27.name)),
      provider: "Л27-28",
    }),
    filters: [baseFixL27],
  },
  sunrise: {
    processItem: (sunrise) => ({
      id: getIdByNameQuickID(
        defaultFixName(
          returnNameInArrSunrise(returnFixNameSunrise(sunrise.name))
        )
      ),
      name: returnNameInArrSunrise(returnFixNameSunrise(sunrise.name)),
      stockPrice: returnStockPriceSunrise(returnFixNameSunrise(sunrise.name)),
      provider: "Восход",
    }),
    filters: [baseFixSunrise],
  },
  infinity: {
    processItem: (infinity) => ({
      id: getIdByNameQuickID(
        defaultFixName(returnNameInArrInfinity(fixNameInfinity(infinity.name)))
      ),
      name: returnNameInArrInfinity(fixNameInfinity(infinity.name)),
      stockPrice: returnStockPriceInfinity(
        fixNameInfinity(fixNameInfinity(infinity.name))
      ),
      provider: "Infinity",
    }),
    filters: [baseFixInfinity],
  },
  likemob: {
    processItem: (likemob) => ({
      id: getIdByNameQuickID(
        defaultFixName(
          returnNameInArrLikemob(returnFixNameLikemob(likemob.name))
        )
      ),
      name: returnNameInArrLikemob(returnFixNameLikemob(likemob.name)),
      stockPrice: returnStockPriceLikemob(returnFixNameLikemob(likemob.name)),
      provider: "Likemob",
    }),
    filters: [baseFixLikemob],
  },
  bigAp: {
    processItem: (bigAp) => ({
      id: getIdByNameQuickID(
        defaultFixName(returnNameInArrBigAp(returnFixNameBigAp(bigAp.name)))
      ),
      name: returnNameInArrBigAp(returnFixNameBigAp(bigAp.name)),
      stockPrice: returnStockPriceBigAp(returnFixNameBigAp(bigAp.name)),
      provider: "BigAp",
    }),
    filters: [baseFixBigAp],
  },
  mta: {
    processItem: (mta) => ({
      id: getIdByNameQuickID(
        defaultFixName(returnNameInArrMTA(returnFixNameMTA(mta.name)))
      ),
      name: returnNameInArrMTA(returnFixNameMTA(mta.name)),
      stockPrice: returnStockPriceMTA(returnFixNameMTA(mta.name)),
      provider: "MTA Store",
    }),
    filters: [baseFixMTA],
  },
  bonus: {
    processItem: (bonus) => ({
      id: getIdByNameQuickID(defaultFixName(returnFixNameBonus(bonus.name))),
      name: returnFixNameBonus(bonus.name),
      stockPrice: bonus.price,
      provider: "БонусОПТ",
    }),
    filters: [baseFixBonus],
  },
  rootOpt: {
    processItem: (rootOpt) => ({
      id: getIdByNameQuickID(defaultFixName(returnFixNameRootOpt(rootOpt.name))),
      name: returnFixNameRootOpt(rootOpt.name),
      stockPrice: rootOpt.price,
      provider: "RootOPT",
    }),
    filters: [baseFixRootOpt],
  },
  A18: {
    processItem: (A18) => ({
      id: getIdByNameQuickID(
        defaultFixName(returnNameInArrA18(returnFixNameA18(A18.name)))
      ),
      name: returnNameInArrA18(returnFixNameA18(A18.name)),
      stockPrice: returnStockPriceA18(returnFixNameA18(A18.name)),
      provider: "A18",
    }),
    filters: [],
  },
  amt: {
    processItem: (amt) => ({
      id: getIdByNameQuickID(
        defaultFixName(returnNameInArrTrub(fixNameTrub(amt.name)))
      ),
      name: returnNameInArrTrub(fixNameTrub(amt.name)),
      stockPrice: returnStockPriceTrub(fixNameTrub(amt.name)),
      provider: "AMT",
    }),
    filters: [baseFixTrub],
  },
  boltun: {
    processItem: (boltun) => ({
      id: getIdByNameQuickID(defaultFixName(returnFixNameBoltun(boltun.name))),
      name: returnFixNameBoltun(boltun.name),
      stockPrice: boltun.price,
      provider: "Болтун",
    }),
    filters: [baseFixBoltun],
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

const AllPriceQuickID = ({
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
  otherData,
  mioptsData,
  lowPriceData,
  l27Data,
  sunriseData,
  infinityData,
  likemobData,
  bigApData,
  mtaData,
  bonusData,
  rootOptData,
  a18Data,
  AMTData,
  boltunData,
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
    results.push(...processData(otherData, processors.other, isOpen));
    results.push(...processData(mioptsData, processors.miopts, isOpen));
    results.push(...processData(lowPriceData, processors.lowPrice, isOpen));
    results.push(...processData(l27Data, processors.l27, isOpen));
    results.push(...processData(sunriseData, processors.sunrise, isOpen));
    results.push(...processData(infinityData, processors.infinity, isOpen));
    results.push(...processData(likemobData, processors.likemob, isOpen));
    results.push(...processData(bigApData, processors.bigAp, isOpen));
    results.push(...processData(mtaData, processors.mta, isOpen));
    results.push(...processData(bonusData, processors.bonus, isOpen));
    results.push(...processData(rootOptData, processors.rootOpt, isOpen));
    results.push(...processData(a18Data, processors.A18, isOpen));
    results.push(...processData(AMTData, processors.amt, isOpen));
    results.push(...processData(boltunData, processors.boltun, isOpen));

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
            {isOpen ? "All Price Quick ID ▲" : "All Price Quick ID ▼"}
          </span>
        )}
      </div>
      {isOpen && <TableAllPrice allPriceArr={allPriceArr} />}
    </div>
  );
};

export default AllPriceQuickID;
