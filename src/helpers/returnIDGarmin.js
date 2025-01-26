import { returnIDOtherBrand } from "./returnOtherBrands";

export const returnIDGarmin = (nameStock) => {
  const name = nameStock.toLowerCase();
  if (
    name.indexOf("epix pro") != -1 &&
    name.indexOf("gen 2") != -1 &&
    name.indexOf("silver") != -1 &&
    name.indexOf("42") != -1
  ) {
    return 30296;
  } else if (
    name.indexOf("epix pro") != -1 &&
    name.indexOf("gen 2") != -1 &&
    name.indexOf("slate") != -1 &&
    name.indexOf("gray") != -1 &&
    name.indexOf("47") != -1
  ) {
    return 28173;
  } else if (
    name.indexOf("epix pro") != -1 &&
    name.indexOf("gen 2") != -1 &&
    name.indexOf("slate") != -1 &&
    name.indexOf("gray") != -1 &&
    name.indexOf("51") != -1
  ) {
    return 30295;
  } else if (
    name.indexOf("epix pro") != -1 &&
    name.indexOf("gen 2") != -1 &&
    name.indexOf("carbon") != -1 &&
    name.indexOf("gray") != -1 &&
    name.indexOf("42") != -1
  ) {
    return 30294;
  } else if (
    name.indexOf("epix pro") != -1 &&
    name.indexOf("gen 2") != -1 &&
    name.indexOf("sapphire") != -1 &&
    name.indexOf("gold") != -1 &&
    name.indexOf("42") != -1
  ) {
    return 30297;
  } else if (
    name.indexOf("epix pro") != -1 &&
    name.indexOf("gen 2") != -1 &&
    name.indexOf("sapphire") != -1 &&
    name.indexOf("carbon") != -1 &&
    name.indexOf("gray") != -1 &&
    name.indexOf("47") != -1
  ) {
    return 28174;
  } else if (
    name.indexOf("epix pro") != -1 &&
    name.indexOf("gen 2") != -1 &&
    name.indexOf("sapphire") != -1 &&
    name.indexOf("white") != -1 &&
    name.indexOf("47") != -1
  ) {
    return 28175;
  } else if (
    name.indexOf("epix pro") != -1 &&
    name.indexOf("gen 2") != -1 &&
    name.indexOf("sapphire") != -1 &&
    name.indexOf("carbon") != -1 &&
    name.indexOf("gray") != -1 &&
    name.indexOf("51") != -1
  ) {
    return 28177;
  } else if (
    name.indexOf("epix pro") != -1 &&
    name.indexOf("gen 2") != -1 &&
    name.indexOf("sapphire") != -1 &&
    name.indexOf("white") != -1 &&
    name.indexOf("51") != -1
  ) {
    return 28176;
  } else if (
    name.indexOf("epix") != -1 &&
    name.indexOf("gen 2") != -1 &&
    name.indexOf("slate") != -1 &&
    name.indexOf("steel") != -1 &&
    name.indexOf("47") != -1
  ) {
    return 28170;
  } else if (
    name.indexOf("epix") != -1 &&
    name.indexOf("gen 2") != -1 &&
    name.indexOf("sapphire") != -1 &&
    name.indexOf("white") != -1 &&
    name.indexOf("47") != -1
  ) {
    return 28171;
  } else if (
    name.indexOf("epix") != -1 &&
    name.indexOf("gen 2") != -1 &&
    name.indexOf("sapphire") != -1 &&
    name.indexOf("black") != -1 &&
    name.indexOf("47") != -1
  ) {
    return 28172;
  } else if (name.indexOf("venu 2 plus black") != -1) {
    return 25029;
  } else if (name.indexOf("venu 2 plus ivory") != -1) {
    return 25031;
  } else if (name.indexOf("venu 2 plus gray") != -1) {
    return 25027;
  } else if (name.indexOf("venu 2 plus slate") != -1) {
    return 25035;
  } else if (name.indexOf("venu 2 silver granite blue") != -1) {
    return 25023;
  } else if (name.indexOf("venu 2 silver blue") != -1) {
    return 25023;
  } else if (name.indexOf("venu 2 slate") != -1) {
    return 25024;
  } else if (name.indexOf("venu 2s light sand") != -1) {
    return 25020;
  } else if (name.indexOf("venu 2s white") != -1) {
    return 25021;
  } else if (name.indexOf("venu 2s mist gray") != -1) {
    return 25022;
  } else if (name.indexOf("venu 2s gray") != -1) {
    return 25022;
  } else if (name.indexOf("venu 3 silver") != -1) {
    return 35797;
  } else if (name.indexOf("venu 3 slate") != -1) {
    return 35798;
  } else if (name.indexOf("venu 3s silver sage/gray") != -1) {
    return 35794;
  } else if (name.indexOf("venu 3s slate pebble/gray") != -1) {
    return 35793;
  } else if (name.indexOf("venu 3s soft gold dust/rose") != -1) {
    return 35795;
  } else if (name.indexOf("venu 3s soft gold ivory") != -1) {
    return 35792;
  } else if (name.indexOf("venu sq2 cream gold white") != -1) {
    return 35800;
  } else if (name.indexOf("venu sq2 metallic mint cool mint") != -1) {
    return 35801;
  } else if (name.indexOf("venu sq2 music cream gold") != -1) {
    return 35802;
  } else if (name.indexOf("venu sq2 slate") != -1) {
    return 35799;
  } else if (name.indexOf("vivoactive 3 black") != -1) {
    return 14386;
  } else if (name.indexOf("vivoactive 3 granite blue") != -1) {
    return 14385;
  } else if (name.indexOf("vivoactive 4 gray") != -1) {
    return 14391;
  } else if (name.indexOf("vivoactive 4s gray") != -1) {
    return 14444;
  } else if (name.indexOf("vivosmart 4 black") != -1) {
    return 14449;
  } else if (name.indexOf("marq adventurer") != -1) {
    return 14378;
  } else if (name.indexOf("marq gen2 adventurer") != -1) {
    return 35815;
  } else if (name.indexOf("marq gen2 athlete carbon") != -1) {
    return 35811;
  } else if (name.indexOf("marq gen2 athlete performance") != -1) {
    return 35814;
  } else if (name.indexOf("marq gen2 athlete") != -1) {
    return 14379;
  } else if (name.indexOf("marq gen2 aviator") != -1) {
    return 35816;
  } else if (name.indexOf("marq gen2 captain") != -1) {
    return 35817;
  } else if (name.indexOf("marq gen2 commander carbon") != -1) {
    return 35813;
  } else if (name.indexOf("marq gen2 driver") != -1) {
    return 14383;
  } else if (name.indexOf("marq gen2 golfer carbon") != -1) {
    return 35812;
  } else if (name.indexOf("marq gen2 golfer") != -1) {
    return 20438;
  } else if (name.indexOf("forerunner 245 berry") != -1) {
    return 27334;
  } else if (name.indexOf("forerunner 245 music aqua") != -1) {
    return 27336;
  } else if (name.indexOf("forerunner 245 music black") != -1) {
    return 27335;
  } else if (name.indexOf("forerunner 255 slate") != -1) {
    return 27339;
  } else if (name.indexOf("forerunner 255 tidal blue") != -1) {
    return 27338;
  } else if (name.indexOf("forerunner 255 music black") != -1) {
    return 27337;
  } else if (name.indexOf("forerunner 265 black") != -1) {
    return 27327;
  } else if (name.indexOf("forerunner 265 aqua") != -1) {
    return 27328;
  } else if (name.indexOf("forerunner 265 white") != -1) {
    return 27326;
  } else if (name.indexOf("forerunner 265s black") != -1) {
    return 27325;
  } else if (name.indexOf("forerunner 265s pink") != -1) {
    return 27324;
  } else if (name.indexOf("forerunner 265s white") != -1) {
    return 27323;
  } else if (name.indexOf("forerunner 45 black") != -1) {
    return 35807;
  } else if (name.indexOf("forerunner 45 lava red") != -1) {
    return 35806;
  } else if (name.indexOf("forerunner 45s black") != -1) {
    return 27330;
  } else if (name.indexOf("forerunner 45s iris") != -1) {
    return 27329;
  } else if (name.indexOf("forerunner 55 aqua") != -1) {
    return 27333;
  } else if (name.indexOf("forerunner 55 black") != -1) {
    return 27332;
  } else if (name.indexOf("forerunner 55 white") != -1) {
    return 27331;
  } else if (name.indexOf("forerunner 745 magma red") != -1) {
    return 27345;
  } else if (name.indexOf("forerunner 745 neo tropic") != -1) {
    return 27344;
  } else if (name.indexOf("forerunner 945 black") != -1) {
    return 27343;
  } else if (name.indexOf("forerunner 955 black") != -1) {
    return 27317;
  } else if (name.indexOf("forerunner 955 solar black") != -1) {
    return 27318;
  } else if (name.indexOf("forerunner 955 solar white") != -1) {
    return 27319;
  } else if (name.indexOf("forerunner 965 amp/yellow") != -1) {
    return 27320;
  } else if (name.indexOf("forerunner 965 black") != -1) {
    return 27321;
  } else if (name.indexOf("forerunner 965 white") != -1) {
    return 27322;
  } else if (name.indexOf("swim 2 black") != -1) {
    return 14364;
  } else if (name.indexOf("swim 2 slate") != -1) {
    return 25017;
  } else if (name.indexOf("swim 2 white") != -1) {
    return 25018;
  } else if (name.indexOf("instinct 2 camo edition graphite camo") != -1) {
    return 35788;
  } else if (name.indexOf("instinct 2 d?zl edition") != -1) {
    return 35791;
  } else if (name.indexOf("instinct 2 solar graphite") != -1) {
    return 35787;
  } else if (name.indexOf("instinct 2 solar mist gray") != -1) {
    return 35786;
  } else if (name.indexOf("instinct 2 solar tactical black") != -1) {
    return 35789;
  } else if (name.indexOf("instinct 2 standard edition electric lime") != -1) {
    return 35785;
  } else if (name.indexOf("instinct 2 standard edition graphite") != -1) {
    return 34461;
  } else if (name.indexOf("instinct 2 surf edition mavericks") != -1) {
    return 35790;
  } else if (name.indexOf("instinct 2s mist camo") != -1) {
    return 35766;
  } else if (name.indexOf("instinct 2s solar graphite") != -1) {
    return 35761;
  } else if (name.indexOf("instinct 2s solar mist gray") != -1) {
    return 35762;
  } else if (name.indexOf("instinct 2s solar neo tropic") != -1) {
    return 35763;
  } else if (name.indexOf("instinct 2s standard edition deep orchid") != -1) {
    return 35764;
  } else if (name.indexOf("instinct 2s standard edition graphite") != -1) {
    return 35765;
  } else if (name.indexOf("instinct 2x solar flame red") != -1) {
    return 34465;
  } else if (name.indexOf("instinct 2x flame red") != -1) {
    return 34465;
  } else if (name.indexOf("instinct 2x solar graphite") != -1) {
    return 34466;
  } else if (name.indexOf("instinct 2x solar moss") != -1) {
    return 34467;
  } else if (name.indexOf("instinct 2x solar white") != -1) {
    return 34468;
  } else if (name.indexOf("instinct crossover black") != -1) {
    return 34463;
  } else if (name.indexOf("instinct crossover") != -1) {
    return 34463;
  } else if (name.indexOf("instinct crossover blue") != -1) {
    return 34462;
  } else if (name.indexOf("instinct tactical black") != -1) {
    return 14376;
  } else if (name.indexOf("fenix 7 sapphire solar carbon gray") != -1) {
    return 24796;
  } else if (name.indexOf("fenix 7 solar slate gray") != -1) {
    return 24795;
  } else if (name.indexOf("fenix 7 sapphire solar black") != -1) {
    return 24799;
  } else if (name.indexOf("fenix 7 sapphire solar carbon gray") != -1) {
    return 24800;
  } else if (name.indexOf("fenix 7 sapphire solar mineral blue") != -1) {
    return 24797;
  } else if (name.indexOf("fenix 7 sapphire solar") != -1) {
    return 24798;
  } else if (name.indexOf("fenix 7 silver") != -1) {
    return 24790;
  } else if (name.indexOf("fenix 7 pro sapphire solar carbon gray") != -1) {
    return 28167;
  } else if (name.indexOf("fenix 7 pro sapphire solar fog gray") != -1) {
    return 28168;
  } else if (name.indexOf("fenix 7 pro solar slate gray") != -1) {
    return 28169;
  } else if (name.indexOf("fenix 7s pro sapphire solar carbon gray") != -1) {
    return 28179;
  } else if (name.indexOf("fenix 7s pro sapphire solar soft gold") != -1) {
    return 28180;
  } else if (name.indexOf("fenix 7s pro solar silver") != -1) {
    return 28178;
  } else if (name.indexOf("fenix 7s sapphire solar carbon gray") != -1) {
    return 24776;
  } else if (name.indexOf("fenix 7s sapphire solar cream gold") != -1) {
    return 24779;
  } else if (name.indexOf("fenix 7s sapphire solar dark bronze") != -1) {
    return 24777;
  } else if (name.indexOf("fenix 7s sapphire solar rose gold") != -1) {
    return 24778;
  } else if (name.indexOf("fenix 7s silver graphite") != -1) {
    return 24720;
  } else if (name.indexOf("fenix 7s silver white") != -1) {
    return 24726;
  } else if (name.indexOf("fenix 7s solar rose gold") != -1) {
    return 24731;
  } else if (name.indexOf("fenix 7s solar slate gray") != -1) {
    return 24732;
  } else if (name.indexOf("fenix 7x solar slate gray") != -1) {
    return 24805;
  } else if (name.indexOf("fenix 7x pro sapphire solar carbon gray") != -1) {
    return 28181;
  } else if (name.indexOf("fenix 7x pro sapphire solar fog gray") != -1) {
    return 28182;
  } else if (name.indexOf("fenix 7x pro solar slate gray") != -1) {
    return 35809;
  } else if (name.indexOf("fenix 7x sapphire solar black") != -1) {
    return 24834;
  } else if (name.indexOf("fenix 7x sapphire solar carbon gray black") != -1) {
    return 24806;
  } else if (
    name.indexOf("fenix 7x sapphire solar carbon gray carbon grey") != -1
  ) {
    return 24832;
  } else if (
    name.indexOf("fenix 7x sapphire solar mineral blue whitestone") != -1
  ) {
    return 24807;
  } else if (name.indexOf("fenix 7x sapphire solar chestnut leather") != -1) {
    return 24833;
  } else if (
    name.indexOf("epix pro gen 2 sapphire titanium whitestone") != -1
  ) {
    return 28175;
  } else if (name.indexOf("forerunner 265 aqua") != -1) {
    return 27328;
  } else if (name.indexOf("forerunner 265 white") != -1) {
    return 27326;
  } else if (name.indexOf("forerunner 265s white") != -1) {
    return 27323;
  } else if (name.indexOf("forerunner 265s black") != -1) {
    return 27325;
  } else if (name.indexOf("forerunner 265s pink") != -1) {
    return 27324;
  } else if (name.indexOf("forerunner 965 white") != -1) {
    return 27319;
  } else if (name.indexOf("fenix 7x carbon gray") != -1) {
    return 24832;
  } else if (
    name.indexOf("fenix 7x blue titanium with whitestone band") != -1
  ) {
    return 24807;
  } else if (
    name.indexOf("epix pro gen 2 sapphire titanium whitestone") != -1
  ) {
    return 28176;
  } else if (name.indexOf("d2 charlie black") != -1) {
    return 14461;
  } else if (name.indexOf("d2 delta aviato") != -1) {
    return 14463;
  } else if (name.indexOf("d2 delta px black") != -1) {
    return 14462;
  } else if (name.indexOf("descent mk1 carbon gray") != -1) {
    return 20443;
  } else if (name.indexOf("descent mk1 sapphire") != -1) {
    return 20444;
  } else if (
    name.indexOf("fenix 7") != -1 &&
    name.indexOf("sapphire") != -1 &&
    name.indexOf("gray") != -1
  ) {
    return 24796;
  } else if (
    name.indexOf("fenix 7") != -1 &&
    name.indexOf("solar") != -1 &&
    name.indexOf("gray") != -1 &&
    name.indexOf("🇿🇦") != -1
  ) {
    return 24791;
  } else if (
    name.indexOf("fenix 7") != -1 &&
    name.indexOf("solar") != -1 &&
    name.indexOf("gray") != -1 &&
    name.indexOf("🇦🇺") != -1
  ) {
    return 24792;
  } else if (
    name.indexOf("fenix 7") != -1 &&
    name.indexOf("solar") != -1 &&
    name.indexOf("gray") != -1 &&
    name.indexOf("🇪🇺") != -1
  ) {
    return 24793;
  } else if (
    name.indexOf("fenix 7") != -1 &&
    name.indexOf("solar") != -1 &&
    name.indexOf("gray") != -1 &&
    name.indexOf("🇬🇧") != -1
  ) {
    return 24794;
  } else if (
    name.indexOf("fenix 7") != -1 &&
    name.indexOf("solar") != -1 &&
    name.indexOf("sapphire") != -1 &&
    name.indexOf("black") != -1
  ) {
    return 24799;
  } else if (
    name.indexOf("fenix 7") != -1 &&
    name.indexOf("solar") != -1 &&
    name.indexOf("sapphire") != -1 &&
    name.indexOf("gray") != -1
  ) {
    return 24800;
  } else if (
    name.indexOf("fenix 7") != -1 &&
    name.indexOf("solar") != -1 &&
    name.indexOf("sapphire") != -1 &&
    name.indexOf("blue") != -1
  ) {
    return 24797;
  } else if (
    name.indexOf("fenix 7") != -1 &&
    name.indexOf("solar") != -1 &&
    name.indexOf("sapphire") != -1 &&
    name.indexOf("titanium") != -1 &&
    name.indexOf("chestnut") != -1
  ) {
    return 24798;
  } else if (
    name.indexOf("fenix 7") != -1 &&
    name.indexOf("watch") != -1 &&
    name.indexOf("silver") != -1 &&
    name.indexOf("afr") != -1
  ) {
    return 24786;
  } else if (
    name.indexOf("fenix 7") != -1 &&
    name.indexOf("watch") != -1 &&
    name.indexOf("silver") != -1 &&
    name.indexOf("aus") != -1
  ) {
    return 24787;
  } else if (
    name.indexOf("fenix 7") != -1 &&
    name.indexOf("watch") != -1 &&
    name.indexOf("silver") != -1 &&
    name.indexOf("emea") != -1
  ) {
    return 24788;
  } else if (
    name.indexOf("fenix 7") != -1 &&
    name.indexOf("watch") != -1 &&
    name.indexOf("silver") != -1 &&
    name.indexOf("enz") != -1
  ) {
    return 24789;
  } else if (
    name.indexOf("fenix 7") != -1 &&
    name.indexOf("watch") != -1 &&
    name.indexOf("silver") != -1
  ) {
    return 24790;
  } else if (
    name.indexOf("fenix 7") != -1 &&
    name.indexOf("solar") != -1 &&
    name.indexOf("gray") != -1
  ) {
    return 24795;
  } else if (
    name.indexOf("fenix 7 pro") != -1 &&
    name.indexOf("solar") != -1 &&
    name.indexOf("sapphire") != -1 &&
    name.indexOf("gray") != -1
  ) {
    return 28167;
  } else if (
    name.indexOf("fenix 7 pro") != -1 &&
    name.indexOf("solar") != -1 &&
    name.indexOf("sapphire") != -1 &&
    name.indexOf("fog") != -1
  ) {
    return 28168;
  } else if (
    name.indexOf("fenix 7 pro") != -1 &&
    name.indexOf("solar") != -1 &&
    name.indexOf("slate") != -1 &&
    name.indexOf("gray") != -1
  ) {
    return 28169;
  } else if (
    name.indexOf("fenix 7x") != -1 &&
    name.indexOf("solar") != -1 &&
    name.indexOf("afr") != -1 &&
    name.indexOf("gray") != -1
  ) {
    return 24801;
  } else if (
    name.indexOf("fenix 7x") != -1 &&
    name.indexOf("solar") != -1 &&
    name.indexOf("aus") != -1 &&
    name.indexOf("gray") != -1
  ) {
    return 24802;
  } else if (
    name.indexOf("fenix 7x") != -1 &&
    name.indexOf("solar") != -1 &&
    name.indexOf("emea") != -1 &&
    name.indexOf("gray") != -1
  ) {
    return 24803;
  } else if (
    name.indexOf("fenix 7x") != -1 &&
    name.indexOf("solar") != -1 &&
    name.indexOf("enz") != -1 &&
    name.indexOf("gray") != -1
  ) {
    return 24804;
  } else if (
    name.indexOf("fenix 7s pro") != -1 &&
    name.indexOf("solar") != -1 &&
    name.indexOf("sapphire") != -1 &&
    name.indexOf("gray") != -1
  ) {
    return 28179;
  } else if (
    name.indexOf("fenix 7s pro") != -1 &&
    name.indexOf("solar") != -1 &&
    name.indexOf("sapphire") != -1 &&
    name.indexOf("gold") != -1
  ) {
    return 28180;
  } else if (
    name.indexOf("fenix 7s pro") != -1 &&
    name.indexOf("solar") != -1 &&
    name.indexOf("silver") != -1
  ) {
    return 28178;
  } else if (
    name.indexOf("fenix 7s") != -1 &&
    name.indexOf("solar") != -1 &&
    name.indexOf("sapphire") != -1 &&
    name.indexOf("gray") != -1
  ) {
    return 24776;
  } else if (
    name.indexOf("fenix 7s") != -1 &&
    name.indexOf("solar") != -1 &&
    name.indexOf("sapphire") != -1 &&
    name.indexOf("gold") != -1 &&
    name.indexOf("nylon") != -1
  ) {
    return 24779;
  } else if (
    name.indexOf("fenix 7s") != -1 &&
    name.indexOf("solar") != -1 &&
    name.indexOf("sapphire") != -1 &&
    name.indexOf("gold") != -1 &&
    name.indexOf("sand") != -1
  ) {
    return 24775;
  } else if (
    name.indexOf("fenix 7s") != -1 &&
    name.indexOf("solar") != -1 &&
    name.indexOf("sapphire") != -1 &&
    name.indexOf("bronze") != -1
  ) {
    return 24777;
  } else if (
    name.indexOf("fenix 7s") != -1 &&
    name.indexOf("solar") != -1 &&
    name.indexOf("sapphire") != -1 &&
    name.indexOf("rose") != -1
  ) {
    return 24778;
  } else if (
    name.indexOf("fenix 7s") != -1 &&
    name.indexOf("silver") != -1 &&
    name.indexOf("graphite") != -1
  ) {
    return 24720;
  } else if (
    name.indexOf("fenix 7s") != -1 &&
    name.indexOf("silver") != -1 &&
    name.indexOf("graphite") != -1 &&
    name.indexOf("afr") != -1
  ) {
    return 24719;
  } else if (
    name.indexOf("fenix 7s") != -1 &&
    name.indexOf("silver") != -1 &&
    name.indexOf("graphite") != -1 &&
    name.indexOf("aus") != -1
  ) {
    return 24721;
  } else if (
    name.indexOf("fenix 7s") != -1 &&
    name.indexOf("silver") != -1 &&
    name.indexOf("graphite") != -1 &&
    name.indexOf("emea") != -1
  ) {
    return 24717;
  } else if (
    name.indexOf("fenix 7s") != -1 &&
    name.indexOf("silver") != -1 &&
    name.indexOf("graphite") != -1 &&
    name.indexOf("enz") != -1
  ) {
    return 24718;
  } else if (
    name.indexOf("fenix 7s") != -1 &&
    name.indexOf("silver") != -1 &&
    name.indexOf("whitestone") != -1
  ) {
    return 24726;
  } else if (
    name.indexOf("fenix 7s") != -1 &&
    name.indexOf("silver") != -1 &&
    name.indexOf("whitestone") != -1 &&
    name.indexOf("afr") != -1
  ) {
    return 24722;
  } else if (
    name.indexOf("fenix 7s") != -1 &&
    name.indexOf("silver") != -1 &&
    name.indexOf("whitestone") != -1 &&
    name.indexOf("aus") != -1
  ) {
    return 24723;
  } else if (
    name.indexOf("fenix 7s") != -1 &&
    name.indexOf("silver") != -1 &&
    name.indexOf("whitestone") != -1 &&
    name.indexOf("emea") != -1
  ) {
    return 24724;
  } else if (
    name.indexOf("fenix 7s") != -1 &&
    name.indexOf("silver") != -1 &&
    name.indexOf("whitestone") != -1 &&
    name.indexOf("enz") != -1
  ) {
    return 24725;
  } else if (
    name.indexOf("fenix 7s") != -1 &&
    name.indexOf("solar") != -1 &&
    name.indexOf("rose") != -1 &&
    name.indexOf("sand") != -1
  ) {
    return 24731;
  } else if (
    name.indexOf("fenix 7s") != -1 &&
    name.indexOf("solar") != -1 &&
    name.indexOf("rose") != -1 &&
    name.indexOf("sand") != -1 &&
    name.indexOf("afr") != -1
  ) {
    return 24727;
  } else if (
    name.indexOf("fenix 7s") != -1 &&
    name.indexOf("solar") != -1 &&
    name.indexOf("rose") != -1 &&
    name.indexOf("sand") != -1 &&
    name.indexOf("aus") != -1
  ) {
    return 24728;
  } else if (
    name.indexOf("fenix 7s") != -1 &&
    name.indexOf("solar") != -1 &&
    name.indexOf("rose") != -1 &&
    name.indexOf("sand") != -1 &&
    name.indexOf("emea") != -1
  ) {
    return 24729;
  } else if (
    name.indexOf("fenix 7s") != -1 &&
    name.indexOf("solar") != -1 &&
    name.indexOf("rose") != -1 &&
    name.indexOf("sand") != -1 &&
    name.indexOf("enz") != -1
  ) {
    return 24730;
  } else if (
    name.indexOf("fenix 7s") != -1 &&
    name.indexOf("solar") != -1 &&
    name.indexOf("gray") != -1 &&
    name.indexOf("black") != -1
  ) {
    return 24732;
  } else if (
    name.indexOf("fenix 7s") != -1 &&
    name.indexOf("solar") != -1 &&
    name.indexOf("gray") != -1 &&
    name.indexOf("black") != -1 &&
    name.indexOf("aus") != -1
  ) {
    return 24733;
  } else if (
    name.indexOf("fenix 7s") != -1 &&
    name.indexOf("solar") != -1 &&
    name.indexOf("gray") != -1 &&
    name.indexOf("black") != -1 &&
    name.indexOf("emea") != -1
  ) {
    return 24734;
  } else if (
    name.indexOf("fenix 7s") != -1 &&
    name.indexOf("solar") != -1 &&
    name.indexOf("gray") != -1 &&
    name.indexOf("black") != -1 &&
    name.indexOf("enz") != -1
  ) {
    return 24735;
  } else if (
    name.indexOf("fenix 7x") != -1 &&
    name.indexOf("solar") != -1 &&
    name.indexOf("gray") != -1 &&
    name.indexOf("black") != -1
  ) {
    return 24805;
  } else if (
    name.indexOf("fenix 7x") != -1 &&
    name.indexOf("solar") != -1 &&
    name.indexOf("sapphire") != -1 &&
    name.indexOf("gray") != -1 &&
    name.indexOf("black") != -1
  ) {
    return 28181;
  } else if (
    name.indexOf("fenix 7x pro") != -1 &&
    name.indexOf("solar") != -1 &&
    name.indexOf("sapphire") != -1 &&
    name.indexOf("fog") != -1 &&
    name.indexOf("orange") != -1
  ) {
    return 28182;
  } else if (
    name.indexOf("fenix 7x pro") != -1 &&
    name.indexOf("solar") != -1 &&
    name.indexOf("no wi-fi") != -1 &&
    name.indexOf("gray") != -1 &&
    name.indexOf("black") != -1
  ) {
    return 35809;
  } else if (
    name.indexOf("fenix 7x pro") != -1 &&
    name.indexOf("solar") != -1 &&
    name.indexOf("gray") != -1 &&
    name.indexOf("black") != -1
  ) {
    return 35810;
  } else if (
    name.indexOf("fenix 7x pro") != -1 &&
    name.indexOf("solar") != -1 &&
    name.indexOf("sapphire") != -1 &&
    name.indexOf("black dlc") != -1 &&
    name.indexOf("black") != -1
  ) {
    return 24834;

  } else if (
    name.indexOf("forerunner 165") != -1 &&
    name.indexOf("black/slate") != -1 &&
    name.indexOf("music") != -1 &&
    name.indexOf("gray") != -1
  ) {
    return 37168;
  } else if (
    name.indexOf("forerunner 165") != -1 &&
    name.indexOf("gray/white") != -1 &&
    name.indexOf("music") != -1 &&
    name.indexOf("mist") != -1
  ) {
    return 37170;
  } else if (
    name.indexOf("forerunner 165") != -1 &&
    name.indexOf("black/slate") != -1 &&
    name.indexOf("music") != -1 &&
    name.indexOf("gray") != -1
  ) {
    return 37171;
  } else if (
    name.indexOf("forerunner 165") != -1 &&
    name.indexOf("turquoise/aqua") != -1 &&
    name.indexOf("music") != -1 
  ) {
    return 37172;

  } else if (
    name.indexOf(
      "garmin fenix 7x sapphire solar carbon gray dlc titanium / black band"
    ) != -1
  ) {
    return 24806;
  } else if (
    name.indexOf(
      "garmin fenix 7x sapphire solar carbon gray dlc titanium / carbon grey dlc vented titanium band"
    ) != -1
  ) {
    return 24832;
  } else if (
    name.indexOf(
      "garmin fenix 7x sapphire solar mineral blue dlc titanium / whitestone band"
    ) != -1
  ) {
    return 24807;
  } else if (
    name.indexOf(
      "garmin fenix 7x sapphire solar titanium / chestnut leather band"
    ) != -1
  ) {
    return 24833;
  } else if (
    name.indexOf("fenix 8") != -1 &&
    name.indexOf("amoled") != -1 &&
    name.indexOf("sapphire") != -1 &&
    name.indexOf("43") != -1 &&
    name.indexOf("dark gray") != -1 &&
    name.indexOf("black silicone") != -1
  ) {
    return 36837;
  } else if (
    name.indexOf("fenix 8") != -1 &&
    name.indexOf("amoled") != -1 &&
    name.indexOf("sapphire") != -1 &&
    name.indexOf("43") != -1 &&
    name.indexOf("gold") != -1 &&
    name.indexOf("gray leather") != -1
  ) {
    return 27153;
  } else if (
    name.indexOf("fenix 8") != -1 &&
    name.indexOf("amoled") != -1 &&
    name.indexOf("sapphire") != -1 &&
    name.indexOf("43") != -1 &&
    name.indexOf("silver") != -1 &&
    name.indexOf("white silicone") != -1
  ) {
    return 36844;
  } else if (
    name.indexOf("fenix 8") != -1 &&
    name.indexOf("amoled") != -1 &&
    name.indexOf("sapphire") != -1 &&
    name.indexOf("43") != -1 &&
    name.indexOf("soft gold") != -1 &&
    name.indexOf("gray leather") != -1
  ) {
    return 36843;
  } else if (
    name.indexOf("fenix 8") != -1 &&
    name.indexOf("amoled") != -1 &&
    name.indexOf("sapphire") != -1 &&
    name.indexOf("47") != -1 &&
    name.indexOf("dark gray") != -1 &&
    name.indexOf("black silicone") != -1
  ) {
    return 36839;
  } else if (
    name.indexOf("fenix 8") != -1 &&
    name.indexOf("amoled") != -1 &&
    name.indexOf("sapphire") != -1 &&
    name.indexOf("47") != -1 &&
    name.indexOf("gray") != -1 &&
    name.indexOf("black silicone") != -1
  ) {
    return 36845;
  } else if (
    name.indexOf("fenix 8") != -1 &&
    name.indexOf("amoled") != -1 &&
    name.indexOf("sapphire") != -1 &&
    name.indexOf("47") != -1 &&
    name.indexOf("gray") != -1 &&
    name.indexOf("orange silicone") != -1
  ) {
    return 36838;
  } else if (
    name.indexOf("fenix 8") != -1 &&
    name.indexOf("amoled") != -1 &&
    name.indexOf("sapphire") != -1 &&
    name.indexOf("47") != -1 &&
    name.indexOf("gray") != -1 &&
    name.indexOf("gray silicone") != -1
  ) {
    return 36840;
  } else if (
    name.indexOf("fenix 8") != -1 &&
    name.indexOf("amoled") != -1 &&
    name.indexOf("sapphire") != -1 &&
    name.indexOf("51") != -1 &&
    name.indexOf("dark gray") != -1 &&
    name.indexOf("black silicone") != -1
  ) {
    return 36842;
  } else if (
    name.indexOf("fenix 8") != -1 &&
    name.indexOf("amoled") != -1 &&
    name.indexOf("sapphire") != -1 &&
    name.indexOf("51") != -1 &&
    name.indexOf("gray") != -1 &&
    name.indexOf("black silicone") != -1
  ) {
    return 36841;
  } else if (name.indexOf("garmin forerunner 255 basic slate gray") != -1) {
    return 27339;
  } else if (name.indexOf("garmin forerunner 255 basic tidal blue ") != -1) {
    return 27338;
  } else if (name.indexOf("garmin forerunner 255 music black") != -1) {
    return 27337;
  } else if (name.indexOf("garmin forerunner 255s light pink") != -1) {
    return 27341;
  } else if (name.indexOf("garmin forerunner 255s music whitestone") != -1) {
    return 27342;
  } else if (name.indexOf("garmin forerunner 255s powder gray") != -1) {
    return 27340;
  } else if (
    name.indexOf(
      "garmin forerunner 265 black bezel and case with black/powder gray silicone band 46mm"
    ) != -1
  ) {
    return 27327;
  } else if (
    name.indexOf(
      "garmin forerunner 265 black bezel with aqua case and aqua/black silicone band 46mm"
    ) != -1
  ) {
    return 27328;
  } else if (
    name.indexOf(
      "garmin forerunner 265 black bezel with whitestone case and whitestone/tidal blue silicone band 46mm"
    ) != -1
  ) {
    return 27326;
  } else if (
    name.indexOf(
      "garmin forerunner 265s black bezel and case with black/amp yellow silicone band 42mm"
    ) != -1
  ) {
    return 27325;
  } else if (
    name.indexOf(
      "garmin forerunner 265s black bezel/light pink case and light pink/whitestone silicone band 42mm"
    ) != -1
  ) {
    return 27324;
  } else if (
    name.indexOf(
      "garmin forerunner 265s black bezel/whitestone case and whitestone/neo tropic silicone band 42 mm"
    ) != -1
  ) {
    return 27323;
  } else if (name.indexOf("garmin forerunner 955 black") != -1) {
    return 27317;
  } else if (name.indexOf("garmin forerunner 955 solar black") != -1) {
    return 27318;
  } else if (
    name.indexOf("garmin forerunner 955 solar whitestone emea") != -1
  ) {
    return 27319;
  } else if (
    name.indexOf(
      "garmin forerunner 965 carbon gray dlc titanium bezel/black case and amp yellow/black silicone band"
    ) != -1
  ) {
    return 27320;
  } else if (
    name.indexOf(
      "garmin forerunner 965 carbon gray dlc titanium bezel/black case and black/powder gray silicone band"
    ) != -1
  ) {
    return 27321;
  } else if (
    name.indexOf(
      "garmin forerunner 965 titanium bezel/whitestone case and whitestone/powder gray silicone band"
    ) != -1
  ) {
    return 27322;
  } else if (
    name.indexOf("garmin instinct 2 camo edition graphite camo") != -1
  ) {
    return 35788;
  } else if (
    name.indexOf("instinct 2") != -1 &&
    name.indexOf("dezl edition") != -1
  ) {
    return 35791;
  } else if (
    name.indexOf("instinct 2") != -1 &&
    name.indexOf("solar graphite") != -1
  ) {
    return 35787;
  } else if (
    name.indexOf("instinct 2") != -1 &&
    name.indexOf("solar mist gray") != -1
  ) {
    return 35786;
  } else if (
    name.indexOf("instinct 2") != -1 &&
    name.indexOf("solar tactical edition black") != -1
  ) {
    return 35789;
  } else if (
    name.indexOf("instinct 2") != -1 &&
    name.indexOf("standard edition electric lime") != -1
  ) {
    return 35785;
  } else if (
    name.indexOf("instinct 2") != -1 &&
    name.indexOf("standard edition graphite") != -1
  ) {
    return 34461;
  } else if (
    name.indexOf("instinct 2") != -1 &&
    name.indexOf("surf edition mavericks") != -1
  ) {
    return 35790;
  } else if (name.indexOf("instinct 2s") != -1 &&
  name.indexOf("camo edition") != -1 &&
  name.indexOf("mist camo") != -1) {
    return 35766;
  } else if (
  name.indexOf("instinct 2s") != -1 &&
  name.indexOf("solar") != -1 &&
  name.indexOf("graphite") != -1) {
    return 35761;
  } else if (
  name.indexOf("instinct 2s") != -1 &&
  name.indexOf("solar") != -1 &&
  name.indexOf("mist") != -1 &&
  name.indexOf("gray") != -1) {
    return 35762;
  } else if (
  name.indexOf("instinct 2s") != -1 &&
  name.indexOf("solar") != -1 &&
  name.indexOf("neo") != -1 &&
  name.indexOf("tropic") != -1) {
    return 35763;
  } else if (
    name.indexOf("instinct 2s") != -1 &&
  name.indexOf("standard") != -1 &&
  name.indexOf("deep") != -1 &&
  name.indexOf("orchid") != -1
  ) {
    return 35764;
  } else if (
    name.indexOf("instinct 2s") != -1 &&
  name.indexOf("standard") != -1 &&
  name.indexOf("graphite") != -1
  ) {
    return 35765;
  } else if (name.indexOf("garmin instinct 2x flame red") != -1) {
    return 34465;
  } else if (name.indexOf("garmin instinct 2x solar graphite") != -1) {
    return 34466;
  } else if (name.indexOf("garmin instinct 2x solar moss") != -1) {
    return 34467;
  } else if (name.indexOf("garmin instinct 2x solar whitestone") != -1) {
    return 34468;
  } else if (name.indexOf("garmin instinct crossover black") != -1) {
    return 34463;
  } else if (name.indexOf("garmin instinct crossover blue") != -1) {
    return 34462;
  } else if (name.indexOf("garmin instinct esports black lava") != -1) {
    return 20434;
  } else if (name.indexOf("garmin instinct solar camo graphite") != -1) {
    return 20431;
  } else if (name.indexOf("garmin instinct solar camo lichen") != -1) {
    return 20433;
  } else if (name.indexOf("garmin instinct solar orchid") != -1) {
    return 20430;
  } else if (name.indexOf("garmin instinct solar surf cloudbreak") != -1) {
    return 20435;
  } else if (name.indexOf("garmin instinct solar surf pipeline") != -1) {
    return 20436;
  } else if (name.indexOf("garmin instinct solar tactical black") != -1) {
    return 20429;
  } else if (name.indexOf("garmin instinct solar tactical moss") != -1) {
    return 20437;
  } else if (name.indexOf("garmin instinct solar tidal blue") != -1) {
    return 20428;
  } else if (name.indexOf("garmin marq adventurer") != -1) {
    return 14378;
  } else if (
    name.indexOf("garmin marq adventurer (gen 2) modern tool watch") != -1
  ) {
    return 35815;
  } else if (name.indexOf("garmin marq athlete") != -1) {
    return 14379;
  } else if (
    name.indexOf("marq athlete") != -1 &&
    name.indexOf("gen 2") != -1 &&
    name.indexOf("carbon") != -1 &&
    name.indexOf(" modern tool watch") != -1
  ) {
    return 35811;
  } else if (
    name.indexOf("marq athlete") != -1 &&
    name.indexOf("gen 2") != -1 &&
    name.indexOf("performance") != -1 &&
    name.indexOf(" modern tool watch") != -1
  ) {
    return 35814;
  } else if (name.indexOf("garmin marq aviator") != -1) {
    return 14380;
  } else if (
    name.indexOf("marq aviator") != -1 &&
    name.indexOf("gen 2") != -1 &&
    name.indexOf("modern tool watch") != -1
  ) {
    return 35816;
  } else if (name.indexOf("garmin marq captain") != -1) {
    return 14381;
  } else if (
    name.indexOf("marq captain") != -1 &&
    name.indexOf("gen 2") != -1 &&
    name.indexOf(" modern tool watch") != -1
  ) {
    return 35817;
  } else if (name.indexOf("garmin marq commander") != -1) {
    return 14382;
  } else if (
    name.indexOf("marq commander") != -1 &&
    name.indexOf("gen 2") != -1 &&
    name.indexOf("carbon") != -1 &&
    name.indexOf(" modern tool watch") != -1
  ) {
    return 35813;
  } else if (name.indexOf("garmin marq driver") != -1) {
    return 14383;
  } else if (name.indexOf("garmin marq golfer") != -1) {
    return 20438;
  } else if (
    name.indexOf("marq golfer") != -1 &&
    name.indexOf("gen 2") != -1 &&
    name.indexOf("carbon") != -1 &&
    name.indexOf("modern tool watch") != -1
  ) {
    return 35812;
  } else if (name.indexOf("garmin tactix charlie") != -1) {
    return 14384;
  
  } else if (
    name.indexOf("venu 2 plus") != -1 &&
    name.indexOf("gps") != -1 &&
    name.indexOf("black case") != -1 &&
    name.indexOf("silicone band") != -1 &&
    name.indexOf("anz") != -1
  ) {
    return 25028;
  } else if (
    name.indexOf("venu 2 plus") != -1 &&
    name.indexOf("gps") != -1 &&
    name.indexOf("black case") != -1 &&
    name.indexOf("silicone band") != -1 &&
    name.indexOf("ww") != -1
  ) {
    return 25030;
  
 
  } else if (
    name.indexOf("venu 2 plus") != -1 &&
    name.indexOf("gps") != -1 &&
    name.indexOf("gray case") != -1 &&
    name.indexOf("silicone band") != -1 &&
    name.indexOf("passivated") != -1 &&
    name.indexOf("anz") != -1
  ) {
    return 25026;
  } else if (
    name.indexOf("venu 2 plus") != -1 &&
    name.indexOf("gps") != -1 &&
    name.indexOf("gray case") != -1 &&
    name.indexOf("silicone band") != -1 &&
    name.indexOf("passivated") != -1 &&
    name.indexOf("ww") != -1
  ) {
    return 25025;
  
  } else if (
    name.indexOf("venu 2 plus") != -1 &&
    name.indexOf("gps") != -1 &&
    name.indexOf("black case") != -1 &&
    name.indexOf("silicone band") != -1
  ) {
    return 25029;
  } else if (
    name.indexOf("venu 2 plus") != -1 &&
    name.indexOf("gps") != -1 &&
    name.indexOf("ivory case") != -1 &&
    name.indexOf("silicone band") != -1 
  ) {
    return 25031;
  } else if (
    name.indexOf("venu 2 plus") != -1 &&
    name.indexOf("gps") != -1 &&
    name.indexOf("gray case") != -1 &&
    name.indexOf("silicone band") != -1 &&
    name.indexOf("passivated") != -1
  ) {
    return 25027;
  } else if (
    name.indexOf("venu 2 plus") != -1 &&
    name.indexOf("gps") != -1 &&
    name.indexOf("slate case") != -1 &&
    name.indexOf("brown band") != -1 &&
    name.indexOf("anz") != -1
  ) {
    return 25034;
  } else if (
    name.indexOf("venu 2 plus") != -1 &&
    name.indexOf("gps") != -1 &&
    name.indexOf("slate case") != -1 &&
    name.indexOf("brown band") != -1
  ) {
    return 25035;
  } else if (
    name.indexOf(
      "garmin venu 2 silver bezel / granite blue case / silicone band"
    ) != -1
  ) {
    return 25023;
  } else if (
    name.indexOf("garmin venu 2 slate bezel / black case / silicone band") != -1
  ) {
    return 25024;
  } else if (
    name.indexOf(
      "garmin venu 2s light gold bezel / light sand case / silicone band"
    ) != -1
  ) {
    return 25020;
  } else if (
    name.indexOf(
      "garmin venu 2s rose gold bezel / white case / silicone band"
    ) != -1
  ) {
    return 25021;
  } else if (
    name.indexOf(
      "garmin venu 2s silver bezel / mist gray case / silicone band"
    ) != -1
  ) {
    return 25022;
  } else if (
    name.indexOf(
      "garmin venu 2s slate bezel / graphite case / silicone band"
    ) != -1
  ) {
    return 25019;
  } else if (
    name.indexOf("garmin venu песочного цвета с золотистым безелем") != -1
  ) {
    return 20442;
  } else if (
    name.indexOf("garmin vivoactive 3 золотистые с белым ремешком") != -1
  ) {
    return 20387;
  } else if (
    name.indexOf("garmin vivoactive 3 music black / silicone band") != -1
  ) {
    return 14386;
  } else if (
    name.indexOf("garmin vivoactive 3 music granite blue / silicone band") != -1
  ) {
    return 14385;
  } else if (
    name.indexOf("garmin vivoactive 4 серые с серебристым безелем") != -1
  ) {
    return 20440;
  } else if (name.indexOf("garmin vivoactive 4 черные с серым безелем") != -1) {
    return 20439;
  } else if (
    name.indexOf("garmin vivoactive 4 gray / silver bezel / silicone band") !=
    -1
  ) {
    return 14391;
  } else if (
    name.indexOf("garmin vivoactive 4s gray / silver bezel / silicone band") !=
    -1
  ) {
    return 14444;
  } else if (name.indexOf("garmin vivofit jr broken lava") != -1) {
    return 14473;
  } else if (name.indexOf("garmin vivosmart 4 бордовые с золотом") != -1) {
    return 20441;
  } else if (name.indexOf("garmin vivosmart 4 black") != -1) {
    return 14449;
  } else {
    return returnIDOtherBrand(name) || "No match";
  }
};
