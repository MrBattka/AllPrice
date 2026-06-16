export const fixNameUnimtrn = (el) => {
  const fixGB = el.replace("GB", "");
  const fixGb = fixGB.replace("Gb", "");
  const fixA175 = fixGb.replace("175", "17");
  const fixA266 = fixA175.replace("266", "26");
  const fixA366 = fixA266.replace("366", "36");
  const fixA376 = fixA366.replace("376", "36");
  const fixA566 = fixA376.replace("566", "56");
  const fixS921E = fixA566.replace("S921E ", "");
   
  const removeDoubleSpace = fixS921E.replace(/\s+/g, " ");
  return removeDoubleSpace;
};

const reverseString = (str) => str.split('').reverse().join('');

const cleanString = (str) => str
  .replace(/-\s*/g, ' ')
  .replace(/\s+/g, ' ')
  .replace(/[🏎️🛩️🇪🇺🇨🇦]/g, '')
  .trim();

export const returnNameInArrUnimtrn = (name) => {
  // const cleaned = cleanString(name);
  const reversed = reverseString(name);
  const trimmed = reversed.replace(/^\s+/, '');
  const partAfterFirstSpace = trimmed.includes(' ')
    ? trimmed.slice(trimmed.indexOf(' ') + 1)
    : trimmed;
  return reverseString(partAfterFirstSpace);
};

export const returnStockPriceUnimtrn = (name) => {
  // const cleaned = cleanString(name);
  const reversed = reverseString(name);
  const trimmed = reversed.replace(/^\s+/, '');
  const pricePart = trimmed.split(' ')[0];
  return reverseString(pricePart);
};



export function splitNamePrice(items = []) {
  return (items || [])
    .map((it) => {
      const parsed = parseNamePrice(it);
      return parsed ? { original: it.name, name: parsed.name, price: parsed.price } : null;
    })
    .filter(Boolean);
}

export const parseNamePrice = (item) => {
  const s = item && typeof item.name === "string" ? item.name.trim() : "";
  if (!s) return null;
  // Берём последнюю последовательность цифр (возможны пробелы внутри числа)
  const m = s.match(/(\d[\d\s]*)\s*$/);
  const price = m ? parseInt(m[1].replace(/\s+/g, ""), 10) : null;
  // Обрезаем только найденную ценовую часть — эмодзи перед ценой останутся в name
  const name = m ? s.slice(0, s.length - m[0].length).trim() : s;
  if (!name) return null;
  return name;
}

export const parsePrice = (item) => {
  const s = (item && item.name) ? item.name.toString().trim() : "";
  if (!s) return null;
  // Берём последнюю последовательность цифр (возможно с пробелами)
  const priceMatch = s.match(/(\d[\d\s]*)\s*$/);
  const price = priceMatch ? parseInt(priceMatch[1].replace(/\s+/g, ""), 10) : null;
  // Удаляем цену и возможные флаги/эмодзи в конце
  let name = priceMatch ? s.slice(0, s.length - priceMatch[0].length).trim() : s;
  name = name.replace(/[\u{1F1E6}-\u{1F1FF}\u{1F300}-\u{1F6FF}]+$/u, "").trim();
  if (!name) return null;
  if(!price) return null
  return price;
}