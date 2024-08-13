export const productHI = []

export const newPriceHi = (HiName, HiPrice) => {
  let removeSpace =
        HiPrice[HiPrice.length - 1] === " " ? HiPrice.slice(0, -1) : HiPrice;
        productHI.push({productName: HiName, priceTag: removeSpace})
    if (
      HiName.indexOf("JBL") != -1 ||
      HiName.indexOf("Marshall") != -1 ||
      HiName.indexOf("Nothing Ear") != -1 ||
      HiName.indexOf("Nothing ear") != -1 ||
      HiName.indexOf("Nothing CMF") != -1 ||
      HiName.indexOf("Galaxy Buds") != -1 ||
      HiName.indexOf("Galaxy Smart Tag") != -1 ||
      HiName.indexOf("AirPods Pro") != -1 ||
      HiName.indexOf("Airpods Pro") != -1 ||
      HiName.indexOf("Air Pods Pro") != -1 ||
      HiName.indexOf("Air Pods 2") != -1 ||
      HiName.indexOf("AirPods 1") != -1 ||
      HiName.indexOf("AirPods 2") != -1 ||
      HiName.indexOf("Airpods 2") != -1 ||
      HiName.indexOf("Air Pods 3") != -1 ||
      HiName.indexOf("AirPods 3") != -1 ||
      HiName.indexOf("Airpods 3") != -1 ||
      HiName.indexOf("Pencil") != -1 ||
      HiName.indexOf("HomePod") != -1 ||
      HiName.indexOf("Redmi Buds") != -1
    ) {
      return Number(HiPrice) + 400;
    } else if (
     HiName.indexOf("Watch SE") != -1 ||
     HiName.indexOf("SE (2023) Gen") != -1 ||
     HiName.indexOf("Asus") != -1 ||
     HiName.indexOf("ZenFone") != -1 ||
     HiName.indexOf("AGM") != -1 ||
     HiName.indexOf("Blackview") != -1 ||
     HiName.indexOf("Insta ") != -1 ||
     HiName.indexOf("HUAWEI") != -1 ||
     HiName.indexOf("Huawei") != -1 ||
     HiName.indexOf("Fujifilm") != -1 ||
     HiName.indexOf("Beats") != -1 ||
     HiName.indexOf("infinix") != -1 ||
     HiName.indexOf("Tecno") != -1 ||
     HiName.indexOf("Realme") != -1 ||
     HiName.indexOf("Polaroid") != -1 ||
     HiName.indexOf("ZenFone") != -1 ||
     HiName.indexOf("A03s") != -1 ||
     HiName.indexOf("A05s ") != -1 ||
     HiName.indexOf("A05 ") != -1 ||
     HiName.indexOf("A15 ") != -1 ||
     HiName.indexOf("A25 ") != -1 ||
     HiName.indexOf("A24 ") != -1 ||
     HiName.indexOf("A54 ") != -1 ||
     HiName.indexOf("A35 ") != -1 ||
     HiName.indexOf("A34 ") != -1 ||
     HiName.indexOf("M34 ") != -1 ||
     HiName.indexOf("M54 ") != -1 ||
     HiName.indexOf("A55 ") != -1 ||
     HiName.indexOf("A550 ") != -1 ||
     HiName.indexOf("Galaxy Watch") != -1 ||
     HiName.indexOf("Mi ") != -1 ||
     HiName.indexOf("MI ") != -1 ||
     HiName.indexOf("Poco") != -1 ||
     HiName.indexOf("POCO") != -1 ||
     HiName.indexOf("M6") != -1 ||
     HiName.indexOf("X6") != -1 ||
     HiName.indexOf("F6") != -1 ||
     HiName.indexOf("Camon ") != -1 ||
     HiName.indexOf("Spark ") != -1
    ) {
      return Number(HiPrice) + 500;
    } else if (
      HiName.indexOf("iPad 9") != -1 ||
      HiName.indexOf("iPad 10") != -1 ||
      HiName.indexOf("iPad 9") != -1 ||
      HiName.indexOf("IPad 9") != -1 ||
      HiName.indexOf("Magic Keyboard") != -1 ||
      HiName.indexOf("Magic Mouse") != -1 ||
      HiName.indexOf("Airwrap ") != -1 ||
      HiName.indexOf("V1") != -1 ||
      HiName.indexOf("Vented") != -1 ||
      HiName.indexOf("HD0") != -1 ||
      HiName.indexOf("HD1") != -1 ||
      HiName.indexOf("Gen5 Detect") != -1 ||
      HiName.indexOf("Gen 5 Detect") != -1 ||
      HiName.indexOf("RB0") != -1 ||
      HiName.indexOf("HT0") != -1 ||
      HiName.indexOf("HS0") != -1 ||
      HiName.indexOf("HS-05") != -1 ||
      HiName.indexOf("Designed") != -1 ||
      HiName.indexOf("Heapdphone") != -1 ||
      HiName.indexOf("PH04") != -1 ||
      HiName.indexOf("Wash G1 ") != -1 ||
      HiName.indexOf("Paddle Brush") != -1 ||
      HiName.indexOf("Supersonic Hair") != -1 ||
      HiName.indexOf("Air Purifier") != -1 ||
      HiName.indexOf("Nintendo") != -1 ||
      HiName.indexOf("Oculus") != -1 ||
      HiName.indexOf("Playstation") != -1 ||
      HiName.indexOf("PlayStation") != -1 ||
      HiName.indexOf("Xbox") != -1 ||
      HiName.indexOf("PS5") != -1 ||
      HiName.indexOf("Pico") != -1 ||
      HiName.indexOf("Steam") != -1 ||
      HiName.indexOf("DJL ") != -1 ||
      HiName.indexOf("DJI ") != -1 ||
      HiName.indexOf("Dji ") != -1 ||
      HiName.indexOf("DJi ") != -1 ||
      HiName.indexOf("Garmin") != -1 ||
      HiName.indexOf("Google") != -1 ||
      HiName.indexOf("Pixel") != -1 ||
      HiName.indexOf("Xperia") != -1 ||
      HiName.indexOf("ROG") != -1 ||
      HiName.indexOf("Rog") != -1 ||
      HiName.indexOf("Sony Wireless") != -1 ||
      HiName.indexOf("Wireless WH") != -1 ||
      HiName.indexOf("Watch 6") != -1 ||
      HiName.indexOf("Tab A") != -1 ||
      HiName.indexOf("Redmi Note") != -1 ||
      HiName.indexOf("Redmi") != -1 ||
      HiName.indexOf("Note") != -1 ||
      HiName.indexOf("Xiaomi Pad") != -1 ||
      HiName.indexOf("Watch") != -1
    ) {
      return Number(HiPrice) + 600;
    } else if (
      HiName.indexOf("SE (2022) Gen") != -1 ||
      HiName.indexOf("SE2 4") != -1 ||
      HiName.indexOf("SE 2") != -1 ||
      HiName.indexOf("Se3") != -1 ||
      HiName.indexOf("SE 64") != -1 ||
      HiName.indexOf("SE 128") != -1 ||
      HiName.indexOf("SE 256") != -1 ||
      HiName.indexOf("XR 64") != -1 ||
      HiName.indexOf("11 64") != -1 ||
      HiName.indexOf("11 128") != -1 ||
      HiName.indexOf("12 Mini") != -1 ||
      HiName.indexOf("12 64") != -1 ||
      HiName.indexOf("12 128") != -1 ||
      HiName.indexOf("12 256") != -1 ||
      HiName.indexOf("12 Pro ") != -1 ||
      HiName.indexOf("12 Pro Max") != -1 ||
      HiName.indexOf("13 Mini") != -1 ||
      HiName.indexOf("13 128") != -1 ||
      HiName.indexOf("13 256") != -1 ||
      HiName.indexOf("13 512") != -1 ||
      HiName.indexOf("14 128") != -1 ||
      HiName.indexOf("14 256") != -1 ||
      HiName.indexOf("14 512") != -1 ||
      HiName.indexOf("14 Plus") != -1 ||
      HiName.indexOf("14 Pro 128") != -1 ||
      HiName.indexOf("14 Pro 256") != -1 ||
      HiName.indexOf("14 Pro 512") != -1 ||
      HiName.indexOf("14 Pro 1Tb") != -1 ||
      HiName.indexOf("14 Pro 1TB") != -1 ||
      HiName.indexOf("14 Pro Max") != -1 ||
      HiName.indexOf("15 128") != -1 ||
      HiName.indexOf("15 256") != -1 ||
      HiName.indexOf("15 512") != -1 ||
      HiName.indexOf("iPad Mini") != -1 ||
      HiName.indexOf("iPad Air") != -1 ||
      HiName.indexOf("iPad Pro") != -1 ||
      HiName.indexOf("AW Series 9") != -1 ||
      HiName.indexOf("Mac") != -1 ||
      HiName.indexOf("S 9 ") != -1 ||
      HiName.indexOf("AW 9") != -1 ||
      HiName.indexOf("AW  9") != -1 ||
      HiName.indexOf("S 8 ") != -1 ||
      HiName.indexOf("AW Series 8") != -1 ||
      HiName.indexOf("AW 8") != -1 ||
      HiName.indexOf("AW  8") != -1 ||
      HiName.indexOf("Watch S8") != -1 ||
      HiName.indexOf("UL ") != -1 ||
      HiName.indexOf("AirPods Max") != -1 ||
      HiName.indexOf("Air Pods Max") != -1 ||
      HiName.indexOf("AirPods MAX") != -1 ||
      HiName.indexOf("Airpods Max") != -1 ||
      HiName.indexOf("GoPro") != -1 ||
      HiName.indexOf("Acer") != -1 ||
      HiName.indexOf("MSI") != -1 ||
      HiName.indexOf("Asus") != -1 ||
      HiName.indexOf("Lenovo") != -1 ||
      HiName.indexOf("RayBan") != -1 ||
      HiName.indexOf("Oppo") != -1 ||
      HiName.indexOf("Motorola") != -1 ||
      HiName.indexOf("OnePlus") != -1 ||
      HiName.indexOf("RedMagic") != -1 ||
      HiName.indexOf("Nubia") != -1 ||
      HiName.indexOf("Nothing Phone") != -1 ||
      HiName.indexOf("Honor") != -1 ||
      HiName.indexOf("S20") != -1 ||
      HiName.indexOf("S21") != -1 ||
      HiName.indexOf("S22") != -1 ||
      HiName.indexOf("S23") != -1 ||
      HiName.indexOf("S24") != -1 ||
      HiName.indexOf("Z Flip") != -1 ||
      HiName.indexOf("Z Fold") != -1 ||
      HiName.indexOf("Xiaomi 13T ") != -1 ||
      HiName.indexOf("Xiaomi 14 ") != -1 
     ) {
      return Number(HiPrice) + 700;
    } else if (
      HiName.indexOf("15 Plus 128") != -1 ||
      HiName.indexOf("15 Plus 256") != -1 ||
      HiName.indexOf("15 Plus 512") != -1 ||
      HiName.indexOf("15 Pro 128") != -1 ||
      HiName.indexOf("15 Pro 256") != -1 ||
      HiName.indexOf("15 Pro 512") != -1 ||
      HiName.indexOf("15 Pro 1Tb") != -1 ||
      HiName.indexOf("15 ProMax 256") != -1 ||
      HiName.indexOf("15 ProMax 512") != -1 ||
      HiName.indexOf("15 ProMax 1Tb") != -1 ||
      HiName.indexOf("15 Pro Max 256") != -1 ||
      HiName.indexOf("15 Pro Max 512") != -1 ||
      HiName.indexOf("15 Pro Max 1Tb") != -1 ||
      HiName.indexOf("15 Pro Max 1TB") != -1 ||
      HiName.indexOf("15 Pro Max 1Tb") != -1 ||
      HiName.indexOf("iPad Pro 12.9") != -1 ||
      HiName.indexOf("Ultra 2") != -1 ||
      HiName.indexOf("MINI 6 64") != -1 ||
      HiName.indexOf("Tab S") != -1 ||
      HiName.indexOf("PRO 12.9") != -1 ||
      HiName.indexOf("PRO 11") != -1 ||
      HiName.indexOf("AIR 5") != -1
    ) {
      return Number(HiPrice) + 800;
    } else if (
      HiName.indexOf("Macbook") != -1 ||
      HiName.indexOf("Book ") != -1 ||
      HiName.indexOf("MB") != -1 ||
      HiName.indexOf("13.6 M") != -1 ||
      HiName.indexOf("Air 13 (") != -1 ||
      HiName.indexOf("Air 15 (") != -1 ||
      HiName.indexOf("Pro 13 (") != -1 ||
      HiName.indexOf("15 M") != -1 ||
      HiName.indexOf("MGN") != -1 ||
      HiName.indexOf("Vision Pro") != -1
    ) {
      return Number(HiPrice) + 1200;
    } else {
      return `${HiPrice} 🟥 `;
    }
  };

  export const newPriceUNIMETRN = (UNIMETRNName) => {
      if (
        UNIMETRNName.Товар.indexOf("JBL") != -1 ||
        UNIMETRNName.Товар.indexOf("Marshall") != -1 ||
        UNIMETRNName.Товар.indexOf("Nothing Ear") != -1 ||
        UNIMETRNName.Товар.indexOf("Nothing ear") != -1 ||
        UNIMETRNName.Товар.indexOf("Nothing CMF") != -1 ||
        UNIMETRNName.Товар.indexOf("Galaxy Buds") != -1 ||
        UNIMETRNName.Товар.indexOf("Galaxy Smart Tag") != -1 ||
        UNIMETRNName.Товар.indexOf("AirPods Pro") != -1 ||
        UNIMETRNName.Товар.indexOf("Airpods Pro") != -1 ||
        UNIMETRNName.Товар.indexOf("Air Pods Pro") != -1 ||
        UNIMETRNName.Товар.indexOf("Air Pods 2") != -1 ||
        UNIMETRNName.Товар.indexOf("AirPods 1") != -1 ||
        UNIMETRNName.Товар.indexOf("AirPods 2") != -1 ||
        UNIMETRNName.Товар.indexOf("Airpods 2") != -1 ||
        UNIMETRNName.Товар.indexOf("Air Pods 3") != -1 ||
        UNIMETRNName.Товар.indexOf("AirPods 3") != -1 ||
        UNIMETRNName.Товар.indexOf("Airpods 3") != -1 ||
        UNIMETRNName.Товар.indexOf("Pencil") != -1 ||
        UNIMETRNName.Товар.indexOf("HomePod") != -1 ||
        UNIMETRNName.Товар.indexOf("Redmi Buds") != -1
      ) {
        return Number(UNIMETRNName.Стоимость) + 400;
      } else if (
       UNIMETRNName.Товар.indexOf("Watch SE") != -1 ||
       UNIMETRNName.Товар.indexOf("SE (2023) Gen") != -1 ||
       UNIMETRNName.Товар.indexOf("Asus") != -1 ||
       UNIMETRNName.Товар.indexOf("ZenFone") != -1 ||
       UNIMETRNName.Товар.indexOf("AGM") != -1 ||
       UNIMETRNName.Товар.indexOf("Blackview") != -1 ||
       UNIMETRNName.Товар.indexOf("Insta ") != -1 ||
       UNIMETRNName.Товар.indexOf("HUAWEI") != -1 ||
       UNIMETRNName.Товар.indexOf("Huawei") != -1 ||
       UNIMETRNName.Товар.indexOf("Fujifilm") != -1 ||
       UNIMETRNName.Товар.indexOf("Beats") != -1 ||
       UNIMETRNName.Товар.indexOf("infinix") != -1 ||
       UNIMETRNName.Товар.indexOf("Tecno") != -1 ||
       UNIMETRNName.Товар.indexOf("Realme") != -1 ||
       UNIMETRNName.Товар.indexOf("Polaroid") != -1 ||
       UNIMETRNName.Товар.indexOf("ZenFone") != -1 ||
       UNIMETRNName.Товар.indexOf("A03s") != -1 ||
       UNIMETRNName.Товар.indexOf("A05s ") != -1 ||
       UNIMETRNName.Товар.indexOf("A05 ") != -1 ||
       UNIMETRNName.Товар.indexOf("A15 ") != -1 ||
       UNIMETRNName.Товар.indexOf("A25 ") != -1 ||
       UNIMETRNName.Товар.indexOf("A24 ") != -1 ||
       UNIMETRNName.Товар.indexOf("A54 ") != -1 ||
       UNIMETRNName.Товар.indexOf("A35 ") != -1 ||
       UNIMETRNName.Товар.indexOf("A34 ") != -1 ||
       UNIMETRNName.Товар.indexOf("M34 ") != -1 ||
       UNIMETRNName.Товар.indexOf("M54 ") != -1 ||
       UNIMETRNName.Товар.indexOf("A55 ") != -1 ||
       UNIMETRNName.Товар.indexOf("A550 ") != -1 ||
       UNIMETRNName.Товар.indexOf("Galaxy Watch") != -1 ||
       UNIMETRNName.Товар.indexOf("Mi ") != -1 ||
       UNIMETRNName.Товар.indexOf("MI ") != -1 ||
       UNIMETRNName.Товар.indexOf("Poco") != -1 ||
       UNIMETRNName.Товар.indexOf("POCO") != -1 ||
       UNIMETRNName.Товар.indexOf("M6") != -1 ||
       UNIMETRNName.Товар.indexOf("X6") != -1 ||
       UNIMETRNName.Товар.indexOf("F6") != -1 ||
       UNIMETRNName.Товар.indexOf("Camon ") != -1 ||
       UNIMETRNName.Товар.indexOf("Spark ") != -1
      ) {
        return Number(UNIMETRNName.Стоимость) + 500;
      } else if (
        UNIMETRNName.Товар.indexOf("iPad 9") != -1 ||
        UNIMETRNName.Товар.indexOf("iPad 10") != -1 ||
        UNIMETRNName.Товар.indexOf("iPad 9") != -1 ||
        UNIMETRNName.Товар.indexOf("IPad 9") != -1 ||
        UNIMETRNName.Товар.indexOf("Magic Keyboard") != -1 ||
        UNIMETRNName.Товар.indexOf("Magic Mouse") != -1 ||
        UNIMETRNName.Товар.indexOf("Airwrap ") != -1 ||
        UNIMETRNName.Товар.indexOf("V1") != -1 ||
        UNIMETRNName.Товар.indexOf("Vented") != -1 ||
        UNIMETRNName.Товар.indexOf("HD0") != -1 ||
        UNIMETRNName.Товар.indexOf("HD1") != -1 ||
        UNIMETRNName.Товар.indexOf("Gen5 Detect") != -1 ||
        UNIMETRNName.Товар.indexOf("Gen 5 Detect") != -1 ||
        UNIMETRNName.Товар.indexOf("RB0") != -1 ||
        UNIMETRNName.Товар.indexOf("HT0") != -1 ||
        UNIMETRNName.Товар.indexOf("HS0") != -1 ||
        UNIMETRNName.Товар.indexOf("HS-05") != -1 ||
        UNIMETRNName.Товар.indexOf("Designed") != -1 ||
        UNIMETRNName.Товар.indexOf("Heapdphone") != -1 ||
        UNIMETRNName.Товар.indexOf("PH04") != -1 ||
        UNIMETRNName.Товар.indexOf("Wash G1 ") != -1 ||
        UNIMETRNName.Товар.indexOf("Paddle Brush") != -1 ||
        UNIMETRNName.Товар.indexOf("Supersonic Hair") != -1 ||
        UNIMETRNName.Товар.indexOf("Air Purifier") != -1 ||
        UNIMETRNName.Товар.indexOf("Nintendo") != -1 ||
        UNIMETRNName.Товар.indexOf("Oculus") != -1 ||
        UNIMETRNName.Товар.indexOf("Playstation") != -1 ||
        UNIMETRNName.Товар.indexOf("PlayStation") != -1 ||
        UNIMETRNName.Товар.indexOf("Xbox") != -1 ||
        UNIMETRNName.Товар.indexOf("PS5") != -1 ||
        UNIMETRNName.Товар.indexOf("Pico") != -1 ||
        UNIMETRNName.Товар.indexOf("Steam") != -1 ||
        UNIMETRNName.Товар.indexOf("DJL ") != -1 ||
        UNIMETRNName.Товар.indexOf("DJI ") != -1 ||
        UNIMETRNName.Товар.indexOf("Dji ") != -1 ||
        UNIMETRNName.Товар.indexOf("DJi ") != -1 ||
        UNIMETRNName.Товар.indexOf("Garmin") != -1 ||
        UNIMETRNName.Товар.indexOf("Google") != -1 ||
        UNIMETRNName.Товар.indexOf("Pixel") != -1 ||
        UNIMETRNName.Товар.indexOf("Xperia") != -1 ||
        UNIMETRNName.Товар.indexOf("ROG") != -1 ||
        UNIMETRNName.Товар.indexOf("Rog") != -1 ||
        UNIMETRNName.Товар.indexOf("Sony Wireless") != -1 ||
        UNIMETRNName.Товар.indexOf("Wireless WH") != -1 ||
        UNIMETRNName.Товар.indexOf("Watch 6") != -1 ||
        UNIMETRNName.Товар.indexOf("Tab A") != -1 ||
        UNIMETRNName.Товар.indexOf("Redmi Note") != -1 ||
        UNIMETRNName.Товар.indexOf("Redmi") != -1 ||
        UNIMETRNName.Товар.indexOf("Note") != -1 ||
        UNIMETRNName.Товар.indexOf("Xiaomi Pad") != -1 ||
        UNIMETRNName.Товар.indexOf("Watch") != -1
      ) {
        return Number(UNIMETRNName.Стоимость) + 600;
      } else if (
        UNIMETRNName.Товар.indexOf("SE (2022) Gen") != -1 ||
        UNIMETRNName.Товар.indexOf("SE2 4") != -1 ||
        UNIMETRNName.Товар.indexOf("SE 2") != -1 ||
        UNIMETRNName.Товар.indexOf("Se3") != -1 ||
        UNIMETRNName.Товар.indexOf("SE 64") != -1 ||
        UNIMETRNName.Товар.indexOf("SE 128") != -1 ||
        UNIMETRNName.Товар.indexOf("SE 256") != -1 ||
        UNIMETRNName.Товар.indexOf("XR 64") != -1 ||
        UNIMETRNName.Товар.indexOf("11 64") != -1 ||
        UNIMETRNName.Товар.indexOf("11 128") != -1 ||
        UNIMETRNName.Товар.indexOf("12 Mini") != -1 ||
        UNIMETRNName.Товар.indexOf("12 64") != -1 ||
        UNIMETRNName.Товар.indexOf("12 128") != -1 ||
        UNIMETRNName.Товар.indexOf("12 256") != -1 ||
        UNIMETRNName.Товар.indexOf("12 Pro ") != -1 ||
        UNIMETRNName.Товар.indexOf("12 Pro Max") != -1 ||
        UNIMETRNName.Товар.indexOf("13 Mini") != -1 ||
        UNIMETRNName.Товар.indexOf("13 128") != -1 ||
        UNIMETRNName.Товар.indexOf("13 256") != -1 ||
        UNIMETRNName.Товар.indexOf("13 512") != -1 ||
        UNIMETRNName.Товар.indexOf("14 128") != -1 ||
        UNIMETRNName.Товар.indexOf("14 256") != -1 ||
        UNIMETRNName.Товар.indexOf("14 512") != -1 ||
        UNIMETRNName.Товар.indexOf("14 Plus") != -1 ||
        UNIMETRNName.Товар.indexOf("14 Pro 128") != -1 ||
        UNIMETRNName.Товар.indexOf("14 Pro 256") != -1 ||
        UNIMETRNName.Товар.indexOf("14 Pro 512") != -1 ||
        UNIMETRNName.Товар.indexOf("14 Pro 1Tb") != -1 ||
        UNIMETRNName.Товар.indexOf("14 Pro 1TB") != -1 ||
        UNIMETRNName.Товар.indexOf("14 Pro Max") != -1 ||
        UNIMETRNName.Товар.indexOf("15 128") != -1 ||
        UNIMETRNName.Товар.indexOf("15 256") != -1 ||
        UNIMETRNName.Товар.indexOf("15 512") != -1 ||
        UNIMETRNName.Товар.indexOf("iPad Mini") != -1 ||
        UNIMETRNName.Товар.indexOf("iPad Air") != -1 ||
        UNIMETRNName.Товар.indexOf("iPad Pro") != -1 ||
        UNIMETRNName.Товар.indexOf("AW Series 9") != -1 ||
        UNIMETRNName.Товар.indexOf("Mac") != -1 ||
        UNIMETRNName.Товар.indexOf("S 9 ") != -1 ||
        UNIMETRNName.Товар.indexOf("AW 9") != -1 ||
        UNIMETRNName.Товар.indexOf("AW  9") != -1 ||
        UNIMETRNName.Товар.indexOf("S 8 ") != -1 ||
        UNIMETRNName.Товар.indexOf("AW Series 8") != -1 ||
        UNIMETRNName.Товар.indexOf("AW 8") != -1 ||
        UNIMETRNName.Товар.indexOf("AW  8") != -1 ||
        UNIMETRNName.Товар.indexOf("Watch S8") != -1 ||
        UNIMETRNName.Товар.indexOf("UL ") != -1 ||
        UNIMETRNName.Товар.indexOf("AirPods Max") != -1 ||
        UNIMETRNName.Товар.indexOf("Air Pods Max") != -1 ||
        UNIMETRNName.Товар.indexOf("AirPods MAX") != -1 ||
        UNIMETRNName.Товар.indexOf("Airpods Max") != -1 ||
        UNIMETRNName.Товар.indexOf("GoPro") != -1 ||
        UNIMETRNName.Товар.indexOf("Acer") != -1 ||
        UNIMETRNName.Товар.indexOf("MSI") != -1 ||
        UNIMETRNName.Товар.indexOf("Asus") != -1 ||
        UNIMETRNName.Товар.indexOf("Lenovo") != -1 ||
        UNIMETRNName.Товар.indexOf("RayBan") != -1 ||
        UNIMETRNName.Товар.indexOf("Oppo") != -1 ||
        UNIMETRNName.Товар.indexOf("Motorola") != -1 ||
        UNIMETRNName.Товар.indexOf("OnePlus") != -1 ||
        UNIMETRNName.Товар.indexOf("RedMagic") != -1 ||
        UNIMETRNName.Товар.indexOf("Nubia") != -1 ||
        UNIMETRNName.Товар.indexOf("Nothing Phone") != -1 ||
        UNIMETRNName.Товар.indexOf("Honor") != -1 ||
        UNIMETRNName.Товар.indexOf("S20") != -1 ||
        UNIMETRNName.Товар.indexOf("S21") != -1 ||
        UNIMETRNName.Товар.indexOf("S22") != -1 ||
        UNIMETRNName.Товар.indexOf("S23") != -1 ||
        UNIMETRNName.Товар.indexOf("S24") != -1 ||
        UNIMETRNName.Товар.indexOf("Z Flip") != -1 ||
        UNIMETRNName.Товар.indexOf("Z Fold") != -1 ||
        UNIMETRNName.Товар.indexOf("Xiaomi 13T ") != -1 ||
        UNIMETRNName.Товар.indexOf("Xiaomi 14 ") != -1 
       ) {
        return Number(UNIMETRNName.Стоимость) + 700;
      } else if (
        UNIMETRNName.Товар.indexOf("15 Plus 128") != -1 ||
        UNIMETRNName.Товар.indexOf("15 Plus 256") != -1 ||
        UNIMETRNName.Товар.indexOf("15 Plus 512") != -1 ||
        UNIMETRNName.Товар.indexOf("15 Pro 128") != -1 ||
        UNIMETRNName.Товар.indexOf("15 Pro 256") != -1 ||
        UNIMETRNName.Товар.indexOf("15 Pro 512") != -1 ||
        UNIMETRNName.Товар.indexOf("15 Pro 1Tb") != -1 ||
        UNIMETRNName.Товар.indexOf("15 ProMax 256") != -1 ||
        UNIMETRNName.Товар.indexOf("15 ProMax 512") != -1 ||
        UNIMETRNName.Товар.indexOf("15 ProMax 1Tb") != -1 ||
        UNIMETRNName.Товар.indexOf("15 Pro Max 256") != -1 ||
        UNIMETRNName.Товар.indexOf("15 Pro Max 512") != -1 ||
        UNIMETRNName.Товар.indexOf("15 Pro Max 1Tb") != -1 ||
        UNIMETRNName.Товар.indexOf("15 Pro Max 1TB") != -1 ||
        UNIMETRNName.Товар.indexOf("15 Pro Max 1Tb") != -1 ||
        UNIMETRNName.Товар.indexOf("iPad Pro 12.9") != -1 ||
        UNIMETRNName.Товар.indexOf("Ultra 2") != -1 ||
        UNIMETRNName.Товар.indexOf("MINI 6 64") != -1 ||
        UNIMETRNName.Товар.indexOf("Tab S") != -1 ||
        UNIMETRNName.Товар.indexOf("PRO 12.9") != -1 ||
        UNIMETRNName.Товар.indexOf("PRO 11") != -1 ||
        UNIMETRNName.Товар.indexOf("AIR 5") != -1
      ) {
        return Number(UNIMETRNName.Стоимость) + 800;
      } else if (
        UNIMETRNName.Товар.indexOf("Macbook") != -1 ||
        UNIMETRNName.Товар.indexOf("Book ") != -1 ||
        UNIMETRNName.Товар.indexOf("MB") != -1 ||
        UNIMETRNName.Товар.indexOf("13.6 M") != -1 ||
        UNIMETRNName.Товар.indexOf("Air 13 (") != -1 ||
        UNIMETRNName.Товар.indexOf("Air 15 (") != -1 ||
        UNIMETRNName.Товар.indexOf("Pro 13 (") != -1 ||
        UNIMETRNName.Товар.indexOf("15 M") != -1 ||
        UNIMETRNName.Товар.indexOf("MGN") != -1 ||
        UNIMETRNName.Товар.indexOf("Vision Pro") != -1
      ) {
        return Number(UNIMETRNName.Стоимость) + 1200;
      } else {
        return `${UNIMETRNName.Стоимость} 🟥 `;
      }
    };