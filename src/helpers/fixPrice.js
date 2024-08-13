export const flags = [
  "🇪🇺",
  "🇰🇼",
  "🇮🇳",
  "🇯🇵",
  "🇺🇸",
  "🇭🇰",
  "🇬🇧",
  "🇨🇳",
  "🇬🇧",
  "🇬🇧",
  "🇹🇼",
  "🇷🇺",
  "🇦🇺",
  "🇧🇷",
  "🇨🇦",
  "🇨🇱",
  "🇹🇭",
  "🇻🇳",
  "🇸🇬",
  "🇲🇾",
  "🇨🇫",
  "🇰🇿",
  '🇦🇪'
];

export const checkFixPrice = (el) => {
  return flags.reduce(
    (acc, current) => acc && el.Товар.indexOf(current) === -1,
    true
  );
};
export const returnFixPrice = (el, prod) => {
  // console.log(prod + "prod");
  if (checkFixPrice(el)) {
    return `${prod} - `;
  } else {
    return prod;
  }
};


export const checkFixPriceHi = (el) => {
  return flags.reduce(
    (acc, current) => acc && el.Hi.indexOf(current) === -1,
    true
  );
};
export const returnFixPriceHi = (el, prod) => {
  if (checkFixPriceHi(el)) {
    return `${prod} - `;
  } else {
    return prod;
  }
};