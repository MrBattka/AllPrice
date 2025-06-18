import { returnIDApple2 } from "./returnIDApple2";

export const returnIDApple = (name) => {
  //  AirPods
  if (name.indexOf("airpods 2") !== -1) {
    return 12529;
  } else if (
    name.indexOf("airpods pro") !== -1 &&
    name.indexOf("2") !== -1 &&
    (name.indexOf("type") !== -1 || name.indexOf("usb") !== -1)
  ) {
    return 28524;
  } else if (name.indexOf("airpods pro 2 ") !== -1) {
    return 23458;
  } else if (name.indexOf("airpods pro") !== -1) {
    return 13955;
  } else if (
    name.indexOf("airpods 3") !== -1 &&
    name.indexOf("magsafe") !== -1
  ) {
    return 27128;
  } else if (
    name.indexOf("airpods 3 lighting") !== -1 ||
    name.indexOf("airpods 3 lightning") !== -1 ||
    name.indexOf("airpods 3") !== -1
  ) {
    return 20959;
  } else if (
    (name.indexOf("airpods 4") !== -1 &&
      (name.indexOf(" anc ") !== -1 || name.indexOf("(anc)") !== -1)) ||
    (name.indexOf("airpods 4 ") !== -1 && name.indexOf("с шумо") !== -1)
  ) {
    return 36587;
  } else if (name.indexOf("airpods 4") !== -1) {
    return 36586;
  } else if (
    name.indexOf("airpods max 2024 blue") !== -1 ||
    name.indexOf("airpods max 2 blue") !== -1 ||
    name.indexOf("airpods max usb-c blue") !== -1
  ) {
    return 36593;
  } else if (
    name.indexOf("airpods max 2024 green") !== -1 ||
    name.indexOf("airpods max 2 green") !== -1 ||
    name.indexOf("airpods max usb-c green") !== -1
  ) {
    return 36588;
  } else if (
    name.indexOf("airpods max 2024 midnight") !== -1 ||
    name.indexOf("airpods max 2 midnight") !== -1 ||
    name.indexOf("airpods max midnight") !== -1 ||
    name.indexOf("airpods max usb-c midnight") !== -1
  ) {
    return 36595;
  } else if (
    name.indexOf("airpods max 2024 black") !== -1 ||
    name.indexOf("airpods max 2 black") !== -1 ||
    name.indexOf("airpods max usb-c black") !== -1
  ) {
    return 36596;
  } else if (
    name.indexOf("airpods max 2024 orange") !== -1 ||
    name.indexOf("airpods max 2 orange") !== -1 ||
    name.indexOf("airpods max orange") !== -1 ||
    name.indexOf("airpods max usb-c orange") !== -1
  ) {
    return 36597;
  } else if (
    name.indexOf("airpods max 2024 pink") !== -1 ||
    name.indexOf("airpods max 2 pink") !== -1 ||
    name.indexOf("airpods max usb-c pink") !== -1
  ) {
    return 36589;
  } else if (
    name.indexOf("airpods max 2024 purple") !== -1 ||
    name.indexOf("airpods max 2 purple") !== -1 ||
    name.indexOf("airpods max usb-c purple") !== -1
  ) {
    return 36594;
  } else if (
    name.indexOf("airpods max 2024 silver") !== -1 ||
    name.indexOf("airpods max 2 silver") !== -1 ||
    name.indexOf("airpods max usb-c silver") !== -1
  ) {
    return 36590;
  } else if (
    name.indexOf("airpods max 2024 sky blue") !== -1 ||
    name.indexOf("airpods max 2 sky blue") !== -1 ||
    name.indexOf("airpods max usb-c sky blue") !== -1
  ) {
    return 36591;
  } else if (
    name.indexOf("airpods max 2024 starlight") !== -1 ||
    name.indexOf("airpods max 2 starlight") !== -1 ||
    name.indexOf("airpods max starlight") !== -1 ||
    name.indexOf("airpods max usb-c starlight") !== -1
  ) {
    return 36596;
  } else if (
    name.indexOf("airpods max 2024 white") !== -1 ||
    name.indexOf("airpods max 2 white") !== -1 ||
    name.indexOf("airpods max usb-c white") !== -1
  ) {
    return 36597;
  } else if (
    name.indexOf("airpods max 2024 space gray") !== -1 ||
    name.indexOf("airpods max 2 space gray") !== -1 ||
    name.indexOf("airpods max usb-c space gray") !== -1
  ) {
    return 36592;
  } else if (
    name.indexOf("airpods max 2024 gray") !== -1 ||
    name.indexOf("airpods max 2 gray") !== -1
  ) {
    return 36593;
  } else if (
    name.indexOf("airpods max green") !== -1 ||
    name.indexOf("airpods max green") !== -1
  ) {
    return 18979;
  } else if (
    name.indexOf("airpods max pink") !== -1 ||
    name.indexOf("airpods max pink") !== -1
  ) {
    return 18981;
  } else if (
    name.indexOf("airpods max silver") !== -1 ||
    name.indexOf("airpods max silver") !== -1 ||
    name.indexOf("airpods max white") !== -1
  ) {
    return 18978;
  } else if (
    name.indexOf("airpods max blue") !== -1 ||
    name.indexOf("airpods max blue") !== -1 ||
    name.indexOf("airpods max sky blue") !== -1
  ) {
    return 18980;
  } else if (
    name.indexOf("airpods max gray") !== -1 ||
    name.indexOf("airpods max gray") !== -1 ||
    name.indexOf("airpods max black") !== -1 ||
    name.indexOf("airpods max space gray") !== -1
  ) {
    return 18977;

    // apple tv
  } else if (name.indexOf("apple tv") !== -1 && name.indexOf("32") !== -1) {
    return 20151;
  } else if (name.indexOf("apple tv") !== -1 && name.indexOf("64") !== -1) {
    return 27026;

    // home pod
  } else if (
    name.indexOf("home") !== -1 &&
    name.indexOf("pod") !== -1 &&
    name.indexOf("mini") !== -1 &&
    name.indexOf("gray") !== -1
  ) {
    return 18952;
  } else if (
    name.indexOf("home") !== -1 &&
    name.indexOf("pod") !== -1 &&
    name.indexOf("mini") !== -1 &&
    name.indexOf("white") !== -1
  ) {
    return 18954;
  } else if (
    name.indexOf("home") !== -1 &&
    name.indexOf("pod") !== -1 &&
    name.indexOf("mini") === -1 &&
    name.indexOf("gray") !== -1
  ) {
    return 18955;
  } else if (
    name.indexOf("home") !== -1 &&
    name.indexOf("pod") !== -1 &&
    name.indexOf("mini") === -1 &&
    name.indexOf("white") !== -1
  ) {
    return 18957;

    // aw se
  } else if (
    name.indexOf("se") !== -1 &&
    name.indexOf("2") !== -1 &&
    name.indexOf("40") !== -1 &&
    (name.indexOf("midnight") !== -1 || name.indexOf("black") !== -1)
  ) {
    return 34313;
  } else if (
    name.indexOf("se") !== -1 &&
    name.indexOf("2") !== -1 &&
    name.indexOf("40") !== -1 &&
    name.indexOf("silver") !== -1
  ) {
    return 34314;
  } else if (
    name.indexOf("se") !== -1 &&
    name.indexOf("2") !== -1 &&
    name.indexOf("40") !== -1 &&
    (name.indexOf("starlight") !== -1 || name.indexOf("white") !== -1)
  ) {
    return 34315;
  } else if (
    name.indexOf("se") !== -1 &&
    name.indexOf("2") !== -1 &&
    name.indexOf("44") !== -1 &&
    (name.indexOf("midnight") !== -1 || name.indexOf("black") !== -1)
  ) {
    return 34316;
  } else if (
    name.indexOf("se") !== -1 &&
    name.indexOf("2") !== -1 &&
    name.indexOf("44") !== -1 &&
    name.indexOf("silver") !== -1
  ) {
    return 34317;
  } else if (
    name.indexOf("se") !== -1 &&
    name.indexOf("2") !== -1 &&
    name.indexOf("44") !== -1 &&
    (name.indexOf("starlight") !== -1 || name.indexOf("white") !== -1)
  ) {
    return 34318;

    // aw s9
  } else if (name.indexOf("s8 41 silver") !== -1) {
    return 23459;
  } else if (name.indexOf("s8 41 gold") !== -1) {
    return 23461;
  } else if (name.indexOf("s8 41 graphite") !== -1) {
    return 23519;
  } else if (
    name.indexOf("s8 41 midnight") !== -1 ||
    name.indexOf("s8 41 black") !== -1
  ) {
    return 23518;
  } else if (name.indexOf("s8 41 red") !== -1) {
    return 23547;
  } else if (
    name.indexOf("s8 41 starlight") !== -1 ||
    name.indexOf("s8 41 white") !== -1
  ) {
    return 23517;
  } else if (name.indexOf("s8 45 gold") !== -1) {
    return 23520;
  } else if (
    name.indexOf("s8 45 midnight") !== -1 ||
    name.indexOf("s8 45 black") !== -1
  ) {
    return 23522;
  } else if (name.indexOf("s8 45 red") !== -1) {
    return 23548;
  } else if (name.indexOf("s8 45 silver") !== -1) {
    return 23523;
  } else if (
    name.indexOf("s8 45 starlight") !== -1 ||
    name.indexOf("s8 45 white") !== -1
  ) {
    return 23524;
  } else if (
    name.indexOf("s9 45 silver") !== -1 &&
    name.indexOf("milanese") !== -1
  ) {
    return 28297;
  } else if (
    name.indexOf("s9 41 silver") !== -1 &&
    name.indexOf("milanese") !== -1
  ) {
    return 28296;
  } else if (
    name.indexOf("s9 41 graphite") !== -1 &&
    name.indexOf("milanese") !== -1
  ) {
    return 28294;
  } else if (
    name.indexOf("s9 41 gold") !== -1 &&
    name.indexOf("milanese") !== -1
  ) {
    return 28292;
  } else if (
    name.indexOf("s9 45 graphite") !== -1 &&
    name.indexOf("milanese") !== -1
  ) {
    return 28295;
  } else if (
    name.indexOf("s9 45 gold") !== -1 &&
    name.indexOf("milanese") !== -1
  ) {
    return 28293;
  } else if (
    name.indexOf("s9 41") !== -1 &&
    (name.indexOf("strlight") !== -1 || name.indexOf("white") !== -1) &&
    (name.indexOf("steel") === -1 || name.indexOf("steal") === -1)
  ) {
    return 28290;
  } else if (
    name.indexOf("s9 41") !== -1 &&
    name.indexOf("silver") !== -1 &&
    (name.indexOf("steel") === -1 || name.indexOf("steal") === -1)
  ) {
    return 28288;
  } else if (
    name.indexOf("s9 41") !== -1 &&
    name.indexOf("red") !== -1 &&
    (name.indexOf("steel") === -1 || name.indexOf("steal") === -1)
  ) {
    return 28286;
  } else if (
    name.indexOf("s9 41") !== -1 &&
    name.indexOf("midnight") !== -1 &&
    (name.indexOf("steel") === -1 || name.indexOf("steal") === -1)
  ) {
    return 28284;
  } else if (
    name.indexOf("s9 41") !== -1 &&
    name.indexOf("pink") !== -1 &&
    (name.indexOf("steel") === -1 || name.indexOf("steal") === -1)
  ) {
    return 28282;
  } else if (
    name.indexOf("s9 45") !== -1 &&
    name.indexOf("silver") !== -1 &&
    (name.indexOf("steel") === -1 || name.indexOf("steal") === -1)
  ) {
    return 28289;
  } else if (
    name.indexOf("s9 45") !== -1 &&
    (name.indexOf("strlight") !== -1 || name.indexOf("white") !== -1) &&
    (name.indexOf("steel") === -1 || name.indexOf("steal") === -1)
  ) {
    return 28291;
  } else if (
    name.indexOf("s9 45") !== -1 &&
    name.indexOf("red") !== -1 &&
    (name.indexOf("steel") === -1 || name.indexOf("steal") === -1)
  ) {
    return 28287;
  } else if (
    name.indexOf("s9 45") !== -1 &&
    name.indexOf("midnight") !== -1 &&
    (name.indexOf("steel") === -1 || name.indexOf("steal") === -1)
  ) {
    return 28285;
  } else if (
    name.indexOf("s9 45") !== -1 &&
    name.indexOf("pink") !== -1 &&
    (name.indexOf("steel") === -1 || name.indexOf("steal") === -1)
  ) {
    return 28283;
  } else if (
    name.indexOf("s10") !== -1 &&
    name.indexOf("42") !== -1 &&
    name.indexOf("steel") !== -1 &&
    name.indexOf("gold ti") !== -1 &&
    name.indexOf("natural") !== -1 &&
    name.indexOf("bracelete") !== -1
  ) {
    return 38249;
  } else if (
    name.indexOf("s10") !== -1 &&
    name.indexOf("42") !== -1 &&
    name.indexOf("steel") !== -1 &&
    name.indexOf("gold") !== -1 &&
    name.indexOf("milanese") !== -1
  ) {
    return 37722;
  } else if (
    name.indexOf("s10") !== -1 &&
    name.indexOf("42") !== -1 &&
    name.indexOf("natural") !== -1 &&
    name.indexOf("milanese") !== -1
  ) {
    return 37723;
  } else if (
    name.indexOf("s10") !== -1 &&
    name.indexOf("42") !== -1 &&
    name.indexOf("steel") !== -1 &&
    name.indexOf("milanese") !== -1
  ) {
    return 37724;
  } else if (
    name.indexOf("s10") !== -1 &&
    name.indexOf("46") !== -1 &&
    name.indexOf("gold") !== -1 &&
    name.indexOf("milanese") !== -1
  ) {
    return 37728;
  } else if (
    name.indexOf("s10") !== -1 &&
    name.indexOf("46") !== -1 &&
    name.indexOf("natural") !== -1 &&
    name.indexOf("milanese") !== -1
  ) {
    return 37729;
  } else if (
    name.indexOf("s10") !== -1 &&
    name.indexOf("46") !== -1 &&
    name.indexOf("steel") !== -1 &&
    name.indexOf("milanese") !== -1
  ) {
    return 37730;
  } else if (
    name.indexOf("s10") !== -1 &&
    name.indexOf("42") !== -1 &&
    name.indexOf("black") !== -1 &&
    name.indexOf("milanese") === -1
  ) {
    return 36603;
  } else if (
    name.indexOf("s10") !== -1 &&
    name.indexOf("42") !== -1 &&
    name.indexOf("steel") !== -1 &&
    name.indexOf("natural") !== -1 &&
    name.indexOf("milanese") === -1
  ) {
    return 36605;
  } else if (
    name.indexOf("s10") !== -1 &&
    name.indexOf("42") !== -1 &&
    name.indexOf("rose") !== -1 &&
    name.indexOf("milanese") === -1
  ) {
    return 36601;
  } else if (
    name.indexOf("s10") !== -1 &&
    name.indexOf("42") !== -1 &&
    name.indexOf("steel") !== -1 &&
    name.indexOf("gold") !== -1 &&
    name.indexOf("milanese") === -1
  ) {
    return 36609;
  } else if (
    name.indexOf("s10") !== -1 &&
    name.indexOf("42") !== -1 &&
    name.indexOf("silver") !== -1 &&
    name.indexOf("milanese") === -1
  ) {
    return 36598;
  } else if (
    name.indexOf("s10") !== -1 &&
    name.indexOf("42") !== -1 &&
    name.indexOf("steel") !== -1 &&
    name.indexOf("slate") !== -1 &&
    name.indexOf("milanese") === -1
  ) {
    return 36803;
  } else if (
    name.indexOf("s10") !== -1 &&
    name.indexOf("46") !== -1 &&
    name.indexOf("black") !== -1 &&
    name.indexOf("milanese") === -1
  ) {
    return 36604;
  } else if (
    name.indexOf("s10") !== -1 &&
    name.indexOf("46") !== -1 &&
    name.indexOf("natural") !== -1 &&
    name.indexOf("steel") !== -1 &&
    name.indexOf("milanese") === -1
  ) {
    return 36606;
  } else if (
    name.indexOf("s10") !== -1 &&
    name.indexOf("46") !== -1 &&
    name.indexOf("rose") !== -1 &&
    name.indexOf("milanese") === -1
  ) {
    return 36602;
  } else if (
    name.indexOf("s10") !== -1 &&
    name.indexOf("46") !== -1 &&
    name.indexOf("gold") !== -1 &&
    name.indexOf("milanese") === -1
  ) {
    return 36608;
  } else if (
    name.indexOf("s10") !== -1 &&
    name.indexOf("46") !== -1 &&
    name.indexOf("steel") !== -1 &&
    name.indexOf("silver") !== -1 &&
    name.indexOf("milanese") === -1
  ) {
    return 36600;
  } else if (
    name.indexOf("s10") !== -1 &&
    name.indexOf("46") !== -1 &&
    name.indexOf("steel") !== -1 &&
    name.indexOf("slate") !== -1 &&
    name.indexOf("milanese") === -1
  ) {
    return 36610;

    // aw ultra
  } else if (name.indexOf("ul black gray") !== -1) {
    return 23536;
  } else if (name.indexOf("ul blue gray") !== -1) {
    return 23535;
  } else if (name.indexOf("ul green") !== -1) {
    return 23530;
  } else if (name.indexOf("ul midnight") !== -1) {
    return 23533;
  } else if (name.indexOf("ul orange") !== -1) {
    return 23537;
  } else if (name.indexOf("ul starlight") !== -1) {
    return 23531;
  } else if (name.indexOf("ul white") !== -1) {
    return 23532;
  } else if (name.indexOf("ul yellow") !== -1) {
    return 23463;
  } else if (
    (name.indexOf("ultra 2") !== -1 || name.indexOf("ul 2") !== -1) &&
    name.indexOf("blue") !== -1 &&
    (name.indexOf("ocean band") !== -1 || name.indexOf("ob") !== -1) &&
    name.indexOf("2024") === -1
  ) {
    return 28306;
  } else if (
    (name.indexOf("ultra 2") !== -1 || name.indexOf("ul 2") !== -1) &&
    name.indexOf("white") !== -1 &&
    (name.indexOf("ocean band") !== -1 || name.indexOf("ob") !== -1) &&
    name.indexOf("2024") === -1
  ) {
    return 28305;
  } else if (
    (name.indexOf("ultra 2") !== -1 || name.indexOf("ul 2") !== -1) &&
    name.indexOf("orange") !== -1 &&
    (name.indexOf("ocean band") !== -1 || name.indexOf("ob") !== -1) &&
    name.indexOf("2024") === -1
  ) {
    return 28304;
  } else if (
    (name.indexOf("ultra 2") !== -1 || name.indexOf("ul 2") !== -1) &&
    (name.indexOf("orange") !== -1 || name.indexOf("beige") !== -1) &&
    (name.indexOf("trail loop") !== -1 || name.indexOf("tl") !== -1) &&
    name.indexOf("2024") === -1
  ) {
    return 28303;
  } else if (
    (name.indexOf("ultra 2") !== -1 || name.indexOf("ul 2") !== -1) &&
    name.indexOf("black") !== -1 &&
    (name.indexOf("trail loop") !== -1 || name.indexOf("tl") !== -1) &&
    name.indexOf("2024") === -1
  ) {
    return 28302;
  } else if (
    (name.indexOf("ultra 2") !== -1 || name.indexOf("ul 2") !== -1) &&
    (name.indexOf("gray") !== -1 || name.indexOf("green") !== -1) &&
    (name.indexOf("trail loop") !== -1 || name.indexOf("tl") !== -1) &&
    name.indexOf("2024") === -1
  ) {
    return 28301;
  } else if (
    (name.indexOf("ultra 2") !== -1 || name.indexOf("ul 2") !== -1) &&
    name.indexOf("olive") !== -1 &&
    (name.indexOf("alpine loop") !== -1 || name.indexOf("al") !== -1) &&
    name.indexOf("2024") === -1
  ) {
    return 28300;
  } else if (
    (name.indexOf("ultra 2") !== -1 || name.indexOf("ul 2") !== -1) &&
    name.indexOf("indigo") !== -1 &&
    (name.indexOf("alpine loop") !== -1 || name.indexOf("al") !== -1) &&
    name.indexOf("2024") === -1
  ) {
    return 28299;
  } else if (
    (name.indexOf("ultra 2") !== -1 || name.indexOf("ul 2") !== -1) &&
    name.indexOf("blue") !== -1 &&
    (name.indexOf("alpine loop") !== -1 || name.indexOf("al") !== -1) &&
    name.indexOf("2024") === -1
  ) {
    return 28298;
  } else if (
    (name.indexOf("ultra 2") !== -1 || name.indexOf("ul 2") !== -1) &&
    name.indexOf("tan") !== -1 &&
    name.indexOf("natural") !== -1 &&
    (name.indexOf("alpine loop") !== -1 || name.indexOf("al") !== -1) &&
    name.indexOf("2024") === -1
  ) {
    return 36966;
  } else if (
    (name.indexOf("ultra 2") !== -1 || name.indexOf("ul 2") !== -1) &&
    name.indexOf("black") !== -1 &&
    name.indexOf("black") !== -1 &&
    (name.indexOf("ocean") !== -1 || name.indexOf("ob") !== -1) &&
    name.indexOf("2024") === -1
  ) {
    return 36965;
  } else if (
    (name.indexOf("ultra 2") !== -1 || name.indexOf("ul 2") !== -1) &&
    name.indexOf("black") !== -1 &&
    name.indexOf("black") !== -1 &&
    (name.indexOf("trail loop") !== -1 || name.indexOf("tl") !== -1) &&
    name.indexOf("2024") === -1
  ) {
    return 36963;
  } else if (
    (name.indexOf("ultra 2") !== -1 || name.indexOf("ul 2") !== -1) &&
    name.indexOf("blue") !== -1 &&
    name.indexOf("black") !== -1 &&
    (name.indexOf("trail loop") !== -1 || name.indexOf("tl") !== -1) &&
    name.indexOf("2024") === -1
  ) {
    return 36964;
  } else if (
    (name.indexOf("ultra 2") !== -1 || name.indexOf("ul 2") !== -1) &&
    name.indexOf("navy") !== -1 &&
    (name.indexOf("natural titanium") !== -1 ||
      name.indexOf("natural case") !== -1) &&
    (name.indexOf("alpine loop") !== -1 || name.indexOf("al") !== -1) &&
    name.indexOf("2024") !== -1
  ) {
    return 37701;
  } else if (
    (name.indexOf("ultra 2") !== -1 || name.indexOf("ul 2") !== -1) &&
    name.indexOf("green") !== -1 &&
    (name.indexOf("natural titanium") !== -1 ||
      name.indexOf("natural case") !== -1) &&
    (name.indexOf("alpine loop") !== -1 || name.indexOf("al") !== -1) &&
    name.indexOf("2024") !== -1
  ) {
    return 37703;
  } else if (
    (name.indexOf("ultra 2") !== -1 || name.indexOf("ul 2") !== -1) &&
    name.indexOf("green") !== -1 &&
    (name.indexOf("black titanium") !== -1 ||
      name.indexOf("black case") !== -1) &&
    (name.indexOf("alpine loop") !== -1 || name.indexOf("al") !== -1) &&
    name.indexOf("2024") !== -1
  ) {
    return 37707;
  } else if (
    (name.indexOf("ultra 2") !== -1 || name.indexOf("ul 2") !== -1) &&
    name.indexOf("navy") !== -1 &&
    (name.indexOf("black titanium") !== -1 ||
      name.indexOf("black case") !== -1) &&
    (name.indexOf("alpine loop") !== -1 || name.indexOf("al") !== -1) &&
    name.indexOf("2024") !== -1
  ) {
    return 37708;
  } else if (
    (name.indexOf("ultra 2") !== -1 || name.indexOf("ul 2") !== -1) &&
    name.indexOf("tan") !== -1 &&
    (name.indexOf("black titanium") !== -1 ||
      name.indexOf("black case") !== -1) &&
    (name.indexOf("alpine loop") !== -1 || name.indexOf("al") !== -1) &&
    name.indexOf("2024") !== -1
  ) {
    return 37709;
  } else if (
    (name.indexOf("ultra 2") !== -1 || name.indexOf("ul 2") !== -1) &&
    name.indexOf("blue") !== -1 &&
    (name.indexOf("natural titanium") !== -1 ||
      name.indexOf("natural case") !== -1) &&
    (name.indexOf("trail loop") !== -1 || name.indexOf("tl") !== -1) &&
    name.indexOf("2024") !== -1
  ) {
    return 37711;
  } else if (
    (name.indexOf("ultra 2") !== -1 || name.indexOf("ul 2") !== -1) &&
    name.indexOf("navy") !== -1 &&
    (name.indexOf("natural titanium") !== -1 ||
      name.indexOf("natural case") !== -1) &&
    (name.indexOf("ocean band") !== -1 || name.indexOf("ob") !== -1) &&
    name.indexOf("2024") !== -1
  ) {
    return 37713;
  } else if (
    (name.indexOf("ultra 2") !== -1 || name.indexOf("ul 2") !== -1) &&
    name.indexOf("black") !== -1 &&
    (name.indexOf("black titanium") !== -1 ||
      name.indexOf("black case") !== -1) &&
    (name.indexOf("milanese loop") !== -1 || name.indexOf("ml") !== -1) &&
    name.indexOf("2024") !== -1
  ) {
    return 37716;
  } else if (
    (name.indexOf("ultra 2") !== -1 || name.indexOf("ul 2") !== -1) &&
    name.indexOf("natural") !== -1 &&
    (name.indexOf("natural titanium") !== -1 ||
      name.indexOf("natural case") !== -1) &&
    (name.indexOf("milanese loop") !== -1 || name.indexOf("ml") !== -1) &&
    name.indexOf("2024") !== -1
  ) {
    return 37717;

    // pencil
  } else if (
    name.indexOf("pencil type") !== -1 ||
    name.indexOf("pencil usb") !== -1
  ) {
    return 36571;
  } else if (name.indexOf("pencil 1") !== -1) {
    return 2072;
  } else if (name.indexOf("pencil 2") !== -1) {
    return 11873;
  } else if (name.indexOf("pencil pro") !== -1) {
    return 36178;
  } else if (
    name.indexOf("magic mouse 2") !== -1 &&
    name.indexOf("gray") !== -1
  ) {
    return 13769;
  } else if (
    name.indexOf("magic mouse 2") !== -1 &&
    (name.indexOf("white") !== -1 || name.indexOf("бел") !== -1)
  ) {
    return 2071;
  } else if (
    name.indexOf("magic mouse 3") !== -1 &&
    (name.indexOf("black") !== -1 || name.indexOf("черн") !== -1)
  ) {
    return 38001;
  } else if (
    name.indexOf("magic mouse 3") !== -1 &&
    (name.indexOf("white") !== -1 || name.indexOf("бел") !== -1)
  ) {
    return 38011;
  } else if (
    name.indexOf("magic keyboard") !== -1 &&
    name.indexOf("pro 11") !== -1 &&
    (name.indexOf("m4") !== -1 || name.indexOf("2024") !== -1) &&
    name.indexOf("black") !== -1
  ) {
    return 36954;
  } else if (
    name.indexOf("magic keyboard") !== -1 &&
    name.indexOf("pro 11") !== -1 &&
    (name.indexOf("m4") !== -1 || name.indexOf("2024") !== -1) &&
    name.indexOf("white") !== -1
  ) {
    return 36953;
  } else if (
    name.indexOf("magic keyboard") !== -1 &&
    name.indexOf("pro 13") !== -1 &&
    (name.indexOf("m4") !== -1 || name.indexOf("2024") !== -1) &&
    name.indexOf("black") !== -1
  ) {
    return 36957;
  } else if (
    name.indexOf("magic keyboard") !== -1 &&
    name.indexOf("pro 13") !== -1 &&
    (name.indexOf("m4") !== -1 || name.indexOf("2024") !== -1) &&
    name.indexOf("white") !== -1
  ) {
    return 36956;
  } else if (
    (name.indexOf("magic keyboard") !== -1 &&
      name.indexOf("pro 12.9") !== -1 &&
      name.indexOf("white") !== -1) ||
    (name.indexOf("magic keyboard") !== -1 &&
      name.indexOf("air 13") !== -1 &&
      (name.indexOf("m2") !== -1 || name.indexOf("2024") !== -1) &&
      name.indexOf("white") !== -1)
  ) {
    return 36958;
  } else if (
    (name.indexOf("magic keyboard") !== -1 &&
      name.indexOf("pro 12.9") !== -1 &&
      name.indexOf("black") !== -1) ||
    (name.indexOf("magic keyboard") !== -1 &&
      name.indexOf("air 13") !== -1 &&
      (name.indexOf("m2") !== -1 || name.indexOf("2024") !== -1) &&
      name.indexOf("black") !== -1)
  ) {
    return 36960;
  } else if (
    (name.indexOf("magic keyboard") !== -1 &&
      name.indexOf("10.9") !== -1 &&
      name.indexOf("white") !== -1) ||
    (name.indexOf("magic keyboard") !== -1 &&
      name.indexOf("pro 11") !== -1 &&
      (name.indexOf("m2") !== -1 || name.indexOf("2022") !== -1) &&
      name.indexOf("white") !== -1)
  ) {
    return 36961;
  } else if (
    (name.indexOf("magic keyboard") !== -1 &&
      name.indexOf("10.9") !== -1 &&
      name.indexOf("black") !== -1) ||
    (name.indexOf("magic keyboard") !== -1 &&
      name.indexOf("pro 11") !== -1 &&
      (name.indexOf("m2") !== -1 || name.indexOf("2022") !== -1) &&
      name.indexOf("black") !== -1)
  ) {
    return 36962;
  } else if (
    name.indexOf("magic keyboard") !== -1 &&
    name.indexOf("ipad pro 11") !== -1 &&
    name.indexOf("2020") !== -1 &&
    name.indexOf("black") !== -1
  ) {
    return 16160;
  } else if (
    name.indexOf("magic keyboard") !== -1 &&
    name.indexOf("ipad pro 12.9") !== -1 &&
    name.indexOf("2020") !== -1 &&
    name.indexOf("black") !== -1
  ) {
    return 16161;
  } else if (
    name.indexOf("magic keyboard") !== -1 &&
    name.indexOf("numeric") !== -1 &&
    name.indexOf("ru") !== -1 &&
    name.indexOf("silver") !== -1
  ) {
    return 18663;
  } else if (
    name.indexOf("magic keyboard") !== -1 &&
    name.indexOf("numeric") !== -1 &&
    name.indexOf("ru") !== -1 &&
    name.indexOf("gray") !== -1
  ) {
    return 18664;
  } else if (
    name.indexOf("smart keyboard") !== -1 &&
    (name.indexOf("air 10.5") !== -1 ||
      name.indexOf("pro 10.5") !== -1 ||
      name.indexOf("ipad 10.2") !== -1) &&
    name.indexOf("black") !== -1
  ) {
    return 13909;
  } else if (
    name.indexOf("magic keyboard with touch") !== -1 &&
    name.indexOf("numeric") !== -1 &&
    name.indexOf("mac") !== -1 &&
    name.indexOf("silicon") !== -1 &&
    name.indexOf("usb-c") !== -1 &&
    name.indexOf("white") !== -1
  ) {
    return 38756;
  } else if (
    name.indexOf("magic keyboard with touch") !== -1 &&
    name.indexOf("numeric") !== -1 &&
    name.indexOf("mac") !== -1 &&
    name.indexOf("silicon") !== -1 &&
    name.indexOf("usb-c") !== -1 &&
    name.indexOf("black") !== -1
  ) {
    return 38757;
  } else if (
    name.indexOf("magic keyboard") !== -1 &&
    name.indexOf("usb-c") !== -1 &&
    name.indexOf("white") !== -1 &&
    name.indexOf("mac ") === -1 &&
    name.indexOf("numeric") === -1
  ) {
    return 38758;
  } else if (
    name.indexOf("magic keyboard with touch") !== -1 &&
    name.indexOf("mac") !== -1 &&
    name.indexOf("silicon") != -1 &&
    name.indexOf("usb-c") !== -1 &&
    name.indexOf("white") !== -1 &&
    name.indexOf("numeric") === -1
  ) {
    return 38759;

    // iPad mini
  } else if (
    name.indexOf("ipad mini") !== -1 &&
    name.indexOf(" 128 ") !== -1 &&
    name.indexOf("blue") !== -1 &&
    (name.indexOf("2024") !== -1 || name.indexOf(" 7 ") !== -1)
  ) {
    return 37307;
  } else if (
    name.indexOf("ipad mini") !== -1 &&
    name.indexOf(" 256 ") !== -1 &&
    name.indexOf("blue") !== -1 &&
    (name.indexOf("2024") !== -1 || name.indexOf(" 7 ") !== -1)
  ) {
    return 37310;
  } else if (
    name.indexOf("ipad mini") !== -1 &&
    name.indexOf(" 512 ") !== -1 &&
    name.indexOf("blue") !== -1 &&
    (name.indexOf("2024") !== -1 || name.indexOf(" 7 ") !== -1)
  ) {
    return 37311;
  } else if (
    name.indexOf("mini") !== -1 &&
    (name.indexOf("2024") !== -1 || name.indexOf(" 7 ") !== -1) &&
    name.indexOf("128") !== -1 &&
    name.indexOf("purple") !== -1
  ) {
    return 37320;
  } else if (
    name.indexOf("mini") !== -1 &&
    (name.indexOf("2024") !== -1 || name.indexOf(" 7 ") !== -1) &&
    name.indexOf("128") !== -1 &&
    name.indexOf("gray") !== -1
  ) {
    return 37317;
  } else if (
    name.indexOf("mini") !== -1 &&
    (name.indexOf("2024") !== -1 || name.indexOf(" 7 ") !== -1) &&
    name.indexOf("256") !== -1 &&
    name.indexOf("purple") !== -1
  ) {
    return 37318;
  } else if (
    name.indexOf("mini") !== -1 &&
    (name.indexOf("2024") !== -1 || name.indexOf(" 7 ") !== -1) &&
    name.indexOf("256") !== -1 &&
    name.indexOf("starlight") !== -1
  ) {
    return 37321;
  } else if (
    name.indexOf("mini") !== -1 &&
    (name.indexOf("2024") !== -1 || name.indexOf(" 7 ") !== -1) &&
    name.indexOf("512") !== -1 &&
    name.indexOf("purple") !== -1
  ) {
    return 37319;
  } else if (
    name.indexOf("mini") !== -1 &&
    (name.indexOf("2024") !== -1 || name.indexOf(" 7 ") !== -1) &&
    name.indexOf("512") !== -1 &&
    name.indexOf("starlight") !== -1
  ) {
    return 37322;
  } else if (
    name.indexOf("mini 6") !== -1 &&
    name.indexOf("wi-fi") !== -1 &&
    name.indexOf("256") !== -1 &&
    name.indexOf("pink") !== -1
  ) {
    return 20637;

    // ipad 9
  } else if (
    name.indexOf("ipad 9") !== -1 &&
    name.indexOf(" 64 ") !== -1 &&
    name.indexOf("silver") !== -1 &&
    name.indexOf("wi-fi") !== -1
  ) {
    return 20659;
  } else if (
    name.indexOf("ipad 9") !== -1 &&
    name.indexOf(" 64 ") !== -1 &&
    (name.indexOf("grey") !== -1 || name.indexOf("gray") !== -1) &&
    name.indexOf("wi-fi") !== -1
  ) {
    return 20658;
  } else if (
    name.indexOf("ipad 9") !== -1 &&
    name.indexOf(" 256 ") !== -1 &&
    name.indexOf("silver") !== -1 &&
    name.indexOf("wi-fi") !== -1
  ) {
    return 20660;
  } else if (
    name.indexOf("ipad 9") !== -1 &&
    name.indexOf(" 256 ") !== -1 &&
    (name.indexOf("grey") !== -1 || name.indexOf("gray") !== -1) &&
    name.indexOf("wi-fi") !== -1
  ) {
    return 20661;
  } else if (
    name.indexOf("ipad 9") !== -1 &&
    name.indexOf(" 64 ") !== -1 &&
    name.indexOf("silver") !== -1 &&
    name.indexOf("lte") !== -1
  ) {
    return 20664;
  } else if (
    name.indexOf("ipad 9") !== -1 &&
    name.indexOf(" 64 ") !== -1 &&
    (name.indexOf("grey") !== -1 || name.indexOf("gray") !== -1) &&
    name.indexOf("lte") !== -1
  ) {
    return 20662;
  } else if (
    name.indexOf("ipad 9") !== -1 &&
    name.indexOf(" 256 ") !== -1 &&
    name.indexOf("silver") !== -1 &&
    name.indexOf("lte") !== -1
  ) {
    return 20665;
  } else if (
    name.indexOf("ipad 9") !== -1 &&
    name.indexOf(" 256 ") !== -1 &&
    (name.indexOf("grey") !== -1 || name.indexOf("gray") !== -1) &&
    name.indexOf("lte") !== -1
  ) {
    return 20666;
  } else if (
    name.indexOf("ipad 10") !== -1 &&
    name.indexOf(" 256 ") !== -1 &&
    name.indexOf("silver") !== -1 &&
    name.indexOf("wi-fi") !== -1
  ) {
    return 24837;
  } else if (
    name.indexOf("ipad 10") !== -1 &&
    name.indexOf(" 256 ") !== -1 &&
    name.indexOf("blue") !== -1 &&
    name.indexOf("wi-fi") !== -1
  ) {
    return 24839;
  } else if (
    name.indexOf("ipad 10") !== -1 &&
    name.indexOf(" 256 ") !== -1 &&
    name.indexOf("pink") !== -1 &&
    name.indexOf("wi-fi") !== -1
  ) {
    return 24843;
  } else if (
    name.indexOf("ipad 10") !== -1 &&
    name.indexOf(" 256 ") !== -1 &&
    name.indexOf("yellow") !== -1 &&
    name.indexOf("wi-fi") !== -1
  ) {
    return 24847;
  } else if (
    name.indexOf("ipad 10") !== -1 &&
    name.indexOf(" 256 ") !== -1 &&
    name.indexOf("blue") !== -1 &&
    name.indexOf("lte") !== -1
  ) {
    return 24840;
  } else if (
    name.indexOf("ipad 10") !== -1 &&
    name.indexOf(" 256 ") !== -1 &&
    name.indexOf("pink") !== -1 &&
    name.indexOf("lte") !== -1
  ) {
    return 24844;
  } else if (
    name.indexOf("ipad 10") !== -1 &&
    name.indexOf(" 256 ") !== -1 &&
    name.indexOf("silver") !== -1 &&
    name.indexOf("lte") !== -1
  ) {
    return 24838;
  } else if (
    name.indexOf("ipad 10") !== -1 &&
    name.indexOf(" 256 ") !== -1 &&
    name.indexOf("yellow") !== -1 &&
    name.indexOf("lte") !== -1
  ) {
    return 24848;
  } else if (
    name.indexOf("ipad 10") !== -1 &&
    name.indexOf(" 64 ") !== -1 &&
    name.indexOf("silver") !== -1 &&
    name.indexOf("wi-fi") !== -1
  ) {
    return 24836;
  } else if (
    name.indexOf("ipad 10") !== -1 &&
    name.indexOf(" 64 ") !== -1 &&
    name.indexOf("blue") !== -1 &&
    name.indexOf("wi-fi") !== -1
  ) {
    return 24841;
  } else if (
    name.indexOf("ipad 10") !== -1 &&
    name.indexOf(" 64 ") !== -1 &&
    name.indexOf("pink") !== -1 &&
    name.indexOf("wi-fi") !== -1
  ) {
    return 24845;
  } else if (
    name.indexOf("ipad 10") !== -1 &&
    name.indexOf(" 64 ") !== -1 &&
    name.indexOf("yellow") !== -1 &&
    name.indexOf("wi-fi") !== -1
  ) {
    return 24849;
  } else if (
    name.indexOf("ipad 10") !== -1 &&
    name.indexOf(" 64 ") !== -1 &&
    name.indexOf("blue") !== -1 &&
    name.indexOf("lte") !== -1
  ) {
    return 24842;
  } else if (
    name.indexOf("ipad 10") !== -1 &&
    name.indexOf(" 64 ") !== -1 &&
    name.indexOf("pink") !== -1 &&
    name.indexOf("lte") !== -1
  ) {
    return 24846;
  } else if (
    name.indexOf("ipad 10") !== -1 &&
    name.indexOf(" 64 ") !== -1 &&
    name.indexOf("silver") !== -1 &&
    name.indexOf("lte") !== -1
  ) {
    return 24835;
  } else if (
    name.indexOf("ipad 10") !== -1 &&
    name.indexOf(" 64 ") !== -1 &&
    name.indexOf("yellow") !== -1 &&
    name.indexOf("lte") !== -1
  ) {
    return 24850;
  } else if (
    name.indexOf("ipad 11") !== -1 &&
    name.indexOf("128") !== -1 &&
    name.indexOf("wi-fi") !== -1 &&
    name.indexOf("blue") !== -1
  ) {
    return 38598;
  } else if (
    name.indexOf("ipad 11") !== -1 &&
    name.indexOf("128") !== -1 &&
    name.indexOf("lte") !== -1 &&
    name.indexOf("silver") !== -1
  ) {
    return 38625;
  } else if (
    name.indexOf("ipad 11") !== -1 &&
    name.indexOf("128") !== -1 &&
    name.indexOf("wi-fi") !== -1 &&
    name.indexOf("pink") !== -1
  ) {
    return 38599;
  } else if (
    name.indexOf("ipad 11") !== -1 &&
    name.indexOf("128") !== -1 &&
    name.indexOf("wi-fi") !== -1 &&
    name.indexOf("silver") !== -1
  ) {
    return 38600;
  } else if (
    name.indexOf("ipad 11") !== -1 &&
    name.indexOf("128") !== -1 &&
    name.indexOf("wi-fi") !== -1 &&
    name.indexOf("yellow") !== -1
  ) {
    return 38618;
  } else if (
    name.indexOf("ipad 11") !== -1 &&
    name.indexOf("128") !== -1 &&
    name.indexOf("lte") !== -1 &&
    name.indexOf("blue") !== -1
  ) {
    return 38623;
  } else if (
    name.indexOf("ipad 11") !== -1 &&
    name.indexOf("4/128") !== -1 &&
    name.indexOf("lte") !== -1 &&
    name.indexOf("pink") !== -1
  ) {
    return 38624;
  } else if (
    name.indexOf("ipad 11") !== -1 &&
    name.indexOf("128") !== -1 &&
    name.indexOf("lte") !== -1 &&
    name.indexOf("yellow") !== -1
  ) {
    return 38626;
  } else if (
    name.indexOf("ipad 11") !== -1 &&
    name.indexOf("256") !== -1 &&
    name.indexOf("wi-fi") !== -1 &&
    name.indexOf("blue") !== -1
  ) {
    return 38606;
  } else if (
    name.indexOf("ipad 11") !== -1 &&
    name.indexOf("256") !== -1 &&
    name.indexOf("wi-fi") !== -1 &&
    name.indexOf("pink") !== -1
  ) {
    return 38607;
  } else if (
    name.indexOf("ipad 11") !== -1 &&
    name.indexOf("256") !== -1 &&
    name.indexOf("wi-fi") !== -1 &&
    name.indexOf("silver") !== -1
  ) {
    return 38608;
  } else if (
    name.indexOf("ipad 11") !== -1 &&
    name.indexOf("256") !== -1 &&
    name.indexOf("wi-fi") !== -1 &&
    name.indexOf("yellow") !== -1
  ) {
    return 38609;
  } else if (
    name.indexOf("ipad 11") !== -1 &&
    name.indexOf("256") !== -1 &&
    name.indexOf("lte") !== -1 &&
    name.indexOf("blue") !== -1
  ) {
    return 38631;
  } else if (
    name.indexOf("ipad 11") !== -1 &&
    name.indexOf("256") !== -1 &&
    name.indexOf("lte") !== -1 &&
    name.indexOf("pink") !== -1
  ) {
    return 38632;
  } else if (
    name.indexOf("ipad 11") !== -1 &&
    name.indexOf("256") !== -1 &&
    name.indexOf("lte") !== -1 &&
    name.indexOf("silver") !== -1
  ) {
    return 38633;
  } else if (
    name.indexOf("ipad 11") !== -1 &&
    name.indexOf("256") !== -1 &&
    name.indexOf("lte") !== -1 &&
    name.indexOf("yellow") !== -1
  ) {
    return 38634;
  } else if (
    name.indexOf("ipad 11") !== -1 &&
    name.indexOf("512") !== -1 &&
    name.indexOf("wi-fi") !== -1 &&
    name.indexOf("blue") !== -1
  ) {
    return 38614;
  } else if (
    name.indexOf("ipad 11") !== -1 &&
    name.indexOf("512") !== -1 &&
    name.indexOf("wi-fi") !== -1 &&
    name.indexOf("pink") !== -1
  ) {
    return 38615;
  } else if (
    name.indexOf("ipad 11") !== -1 &&
    name.indexOf("512") !== -1 &&
    name.indexOf("wi-fi") !== -1 &&
    name.indexOf("silver") !== -1
  ) {
    return 38616;
  } else if (
    name.indexOf("ipad 11") !== -1 &&
    name.indexOf("512") !== -1 &&
    name.indexOf("wi-fi") !== -1 &&
    name.indexOf("yellow") !== -1
  ) {
    return 38617;
  } else if (
    name.indexOf("ipad 11") !== -1 &&
    name.indexOf("512") !== -1 &&
    name.indexOf("lte") !== -1 &&
    name.indexOf("blue") !== -1
  ) {
    return 38639;
  } else if (
    name.indexOf("ipad 11") !== -1 &&
    name.indexOf("512") !== -1 &&
    name.indexOf("lte") !== -1 &&
    name.indexOf("pink") !== -1
  ) {
    return 38640;
  } else if (
    name.indexOf("ipad 11") !== -1 &&
    name.indexOf("512") !== -1 &&
    name.indexOf("lte") !== -1 &&
    name.indexOf("silver") !== -1
  ) {
    return 38641;
  } else if (
    name.indexOf("ipad 11") !== -1 &&
    name.indexOf("512") !== -1 &&
    name.indexOf("lte") !== -1 &&
    name.indexOf("yellow") !== -1
  ) {
    return 38642;
  } else if (
    name.indexOf("pro 11") !== -1 &&
    name.indexOf(" m2 ") !== -1 &&
    name.indexOf(" 1tb ") !== -1 &&
    name.indexOf("silver") !== -1 &&
    name.indexOf("wi-fi") !== -1
  ) {
    return 24854;
  } else if (
    name.indexOf("pro 11") !== -1 &&
    name.indexOf(" m2 ") !== -1 &&
    name.indexOf(" 1tb ") !== -1 &&
    name.indexOf("gray") !== -1 &&
    name.indexOf("wi-fi") !== -1
  ) {
    return 24861;
  } else if (
    name.indexOf("pro 11") !== -1 &&
    name.indexOf(" m2 ") !== -1 &&
    name.indexOf(" 1tb ") !== -1 &&
    name.indexOf("gray") !== -1 &&
    name.indexOf("lte") !== -1
  ) {
    return 24862;
  } else if (
    name.indexOf("pro 11") !== -1 &&
    name.indexOf(" m2 ") !== -1 &&
    name.indexOf(" 1tb ") !== -1 &&
    name.indexOf("silver") !== -1 &&
    name.indexOf("lte") !== -1
  ) {
    return 24856;
  } else if (
    name.indexOf("pro 11") !== -1 &&
    name.indexOf(" m2 ") !== -1 &&
    name.indexOf(" 2tb ") !== -1 &&
    name.indexOf("silver") !== -1 &&
    name.indexOf("wi-fi") !== -1
  ) {
    return 24855;
  } else if (
    name.indexOf("pro 11") !== -1 &&
    name.indexOf(" m2 ") !== -1 &&
    name.indexOf(" 2tb ") !== -1 &&
    name.indexOf("gray") !== -1 &&
    name.indexOf("wi-fi") !== -1
  ) {
    return 24863;
  } else if (
    name.indexOf("pro 11") !== -1 &&
    name.indexOf(" m2 ") !== -1 &&
    name.indexOf(" 2tb ") !== -1 &&
    name.indexOf("silver") !== -1 &&
    name.indexOf("lte") !== -1
  ) {
    return 24857;
  } else if (
    name.indexOf("pro 11") !== -1 &&
    name.indexOf(" m2 ") !== -1 &&
    name.indexOf(" 2tb ") !== -1 &&
    name.indexOf("gray") !== -1 &&
    name.indexOf("lte") !== -1
  ) {
    return 24864;
  } else if (
    name.indexOf("pro 11") !== -1 &&
    name.indexOf(" m2 ") !== -1 &&
    name.indexOf(" 128 ") !== -1 &&
    name.indexOf("silver") !== -1 &&
    name.indexOf("wi-fi") !== -1
  ) {
    return 24851;
  } else if (
    name.indexOf("pro 11") !== -1 &&
    name.indexOf(" m2 ") !== -1 &&
    name.indexOf(" 128 ") !== -1 &&
    name.indexOf("gray") !== -1 &&
    name.indexOf("wi-fi") !== -1
  ) {
    return 24865;
  } else if (
    name.indexOf("pro 11") !== -1 &&
    name.indexOf(" m2 ") !== -1 &&
    name.indexOf(" 128 ") !== -1 &&
    name.indexOf("silver") !== -1 &&
    name.indexOf("lte") !== -1
  ) {
    return 24858;
  } else if (
    name.indexOf("pro 11") !== -1 &&
    name.indexOf(" m2 ") !== -1 &&
    name.indexOf(" 128 ") !== -1 &&
    name.indexOf("gray") !== -1 &&
    name.indexOf("lte") !== -1
  ) {
    return 24866;
  } else if (
    name.indexOf("pro 11") !== -1 &&
    name.indexOf(" m2 ") !== -1 &&
    name.indexOf(" 256 ") !== -1 &&
    name.indexOf("silver") !== -1 &&
    name.indexOf("wi-fi") !== -1
  ) {
    return 24852;
  } else if (
    name.indexOf("pro 11") !== -1 &&
    name.indexOf(" m2 ") !== -1 &&
    name.indexOf(" 256 ") !== -1 &&
    name.indexOf("gray") !== -1 &&
    name.indexOf("wi-fi") !== -1
  ) {
    return 24867;
  } else if (
    name.indexOf("pro 11") !== -1 &&
    name.indexOf(" m2 ") !== -1 &&
    name.indexOf(" 256 ") !== -1 &&
    name.indexOf("silver") !== -1 &&
    name.indexOf("lte") !== -1
  ) {
    return 24859;
  } else if (
    name.indexOf("pro 11") !== -1 &&
    name.indexOf(" m2 ") !== -1 &&
    name.indexOf(" 256 ") !== -1 &&
    name.indexOf("gray") !== -1 &&
    name.indexOf("lte") !== -1
  ) {
    return 24868;
  } else if (
    name.indexOf("pro 11") !== -1 &&
    name.indexOf(" m2 ") !== -1 &&
    name.indexOf(" 512 ") !== -1 &&
    name.indexOf("silver") !== -1 &&
    name.indexOf("wi-fi") !== -1
  ) {
    return 24853;
  } else if (
    name.indexOf("pro 11") !== -1 &&
    name.indexOf(" m2 ") !== -1 &&
    name.indexOf(" 512 ") !== -1 &&
    name.indexOf("gray") !== -1 &&
    name.indexOf("wi-fi") !== -1
  ) {
    return 24869;
  } else if (
    name.indexOf("pro 11") !== -1 &&
    name.indexOf(" m2 ") !== -1 &&
    name.indexOf(" 512 ") !== -1 &&
    name.indexOf("silver") !== -1 &&
    name.indexOf("lte") !== -1
  ) {
    return 24860;
  } else if (
    name.indexOf("pro 11") !== -1 &&
    name.indexOf(" m2 ") !== -1 &&
    name.indexOf(" 512 ") !== -1 &&
    name.indexOf("gray") !== -1 &&
    name.indexOf("lte") !== -1
  ) {
    return 24870;
  } else if (
    name.indexOf("pro 12.9") !== -1 &&
    name.indexOf(" m1 ") !== -1 &&
    name.indexOf(" 128 ") !== -1 &&
    name.indexOf("silver") !== -1 &&
    name.indexOf("wi-fi") !== -1
  ) {
    return 20098;
  } else if (
    name.indexOf("pro 12.9") !== -1 &&
    name.indexOf(" m1 ") !== -1 &&
    name.indexOf(" 128 ") !== -1 &&
    name.indexOf("gray") !== -1 &&
    name.indexOf("wi-fi") !== -1
  ) {
    return 20099;
  } else if (
    name.indexOf("pro 12.9") !== -1 &&
    name.indexOf(" m1 ") !== -1 &&
    name.indexOf(" 128 ") !== -1 &&
    name.indexOf("silver") !== -1 &&
    name.indexOf("lte") !== -1
  ) {
    return 20088;
  } else if (
    name.indexOf("pro 12.9") !== -1 &&
    name.indexOf(" m1 ") !== -1 &&
    name.indexOf(" 128 ") !== -1 &&
    name.indexOf("gray") !== -1 &&
    name.indexOf("lte") !== -1
  ) {
    return 20089;
  } else if (
    name.indexOf("pro 12.9") !== -1 &&
    name.indexOf(" m1 ") !== -1 &&
    name.indexOf(" 1tb ") !== -1 &&
    name.indexOf("silver") !== -1 &&
    name.indexOf("wi-fi") !== -1
  ) {
    return 20104;
  } else if (
    name.indexOf("pro 12.9") !== -1 &&
    name.indexOf(" m1 ") !== -1 &&
    name.indexOf(" 1tb ") !== -1 &&
    name.indexOf("gray") !== -1 &&
    name.indexOf("wi-fi") !== -1
  ) {
    return 20105;
  } else if (
    name.indexOf("pro 12.9") !== -1 &&
    name.indexOf(" m1 ") !== -1 &&
    name.indexOf(" 1tb ") !== -1 &&
    name.indexOf("silver") !== -1 &&
    name.indexOf("lte") !== -1
  ) {
    return 20094;
  } else if (
    name.indexOf("pro 12.9") !== -1 &&
    name.indexOf(" m1 ") !== -1 &&
    name.indexOf(" 1tb ") !== -1 &&
    name.indexOf("gray") !== -1 &&
    name.indexOf("lte") !== -1
  ) {
    return 20095;
  } else if (
    name.indexOf("pro 12.9") !== -1 &&
    name.indexOf(" m1 ") !== -1 &&
    name.indexOf(" 256 ") !== -1 &&
    name.indexOf("silver") !== -1 &&
    name.indexOf("wi-fi") !== -1
  ) {
    return 20100;
  } else if (
    name.indexOf("pro 12.9") !== -1 &&
    name.indexOf(" m1 ") !== -1 &&
    name.indexOf(" 256 ") !== -1 &&
    name.indexOf("gray") !== -1 &&
    name.indexOf("wi-fi") !== -1
  ) {
    return 20101;
  } else if (
    name.indexOf("pro 12.9") !== -1 &&
    name.indexOf(" m1 ") !== -1 &&
    name.indexOf(" 256 ") !== -1 &&
    name.indexOf("silver") !== -1 &&
    name.indexOf("lte") !== -1
  ) {
    return 20090;
  } else if (
    name.indexOf("pro 12.9") !== -1 &&
    name.indexOf(" m1 ") !== -1 &&
    name.indexOf(" 256 ") !== -1 &&
    name.indexOf("gray") !== -1 &&
    name.indexOf("lte") !== -1
  ) {
    return 20091;
  } else if (
    name.indexOf("pro 12.9") !== -1 &&
    name.indexOf(" m1 ") !== -1 &&
    name.indexOf(" 2tb ") !== -1 &&
    name.indexOf("silver") !== -1 &&
    name.indexOf("wi-fi") !== -1
  ) {
    return 20106;
  } else if (
    name.indexOf("pro 12.9") !== -1 &&
    name.indexOf(" m1 ") !== -1 &&
    name.indexOf(" 2tb ") !== -1 &&
    name.indexOf("gray") !== -1 &&
    name.indexOf("wi-fi") !== -1
  ) {
    return 20107;
  } else if (
    name.indexOf("pro 12.9") !== -1 &&
    name.indexOf(" m1 ") !== -1 &&
    name.indexOf(" 2tb ") !== -1 &&
    name.indexOf("silver") !== -1 &&
    name.indexOf("lte") !== -1
  ) {
    return 20096;
  } else if (
    name.indexOf("pro 12.9") !== -1 &&
    name.indexOf(" m1 ") !== -1 &&
    name.indexOf(" 2tb ") !== -1 &&
    name.indexOf("gray") !== -1 &&
    name.indexOf("lte") !== -1
  ) {
    return 20097;
  } else if (
    name.indexOf("pro 12.9") !== -1 &&
    name.indexOf(" m1 ") !== -1 &&
    name.indexOf(" 512 ") !== -1 &&
    name.indexOf("silver") !== -1 &&
    name.indexOf("wi-fi") !== -1
  ) {
    return 20102;
  } else if (
    name.indexOf("pro 12.9") !== -1 &&
    name.indexOf(" m1 ") !== -1 &&
    name.indexOf(" 512 ") !== -1 &&
    name.indexOf("gray") !== -1 &&
    name.indexOf("wi-fi") !== -1
  ) {
    return 20103;
  } else if (
    name.indexOf("pro 12.9") !== -1 &&
    name.indexOf(" m1 ") !== -1 &&
    name.indexOf(" 512 ") !== -1 &&
    name.indexOf("silver") !== -1 &&
    name.indexOf("lte") !== -1
  ) {
    return 20092;
  } else if (
    name.indexOf("pro 12.9") !== -1 &&
    name.indexOf(" m1 ") !== -1 &&
    name.indexOf(" 512 ") !== -1 &&
    name.indexOf("gray") !== -1 &&
    name.indexOf("lte") !== -1
  ) {
    return 20093;
  } else if (
    name.indexOf("pro 13") !== -1 &&
    name.indexOf(" m4 ") !== -1 &&
    name.indexOf(" 1tb ") !== -1 &&
    name.indexOf("silver") !== -1 &&
    name.indexOf("wi-fi") !== -1 &&
    name.indexOf("nano") !== -1
  ) {
    return 36484;
  } else if (
    name.indexOf("pro 13") !== -1 &&
    name.indexOf(" m4 ") !== -1 &&
    name.indexOf(" 1tb ") !== -1 &&
    name.indexOf("black") !== -1 &&
    name.indexOf("wi-fi") !== -1 &&
    name.indexOf("nano") !== -1
  ) {
    return 36483;
  } else if (
    name.indexOf("pro 13") !== -1 &&
    name.indexOf(" m4 ") !== -1 &&
    name.indexOf(" 1tb ") !== -1 &&
    name.indexOf("silver") !== -1 &&
    name.indexOf("lte") !== -1 &&
    name.indexOf("nano") !== -1
  ) {
    return 36485;
  } else if (
    name.indexOf("pro 13") !== -1 &&
    name.indexOf(" m4 ") !== -1 &&
    name.indexOf(" 1tb ") !== -1 &&
    name.indexOf("black") !== -1 &&
    name.indexOf("lte") !== -1 &&
    name.indexOf("nano") !== -1
  ) {
    return 36486;
  } else if (
    name.indexOf("pro 13") !== -1 &&
    name.indexOf(" m4 ") !== -1 &&
    name.indexOf(" 2tb ") !== -1 &&
    name.indexOf("silver") !== -1 &&
    name.indexOf("wi-fi") !== -1 &&
    name.indexOf("nano") !== -1
  ) {
    return 36487;
  } else if (
    name.indexOf("pro 13") !== -1 &&
    name.indexOf(" m4 ") !== -1 &&
    name.indexOf(" 2tb ") !== -1 &&
    name.indexOf("black") !== -1 &&
    name.indexOf("wi-fi") !== -1 &&
    name.indexOf("nano") !== -1
  ) {
    return 36488;
  } else if (
    name.indexOf("pro 13") !== -1 &&
    name.indexOf(" m4 ") !== -1 &&
    name.indexOf(" 2tb ") !== -1 &&
    name.indexOf("silver") !== -1 &&
    name.indexOf("lte") !== -1 &&
    name.indexOf("nano") !== -1
  ) {
    return 36489;
  } else if (
    name.indexOf("pro 13") !== -1 &&
    name.indexOf(" m4 ") !== -1 &&
    name.indexOf(" 2tb ") !== -1 &&
    name.indexOf("black") !== -1 &&
    name.indexOf("lte") !== -1 &&
    name.indexOf("nano") !== -1
  ) {
    return 36490;
  } else if (
    name.indexOf("pro 13") !== -1 &&
    name.indexOf(" m4 ") !== -1 &&
    name.indexOf(" 1tb ") !== -1 &&
    name.indexOf("silver") !== -1 &&
    name.indexOf("wi-fi") !== -1
  ) {
    return 36260;
  } else if (
    name.indexOf("pro 13") !== -1 &&
    name.indexOf(" m4 ") !== -1 &&
    name.indexOf(" 1tb ") !== -1 &&
    name.indexOf("black") !== -1 &&
    name.indexOf("wi-fi") !== -1
  ) {
    return 36261;
  } else if (
    name.indexOf("pro 13") !== -1 &&
    name.indexOf(" m4 ") !== -1 &&
    name.indexOf(" 1tb ") !== -1 &&
    name.indexOf("silver") !== -1 &&
    name.indexOf("lte") !== -1
  ) {
    return 36262;
  } else if (
    name.indexOf("pro 13") !== -1 &&
    name.indexOf(" m4 ") !== -1 &&
    name.indexOf(" 1tb ") !== -1 &&
    name.indexOf("black") !== -1 &&
    name.indexOf("lte") !== -1
  ) {
    return 36263;
  } else if (
    name.indexOf("pro 13") !== -1 &&
    name.indexOf(" m4 ") !== -1 &&
    name.indexOf(" 2tb ") !== -1 &&
    name.indexOf("silver") !== -1 &&
    name.indexOf("wi-fi") !== -1
  ) {
    return 36268;
  } else if (
    name.indexOf("pro 13") !== -1 &&
    name.indexOf(" m4 ") !== -1 &&
    name.indexOf(" 2tb ") !== -1 &&
    name.indexOf("black") !== -1 &&
    name.indexOf("wi-fi") !== -1
  ) {
    return 36269;
  } else if (
    name.indexOf("pro 13") !== -1 &&
    name.indexOf(" m4 ") !== -1 &&
    name.indexOf(" 2tb ") !== -1 &&
    name.indexOf("silver") !== -1 &&
    name.indexOf("lte") !== -1
  ) {
    return 36270;
  } else if (
    name.indexOf("pro 13") !== -1 &&
    name.indexOf(" m4 ") !== -1 &&
    name.indexOf(" 2tb ") !== -1 &&
    name.indexOf("black") !== -1 &&
    name.indexOf("lte") !== -1
  ) {
    return 36271;
  } else if (
    name.indexOf("pro 13") !== -1 &&
    name.indexOf(" m4 ") !== -1 &&
    name.indexOf(" 256 ") !== -1 &&
    name.indexOf("silver") !== -1 &&
    name.indexOf("wi-fi") !== -1
  ) {
    return 36176;
  } else if (
    name.indexOf("pro 13") !== -1 &&
    name.indexOf(" m4 ") !== -1 &&
    name.indexOf(" 256 ") !== -1 &&
    name.indexOf("black") !== -1 &&
    name.indexOf("wi-fi") !== -1
  ) {
    return 36250;
  } else if (
    name.indexOf("pro 13") !== -1 &&
    name.indexOf(" m4 ") !== -1 &&
    name.indexOf(" 256 ") !== -1 &&
    name.indexOf("silver") !== -1 &&
    name.indexOf("lte") !== -1
  ) {
    return 36177;
  } else if (
    name.indexOf("pro 13") !== -1 &&
    name.indexOf(" m4 ") !== -1 &&
    name.indexOf(" 256 ") !== -1 &&
    name.indexOf("black") !== -1 &&
    name.indexOf("lte") !== -1
  ) {
    return 36251;
  } else if (
    name.indexOf("pro 13") !== -1 &&
    name.indexOf(" m4 ") !== -1 &&
    name.indexOf(" 512 ") !== -1 &&
    name.indexOf("silver") !== -1 &&
    name.indexOf("wi-fi") !== -1
  ) {
    return 36256;
  } else if (
    name.indexOf("pro 13") !== -1 &&
    name.indexOf(" m4 ") !== -1 &&
    name.indexOf(" 512 ") !== -1 &&
    name.indexOf("black") !== -1 &&
    name.indexOf("wi-fi") !== -1
  ) {
    return 36257;
  } else if (
    name.indexOf("pro 13") !== -1 &&
    name.indexOf(" m4 ") !== -1 &&
    name.indexOf(" 512 ") !== -1 &&
    name.indexOf("silver") !== -1 &&
    name.indexOf("lte") !== -1
  ) {
    return 36258;
  } else if (
    name.indexOf("pro 13") !== -1 &&
    name.indexOf(" m4 ") !== -1 &&
    name.indexOf(" 512 ") !== -1 &&
    name.indexOf("black") !== -1 &&
    name.indexOf("lte") !== -1
  ) {
    return 36259;
  } else if (
    name.indexOf("mini 6") !== -1 &&
    name.indexOf(" 64 ") !== -1 &&
    name.indexOf("pink") !== -1 &&
    name.indexOf("wi-fi") !== -1
  ) {
    return 20634;
  } else if (
    name.indexOf("mini 6") !== -1 &&
    name.indexOf(" 64 ") !== -1 &&
    name.indexOf("purple") !== -1 &&
    name.indexOf("wi-fi") !== -1
  ) {
    return 20635;
  } else if (
    (name.indexOf("mini 6") !== -1 &&
      name.indexOf(" 64 ") !== -1 &&
      name.indexOf("gray") !== -1 &&
      name.indexOf("wi-fi") !== -1) ||
    (name.indexOf("mini 6") !== -1 &&
      name.indexOf(" 64 ") !== -1 &&
      name.indexOf("grey") !== -1 &&
      name.indexOf("wi-fi") !== -1)
  ) {
    return 20633;
  } else if (
    (name.indexOf("mini 6") !== -1 &&
      name.indexOf(" 64 ") !== -1 &&
      name.indexOf("starlight") !== -1 &&
      name.indexOf("wi-fi") !== -1) ||
    (name.indexOf("mini 6") !== -1 &&
      name.indexOf(" 64 ") !== -1 &&
      name.indexOf("silver") !== -1 &&
      name.indexOf("wi-fi") !== -1)
  ) {
    return 20636;
  } else if (
    name.indexOf("mini 6") !== -1 &&
    name.indexOf(" 64 ") !== -1 &&
    name.indexOf("pink") !== -1 &&
    name.indexOf("lte") !== -1
  ) {
    return 20643;
  } else if (
    name.indexOf("mini 6") !== -1 &&
    name.indexOf(" 64 ") !== -1 &&
    name.indexOf("purple") !== -1 &&
    name.indexOf("lte") !== -1
  ) {
    return 20644;
  } else if (
    (name.indexOf("mini 6") !== -1 &&
      name.indexOf(" 64 ") !== -1 &&
      name.indexOf("gray") !== -1 &&
      name.indexOf("lte") !== -1) ||
    (name.indexOf("mini 6") !== -1 &&
      name.indexOf(" 64 ") !== -1 &&
      name.indexOf("grey") !== -1 &&
      name.indexOf("lte") !== -1)
  ) {
    return 20642;
  } else if (
    (name.indexOf("mini 6") !== -1 &&
      name.indexOf(" 64 ") !== -1 &&
      name.indexOf("starlight") !== -1 &&
      name.indexOf("lte") !== -1) ||
    (name.indexOf("mini 6") !== -1 &&
      name.indexOf(" 64 ") !== -1 &&
      name.indexOf("silver") !== -1 &&
      name.indexOf("lte") !== -1)
  ) {
    return 20641;
  } else if (
    name.indexOf("mini 6") !== -1 &&
    name.indexOf(" 256 ") !== -1 &&
    name.indexOf("pink") !== -1 &&
    name.indexOf("wi-fi") !== -1
  ) {
    return 20637;
  } else if (
    name.indexOf("mini 6") !== -1 &&
    name.indexOf(" 256 ") !== -1 &&
    name.indexOf("purple") !== -1 &&
    name.indexOf("wi-fi") !== -1
  ) {
    return 20638;
  } else if (
    (name.indexOf("mini 6") !== -1 &&
      name.indexOf(" 256 ") !== -1 &&
      name.indexOf("gray") !== -1 &&
      name.indexOf("wi-fi") !== -1) ||
    (name.indexOf("mini 6") !== -1 &&
      name.indexOf(" 256 ") !== -1 &&
      name.indexOf("grey") !== -1 &&
      name.indexOf("wi-fi") !== -1)
  ) {
    return 20639;
  } else if (
    (name.indexOf("mini 6") !== -1 &&
      name.indexOf(" 256 ") !== -1 &&
      name.indexOf("starlight") !== -1 &&
      name.indexOf("wi-fi") !== -1) ||
    (name.indexOf("mini 6") !== -1 &&
      name.indexOf(" 256 ") !== -1 &&
      name.indexOf("silver") !== -1 &&
      name.indexOf("wi-fi") !== -1)
  ) {
    return 20640;
  } else if (
    name.indexOf("mini 6") !== -1 &&
    name.indexOf(" 256 ") !== -1 &&
    name.indexOf("pink") !== -1 &&
    name.indexOf("lte") !== -1
  ) {
    return 20649;
  } else if (
    name.indexOf("mini 6") !== -1 &&
    name.indexOf(" 256 ") !== -1 &&
    name.indexOf("purple") !== -1 &&
    name.indexOf("lte") !== -1
  ) {
    return 20650;
  } else if (
    (name.indexOf("mini 6") !== -1 &&
      name.indexOf(" 256 ") !== -1 &&
      name.indexOf("gray") !== -1 &&
      name.indexOf("lte") !== -1) ||
    (name.indexOf("mini 6") !== -1 &&
      name.indexOf(" 256 ") !== -1 &&
      name.indexOf("grey") !== -1 &&
      name.indexOf("lte") !== -1)
  ) {
    return 20651;
  } else if (
    (name.indexOf("mini 6") !== -1 &&
      name.indexOf(" 256 ") !== -1 &&
      name.indexOf("starlight") !== -1 &&
      name.indexOf("lte") !== -1) ||
    (name.indexOf("mini 6") !== -1 &&
      name.indexOf(" 256 ") !== -1 &&
      name.indexOf("silver") !== -1 &&
      name.indexOf("lte") !== -1)
  ) {
    return 20652;
  } else if (
    name.indexOf("air 5") !== -1 &&
    name.indexOf(" 64 ") !== -1 &&
    name.indexOf("blue") !== -1 &&
    name.indexOf("wi-fi") !== -1
  ) {
    return 22175;
  } else if (
    name.indexOf("air 5") !== -1 &&
    name.indexOf(" 64 ") !== -1 &&
    name.indexOf("pink") !== -1 &&
    name.indexOf("wi-fi") !== -1
  ) {
    return 22173;
  } else if (
    name.indexOf("air 5") !== -1 &&
    name.indexOf(" 64 ") !== -1 &&
    name.indexOf("purple") !== -1 &&
    name.indexOf("wi-fi") !== -1
  ) {
    return 22174;
  } else if (
    name.indexOf("air 5") !== -1 &&
    name.indexOf(" 64 ") !== -1 &&
    name.indexOf("gray") !== -1 &&
    name.indexOf("wi-fi") !== -1
  ) {
    return 22171;
  } else if (
    name.indexOf("air 5") !== -1 &&
    name.indexOf(" 64 ") !== -1 &&
    name.indexOf("starlight") !== -1 &&
    name.indexOf("wi-fi") !== -1
  ) {
    return 22172;
  } else if (
    name.indexOf("air 5") !== -1 &&
    name.indexOf(" 256 ") !== -1 &&
    name.indexOf("blue") !== -1 &&
    name.indexOf("wi-fi") !== -1
  ) {
    return 22176;
  } else if (
    name.indexOf("air 5") !== -1 &&
    name.indexOf(" 256 ") !== -1 &&
    name.indexOf("pink") !== -1 &&
    name.indexOf("wi-fi") !== -1
  ) {
    return 22177;
  } else if (
    name.indexOf("air 5") !== -1 &&
    name.indexOf(" 256 ") !== -1 &&
    name.indexOf("purple") !== -1 &&
    name.indexOf("wi-fi") !== -1
  ) {
    return 22178;
  } else if (
    name.indexOf("air 5") !== -1 &&
    name.indexOf(" 256 ") !== -1 &&
    name.indexOf("gray") !== -1 &&
    name.indexOf("wi-fi") !== -1
  ) {
    return 22179;
  } else if (
    name.indexOf("air 5") !== -1 &&
    name.indexOf(" 256 ") !== -1 &&
    name.indexOf("starlight") !== -1 &&
    name.indexOf("wi-fi") !== -1
  ) {
    return 22180;
  } else if (
    name.indexOf("air 5") !== -1 &&
    name.indexOf(" 64 ") !== -1 &&
    name.indexOf("blue") !== -1 &&
    name.indexOf("lte") !== -1
  ) {
    return 22186;
  } else if (
    name.indexOf("air 5") !== -1 &&
    name.indexOf(" 64 ") !== -1 &&
    name.indexOf("pink") !== -1 &&
    name.indexOf("lte") !== -1
  ) {
    return 22187;
  } else if (
    name.indexOf("air 5") !== -1 &&
    name.indexOf(" 64 ") !== -1 &&
    name.indexOf("purple") !== -1 &&
    name.indexOf("lte") !== -1
  ) {
    return 22188;
  } else if (
    name.indexOf("air 5") !== -1 &&
    name.indexOf(" 64 ") !== -1 &&
    name.indexOf("gray") !== -1 &&
    name.indexOf("lte") !== -1
  ) {
    return 22189;
  } else if (
    name.indexOf("air 5") !== -1 &&
    name.indexOf(" 64 ") !== -1 &&
    name.indexOf("starlight") !== -1 &&
    name.indexOf("lte") !== -1
  ) {
    return 22190;
  } else if (
    name.indexOf("air 5") !== -1 &&
    name.indexOf(" 256 ") !== -1 &&
    name.indexOf("blue") !== -1 &&
    name.indexOf("lte") !== -1
  ) {
    return 22181;
  } else if (
    name.indexOf("air 5") !== -1 &&
    name.indexOf(" 256 ") !== -1 &&
    name.indexOf("pink") !== -1 &&
    name.indexOf("lte") !== -1
  ) {
    return 22182;
  } else if (
    name.indexOf("air 5") !== -1 &&
    name.indexOf(" 256 ") !== -1 &&
    name.indexOf("purple") !== -1 &&
    name.indexOf("lte") !== -1
  ) {
    return 22183;
  } else if (
    name.indexOf("air 5") !== -1 &&
    name.indexOf(" 256 ") !== -1 &&
    name.indexOf("gray") !== -1 &&
    name.indexOf("lte") !== -1
  ) {
    return 22184;
  } else if (
    name.indexOf("air 5") !== -1 &&
    name.indexOf(" 256 ") !== -1 &&
    name.indexOf("starlight") !== -1 &&
    name.indexOf("lte") !== -1
  ) {
    return 22185;
  } else if (
    name.indexOf("air 11") !== -1 &&
    (name.indexOf(" m2 ") !== -1 || name.indexOf("2024") !== -1) &&
    name.indexOf(" 128 ") !== -1 &&
    name.indexOf("blue") !== -1 &&
    name.indexOf("wi-fi") !== -1
  ) {
    return 36208;
  } else if (
    name.indexOf("air 11") !== -1 &&
    (name.indexOf(" m2 ") !== -1 || name.indexOf("2024") !== -1) &&
    name.indexOf(" 128 ") !== -1 &&
    name.indexOf("purple") !== -1 &&
    name.indexOf("wi-fi") !== -1
  ) {
    return 36207;
  } else if (
    name.indexOf("air 11") !== -1 &&
    (name.indexOf(" m2 ") !== -1 || name.indexOf("2024") !== -1) &&
    name.indexOf(" 128 ") !== -1 &&
    name.indexOf("gray") !== -1 &&
    name.indexOf("wi-fi") !== -1
  ) {
    return 36172;
  } else if (
    name.indexOf("air 11") !== -1 &&
    (name.indexOf(" m2 ") !== -1 || name.indexOf("2024") !== -1) &&
    name.indexOf(" 128 ") !== -1 &&
    name.indexOf("starlight") !== -1 &&
    name.indexOf("wi-fi") !== -1
  ) {
    return 36206;
  } else if (
    name.indexOf("air 11") !== -1 &&
    (name.indexOf(" m2 ") !== -1 || name.indexOf("2024") !== -1) &&
    name.indexOf(" 128 ") !== -1 &&
    name.indexOf("blue") !== -1 &&
    name.indexOf("lte") !== -1
  ) {
    return 36401;
  } else if (
    name.indexOf("air 11") !== -1 &&
    (name.indexOf(" m2 ") !== -1 || name.indexOf("2024") !== -1) &&
    name.indexOf(" 128 ") !== -1 &&
    name.indexOf("purple") !== -1 &&
    name.indexOf("lte") !== -1
  ) {
    return 36402;
  } else if (
    name.indexOf("air 11") !== -1 &&
    (name.indexOf(" m2 ") !== -1 || name.indexOf("2024") !== -1) &&
    name.indexOf(" 128 ") !== -1 &&
    name.indexOf("gray") !== -1 &&
    name.indexOf("lte") !== -1
  ) {
    return 36403;
  } else if (
    name.indexOf("air 11") !== -1 &&
    (name.indexOf(" m2 ") !== -1 || name.indexOf("2024") !== -1) &&
    name.indexOf(" 128 ") !== -1 &&
    name.indexOf("starlight") !== -1 &&
    name.indexOf("lte") !== -1
  ) {
    return 36404;
  } else if (
    name.indexOf("air 11") !== -1 &&
    (name.indexOf(" m2 ") !== -1 || name.indexOf("2024") !== -1) &&
    name.indexOf(" 1tb ") !== -1 &&
    name.indexOf("blue") !== -1 &&
    name.indexOf("wi-fi") !== -1
  ) {
    return 36217;
  } else if (
    name.indexOf("air 11") !== -1 &&
    (name.indexOf(" m2 ") !== -1 || name.indexOf("2024") !== -1) &&
    name.indexOf(" 1tb ") !== -1 &&
    name.indexOf("purple") !== -1 &&
    name.indexOf("wi-fi") !== -1
  ) {
    return 36218;
  } else if (
    name.indexOf("air 11") !== -1 &&
    (name.indexOf(" m2 ") !== -1 || name.indexOf("2024") !== -1) &&
    name.indexOf(" 1tb ") !== -1 &&
    name.indexOf("gray") !== -1 &&
    name.indexOf("wi-fi") !== -1
  ) {
    return 36219;
  } else if (
    name.indexOf("air 11") !== -1 &&
    (name.indexOf(" m2 ") !== -1 || name.indexOf("2024") !== -1) &&
    name.indexOf(" 1tb ") !== -1 &&
    name.indexOf("starlight") !== -1 &&
    name.indexOf("wi-fi") !== -1
  ) {
    return 36220;
  } else if (
    name.indexOf("air 11") !== -1 &&
    (name.indexOf(" m2 ") !== -1 || name.indexOf("2024") !== -1) &&
    name.indexOf(" 1tb ") !== -1 &&
    name.indexOf("blue") !== -1 &&
    name.indexOf("lte") !== -1
  ) {
    return 36405;
  } else if (
    name.indexOf("air 11") !== -1 &&
    (name.indexOf(" m2 ") !== -1 || name.indexOf("2024") !== -1) &&
    name.indexOf(" 1tb ") !== -1 &&
    name.indexOf("purple") !== -1 &&
    name.indexOf("lte") !== -1
  ) {
    return 36406;
  } else if (
    name.indexOf("air 11") !== -1 &&
    (name.indexOf(" m2 ") !== -1 || name.indexOf("2024") !== -1) &&
    name.indexOf(" 1tb ") !== -1 &&
    name.indexOf("gray") !== -1 &&
    name.indexOf("lte") !== -1
  ) {
    return 36407;
  } else if (
    name.indexOf("air 11") !== -1 &&
    (name.indexOf(" m2 ") !== -1 || name.indexOf("2024") !== -1) &&
    name.indexOf(" 1tb ") !== -1 &&
    name.indexOf("starlight") !== -1 &&
    name.indexOf("lte") !== -1
  ) {
    return 36408;
  } else if (
    name.indexOf("air 11") !== -1 &&
    (name.indexOf(" m2 ") !== -1 || name.indexOf("2024") !== -1) &&
    name.indexOf(" 256 ") !== -1 &&
    name.indexOf("blue") !== -1 &&
    name.indexOf("wi-fi") !== -1
  ) {
    return 36209;
  } else if (
    name.indexOf("air 11") !== -1 &&
    (name.indexOf(" m2 ") !== -1 || name.indexOf("2024") !== -1) &&
    name.indexOf(" 256 ") !== -1 &&
    name.indexOf("purple") !== -1 &&
    name.indexOf("wi-fi") !== -1
  ) {
    return 36210;
  } else if (
    name.indexOf("air 11") !== -1 &&
    (name.indexOf(" m2 ") !== -1 || name.indexOf("2024") !== -1) &&
    name.indexOf(" 256 ") !== -1 &&
    name.indexOf("gray") !== -1 &&
    name.indexOf("wi-fi") !== -1
  ) {
    return 36211;
  } else if (
    name.indexOf("air 11") !== -1 &&
    (name.indexOf(" m2 ") !== -1 || name.indexOf("2024") !== -1) &&
    name.indexOf(" 256 ") !== -1 &&
    name.indexOf("starlight") !== -1 &&
    name.indexOf("wi-fi") !== -1
  ) {
    return 36212;
  } else if (
    name.indexOf("air 11") !== -1 &&
    (name.indexOf(" m2 ") !== -1 || name.indexOf("2024") !== -1) &&
    name.indexOf(" 256 ") !== -1 &&
    name.indexOf("blue") !== -1 &&
    name.indexOf("lte") !== -1
  ) {
    return 36409;
  } else if (
    name.indexOf("air 11") !== -1 &&
    (name.indexOf(" m2 ") !== -1 || name.indexOf("2024") !== -1) &&
    name.indexOf(" 256 ") !== -1 &&
    name.indexOf("purple") !== -1 &&
    name.indexOf("lte") !== -1
  ) {
    return 36410;
  } else if (
    name.indexOf("air 11") !== -1 &&
    (name.indexOf(" m2 ") !== -1 || name.indexOf("2024") !== -1) &&
    name.indexOf(" 256 ") !== -1 &&
    name.indexOf("gray") !== -1 &&
    name.indexOf("lte") !== -1
  ) {
    return 36411;
  } else if (
    name.indexOf("air 11") !== -1 &&
    (name.indexOf(" m2 ") !== -1 || name.indexOf("2024") !== -1) &&
    name.indexOf(" 256 ") !== -1 &&
    name.indexOf("starlight") !== -1 &&
    name.indexOf("lte") !== -1
  ) {
    return 36412;
  } else if (
    name.indexOf("air 11") !== -1 &&
    (name.indexOf(" m2 ") !== -1 || name.indexOf("2024") !== -1) &&
    name.indexOf(" 512 ") !== -1 &&
    name.indexOf("blue") !== -1 &&
    name.indexOf("wi-fi") !== -1
  ) {
    return 36213;
  } else if (
    name.indexOf("air 11") !== -1 &&
    (name.indexOf(" m2 ") !== -1 || name.indexOf("2024") !== -1) &&
    name.indexOf(" 512 ") !== -1 &&
    name.indexOf("purple") !== -1 &&
    name.indexOf("wi-fi") !== -1
  ) {
    return 36214;
  } else if (
    name.indexOf("air 11") !== -1 &&
    (name.indexOf(" m2 ") !== -1 || name.indexOf("2024") !== -1) &&
    name.indexOf(" 512 ") !== -1 &&
    name.indexOf("gray") !== -1 &&
    name.indexOf("wi-fi") !== -1
  ) {
    return 36215;
  } else if (
    name.indexOf("air 11") !== -1 &&
    (name.indexOf(" m2 ") !== -1 || name.indexOf("2024") !== -1) &&
    name.indexOf(" 512 ") !== -1 &&
    name.indexOf("starlight") !== -1 &&
    name.indexOf("wi-fi") !== -1
  ) {
    return 36216;
  } else if (
    name.indexOf("air 11") !== -1 &&
    (name.indexOf(" m2 ") !== -1 || name.indexOf("2024") !== -1) &&
    name.indexOf(" 512 ") !== -1 &&
    name.indexOf("blue") !== -1 &&
    name.indexOf("lte") !== -1
  ) {
    return 36413;
  } else if (
    name.indexOf("air 11") !== -1 &&
    (name.indexOf(" m2 ") !== -1 || name.indexOf("2024") !== -1) &&
    name.indexOf(" 512 ") !== -1 &&
    name.indexOf("purple") !== -1 &&
    name.indexOf("lte) !== -1") !== -1
  ) {
    return 36414;
  } else if (
    name.indexOf("air 11") !== -1 &&
    name.indexOf(" m2 ") !== -1 &&
    name.indexOf(" 512 ") !== -1 &&
    name.indexOf("gray") !== -1 &&
    name.indexOf("lte") !== -1
  ) {
    return 36415;
  } else if (
    name.indexOf("air 11") !== -1 &&
    (name.indexOf(" m2 ") !== -1 || name.indexOf("2024") !== -1) &&
    name.indexOf(" 512 ") !== -1 &&
    name.indexOf("starlight") !== -1 &&
    name.indexOf("lte") !== -1
  ) {
    return 36416;
  } else if (
    name.indexOf("air 11") !== -1 &&
    (name.indexOf("2025") !== -1 || name.indexOf("m3") !== -1) &&
    name.indexOf("128") !== -1 &&
    name.indexOf("wi-fi") !== -1 &&
    name.indexOf("blue") !== -1
  ) {
    return 38470;
  } else if (
    name.indexOf("air 11") !== -1 &&
    (name.indexOf("2025") !== -1 || name.indexOf("m3") !== -1) &&
    name.indexOf("128") !== -1 &&
    name.indexOf("wi-fi") !== -1 &&
    name.indexOf("purple") !== -1
  ) {
    return 38471;
  } else if (
    name.indexOf("air 11") !== -1 &&
    (name.indexOf("2025") !== -1 || name.indexOf("m3") !== -1) &&
    name.indexOf("128") !== -1 &&
    name.indexOf("wi-fi") !== -1 &&
    name.indexOf("gray") !== -1
  ) {
    return 38472;
  } else if (
    name.indexOf("air 11") !== -1 &&
    (name.indexOf("2025") !== -1 || name.indexOf("m3") !== -1) &&
    name.indexOf("128") !== -1 &&
    name.indexOf("wi-fi") !== -1 &&
    name.indexOf("starlight") !== -1
  ) {
    return 38473;
  } else if (
    name.indexOf("air 11") !== -1 &&
    (name.indexOf("2025") !== -1 || name.indexOf("m3") !== -1) &&
    name.indexOf("128") !== -1 &&
    name.indexOf("lte") !== -1 &&
    name.indexOf("blue") !== -1
  ) {
    return 38502;
  } else if (
    name.indexOf("air 11") !== -1 &&
    (name.indexOf("2025") !== -1 || name.indexOf("m3") !== -1) &&
    name.indexOf("128") !== -1 &&
    name.indexOf("lte") !== -1 &&
    name.indexOf("purple") !== -1
  ) {
    return 38503;
  } else if (
    name.indexOf("air 11") !== -1 &&
    (name.indexOf("2025") !== -1 || name.indexOf("m3") !== -1) &&
    name.indexOf("128") !== -1 &&
    name.indexOf("lte") !== -1 &&
    name.indexOf("gray") !== -1
  ) {
    return 38504;
  } else if (
    name.indexOf("air 11") !== -1 &&
    (name.indexOf("2025") !== -1 || name.indexOf("m3") !== -1) &&
    name.indexOf("128") !== -1 &&
    name.indexOf("lte") !== -1 &&
    name.indexOf("starlight") !== -1
  ) {
    return 38505;
  } else if (
    name.indexOf("air 11") !== -1 &&
    (name.indexOf("2025") !== -1 || name.indexOf("m3") !== -1) &&
    name.indexOf("1tb") !== -1 &&
    name.indexOf("wi-fi") !== -1 &&
    name.indexOf("blue") !== -1
  ) {
    return 38494;
  } else if (
    name.indexOf("air 11") !== -1 &&
    (name.indexOf("2025") !== -1 || name.indexOf("m3") !== -1) &&
    name.indexOf("1tb") !== -1 &&
    name.indexOf("wi-fi") !== -1 &&
    name.indexOf("purple") !== -1
  ) {
    return 38495;
  } else if (
    name.indexOf("air 11") !== -1 &&
    (name.indexOf("2025") !== -1 || name.indexOf("m3") !== -1) &&
    name.indexOf("1tb") !== -1 &&
    name.indexOf("wi-fi") !== -1 &&
    name.indexOf("gray") !== -1
  ) {
    return 38496;
  } else if (
    name.indexOf("air 11") !== -1 &&
    (name.indexOf("2025") !== -1 || name.indexOf("m3") !== -1) &&
    name.indexOf("1tb") !== -1 &&
    name.indexOf("wi-fi") !== -1 &&
    name.indexOf("starlight") !== -1
  ) {
    return 38497;
  } else if (
    name.indexOf("air 11") !== -1 &&
    (name.indexOf("2025") !== -1 || name.indexOf("m3") !== -1) &&
    name.indexOf("1tb") !== -1 &&
    name.indexOf("lte") !== -1 &&
    name.indexOf("blue") !== -1
  ) {
    return 38526;
  } else if (
    name.indexOf("air 11") !== -1 &&
    (name.indexOf("2025") !== -1 || name.indexOf("m3") !== -1) &&
    name.indexOf("1tb") !== -1 &&
    name.indexOf("lte") !== -1 &&
    name.indexOf("purple") !== -1
  ) {
    return 38527;
  } else if (
    name.indexOf("air 11") !== -1 &&
    (name.indexOf("2025") !== -1 || name.indexOf("m3") !== -1) &&
    name.indexOf("1tb") !== -1 &&
    name.indexOf("lte") !== -1 &&
    name.indexOf("gray") !== -1
  ) {
    return 38528;
  } else if (
    name.indexOf("air 11") !== -1 &&
    (name.indexOf("2025") !== -1 || name.indexOf("m3") !== -1) &&
    name.indexOf("1tb") !== -1 &&
    name.indexOf("lte") !== -1 &&
    name.indexOf("starlight") !== -1
  ) {
    return 38529;
  } else if (
    name.indexOf("air 11") !== -1 &&
    (name.indexOf("2025") !== -1 || name.indexOf("m3") !== -1) &&
    name.indexOf("256") !== -1 &&
    name.indexOf("wi-fi") !== -1 &&
    name.indexOf("blue") !== -1
  ) {
    return 38478;
  } else if (
    name.indexOf("air 11") !== -1 &&
    (name.indexOf("2025") !== -1 || name.indexOf("m3") !== -1) &&
    name.indexOf("256") !== -1 &&
    name.indexOf("wi-fi") !== -1 &&
    name.indexOf("purple") !== -1
  ) {
    return 38479;
  } else if (
    name.indexOf("air 11") !== -1 &&
    (name.indexOf("2025") !== -1 || name.indexOf("m3") !== -1) &&
    name.indexOf("256") !== -1 &&
    name.indexOf("wi-fi") !== -1 &&
    name.indexOf("gray") !== -1
  ) {
    return 38480;
  } else if (
    name.indexOf("air 11") !== -1 &&
    (name.indexOf("2025") !== -1 || name.indexOf("m3") !== -1) &&
    name.indexOf("256") !== -1 &&
    name.indexOf("wi-fi") !== -1 &&
    name.indexOf("starlight") !== -1
  ) {
    return 38481;
  } else if (
    name.indexOf("air 11") !== -1 &&
    (name.indexOf("2025") !== -1 || name.indexOf("m3") !== -1) &&
    name.indexOf("256") !== -1 &&
    name.indexOf("lte") !== -1 &&
    name.indexOf("blue") !== -1
  ) {
    return 38510;
  } else if (
    name.indexOf("air 11") !== -1 &&
    (name.indexOf("2025") !== -1 || name.indexOf("m3") !== -1) &&
    name.indexOf("256") !== -1 &&
    name.indexOf("lte") !== -1 &&
    name.indexOf("purple") !== -1
  ) {
    return 38511;
  } else if (
    name.indexOf("air 11") !== -1 &&
    (name.indexOf("2025") !== -1 || name.indexOf("m3") !== -1) &&
    name.indexOf("256") !== -1 &&
    name.indexOf("lte") !== -1 &&
    name.indexOf("gray") !== -1
  ) {
    return 38512;
  } else if (
    name.indexOf("air 11") !== -1 &&
    (name.indexOf("2025") !== -1 || name.indexOf("m3") !== -1) &&
    name.indexOf("256") !== -1 &&
    name.indexOf("lte") !== -1 &&
    name.indexOf("starlight") !== -1
  ) {
    return 38513;
  } else if (
    name.indexOf("air 11") !== -1 &&
    (name.indexOf("2025") !== -1 || name.indexOf("m3") !== -1) &&
    name.indexOf("512") !== -1 &&
    name.indexOf("wi-fi") !== -1 &&
    name.indexOf("blue") !== -1
  ) {
    return 38486;
  } else if (
    name.indexOf("air 11") !== -1 &&
    (name.indexOf("2025") !== -1 || name.indexOf("m3") !== -1) &&
    name.indexOf("512") !== -1 &&
    name.indexOf("wi-fi") !== -1 &&
    name.indexOf("purple") !== -1
  ) {
    return 38487;
  } else if (
    name.indexOf("air 11") !== -1 &&
    (name.indexOf("2025") !== -1 || name.indexOf("m3") !== -1) &&
    name.indexOf("512") !== -1 &&
    name.indexOf("wi-fi") !== -1 &&
    name.indexOf("gray") !== -1
  ) {
    return 38488;
  } else if (
    name.indexOf("air 11") !== -1 &&
    (name.indexOf("2025") !== -1 || name.indexOf("m3") !== -1) &&
    name.indexOf("512") !== -1 &&
    name.indexOf("wi-fi") !== -1 &&
    name.indexOf("starlight") !== -1
  ) {
    return 38489;
  } else if (
    name.indexOf("air 11") !== -1 &&
    (name.indexOf("2025") !== -1 || name.indexOf("m3") !== -1) &&
    name.indexOf("512") !== -1 &&
    name.indexOf("lte") !== -1 &&
    name.indexOf("blue") !== -1
  ) {
    return 38518;
  } else if (
    name.indexOf("air 11") !== -1 &&
    (name.indexOf("2025") !== -1 || name.indexOf("m3") !== -1) &&
    name.indexOf("512") !== -1 &&
    name.indexOf("lte") !== -1 &&
    name.indexOf("purple") !== -1
  ) {
    return 38519;
  } else if (
    name.indexOf("air 11") !== -1 &&
    (name.indexOf("2025") !== -1 || name.indexOf("m3") !== -1) &&
    name.indexOf("512") !== -1 &&
    name.indexOf("lte") !== -1 &&
    name.indexOf("gray") !== -1
  ) {
    return 38520;
  } else if (
    name.indexOf("air 11") !== -1 &&
    (name.indexOf("2025") !== -1 || name.indexOf("m3") !== -1) &&
    name.indexOf("512") !== -1 &&
    name.indexOf("lte") !== -1 &&
    name.indexOf("starlight") !== -1
  ) {
    return 38521;
  } else if (
    name.indexOf("air 13") !== -1 &&
    (name.indexOf("2025") !== -1 || name.indexOf("m3") !== -1) &&
    name.indexOf("128") !== -1 &&
    name.indexOf("wi-fi") !== -1 &&
    name.indexOf("blue") !== -1
  ) {
    return 38535;
  } else if (
    name.indexOf("air 13") !== -1 &&
    (name.indexOf("2025") !== -1 || name.indexOf("m3") !== -1) &&
    name.indexOf("128") !== -1 &&
    name.indexOf("wi-fi") !== -1 &&
    name.indexOf("purple") !== -1
  ) {
    return 38536;
  } else if (
    name.indexOf("air 13") !== -1 &&
    (name.indexOf("2025") !== -1 || name.indexOf("m3") !== -1) &&
    name.indexOf("128") !== -1 &&
    name.indexOf("wi-fi") !== -1 &&
    name.indexOf("gray") !== -1
  ) {
    return 38537;
  } else if (
    name.indexOf("air 13") !== -1 &&
    (name.indexOf("2025") !== -1 || name.indexOf("m3") !== -1) &&
    name.indexOf("128") !== -1 &&
    name.indexOf("wi-fi") !== -1 &&
    name.indexOf("starlight") !== -1
  ) {
    return 38538;
  } else if (
    name.indexOf("air 13") !== -1 &&
    (name.indexOf("2025") !== -1 || name.indexOf("m3") !== -1) &&
    name.indexOf("128") !== -1 &&
    name.indexOf("lte") !== -1 &&
    name.indexOf("blue") !== -1
  ) {
    return 38567;
  } else if (
    name.indexOf("air 13") !== -1 &&
    (name.indexOf("2025") !== -1 || name.indexOf("m3") !== -1) &&
    name.indexOf("128") !== -1 &&
    name.indexOf("lte") !== -1 &&
    name.indexOf("purple") !== -1
  ) {
    return 38568;
  } else if (
    name.indexOf("air 13") !== -1 &&
    (name.indexOf("2025") !== -1 || name.indexOf("m3") !== -1) &&
    name.indexOf("128") !== -1 &&
    name.indexOf("lte") !== -1 &&
    name.indexOf("gray") !== -1
  ) {
    return 38569;
  } else if (
    name.indexOf("air 13") !== -1 &&
    (name.indexOf("2025") !== -1 || name.indexOf("m3") !== -1) &&
    name.indexOf("128") !== -1 &&
    name.indexOf("lte") !== -1 &&
    name.indexOf("starlight") !== -1
  ) {
    return 38570;
  } else if (
    name.indexOf("air 13") !== -1 &&
    (name.indexOf("2025") !== -1 || name.indexOf("m3") !== -1) &&
    name.indexOf("1tb") !== -1 &&
    name.indexOf("wi-fi") !== -1 &&
    name.indexOf("blue") !== -1
  ) {
    return 38559;
  } else if (
    name.indexOf("air 13") !== -1 &&
    (name.indexOf("2025") !== -1 || name.indexOf("m3") !== -1) &&
    name.indexOf("1tb") !== -1 &&
    name.indexOf("wi-fi") !== -1 &&
    name.indexOf("purple") !== -1
  ) {
    return 38560;
  } else if (
    name.indexOf("air 13") !== -1 &&
    (name.indexOf("2025") !== -1 || name.indexOf("m3") !== -1) &&
    name.indexOf("1tb") !== -1 &&
    name.indexOf("wi-fi") !== -1 &&
    name.indexOf("gray") !== -1
  ) {
    return 38561;
  } else if (
    name.indexOf("air 13") !== -1 &&
    (name.indexOf("2025") !== -1 || name.indexOf("m3") !== -1) &&
    name.indexOf("1tb") !== -1 &&
    name.indexOf("wi-fi") !== -1 &&
    name.indexOf("starlight") !== -1
  ) {
    return 38562;
  } else if (
    name.indexOf("air 13") !== -1 &&
    (name.indexOf("2025") !== -1 || name.indexOf("m3") !== -1) &&
    name.indexOf("1tb") !== -1 &&
    name.indexOf("lte") !== -1 &&
    name.indexOf("blue") !== -1
  ) {
    return 38591;
  } else if (
    name.indexOf("air 13") !== -1 &&
    (name.indexOf("2025") !== -1 || name.indexOf("m3") !== -1) &&
    name.indexOf("1tb") !== -1 &&
    name.indexOf("lte") !== -1 &&
    name.indexOf("purple") !== -1
  ) {
    return 38592;
  } else if (
    name.indexOf("air 13") !== -1 &&
    (name.indexOf("2025") !== -1 || name.indexOf("m3") !== -1) &&
    name.indexOf("1tb") !== -1 &&
    name.indexOf("lte") !== -1 &&
    name.indexOf("gray") !== -1
  ) {
    return 38593;
  } else if (
    name.indexOf("air 13") !== -1 &&
    (name.indexOf("2025") !== -1 || name.indexOf("m3") !== -1) &&
    name.indexOf("1tb") !== -1 &&
    name.indexOf("lte") !== -1 &&
    name.indexOf("starlight") !== -1
  ) {
    return 38594;
  } else if (
    name.indexOf("air 13") !== -1 &&
    (name.indexOf("2025") !== -1 || name.indexOf("m3") !== -1) &&
    name.indexOf("256") !== -1 &&
    name.indexOf("wi-fi") !== -1 &&
    name.indexOf("blue") !== -1
  ) {
    return 38543;
  } else if (
    name.indexOf("air 13") !== -1 &&
    (name.indexOf("2025") !== -1 || name.indexOf("m3") !== -1) &&
    name.indexOf("256") !== -1 &&
    name.indexOf("wi-fi") !== -1 &&
    name.indexOf("purple") !== -1
  ) {
    return 38544;
  } else if (
    name.indexOf("air 13") !== -1 &&
    (name.indexOf("2025") !== -1 || name.indexOf("m3") !== -1) &&
    name.indexOf("256") !== -1 &&
    name.indexOf("wi-fi") !== -1 &&
    name.indexOf("gray") !== -1
  ) {
    return 38545;
  } else if (
    name.indexOf("air 13") !== -1 &&
    (name.indexOf("2025") !== -1 || name.indexOf("m3") !== -1) &&
    name.indexOf("256") !== -1 &&
    name.indexOf("wi-fi") !== -1 &&
    name.indexOf("starlight") !== -1
  ) {
    return 38546;
  } else if (
    name.indexOf("air 13") !== -1 &&
    (name.indexOf("2025") !== -1 || name.indexOf("m3") !== -1) &&
    name.indexOf("256") !== -1 &&
    name.indexOf("lte") !== -1 &&
    name.indexOf("blue") !== -1
  ) {
    return 38575;
  } else if (
    name.indexOf("air 13") !== -1 &&
    (name.indexOf("2025") !== -1 || name.indexOf("m3") !== -1) &&
    name.indexOf("256") !== -1 &&
    name.indexOf("lte") !== -1 &&
    name.indexOf("purple") !== -1
  ) {
    return 38576;
  } else if (
    name.indexOf("air 13") !== -1 &&
    (name.indexOf("2025") !== -1 || name.indexOf("m3") !== -1) &&
    name.indexOf("256") !== -1 &&
    name.indexOf("lte") !== -1 &&
    name.indexOf("gray") !== -1
  ) {
    return 38577;
  } else if (
    name.indexOf("air 13") !== -1 &&
    (name.indexOf("2025") !== -1 || name.indexOf("m3") !== -1) &&
    name.indexOf("256") !== -1 &&
    name.indexOf("lte") !== -1 &&
    name.indexOf("starlight") !== -1
  ) {
    return 38578;
  } else if (
    name.indexOf("air 13") !== -1 &&
    (name.indexOf("2025") !== -1 || name.indexOf("m3") !== -1) &&
    name.indexOf("512") !== -1 &&
    name.indexOf("wi-fi") !== -1 &&
    name.indexOf("blue") !== -1
  ) {
    return 38551;
  } else if (
    name.indexOf("air 13") !== -1 &&
    (name.indexOf("2025") !== -1 || name.indexOf("m3") !== -1) &&
    name.indexOf("512") !== -1 &&
    name.indexOf("wi-fi") !== -1 &&
    name.indexOf("purple") !== -1
  ) {
    return 38552;
  } else if (
    name.indexOf("air 13") !== -1 &&
    (name.indexOf("2025") !== -1 || name.indexOf("m3") !== -1) &&
    name.indexOf("512") !== -1 &&
    name.indexOf("wi-fi") !== -1 &&
    name.indexOf("gray") !== -1
  ) {
    return 38553;
  } else if (
    name.indexOf("air 13") !== -1 &&
    (name.indexOf("2025") !== -1 || name.indexOf("m3") !== -1) &&
    name.indexOf("512") !== -1 &&
    name.indexOf("wi-fi") !== -1 &&
    name.indexOf("starlight") !== -1
  ) {
    return 38554;
  } else if (
    name.indexOf("air 13") !== -1 &&
    (name.indexOf("2025") !== -1 || name.indexOf("m3") !== -1) &&
    name.indexOf("512") !== -1 &&
    name.indexOf("lte") !== -1 &&
    name.indexOf("blue") !== -1
  ) {
    return 38583;
  } else if (
    name.indexOf("air 13") !== -1 &&
    (name.indexOf("2025") !== -1 || name.indexOf("m3") !== -1) &&
    name.indexOf("512") !== -1 &&
    name.indexOf("lte") !== -1 &&
    name.indexOf("purple") !== -1
  ) {
    return 38584;
  } else if (
    name.indexOf("air 13") !== -1 &&
    (name.indexOf("2025") !== -1 || name.indexOf("m3") !== -1) &&
    name.indexOf("512") !== -1 &&
    name.indexOf("lte") !== -1 &&
    name.indexOf("gray") !== -1
  ) {
    return 38585;
  } else if (
    name.indexOf("air 13") !== -1 &&
    (name.indexOf("2025") !== -1 || name.indexOf("m3") !== -1) &&
    name.indexOf("512") !== -1 &&
    name.indexOf("lte") !== -1 &&
    name.indexOf("starlight") !== -1
  ) {
    return 38586;
  } else if (
    name.indexOf("air 13") !== -1 &&
    (name.indexOf(" m2 ") !== -1 || name.indexOf("2024") !== -1) &&
    name.indexOf(" 1tb ") !== -1 &&
    name.indexOf("blue") !== -1 &&
    name.indexOf("wi-fi") !== -1
  ) {
    return 36455;
  } else if (
    name.indexOf("air 13") !== -1 &&
    (name.indexOf(" m2 ") !== -1 || name.indexOf("2024") !== -1) &&
    name.indexOf(" 1tb ") !== -1 &&
    name.indexOf("purple") !== -1 &&
    name.indexOf("wi-fi") !== -1
  ) {
    return 36456;
  } else if (
    name.indexOf("air 13") !== -1 &&
    (name.indexOf(" m2 ") !== -1 || name.indexOf("2024") !== -1) &&
    name.indexOf(" 1tb ") !== -1 &&
    name.indexOf("gray") !== -1 &&
    name.indexOf("wi-fi") !== -1
  ) {
    return 36454;
  } else if (
    name.indexOf("air 13") !== -1 &&
    (name.indexOf(" m2 ") !== -1 || name.indexOf("2024") !== -1) &&
    name.indexOf(" 1tb ") !== -1 &&
    name.indexOf("starlight") !== -1 &&
    name.indexOf("wi-fi") !== -1
  ) {
    return 36457;
  } else if (
    name.indexOf("air 13") !== -1 &&
    (name.indexOf(" m2 ") !== -1 || name.indexOf("2024") !== -1) &&
    name.indexOf(" 1tb ") !== -1 &&
    name.indexOf("gray") !== -1 &&
    name.indexOf("lte") !== -1
  ) {
    return 36232;
  } else if (
    name.indexOf("air 13") !== -1 &&
    (name.indexOf(" m2 ") !== -1 || name.indexOf("2024") !== -1) &&
    name.indexOf(" 1tb ") !== -1 &&
    name.indexOf("blue") !== -1 &&
    name.indexOf("lte") !== -1
  ) {
    return 36233;
  } else if (
    name.indexOf("air 13") !== -1 &&
    (name.indexOf(" m2 ") !== -1 || name.indexOf("2024") !== -1) &&
    name.indexOf(" 1tb ") !== -1 &&
    name.indexOf("purple") !== -1 &&
    name.indexOf("lte") !== -1
  ) {
    return 36234;
  } else if (
    name.indexOf("air 13") !== -1 &&
    (name.indexOf(" m2 ") !== -1 || name.indexOf("2024") !== -1) &&
    name.indexOf(" 1tb ") !== -1 &&
    name.indexOf("starlight") !== -1 &&
    name.indexOf("lte") !== -1
  ) {
    return 36235;
  } else if (
    name.indexOf("air 13") !== -1 &&
    (name.indexOf(" m2 ") !== -1 || name.indexOf("2024") !== -1) &&
    name.indexOf(" 128 ") !== -1 &&
    name.indexOf("blue") !== -1 &&
    name.indexOf("wi-fi") !== -1
  ) {
    return 36459;
  } else if (
    name.indexOf("air 13") !== -1 &&
    (name.indexOf(" m2 ") !== -1 || name.indexOf("2024") !== -1) &&
    name.indexOf(" 128 ") !== -1 &&
    name.indexOf("purple") !== -1 &&
    name.indexOf("wi-fi") !== -1
  ) {
    return 36460;
  } else if (
    name.indexOf("air 13") !== -1 &&
    (name.indexOf(" m2 ") !== -1 || name.indexOf("2024") !== -1) &&
    name.indexOf(" 128 ") !== -1 &&
    name.indexOf("gray") !== -1 &&
    name.indexOf("wi-fi") !== -1
  ) {
    return 36458;
  } else if (
    name.indexOf("air 13") !== -1 &&
    (name.indexOf(" m2 ") !== -1 || name.indexOf("2024") !== -1) &&
    name.indexOf(" 128 ") !== -1 &&
    name.indexOf("starlight") !== -1 &&
    name.indexOf("wi-fi") !== -1
  ) {
    return 36461;
  } else if (
    name.indexOf("air 13") !== -1 &&
    (name.indexOf(" m2 ") !== -1 || name.indexOf("2024") !== -1) &&
    name.indexOf(" 128 ") !== -1 &&
    name.indexOf("gray") !== -1 &&
    name.indexOf("lte") !== -1
  ) {
    return 38657;
  } else if (
    name.indexOf("air 13") !== -1 &&
    (name.indexOf(" m2 ") !== -1 || name.indexOf("2024") !== -1) &&
    name.indexOf(" 128 ") !== -1 &&
    name.indexOf("blue") !== -1 &&
    name.indexOf("lte") !== -1
  ) {
    return 38655;
  } else if (
    name.indexOf("air 13") !== -1 &&
    (name.indexOf(" m2 ") !== -1 || name.indexOf("2024") !== -1) &&
    name.indexOf(" 128 ") !== -1 &&
    name.indexOf("purple") !== -1 &&
    name.indexOf("lte") !== -1
  ) {
    return 38656;
  } else if (
    name.indexOf("air 13") !== -1 &&
    (name.indexOf(" m2 ") !== -1 || name.indexOf("2024") !== -1) &&
    name.indexOf(" 128 ") !== -1 &&
    name.indexOf("starlight") !== -1 &&
    name.indexOf("lte") !== -1
  ) {
    return 38658;
  } else if (
    name.indexOf("air 13") !== -1 &&
    (name.indexOf(" m2 ") !== -1 || name.indexOf("2024") !== -1) &&
    name.indexOf(" 256 ") !== -1 &&
    name.indexOf("blue") !== -1 &&
    name.indexOf("wi-fi") !== -1
  ) {
    return 36463;
  } else if (
    name.indexOf("air 13") !== -1 &&
    (name.indexOf(" m2 ") !== -1 || name.indexOf("2024") !== -1) &&
    name.indexOf(" 256 ") !== -1 &&
    name.indexOf("purple") !== -1 &&
    name.indexOf("wi-fi") !== -1
  ) {
    return 36464;
  } else if (
    name.indexOf("air 13") !== -1 &&
    (name.indexOf(" m2 ") !== -1 || name.indexOf("2024") !== -1) &&
    name.indexOf(" 256 ") !== -1 &&
    name.indexOf("gray") !== -1 &&
    name.indexOf("wi-fi") !== -1
  ) {
    return 36462;
  } else if (
    name.indexOf("air 13") !== -1 &&
    (name.indexOf(" m2 ") !== -1 || name.indexOf("2024") !== -1) &&
    name.indexOf(" 256 ") !== -1 &&
    name.indexOf("starlight") !== -1 &&
    name.indexOf("wi-fi") !== -1
  ) {
    return 36465;
  } else if (
    name.indexOf("air 13") !== -1 &&
    (name.indexOf(" m2 ") !== -1 || name.indexOf("2024") !== -1) &&
    name.indexOf(" 256 ") !== -1 &&
    name.indexOf("gray") !== -1 &&
    name.indexOf("lte") !== -1
  ) {
    return 36224;
  } else if (
    name.indexOf("air 13") !== -1 &&
    (name.indexOf(" m2 ") !== -1 || name.indexOf("2024") !== -1) &&
    name.indexOf(" 256 ") !== -1 &&
    name.indexOf("blue") !== -1 &&
    name.indexOf("lte") !== -1
  ) {
    return 38659;
  } else if (
    name.indexOf("air 13") !== -1 &&
    (name.indexOf(" m2 ") !== -1 || name.indexOf("2024") !== -1) &&
    name.indexOf(" 256 ") !== -1 &&
    name.indexOf("purple") !== -1 &&
    name.indexOf("lte") !== -1
  ) {
    return 38660;
  } else if (
    name.indexOf("air 13") !== -1 &&
    (name.indexOf(" m2 ") !== -1 || name.indexOf("2024") !== -1) &&
    name.indexOf(" 256 ") !== -1 &&
    name.indexOf("starlight") !== -1 &&
    name.indexOf("lte") !== -1
  ) {
    return 38661;
  } else if (
    name.indexOf("air 13") !== -1 &&
    (name.indexOf(" m2 ") !== -1 || name.indexOf("2024") !== -1) &&
    name.indexOf(" 512 ") !== -1 &&
    name.indexOf("blue") !== -1 &&
    name.indexOf("wi-fi") !== -1
  ) {
    return 36467;
  } else if (
    name.indexOf("air 13") !== -1 &&
    (name.indexOf(" m2 ") !== -1 || name.indexOf("2024") !== -1) &&
    name.indexOf(" 512 ") !== -1 &&
    name.indexOf("purple") !== -1 &&
    name.indexOf("wi-fi") !== -1
  ) {
    return 36468;
  } else if (
    name.indexOf("air 13") !== -1 &&
    (name.indexOf(" m2 ") !== -1 || name.indexOf("2024") !== -1) &&
    name.indexOf(" 512 ") !== -1 &&
    name.indexOf("gray") !== -1 &&
    name.indexOf("wi-fi") !== -1
  ) {
    return 36466;
  } else if (
    name.indexOf("air 13") !== -1 &&
    (name.indexOf(" m2 ") !== -1 || name.indexOf("2024") !== -1) &&
    name.indexOf(" 512 ") !== -1 &&
    name.indexOf("starlight") !== -1 &&
    name.indexOf("wi-fi") !== -1
  ) {
    return 36469;
  } else if (
    name.indexOf("air 13") !== -1 &&
    (name.indexOf(" m2 ") !== -1 || name.indexOf("2024") !== -1) &&
    name.indexOf(" 512 ") !== -1 &&
    name.indexOf("gray") !== -1 &&
    name.indexOf("lte") !== -1
  ) {
    return 36228;
  } else if (
    name.indexOf("air 13") !== -1 &&
    (name.indexOf(" m2 ") !== -1 || name.indexOf("2024") !== -1) &&
    name.indexOf(" 512 ") !== -1 &&
    name.indexOf("blue") !== -1 &&
    name.indexOf("lte") !== -1
  ) {
    return 36229;
  } else if (
    name.indexOf("air 13") !== -1 &&
    (name.indexOf(" m2 ") !== -1 || name.indexOf("2024") !== -1) &&
    name.indexOf(" 512 ") !== -1 &&
    name.indexOf("purple") !== -1 &&
    name.indexOf("lte") !== -1
  ) {
    return 36230;
  } else if (
    name.indexOf("air 13") !== -1 &&
    (name.indexOf(" m2 ") !== -1 || name.indexOf("2024") !== -1) &&
    name.indexOf(" 512 ") !== -1 &&
    name.indexOf("starlight") !== -1 &&
    name.indexOf("lte") !== -1
  ) {
    return 36231;
  } else if (
    name.indexOf("pro 11") !== -1 &&
    name.indexOf(" m4 ") !== -1 &&
    name.indexOf(" 1tb ") !== -1 &&
    name.indexOf("silver") !== -1 &&
    name.indexOf("wi-fi") !== -1
  ) {
    return 36417;
  } else if (
    name.indexOf("pro 11") !== -1 &&
    name.indexOf(" m4 ") !== -1 &&
    name.indexOf(" 1tb ") !== -1 &&
    name.indexOf("black") !== -1 &&
    name.indexOf("wi-fi") !== -1
  ) {
    return 36418;
  } else if (
    name.indexOf("pro 11") !== -1 &&
    name.indexOf(" m4 ") !== -1 &&
    name.indexOf(" 1tb ") !== -1 &&
    name.indexOf("silver") !== -1 &&
    name.indexOf("lte") !== -1
  ) {
    return 36242;
  } else if (
    name.indexOf("pro 11") !== -1 &&
    name.indexOf(" m4 ") !== -1 &&
    name.indexOf(" 1tb ") !== -1 &&
    name.indexOf("black") !== -1 &&
    name.indexOf("lte") !== -1
  ) {
    return 36240;
  } else if (
    name.indexOf("pro 11") !== -1 &&
    name.indexOf(" m4 ") !== -1 &&
    name.indexOf(" 2tb ") !== -1 &&
    name.indexOf("silver") !== -1 &&
    name.indexOf("wi-fi") !== -1
  ) {
    return 36419;
  } else if (
    name.indexOf("pro 11") !== -1 &&
    name.indexOf(" m4 ") !== -1 &&
    name.indexOf(" 2tb ") !== -1 &&
    name.indexOf("black") !== -1 &&
    name.indexOf("wi-fi") !== -1
  ) {
    return 36420;
  } else if (
    name.indexOf("pro 11") !== -1 &&
    name.indexOf(" m4 ") !== -1 &&
    name.indexOf(" 2tb ") !== -1 &&
    name.indexOf("silver") !== -1 &&
    name.indexOf("lte") !== -1
  ) {
    return 36247;
  } else if (
    name.indexOf("pro 11") !== -1 &&
    name.indexOf(" m4 ") !== -1 &&
    name.indexOf(" 2tb ") !== -1 &&
    name.indexOf("black") !== -1 &&
    name.indexOf("lte") !== -1
  ) {
    return 36246;
  } else if (
    name.indexOf("pro 11") !== -1 &&
    name.indexOf(" m4 ") !== -1 &&
    name.indexOf(" 256 ") !== -1 &&
    name.indexOf("silver") !== -1 &&
    name.indexOf("wi-fi") !== -1
  ) {
    return 36174;
  } else if (
    name.indexOf("pro 11") !== -1 &&
    name.indexOf(" m4 ") !== -1 &&
    name.indexOf(" 256 ") !== -1 &&
    name.indexOf("black") !== -1 &&
    name.indexOf("wi-fi") !== -1
  ) {
    return 38667;
  } else if (
    name.indexOf("pro 11") !== -1 &&
    name.indexOf(" m4 ") !== -1 &&
    name.indexOf(" 256 ") !== -1 &&
    name.indexOf("silver") !== -1 &&
    name.indexOf("lte") !== -1
  ) {
    return 36421;
  } else if (
    name.indexOf("pro 11") !== -1 &&
    name.indexOf(" m4 ") !== -1 &&
    name.indexOf(" 256 ") !== -1 &&
    name.indexOf("black") !== -1 &&
    name.indexOf("lte") !== -1
  ) {
    return 36422;
  } else if (
    name.indexOf("pro 11") !== -1 &&
    name.indexOf(" m4 ") !== -1 &&
    name.indexOf(" 512 ") !== -1 &&
    name.indexOf("silver") !== -1 &&
    name.indexOf("wi-fi") !== -1
  ) {
    return 36238;
  } else if (
    name.indexOf("pro 11") !== -1 &&
    name.indexOf(" m4 ") !== -1 &&
    name.indexOf(" 512 ") !== -1 &&
    name.indexOf("black") !== -1 &&
    name.indexOf("wi-fi") !== -1
  ) {
    return 36244;
  } else if (
    name.indexOf("pro 11") !== -1 &&
    name.indexOf(" m4 ") !== -1 &&
    name.indexOf(" 512 ") !== -1 &&
    name.indexOf("silver") !== -1 &&
    name.indexOf("lte") !== -1
  ) {
    return 36423;
  } else if (
    name.indexOf("pro 11") !== -1 &&
    name.indexOf(" m4 ") !== -1 &&
    name.indexOf(" 512 ") !== -1 &&
    name.indexOf("black") !== -1 &&
    name.indexOf("lte") !== -1
  ) {
    return 36424;
  } else {
    return returnIDApple2(name) || "No match";
  }
};
