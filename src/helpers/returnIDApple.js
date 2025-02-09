export const returnIDApple = (name) => {
  //  AirPods
  if (name.indexOf("airpods 2") != -1) {
    return 12529;
  } else if (
    name.indexOf("airpods pro") != -1 &&
    name.indexOf("2") != -1 &&
    (name.indexOf("type") != -1 || name.indexOf("usb") != -1)
  ) {
    return 28524;
  } else if (name.indexOf("airpods pro 2 ") != -1) {
    return 23458;
  } else if (name.indexOf("airpods pro") != -1) {
    return 13955;
  } else if (name.indexOf("airpods 3") != -1 && name.indexOf("magsafe") != -1) {
    return 27128;
  } else if (
    name.indexOf("airpods 3 lighting") != -1 ||
    name.indexOf("airpods 3 lightning") != -1 ||
    name.indexOf("airpods 3") != -1
  ) {
    return 20959;
  } else if (
    (name.indexOf("airpods 4") !== -1 &&
      (name.indexOf(" anc ") !== -1 || name.indexOf("(anc)") !== -1)) ||
    (name.indexOf("airpods 4 ") !== -1 && name.indexOf("с шумо") !== -1)
  ) {
    return 36587;
  } else if (name.indexOf("airpods 4") != -1) {
    return 36586;
  } else if (
    name.indexOf("airpods max 2024 blue") != -1 ||
    name.indexOf("airpods max 2 blue") != -1 ||
    name.indexOf("airpods max usb-c blue") != -1
  ) {
    return 36593;
  } else if (
    name.indexOf("airpods max 2024 green") != -1 ||
    name.indexOf("airpods max 2 green") != -1 ||
    name.indexOf("airpods max usb-c green") != -1
  ) {
    return 36588;
  } else if (
    name.indexOf("airpods max 2024 midnight") != -1 ||
    name.indexOf("airpods max 2 midnight") != -1 ||
    name.indexOf("airpods max midnight") != -1 ||
    name.indexOf("airpods max usb-c midnight") != -1
  ) {
    return 36595;
  } else if (
    name.indexOf("airpods max 2024 black") != -1 ||
    name.indexOf("airpods max 2 black") != -1 ||
    name.indexOf("airpods max usb-c black") != -1
  ) {
    return 36596;
  } else if (
    name.indexOf("airpods max 2024 orange") != -1 ||
    name.indexOf("airpods max 2 orange") != -1 ||
    name.indexOf("airpods max orange") != -1 ||
    name.indexOf("airpods max usb-c orange") != -1
  ) {
    return 36597;
  } else if (
    name.indexOf("airpods max 2024 pink") != -1 ||
    name.indexOf("airpods max 2 pink") != -1 ||
    name.indexOf("airpods max usb-c pink") != -1
  ) {
    return 36589;
  } else if (
    name.indexOf("airpods max 2024 purple") != -1 ||
    name.indexOf("airpods max 2 purple") != -1 ||
    name.indexOf("airpods max usb-c purple") != -1
  ) {
    return 36594;
  } else if (
    name.indexOf("airpods max 2024 silver") != -1 ||
    name.indexOf("airpods max 2 silver") != -1 ||
    name.indexOf("airpods max usb-c silver") != -1
  ) {
    return 36590;
  } else if (
    name.indexOf("airpods max 2024 sky blue") != -1 ||
    name.indexOf("airpods max 2 sky blue") != -1 ||
    name.indexOf("airpods max usb-c sky blue") != -1
  ) {
    return 36591;
  } else if (
    name.indexOf("airpods max 2024 starlight") != -1 ||
    name.indexOf("airpods max 2 starlight") != -1 ||
    name.indexOf("airpods max starlight") != -1 ||
    name.indexOf("airpods max usb-c starlight") != -1
  ) {
    return 36596;
  } else if (
    name.indexOf("airpods max 2024 white") != -1 ||
    name.indexOf("airpods max 2 white") != -1 ||
    name.indexOf("airpods max usb-c white") != -1
  ) {
    return 36597;
  } else if (
    name.indexOf("airpods max 2024 space gray") != -1 ||
    name.indexOf("airpods max 2 space gray") != -1 ||
    name.indexOf("airpods max usb-c space gray") != -1
  ) {
    return 36592;
  } else if (
    name.indexOf("airpods max 2024 gray") != -1 ||
    name.indexOf("airpods max 2 gray") != -1
  ) {
    return 36593;
  } else if (
    name.indexOf("airpods max green") != -1 ||
    name.indexOf("airpods max green") != -1
  ) {
    return 18979;
  } else if (
    name.indexOf("airpods max pink") != -1 ||
    name.indexOf("airpods max pink") != -1
  ) {
    return 18981;
  } else if (
    name.indexOf("airpods max silver") != -1 ||
    name.indexOf("airpods max silver") != -1 ||
    name.indexOf("airpods max white") != -1
  ) {
    return 18978;
  } else if (
    name.indexOf("airpods max blue") != -1 ||
    name.indexOf("airpods max blue") != -1 ||
    name.indexOf("airpods max sky blue") != -1
  ) {
    return 18980;
  } else if (
    name.indexOf("airpods max gray") != -1 ||
    name.indexOf("airpods max gray") != -1 ||
    name.indexOf("airpods max black") != -1 ||
    name.indexOf("airpods max space gray") != -1
  ) {
    return 18977;

    // apple tv
  } else if (
    name.indexOf("apple tv") !== -1 &&
    name.indexOf("32") !== -1 &&
    name.indexOf("black") !== -1
  ) {
    return 20151;
  } else if (
    name.indexOf("apple tv") !== -1 &&
    name.indexOf("64") !== -1 &&
    name.indexOf("black") !== -1
  ) {
    return 20152;

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
    name.indexOf("mini") == -1 &&
    name.indexOf("gray") !== -1
  ) {
    return 18955;
  } else if (
    name.indexOf("home") !== -1 &&
    name.indexOf("pod") !== -1 &&
    name.indexOf("mini") == -1 &&
    name.indexOf("white") !== -1
  ) {
    return 18957;

    // aw se
  } else if (
    name.indexOf("se") != -1 &&
    name.indexOf("2") != -1 &&
    name.indexOf("40") != -1 &&
    (name.indexOf("midnight") != -1 || name.indexOf("black") != -1)
  ) {
    return 34313;
  } else if (
    name.indexOf("se") != -1 &&
    name.indexOf("2") != -1 &&
    name.indexOf("40") != -1 &&
    name.indexOf("silver") != -1
  ) {
    return 34314;
  } else if (
    name.indexOf("se") != -1 &&
    name.indexOf("2") != -1 &&
    name.indexOf("40") != -1 &&
    (name.indexOf("starlight") != -1 || name.indexOf("white") != -1)
  ) {
    return 34315;
  } else if (
    name.indexOf("se") != -1 &&
    name.indexOf("2") != -1 &&
    name.indexOf("44") != -1 &&
    (name.indexOf("midnight") != -1 || name.indexOf("black") != -1)
  ) {
    return 34316;
  } else if (
    name.indexOf("se") != -1 &&
    name.indexOf("2") != -1 &&
    name.indexOf("44") != -1 &&
    name.indexOf("silver") != -1
  ) {
    return 34317;
  } else if (
    name.indexOf("se") != -1 &&
    name.indexOf("2") != -1 &&
    name.indexOf("44") != -1 &&
    (name.indexOf("starlight") != -1 || name.indexOf("white") != -1)
  ) {
    return 34318;

    // aw s9
  } else if (name.indexOf("s8 41 silver") != -1) {
    return 23459;
  } else if (name.indexOf("s8 41 gold") != -1) {
    return 23461;
  } else if (name.indexOf("s8 41 graphite") != -1) {
    return 23519;
  } else if (
    name.indexOf("s8 41 midnight") != -1 ||
    name.indexOf("s8 41 black") != -1
  ) {
    return 23518;
  } else if (name.indexOf("s8 41 red") != -1) {
    return 23547;
  } else if (
    name.indexOf("s8 41 starlight") != -1 ||
    name.indexOf("s8 41 white") != -1
  ) {
    return 23517;
  } else if (name.indexOf("s8 45 gold") != -1) {
    return 23520;
  } else if (
    name.indexOf("s8 45 midnight") != -1 ||
    name.indexOf("s8 45 black") != -1
  ) {
    return 23522;
  } else if (name.indexOf("s8 45 red") != -1) {
    return 23548;
  } else if (name.indexOf("s8 45 silver") != -1) {
    return 23523;
  } else if (
    name.indexOf("s8 45 starlight") != -1 ||
    name.indexOf("s8 45 white") != -1
  ) {
    return 23524;
  } else if (
    name.indexOf("s9 45 silver") != -1 &&
    (name.indexOf("steel") != -1 ||
    name.indexOf("steal") != -1)
  ) {
    return 28297;
  } else if (
    name.indexOf("s9 41 silver") != -1 &&
    (name.indexOf("steel") != -1 ||
    name.indexOf("steal") != -1)
  ) {
    return 28296;
  } else if (
    name.indexOf("s9 41 graphite") != -1 &&
    (name.indexOf("steel") != -1 ||
    name.indexOf("steal") != -1)
  ) {
    return 28294;
  } else if (
    name.indexOf("s9 41 gold") != -1 &&
    (name.indexOf("steel") != -1 || name.indexOf("steal") != -1)
  ) {
    return 28292;
  } else if (
    name.indexOf("s9 45 graphite") != -1 &&
    (name.indexOf("steel") != -1 || name.indexOf("steal") != -1)
  ) {
    return 28295;
  } else if (name.indexOf("s9 45 gold") != -1 && (name.indexOf("steel") != -1 ||
  name.indexOf("steal") != -1)) {
    return 28293;
  } else if (
    name.indexOf("s9 41") != -1 &&
    (name.indexOf("strlight") != -1 || name.indexOf("white") != -1) &&
    (name.indexOf("steel") == -1 || name.indexOf("steal") == -1)
  ) {
    return 28290;
  } else if (
    name.indexOf("s9 41") != -1 &&
    name.indexOf("silver") != -1 &&
    (name.indexOf("steel") == -1 || name.indexOf("steal") == -1)
  ) {
    return 28288;
  } else if (
    name.indexOf("s9 41") != -1 &&
    name.indexOf("red") != -1 &&
    (name.indexOf("steel") == -1 || name.indexOf("steal") == -1)
  ) {
    return 28286;
  } else if (
    name.indexOf("s9 41") != -1 &&
    name.indexOf("midnight") != -1 &&
    (name.indexOf("steel") == -1 || name.indexOf("steal") == -1)
  ) {
    return 28284;
  } else if (
    name.indexOf("s9 41") != -1 &&
    name.indexOf("pink") != -1 &&
    (name.indexOf("steel") == -1 || name.indexOf("steal") == -1)
  ) {
    return 28282;
  } else if (
    name.indexOf("s9 45") != -1 &&
    name.indexOf("silver") != -1 &&
    (name.indexOf("steel") == -1 || name.indexOf("steal") == -1)
  ) {
    return 28289;
  } else if (
    name.indexOf("s9 45") != -1 &&
    (name.indexOf("strlight") != -1 || name.indexOf("white") != -1) &&
    (name.indexOf("steel") == -1 || name.indexOf("steal") == -1)
  ) {
    return 28291;
  } else if (
    name.indexOf("s9 45") != -1 &&
    name.indexOf("red") != -1 &&
    (name.indexOf("steel") == -1 || name.indexOf("steal") == -1)
  ) {
    return 28287;
  } else if (
    name.indexOf("s9 45") != -1 &&
    name.indexOf("midnight") != -1 &&
    (name.indexOf("steel") == -1 || name.indexOf("steal") == -1)
  ) {
    return 28285;
  } else if (
    name.indexOf("s9 45") != -1 &&
    name.indexOf("pink") != -1 &&
    (name.indexOf("steel") == -1 || name.indexOf("steal") == -1)
  ) {
    return 28283;
  } else if (
    name.indexOf("s10") != -1 &&
    name.indexOf("42") != -1 &&
    name.indexOf("gold") != -1 &&
    name.indexOf("milanese") != -1
  ) {
    return 37722;
  } else if (
    name.indexOf("s10") != -1 &&
    name.indexOf("42") != -1 &&
    name.indexOf("natural") != -1 &&
    name.indexOf("milanese") != -1
  ) {
    return 37723;
  } else if (
    name.indexOf("s10") != -1 &&
    name.indexOf("42") != -1 &&
    name.indexOf("steel") != -1 &&
    name.indexOf("milanese") != -1
  ) {
    return 37724;
  } else if (
    name.indexOf("s10") != -1 &&
    name.indexOf("46") != -1 &&
    name.indexOf("gold") != -1 &&
    name.indexOf("milanese") != -1
  ) {
    return 37728;
  } else if (
    name.indexOf("s10") != -1 &&
    name.indexOf("46") != -1 &&
    name.indexOf("natural") != -1 &&
    name.indexOf("milanese") != -1
  ) {
    return 37729;
  } else if (
    name.indexOf("s10") != -1 &&
    name.indexOf("46") != -1 &&
    name.indexOf("steel") != -1 &&
    name.indexOf("milanese") != -1
  ) {
    return 37730;
  } else if (
    name.indexOf("s10") != -1 &&
    name.indexOf("42") != -1 &&
    name.indexOf("black") != -1 &&
    name.indexOf("milanese") == -1
  ) {
    return 36603;
  } else if (
    name.indexOf("s10") != -1 &&
    name.indexOf("42") != -1 &&
    name.indexOf("natural") != -1 &&
    name.indexOf("milanese") == -1
  ) {
    return 36605;
  } else if (
    name.indexOf("s10") != -1 &&
    name.indexOf("42") != -1 &&
    name.indexOf("rose") != -1 &&
    name.indexOf("milanese") == -1
  ) {
    return 36601;
  } else if (
    name.indexOf("s10") != -1 &&
    name.indexOf("42") != -1 &&
    name.indexOf("gold") != -1 &&
    name.indexOf("milanese") == -1
  ) {
    return 36609;
  } else if (
    name.indexOf("s10") != -1 &&
    name.indexOf("42") != -1 &&
    name.indexOf("silver") != -1 &&
    name.indexOf("milanese") == -1
  ) {
    return 36598;
  } else if (
    name.indexOf("s10") != -1 &&
    name.indexOf("42") != -1 &&
    name.indexOf("slate") != -1 &&
    name.indexOf("milanese") == -1
  ) {
    return 36803;
  } else if (
    name.indexOf("s10") != -1 &&
    name.indexOf("46") != -1 &&
    name.indexOf("black") != -1 &&
    name.indexOf("milanese") == -1
  ) {
    return 36604;
  } else if (
    name.indexOf("s10") != -1 &&
    name.indexOf("46") != -1 &&
    name.indexOf("natural") != -1 &&
    name.indexOf("milanese") == -1
  ) {
    return 36606;
  } else if (
    name.indexOf("s10") != -1 &&
    name.indexOf("46") != -1 &&
    name.indexOf("rose") != -1 &&
    name.indexOf("milanese") == -1
  ) {
    return 36602;
  } else if (
    name.indexOf("s10") != -1 &&
    name.indexOf("46") != -1 &&
    name.indexOf("gold") != -1 &&
    name.indexOf("milanese") == -1
  ) {
    return 36608;
  } else if (
    name.indexOf("s10") != -1 &&
    name.indexOf("46") != -1 &&
    name.indexOf("silver") != -1 &&
    name.indexOf("milanese") == -1
  ) {
    return 36600;
  } else if (
    name.indexOf("s10") != -1 &&
    name.indexOf("46") != -1 &&
    name.indexOf("slate") != -1 &&
    name.indexOf("milanese") == -1
  ) {
    return 36610;

    // aw ultra
  } else if (name.indexOf("ul black gray") != -1) {
    return 23536;
  } else if (name.indexOf("ul blue gray") != -1) {
    return 23535;
  } else if (name.indexOf("ul green") != -1) {
    return 23530;
  } else if (name.indexOf("ul midnight") != -1) {
    return 23533;
  } else if (name.indexOf("ul orange") != -1) {
    return 23537;
  } else if (name.indexOf("ul starlight") != -1) {
    return 23531;
  } else if (name.indexOf("ul white") != -1) {
    return 23532;
  } else if (name.indexOf("ul yellow") != -1) {
    return 23463;
  } else if (
    (name.indexOf("ultra 2") !== -1 || name.indexOf("ul 2") !== -1) &&
    name.indexOf("blue") !== -1 &&
    (name.indexOf("ocean band") !== -1 || name.indexOf("ob") !== -1) &&
    name.indexOf("2024") == -1
  ) {
    return 28306;
  } else if (
    (name.indexOf("ultra 2") !== -1 || name.indexOf("ul 2") !== -1) &&
    name.indexOf("white") !== -1 &&
    (name.indexOf("ocean band") !== -1 || name.indexOf("ob") !== -1) &&
    name.indexOf("2024") == -1
  ) {
    return 28305;
  } else if (
    (name.indexOf("ultra 2") !== -1 || name.indexOf("ul 2") !== -1) &&
    name.indexOf("orange") !== -1 &&
    (name.indexOf("ocean band") !== -1 || name.indexOf("ob") !== -1) &&
    name.indexOf("2024") == -1
  ) {
    return 28304;
  } else if (
    (name.indexOf("ultra 2") !== -1 || name.indexOf("ul 2") !== -1) &&
    (name.indexOf("orange") !== -1 || name.indexOf("beige") !== -1) &&
    (name.indexOf("trail loop") !== -1 || name.indexOf("tl") !== -1) &&
    name.indexOf("2024") == -1
  ) {
    return 28303;
  } else if (
    (name.indexOf("ultra 2") !== -1 || name.indexOf("ul 2") !== -1) &&
    name.indexOf("black") !== -1 &&
    (name.indexOf("trail loop") !== -1 || name.indexOf("tl") !== -1) &&
    name.indexOf("2024") == -1
  ) {
    return 28302;
  } else if (
    (name.indexOf("ultra 2") !== -1 || name.indexOf("ul 2") !== -1) &&
    (name.indexOf("gray") !== -1 || name.indexOf("green") !== -1) &&
    (name.indexOf("trail loop") !== -1 || name.indexOf("tl") !== -1) &&
    name.indexOf("2024") == -1
  ) {
    return 28301;
  } else if (
    (name.indexOf("ultra 2") !== -1 || name.indexOf("ul 2") !== -1) &&
    name.indexOf("olive") !== -1 &&
    (name.indexOf("alpine loop") !== -1 || name.indexOf("al") !== -1) &&
    name.indexOf("2024") == -1
  ) {
    return 28300;
  } else if (
    (name.indexOf("ultra 2") !== -1 || name.indexOf("ul 2") !== -1) &&
    name.indexOf("indigo") !== -1 &&
    (name.indexOf("alpine loop") !== -1 || name.indexOf("al") !== -1) &&
    name.indexOf("2024") == -1
  ) {
    return 28299;
  } else if (
    (name.indexOf("ultra 2") !== -1 || name.indexOf("ul 2") !== -1) &&
    name.indexOf("blue") !== -1 &&
    (name.indexOf("alpine loop") !== -1 || name.indexOf("al") !== -1) &&
    name.indexOf("2024") == -1
  ) {
    return 28298;
  } else if (
    (name.indexOf("ultra 2") !== -1 || name.indexOf("ul 2") !== -1) &&
    name.indexOf("tan") !== -1 &&
    name.indexOf("natural") !== -1 &&
    (name.indexOf("alpine loop") !== -1 || name.indexOf("al") !== -1) &&
    name.indexOf("2024") == -1
  ) {
    return 36966;
  } else if (
    (name.indexOf("ultra 2") !== -1 || name.indexOf("ul 2") !== -1) &&
    name.indexOf("black") !== -1 &&
    name.indexOf("black") !== -1 &&
    (name.indexOf("ocean") !== -1 || name.indexOf("ob") !== -1) &&
    name.indexOf("2024") == -1
  ) {
    return 36965;
  } else if (
    (name.indexOf("ultra 2") !== -1 || name.indexOf("ul 2") !== -1) &&
    name.indexOf("black") !== -1 &&
    name.indexOf("black") !== -1 &&
    (name.indexOf("trail loop") !== -1 || name.indexOf("tl") !== -1) &&
    name.indexOf("2024") == -1
  ) {
    return 36963;
  } else if (
    (name.indexOf("ultra 2") !== -1 || name.indexOf("ul 2") !== -1) &&
    name.indexOf("blue") !== -1 &&
    name.indexOf("black") !== -1 &&
    (name.indexOf("trail loop") !== -1 || name.indexOf("tl") !== -1) &&
    name.indexOf("2024") == -1
  ) {
    return 36964;
  } else if (
    (name.indexOf("ultra 2") !== -1 || name.indexOf("ul 2") !== -1) &&
    name.indexOf("navy") !== -1 &&
    (name.indexOf("natural titanium") !== -1 ||
      name.indexOf("natural case") !== -1) &&
    (name.indexOf("alpine loop") !== -1 || name.indexOf("al") !== -1) &&
    name.indexOf("2024") != -1
  ) {
    return 37701;
  } else if (
    (name.indexOf("ultra 2") !== -1 || name.indexOf("ul 2") !== -1) &&
    name.indexOf("green") !== -1 &&
    (name.indexOf("natural titanium") !== -1 ||
      name.indexOf("natural case") !== -1) &&
    (name.indexOf("alpine loop") !== -1 || name.indexOf("al") !== -1) &&
    name.indexOf("2024") != -1
  ) {
    return 37703;
  } else if (
    (name.indexOf("ultra 2") !== -1 || name.indexOf("ul 2") !== -1) &&
    name.indexOf("green") !== -1 &&
    (name.indexOf("black titanium") !== -1 ||
      name.indexOf("black case") !== -1) &&
    (name.indexOf("alpine loop") !== -1 || name.indexOf("al") !== -1) &&
    name.indexOf("2024") != -1
  ) {
    return 37707;
  } else if (
    (name.indexOf("ultra 2") !== -1 || name.indexOf("ul 2") !== -1) &&
    name.indexOf("navy") !== -1 &&
    (name.indexOf("black titanium") !== -1 ||
      name.indexOf("black case") !== -1) &&
    (name.indexOf("alpine loop") !== -1 || name.indexOf("al") !== -1) &&
    name.indexOf("2024") != -1
  ) {
    return 37708;
  } else if (
    (name.indexOf("ultra 2") !== -1 || name.indexOf("ul 2") !== -1) &&
    name.indexOf("tan") !== -1 &&
    (name.indexOf("black titanium") !== -1 ||
      name.indexOf("black case") !== -1) &&
    (name.indexOf("alpine loop") !== -1 || name.indexOf("al") !== -1) &&
    name.indexOf("2024") != -1
  ) {
    return 37709;
  } else if (
    (name.indexOf("ultra 2") !== -1 || name.indexOf("ul 2") !== -1) &&
    name.indexOf("blue") !== -1 &&
    (name.indexOf("natural titanium") !== -1 ||
      name.indexOf("natural case") !== -1) &&
    (name.indexOf("trail loop") !== -1 || name.indexOf("tl") !== -1) &&
    name.indexOf("2024") != -1
  ) {
    return 37711;
  } else if (
    (name.indexOf("ultra 2") !== -1 || name.indexOf("ul 2") !== -1) &&
    name.indexOf("navy") !== -1 &&
    (name.indexOf("natural titanium") !== -1 ||
      name.indexOf("natural case") !== -1) &&
    (name.indexOf("ocean band") !== -1 || name.indexOf("ob") !== -1) &&
    name.indexOf("2024") != -1
  ) {
    return 37713;
  } else if (
    (name.indexOf("ultra 2") !== -1 || name.indexOf("ul 2") !== -1) &&
    name.indexOf("black") !== -1 &&
    (name.indexOf("black titanium") !== -1 ||
      name.indexOf("black case") !== -1) &&
    (name.indexOf("milanese loop") !== -1 || name.indexOf("ml") !== -1) &&
    name.indexOf("2024") != -1
  ) {
    return 37716;
  } else if (
    (name.indexOf("ultra 2") !== -1 || name.indexOf("ul 2") !== -1) &&
    name.indexOf("natural") !== -1 &&
    (name.indexOf("natural titanium") !== -1 ||
      name.indexOf("natural case") !== -1) &&
    (name.indexOf("milanese loop") !== -1 || name.indexOf("ml") !== -1) &&
    name.indexOf("2024") != -1
  ) {
    return 37717;

    // pencil
  } else if (
    name.indexOf("pencil type") != -1 ||
    name.indexOf("pencil usb") != -1
  ) {
    return 36571;
  } else if (name.indexOf("pencil 1") != -1) {
    return 2072;
  } else if (name.indexOf("pencil 2") != -1) {
    return 11873;
  } else if (name.indexOf("pencil pro") != -1) {
    return 36178;
  } else if (
    name.indexOf("magic mouse 2") != -1 &&
    name.indexOf("gray") != -1
  ) {
    return 13769;
  } else if (
    name.indexOf("magic mouse 2") != -1 &&
    name.indexOf("white") != -1
  ) {
    return 2071;
  } else if (
    name.indexOf("magic keyboard") != -1 &&
    name.indexOf("ipad pro 11") != -1 &&
    name.indexOf("2020") != -1 &&
    name.indexOf("black") != -1
  ) {
    return 16160;
  } else if (
    name.indexOf("magic keyboard") != -1 &&
    name.indexOf("ipad pro 12.9") != -1 &&
    name.indexOf("2020") != -1 &&
    name.indexOf("black") != -1
  ) {
    return 16161;
  } else if (
    name.indexOf("magic keyboard") != -1 &&
    name.indexOf("numeric") != -1 &&
    name.indexOf("ru") != -1 &&
    name.indexOf("silver") != -1
  ) {
    return 18663;
  } else if (
    name.indexOf("magic keyboard") != -1 &&
    name.indexOf("numeric") != -1 &&
    name.indexOf("ru") != -1 &&
    name.indexOf("gray") != -1
  ) {
    return 18664;
  } else if (
    name.indexOf("smart keyboard") != -1 &&
    (name.indexOf("air 10.5") != -1 ||
      name.indexOf("pro 10.5") != -1 ||
      name.indexOf("ipad 10.2") != -1) &&
    name.indexOf("black") != -1
  ) {
    return 13909;

    // iPad mini
  } else if (
    name.indexOf("ipad mini") !== -1 &&
    name.indexOf(" 128 ") !== -1 &&
    name.indexOf("blue") !== -1 &&
    name.indexOf("wi-fi") !== -1 &&
    (name.indexOf("2024") != -1 || name.indexOf(" 7 ") != -1)
  ) {
    return 37307;
  } else if (
    name.indexOf("ipad mini") !== -1 &&
    name.indexOf(" 256 ") !== -1 &&
    name.indexOf("blue") !== -1 &&
    name.indexOf("wi-fi") !== -1 &&
    (name.indexOf("2024") != -1 || name.indexOf(" 7 ") != -1)
  ) {
    return 37310;
  } else if (
    name.indexOf("ipad mini") !== -1 &&
    name.indexOf(" 512 ") !== -1 &&
    name.indexOf("blue") !== -1 &&
    name.indexOf("wi-fi") !== -1 &&
    (name.indexOf("2024") != -1 || name.indexOf(" 7 ") != -1)
  ) {
    return 37311;
  } else if (
    name.indexOf("mini") != -1 &&
    (name.indexOf("2024") != -1 || name.indexOf(" 7 ") != -1) &&
    name.indexOf("128") != -1 &&
    name.indexOf("purple") != -1
  ) {
    return 37320;
  } else if (
    name.indexOf("mini") != -1 &&
    (name.indexOf("2024") != -1 || name.indexOf(" 7 ") != -1) &&
    name.indexOf("128") != -1 &&
    name.indexOf("gray") != -1
  ) {
    return 37317;
  } else if (
    name.indexOf("mini") != -1 &&
    (name.indexOf("2024") != -1 || name.indexOf(" 7 ") != -1) &&
    name.indexOf("256") != -1 &&
    name.indexOf("purple") != -1
  ) {
    return 37318;
  } else if (
    name.indexOf("mini") != -1 &&
    (name.indexOf("2024") != -1 || name.indexOf(" 7 ") != -1) &&
    name.indexOf("256") != -1 &&
    name.indexOf("starlight") != -1
  ) {
    return 37321;
  } else if (
    name.indexOf("mini") != -1 &&
    (name.indexOf("2024") != -1 || name.indexOf(" 7 ") != -1) &&
    name.indexOf("512") != -1 &&
    name.indexOf("purple") != -1
  ) {
    return 37319;
  } else if (
    name.indexOf("mini") != -1 &&
    (name.indexOf("2024") != -1 || name.indexOf(" 7 ") != -1) &&
    name.indexOf("512") != -1 &&
    name.indexOf("starlight") != -1
  ) {
    return 37322;
  } else if (
    name.indexOf("mini 6") != -1 &&
    name.indexOf("wi-fi") != -1 &&
    name.indexOf("256") != -1 &&
    name.indexOf("pink") != -1
  ) {
    return 37308;

    // ipad 9
  } else if (
    name.indexOf("ipad 9") != -1 &&
    name.indexOf(" 64 ") != -1 &&
    name.indexOf("silver") != -1 &&
    name.indexOf("wi-fi") != -1
  ) {
    return 20659;
  } else if (
    name.indexOf("ipad 9") != -1 &&
    name.indexOf(" 64 ") != -1 &&
    (name.indexOf("grey") != -1 || name.indexOf("gray") != -1) &&
    name.indexOf("wi-fi") != -1
  ) {
    return 20658;
  } else if (
    name.indexOf("ipad 9") != -1 &&
    name.indexOf(" 256 ") != -1 &&
    name.indexOf("silver") != -1 &&
    name.indexOf("wi-fi") != -1
  ) {
    return 20660;
  } else if (
    name.indexOf("ipad 9") != -1 &&
    name.indexOf(" 256 ") != -1 &&
    (name.indexOf("grey") != -1 || name.indexOf("gray") != -1) &&
    name.indexOf("wi-fi") != -1
  ) {
    return 20661;
  } else if (
    name.indexOf("ipad 9") != -1 &&
    name.indexOf(" 64 ") != -1 &&
    name.indexOf("silver") != -1 &&
    name.indexOf("lte") != -1
  ) {
    return 20664;
  } else if (
    name.indexOf("ipad 9") != -1 &&
    name.indexOf(" 64 ") != -1 &&
    (name.indexOf("grey") != -1 || name.indexOf("gray") != -1) &&
    name.indexOf("lte") != -1
  ) {
    return 20662;
  } else if (
    name.indexOf("ipad 9") != -1 &&
    name.indexOf(" 256 ") != -1 &&
    name.indexOf("silver") != -1 &&
    name.indexOf("lte") != -1
  ) {
    return 20665;
  } else if (
    name.indexOf("ipad 9") != -1 &&
    name.indexOf(" 256 ") != -1 &&
    (name.indexOf("grey") != -1 || name.indexOf("gray") != -1) &&
    name.indexOf("lte") != -1
  ) {
    return 20666;
  } else if (
    name.indexOf("ipad 10") != -1 &&
    name.indexOf(" 256 ") != -1 &&
    name.indexOf("silver") != -1 &&
    name.indexOf("wi-fi") != -1
  ) {
    return 24837;
  } else if (
    name.indexOf("ipad 10") != -1 &&
    name.indexOf(" 256 ") != -1 &&
    name.indexOf("blue") != -1 &&
    name.indexOf("wi-fi") != -1
  ) {
    return 24839;
  } else if (
    name.indexOf("ipad 10") != -1 &&
    name.indexOf(" 256 ") != -1 &&
    name.indexOf("pink") != -1 &&
    name.indexOf("wi-fi") != -1
  ) {
    return 24843;
  } else if (
    name.indexOf("ipad 10") != -1 &&
    name.indexOf(" 256 ") != -1 &&
    name.indexOf("yellow") != -1 &&
    name.indexOf("wi-fi") != -1
  ) {
    return 24847;
  } else if (
    name.indexOf("ipad 10") != -1 &&
    name.indexOf(" 256 ") != -1 &&
    name.indexOf("blue") != -1 &&
    name.indexOf("lte") != -1
  ) {
    return 24840;
  } else if (
    name.indexOf("ipad 10") != -1 &&
    name.indexOf(" 256 ") != -1 &&
    name.indexOf("pink") != -1 &&
    name.indexOf("lte") != -1
  ) {
    return 24844;
  } else if (
    name.indexOf("ipad 10") != -1 &&
    name.indexOf(" 256 ") != -1 &&
    name.indexOf("silver") != -1 &&
    name.indexOf("lte") != -1
  ) {
    return 24838;
  } else if (
    name.indexOf("ipad 10") != -1 &&
    name.indexOf(" 256 ") != -1 &&
    name.indexOf("yellow") != -1 &&
    name.indexOf("lte") != -1
  ) {
    return 24848;
  } else if (
    name.indexOf("ipad 10") != -1 &&
    name.indexOf(" 64 ") != -1 &&
    name.indexOf("silver") != -1 &&
    name.indexOf("wi-fi") != -1
  ) {
    return 24836;
  } else if (
    name.indexOf("ipad 10") != -1 &&
    name.indexOf(" 64 ") != -1 &&
    name.indexOf("blue") != -1 &&
    name.indexOf("wi-fi") != -1
  ) {
    return 24841;
  } else if (
    name.indexOf("ipad 10") != -1 &&
    name.indexOf(" 64 ") != -1 &&
    name.indexOf("pink") != -1 &&
    name.indexOf("wi-fi") != -1
  ) {
    return 24845;
  } else if (
    name.indexOf("ipad 10") != -1 &&
    name.indexOf(" 64 ") != -1 &&
    name.indexOf("yellow") != -1 &&
    name.indexOf("wi-fi") != -1
  ) {
    return 24849;
  } else if (
    name.indexOf("ipad 10") != -1 &&
    name.indexOf(" 64 ") != -1 &&
    name.indexOf("blue") != -1 &&
    name.indexOf("lte") != -1
  ) {
    return 24842;
  } else if (
    name.indexOf("ipad 10") != -1 &&
    name.indexOf(" 64 ") != -1 &&
    name.indexOf("pink") != -1 &&
    name.indexOf("lte") != -1
  ) {
    return 24846;
  } else if (
    name.indexOf("ipad 10") != -1 &&
    name.indexOf(" 64 ") != -1 &&
    name.indexOf("silver") != -1 &&
    name.indexOf("lte") != -1
  ) {
    return 24835;
  } else if (
    name.indexOf("ipad 10") != -1 &&
    name.indexOf(" 64 ") != -1 &&
    name.indexOf("yellow") != -1 &&
    name.indexOf("lte") != -1
  ) {
    return 24850;
  } else if (
    name.indexOf("pro 11") != -1 &&
    name.indexOf(" m2 ") != -1 &&
    name.indexOf(" 1tb ") != -1 &&
    name.indexOf("silver") != -1 &&
    name.indexOf("wi-fi") != -1
  ) {
    return 24854;
  } else if (
    name.indexOf("pro 11") != -1 &&
    name.indexOf(" m2 ") != -1 &&
    name.indexOf(" 1tb ") != -1 &&
    name.indexOf("gray") != -1 &&
    name.indexOf("wi-fi") != -1
  ) {
    return 24861;
  } else if (
    name.indexOf("pro 11") != -1 &&
    name.indexOf(" m2 ") != -1 &&
    name.indexOf(" 1tb ") != -1 &&
    name.indexOf("gray") != -1 &&
    name.indexOf("lte") != -1
  ) {
    return 24862;
  } else if (
    name.indexOf("pro 11") != -1 &&
    name.indexOf(" m2 ") != -1 &&
    name.indexOf(" 1tb ") != -1 &&
    name.indexOf("silver") != -1 &&
    name.indexOf("lte") != -1
  ) {
    return 24856;
  } else if (
    name.indexOf("pro 11") != -1 &&
    name.indexOf(" m2 ") != -1 &&
    name.indexOf(" 2tb ") != -1 &&
    name.indexOf("silver") != -1 &&
    name.indexOf("wi-fi") != -1
  ) {
    return 24855;
  } else if (
    name.indexOf("pro 11") != -1 &&
    name.indexOf(" m2 ") != -1 &&
    name.indexOf(" 2tb ") != -1 &&
    name.indexOf("gray") != -1 &&
    name.indexOf("wi-fi") != -1
  ) {
    return 24863;
  } else if (
    name.indexOf("pro 11") != -1 &&
    name.indexOf(" m2 ") != -1 &&
    name.indexOf(" 2tb ") != -1 &&
    name.indexOf("silver") != -1 &&
    name.indexOf("lte") != -1
  ) {
    return 24857;
  } else if (
    name.indexOf("pro 11") != -1 &&
    name.indexOf(" m2 ") != -1 &&
    name.indexOf(" 2tb ") != -1 &&
    name.indexOf("gray") != -1 &&
    name.indexOf("lte") != -1
  ) {
    return 24864;
  } else if (
    name.indexOf("pro 11") != -1 &&
    name.indexOf(" m2 ") != -1 &&
    name.indexOf(" 128 ") != -1 &&
    name.indexOf("silver") != -1 &&
    name.indexOf("wi-fi") != -1
  ) {
    return 24851;
  } else if (
    name.indexOf("pro 11") != -1 &&
    name.indexOf(" m2 ") != -1 &&
    name.indexOf(" 128 ") != -1 &&
    name.indexOf("gray") != -1 &&
    name.indexOf("wi-fi") != -1
  ) {
    return 24865;
  } else if (
    name.indexOf("pro 11") != -1 &&
    name.indexOf(" m2 ") != -1 &&
    name.indexOf(" 128 ") != -1 &&
    name.indexOf("silver") != -1 &&
    name.indexOf("lte") != -1
  ) {
    return 24858;
  } else if (
    name.indexOf("pro 11") != -1 &&
    name.indexOf(" m2 ") != -1 &&
    name.indexOf(" 128 ") != -1 &&
    name.indexOf("gray") != -1 &&
    name.indexOf("lte") != -1
  ) {
    return 24866;
  } else if (
    name.indexOf("pro 11") != -1 &&
    name.indexOf(" m2 ") != -1 &&
    name.indexOf(" 256 ") != -1 &&
    name.indexOf("silver") != -1 &&
    name.indexOf("wi-fi") != -1
  ) {
    return 24852;
  } else if (
    name.indexOf("pro 11") != -1 &&
    name.indexOf(" m2 ") != -1 &&
    name.indexOf(" 256 ") != -1 &&
    name.indexOf("gray") != -1 &&
    name.indexOf("wi-fi") != -1
  ) {
    return 24867;
  } else if (
    name.indexOf("pro 11") != -1 &&
    name.indexOf(" m2 ") != -1 &&
    name.indexOf(" 256 ") != -1 &&
    name.indexOf("silver") != -1 &&
    name.indexOf("lte") != -1
  ) {
    return 24859;
  } else if (
    name.indexOf("pro 11") != -1 &&
    name.indexOf(" m2 ") != -1 &&
    name.indexOf(" 256 ") != -1 &&
    name.indexOf("gray") != -1 &&
    name.indexOf("lte") != -1
  ) {
    return 24868;
  } else if (
    name.indexOf("pro 11") != -1 &&
    name.indexOf(" m2 ") != -1 &&
    name.indexOf(" 512 ") != -1 &&
    name.indexOf("silver") != -1 &&
    name.indexOf("wi-fi") != -1
  ) {
    return 24853;
  } else if (
    name.indexOf("pro 11") != -1 &&
    name.indexOf(" m2 ") != -1 &&
    name.indexOf(" 512 ") != -1 &&
    name.indexOf("gray") != -1 &&
    name.indexOf("wi-fi") != -1
  ) {
    return 24869;
  } else if (
    name.indexOf("pro 11") != -1 &&
    name.indexOf(" m2 ") != -1 &&
    name.indexOf(" 512 ") != -1 &&
    name.indexOf("silver") != -1 &&
    name.indexOf("lte") != -1
  ) {
    return 24860;
  } else if (
    name.indexOf("pro 11") != -1 &&
    name.indexOf(" m2 ") != -1 &&
    name.indexOf(" 512 ") != -1 &&
    name.indexOf("gray") != -1 &&
    name.indexOf("lte") != -1
  ) {
    return 24870;
  } else if (
    name.indexOf("pro 12.9") != -1 &&
    name.indexOf(" m1 ") != -1 &&
    name.indexOf(" 128 ") != -1 &&
    name.indexOf("silver") != -1 &&
    name.indexOf("wi-fi") != -1
  ) {
    return 20098;
  } else if (
    name.indexOf("pro 12.9") != -1 &&
    name.indexOf(" m1 ") != -1 &&
    name.indexOf(" 128 ") != -1 &&
    name.indexOf("gray") != -1 &&
    name.indexOf("wi-fi") != -1
  ) {
    return 20099;
  } else if (
    name.indexOf("pro 12.9") != -1 &&
    name.indexOf(" m1 ") != -1 &&
    name.indexOf(" 128 ") != -1 &&
    name.indexOf("silver") != -1 &&
    name.indexOf("lte") != -1
  ) {
    return 20088;
  } else if (
    name.indexOf("pro 12.9") != -1 &&
    name.indexOf(" m1 ") != -1 &&
    name.indexOf(" 128 ") != -1 &&
    name.indexOf("gray") != -1 &&
    name.indexOf("lte") != -1
  ) {
    return 20089;
  } else if (
    name.indexOf("pro 12.9") != -1 &&
    name.indexOf(" m1 ") != -1 &&
    name.indexOf(" 1tb ") != -1 &&
    name.indexOf("silver") != -1 &&
    name.indexOf("wi-fi") != -1
  ) {
    return 20104;
  } else if (
    name.indexOf("pro 12.9") != -1 &&
    name.indexOf(" m1 ") != -1 &&
    name.indexOf(" 1tb ") != -1 &&
    name.indexOf("gray") != -1 &&
    name.indexOf("wi-fi") != -1
  ) {
    return 20105;
  } else if (
    name.indexOf("pro 12.9") != -1 &&
    name.indexOf(" m1 ") != -1 &&
    name.indexOf(" 1tb ") != -1 &&
    name.indexOf("silver") != -1 &&
    name.indexOf("lte") != -1
  ) {
    return 20094;
  } else if (
    name.indexOf("pro 12.9") != -1 &&
    name.indexOf(" m1 ") != -1 &&
    name.indexOf(" 1tb ") != -1 &&
    name.indexOf("gray") != -1 &&
    name.indexOf("lte") != -1
  ) {
    return 20095;
  } else if (
    name.indexOf("pro 12.9") != -1 &&
    name.indexOf(" m1 ") != -1 &&
    name.indexOf(" 256 ") != -1 &&
    name.indexOf("silver") != -1 &&
    name.indexOf("wi-fi") != -1
  ) {
    return 20100;
  } else if (
    name.indexOf("pro 12.9") != -1 &&
    name.indexOf(" m1 ") != -1 &&
    name.indexOf(" 256 ") != -1 &&
    name.indexOf("gray") != -1 &&
    name.indexOf("wi-fi") != -1
  ) {
    return 20101;
  } else if (
    name.indexOf("pro 12.9") != -1 &&
    name.indexOf(" m1 ") != -1 &&
    name.indexOf(" 256 ") != -1 &&
    name.indexOf("silver") != -1 &&
    name.indexOf("lte") != -1
  ) {
    return 20090;
  } else if (
    name.indexOf("pro 12.9") != -1 &&
    name.indexOf(" m1 ") != -1 &&
    name.indexOf(" 256 ") != -1 &&
    name.indexOf("gray") != -1 &&
    name.indexOf("lte") != -1
  ) {
    return 20091;
  } else if (
    name.indexOf("pro 12.9") != -1 &&
    name.indexOf(" m1 ") != -1 &&
    name.indexOf(" 2tb ") != -1 &&
    name.indexOf("silver") != -1 &&
    name.indexOf("wi-fi") != -1
  ) {
    return 20106;
  } else if (
    name.indexOf("pro 12.9") != -1 &&
    name.indexOf(" m1 ") != -1 &&
    name.indexOf(" 2tb ") != -1 &&
    name.indexOf("gray") != -1 &&
    name.indexOf("wi-fi") != -1
  ) {
    return 20107;
  } else if (
    name.indexOf("pro 12.9") != -1 &&
    name.indexOf(" m1 ") != -1 &&
    name.indexOf(" 2tb ") != -1 &&
    name.indexOf("silver") != -1 &&
    name.indexOf("lte") != -1
  ) {
    return 20096;
  } else if (
    name.indexOf("pro 12.9") != -1 &&
    name.indexOf(" m1 ") != -1 &&
    name.indexOf(" 2tb ") != -1 &&
    name.indexOf("gray") != -1 &&
    name.indexOf("lte") != -1
  ) {
    return 20097;
  } else if (
    name.indexOf("pro 12.9") != -1 &&
    name.indexOf(" m1 ") != -1 &&
    name.indexOf(" 512 ") != -1 &&
    name.indexOf("silver") != -1 &&
    name.indexOf("wi-fi") != -1
  ) {
    return 20102;
  } else if (
    name.indexOf("pro 12.9") != -1 &&
    name.indexOf(" m1 ") != -1 &&
    name.indexOf(" 512 ") != -1 &&
    name.indexOf("gray") != -1 &&
    name.indexOf("wi-fi") != -1
  ) {
    return 20103;
  } else if (
    name.indexOf("pro 12.9") != -1 &&
    name.indexOf(" m1 ") != -1 &&
    name.indexOf(" 512 ") != -1 &&
    name.indexOf("silver") != -1 &&
    name.indexOf("lte") != -1
  ) {
    return 20092;
  } else if (
    name.indexOf("pro 12.9") != -1 &&
    name.indexOf(" m1 ") != -1 &&
    name.indexOf(" 512 ") != -1 &&
    name.indexOf("gray") != -1 &&
    name.indexOf("lte") != -1
  ) {
    return 20093;
  } else if (
    name.indexOf("pro 13") != -1 &&
    name.indexOf(" m4 ") != -1 &&
    name.indexOf(" 1tb ") != -1 &&
    name.indexOf("silver") != -1 &&
    name.indexOf("wi-fi") != -1 &&
    name.indexOf("nano") != -1
  ) {
    return 36484;
  } else if (
    name.indexOf("pro 13") != -1 &&
    name.indexOf(" m4 ") != -1 &&
    name.indexOf(" 1tb ") != -1 &&
    name.indexOf("black") != -1 &&
    name.indexOf("wi-fi") != -1 &&
    name.indexOf("nano") != -1
  ) {
    return 36483;
  } else if (
    name.indexOf("pro 13") != -1 &&
    name.indexOf(" m4 ") != -1 &&
    name.indexOf(" 1tb ") != -1 &&
    name.indexOf("silver") != -1 &&
    name.indexOf("lte") != -1 &&
    name.indexOf("nano") != -1
  ) {
    return 36485;
  } else if (
    name.indexOf("pro 13") != -1 &&
    name.indexOf(" m4 ") != -1 &&
    name.indexOf(" 1tb ") != -1 &&
    name.indexOf("black") != -1 &&
    name.indexOf("lte") != -1 &&
    name.indexOf("nano") != -1
  ) {
    return 36486;
  } else if (
    name.indexOf("pro 13") != -1 &&
    name.indexOf(" m4 ") != -1 &&
    name.indexOf(" 2tb ") != -1 &&
    name.indexOf("silver") != -1 &&
    name.indexOf("wi-fi") != -1 &&
    name.indexOf("nano") != -1
  ) {
    return 36487;
  } else if (
    name.indexOf("pro 13") != -1 &&
    name.indexOf(" m4 ") != -1 &&
    name.indexOf(" 2tb ") != -1 &&
    name.indexOf("black") != -1 &&
    name.indexOf("wi-fi") != -1 &&
    name.indexOf("nano") != -1
  ) {
    return 36488;
  } else if (
    name.indexOf("pro 13") != -1 &&
    name.indexOf(" m4 ") != -1 &&
    name.indexOf(" 2tb ") != -1 &&
    name.indexOf("silver") != -1 &&
    name.indexOf("lte") != -1 &&
    name.indexOf("nano") != -1
  ) {
    return 36489;
  } else if (
    name.indexOf("pro 13") != -1 &&
    name.indexOf(" m4 ") != -1 &&
    name.indexOf(" 2tb ") != -1 &&
    name.indexOf("black") != -1 &&
    name.indexOf("lte") != -1 &&
    name.indexOf("nano") != -1
  ) {
    return 36490;
  } else if (
    name.indexOf("pro 13") != -1 &&
    name.indexOf(" m4 ") != -1 &&
    name.indexOf(" 1tb ") != -1 &&
    name.indexOf("silver") != -1 &&
    name.indexOf("wi-fi") != -1
  ) {
    return 36260;
  } else if (
    name.indexOf("pro 13") != -1 &&
    name.indexOf(" m4 ") != -1 &&
    name.indexOf(" 1tb ") != -1 &&
    name.indexOf("black") != -1 &&
    name.indexOf("wi-fi") != -1
  ) {
    return 36261;
  } else if (
    name.indexOf("pro 13") != -1 &&
    name.indexOf(" m4 ") != -1 &&
    name.indexOf(" 1tb ") != -1 &&
    name.indexOf("silver") != -1 &&
    name.indexOf("lte") != -1
  ) {
    return 36262;
  } else if (
    name.indexOf("pro 13") != -1 &&
    name.indexOf(" m4 ") != -1 &&
    name.indexOf(" 1tb ") != -1 &&
    name.indexOf("black") != -1 &&
    name.indexOf("lte") != -1
  ) {
    return 36263;
  } else if (
    name.indexOf("pro 13") != -1 &&
    name.indexOf(" m4 ") != -1 &&
    name.indexOf(" 2tb ") != -1 &&
    name.indexOf("silver") != -1 &&
    name.indexOf("wi-fi") != -1
  ) {
    return 36268;
  } else if (
    name.indexOf("pro 13") != -1 &&
    name.indexOf(" m4 ") != -1 &&
    name.indexOf(" 2tb ") != -1 &&
    name.indexOf("black") != -1 &&
    name.indexOf("wi-fi") != -1
  ) {
    return 36269;
  } else if (
    name.indexOf("pro 13") != -1 &&
    name.indexOf(" m4 ") != -1 &&
    name.indexOf(" 2tb ") != -1 &&
    name.indexOf("silver") != -1 &&
    name.indexOf("lte") != -1
  ) {
    return 36270;
  } else if (
    name.indexOf("pro 13") != -1 &&
    name.indexOf(" m4 ") != -1 &&
    name.indexOf(" 2tb ") != -1 &&
    name.indexOf("black") != -1 &&
    name.indexOf("lte") != -1
  ) {
    return 36271;
  } else if (
    name.indexOf("pro 13") != -1 &&
    name.indexOf(" m4 ") != -1 &&
    name.indexOf(" 256 ") != -1 &&
    name.indexOf("silver") != -1 &&
    name.indexOf("wi-fi") != -1
  ) {
    return 36176;
  } else if (
    name.indexOf("pro 13") != -1 &&
    name.indexOf(" m4 ") != -1 &&
    name.indexOf(" 256 ") != -1 &&
    name.indexOf("black") != -1 &&
    name.indexOf("wi-fi") != -1
  ) {
    return 36250;
  } else if (
    name.indexOf("pro 13") != -1 &&
    name.indexOf(" m4 ") != -1 &&
    name.indexOf(" 256 ") != -1 &&
    name.indexOf("silver") != -1 &&
    name.indexOf("lte") != -1
  ) {
    return 36177;
  } else if (
    name.indexOf("pro 13") != -1 &&
    name.indexOf(" m4 ") != -1 &&
    name.indexOf(" 256 ") != -1 &&
    name.indexOf("black") != -1 &&
    name.indexOf("lte") != -1
  ) {
    return 36251;
  } else if (
    name.indexOf("pro 13") != -1 &&
    name.indexOf(" m4 ") != -1 &&
    name.indexOf(" 512 ") != -1 &&
    name.indexOf("silver") != -1 &&
    name.indexOf("wi-fi") != -1
  ) {
    return 36256;
  } else if (
    name.indexOf("pro 13") != -1 &&
    name.indexOf(" m4 ") != -1 &&
    name.indexOf(" 512 ") != -1 &&
    name.indexOf("black") != -1 &&
    name.indexOf("wi-fi") != -1
  ) {
    return 36257;
  } else if (
    name.indexOf("pro 13") != -1 &&
    name.indexOf(" m4 ") != -1 &&
    name.indexOf(" 512 ") != -1 &&
    name.indexOf("silver") != -1 &&
    name.indexOf("lte") != -1
  ) {
    return 36258;
  } else if (
    name.indexOf("pro 13") != -1 &&
    name.indexOf(" m4 ") != -1 &&
    name.indexOf(" 512 ") != -1 &&
    name.indexOf("black") != -1 &&
    name.indexOf("lte") != -1
  ) {
    return 36259;
  } else if (
    name.indexOf("mini 6") != -1 &&
    name.indexOf(" 64 ") != -1 &&
    name.indexOf("pink") != -1 &&
    name.indexOf("wi-fi") != -1
  ) {
    return 20634;
  } else if (
    name.indexOf("mini 6") != -1 &&
    name.indexOf(" 64 ") != -1 &&
    name.indexOf("purple") != -1 &&
    name.indexOf("wi-fi") != -1
  ) {
    return 20635;
  } else if (
    (name.indexOf("mini 6") != -1 &&
      name.indexOf(" 64 ") != -1 &&
      name.indexOf("gray") != -1 &&
      name.indexOf("wi-fi") != -1) ||
    (name.indexOf("mini 6") != -1 &&
      name.indexOf(" 64 ") != -1 &&
      name.indexOf("grey") != -1 &&
      name.indexOf("wi-fi") != -1)
  ) {
    return 20633;
  } else if (
    (name.indexOf("mini 6") != -1 &&
      name.indexOf(" 64 ") != -1 &&
      name.indexOf("starlight") != -1 &&
      name.indexOf("wi-fi") != -1) ||
    (name.indexOf("mini 6") != -1 &&
      name.indexOf(" 64 ") != -1 &&
      name.indexOf("silver") != -1 &&
      name.indexOf("wi-fi") != -1)
  ) {
    return 20636;
  } else if (
    name.indexOf("mini 6") != -1 &&
    name.indexOf(" 64 ") != -1 &&
    name.indexOf("pink") != -1 &&
    name.indexOf("lte") != -1
  ) {
    return 20643;
  } else if (
    name.indexOf("mini 6") != -1 &&
    name.indexOf(" 64 ") != -1 &&
    name.indexOf("purple") != -1 &&
    name.indexOf("lte") != -1
  ) {
    return 20644;
  } else if (
    (name.indexOf("mini 6") != -1 &&
      name.indexOf(" 64 ") != -1 &&
      name.indexOf("gray") != -1 &&
      name.indexOf("lte") != -1) ||
    (name.indexOf("mini 6") != -1 &&
      name.indexOf(" 64 ") != -1 &&
      name.indexOf("grey") != -1 &&
      name.indexOf("lte") != -1)
  ) {
    return 20642;
  } else if (
    (name.indexOf("mini 6") != -1 &&
      name.indexOf(" 64 ") != -1 &&
      name.indexOf("starlight") != -1 &&
      name.indexOf("lte") != -1) ||
    (name.indexOf("mini 6") != -1 &&
      name.indexOf(" 64 ") != -1 &&
      name.indexOf("silver") != -1 &&
      name.indexOf("lte") != -1)
  ) {
    return 20641;
  } else if (
    name.indexOf("mini 6") != -1 &&
    name.indexOf(" 256 ") != -1 &&
    name.indexOf("pink") != -1 &&
    name.indexOf("wi-fi") != -1
  ) {
    return 20637;
  } else if (
    name.indexOf("mini 6") != -1 &&
    name.indexOf(" 256 ") != -1 &&
    name.indexOf("purple") != -1 &&
    name.indexOf("wi-fi") != -1
  ) {
    return 20638;
  } else if (
    (name.indexOf("mini 6") != -1 &&
      name.indexOf(" 256 ") != -1 &&
      name.indexOf("gray") != -1 &&
      name.indexOf("wi-fi") != -1) ||
    (name.indexOf("mini 6") != -1 &&
      name.indexOf(" 256 ") != -1 &&
      name.indexOf("grey") != -1 &&
      name.indexOf("wi-fi") != -1)
  ) {
    return 20639;
  } else if (
    (name.indexOf("mini 6") != -1 &&
      name.indexOf(" 256 ") != -1 &&
      name.indexOf("starlight") != -1 &&
      name.indexOf("wi-fi") != -1) ||
    (name.indexOf("mini 6") != -1 &&
      name.indexOf(" 256 ") != -1 &&
      name.indexOf("silver") != -1 &&
      name.indexOf("wi-fi") != -1)
  ) {
    return 20640;
  } else if (
    name.indexOf("mini 6") != -1 &&
    name.indexOf(" 256 ") != -1 &&
    name.indexOf("pink") != -1 &&
    name.indexOf("lte") != -1
  ) {
    return 20649;
  } else if (
    name.indexOf("mini 6") != -1 &&
    name.indexOf(" 256 ") != -1 &&
    name.indexOf("purple") != -1 &&
    name.indexOf("lte") != -1
  ) {
    return 20650;
  } else if (
    (name.indexOf("mini 6") != -1 &&
      name.indexOf(" 256 ") != -1 &&
      name.indexOf("gray") != -1 &&
      name.indexOf("lte") != -1) ||
    (name.indexOf("mini 6") != -1 &&
      name.indexOf(" 256 ") != -1 &&
      name.indexOf("grey") != -1 &&
      name.indexOf("lte") != -1)
  ) {
    return 20651;
  } else if (
    (name.indexOf("mini 6") != -1 &&
      name.indexOf(" 256 ") != -1 &&
      name.indexOf("starlight") != -1 &&
      name.indexOf("lte") != -1) ||
    (name.indexOf("mini 6") != -1 &&
      name.indexOf(" 256 ") != -1 &&
      name.indexOf("silver") != -1 &&
      name.indexOf("lte") != -1)
  ) {
    return 20652;
  } else if (
    name.indexOf("air 5") != -1 &&
    name.indexOf(" 64 ") != -1 &&
    name.indexOf("blue") != -1 &&
    name.indexOf("wi-fi") != -1
  ) {
    return 22175;
  } else if (
    name.indexOf("air 5") != -1 &&
    name.indexOf(" 64 ") != -1 &&
    name.indexOf("pink") != -1 &&
    name.indexOf("wi-fi") != -1
  ) {
    return 22173;
  } else if (
    name.indexOf("air 5") != -1 &&
    name.indexOf(" 64 ") != -1 &&
    name.indexOf("purple") != -1 &&
    name.indexOf("wi-fi") != -1
  ) {
    return 22174;
  } else if (
    name.indexOf("air 5") != -1 &&
    name.indexOf(" 64 ") != -1 &&
    name.indexOf("gray") != -1 &&
    name.indexOf("wi-fi") != -1
  ) {
    return 22171;
  } else if (
    name.indexOf("air 5") != -1 &&
    name.indexOf(" 64 ") != -1 &&
    name.indexOf("starlight") != -1 &&
    name.indexOf("wi-fi") != -1
  ) {
    return 22172;
  } else if (
    name.indexOf("air 5") != -1 &&
    name.indexOf(" 256 ") != -1 &&
    name.indexOf("blue") != -1 &&
    name.indexOf("wi-fi") != -1
  ) {
    return 22176;
  } else if (
    name.indexOf("air 5") != -1 &&
    name.indexOf(" 256 ") != -1 &&
    name.indexOf("pink") != -1 &&
    name.indexOf("wi-fi") != -1
  ) {
    return 22177;
  } else if (
    name.indexOf("air 5") != -1 &&
    name.indexOf(" 256 ") != -1 &&
    name.indexOf("purple") != -1 &&
    name.indexOf("wi-fi") != -1
  ) {
    return 22178;
  } else if (
    name.indexOf("air 5") != -1 &&
    name.indexOf(" 256 ") != -1 &&
    name.indexOf("gray") != -1 &&
    name.indexOf("wi-fi") != -1
  ) {
    return 22179;
  } else if (
    name.indexOf("air 5") != -1 &&
    name.indexOf(" 256 ") != -1 &&
    name.indexOf("starlight") != -1 &&
    name.indexOf("wi-fi") != -1
  ) {
    return 22180;
  } else if (
    name.indexOf("air 5") != -1 &&
    name.indexOf(" 64 ") != -1 &&
    name.indexOf("blue") != -1 &&
    name.indexOf("lte") != -1
  ) {
    return 22186;
  } else if (
    name.indexOf("air 5") != -1 &&
    name.indexOf(" 64 ") != -1 &&
    name.indexOf("pink") != -1 &&
    name.indexOf("lte") != -1
  ) {
    return 22187;
  } else if (
    name.indexOf("air 5") != -1 &&
    name.indexOf(" 64 ") != -1 &&
    name.indexOf("purple") != -1 &&
    name.indexOf("lte") != -1
  ) {
    return 22188;
  } else if (
    name.indexOf("air 5") != -1 &&
    name.indexOf(" 64 ") != -1 &&
    name.indexOf("gray") != -1 &&
    name.indexOf("lte") != -1
  ) {
    return 22189;
  } else if (
    name.indexOf("air 5") != -1 &&
    name.indexOf(" 64 ") != -1 &&
    name.indexOf("starlight") != -1 &&
    name.indexOf("lte") != -1
  ) {
    return 22190;
  } else if (
    name.indexOf("air 5") != -1 &&
    name.indexOf(" 256 ") != -1 &&
    name.indexOf("blue") != -1 &&
    name.indexOf("lte") != -1
  ) {
    return 22181;
  } else if (
    name.indexOf("air 5") != -1 &&
    name.indexOf(" 256 ") != -1 &&
    name.indexOf("pink") != -1 &&
    name.indexOf("lte") != -1
  ) {
    return 22182;
  } else if (
    name.indexOf("air 5") != -1 &&
    name.indexOf(" 256 ") != -1 &&
    name.indexOf("purple") != -1 &&
    name.indexOf("lte") != -1
  ) {
    return 22183;
  } else if (
    name.indexOf("air 5") != -1 &&
    name.indexOf(" 256 ") != -1 &&
    name.indexOf("gray") != -1 &&
    name.indexOf("lte") != -1
  ) {
    return 22184;
  } else if (
    name.indexOf("air 5") != -1 &&
    name.indexOf(" 256 ") != -1 &&
    name.indexOf("starlight") != -1 &&
    name.indexOf("lte") != -1
  ) {
    return 22185;
  } else if (
    name.indexOf("air 11") != -1 &&
    name.indexOf(" m2 ") != -1 &&
    name.indexOf(" 128 ") != -1 &&
    name.indexOf("blue") != -1 &&
    name.indexOf("wi-fi") != -1
  ) {
    return 36208;
  } else if (
    name.indexOf("air 11") != -1 &&
    name.indexOf(" m2 ") != -1 &&
    name.indexOf(" 128 ") != -1 &&
    name.indexOf("purple") != -1 &&
    name.indexOf("wi-fi") != -1
  ) {
    return 36207;
  } else if (
    name.indexOf("air 11") != -1 &&
    name.indexOf(" m2 ") != -1 &&
    name.indexOf(" 128 ") != -1 &&
    name.indexOf("gray") != -1 &&
    name.indexOf("wi-fi") != -1
  ) {
    return 36172;
  } else if (
    name.indexOf("air 11") != -1 &&
    name.indexOf(" m2 ") != -1 &&
    name.indexOf(" 128 ") != -1 &&
    name.indexOf("starlight") != -1 &&
    name.indexOf("wi-fi") != -1
  ) {
    return 36206;
  } else if (
    name.indexOf("air 11") != -1 &&
    name.indexOf(" m2 ") != -1 &&
    name.indexOf(" 128 ") != -1 &&
    name.indexOf("blue") != -1 &&
    name.indexOf("lte") != -1
  ) {
    return 36401;
  } else if (
    name.indexOf("air 11") != -1 &&
    name.indexOf(" m2 ") != -1 &&
    name.indexOf(" 128 ") != -1 &&
    name.indexOf("purple") != -1 &&
    name.indexOf("lte") != -1
  ) {
    return 36402;
  } else if (
    name.indexOf("air 11") != -1 &&
    name.indexOf(" m2 ") != -1 &&
    name.indexOf(" 128 ") != -1 &&
    name.indexOf("gray") != -1 &&
    name.indexOf("lte") != -1
  ) {
    return 36403;
  } else if (
    name.indexOf("air 11") != -1 &&
    name.indexOf(" m2 ") != -1 &&
    name.indexOf(" 128 ") != -1 &&
    name.indexOf("starlight") != -1 &&
    name.indexOf("lte") != -1
  ) {
    return 36404;
  } else if (
    name.indexOf("air 11") != -1 &&
    name.indexOf(" m2 ") != -1 &&
    name.indexOf(" 1tb ") != -1 &&
    name.indexOf("blue") != -1 &&
    name.indexOf("wi-fi") != -1
  ) {
    return 36217;
  } else if (
    name.indexOf("air 11") != -1 &&
    name.indexOf(" m2 ") != -1 &&
    name.indexOf(" 1tb ") != -1 &&
    name.indexOf("purple") != -1 &&
    name.indexOf("wi-fi") != -1
  ) {
    return 36218;
  } else if (
    name.indexOf("air 11") != -1 &&
    name.indexOf(" m2 ") != -1 &&
    name.indexOf(" 1tb ") != -1 &&
    name.indexOf("gray") != -1 &&
    name.indexOf("wi-fi") != -1
  ) {
    return 36219;
  } else if (
    name.indexOf("air 11") != -1 &&
    name.indexOf(" m2 ") != -1 &&
    name.indexOf(" 1tb ") != -1 &&
    name.indexOf("starlight") != -1 &&
    name.indexOf("wi-fi") != -1
  ) {
    return 36220;
  } else if (
    name.indexOf("air 11") != -1 &&
    name.indexOf(" m2 ") != -1 &&
    name.indexOf(" 1tb ") != -1 &&
    name.indexOf("blue") != -1 &&
    name.indexOf("lte") != -1
  ) {
    return 36405;
  } else if (
    name.indexOf("air 11") != -1 &&
    name.indexOf(" m2 ") != -1 &&
    name.indexOf(" 1tb ") != -1 &&
    name.indexOf("purple") != -1 &&
    name.indexOf("lte") != -1
  ) {
    return 36406;
  } else if (
    name.indexOf("air 11") != -1 &&
    name.indexOf(" m2 ") != -1 &&
    name.indexOf(" 1tb ") != -1 &&
    name.indexOf("gray") != -1 &&
    name.indexOf("lte") != -1
  ) {
    return 36407;
  } else if (
    name.indexOf("air 11") != -1 &&
    name.indexOf(" m2 ") != -1 &&
    name.indexOf(" 1tb ") != -1 &&
    name.indexOf("starlight") != -1 &&
    name.indexOf("lte") != -1
  ) {
    return 36408;
  } else if (
    name.indexOf("air 11") != -1 &&
    name.indexOf(" m2 ") != -1 &&
    name.indexOf(" 256 ") != -1 &&
    name.indexOf("blue") != -1 &&
    name.indexOf("wi-fi") != -1
  ) {
    return 36209;
  } else if (
    name.indexOf("air 11") != -1 &&
    name.indexOf(" m2 ") != -1 &&
    name.indexOf(" 256 ") != -1 &&
    name.indexOf("purple") != -1 &&
    name.indexOf("wi-fi") != -1
  ) {
    return 36210;
  } else if (
    name.indexOf("air 11") != -1 &&
    name.indexOf(" m2 ") != -1 &&
    name.indexOf(" 256 ") != -1 &&
    name.indexOf("gray") != -1 &&
    name.indexOf("wi-fi") != -1
  ) {
    return 36211;
  } else if (
    name.indexOf("air 11") != -1 &&
    name.indexOf(" m2 ") != -1 &&
    name.indexOf(" 256 ") != -1 &&
    name.indexOf("starlight") != -1 &&
    name.indexOf("wi-fi") != -1
  ) {
    return 36212;
  } else if (
    name.indexOf("air 11") != -1 &&
    name.indexOf(" m2 ") != -1 &&
    name.indexOf(" 256 ") != -1 &&
    name.indexOf("blue") != -1 &&
    name.indexOf("lte") != -1
  ) {
    return 36409;
  } else if (
    name.indexOf("air 11") != -1 &&
    name.indexOf(" m2 ") != -1 &&
    name.indexOf(" 256 ") != -1 &&
    name.indexOf("purple") != -1 &&
    name.indexOf("lte") != -1
  ) {
    return 36410;
  } else if (
    name.indexOf("air 11") != -1 &&
    name.indexOf(" m2 ") != -1 &&
    name.indexOf(" 256 ") != -1 &&
    name.indexOf("gray") != -1 &&
    name.indexOf("lte") != -1
  ) {
    return 36411;
  } else if (
    name.indexOf("air 11") != -1 &&
    name.indexOf(" m2 ") != -1 &&
    name.indexOf(" 256 ") != -1 &&
    name.indexOf("starlight") != -1 &&
    name.indexOf("lte") != -1
  ) {
    return 36412;
  } else if (
    name.indexOf("air 11") != -1 &&
    name.indexOf(" m2 ") != -1 &&
    name.indexOf(" 512 ") != -1 &&
    name.indexOf("blue") != -1 &&
    name.indexOf("wi-fi") != -1
  ) {
    return 36213;
  } else if (
    name.indexOf("air 11") != -1 &&
    name.indexOf(" m2 ") != -1 &&
    name.indexOf(" 512 ") != -1 &&
    name.indexOf("purple") != -1 &&
    name.indexOf("wi-fi") != -1
  ) {
    return 36214;
  } else if (
    name.indexOf("air 11") != -1 &&
    name.indexOf(" m2 ") != -1 &&
    name.indexOf(" 512 ") != -1 &&
    name.indexOf("gray") != -1 &&
    name.indexOf("wi-fi") != -1
  ) {
    return 36215;
  } else if (
    name.indexOf("air 11") != -1 &&
    name.indexOf(" m2 ") != -1 &&
    name.indexOf(" 512 ") != -1 &&
    name.indexOf("starlight") != -1 &&
    name.indexOf("wi-fi") != -1
  ) {
    return 36216;
  } else if (
    name.indexOf("air 11") != -1 &&
    name.indexOf(" m2 ") != -1 &&
    name.indexOf(" 512 ") != -1 &&
    name.indexOf("blue") != -1 &&
    name.indexOf("lte") != -1
  ) {
    return 36413;
  } else if (
    name.indexOf("air 11") != -1 &&
    name.indexOf(" m2 ") != -1 &&
    name.indexOf(" 512 ") != -1 &&
    name.indexOf("purple") != -1 &&
    name.indexOf("lte) != -1") != -1
  ) {
    return 36414;
  } else if (
    name.indexOf("air 11") != -1 &&
    name.indexOf(" m2 ") != -1 &&
    name.indexOf(" 512 ") != -1 &&
    name.indexOf("gray") != -1 &&
    name.indexOf("lte") != -1
  ) {
    return 36415;
  } else if (
    name.indexOf("air 11") != -1 &&
    name.indexOf(" m2 ") != -1 &&
    name.indexOf(" 512 ") != -1 &&
    name.indexOf("starlight") != -1 &&
    name.indexOf("lte") != -1
  ) {
  } else if (
    name.indexOf("air 13") != -1 &&
    name.indexOf(" m2 ") != -1 &&
    name.indexOf(" 1tb ") != -1 &&
    name.indexOf("blue") != -1 &&
    name.indexOf("wi-fi") != -1
  ) {
    return 36455;
  } else if (
    name.indexOf("air 13") != -1 &&
    name.indexOf(" m2 ") != -1 &&
    name.indexOf(" 1tb ") != -1 &&
    name.indexOf("purple") != -1 &&
    name.indexOf("wi-fi") != -1
  ) {
    return 36456;
  } else if (
    name.indexOf("air 13") != -1 &&
    name.indexOf(" m2 ") != -1 &&
    name.indexOf(" 1tb ") != -1 &&
    name.indexOf("gray") != -1 &&
    name.indexOf("wi-fi") != -1
  ) {
    return 36454;
  } else if (
    name.indexOf("air 13") != -1 &&
    name.indexOf(" m2 ") != -1 &&
    name.indexOf(" 1tb ") != -1 &&
    name.indexOf("starlight") != -1 &&
    name.indexOf("wi-fi") != -1
  ) {
    return 36457;
  } else if (
    name.indexOf("air 13") != -1 &&
    name.indexOf(" m2 ") != -1 &&
    name.indexOf(" 1tb ") != -1 &&
    name.indexOf("gray") != -1 &&
    name.indexOf("lte") != -1
  ) {
    return 36232;
  } else if (
    name.indexOf("air 13") != -1 &&
    name.indexOf(" m2 ") != -1 &&
    name.indexOf(" 1tb ") != -1 &&
    name.indexOf("blue") != -1 &&
    name.indexOf("lte") != -1
  ) {
    return 36233;
  } else if (
    name.indexOf("air 13") != -1 &&
    name.indexOf(" m2 ") != -1 &&
    name.indexOf(" 1tb ") != -1 &&
    name.indexOf("purple") != -1 &&
    name.indexOf("lte") != -1
  ) {
    return 36234;
  } else if (
    name.indexOf("air 13") != -1 &&
    name.indexOf(" m2 ") != -1 &&
    name.indexOf(" 1tb ") != -1 &&
    name.indexOf("starlight") != -1 &&
    name.indexOf("lte") != -1
  ) {
    return 36235;
  } else if (
    name.indexOf("air 13") != -1 &&
    name.indexOf(" m2 ") != -1 &&
    name.indexOf(" 128 ") != -1 &&
    name.indexOf("blue") != -1 &&
    name.indexOf("wi-fi") != -1
  ) {
    return 36459;
  } else if (
    name.indexOf("air 13") != -1 &&
    name.indexOf(" m2 ") != -1 &&
    name.indexOf(" 128 ") != -1 &&
    name.indexOf("purple") != -1 &&
    name.indexOf("wi-fi") != -1
  ) {
    return 36460;
  } else if (
    name.indexOf("air 13") != -1 &&
    name.indexOf(" m2 ") != -1 &&
    name.indexOf(" 128 ") != -1 &&
    name.indexOf("gray") != -1 &&
    name.indexOf("wi-fi") != -1
  ) {
    return 36458;
  } else if (
    name.indexOf("air 13") != -1 &&
    name.indexOf(" m2 ") != -1 &&
    name.indexOf(" 128 ") != -1 &&
    name.indexOf("starlight") != -1 &&
    name.indexOf("wi-fi") != -1
  ) {
    return 36461;
  } else if (
    name.indexOf("air 13") != -1 &&
    name.indexOf(" m2 ") != -1 &&
    name.indexOf(" 128 ") != -1 &&
    name.indexOf("gray") != -1 &&
    name.indexOf("lte") != -1
  ) {
    return 36173;
  } else if (
    name.indexOf("air 13") != -1 &&
    name.indexOf(" m2 ") != -1 &&
    name.indexOf(" 128 ") != -1 &&
    name.indexOf("blue") != -1 &&
    name.indexOf("lte") != -1
  ) {
    return 36222;
  } else if (
    name.indexOf("air 13") != -1 &&
    name.indexOf(" m2 ") != -1 &&
    name.indexOf(" 128 ") != -1 &&
    name.indexOf("purple") != -1 &&
    name.indexOf("lte") != -1
  ) {
    return 36221;
  } else if (
    name.indexOf("air 13") != -1 &&
    name.indexOf(" m2 ") != -1 &&
    name.indexOf(" 128 ") != -1 &&
    name.indexOf("starlight") != -1 &&
    name.indexOf("lte") != -1
  ) {
    return 36223;
  } else if (
    name.indexOf("air 13") != -1 &&
    name.indexOf(" m2 ") != -1 &&
    name.indexOf(" 256 ") != -1 &&
    name.indexOf("blue") != -1 &&
    name.indexOf("wi-fi") != -1
  ) {
    return 36463;
  } else if (
    name.indexOf("air 13") != -1 &&
    name.indexOf(" m2 ") != -1 &&
    name.indexOf(" 256 ") != -1 &&
    name.indexOf("purple") != -1 &&
    name.indexOf("wi-fi") != -1
  ) {
    return 36464;
  } else if (
    name.indexOf("air 13") != -1 &&
    name.indexOf(" m2 ") != -1 &&
    name.indexOf(" 256 ") != -1 &&
    name.indexOf("gray") != -1 &&
    name.indexOf("wi-fi") != -1
  ) {
    return 36462;
  } else if (
    name.indexOf("air 13") != -1 &&
    name.indexOf(" m2 ") != -1 &&
    name.indexOf(" 256 ") != -1 &&
    name.indexOf("starlight") != -1 &&
    name.indexOf("wi-fi") != -1
  ) {
    return 36465;
  } else if (
    name.indexOf("air 13") != -1 &&
    name.indexOf(" m2 ") != -1 &&
    name.indexOf(" 256 ") != -1 &&
    name.indexOf("gray") != -1 &&
    name.indexOf("lte") != -1
  ) {
    return 36224;
  } else if (
    name.indexOf("air 13") != -1 &&
    name.indexOf(" m2 ") != -1 &&
    name.indexOf(" 256 ") != -1 &&
    name.indexOf("blue") != -1 &&
    name.indexOf("lte") != -1
  ) {
    return 36225;
  } else if (
    name.indexOf("air 13") != -1 &&
    name.indexOf(" m2 ") != -1 &&
    name.indexOf(" 256 ") != -1 &&
    name.indexOf("purple") != -1 &&
    name.indexOf("lte") != -1
  ) {
    return 36226;
  } else if (
    name.indexOf("air 13") != -1 &&
    name.indexOf(" m2 ") != -1 &&
    name.indexOf(" 256 ") != -1 &&
    name.indexOf("starlight") != -1 &&
    name.indexOf("lte") != -1
  ) {
    return 36227;
  } else if (
    name.indexOf("air 13") != -1 &&
    name.indexOf(" m2 ") != -1 &&
    name.indexOf(" 512 ") != -1 &&
    name.indexOf("blue") != -1 &&
    name.indexOf("wi-fi") != -1
  ) {
    return 36467;
  } else if (
    name.indexOf("air 13") != -1 &&
    name.indexOf(" m2 ") != -1 &&
    name.indexOf(" 512 ") != -1 &&
    name.indexOf("purple") != -1 &&
    name.indexOf("wi-fi") != -1
  ) {
    return 36468;
  } else if (
    name.indexOf("air 13") != -1 &&
    name.indexOf(" m2 ") != -1 &&
    name.indexOf(" 512 ") != -1 &&
    name.indexOf("gray") != -1 &&
    name.indexOf("wi-fi") != -1
  ) {
    return 36466;
  } else if (
    name.indexOf("air 13") != -1 &&
    name.indexOf(" m2 ") != -1 &&
    name.indexOf(" 512 ") != -1 &&
    name.indexOf("starlight") != -1 &&
    name.indexOf("wi-fi") != -1
  ) {
    return 36469;
  } else if (
    name.indexOf("air 13") != -1 &&
    name.indexOf(" m2 ") != -1 &&
    name.indexOf(" 512 ") != -1 &&
    name.indexOf("gray") != -1 &&
    name.indexOf("lte") != -1
  ) {
    return 36228;
  } else if (
    name.indexOf("air 13") != -1 &&
    name.indexOf(" m2 ") != -1 &&
    name.indexOf(" 512 ") != -1 &&
    name.indexOf("blue") != -1 &&
    name.indexOf("lte") != -1
  ) {
    return 36229;
  } else if (
    name.indexOf("air 13") != -1 &&
    name.indexOf(" m2 ") != -1 &&
    name.indexOf(" 512 ") != -1 &&
    name.indexOf("purple") != -1 &&
    name.indexOf("lte") != -1
  ) {
    return 36230;
  } else if (
    name.indexOf("air 13") != -1 &&
    name.indexOf(" m2 ") != -1 &&
    name.indexOf(" 512 ") != -1 &&
    name.indexOf("starlight") != -1 &&
    name.indexOf("lte") != -1
  ) {
    return 36231;
  } else if (
    name.indexOf("pro 11") != -1 &&
    name.indexOf(" m4 ") != -1 &&
    name.indexOf(" 1tb ") != -1 &&
    name.indexOf("silver") != -1 &&
    name.indexOf("wi-fi") != -1
  ) {
    return 36417;
  } else if (
    name.indexOf("pro 11") != -1 &&
    name.indexOf(" m4 ") != -1 &&
    name.indexOf(" 1tb ") != -1 &&
    name.indexOf("black") != -1 &&
    name.indexOf("wi-fi") != -1
  ) {
    return 36418;
  } else if (
    name.indexOf("pro 11") != -1 &&
    name.indexOf(" m4 ") != -1 &&
    name.indexOf(" 1tb ") != -1 &&
    name.indexOf("silver") != -1 &&
    name.indexOf("lte") != -1
  ) {
    return 36242;
  } else if (
    name.indexOf("pro 11") != -1 &&
    name.indexOf(" m4 ") != -1 &&
    name.indexOf(" 1tb ") != -1 &&
    name.indexOf("black") != -1 &&
    name.indexOf("lte") != -1
  ) {
    return 36240;
  } else if (
    name.indexOf("pro 11") != -1 &&
    name.indexOf(" m4 ") != -1 &&
    name.indexOf(" 2tb ") != -1 &&
    name.indexOf("silver") != -1 &&
    name.indexOf("wi-fi") != -1
  ) {
    return 36419;
  } else if (
    name.indexOf("pro 11") != -1 &&
    name.indexOf(" m4 ") != -1 &&
    name.indexOf(" 2tb ") != -1 &&
    name.indexOf("black") != -1 &&
    name.indexOf("wi-fi") != -1
  ) {
    return 36420;
  } else if (
    name.indexOf("pro 11") != -1 &&
    name.indexOf(" m4 ") != -1 &&
    name.indexOf(" 2tb ") != -1 &&
    name.indexOf("silver") != -1 &&
    name.indexOf("lte") != -1
  ) {
    return 36247;
  } else if (
    name.indexOf("pro 11") != -1 &&
    name.indexOf(" m4 ") != -1 &&
    name.indexOf(" 2tb ") != -1 &&
    name.indexOf("black") != -1 &&
    name.indexOf("lte") != -1
  ) {
    return 36246;
  } else if (
    name.indexOf("pro 11") != -1 &&
    name.indexOf(" m4 ") != -1 &&
    name.indexOf(" 256 ") != -1 &&
    name.indexOf("silver") != -1 &&
    name.indexOf("wi-fi") != -1
  ) {
    return 36174;
  } else if (
    name.indexOf("pro 11") != -1 &&
    name.indexOf(" m4 ") != -1 &&
    name.indexOf(" 256 ") != -1 &&
    name.indexOf("black") != -1 &&
    name.indexOf("wi-fi") != -1
  ) {
    return 36236;
  } else if (
    name.indexOf("pro 11") != -1 &&
    name.indexOf(" m4 ") != -1 &&
    name.indexOf(" 256 ") != -1 &&
    name.indexOf("silver") != -1 &&
    name.indexOf("lte") != -1
  ) {
    return 36421;
  } else if (
    name.indexOf("pro 11") != -1 &&
    name.indexOf(" m4 ") != -1 &&
    name.indexOf(" 256 ") != -1 &&
    name.indexOf("black") != -1 &&
    name.indexOf("lte") != -1
  ) {
    return 36422;
  } else if (
    name.indexOf("pro 11") != -1 &&
    name.indexOf(" m4 ") != -1 &&
    name.indexOf(" 512 ") != -1 &&
    name.indexOf("silver") != -1 &&
    name.indexOf("wi-fi") != -1
  ) {
    return 36238;
  } else if (
    name.indexOf("pro 11") != -1 &&
    name.indexOf(" m4 ") != -1 &&
    name.indexOf(" 512 ") != -1 &&
    name.indexOf("black") != -1 &&
    name.indexOf("wi-fi") != -1
  ) {
    return 36244;
  } else if (
    name.indexOf("pro 11") != -1 &&
    name.indexOf(" m4 ") != -1 &&
    name.indexOf(" 512 ") != -1 &&
    name.indexOf("silver") != -1 &&
    name.indexOf("lte") != -1
  ) {
    return 36423;
  } else if (
    name.indexOf("pro 11") != -1 &&
    name.indexOf(" m4 ") != -1 &&
    name.indexOf(" 512 ") != -1 &&
    name.indexOf("black") != -1 &&
    name.indexOf("lte") != -1
  ) {
    return 36424;

    // imac
  } else if (name.indexOf("mxnf2") != -1) {
    return 16220;
  } else if (name.indexOf("mxng2") != -1) {
    return 16219;
  } else if (name.indexOf("mgnr3") != -1) {
    return 18688;
  } else if (name.indexOf("mgnt3") != -1) {
    return 18689;
  } else if (name.indexOf("mgtf3") != -1) {
    return 20108;
  } else if (name.indexOf("mjv83") != -1) {
    return 20109;
  } else if (name.indexOf("mjv93") != -1) {
    return 20110;
  } else if (name.indexOf("mjva3") != -1) {
    return 20111;
  } else if (name.indexOf("mgpc3") != -1) {
    return 20112;
  } else if (name.indexOf("mgph3") != -1) {
    return 20113;
  } else if (name.indexOf("mgpk3") != -1) {
    return 20114;
  } else if (name.indexOf("mgpm3") != -1) {
    return 20115;
  } else if (name.indexOf("z12simac01") != -1) {
    return 20116;
  } else if (name.indexOf("z130imac01") != -1) {
    return 20117;
  } else if (name.indexOf("z132imac01") != -1) {
    return 20118;
  } else if (name.indexOf("mgpd3") != -1) {
    return 20119;
  } else if (name.indexOf("mgpj3") != -1) {
    return 20120;
  } else if (name.indexOf("mgpl3") != -1) {
    return 20121;
  } else if (name.indexOf("mgpn3") != -1) {
    return 20122;
  } else if (name.indexOf("z12timac01") != -1) {
    return 20123;
  } else if (name.indexOf("z131imac01") != -1) {
    return 20124;
  } else if (name.indexOf("z133imac01") != -1) {
    return 20125;
  } else if (name.indexOf("mqr93") != -1) {
    return 30627;
  } else if (name.indexOf("mqra3") != -1) {
    return 30626;
  } else if (name.indexOf("mqrc3") != -1) {
    return 30628;
  } else if (name.indexOf("mqrd3") != -1) {
    return 30629;
  } else if (name.indexOf("mqrj3") != -1) {
    return 30631;
  } else if (name.indexOf("mqrn3") != -1) {
    return 30632;
  } else if (name.indexOf("mqrq3") != -1) {
    return 30633;
  } else if (name.indexOf("mqrt3") != -1) {
    return 30630;
  } else if (name.indexOf("mqrk3") != -1) {
    return 30637;
  } else if (name.indexOf("mqrp3") != -1) {
    return 30634;
  } else if (name.indexOf("mqrr3") != -1) {
    return 30635;
  } else if (name.indexOf("mqru3") != -1) {
    return 30636;
  } else if (name.indexOf("mwuu3") != -1) {
    return 37361;
  } else if (name.indexOf("mwuw3") != -1) {
    return 37362;
  } else if (name.indexOf("mwuy3") != -1) {
    return 37363;
  } else if (name.indexOf("mwv13") != -1) {
    return 37364;
  } else if (name.indexOf("mwv43") != -1) {
    return 37365;
  } else if (name.indexOf("mwv63") != -1) {
    return 37366;
  } else if (name.indexOf("mwv83") != -1) {
    return 37367;
  } else if (name.indexOf("mwuc3") != -1) {
    return 37370;
  } else if (name.indexOf("mwud3") != -1) {
    return 37371;
  } else if (name.indexOf("mwue3") != -1) {
    return 37372;
  } else if (name.indexOf("mwuf3") != -1) {
    return 37373;
  } else if (name.indexOf("mwug3") != -1) {
    return 37374;
  } else if (name.indexOf("mwuh3") != -1) {
    return 37375;
  } else if (name.indexOf("mwuj3") != -1) {
    return 37376;
  } else if (name.indexOf("mwuv3") != -1) {
    return 37354;
  } else if (name.indexOf("mwux3") != -1) {
    return 37355;
  } else if (name.indexOf("mwv03") != -1) {
    return 37356;
  } else if (name.indexOf("mwv33") != -1) {
    return 37357;
  } else if (name.indexOf("mwv53") != -1) {
    return 37358;
  } else if (name.indexOf("mwv73") != -1) {
    return 37359;
  } else if (name.indexOf("mwv93") != -1) {
    return 37360;
  } else if (name.indexOf("mcr24") != -1) {
    return 37343;
  } else if (name.indexOf("md2p4") != -1) {
    return 37350;
  } else if (name.indexOf("md2q4") != -1) {
    return 37344;
  } else if (name.indexOf("md2t4") != -1) {
    return 37345;
  } else if (name.indexOf("md2u4") != -1) {
    return 37352;
  } else if (name.indexOf("md2v4") != -1) {
    return 37353;
  } else if (name.indexOf("md2w4") != -1) {
    return 37351;

    // macbook
  } else if (name.indexOf("mqku3") != -1) {
    return 27983;
  } else if (name.indexOf("mgn63") != -1) {
    return 18682;
  } else if (name.indexOf("mgn93") != -1) {
    return 18683;
  } else if (name.indexOf("mgnd3") != -1) {
    return 18684;
  } else if (name.indexOf("mlxx3") != -1) {
    return 26905;
  } else if (name.indexOf("mly03") != -1) {
    return 26904;
  } else if (name.indexOf("mly23") != -1) {
    return 26907;
  } else if (name.indexOf("mly43") != -1) {
    return 26906;
  } else if (name.indexOf("mlxw3") != -1) {
    return 26971;
  } else if (name.indexOf("mlxy3") != -1) {
    return 26972;
  } else if (name.indexOf("mly13") != -1) {
    return 26973;
  } else if (name.indexOf("mly33") != -1) {
    return 26970;
  } else if (name.indexOf("mxcv3") != -1) {
    return 36006;
  } else if (name.indexOf("mxct3") != -1) {
    return 36014;
  } else if (name.indexOf("mxcr3") != -1) {
    return 36011;
  } else if (name.indexOf("mxcu3") != -1) {
    return 36008;
  } else if (name.indexOf("mrxv3") != -1) {
    return 35831;
  } else if (name.indexOf("mrxq3") != -1) {
    return 36015;
  } else if (name.indexOf("mrxn3") != -1) {
    return 36012;
  } else if (name.indexOf("mrxt3") != -1) {
    return 36009;
  } else if (name.indexOf("mrxw3") != -1) {
    return 36005;
  } else if (name.indexOf("mrxr3") != -1) {
    return 36016;
  } else if (name.indexOf("mrxp3") != -1) {
    return 36013;
  } else if (name.indexOf("mrxu3") != -1) {
    return 36010;
  } else if (name.indexOf("mqkp3") != -1) {
    return 27981;
  } else if (name.indexOf("mqkr3") != -1) {
    return 27982;
  } else if (name.indexOf("mqku3") != -1) {
    return 27983;
  } else if (name.indexOf("mqkw3") != -1) {
    return 27984;
  } else if (name.indexOf("mqkq3") != -1) {
    return 27985;
  } else if (name.indexOf("mqkt3") != -1) {
    return 27988;
  } else if (name.indexOf("mqkv3") != -1) {
    return 27987;
  } else if (name.indexOf("mqkx3") != -1) {
    return 27986;
  } else if (name.indexOf("mxd43") != -1) {
    return 36019;
  } else if (name.indexOf("mxd23") != -1) {
    return 36027;
  } else if (name.indexOf("mxd13") != -1) {
    return 36024;
  } else if (name.indexOf("mxd33") != -1) {
    return 36021;
  } else if (name.indexOf("mryu3") != -1) {
    return 36017;
  } else if (name.indexOf("mryp3") != -1) {
    return 36026;
  } else if (name.indexOf("mrym3") != -1) {
    return 36023;
  } else if (name.indexOf("mryr3") != -1) {
    return 36020;
  } else if (name.indexOf("mryv3") != -1) {
    return 36018;
  } else if (name.indexOf("mryq3") != -1) {
    return 36028;
  } else if (name.indexOf("mryn3") != -1) {
    return 36025;
  } else if (name.indexOf("mryt3") != -1) {
    return 36022;
  } else if (name.indexOf("mbpm2") != -1) {
    return 27014;
  } else if (name.indexOf("mbpm2sl") != -1) {
    return 27015;
  } else if (name.indexOf("mbpm2") != -1) {
    return 27016;
  } else if (name.indexOf("mbpm2sl") != -1) {
    return 27017;
  } else if (name.indexOf("mbpm2") != -1) {
    return 27010;
  } else if (name.indexOf("mbpm2sl") != -1) {
    return 27011;
  } else if (name.indexOf("mbpm2") != -1) {
    return 27012;
  } else if (name.indexOf("mbpm2sl") != -1) {
    return 27013;
  } else if (name.indexOf("mbpm2") != -1) {
    return 27022;
  } else if (name.indexOf("mbpm2sl") != -1) {
    return 27023;
  } else if (name.indexOf("mbpm2") != -1) {
    return 27024;
  } else if (name.indexOf("mbpm2sl") != -1) {
    return 27025;
  } else if (name.indexOf("mbpm2") != -1) {
    return 27018;
  } else if (name.indexOf("mbpm2sl") != -1) {
    return 27019;
  } else if (name.indexOf("mbpm2") != -1) {
    return 27020;
  } else if (name.indexOf("mbpm2sl") != -1) {
    return 27021;
  } else if (name.indexOf("mbpm2") != -1) {
    return 27006;
  } else if (name.indexOf("mbpm2sl") != -1) {
    return 27007;
  } else if (name.indexOf("mbpm2") != -1) {
    return 27008;
  } else if (name.indexOf("mbpm2sl") != -1) {
    return 27009;
  } else if (name.indexOf("mneh3") != -1) {
    return 27002;
  } else if (name.indexOf("mnep3") != -1) {
    return 27003;
  } else if (name.indexOf("mnej3") != -1) {
    return 27004;
  } else if (name.indexOf("mneq3") != -1) {
    return 27005;
  } else if (name.indexOf("mphj3") != -1) {
    return 27210;
  } else if (name.indexOf("mphf3") != -1) {
    return 27208;
  } else if (name.indexOf("mphe3") != -1) {
    return 27207;
  } else if (name.indexOf("mphh3") != -1) {
    return 27209;
  } else if (name.indexOf("z1aw001lv") != -1) {
    return 34311;
  } else if (name.indexOf("mrx53") != -1) {
    return 30647;
  } else if (name.indexOf("mrx83") != -1) {
    return 30648;
  } else if (name.indexOf("z1aw001fy") != -1) {
    return 34312;
  } else if (name.indexOf("z1aw001ns") != -1) {
    return 34308;
  } else if (name.indexOf("mrx43") != -1) {
    return 30645;
  } else if (name.indexOf("mrx73") != -1) {
    return 30646;
  } else if (name.indexOf("mrx33") != -1) {
    return 30644;
  } else if (name.indexOf("mrx63") != -1) {
    return 30642;
  } else if (name.indexOf("mr7k3") != -1) {
    return 30640;
  } else if (name.indexOf("mtl83") != -1) {
    return 30641;
  } else if (name.indexOf("mr7j3") != -1) {
    return 30639;
  } else if (name.indexOf("mtl73") != -1) {
    return 30638;
  } else if (name.indexOf("mrw33") != -1) {
    return 30649;
  } else if (name.indexOf("mrw73") != -1) {
    return 30650;
  } else if (name.indexOf("muw63") != -1) {
    return 30651;
  } else if (name.indexOf("muw73") != -1) {
    return 30652;
  } else if (name.indexOf("mrw13") != -1) {
    return 30653;
  } else if (name.indexOf("mrw43") != -1) {
    return 30654;
  } else if (name.indexOf("mrw23") != -1) {
    return 30655;
  } else if (name.indexOf("mrw63") != -1) {
    return 30656;
  } else if (name.indexOf("mw2w3") != -1) {
    return 37389;
  } else if (name.indexOf("mw2u3") != -1) {
    return 37390;
  } else if (name.indexOf("mw2x3") != -1) {
    return 37391;
  } else if (name.indexOf("mw2v3") != -1) {
    return 37392;
  } else if (name.indexOf("mcx14") != -1) {
    return 37393;
  } else if (name.indexOf("mcx04") != -1) {
    return 37394;
  } else if (name.indexOf("mx2g3") != -1) {
    return 37395;
  } else if (name.indexOf("mx2k3") != -1) {
    return 37396;
  } else if (name.indexOf("mx2e3") != -1) {
    return 37401;
  } else if (name.indexOf("mx2h3") != -1) {
    return 37402;
  } else if (name.indexOf("mx2f3") != -1) {
    return 37403;
  } else if (name.indexOf("mx2j3") != -1) {
    return 37404;
  } else if (name.indexOf("mx2v3") != -1) {
    return 37397;
  } else if (name.indexOf("mx303") != -1) {
    return 37398;
  } else if (name.indexOf("mx2w3") != -1) {
    return 37399;
  } else if (name.indexOf("mx313") != -1) {
    return 37400;
  } else if (name.indexOf("mx2t3") != -1) {
    return 37405;
  } else if (name.indexOf("mx2x3") != -1) {
    return 37406;
  } else if (name.indexOf("mx2u3") != -1) {
    return 37407;
  } else if (name.indexOf("mx2y3") != -1) {
    return 37408;

    // iphone se
  } else if (
    name.indexOf("se3 64 black") != -1 ||
    name.indexOf("se 64 midnight") != -1
  ) {
    return 22162;
  } else if (
    name.indexOf("se3 64 red") != -1 ||
    name.indexOf("se 64 red") != -1
  ) {
    return 22164;
  } else if (
    name.indexOf("se3 64 white") != -1 ||
    name.indexOf("se 64 starlight") != -1
  ) {
    return 22163;
  } else if (
    name.indexOf("se3 128 black") != -1 ||
    name.indexOf("se 128 midnight") != -1
  ) {
    return 22165;
  } else if (
    name.indexOf("se3 128 red") != -1 ||
    name.indexOf("se 128 red") != -1
  ) {
    return 22166;
  } else if (
    name.indexOf("se3 128 white") != -1 ||
    name.indexOf("se 128 starlight") != -1
  ) {
    return 22167;
  } else if (
    name.indexOf("se3 256 black") != -1 ||
    name.indexOf("se 256 midnight") != -1
  ) {
    return 22168;
  } else if (
    name.indexOf("se3 256 red") != -1 ||
    name.indexOf("se 256 red") != -1
  ) {
    return 22169;
  } else if (
    name.indexOf("se3 256 white") != -1 ||
    name.indexOf("se 256 starlight") != -1
  ) {
    return 22170;

    // iphone 11
  } else if (
    name.indexOf("11 64") !== -1 &&
    name.indexOf("black") !== -1 &&
    name.indexOf("air") == -1 &&
    name.indexOf("pro") == -1
  ) {
    return 13582;
  } else if (
    name.indexOf("11 64") !== -1 &&
    name.indexOf("yellow") !== -1 &&
    name.indexOf("air") == -1 &&
    name.indexOf("pro") == -1
  ) {
    return 13591;
  } else if (
    name.indexOf("11 64") !== -1 &&
    name.indexOf("white") !== -1 &&
    name.indexOf("air") == -1 &&
    name.indexOf("pro") == -1
  ) {
    return 13580;
  } else if (
    name.indexOf("11 64") !== -1 &&
    name.indexOf("red") !== -1 &&
    name.indexOf("air") == -1 &&
    name.indexOf("pro") == -1
  ) {
    return 13595;
  } else if (
    name.indexOf("11 64") !== -1 &&
    name.indexOf("purple") !== -1 &&
    name.indexOf("air") == -1 &&
    name.indexOf("pro") == -1
  ) {
    return 13592;
  } else if (
    name.indexOf("11 64") !== -1 &&
    name.indexOf("green") !== -1 &&
    name.indexOf("air") == -1 &&
    name.indexOf("pro") == -1
  ) {
    return 13586;
  } else if (
    name.indexOf("11 128") !== -1 &&
    name.indexOf("yellow") !== -1 &&
    name.indexOf("air") == -1 &&
    name.indexOf("pro") == -1
  ) {
    return 13589;
  } else if (
    name.indexOf("11 128") !== -1 &&
    name.indexOf("white") !== -1 &&
    name.indexOf("air") == -1 &&
    name.indexOf("pro") == -1
  ) {
    return 13579;
  } else if (
    name.indexOf("11 128") !== -1 &&
    name.indexOf("red") !== -1 &&
    name.indexOf("air") == -1 &&
    name.indexOf("pro") == -1
  ) {
    return 13597;
  } else if (
    name.indexOf("11 128") !== -1 &&
    name.indexOf("purple") !== -1 &&
    name.indexOf("air") == -1 &&
    name.indexOf("pro") == -1
  ) {
    return 13594;
  } else if (
    name.indexOf("11 128") !== -1 &&
    name.indexOf("green") !== -1 &&
    name.indexOf("air") == -1 &&
    name.indexOf("pro") == -1
  ) {
    return 13588;
  } else if (
    name.indexOf("11 128") !== -1 &&
    name.indexOf("black") !== -1 &&
    name.indexOf("air") == -1 &&
    name.indexOf("pro") == -1
  ) {
    return 13584;

    // iphone 12
  } else if (name.indexOf("12 64") !== -1 && name.indexOf("black") !== -1) {
    return 17654;
  } else if (name.indexOf("12 64") !== -1 && name.indexOf("blue") !== -1) {
    return 17658;
  } else if (name.indexOf("12 64") !== -1 && name.indexOf("green") !== -1) {
    return 17657;
  } else if (name.indexOf("12 64") !== -1 && name.indexOf("red") !== -1) {
    return 17655;
  } else if (name.indexOf("12 64") !== -1 && name.indexOf("purple") !== -1) {
    return 20128;
  } else if (name.indexOf("12 64") !== -1 && name.indexOf("white") !== -1) {
    return 17656;
  } else if (name.indexOf("12 128") !== -1 && name.indexOf("black") !== -1) {
    return 17659;
  } else if (name.indexOf("12 128") !== -1 && name.indexOf("blue") !== -1) {
    return 17660;
  } else if (name.indexOf("12 128") !== -1 && name.indexOf("green") !== -1) {
    return 17661;
  } else if (name.indexOf("12 128") !== -1 && name.indexOf("red") !== -1) {
    return 17662;
  } else if (name.indexOf("12 128") !== -1 && name.indexOf("purple") !== -1) {
    return 20126;
  } else if (name.indexOf("12 128") !== -1 && name.indexOf("white") !== -1) {
    return 17663;
  } else if (name.indexOf("12 256") !== -1 && name.indexOf("black") !== -1) {
    return 17664;
  } else if (name.indexOf("12 256") !== -1 && name.indexOf("blue") !== -1) {
    return 17665;
  } else if (name.indexOf("12 256") !== -1 && name.indexOf("green") !== -1) {
    return 17666;
  } else if (name.indexOf("12 256") !== -1 && name.indexOf("red") !== -1) {
    return 17667;
  } else if (name.indexOf("12 256") !== -1 && name.indexOf("purple") !== -1) {
    return 20127;
  } else if (name.indexOf("12 256") !== -1 && name.indexOf("white") !== -1) {
    return 17668;
  } else if (
    name.indexOf("12 mini 128") !== -1 &&
    name.indexOf("black") !== -1
  ) {
    return 17674;
  } else if (
    name.indexOf("12 mini 128") !== -1 &&
    name.indexOf("blue") !== -1
  ) {
    return 17675;
  } else if (
    name.indexOf("12 mini 128") !== -1 &&
    name.indexOf("green") !== -1
  ) {
    return 17676;
  } else if (
    name.indexOf("12 mini 128") !== -1 &&
    name.indexOf("purple") !== -1
  ) {
    return 20129;
  } else if (name.indexOf("12 mini 128") !== -1 && name.indexOf("red") !== -1) {
    return 17677;
  } else if (
    name.indexOf("12 mini 128") !== -1 &&
    name.indexOf("white") !== -1
  ) {
    return 17678;
  } else if (
    name.indexOf("12 mini 256") !== -1 &&
    name.indexOf("black") !== -1
  ) {
    return 17679;
  } else if (
    name.indexOf("12 mini 256") !== -1 &&
    name.indexOf("blue") !== -1
  ) {
    return 17680;
  } else if (
    name.indexOf("12 mini 256") !== -1 &&
    name.indexOf("green") !== -1
  ) {
    return 17681;
  } else if (
    name.indexOf("12 mini 256") !== -1 &&
    name.indexOf("purple") !== -1
  ) {
    return 20130;
  } else if (name.indexOf("12 mini 256") !== -1 && name.indexOf("red") !== -1) {
    return 17682;
  } else if (
    name.indexOf("12 mini 256") !== -1 &&
    name.indexOf("white") !== -1
  ) {
    return 17683;
  } else if (
    name.indexOf("12 mini 64") !== -1 &&
    name.indexOf("black") !== -1
  ) {
    return 17669;
  } else if (name.indexOf("12 mini 64") !== -1 && name.indexOf("blue") !== -1) {
    return 17672;
  } else if (
    name.indexOf("12 mini 64") !== -1 &&
    name.indexOf("64") !== -1 &&
    name.indexOf("green") !== -1
  ) {
    return 17673;
  } else if (
    name.indexOf("12 mini 64") !== -1 &&
    name.indexOf("purple") !== -1
  ) {
    return 20131;
  } else if (name.indexOf("12 mini 64") !== -1 && name.indexOf("red") !== -1) {
    return 17670;
  } else if (
    name.indexOf("12 mini 64") !== -1 &&
    name.indexOf("white") !== -1
  ) {
    return 17671;
  } else if (name.indexOf("12 pro 128 gold") != -1) {
    return 17686;
  } else if (name.indexOf("12 pro 128 black") != -1) {
    return 17684;
  } else if (name.indexOf("12 pro 128 blue") != -1) {
    return 17687;
  } else if (name.indexOf("12 pro 128 silver") != -1) {
    return 17685;
  } else if (name.indexOf("12 pro 256 gold") != -1) {
    return 17688;
  } else if (name.indexOf("12 pro 256 black") != -1) {
    return 17689;
  } else if (name.indexOf("12 pro 256 blue") != -1) {
    return 17690;
  } else if (name.indexOf("12 pro 256 silver") != -1) {
    return 17691;
  } else if (name.indexOf("12 pro 512 gold") != -1) {
    return 17692;
  } else if (name.indexOf("12 pro 512 black") != -1) {
    return 17693;
  } else if (name.indexOf("12 pro 512 blue") != -1) {
    return 17694;
  } else if (name.indexOf("12 pro 512 silver") != -1) {
    return 17695;
  } else if (name.indexOf("12 pro max 128 gold") != -1) {
    return 17699;
  } else if (
    name.indexOf("12 pro max 128 black") != -1 ||
    name.indexOf("12 pro max 128 graphite") != -1
  ) {
    return 17696;
  } else if (name.indexOf("12 pro max 128 blue") != -1) {
    return 17698;
  } else if (name.indexOf("12 pro max 128 silver") != -1) {
    return 17697;
  } else if (name.indexOf("12 pro max 256 gold") != -1) {
    return 17700;
  } else if (name.indexOf("12 pro max 256 black") != -1) {
    return 17701;
  } else if (name.indexOf("12 pro max 256 blue") != -1) {
    return 17702;
  } else if (name.indexOf("12 pro max 256 silver") != -1) {
    return 17703;
  } else if (name.indexOf("12 pro max 512 gold") != -1) {
    return 17704;
  } else if (name.indexOf("12 pro max 512 black") != -1) {
    return 17705;
  } else if (name.indexOf("12 pro max 512 blue") != -1) {
    return 17706;
  } else if (name.indexOf("12 pro max 512 silver") != -1) {
    return 17707;

    // iphone 13
  } else if (
    name.indexOf("13 128 blue") != -1 &&
    name.indexOf("air") == -1 &&
    name.indexOf("pro") == -1
  ) {
    return 20576;
  } else if (
    (name.indexOf("13 128 midnight") != -1 ||
      name.indexOf("13 128 black") != -1) &&
    name.indexOf("air") == -1 &&
    name.indexOf("pro") == -1
  ) {
    return 20575;
  } else if (
    name.indexOf("13 128 pink") != -1 &&
    name.indexOf("air") == -1 &&
    name.indexOf("pro") == -1
  ) {
    return 20569;
  } else if (
    name.indexOf("13 128 red") != -1 &&
    name.indexOf("air") == -1 &&
    name.indexOf("pro") == -1
  ) {
    return 20578;
  } else if (
    (name.indexOf("13 128 starlight") != -1 ||
      name.indexOf("13 128 white") != -1) &&
    name.indexOf("air") == -1 &&
    name.indexOf("pro") == -1
  ) {
    return 20577;
  } else if (
    name.indexOf("13 128 green") != -1 &&
    name.indexOf("air") == -1 &&
    name.indexOf("pro") == -1
  ) {
    return 22194;
  } else if (
    name.indexOf("13 256 blue") != -1 &&
    name.indexOf("air") == -1 &&
    name.indexOf("pro") == -1
  ) {
    return 20580;
  } else if (
    (name.indexOf("13 256 midnight") != -1 ||
      name.indexOf("13 256 black") != -1) &&
    name.indexOf("air") == -1 &&
    name.indexOf("pro") == -1
  ) {
    return 20573;
  } else if (
    name.indexOf("13 256 pink") != -1 &&
    name.indexOf("air") == -1 &&
    name.indexOf("pro") == -1
  ) {
    return 20581;
  } else if (
    name.indexOf("13 256 red") != -1 &&
    name.indexOf("air") == -1 &&
    name.indexOf("pro") == -1
  ) {
    return 20582;
  } else if (
    (name.indexOf("13 256 starlight") != -1 ||
      name.indexOf("13 256 white") != -1) &&
    name.indexOf("air") == -1 &&
    name.indexOf("pro") == -1
  ) {
    return 20583;
  } else if (
    name.indexOf("13 256 green") != -1 &&
    name.indexOf("air") == -1 &&
    name.indexOf("pro") == -1
  ) {
    return 22195;
  } else if (
    name.indexOf("13 512 blue") != -1 &&
    name.indexOf("air") == -1 &&
    name.indexOf("pro") == -1
  ) {
    return 20586;
  } else if (
    name.indexOf("13 512 midnight") != -1 ||
    (name.indexOf("13 512 black") != -1 &&
      name.indexOf("air") == -1 &&
      name.indexOf("pro") == -1)
  ) {
    return 20574;
  } else if (
    name.indexOf("13 512 pink") != -1 &&
    name.indexOf("air") == -1 &&
    name.indexOf("pro") == -1
  ) {
    return 20585;
  } else if (
    name.indexOf("13 512 red") != -1 &&
    name.indexOf("air") == -1 &&
    name.indexOf("pro") == -1
  ) {
    return 20588;
  } else if (
    (name.indexOf("13 512 starlight") != -1 ||
      name.indexOf("13 512 white") != -1) &&
    name.indexOf("air") == -1 &&
    name.indexOf("pro") == -1
  ) {
    return 20587;
  } else if (
    name.indexOf("13 512 green") != -1 &&
    name.indexOf("air") == -1 &&
    name.indexOf("pro") == -1
  ) {
    return 22196;
  } else if (name.indexOf("13 mini 128 blue") != -1) {
    return 20590;
  } else if (name.indexOf("13 mini 128 midnight") != -1) {
    return 20570;
  } else if (name.indexOf("13 mini 128 pink") != -1) {
    return 20589;
  } else if (name.indexOf("13 mini 128 red") != -1) {
    return 20592;
  } else if (name.indexOf("13 mini 128 starlight") != -1) {
    return 20591;
  } else if (name.indexOf("13 mini 128 green") != -1) {
    return 22191;
  } else if (name.indexOf("13 mini 256 blue") != -1) {
    return 20594;
  } else if (name.indexOf("13 mini 256 midnight") != -1) {
    return 20593;
  } else if (name.indexOf("13 mini 256 pink") != -1) {
    return 20598;
  } else if (name.indexOf("13 mini 256 red") != -1) {
    return 20596;
  } else if (name.indexOf("13 mini 256 starlight") != -1) {
    return 20595;
  } else if (name.indexOf("13 mini 256 green") != -1) {
    return 22192;
  } else if (name.indexOf("13 mini 512 blue") != -1) {
    return 20599;
  } else if (name.indexOf("13 mini 512 midnight") != -1) {
    return 20597;
  } else if (name.indexOf("13 mini 512 pink") != -1) {
    return 20600;
  } else if (name.indexOf("13 mini 512 red") != -1) {
    return 20602;
  } else if (name.indexOf("13 mini 512 starlight") != -1) {
    return 20601;
  } else if (name.indexOf("13 mini 512 green") != -1) {
    return 22193;
  } else if (name.indexOf("13 pro 128 gold") != -1) {
    return 20605;
  } else if (name.indexOf("13 pro 128 graphite") != -1) {
    return 20571;
  } else if (name.indexOf("13 pro 128 blue") != -1) {
    return 20603;
  } else if (name.indexOf("13 pro 128 silver") != -1) {
    return 20604;
  } else if (name.indexOf("13 pro 128 green") != -1) {
    return 22197;
  } else if (name.indexOf("13 pro 256 gold") != -1) {
    return 20610;
  } else if (name.indexOf("13 pro 256 graphite") != -1) {
    return 20612;
  } else if (name.indexOf("13 pro 256 blue") != -1) {
    return 20611;
  } else if (name.indexOf("13 pro 256 silver") != -1) {
    return 20613;
  } else if (name.indexOf("13 pro 256 green") != -1) {
    return 22199;
  } else if (name.indexOf("13 pro 512 gold") != -1) {
    return 20609;
  } else if (name.indexOf("13 pro 512 graphite") != -1) {
    return 20606;
  } else if (name.indexOf("13 pro 512 blue") != -1) {
    return 20607;
  } else if (name.indexOf("13 pro 512 silver") != -1) {
    return 20608;
  } else if (name.indexOf("13 pro 512 green") != -1) {
    return 22200;
  } else if (
    name.indexOf("13 pro 1tb gold") != -1 ||
    name.indexOf("13 pro 1tb gold") != -1
  ) {
    return 20616;
  } else if (
    name.indexOf("13 pro 1tb graphite") != -1 ||
    name.indexOf("13 pro 1tb graphite") != -1
  ) {
    return 20614;
  } else if (
    name.indexOf("13 pro 1tb blue") != -1 ||
    name.indexOf("13 pro 1tb blue") != -1
  ) {
    return 20615;
  } else if (
    name.indexOf("13 pro 1tb silver") != -1 ||
    name.indexOf("13 pro 1tb silver") != -1
  ) {
    return 20617;
  } else if (
    name.indexOf("13 pro 1tb green") != -1 ||
    name.indexOf("13 pro 1tb green") != -1
  ) {
    return 22198;
  } else if (name.indexOf("13 pro max 128 gold") != -1) {
    return 20623;
  } else if (name.indexOf("13 pro max 128 graphite") != -1) {
    return 20621;
  } else if (name.indexOf("13 pro max 128 blue") != -1) {
    return 20622;
  } else if (name.indexOf("13 pro max 128 silver") != -1) {
    return 20624;
  } else if (name.indexOf("13 pro max 128 green") != -1) {
    return 22201;
  } else if (name.indexOf("13 pro max 256 gold") != -1) {
    return 20620;
  } else if (name.indexOf("13 pro max 256 graphite") != -1) {
    return 20572;
  } else if (name.indexOf("13 pro max 256 blue") != -1) {
    return 20618;
  } else if (name.indexOf("13 pro max 256 silver") != -1) {
    return 20619;
  } else if (name.indexOf("13 pro max 256 green") != -1) {
    return 22203;
  } else if (name.indexOf("13 pro max 512 gold") != -1) {
    return 20628;
  } else if (name.indexOf("13 pro max 512 graphite") != -1) {
    return 20625;
  } else if (name.indexOf("13 pro max 512 blue") != -1) {
    return 20626;
  } else if (name.indexOf("13 pro max 512 silver") != -1) {
    return 20627;
  } else if (name.indexOf("13 pro max 512 green") != -1) {
    return 22204;
  } else if (
    name.indexOf("13 pro max 1tb gold") != -1 ||
    name.indexOf("13 pro max 1tb gold") != -1
  ) {
    return 20632;
  } else if (
    name.indexOf("13 pro max 1tb graphite") != -1 ||
    name.indexOf("13 pro max 1tb graphite") != -1
  ) {
    return 20629;
  } else if (
    name.indexOf("13 pro max 1tb blue") != -1 ||
    name.indexOf("13 pro max 1tb blue") != -1
  ) {
    return 20630;
  } else if (
    name.indexOf("13 pro max 1tb silver") != -1 ||
    name.indexOf("13 pro max 1tb silver") != -1
  ) {
    return 20631;
  } else if (
    name.indexOf("13 pro max 1tb green") != -1 ||
    name.indexOf("13 pro max 1tb green") != -1
  ) {
    return 22202;

    // iphone 14
  } else if (
    name.indexOf("14 128") != -1 &&
    name.indexOf("blue") != -1 &&
    (name.indexOf("🇭🇰") != -1 || name.indexOf("🇨🇳") != -1) &&
    name.indexOf("air") == -1 &&
    name.indexOf("pro") == -1
  ) {
    return 30446;
  } else if (
    name.indexOf("14 128") != -1 &&
    (name.indexOf("midnight") != -1 || name.indexOf("black") != -1) &&
    (name.indexOf("🇭🇰") != -1 || name.indexOf("🇨🇳") != -1) &&
    name.indexOf("air") == -1 &&
    name.indexOf("pro") == -1
  ) {
    return 30447;
  } else if (
    name.indexOf("14 128") != -1 &&
    name.indexOf("purple") != -1 &&
    (name.indexOf("🇭🇰") != -1 || name.indexOf("🇨🇳") != -1) &&
    name.indexOf("air") == -1 &&
    name.indexOf("pro") == -1
  ) {
    return 30448;
  } else if (
    name.indexOf("14 128") != -1 &&
    name.indexOf("red") != -1 &&
    (name.indexOf("🇭🇰") != -1 || name.indexOf("🇨🇳") != -1) &&
    name.indexOf("air") == -1 &&
    name.indexOf("pro") == -1
  ) {
    return 30449;
  } else if (
    name.indexOf("14 128") != -1 &&
    name.indexOf("starlight") != -1 &&
    (name.indexOf("🇭🇰") != -1 || name.indexOf("🇨🇳") != -1) &&
    name.indexOf("air") == -1 &&
    name.indexOf("pro") == -1
  ) {
    return 30450;
  } else if (
    name.indexOf("14 128") != -1 &&
    name.indexOf("yellow") != -1 &&
    (name.indexOf("🇭🇰") != -1 || name.indexOf("🇨🇳") != -1) &&
    name.indexOf("air") == -1 &&
    name.indexOf("pro") == -1
  ) {
    return 30451;
  } else if (
    name.indexOf("14 128 blue") != -1 &&
    name.indexOf("air") == -1 &&
    name.indexOf("pro") == -1
  ) {
    return 23466;
  } else if (
    (name.indexOf("14 128 midnight") != -1 ||
      name.indexOf("14 128 black") != -1) &&
    name.indexOf("air") == -1 &&
    name.indexOf("pro") == -1
  ) {
    return 23465;
  } else if (
    name.indexOf("14 128 purple") != -1 &&
    name.indexOf("air") == -1 &&
    name.indexOf("pro") == -1
  ) {
    return 23464;
  } else if (
    name.indexOf("14 128 red") != -1 &&
    name.indexOf("air") == -1 &&
    name.indexOf("pro") == -1
  ) {
    return 23538;
  } else if (
    name.indexOf("14 128 starlight") != -1 ||
    (name.indexOf("14 128 white") != -1 &&
      name.indexOf("air") == -1 &&
      name.indexOf("pro") == -1)
  ) {
    return 23454;
  } else if (
    name.indexOf("14 128 yellow") != -1 &&
    name.indexOf("air") == -1 &&
    name.indexOf("pro") == -1
  ) {
    return 27181;
  } else if (
    name.indexOf("14 256") != -1 &&
    name.indexOf("blue") != -1 &&
    (name.indexOf("🇭🇰") != -1 || name.indexOf("🇨🇳") != -1) &&
    name.indexOf("air") == -1 &&
    name.indexOf("pro") == -1
  ) {
    return 30452;
  } else if (
    name.indexOf("14 256") != -1 &&
    (name.indexOf("midnight") != -1 || name.indexOf("black") != -1) &&
    (name.indexOf("🇭🇰") != -1 || name.indexOf("🇨🇳") != -1) &&
    name.indexOf("air") == -1 &&
    name.indexOf("pro") == -1
  ) {
    return 30453;
  } else if (
    name.indexOf("14 256") != -1 &&
    name.indexOf("purple") != -1 &&
    (name.indexOf("🇭🇰") != -1 || name.indexOf("🇨🇳") != -1) &&
    name.indexOf("air") == -1 &&
    name.indexOf("pro") == -1
  ) {
    return 30454;
  } else if (
    name.indexOf("14 256") != -1 &&
    name.indexOf("red") != -1 &&
    (name.indexOf("🇭🇰") != -1 || name.indexOf("🇨🇳") != -1) &&
    name.indexOf("air") == -1 &&
    name.indexOf("pro") == -1
  ) {
    return 30455;
  } else if (
    name.indexOf("14 256") != -1 &&
    name.indexOf("starlight") != -1 &&
    (name.indexOf("🇭🇰") != -1 || name.indexOf("🇨🇳") != -1) &&
    name.indexOf("air") == -1 &&
    name.indexOf("pro") == -1
  ) {
    return 30456;
  } else if (
    name.indexOf("14 256") != -1 &&
    name.indexOf("yellow") != -1 &&
    (name.indexOf("🇭🇰") != -1 || name.indexOf("🇨🇳") != -1) &&
    name.indexOf("air") == -1 &&
    name.indexOf("pro") == -1
  ) {
    return 30457;
  } else if (
    name.indexOf("14 256 blue") != -1 &&
    name.indexOf("air") == -1 &&
    name.indexOf("pro") == -1
  ) {
    return 23467;
  } else if (
    (name.indexOf("14 256 midnight") != -1 ||
      name.indexOf("14 256 black") != -1) &&
    name.indexOf("air") == -1 &&
    name.indexOf("pro") == -1
  ) {
    return 23468;
  } else if (
    name.indexOf("14 256 purple") != -1 &&
    name.indexOf("air") == -1 &&
    name.indexOf("pro") == -1
  ) {
    return 23469;
  } else if (
    name.indexOf("14 256 red") != -1 &&
    name.indexOf("air") == -1 &&
    name.indexOf("pro") == -1
  ) {
    return 23539;
  } else if (
    (name.indexOf("14 256 starlight") != -1 ||
      name.indexOf("14 256 white") != -1) &&
    name.indexOf("air") == -1 &&
    name.indexOf("pro") == -1
  ) {
    return 23470;
  } else if (
    name.indexOf("14 256 yellow") != -1 &&
    name.indexOf("air") == -1 &&
    name.indexOf("pro") == -1
  ) {
    return 27183;
  } else if (
    name.indexOf("14 512") != -1 &&
    name.indexOf("blue") != -1 &&
    (name.indexOf("🇭🇰") != -1 || name.indexOf("🇨🇳") != -1) &&
    name.indexOf("air") == -1 &&
    name.indexOf("pro") == -1
  ) {
    return 30458;
  } else if (
    name.indexOf("14 512") != -1 &&
    (name.indexOf("midnight") != -1 || name.indexOf("black") != -1) &&
    (name.indexOf("🇭🇰") != -1 || name.indexOf("🇨🇳") != -1) &&
    name.indexOf("air") == -1 &&
    name.indexOf("pro") == -1
  ) {
    return 30459;
  } else if (
    name.indexOf("14 512") != -1 &&
    name.indexOf("purple") != -1 &&
    (name.indexOf("🇭🇰") != -1 || name.indexOf("🇨🇳") != -1) &&
    name.indexOf("air") == -1 &&
    name.indexOf("pro") == -1
  ) {
    return 30460;
  } else if (
    name.indexOf("14 512") != -1 &&
    name.indexOf("red") != -1 &&
    (name.indexOf("🇭🇰") != -1 || name.indexOf("🇨🇳") != -1) &&
    name.indexOf("air") == -1 &&
    name.indexOf("pro") == -1
  ) {
    return 30461;
  } else if (
    name.indexOf("14 512") != -1 &&
    name.indexOf("starlight") != -1 &&
    (name.indexOf("🇭🇰") != -1 || name.indexOf("🇨🇳") != -1) &&
    name.indexOf("air") == -1 &&
    name.indexOf("pro") == -1
  ) {
    return 30462;
  } else if (
    name.indexOf("14 512") != -1 &&
    name.indexOf("yellow") != -1 &&
    (name.indexOf("🇭🇰") != -1 || name.indexOf("🇨🇳") != -1) &&
    name.indexOf("air") == -1 &&
    name.indexOf("pro") == -1
  ) {
    return 30463;
  } else if (
    name.indexOf("14 512 blue") != -1 &&
    name.indexOf("air") == -1 &&
    name.indexOf("pro") == -1
  ) {
    return 23471;
  } else if (
    (name.indexOf("14 512 midnight") != -1 ||
      name.indexOf("14 512 black") != -1) &&
    name.indexOf("air") == -1 &&
    name.indexOf("pro") == -1
  ) {
    return 23472;
  } else if (
    name.indexOf("14 512 purple") != -1 &&
    name.indexOf("air") == -1 &&
    name.indexOf("pro") == -1
  ) {
    return 23473;
  } else if (
    name.indexOf("14 512 red") != -1 &&
    name.indexOf("air") == -1 &&
    name.indexOf("pro") == -1
  ) {
    return 23540;
  } else if (
    (name.indexOf("14 512 starlight") != -1 ||
      name.indexOf("14 512 white") != -1) &&
    name.indexOf("air") == -1 &&
    name.indexOf("pro") == -1
  ) {
    return 23474;
  } else if (
    name.indexOf("14 512 yellow") != -1 &&
    name.indexOf("air") == -1 &&
    name.indexOf("pro") == -1
  ) {
    return 27182;
  } else if (
    name.indexOf("14 plus 128") != -1 &&
    name.indexOf("blue") != -1 &&
    (name.indexOf("🇭🇰") != -1 || name.indexOf("🇨🇳") != -1)
  ) {
    return 30482;
  } else if (
    name.indexOf("14 plus 128") != -1 &&
    (name.indexOf("midnight") != -1 || name.indexOf("black") != -1) &&
    (name.indexOf("🇭🇰") != -1 || name.indexOf("🇨🇳") != -1)
  ) {
    return 30483;
  } else if (
    name.indexOf("14 plus 128") != -1 &&
    name.indexOf("purple") != -1 &&
    (name.indexOf("🇭🇰") != -1 || name.indexOf("🇨🇳") != -1)
  ) {
    return 30484;
  } else if (
    name.indexOf("14 plus 128") != -1 &&
    name.indexOf("red") != -1 &&
    (name.indexOf("🇭🇰") != -1 || name.indexOf("🇨🇳") != -1)
  ) {
    return 30485;
  } else if (
    name.indexOf("14 plus 128") != -1 &&
    name.indexOf("starlight") != -1 &&
    (name.indexOf("🇭🇰") != -1 || name.indexOf("🇨🇳") != -1)
  ) {
    return 30486;
  } else if (
    name.indexOf("14 plus 128") != -1 &&
    name.indexOf("yellow") != -1 &&
    (name.indexOf("🇭🇰") != -1 || name.indexOf("🇨🇳") != -1)
  ) {
    return 30487;
  } else if (
    name.indexOf("14 plus 128 blue") != -1 ||
    name.indexOf("14 plus 128 blue") != -1
  ) {
    return 23476;
  } else if (
    name.indexOf("14 plus 128 midnight") != -1 ||
    name.indexOf("14 plus 128 midnight") != -1 ||
    name.indexOf("14 plus 128 black") != -1
  ) {
    return 23475;
  } else if (
    name.indexOf("14 plus 128 purple") != -1 ||
    name.indexOf("14 plus 128 purple") != -1
  ) {
    return 23477;
  } else if (
    name.indexOf("14 plus 128 red") != -1 ||
    name.indexOf("14 plus 128 red") != -1
  ) {
    return 23541;
  } else if (
    name.indexOf("14 plus 128 starlight") != -1 ||
    name.indexOf("14 plus 128 starlight") != -1 ||
    name.indexOf("14 plus 128 white") != -1
  ) {
    return 23455;
  } else if (
    name.indexOf("14 plus 128 yellow") != -1 ||
    name.indexOf("14 plus 128 yellow") != -1
  ) {
    return 27186;
  } else if (
    name.indexOf("14 plus 256") != -1 &&
    name.indexOf("blue") != -1 &&
    (name.indexOf("🇭🇰") != -1 || name.indexOf("🇨🇳") != -1)
  ) {
    return 30488;
  } else if (
    name.indexOf("14 plus 256") != -1 &&
    (name.indexOf("midnight") != -1 || name.indexOf("black") != -1) &&
    (name.indexOf("🇭🇰") != -1 || name.indexOf("🇨🇳") != -1)
  ) {
    return 30489;
  } else if (
    name.indexOf("14 plus 256") != -1 &&
    name.indexOf("purple") != -1 &&
    (name.indexOf("🇭🇰") != -1 || name.indexOf("🇨🇳") != -1)
  ) {
    return 30490;
  } else if (
    name.indexOf("14 plus 256") != -1 &&
    name.indexOf("red") != -1 &&
    (name.indexOf("🇭🇰") != -1 || name.indexOf("🇨🇳") != -1)
  ) {
    return 30491;
  } else if (
    name.indexOf("14 plus 256") != -1 &&
    name.indexOf("starlight") != -1 &&
    (name.indexOf("🇭🇰") != -1 || name.indexOf("🇨🇳") != -1)
  ) {
    return 30492;
  } else if (
    name.indexOf("14 plus 256") != -1 &&
    name.indexOf("yellow") != -1 &&
    (name.indexOf("🇭🇰") != -1 || name.indexOf("🇨🇳") != -1)
  ) {
    return 30493;
  } else if (
    name.indexOf("14 plus 256 blue") != -1 ||
    name.indexOf("14 plus 256 blue") != -1
  ) {
    return 23478;
  } else if (
    name.indexOf("14 plus 256 midnight") != -1 ||
    name.indexOf("14 plus 256 midnight") != -1 ||
    name.indexOf("14 plus 256 black") != -1
  ) {
    return 23479;
  } else if (
    name.indexOf("14 plus 256 purple") != -1 ||
    name.indexOf("14 plus 256 purple") != -1
  ) {
    return 23482;
  } else if (
    name.indexOf("14 plus 256 red") != -1 ||
    name.indexOf("14 plus 256 red") != -1
  ) {
    return 23542;
  } else if (
    name.indexOf("14 plus 256 starlight") != -1 ||
    name.indexOf("14 plus 256 starlight") != -1 ||
    name.indexOf("14 plus 256 white") != -1
  ) {
    return 23480;
  } else if (
    name.indexOf("14 plus 256 yellow") != -1 ||
    name.indexOf("14 plus 256 yellow") != -1
  ) {
    return 27185;
  } else if (
    name.indexOf("14 plus 512") != -1 &&
    name.indexOf("blue") != -1 &&
    (name.indexOf("🇭🇰") != -1 || name.indexOf("🇨🇳") != -1)
  ) {
    return 30494;
  } else if (
    name.indexOf("14 plus 512") != -1 &&
    (name.indexOf("midnight") != -1 || name.indexOf("black") != -1) &&
    (name.indexOf("🇭🇰") != -1 || name.indexOf("🇨🇳") != -1)
  ) {
    return 30495;
  } else if (
    name.indexOf("14 plus 512") != -1 &&
    name.indexOf("purple") != -1 &&
    (name.indexOf("🇭🇰") != -1 || name.indexOf("🇨🇳") != -1)
  ) {
    return 30496;
  } else if (
    name.indexOf("14 plus 512") != -1 &&
    name.indexOf("red") != -1 &&
    (name.indexOf("🇭🇰") != -1 || name.indexOf("🇨🇳") != -1)
  ) {
    return 30497;
  } else if (
    name.indexOf("14 plus 512") != -1 &&
    name.indexOf("starlight") != -1 &&
    (name.indexOf("🇭🇰") != -1 || name.indexOf("🇨🇳") != -1)
  ) {
    return 30498;
  } else if (
    name.indexOf("14 plus 512") != -1 &&
    name.indexOf("yellow") != -1 &&
    (name.indexOf("🇭🇰") != -1 || name.indexOf("🇨🇳") != -1)
  ) {
    return 30499;
  } else if (
    name.indexOf("14 plus 512 blue") != -1 ||
    name.indexOf("14 plus 512 blue") != -1
  ) {
    return 23483;
  } else if (
    name.indexOf("14 plus 512 midnight") != -1 ||
    name.indexOf("14 plus 512 midnight") != -1 ||
    name.indexOf("14 plus 512 black") != -1
  ) {
    return 23484;
  } else if (
    name.indexOf("14 plus 512 purple") != -1 ||
    name.indexOf("14 plus 512 purple") != -1
  ) {
    return 23485;
  } else if (
    name.indexOf("14 plus 512 red") != -1 ||
    name.indexOf("14 plus 512 red") != -1
  ) {
    return 23543;
  } else if (
    name.indexOf("14 plus 512 starlight") != -1 ||
    name.indexOf("14 plus 512 starlight") != -1 ||
    name.indexOf("14 plus 512 white") != -1
  ) {
    return 23486;
  } else if (
    name.indexOf("14 plus 512 yellow") != -1 ||
    name.indexOf("14 plus 512 yellow") != -1
  ) {
    return 27184;
  } else if (
    name.indexOf("14 pro 1tb") != -1 &&
    name.indexOf("purple") != -1 &&
    (name.indexOf("🇭🇰") != -1 || name.indexOf("🇨🇳") != -1)
  ) {
    return 30516;
  } else if (
    name.indexOf("14 pro 1tb") != -1 &&
    name.indexOf("gold") != -1 &&
    (name.indexOf("🇭🇰") != -1 || name.indexOf("🇨🇳") != -1)
  ) {
    return 30517;
  } else if (
    name.indexOf("14 pro 1tb") != -1 &&
    name.indexOf("silver") != -1 &&
    (name.indexOf("🇭🇰") != -1 || name.indexOf("🇨🇳") != -1)
  ) {
    return 30518;
  } else if (
    name.indexOf("14 pro 1tb") != -1 &&
    (name.indexOf("midnight") != -1 || name.indexOf("black") != -1) &&
    (name.indexOf("🇭🇰") != -1 || name.indexOf("🇨🇳") != -1)
  ) {
    return 30519;
  } else if (
    name.indexOf("14 pro 1tb purple") != -1 ||
    name.indexOf("14 pro 1tb purple") != -1
  ) {
    return 23498;
  } else if (
    name.indexOf("14 pro 1tb gold") != -1 ||
    name.indexOf("14 pro 1tb gold") != -1
  ) {
    return 23499;
  } else if (
    name.indexOf("14 pro 1tb silver") != -1 ||
    name.indexOf("14 pro 1tb silver") != -1
  ) {
    return 23500;
  } else if (
    name.indexOf("14 pro 1tb black") != -1 ||
    name.indexOf("14 pro 1tb black") != -1 ||
    name.indexOf("14 plus 1tb black") != -1
  ) {
    return 23501;
  } else if (
    name.indexOf("14 pro 128") != -1 &&
    name.indexOf("purple") != -1 &&
    (name.indexOf("🇭🇰") != -1 || name.indexOf("🇨🇳") != -1)
  ) {
    return 30520;
  } else if (
    name.indexOf("14 pro 128") != -1 &&
    name.indexOf("gold") != -1 &&
    (name.indexOf("🇭🇰") != -1 || name.indexOf("🇨🇳") != -1)
  ) {
    return 30521;
  } else if (
    name.indexOf("14 pro 128") != -1 &&
    name.indexOf("silver") != -1 &&
    (name.indexOf("🇭🇰") != -1 || name.indexOf("🇨🇳") != -1)
  ) {
    return 30522;
  } else if (
    name.indexOf("14 pro 128") != -1 &&
    name.indexOf("black") != -1 &&
    (name.indexOf("🇭🇰") != -1 || name.indexOf("🇨🇳") != -1)
  ) {
    return 30523;
  } else if (name.indexOf("14 pro 128 gold") != -1) {
    return 23487;
  } else if (name.indexOf("14 pro 128 purple") != -1) {
    return 23488;
  } else if (name.indexOf("14 pro 128 silver") != -1) {
    return 23489;
  } else if (name.indexOf("14 pro 128 black") != -1) {
    return 23456;
  } else if (
    name.indexOf("14 pro 256") != -1 &&
    name.indexOf("purple") != -1 &&
    (name.indexOf("🇭🇰") != -1 || name.indexOf("🇨🇳") != -1)
  ) {
    return 30524;
  } else if (
    name.indexOf("14 pro 256") != -1 &&
    name.indexOf("gold") != -1 &&
    (name.indexOf("🇭🇰") != -1 || name.indexOf("🇨🇳") != -1)
  ) {
    return 30525;
  } else if (
    name.indexOf("14 pro 256") != -1 &&
    name.indexOf("silver") != -1 &&
    (name.indexOf("🇭🇰") != -1 || name.indexOf("🇨🇳") != -1)
  ) {
    return 30526;
  } else if (
    name.indexOf("14 pro 256") != -1 &&
    (name.indexOf("midnight") != -1 || name.indexOf("black") != -1) &&
    (name.indexOf("🇭🇰") != -1 || name.indexOf("🇨🇳") != -1)
  ) {
    return 30527;
  } else if (name.indexOf("14 pro 256 gold") != -1) {
    return 23491;
  } else if (name.indexOf("14 pro 256 purple") != -1) {
    return 23490;
  } else if (name.indexOf("14 pro 256 silver") != -1) {
    return 23492;
  } else if (name.indexOf("14 pro 256 black") != -1) {
    return 23493;
  } else if (
    name.indexOf("14 pro 512") != -1 &&
    name.indexOf("purple") != -1 &&
    (name.indexOf("🇭🇰") != -1 || name.indexOf("🇨🇳") != -1)
  ) {
    return 30528;
  } else if (
    name.indexOf("14 pro 512") != -1 &&
    name.indexOf("gold") != -1 &&
    (name.indexOf("🇭🇰") != -1 || name.indexOf("🇨🇳") != -1)
  ) {
    return 30529;
  } else if (
    name.indexOf("14 pro 512") != -1 &&
    name.indexOf("silver") != -1 &&
    (name.indexOf("🇭🇰") != -1 || name.indexOf("🇨🇳") != -1)
  ) {
    return 30530;
  } else if (
    name.indexOf("14 pro 512") != -1 &&
    (name.indexOf("midnight") != -1 || name.indexOf("black") != -1) &&
    (name.indexOf("🇭🇰") != -1 || name.indexOf("🇨🇳") != -1)
  ) {
    return 30531;
  } else if (name.indexOf("14 pro 512 gold") != -1) {
    return 23495;
  } else if (name.indexOf("14 pro 512 purple") != -1) {
    return 23494;
  } else if (name.indexOf("14 pro 512 silver") != -1) {
    return 23496;
  } else if (name.indexOf("14 pro 512 black") != -1) {
    return 23497;
  } else if (
    name.indexOf("14 pro max 1tb") != -1 &&
    name.indexOf("purple") != -1 &&
    (name.indexOf("🇭🇰") != -1 || name.indexOf("🇨🇳") != -1)
  ) {
    return 30548;
  } else if (
    name.indexOf("14 pro max 1tb") != -1 &&
    name.indexOf("gold") != -1 &&
    (name.indexOf("🇭🇰") != -1 || name.indexOf("🇨🇳") != -1)
  ) {
    return 30549;
  } else if (
    name.indexOf("14 pro max 1tb") != -1 &&
    name.indexOf("silver") != -1 &&
    (name.indexOf("🇭🇰") != -1 || name.indexOf("🇨🇳") != -1)
  ) {
    return 30550;
  } else if (
    name.indexOf("14 pro max 1tb") != -1 &&
    (name.indexOf("midnight") != -1 || name.indexOf("black") != -1) &&
    (name.indexOf("🇭🇰") != -1 || name.indexOf("🇨🇳") != -1)
  ) {
    return 30551;
  } else if (
    name.indexOf("14 pro max 1tb purple") != -1 ||
    name.indexOf("14 pro max 1tb purple") != -1
  ) {
    return 23513;
  } else if (
    name.indexOf("14 pro max 1tb gold") != -1 ||
    name.indexOf("14 pro max 1tb gold") != -1
  ) {
    return 23514;
  } else if (
    name.indexOf("14 pro max 1tb silver") != -1 ||
    name.indexOf("14 pro max 1tb silver") != -1
  ) {
    return 23515;
  } else if (
    name.indexOf("14 pro max 1tb black") != -1 ||
    name.indexOf("14 pro max 1tb black") != -1
  ) {
    return 23516;
  } else if (
    name.indexOf("14 pro max 128") != -1 &&
    name.indexOf("purple") != -1 &&
    (name.indexOf("🇭🇰") != -1 || name.indexOf("🇨🇳") != -1)
  ) {
    return 30552;
  } else if (
    name.indexOf("14 pro max 128") != -1 &&
    name.indexOf("gold") != -1 &&
    (name.indexOf("🇭🇰") != -1 || name.indexOf("🇨🇳") != -1)
  ) {
    return 30553;
  } else if (
    name.indexOf("14 pro max 128") != -1 &&
    name.indexOf("silver") != -1 &&
    (name.indexOf("🇭🇰") != -1 || name.indexOf("🇨🇳") != -1)
  ) {
    return 30554;
  } else if (
    name.indexOf("14 pro max 128") != -1 &&
    (name.indexOf("midnight") != -1 || name.indexOf("black") != -1) &&
    (name.indexOf("🇭🇰") != -1 || name.indexOf("🇨🇳") != -1)
  ) {
    return 30555;
  } else if (name.indexOf("14 pro max 128 gold") != -1) {
    return 23502;
  } else if (name.indexOf("14 pro max 128 purple") != -1) {
    return 23503;
  } else if (name.indexOf("14 pro max 128 silver") != -1) {
    return 23504;
  } else if (name.indexOf("14 pro max 128 black") != -1) {
    return 23457;
  } else if (
    name.indexOf("14 pro max 256") != -1 &&
    name.indexOf("purple") != -1 &&
    (name.indexOf("🇭🇰") != -1 || name.indexOf("🇨🇳") != -1)
  ) {
    return 30556;
  } else if (
    name.indexOf("14 pro max 256") != -1 &&
    name.indexOf("gold") != -1 &&
    (name.indexOf("🇭🇰") != -1 || name.indexOf("🇨🇳") != -1)
  ) {
    return 30557;
  } else if (
    name.indexOf("14 pro max 256") != -1 &&
    name.indexOf("silver") != -1 &&
    (name.indexOf("🇭🇰") != -1 || name.indexOf("🇨🇳") != -1)
  ) {
    return 30558;
  } else if (
    name.indexOf("14 pro max 256") != -1 &&
    (name.indexOf("midnight") != -1 || name.indexOf("black") != -1) &&
    (name.indexOf("🇭🇰") != -1 || name.indexOf("🇨🇳") != -1)
  ) {
    return 30559;
  } else if (name.indexOf("14 pro max 256 gold") != -1) {
    return 23506;
  } else if (name.indexOf("14 pro max 256 purple") != -1) {
    return 23505;
  } else if (name.indexOf("14 pro max 256 silver") != -1) {
    return 23507;
  } else if (name.indexOf("14 pro max 256 black") != -1) {
    return 23508;
  } else if (
    name.indexOf("14 pro max 512") != -1 &&
    name.indexOf("purple") != -1 &&
    (name.indexOf("🇭🇰") != -1 || name.indexOf("🇨🇳") != -1)
  ) {
    return 30560;
  } else if (
    name.indexOf("14 pro max 512") != -1 &&
    name.indexOf("gold") != -1 &&
    (name.indexOf("🇭🇰") != -1 || name.indexOf("🇨🇳") != -1)
  ) {
    return 30561;
  } else if (
    name.indexOf("14 pro max 512") != -1 &&
    (name.indexOf("silver") != -1 || name.indexOf("white") != -1) &&
    (name.indexOf("🇭🇰") != -1 || name.indexOf("🇨🇳") != -1)
  ) {
    return 30562;
  } else if (
    name.indexOf("14 pro max 512") != -1 &&
    (name.indexOf("midnight") != -1 || name.indexOf("black") != -1) &&
    (name.indexOf("🇭🇰") != -1 || name.indexOf("🇨🇳") != -1)
  ) {
    return 30563;
  } else if (name.indexOf("14 pro max 512 gold") != -1) {
    return 23510;
  } else if (name.indexOf("14 pro max 512 purple") != -1) {
    return 23509;
  } else if (
    name.indexOf("14 pro max 512") != -1 &&
    (name.indexOf("silver") != -1 || name.indexOf("white") != -1)
  ) {
    return 23511;
  } else if (name.indexOf("14 pro max 512 black") != -1) {
    return 23512;

    // iphone 15
  } else if (
    (name.indexOf("15 128") != -1 &&
      name.indexOf(" black ") != -1 &&
      name.indexOf("🇨🇳") != -1) ||
    (name.indexOf("15 128") != -1 &&
      name.indexOf("midnight") != -1 &&
      name.indexOf("🇨🇳") != -1) ||
    (name.indexOf("15 128") != -1 &&
      name.indexOf(" black ") != -1 &&
      name.indexOf("🇭🇰") != -1) ||
    (name.indexOf("15 128") != -1 &&
      name.indexOf("midnight") != -1 &&
      name.indexOf("🇭🇰") != -1)
  ) {
    return 30370;
  } else if (
    (name.indexOf("15 128") != -1 &&
      name.indexOf("blue") != -1 &&
      name.indexOf("🇨🇳") != -1) ||
    (name.indexOf("15 128") != -1 &&
      name.indexOf("blue") != -1 &&
      name.indexOf("🇭🇰") != -1)
  ) {
    return 30371;
  } else if (
    (name.indexOf("15 128") != -1 &&
      name.indexOf(" green ") != -1 &&
      name.indexOf("🇨🇳") != -1) ||
    (name.indexOf("15 128") != -1 &&
      name.indexOf("green") != -1 &&
      name.indexOf("🇭🇰") != -1)
  ) {
    return 30372;
  } else if (
    (name.indexOf("15 128") != -1 &&
      name.indexOf(" pink ") != -1 &&
      name.indexOf("🇨🇳") != -1) ||
    (name.indexOf("15 128") != -1 &&
      name.indexOf("pink") != -1 &&
      name.indexOf("🇭🇰") != -1)
  ) {
    return 30373;
  } else if (
    (name.indexOf("15 128") != -1 &&
      name.indexOf(" yellow ") != -1 &&
      name.indexOf("🇨🇳") != -1) ||
    (name.indexOf("15 128") != -1 &&
      name.indexOf("yellow") != -1 &&
      name.indexOf("🇭🇰") != -1)
  ) {
    return 30374;
  } else if (
    name.indexOf("15 128 black") != -1 ||
    name.indexOf("15 128 midnight") != -1
  ) {
    return 28224;
  } else if (name.indexOf("15 128 blue") != -1) {
    return 28227;
  } else if (name.indexOf("15 128 green") != -1) {
    return 28230;
  } else if (name.indexOf("15 128 pink") != -1) {
    return 28236;
  } else if (name.indexOf("15 128 yellow") != -1) {
    return 28233;
  } else if (
    (name.indexOf("15 256") != -1 &&
      name.indexOf(" black ") != -1 &&
      name.indexOf("🇨🇳") != -1) ||
    (name.indexOf("15 256") != -1 &&
      name.indexOf("midnight") != -1 &&
      name.indexOf("🇨🇳") != -1) ||
    (name.indexOf("15 256") != -1 &&
      name.indexOf(" black ") != -1 &&
      name.indexOf("🇭🇰") != -1) ||
    (name.indexOf("15 256") != -1 &&
      name.indexOf("midnight") != -1 &&
      name.indexOf("🇭🇰") != -1)
  ) {
    return 30375;
  } else if (
    (name.indexOf("15 256") != -1 &&
      name.indexOf("blue") != -1 &&
      name.indexOf("🇨🇳") != -1) ||
    (name.indexOf("15 256") != -1 &&
      name.indexOf("blue") != -1 &&
      name.indexOf("🇭🇰") != -1)
  ) {
    return 30376;
  } else if (
    (name.indexOf("15 256") != -1 &&
      name.indexOf("green") != -1 &&
      name.indexOf("🇨🇳") != -1) ||
    (name.indexOf("15 256") != -1 &&
      name.indexOf("green") != -1 &&
      name.indexOf("🇭🇰") != -1)
  ) {
    return 30377;
  } else if (
    (name.indexOf("15 256") != -1 &&
      name.indexOf("pink") != -1 &&
      name.indexOf("🇨🇳") != -1) ||
    (name.indexOf("15 256") != -1 &&
      name.indexOf("pink") != -1 &&
      name.indexOf("🇭🇰") != -1)
  ) {
    return 30378;
  } else if (
    (name.indexOf("15 256") != -1 &&
      name.indexOf("yellow") != -1 &&
      name.indexOf("🇨🇳") != -1) ||
    (name.indexOf("15 256") != -1 &&
      name.indexOf("yellow") != -1 &&
      name.indexOf("🇭🇰") != -1)
  ) {
    return 30379;
  } else if (
    name.indexOf("15 256 black") != -1 ||
    name.indexOf("15 256 midnight") != -1
  ) {
    return 28225;
  } else if (name.indexOf("15 256 blue") != -1) {
    return 28228;
  } else if (name.indexOf("15 256 green") != -1) {
    return 28231;
  } else if (name.indexOf("15 256 pink") != -1) {
    return 28237;
  } else if (name.indexOf("15 256 yellow") != -1) {
    return 28234;
  } else if (
    (name.indexOf("15 512") != -1 &&
      name.indexOf(" black ") != -1 &&
      name.indexOf("🇨🇳") != -1) ||
    (name.indexOf("15 512") != -1 &&
      name.indexOf("midnight") != -1 &&
      name.indexOf("🇨🇳") != -1) ||
    (name.indexOf("15 512") != -1 &&
      name.indexOf(" black ") != -1 &&
      name.indexOf("🇭🇰") != -1) ||
    (name.indexOf("15 512") != -1 &&
      name.indexOf("midnight") != -1 &&
      name.indexOf("🇭🇰") != -1)
  ) {
    return 30380;
  } else if (
    (name.indexOf("15 512") != -1 &&
      name.indexOf("blue") != -1 &&
      name.indexOf("🇨🇳") != -1) ||
    (name.indexOf("15 512") != -1 &&
      name.indexOf("blue") != -1 &&
      name.indexOf("🇭🇰") != -1)
  ) {
    return 30381;
  } else if (
    (name.indexOf("15 512") != -1 &&
      name.indexOf("green") != -1 &&
      name.indexOf("🇨🇳") != -1) ||
    (name.indexOf("15 512") != -1 &&
      name.indexOf("green") != -1 &&
      name.indexOf("🇭🇰") != -1)
  ) {
    return 30382;
  } else if (
    (name.indexOf("15 512") != -1 &&
      name.indexOf("pink") != -1 &&
      name.indexOf("🇨🇳") != -1) ||
    (name.indexOf("15 512") != -1 &&
      name.indexOf("pink") != -1 &&
      name.indexOf("🇭🇰") != -1)
  ) {
    return 30383;
  } else if (
    (name.indexOf("15 512") != -1 &&
      name.indexOf("yellow") != -1 &&
      name.indexOf("🇨🇳") != -1) ||
    (name.indexOf("15 512") != -1 &&
      name.indexOf("yellow") != -1 &&
      name.indexOf("🇭🇰") != -1)
  ) {
    return 30384;
  } else if (
    name.indexOf("15 512 black") != -1 ||
    name.indexOf("15 512 midnight") != -1
  ) {
    return 28226;
  } else if (name.indexOf("15 512 blue") != -1) {
    return 28229;
  } else if (name.indexOf("15 512 green") != -1) {
    return 28232;
  } else if (name.indexOf("15 512 pink") != -1) {
    return 28238;
  } else if (name.indexOf("15 512 yellow") != -1) {
    return 28235;
  } else if (
    (name.indexOf("15 plus 128") != -1 &&
      name.indexOf(" black ") != -1 &&
      name.indexOf("🇨🇳") != -1) ||
    (name.indexOf("15 plus 128") != -1 &&
      name.indexOf("midnight") != -1 &&
      name.indexOf("🇨🇳") != -1) ||
    (name.indexOf("15 plus 128") != -1 &&
      name.indexOf(" black ") != -1 &&
      name.indexOf("🇭🇰") != -1) ||
    (name.indexOf("15 plus 128") != -1 &&
      name.indexOf("midnight") != -1 &&
      name.indexOf("🇭🇰") != -1)
  ) {
    return 30385;
  } else if (
    (name.indexOf("15 plus 128") != -1 &&
      name.indexOf("blue") != -1 &&
      name.indexOf("🇨🇳") != -1) ||
    (name.indexOf("15 plus 128") != -1 &&
      name.indexOf("blue") != -1 &&
      name.indexOf("🇭🇰") != -1)
  ) {
    return 30386;
  } else if (
    (name.indexOf("15 plus 128") != -1 &&
      name.indexOf("green") != -1 &&
      name.indexOf("🇨🇳") != -1) ||
    (name.indexOf("15 plus 128") != -1 &&
      name.indexOf("green") != -1 &&
      name.indexOf("🇭🇰") != -1)
  ) {
    return 30387;
  } else if (
    (name.indexOf("15 plus 128") != -1 &&
      name.indexOf("pink") != -1 &&
      name.indexOf("🇨🇳") != -1) ||
    (name.indexOf("15 plus 128") != -1 &&
      name.indexOf("pink") != -1 &&
      name.indexOf("🇭🇰") != -1)
  ) {
    return 30388;
  } else if (
    (name.indexOf("15 plus 128") != -1 &&
      name.indexOf("yellow") != -1 &&
      name.indexOf("🇨🇳") != -1) ||
    (name.indexOf("15 plus 128") != -1 &&
      name.indexOf("yellow") != -1 &&
      name.indexOf("🇭🇰") != -1)
  ) {
    return 30389;
  } else if (
    name.indexOf("15 plus 128 yellow 🇺🇸") != -1 ||
    name.indexOf("15 plus 128 yellow 🇺🇸") != -1 ||
    name.indexOf("15 plus 128 yellow🇺🇸") != -1
  ) {
    return 30331;
  } else if (
    name.indexOf("15 plus 128 black") != -1 ||
    name.indexOf("15 plus 128 midnight") != -1
  ) {
    return 28239;
  } else if (name.indexOf("15 plus 128 blue") != -1) {
    return 28242;
  } else if (name.indexOf("15 plus 128 green") != -1) {
    return 28245;
  } else if (name.indexOf("15 plus 128 pink") != -1) {
    return 28248;
  } else if (name.indexOf("15 plus 128 yellow") != -1) {
    return 28251;
  } else if (
    (name.indexOf("15 plus 256") != -1 &&
      name.indexOf(" black ") != -1 &&
      name.indexOf("🇨🇳") != -1) ||
    (name.indexOf("15 plus 256") != -1 &&
      name.indexOf("midnight") != -1 &&
      name.indexOf("🇨🇳") != -1) ||
    (name.indexOf("15 plus 256") != -1 &&
      name.indexOf(" black ") != -1 &&
      name.indexOf("🇭🇰") != -1) ||
    (name.indexOf("15 plus 256") != -1 &&
      name.indexOf("midnight") != -1 &&
      name.indexOf("🇭🇰") != -1)
  ) {
    return 30390;
  } else if (
    (name.indexOf("15 plus 256") != -1 &&
      name.indexOf("blue") != -1 &&
      name.indexOf("🇨🇳") != -1) ||
    (name.indexOf("15 plus 256") != -1 &&
      name.indexOf("blue") != -1 &&
      name.indexOf("🇭🇰") != -1)
  ) {
    return 30391;
  } else if (
    (name.indexOf("15 plus 256") != -1 &&
      name.indexOf("green") != -1 &&
      name.indexOf("🇨🇳") != -1) ||
    (name.indexOf("15 plus 256") != -1 &&
      name.indexOf("green") != -1 &&
      name.indexOf("🇭🇰") != -1)
  ) {
    return 30392;
  } else if (
    (name.indexOf("15 plus 256") != -1 &&
      name.indexOf("pink") != -1 &&
      name.indexOf("🇨🇳") != -1) ||
    (name.indexOf("15 plus 256") != -1 &&
      name.indexOf("pink") != -1 &&
      name.indexOf("🇭🇰") != -1)
  ) {
    return 30393;
  } else if (
    (name.indexOf("15 plus 256") != -1 &&
      name.indexOf("yellow") != -1 &&
      name.indexOf("🇨🇳") != -1) ||
    (name.indexOf("15 plus 256") != -1 &&
      name.indexOf("yellow") != -1 &&
      name.indexOf("🇭🇰") != -1)
  ) {
    return 30394;
  } else if (
    name.indexOf("15 plus 256 black") != -1 ||
    name.indexOf("15 plus 256 midnight") != -1
  ) {
    return 28240;
  } else if (name.indexOf("15 plus 256 blue") != -1) {
    return 28243;
  } else if (name.indexOf("15 plus 256 green") != -1) {
    return 28246;
  } else if (name.indexOf("15 plus 256 pink") != -1) {
    return 28249;
  } else if (name.indexOf("15 plus 256 yellow") != -1) {
    return 28252;
  } else if (
    (name.indexOf("15 plus 512") != -1 &&
      name.indexOf(" black ") != -1 &&
      name.indexOf("🇨🇳") != -1) ||
    (name.indexOf("15 plus 512") != -1 &&
      name.indexOf("midnight") != -1 &&
      name.indexOf("🇨🇳") != -1) ||
    (name.indexOf("15 plus 512") != -1 &&
      name.indexOf(" black ") != -1 &&
      name.indexOf("🇭🇰") != -1) ||
    (name.indexOf("15 plus 512") != -1 &&
      name.indexOf("midnight") != -1 &&
      name.indexOf("🇭🇰") != -1)
  ) {
    return 30395;
  } else if (
    (name.indexOf("15 plus 512") != -1 &&
      name.indexOf("blue") != -1 &&
      name.indexOf("🇨🇳") != -1) ||
    (name.indexOf("15 plus 512") != -1 &&
      name.indexOf("blue") != -1 &&
      name.indexOf("🇭🇰") != -1)
  ) {
    return 30396;
  } else if (
    (name.indexOf("15 plus 512") != -1 &&
      name.indexOf("green") != -1 &&
      name.indexOf("🇨🇳") != -1) ||
    (name.indexOf("15 plus 512") != -1 &&
      name.indexOf("green") != -1 &&
      name.indexOf("🇭🇰") != -1)
  ) {
    return 30397;
  } else if (
    (name.indexOf("15 plus 512") != -1 &&
      name.indexOf("pink") != -1 &&
      name.indexOf("🇨🇳") != -1) ||
    (name.indexOf("15 plus 512") != -1 &&
      name.indexOf("pink") != -1 &&
      name.indexOf("🇭🇰") != -1)
  ) {
    return 30398;
  } else if (
    (name.indexOf("15 plus 512") != -1 &&
      name.indexOf("yellow") != -1 &&
      name.indexOf("🇨🇳") != -1) ||
    (name.indexOf("15 plus 512") != -1 &&
      name.indexOf("yellow") != -1 &&
      name.indexOf("🇭🇰") != -1)
  ) {
    return 30399;
  } else if (
    name.indexOf("15 plus 512 black") != -1 ||
    name.indexOf("15 plus 512 midnight") != -1
  ) {
    return 28241;
  } else if (name.indexOf("15 plus 512 blue") != -1) {
    return 28244;
  } else if (name.indexOf("15 plus 512 green") != -1) {
    return 28247;
  } else if (name.indexOf("15 plus 512 pink") != -1) {
    return 28250;
  } else if (name.indexOf("15 plus 512 yellow") != -1) {
    return 28253;
  } else if (
    (name.indexOf("15 pro 1tb") != -1 &&
      name.indexOf("black") != -1 &&
      name.indexOf("🇨🇳") != -1) ||
    (name.indexOf("15 pro 1tb") != -1 &&
      name.indexOf("black") != -1 &&
      name.indexOf("🇭🇰") != -1)
  ) {
    return 30400;
  } else if (
    (name.indexOf("15 pro 1tb") != -1 &&
      name.indexOf("blue") != -1 &&
      name.indexOf("🇨🇳") != -1) ||
    (name.indexOf("15 pro 1tb") != -1 &&
      name.indexOf("blue") != -1 &&
      name.indexOf("🇭🇰") != -1)
  ) {
    return 30401;
  } else if (
    (name.indexOf("15 pro 1tb") != -1 &&
      name.indexOf("natural") != -1 &&
      name.indexOf("🇨🇳") != -1) ||
    (name.indexOf("15 pro 1tb") != -1 &&
      name.indexOf("natural") != -1 &&
      name.indexOf("🇭🇰") != -1)
  ) {
    return 30402;
  } else if (
    (name.indexOf("15 pro 1tb") != -1 &&
      name.indexOf("white") != -1 &&
      name.indexOf("🇨🇳") != -1) ||
    (name.indexOf("15 pro 1tb") != -1 &&
      name.indexOf("white") != -1 &&
      name.indexOf("🇭🇰") != -1)
  ) {
    return 30403;
  } else if (
    name.indexOf("15 pro 1tb black ") != -1 ||
    name.indexOf("15 pro 1tb black ") != -1
  ) {
    return 28257;
  } else if (
    name.indexOf("15 pro 1tb blue ") != -1 ||
    name.indexOf("15 pro 1tb blue ") != -1
  ) {
    return 28258;
  } else if (
    name.indexOf("15 pro 1tb natural ") != -1 ||
    name.indexOf("15 pro 1tb natural ") != -1
  ) {
    return 28262;
  } else if (
    name.indexOf("15 pro 1tb white ") != -1 ||
    name.indexOf("15 pro 1tb white ") != -1
  ) {
    return 28266;
  } else if (
    (name.indexOf("15 pro 128") != -1 &&
      name.indexOf("black") != -1 &&
      name.indexOf("🇨🇳") != -1) ||
    (name.indexOf("15 pro 128") != -1 &&
      name.indexOf("black") != -1 &&
      name.indexOf("🇭🇰") != -1)
  ) {
    return 30404;
  } else if (
    (name.indexOf("15 pro 128") != -1 &&
      name.indexOf("blue") != -1 &&
      name.indexOf("🇨🇳") != -1) ||
    (name.indexOf("15 pro 128") != -1 &&
      name.indexOf("blue") != -1 &&
      name.indexOf("🇭🇰") != -1)
  ) {
    return 30405;
  } else if (
    (name.indexOf("15 pro 128") != -1 &&
      name.indexOf("natural") != -1 &&
      name.indexOf("🇨🇳") != -1) ||
    (name.indexOf("15 pro 128") != -1 &&
      name.indexOf("natural") != -1 &&
      name.indexOf("🇭🇰") != -1)
  ) {
    return 30406;
  } else if (
    (name.indexOf("15 pro 128") != -1 &&
      name.indexOf("white") != -1 &&
      name.indexOf("🇨🇳") != -1) ||
    (name.indexOf("15 pro 128") != -1 &&
      name.indexOf("white") != -1 &&
      name.indexOf("🇭🇰") != -1)
  ) {
    return 30407;
  } else if (name.indexOf("15 pro 128 blue") != -1) {
    return 28259;
  } else if (name.indexOf("15 pro 128 natural") != -1) {
    return 28263;
  } else if (name.indexOf("15 pro 128 white") != -1) {
    return 28267;
  } else if (
    (name.indexOf("15 pro 256") != -1 &&
      name.indexOf("black") != -1 &&
      name.indexOf("🇨🇳") != -1) ||
    (name.indexOf("15 pro 256") != -1 &&
      name.indexOf("black") != -1 &&
      name.indexOf("🇭🇰") != -1)
  ) {
    return 30408;
  } else if (
    (name.indexOf("15 pro 256") != -1 &&
      name.indexOf("blue") != -1 &&
      name.indexOf("🇨🇳") != -1) ||
    (name.indexOf("15 pro 256") != -1 &&
      name.indexOf("blue") != -1 &&
      name.indexOf("🇭🇰") != -1)
  ) {
    return 30409;
  } else if (
    (name.indexOf("15 pro 256") != -1 &&
      name.indexOf("natural") != -1 &&
      name.indexOf("🇨🇳") != -1) ||
    (name.indexOf("15 pro 256") != -1 &&
      name.indexOf("natural") != -1 &&
      name.indexOf("🇭🇰") != -1)
  ) {
    return 30410;
  } else if (
    (name.indexOf("15 pro 256") != -1 &&
      name.indexOf("white") != -1 &&
      name.indexOf("🇭🇰") != -1) ||
    (name.indexOf("15 pro 256") != -1 &&
      name.indexOf("white") != -1 &&
      name.indexOf("🇨🇳") != -1)
  ) {
    return 30411;
  } else if (name.indexOf("15 pro 256 blue ") != -1) {
    return 28260;
  } else if (name.indexOf("15 pro 256 natural ") != -1) {
    return 28264;
  } else if (name.indexOf("15 pro 256 white ") != -1) {
    return 28268;
  } else if (
    (name.indexOf("15 pro 512") != -1 &&
      name.indexOf("black") != -1 &&
      name.indexOf("🇨🇳") != -1) ||
    (name.indexOf("15 pro 512") != -1 &&
      name.indexOf("black") != -1 &&
      name.indexOf("🇭🇰") != -1)
  ) {
    return 30412;
  } else if (
    (name.indexOf("15 pro 512") != -1 &&
      name.indexOf("blue") != -1 &&
      name.indexOf("🇨🇳") != -1) ||
    (name.indexOf("15 pro 512") != -1 &&
      name.indexOf("blue") != -1 &&
      name.indexOf("🇭🇰") != -1)
  ) {
    return 30413;
  } else if (
    (name.indexOf("15 pro 512") != -1 &&
      name.indexOf("natural") != -1 &&
      name.indexOf("🇨🇳") != -1) ||
    (name.indexOf("15 pro 512") != -1 &&
      name.indexOf("natural") != -1 &&
      name.indexOf("🇭🇰") != -1)
  ) {
    return 30414;
  } else if (
    (name.indexOf("15 pro 512") != -1 &&
      name.indexOf("white") != -1 &&
      name.indexOf("🇨🇳") != -1) ||
    (name.indexOf("15 pro 512") != -1 &&
      name.indexOf("white") != -1 &&
      name.indexOf("🇭🇰") != -1)
  ) {
    return 30415;
  } else if (name.indexOf("15 pro 512 blue") != -1) {
    return 28261;
  } else if (name.indexOf("15 pro 512 natural") != -1) {
    return 28265;
  } else if (
    name.indexOf("15 pro 512") != -1 &&
    (name.indexOf("whıte") != -1 || name.indexOf("white") != -1)
  ) {
    return 28269;
  } else if (
    (name.indexOf("15 pro max 1tb") != -1 &&
      name.indexOf("black") != -1 &&
      name.indexOf("🇨🇳") != -1) ||
    (name.indexOf("15 pro max 1tb") != -1 &&
      name.indexOf("black") != -1 &&
      name.indexOf("🇭🇰") != -1)
  ) {
    return 30416;
  } else if (
    (name.indexOf("15 pro max 1tb") != -1 &&
      name.indexOf("blue") != -1 &&
      name.indexOf("🇨🇳") != -1) ||
    (name.indexOf("15 pro max 1tb") != -1 &&
      name.indexOf("blue") != -1 &&
      name.indexOf("🇭🇰") != -1)
  ) {
    return 30417;
  } else if (
    (name.indexOf("15 pro max 1tb") != -1 &&
      name.indexOf("natural") != -1 &&
      name.indexOf("🇨🇳") != -1) ||
    (name.indexOf("15 pro max 1tb") != -1 &&
      name.indexOf("natural") != -1 &&
      name.indexOf("🇭🇰") != -1)
  ) {
    return 30418;
  } else if (
    (name.indexOf("15 pro max 1tb") != -1 &&
      name.indexOf("white") != -1 &&
      name.indexOf("🇨🇳") != -1) ||
    (name.indexOf("15 pro max 1tb") != -1 &&
      name.indexOf("white") != -1 &&
      name.indexOf("🇭🇰") != -1)
  ) {
    return 30419;
  } else if (
    name.indexOf("15 pro max 1tb black ") != -1 ||
    name.indexOf("15 pro max 1tb black ") != -1
  ) {
    return 28272;
  } else if (
    name.indexOf("15 pro max 1tb blue ") != -1 ||
    name.indexOf("15 pro max 1tb blue ") != -1
  ) {
    return 28273;
  } else if (
    name.indexOf("15 pro max 1tb natural ") != -1 ||
    name.indexOf("15 pro max 1tb natural ") != -1
  ) {
    return 28276;
  } else if (
    name.indexOf("15 pro max 1tb white ") != -1 ||
    name.indexOf("15 pro max 1tb white ") != -1
  ) {
    return 28279;
  } else if (
    (name.indexOf("15 pro max 256") != -1 &&
      name.indexOf("black") != -1 &&
      name.indexOf("🇨🇳") != -1) ||
    (name.indexOf("15 pro max 256") != -1 &&
      name.indexOf("black") != -1 &&
      name.indexOf("🇭🇰") != -1)
  ) {
    return 30420;
  } else if (
    (name.indexOf("15 pro max 256") != -1 &&
      name.indexOf("blue") != -1 &&
      name.indexOf("🇨🇳") != -1) ||
    (name.indexOf("15 pro max 256") != -1 &&
      name.indexOf("blue") != -1 &&
      name.indexOf("🇭🇰") != -1)
  ) {
    return 30421;
  } else if (
    (name.indexOf("15 pro max 256") != -1 &&
      name.indexOf("natural") != -1 &&
      name.indexOf("🇨🇳") != -1) ||
    (name.indexOf("15 pro max 256") != -1 &&
      name.indexOf("natural") != -1 &&
      name.indexOf("🇭🇰") != -1)
  ) {
    return 30422;
  } else if (
    (name.indexOf("15 pro max 256") != -1 &&
      name.indexOf("white") != -1 &&
      name.indexOf("🇨🇳") != -1) ||
    (name.indexOf("15 pro max 256") != -1 &&
      name.indexOf("white") != -1 &&
      name.indexOf("🇭🇰") != -1)
  ) {
    return 30423;
  } else if (name.indexOf("15 pro max 256 blue") != -1) {
    return 28274;
  } else if (name.indexOf("15 pro max 256 natural") != -1) {
    return 28277;
  } else if (name.indexOf("15 pro max 256 white") != -1) {
    return 28280;
  } else if (
    (name.indexOf("15 pro max 512") != -1 &&
      name.indexOf("black") != -1 &&
      name.indexOf("🇨🇳") != -1) ||
    (name.indexOf("15 pro max 512") != -1 &&
      name.indexOf("black") != -1 &&
      name.indexOf("🇭🇰") != -1)
  ) {
    return 30424;
  } else if (
    (name.indexOf("15 pro max 512") != -1 &&
      name.indexOf("blue") != -1 &&
      name.indexOf("🇨🇳") != -1) ||
    (name.indexOf("15 pro max 512") != -1 &&
      name.indexOf("blue") != -1 &&
      name.indexOf("🇭🇰") != -1)
  ) {
    return 30425;
  } else if (
    (name.indexOf("15 pro max 512") != -1 &&
      name.indexOf("natural") != -1 &&
      name.indexOf("🇨🇳") != -1) ||
    (name.indexOf("15 pro max 512") != -1 &&
      name.indexOf("natural") != -1 &&
      name.indexOf("🇭🇰") != -1)
  ) {
    return 30426;
  } else if (
    (name.indexOf("15 pro max 512") != -1 &&
      name.indexOf("white") != -1 &&
      name.indexOf("🇨🇳") != -1) ||
    (name.indexOf("15 pro max 512") != -1 &&
      name.indexOf("white") != -1 &&
      name.indexOf("🇭🇰") != -1)
  ) {
    return 30427;
  } else if (name.indexOf("15 pro max 512 blue") != -1) {
    return 28275;
  } else if (name.indexOf("15 pro max 512 natural") != -1) {
    return 28278;
  } else if (name.indexOf("15 pro max 512 white") != -1) {
    return 28281;
  } else if (name.indexOf("16 128 black") != -1) {
    return 36611;
  } else if (name.indexOf("16 128 pink") != -1) {
    return 36618;
  } else if (
    name.indexOf("16 128 teal") != -1 ||
    name.indexOf("16 128 green") != -1
  ) {
    return 36617;
  } else if (
    name.indexOf("16 128 ultramarine") != -1 ||
    name.indexOf("16 128 blue") != -1
  ) {
    return 36615;
  } else if (name.indexOf("16 128 white") != -1) {
    return 36616;
  } else if (name.indexOf("16 256 black") != -1) {
    return 36619;
  } else if (name.indexOf("16 256 pink") != -1) {
    return 36620;
  } else if (
    name.indexOf("16 256 teal") != -1 ||
    name.indexOf("16 256 green") != -1
  ) {
    return 36621;
  } else if (
    name.indexOf("16 256 ultramarine") != -1 ||
    name.indexOf("16 256 blue") != -1
  ) {
    return 36622;
  } else if (name.indexOf("16 256 white") != -1) {
    return 36623;
  } else if (name.indexOf("16 512 black") != -1) {
    return 36624;
  } else if (name.indexOf("16 512 pink") != -1) {
    return 36625;
  } else if (
    name.indexOf("16 512 teal") != -1 ||
    name.indexOf("16 512 green") != -1
  ) {
    return 36626;
  } else if (
    name.indexOf("16 512 ultramarine") != -1 ||
    name.indexOf("16 512 blue") != -1
  ) {
    return 36627;
  } else if (name.indexOf("16 512 white") != -1) {
    return 36628;
  } else if (name.indexOf("16 plus 128 black") != -1) {
    return 36612;
  } else if (name.indexOf("16 plus 128 pink") != -1) {
    return 36630;
  } else if (
    name.indexOf("16 plus 128 teal") != -1 ||
    name.indexOf("16 plus 128 green") != -1
  ) {
    return 36629;
  } else if (
    name.indexOf("16 plus 128 ultramarine") != -1 ||
    name.indexOf("16 plus 128 blue") != -1
  ) {
    return 36632;
  } else if (name.indexOf("16 plus 128 white") != -1) {
    return 36631;
  } else if (name.indexOf("16 plus 256 black") != -1) {
    return 36633;
  } else if (name.indexOf("16 plus 256 pink") != -1) {
    return 36634;
  } else if (
    name.indexOf("16 plus 256 teal") != -1 ||
    name.indexOf("16 plus 256 green") != -1
  ) {
    return 36635;
  } else if (
    name.indexOf("16 plus 256 ultramarine") != -1 ||
    name.indexOf("16 plus 256 blue") != -1
  ) {
    return 36636;
  } else if (name.indexOf("16 plus 256 white") != -1) {
    return 36637;
  } else if (name.indexOf("16 plus 512 black") != -1) {
    return 36638;
  } else if (name.indexOf("16 plus 512 pink") != -1) {
    return 36639;
  } else if (
    name.indexOf("16 plus 512 teal") != -1 ||
    name.indexOf("16 plus 512 green") != -1
  ) {
    return 36640;
  } else if (
    name.indexOf("16 plus 512 ultramarine") != -1 ||
    name.indexOf("16 plus 512 blue") != -1
  ) {
    return 36641;
  } else if (name.indexOf("16 plus 512 white") != -1) {
    return 36642;
  } else if (name.indexOf("16 pro 1tb black") != -1) {
    return 36655;
  } else if (name.indexOf("16 pro 1tb desert") != -1) {
    return 36645;
  } else if (name.indexOf("16 pro 1tb natural") != -1) {
    return 36661;
  } else if (name.indexOf("16 pro 1tb white") != -1) {
    return 36658;
  } else if (name.indexOf("16 pro 128 black") != -1) {
    return 36643;
  } else if (name.indexOf("16 pro 128 desert") != -1) {
    return 36652;
  } else if (name.indexOf("16 pro 128 natural") != -1) {
    return 36659;
  } else if (name.indexOf("16 pro 128 white") != -1) {
    return 36657;
  } else if (name.indexOf("16 pro 256 black") != -1) {
    return 36653;
  } else if (name.indexOf("16 pro 256 desert") != -1) {
    return 36650;
  } else if (name.indexOf("16 pro 256 natural") != -1) {
    return 36660;
  } else if (name.indexOf("16 pro 256 white") != -1) {
    return 36613;
  } else if (name.indexOf("16 pro 512 black") != -1) {
    return 36654;
  } else if (name.indexOf("16 pro 512 desert") != -1) {
    return 36651;
  } else if (name.indexOf("16 pro 512 natural") != -1) {
    return 36644;
  } else if (name.indexOf("16 pro 512 white") != -1) {
    return 36656;
  } else if (name.indexOf("16 pro max 1tb black") != -1) {
    return 36664;
  } else if (name.indexOf("16 pro max 1tb desert") != -1) {
    return 36673;
  } else if (name.indexOf("16 pro max 1tb natural") != -1) {
    return 36665;
  } else if (name.indexOf("16 pro max 1tb white") != -1) {
    return 36669;
  } else if (name.indexOf("16 pro max 256 black") != -1) {
    return 36662;
  } else if (name.indexOf("16 pro max 256 desert") != -1) {
    return 36675;
  } else if (name.indexOf("16 pro max 256 natural") != -1) {
    return 36667;
  } else if (name.indexOf("16 pro max 256 white") != -1) {
    return 36671;
  } else if (name.indexOf("16 pro max 512 black") != -1) {
    return 36663;
  } else if (name.indexOf("16 pro max 512 desert") != -1) {
    return 36676;
  } else if (name.indexOf("16 pro max 512 natural") != -1) {
    return 36668;
  } else if (name.indexOf("16 pro max 512 white") != -1) {
    return 36672;
  } else {
    return "No match";
  }
};
