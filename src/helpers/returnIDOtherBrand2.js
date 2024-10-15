import { returnIDXiaomi } from "./returnIDXiaomi";

export const returnIDOtherBrand2 = (name) => {
  // PlayStation
  if (
    name.indexOf("ps5 slim disc edition") != -1 ||
    name.indexOf("playstation 5 disc slim") != -1 ||
    name.indexOf("ps 5 slim disk") != -1
  ) {
    return 30947;
  } else if (
    name.indexOf("dualsense black") != -1 ||
    name.indexOf("dualsense white") != -1 ||
    name.indexOf("dualsenseBlack") != -1 ||
    name.indexOf("dualsenseWhite") != -1
  ) {
    return 19661;
  } else if (name.indexOf("dualsense edge") != -1) {
    return 28183;
  } else if (
    name.indexOf("ps portal") != -1 ||
    name.indexOf("portal remote") != -1
  ) {
    return 34478;

    //  Steam deck
  } else if (name.indexOf("steam deck oled 512") != -1) {
    return 34401;
  } else if (name.indexOf("steam deck oled 1tb") != -1) {
    return 34403;
  } else if (
    name.indexOf("steam deck led 16/64") != -1 ||
    name.indexOf("steam deck 16/64") != -1
  ) {
    return 28310;
  } else if (
    name.indexOf("steam deck led 64") != -1 ||
    name.indexOf("steam deck 64") != -1
  ) {
    return 30300;
  } else if (
    name.indexOf("steam deck led 256") != -1 ||
    name.indexOf("steam deck 256") != -1
  ) {
    return 30301;
  } else if (
    name.indexOf("steam deck led 512") != -1 ||
    name.indexOf("steam deck 512") != -1
  ) {
    return 30302;

    // Oculus
  } else if (name.indexOf("oculus quest 2 128") != -1) {
    return 28188;
  } else if (name.indexOf("oculus quest 2 256") != -1) {
    return 28189;
  } else if (name.indexOf("oculus quest 3 128") != -1) {
    return 35722;
  } else if (name.indexOf("oculus quest 3 512") != -1) {
    return 35723;

    // Pico
  } else if (name.indexOf("pico 4 128") != -1) {
    return 28186;
  } else if (name.indexOf("pico 4 256") != -1) {
    return 28187;

    // Marshall
  } else if (name.indexOf("major 4 black") != -1) {
    return 28100;
  } else if (name.indexOf("major 4 brown") != -1) {
    return 28101;

    // Nintendo
  } else if (name.indexOf("switch oled neon") != -1) {
    return 27654;
  } else if (
    name.indexOf("switch oled pokemon") != -1 ||
    name.indexOf("switch oled violet") != -1
  ) {
    return 27656;
  } else if (name.indexOf("switch oled splatoon") != -1) {
    return 27655;
  } else if (name.indexOf("switch oled white") != -1) {
    return 20467;
  } else if (
    name.indexOf("switch lite gray") != -1 ||
    name.indexOf("switch lite grey") != -1
  ) {
    return 17231;
  } else if (name.indexOf("switch lite yellow") != -1) {
    return 17232;
  } else if (name.indexOf("switch lite coral") != -1) {
    return 17228;
  } else if (name.indexOf("switch lite turquoise") != -1) {
    return 17230;
  } else if (name.indexOf("switch lite blue") != -1) {
    return 17229;

    // Sony
  } else if (name.indexOf("xperia 1 iv 12/256 black") != -1) {
    return 24028;
  } else if (name.indexOf("xperia 1 iv 12/256 violet") != -1) {
    return 24030;
  } else if (name.indexOf("xperia 1 iv 12/256 white") != -1) {
    return 24032;
  } else if (name.indexOf("xperia 1 iv 12/512 black") != -1) {
    return 24029;
  } else if (name.indexOf("xperia 1 iv 12/512 violet") != -1) {
    return 24031;
  } else if (name.indexOf("xperia 1 iv 12/512 white") != -1) {
    return 24033;
  } else if (name.indexOf("xperia 1 vi 12/256 black 🇭🇰") != -1) {
    return 36446;
  } else if (name.indexOf("xperia 1 vi 12/256 black") != -1) {
    return 36426;
  } else if (name.indexOf("xperia 1 vi 12/256 khaki green 🇭🇰") != -1) {
    return 36447;
  } else if (name.indexOf("xperia 1 vi 12/256 khaki green") != -1) {
    return 36428;
  } else if (name.indexOf("xperia 1 vi 12/256 platinum silver 🇭🇰") != -1) {
    return 36448;
  } else if (name.indexOf("xperia 1 vi 12/256 platinum silver") != -1) {
    return 36430;
  } else if (name.indexOf("xperia 1 vi 12/256 scar red 🇭🇰") != -1) {
    return 36449;
  } else if (name.indexOf("xperia 1 vi 12/256 scar red") != -1) {
    return 36432;
  } else if (name.indexOf("xperia 1 vi 12/512 black 🇭🇰") != -1) {
    return 36450;
  } else if (name.indexOf("xperia 1 vi 12/512 black") != -1) {
    return 36434;
  } else if (name.indexOf("xperia 1 vi 12/512 khaki green 🇭🇰") != -1) {
    return 36451;
  } else if (name.indexOf("xperia 1 vi 12/512 khaki green") != -1) {
    return 36436;
  } else if (name.indexOf("xperia 1 vi 12/512 platinum silver 🇭🇰") != -1) {
    return 36452;
  } else if (name.indexOf("xperia 1 vi 12/512 platinum silver") != -1) {
    return 36438;
  } else if (name.indexOf("xperia 1 vi 12/512 scar red 🇭🇰") != -1) {
    return 36453;
  } else if (name.indexOf("xperia 1 vi 12/512 scar red") != -1) {
    return 36440;
  } else if (name.indexOf("xperia 10 vi 8/128 black 🇭🇰") != -1) {
    return 36188;
  } else if (name.indexOf("xperia 10 vi 8/128 black") != -1) {
    return 36186;
  } else if (name.indexOf("xperia 10 vi 8/128 blue 🇭🇰") != -1) {
    return 36313;
  } else if (name.indexOf("xperia 10 vi 8/128 blue") != -1) {
    return 36309;
  } else if (name.indexOf("xperia 10 vi 8/128 white 🇭🇰") != -1) {
    return 36310;
  } else if (name.indexOf("xperia 10 vi 8/128 white") != -1) {
    return 36315;
  } else if (name.indexOf("xperia 5 v 8/256 blue") != -1) {
    return 28470;
  } else if (name.indexOf("xperia 10 iv 6/128 black") != -1) {
    return 24024;
  } else if (name.indexOf("xperia 10 iv 6/128 lavender") != -1) {
    return 24026;
  } else if (name.indexOf("xperia 10 iv 6/128 mint") != -1) {
    return 24025;
  } else if (name.indexOf("xperia 10 iv 6/128 white") != -1) {
    return 24027;
  } else if (name.indexOf("xperia 10 v 6/128 black") != -1) {
    return 27894;
  } else if (name.indexOf("xperia 10 v 6/128 lavender") != -1) {
    return 27898;
  } else if (name.indexOf("xperia 10 v 6/128 sage green") != -1) {
    return 27900;
  } else if (name.indexOf("xperia 10 v 6/128 green") != -1) {
    return 27900;
  } else if (name.indexOf("xperia 10 v 6/128 white") != -1) {
    return 27896;
  } else if (name.indexOf("xperia 10 v 8/128 black") != -1) {
    return 27895;
  } else if (name.indexOf("xperia 10 v 8/128 lavender") != -1) {
    return 27899;
  } else if (name.indexOf("xperia 10 v 8/128 sage green") != -1) {
    return 27901;
  } else if (name.indexOf("xperia 10 v 8/128 green") != -1) {
    return 27901;
  } else if (name.indexOf("xperia 10 v 8/128 white") != -1) {
    return 27897;
  } else if (name.indexOf("xperia 5 iv 8/128 black") != -1) {
    return 24034;
  } else if (name.indexOf("xperia 5 iv 8/128 ecru white") != -1) {
    return 24038;
  } else if (name.indexOf("xperia 5 iv 8/128 white") != -1) {
    return 24038;
  } else if (name.indexOf("xperia 5 iv 8/128 green") != -1) {
    return 24036;
  } else if (name.indexOf("xperia 5 iv 8/256 black") != -1) {
    return 24035;
  } else if (name.indexOf("xperia 5 iv 8/256 ecru white") != -1) {
    return 24039;
  } else if (name.indexOf("xperia 5 iv 8/256 white") != -1) {
    return 24039;
  } else if (name.indexOf("xperia 5 iv 8/256 green") != -1) {
    return 24037;
  } else if (name.indexOf("xperia 5 v 8/128 black") != -1) {
    return 28466;
  } else if (name.indexOf("xperia 5 v 8/128 blue") != -1) {
    return 28467;
  } else if (name.indexOf("xperia 5 v 8/128 platinum silver") != -1) {
    return 28468;
  } else if (name.indexOf("xperia 5 v 8/128 silver") != -1) {
    return 28468;
  } else if (name.indexOf("xperia 5 v 8/256 black") != -1) {
    return 28469;
  } else if (name.indexOf("xperia 5 v 8/256 platinum silver") != -1) {
    return 28471;
  } else if (name.indexOf("xperia 5 v 8/256 silver") != -1) {
    return 28471;
  } else if (name.indexOf("xperia 1 iv 12/256 black") != -1) {
    return 24028;
  } else if (name.indexOf("xperia 1 iv 12/256 violet") != -1) {
    return 24030;
  } else if (name.indexOf("xperia 1 iv 12/256 white") != -1) {
    return 24032;
  } else if (name.indexOf("xperia 1 iv 12/512 black") != -1) {
    return 24029;
  } else if (name.indexOf("xperia 1 iv 12/512 violet") != -1) {
    return 24031;
  } else if (name.indexOf("xperia 1 iv 12/512 white") != -1) {
    return 24033;
  } else if (name.indexOf("xperia 1 v 12/256 black") != -1) {
    return 27888;
  } else if (name.indexOf("xperia 1 v 12/256 khaki green") != -1) {
    return 27890;
  } else if (name.indexOf("xperia 1 v 12/256 green") != -1) {
    return 27890;
  } else if (name.indexOf("xperia 1 v 12/256 platinum silver") != -1) {
    return 27892;
  } else if (name.indexOf("xperia 1 v 12/256 silver") != -1) {
    return 27892;
  } else if (name.indexOf("xperia 1 v 12/512 black") != -1) {
    return 27889;
  } else if (name.indexOf("xperia 1 v 12/512 khaki green") != -1) {
    return 27893;
  } else if (name.indexOf("xperia 1 v 12/512 green") != -1) {
    return 27893;
  } else if (name.indexOf("xperia 1 v 12/512 platinum silver") != -1) {
    return 27891;
  } else if (name.indexOf("xperia 1 v 12/512 silver") != -1) {
    return 27891;
  } else if (name.indexOf("xperia 1 vi 12/256 black 🇭🇰") != -1) {
    return 36446;
  } else if (name.indexOf("xperia 1 vi 12/256 black") != -1) {
    return 36426;
  } else if (name.indexOf("xperia 1 vi 12/256 khaki green 🇭🇰") != -1) {
    return 36447;
  } else if (name.indexOf("xperia 1 vi 12/256 khaki green 🇭🇰") != -1) {
    return 36447;
  } else if (name.indexOf("xperia 1 vi 12/256 khaki green") != -1) {
    return 36428;
  } else if (name.indexOf("xperia 1 vi 12/256 green") != -1) {
    return 36428;
  } else if (name.indexOf("xperia 1 vi 12/256 platinum silver 🇭🇰") != -1) {
    return 36448;
  } else if (name.indexOf("xperia 1 vi 12/256 silver 🇭🇰") != -1) {
    return 36448;
  } else if (name.indexOf("xperia 1 vi 12/256 platinum silver") != -1) {
    return 36430;
  } else if (name.indexOf("xperia 1 vi 12/256 silver") != -1) {
    return 36430;
  } else if (name.indexOf("xperia 1 vi 12/256 scar red") != -1) {
    return 36449;
  } else if (name.indexOf("xperia 1 vi 12/256 red") != -1) {
    return 36449;
  } else if (name.indexOf("xperia 1 vi 12/256 scar red") != -1) {
    return 36432;
  } else if (name.indexOf("xperia 1 vi 12/256 red") != -1) {
    return 36432;
  } else if (name.indexOf("xperia 1 vi 12/512 black 🇭🇰") != -1) {
    return 36450;
  } else if (name.indexOf("xperia 1 vi 12/512 black") != -1) {
    return 36434;
  } else if (name.indexOf("xperia 1 vi 12/512 khaki green 🇭🇰") != -1) {
    return 36451;
  } else if (name.indexOf("xperia 1 vi 12/512 green 🇭🇰") != -1) {
    return 36451;
  } else if (name.indexOf("xperia 1 vi 12/512 khaki green") != -1) {
    return 36436;
  } else if (name.indexOf("xperia 1 vi 12/512 green") != -1) {
    return 36436;
  } else if (name.indexOf("xperia 1 vi 12/512 platinum silver 🇭🇰") != -1) {
    return 36452;
  } else if (name.indexOf("xperia 1 vi 12/512 silver 🇭🇰") != -1) {
    return 36452;
  } else if (name.indexOf("xperia 1 vi 12/512 platinum silver") != -1) {
    return 36438;
  } else if (name.indexOf("xperia 1 vi 12/512 silver") != -1) {
    return 36438;
  } else if (name.indexOf("xperia 1 vi 12/512 scar red 🇭🇰") != -1) {
    return 36453;
  } else if (name.indexOf("xperia 1 vi 12/512 red 🇭🇰") != -1) {
    return 36453;
  } else if (name.indexOf("xperia 1 vi 12/512 scar red") != -1) {
    return 36440;
  } else if (name.indexOf("xperia 1 vi 12/512 red") != -1) {
    return 36440;
  } else if (
    name.indexOf("xperia 1vi 12/256 black 🇨🇳") != -1 ||
    (name.indexOf("xperia 1vi 12/256 black") != -1 && name.indexOf("🇨🇳") != -1)
  ) {
    return 36446;
  } else if (
    name.indexOf("xperia 1vi 12/256 khaki green 🇨🇳") != -1 ||
    (name.indexOf("xperia 1vi 12/256 khaki green") != -1 &&
      name.indexOf("🇨🇳") != -1)
  ) {
    return 36447;
  } else if (
    name.indexOf("xperia 1vi 12/256 platinum silver 🇨🇳") != -1 ||
    (name.indexOf("xperia 1vi 12/256 platinum silver") != -1 &&
      name.indexOf("🇨🇳") != -1)
  ) {
    return 36448;
  } else if (
    name.indexOf("xperia 1vi 12/256 scar red 🇨🇳") != -1 ||
    (name.indexOf("xperia 1vi 12/256 scar red") != -1 &&
      name.indexOf("🇨🇳") != -1)
  ) {
    return 36449;
  } else if (
    name.indexOf("xperia 1vi 12/512 black 🇨🇳") != -1 ||
    (name.indexOf("xperia 1vi 12/512 black") != -1 && name.indexOf("🇨🇳") != -1)
  ) {
    return 36450;
  } else if (
    name.indexOf("xperia 1vi 12/512 khaki green 🇨🇳") != -1 ||
    (name.indexOf("xperia 1vi khaki green 12/512") != -1 &&
      name.indexOf("🇨🇳") != -1)
  ) {
    return 36451;
  } else if (
    name.indexOf("xperia 1vi 12/512 platinum silver 🇨🇳") != -1 ||
    (name.indexOf("xperia 1vi 12/512 platinum silver") != -1 &&
      name.indexOf("🇨🇳") != -1)
  ) {
    return 36452;
  } else if (
    name.indexOf("xperia 1vi 12/512 scar red 🇨🇳") != -1 ||
    (name.indexOf("xperia 1vi 12/512 scar red") != -1 &&
      name.indexOf("🇨🇳") != -1)
  ) {
    return 36453;
  } else if (
    name.indexOf("xperia 10vi 8/128 blue 🇨🇳") != -1 ||
    (name.indexOf("10vi 8/128 blue") != -1 && name.indexOf("🇨🇳") != -1)
  ) {
    return 36313;
  } else if (
    name.indexOf("xperia 10vi 8/128 black") != -1 ||
    (name.indexOf("10vi 8/128 black") != -1 && name.indexOf("🇨🇳") != -1)
  ) {
    return 36188;
  } else if (
    name.indexOf("xperia 10vi 8/128 white 🇨🇳") != -1 ||
    (name.indexOf("xperia 10vi 8/128 white") != -1 && name.indexOf("🇨🇳") != -1)
  ) {
    return 36310;
  } else if (
    name.indexOf("xperia 1vi 12/256 platinum silver 🇨🇳") != -1 ||
    (name.indexOf("xperia 1vi 12/256 platinum silver") != -1 &&
      name.indexOf("🇨🇳") != -1)
  ) {
    return 36448;
  } else if (
    name.indexOf("xperia 1vi 12/256 silver 🇨🇳") != -1 ||
    (name.indexOf("xperia 1vi 12/256 silver") != -1 && name.indexOf("🇨🇳") != -1)
  ) {
    return 36448;
  } else if (
    name.indexOf("xperia 1vi 12/512 black 🇨🇳") != -1 ||
    (name.indexOf("xperia 1vi 12/512 black") != -1 && name.indexOf("🇨🇳") != -1)
  ) {
    return 36450;
  } else if (
    name.indexOf("xperia 1vi 12/512 khaki green 🇨🇳") != -1 ||
    (name.indexOf("xperia 1vi 12/512 khaki green") != -1 &&
      name.indexOf("🇨🇳") != -1)
  ) {
    return 36451;
  } else if (
    name.indexOf("xperia 1vi 12/512 green 🇨🇳") != -1 ||
    (name.indexOf("xperia 1vi 12/512 green") != -1 && name.indexOf("🇨🇳") != -1)
  ) {
    return 36451;
  } else if (
    name.indexOf("xperia 1vi 12/512 platinum silver 🇨🇳") != -1 ||
    (name.indexOf("xperia 1vi 12/512 platinum silver") != -1 &&
      name.indexOf("🇨🇳") != -1)
  ) {
    return 36452;
  } else if (
    name.indexOf("xperia 1vi 12/512 silver 🇨🇳") != -1 ||
    (name.indexOf("xperia 1vi 12/512 silver") != -1 && name.indexOf("🇨🇳") != -1)
  ) {
    return 36452;
  } else if (
    name.indexOf("xperia 1vi 12/512 scar red 🇨🇳") != -1 ||
    (name.indexOf("xperia 1vi 12/512 scar red") != -1 &&
      name.indexOf("🇨🇳") != -1)
  ) {
    return 36453;
  } else if (
    name.indexOf("xperia 1vi 12/512 red 🇨🇳") != -1 ||
    (name.indexOf("xperia 1vi 12/512 red") != -1 && name.indexOf("🇨🇳") != -1)
  ) {
  } else if (name.indexOf("xperia 1iv 12/256 black") != -1) {
    return 24028;
  } else if (name.indexOf("xperia 1iv 12/256violet") != -1) {
    return 24030;
  } else if (name.indexOf("xperia 1iv 12/256 white") != -1) {
    return 24032;
  } else if (name.indexOf("xperia 1iv 12/512 black") != -1) {
    return 24029;
  } else if (name.indexOf("xperia 1iv 12/512violet") != -1) {
    return 24031;
  } else if (name.indexOf("xperia 1iv 12/512 white") != -1) {
    return 24033;
  } else if (
    name.indexOf("xperia 1vi 12/256 black 🇭🇰") != -1 ||
    (name.indexOf("xperia 1vi 12/256 black") != -1 && name.indexOf("🇭🇰") != -1)
  ) {
    return 36446;
  } else if (name.indexOf("xperia 1vi 12/256 black") != -1) {
    return 36426;
  } else if (
    name.indexOf("xperia 1vi 12/256 khaki green 🇭🇰") != -1 ||
    (name.indexOf("xperia 1vi 12/256 khaki green") != -1 &&
      name.indexOf("🇭🇰") != -1)
  ) {
    return 36447;
  } else if (name.indexOf("xperia 1vi 12/256 khaki green") != -1) {
    return 36428;
  } else if (
    name.indexOf("xperia 1vi 12/256 platinum silver 🇭🇰") != -1 ||
    (name.indexOf("xperia 1vi 12/256 platinum silver") != -1 &&
      name.indexOf("🇭🇰") != -1)
  ) {
    return 36448;
  } else if (name.indexOf("xperia 1vi 12/256 platinum silver") != -1) {
    return 36430;
  } else if (
    name.indexOf("xperia 1vi 12/256 scar red 🇭🇰") != -1 ||
    (name.indexOf("xperia 1vi 12/256 scar red") != -1 &&
      name.indexOf("🇭🇰") != -1)
  ) {
    return 36449;
  } else if (name.indexOf("xperia 1vi 12/256 scar red") != -1) {
    return 36432;
  } else if (
    name.indexOf("xperia 1vi 12/512 black 🇭🇰") != -1 ||
    (name.indexOf("xperia 1vi 12/512 black") != -1 && name.indexOf("🇭🇰") != -1)
  ) {
    return 36450;
  } else if (name.indexOf("xperia 1vi 12/512 black") != -1) {
    return 36434;
  } else if (
    name.indexOf("xperia 1vi 12/512 khaki green 🇭🇰") != -1 ||
    (name.indexOf("xperia 1vi khaki green 12/512") != -1 &&
      name.indexOf("🇭🇰") != -1)
  ) {
    return 36451;
  } else if (name.indexOf("xperia 1vi 12/512 khaki green") != -1) {
    return 36436;
  } else if (
    name.indexOf("xperia 1vi 12/512 platinum silver 🇭🇰") != -1 ||
    (name.indexOf("xperia 1vi 12/512 platinum silver") != -1 &&
      name.indexOf("🇭🇰") != -1)
  ) {
    return 36452;
  } else if (name.indexOf("xperia 1vi 12/512 platinum silver") != -1) {
    return 36438;
  } else if (
    name.indexOf("xperia 1vi 12/512 scar red 🇭🇰") != -1 ||
    (name.indexOf("xperia 1vi 12/512 scar red") != -1 &&
      name.indexOf("🇭🇰") != -1)
  ) {
    return 36453;
  } else if (name.indexOf("xperia 1vi 12/512 scar red") != -1) {
    return 36440;
  } else if (
    name.indexOf("xperia 10vi 8/128 blue 🇭🇰") != -1 ||
    (name.indexOf("10vi 8/128 blue") != -1 && name.indexOf("🇭🇰") != -1)
  ) {
    return 36313;
  } else if (
    name.indexOf("xperia 10vi 8/128 black") != -1 ||
    (name.indexOf("10vi 8/128 black") != -1 && name.indexOf("🇭🇰") != -1)
  ) {
    return 36188;
  } else if (
    name.indexOf("xperia 10vi 8/128 white 🇭🇰") != -1 ||
    (name.indexOf("xperia 10vi 8/128 white") != -1 && name.indexOf("🇭🇰") != -1)
  ) {
    return 36310;
  } else if (name.indexOf("xperia 10vi 8/128 black") != -1) {
    return 36186;
  } else if (name.indexOf("10vi 8/128 blue") != -1) {
    return 36309;
  } else if (name.indexOf("xperia 10vi 8/128 white") != -1) {
    return 36315;
  } else if (name.indexOf("xperia 5v 8/128 blue") != -1) {
    return 28470;
  } else if (name.indexOf("xperia 10iv 6/128 black") != -1) {
    return 24024;
  } else if (name.indexOf("xperia 10iv 6/128 lavender") != -1) {
    return 24026;
  } else if (name.indexOf("xperia 10iv 6/128 mint") != -1) {
    return 24025;
  } else if (name.indexOf("xperia 10iv 6/128 white") != -1) {
    return 24027;
  } else if (name.indexOf("xperia 10v 6/128 black") != -1) {
    return 27894;
  } else if (name.indexOf("xperia 10v 6/128 lavender") != -1) {
    return 27898;
  } else if (name.indexOf("xperia 10v 6/128 sage green") != -1) {
    return 27900;
  } else if (name.indexOf("xperia 10v 6/128 green") != -1) {
    return 27900;
  } else if (name.indexOf("xperia 10v 6/128 white") != -1) {
    return 27896;
  } else if (name.indexOf("xperia 10v 8/128 black") != -1) {
    return 27895;
  } else if (name.indexOf("xperia 10v 8/128 lavender") != -1) {
    return 27899;
  } else if (name.indexOf("xperia 10v 8/128 sage green") != -1) {
    return 27901;
  } else if (name.indexOf("xperia 10v 8/128 green") != -1) {
    return 27901;
  } else if (name.indexOf("xperia 10v 8/128 white") != -1) {
    return 27897;
  } else if (name.indexOf("xperia 5iv 8/128 black") != -1) {
    return 24034;
  } else if (name.indexOf("xperia 5iv 8/128 ecru white") != -1) {
    return 24038;
  } else if (name.indexOf("xperia 5iv 8/128 white") != -1) {
    return 24038;
  } else if (name.indexOf("xperia 5iv 8/128 green") != -1) {
    return 24036;
  } else if (name.indexOf("xperia 5iv 8/256 black") != -1) {
    return 24035;
  } else if (name.indexOf("xperia 5iv 8/256 ecru white") != -1) {
    return 24039;
  } else if (name.indexOf("xperia 5iv 8/256 white") != -1) {
    return 24039;
  } else if (name.indexOf("xperia 5iv 8/256 green") != -1) {
    return 24037;
  } else if (name.indexOf("xperia 5v 8/128 black") != -1) {
    return 28466;
  } else if (name.indexOf("xperia 5v 8/128 blue") != -1) {
    return 28467;
  } else if (name.indexOf("xperia 5v 8/128 platinum silver") != -1) {
    return 28468;
  } else if (name.indexOf("xperia 5v 8/128 silver") != -1) {
    return 28468;
  } else if (name.indexOf("xperia 5v 8/256 black") != -1) {
    return 28469;
  } else if (name.indexOf("xperia 5v 8/256 platinum silver") != -1) {
    return 28471;
  } else if (name.indexOf("xperia 5v 8/256 silver") != -1) {
    return 28471;
  } else if (name.indexOf("xperia 1iv 12/256 black") != -1) {
    return 24028;
  } else if (name.indexOf("xperia 1iv 12/256 violet") != -1) {
    return 24030;
  } else if (name.indexOf("xperia 1iv 12/256 white") != -1) {
    return 24032;
  } else if (name.indexOf("xperia 1iv 12/512 black") != -1) {
    return 24029;
  } else if (name.indexOf("xperia 1iv 12/512 violet") != -1) {
    return 24031;
  } else if (name.indexOf("xperia 1iv 12/512 white") != -1) {
    return 24033;
  } else if (name.indexOf("xperia 1v 12/256 black") != -1) {
    return 27888;
  } else if (name.indexOf("xperia 1v 12/256 khaki green") != -1) {
    return 27890;
  } else if (name.indexOf("xperia 1v 12/256 green") != -1) {
    return 27890;
  } else if (name.indexOf("xperia 1v 12/256 platinum silver") != -1) {
    return 27892;
  } else if (name.indexOf("xperia 1v 12/256 silver") != -1) {
    return 27892;
  } else if (name.indexOf("xperia 1v 12/512 black") != -1) {
    return 27889;
  } else if (name.indexOf("xperia 1v 12/512 khaki green") != -1) {
    return 27893;
  } else if (name.indexOf("xperia 1v 12/512 green") != -1) {
    return 27893;
  } else if (name.indexOf("xperia 1v 12/512 platinum silver") != -1) {
    return 27891;
  } else if (name.indexOf("xperia 1v 12/512 silver") != -1) {
    return 27891;
  } else if (name.indexOf("xperia 1vi 12/256 black 🇭🇰") != -1) {
    return 36446;
  } else if (name.indexOf("xperia 1vi 12/256 black") != -1) {
    return 36426;
  } else if (name.indexOf("xperia 1vi 12/256 khaki green 🇭🇰") != -1) {
    return 36447;
  } else if (name.indexOf("xperia 1vi 12/256 khaki green 🇭🇰") != -1) {
    return 36447;
  } else if (name.indexOf("xperia 1vi 12/256 khaki green") != -1) {
    return 36428;
  } else if (name.indexOf("xperia 1vi 12/256 green") != -1) {
    return 36428;
  } else if (
    name.indexOf("xperia 1vi 12/256 platinum silver 🇭🇰") != -1 ||
    (name.indexOf("xperia 1vi 12/256 platinum silver") != -1 &&
      name.indexOf("🇭🇰") != -1)
  ) {
    return 36448;
  } else if (
    name.indexOf("xperia 1vi 12/256 silver 🇭🇰") != -1 ||
    (name.indexOf("xperia 1vi 12/256 silver") != -1 && name.indexOf("🇭🇰") != -1)
  ) {
    return 36448;
  } else if (name.indexOf("xperia 1vi 12/256 platinum silver") != -1) {
    return 36430;
  } else if (name.indexOf("xperia 1vi 12/256 silver") != -1) {
    return 36430;
  } else if (name.indexOf("xperia 1vi 12/256 scar red") != -1) {
    return 36449;
  } else if (name.indexOf("xperia 1vi 12/256 red") != -1) {
    return 36449;
  } else if (name.indexOf("xperia 1vi 12/256 scar red") != -1) {
    return 36432;
  } else if (name.indexOf("xperia 1vi 12/256 red") != -1) {
    return 36432;
  } else if (
    name.indexOf("xperia 1vi 12/512 black 🇭🇰") != -1 ||
    (name.indexOf("xperia 1vi 12/512 black") != -1 && name.indexOf("🇭🇰") != -1)
  ) {
    return 36450;
  } else if (name.indexOf("xperia 1vi 12/512 black") != -1) {
    return 36434;
  } else if (
    name.indexOf("xperia 1vi 12/512 khaki green 🇭🇰") != -1 ||
    (name.indexOf("xperia 1vi 12/512 khaki green") != -1 &&
      name.indexOf("🇭🇰") != -1)
  ) {
    return 36451;
  } else if (
    name.indexOf("xperia 1vi 12/512 green 🇭🇰") != -1 ||
    (name.indexOf("xperia 1vi 12/512 green") != -1 && name.indexOf("🇭🇰") != -1)
  ) {
    return 36451;
  } else if (name.indexOf("xperia 1vi 12/512 khaki green") != -1) {
    return 36436;
  } else if (name.indexOf("xperia 1vi 12/512 green") != -1) {
    return 36436;
  } else if (
    name.indexOf("xperia 1vi 12/512 platinum silver 🇭🇰") != -1 ||
    (name.indexOf("xperia 1vi 12/512 platinum silver") != -1 &&
      name.indexOf("🇭🇰") != -1)
  ) {
    return 36452;
  } else if (
    name.indexOf("xperia 1vi 12/512 silver 🇭🇰") != -1 ||
    (name.indexOf("xperia 1vi 12/512 silver") != -1 && name.indexOf("🇭🇰") != -1)
  ) {
    return 36452;
  } else if (name.indexOf("xperia 1vi 12/512 platinum silver") != -1) {
    return 36438;
  } else if (name.indexOf("xperia 1vi 12/512 silver") != -1) {
    return 36438;
  } else if (
    name.indexOf("xperia 1vi 12/512 scar red 🇭🇰") != -1 ||
    (name.indexOf("xperia 1vi 12/512 scar red") != -1 &&
      name.indexOf("🇭🇰") != -1)
  ) {
    return 36453;
  } else if (
    name.indexOf("xperia 1vi 12/512 red 🇭🇰") != -1 ||
    (name.indexOf("xperia 1vi 12/512 red") != -1 && name.indexOf("🇭🇰") != -1)
  ) {
    return 36453;
  } else if (name.indexOf("xperia 1vi 12/512 scar red") != -1) {
    return 36440;
  } else if (name.indexOf("xperia 1vi 12/512 red") != -1) {
    return 36440;

    // ZTE
  } else if (name.indexOf("red magic 8 pro 12/256 transparent") != -1) {
    return 28498;
  } else if (name.indexOf("red magic 8 pro 16/512 titanium") != -1) {
    return 27793;
  } else if (name.indexOf("red magic 8 pro 16/512 midnight") != -1) {
    return 28499;
  } else if (name.indexOf("red magic 8 pro 16/512 transparent") != -1) {
    return 28500;
  } else if (name.indexOf("red magic 8 pro 8/128 midnight") != -1) {
    return 28501;
  } else if (name.indexOf("red magic 8 pro 8/128 transparent") != -1) {
    return 28502;
  } else if (name.indexOf("red magic 8 pro 8/256 midnight") != -1) {
    return 28503;
  } else if (name.indexOf("red magic 8 pro 8/256 transparent") != -1) {
    return 28504;
  } else if (name.indexOf("red magic 8 pro plus 12/256 black") != -1) {
    return 36064;
  } else if (name.indexOf("red magic 8 pro plus 12/256 transparent") != -1) {
    return 36067;
  } else if (name.indexOf("red magic 8 pro plus 16/1tb black") != -1) {
    return 36066;
  } else if (name.indexOf("red magic 8 pro plus 16/1tb transparent") != -1) {
    return 36068;
  } else if (name.indexOf("red magic 8 pro plus 16/512 black") != -1) {
    return 36065;
  } else if (name.indexOf("red magic 8 pro plus 16/512 transparent") != -1) {
    return 36069;
  } else if (name.indexOf("red magic 8s pro 12/256 midnight") != -1) {
    return 28525;
  } else if (name.indexOf("red magic 8s pro 12/256 platinum") != -1) {
    return 28530;
  } else if (name.indexOf("red magic 8s pro 12/256 transparent") != -1) {
    return 28505;
  } else if (name.indexOf("red magic 8s pro 16/512 midnight") != -1) {
    return 28506;
  } else if (name.indexOf("red magic 8s pro 16/512 platinum") != -1) {
    return 28529;
  } else if (name.indexOf("red magic 8s pro 16/512 transparent") != -1) {
    return 28526;
  } else if (name.indexOf("red magic 8s pro 8/128 midnight") != -1) {
    return 28507;
  } else if (name.indexOf("red magic 8s pro 8/128 platinum") != -1) {
    return 28528;
  } else if (name.indexOf("red magic 8s pro 8/128 transparent") != -1) {
    return 28508;
  } else if (name.indexOf("red magic 8s pro 8/256 midnight") != -1) {
    return 28509;
  } else if (name.indexOf("red magic 8s pro 8/256 platinum") != -1) {
    return 28527;
  } else if (name.indexOf("red magic 8s pro 8/256 transparent") != -1) {
    return 28510;
  } else if (name.indexOf("red magic 9 pro 12/256 sleet") != -1) {
    return 34469;
  } else if (name.indexOf("red magic 9 pro 16/512 cyclone") != -1) {
    return 34471;
  } else if (name.indexOf("red magic 9 pro 16/512 snowfall") != -1) {
    return 34470;
  } else if (name.indexOf("redmagic 8 pro 12/256 transparent") != -1) {
    return 28498;
  } else if (name.indexOf("redmagic 8 pro 16/512 titanium") != -1) {
    return 27793;
  } else if (name.indexOf("redmagic 8 pro 16/512 midnight") != -1) {
    return 28499;
  } else if (name.indexOf("redmagic 8 pro 16/512 transparent") != -1) {
    return 28500;
  } else if (name.indexOf("redmagic 8 pro 8/128 midnight") != -1) {
    return 28501;
  } else if (name.indexOf("redmagic 8 pro 8/128 transparent") != -1) {
    return 28502;
  } else if (name.indexOf("redmagic 8 pro 8/256 midnight") != -1) {
    return 28503;
  } else if (name.indexOf("redmagic 8 pro 8/256 transparent") != -1) {
    return 28504;
  } else if (name.indexOf("redmagic 8 pro plus 12/256 black") != -1) {
    return 36064;
  } else if (name.indexOf("redmagic 8 pro plus 12/256 transparent") != -1) {
    return 36067;
  } else if (name.indexOf("redmagic 8 pro plus 16/1tb black") != -1) {
    return 36066;
  } else if (name.indexOf("redmagic 8 pro plus 16/1tb transparent") != -1) {
    return 36068;
  } else if (name.indexOf("redmagic 8 pro plus 16/512 black") != -1) {
    return 36065;
  } else if (name.indexOf("redmagic 8 pro plus 16/512 transparent") != -1) {
    return 36069;
  } else if (name.indexOf("redmagic 8s pro 12/256 midnight") != -1) {
    return 28525;
  } else if (name.indexOf("redmagic 8s pro 12/256 platinum") != -1) {
    return 28530;
  } else if (name.indexOf("redmagic 8s pro 12/256 transparent") != -1) {
    return 28505;
  } else if (name.indexOf("redmagic 8s pro 16/512 midnight") != -1) {
    return 28506;
  } else if (name.indexOf("redmagic 8s pro 16/512 platinum") != -1) {
    return 28529;
  } else if (name.indexOf("redmagic 8s pro 16/512 transparent") != -1) {
    return 28526;
  } else if (name.indexOf("redmagic 8s pro 8/128 midnight") != -1) {
    return 28507;
  } else if (name.indexOf("redmagic 8s pro 8/128 platinum") != -1) {
    return 28528;
  } else if (name.indexOf("redmagic 8s pro 8/128 transparent") != -1) {
    return 28508;
  } else if (name.indexOf("redmagic 8s pro 8/256 midnight") != -1) {
    return 28509;
  } else if (name.indexOf("redmagic 8s pro 8/256 platinum") != -1) {
    return 28527;
  } else if (name.indexOf("redmagic 8s pro 8/256 transparent") != -1) {
    return 28510;
  } else if (name.indexOf("redmagic 9 pro 12/256 sleet") != -1) {
    return 34469;
  } else if (name.indexOf("redmagic 9 pro 16/512 cyclone") != -1) {
    return 34471;
  } else if (name.indexOf("redmagic 9 pro 16/512 snowfall") != -1) {
    return 34470;
  } else if (name.indexOf("redmagic 8 pro 12/256 midnight") != -1) {
    return 28511;
  } else if (name.indexOf("redmagic 8 pro 16/512 midnight") != -1) {
    return 28512;
  } else if (name.indexOf("redmagic 8s pro 12/256 graphite") != -1) {
    return 28513;
  } else if (name.indexOf("red magic 9s pro 12/256 design sleet") != -1) {
    return 36685;
  } else if (name.indexOf("red magic 9s pro + 16/512 design sleet") != -1) {
    return 36686;
  } else if (name.indexOf("red magic 9s pro + 16/512 frost") != -1) {
    return 36729;
  } else if (name.indexOf("red magic 9s pro + 16/512 cyclone") != -1) {
    return 36730;
  } else if (name.indexOf("red magic 9s pro + 16/512 snowfall") != -1) {
    return 36731;
  } else if (name.indexOf("red magic 9s pro + 24/1tb cyclone") != -1) {
    return 36732;
  } else if (name.indexOf("red magic 9s pro + 24/1tb design sleet") != -1) {
    return 36733;
  } else if (name.indexOf("red magic 9s pro + 24/1tb frost") != -1) {
    return 36734;
  } else if (name.indexOf("red magic 9s pro + 24/1tb snowfall") != -1) {
    return 36735;
  } else if (name.indexOf("red magic 9s pro 12/256 cyclone") != -1) {
    return 36736;
  } else if (name.indexOf("red magic 9s pro 12/256 snowfall") != -1) {
    return 36737;
  } else if (name.indexOf("red magic 9s pro 12/256 frost") != -1) {
    return 36738;
  } else if (name.indexOf("red magic 9s pro 12/512 cyclone") != -1) {
    return 36739;
  } else if (name.indexOf("red magic 9s pro 12/512 design sleet") != -1) {
    return 36740;
  } else if (name.indexOf("red magic 9s pro 12/512 frost") != -1) {
    return 36741;
  } else if (name.indexOf("red magic 9s pro 12/512 snowfall") != -1) {
    return 36742;
  } else if (name.indexOf("red magic 9s pro 16/512 cyclone") != -1) {
    return 36743;
  } else if (name.indexOf("red magic 9s pro 16/512 design sleet") != -1) {
    return 36744;
  } else if (name.indexOf("red magic 9s pro 16/512 frost") != -1) {
    return 36745;
  } else if (name.indexOf("red magic 9s pro 16/512 snowfall") != -1) {
    return 36746;
  } else if (name.indexOf("z50 ultra 12/256 black") != -1) {
    return 36132;
  } else if (name.indexOf("z50 ultra 12/256 silver") != -1) {
    return 36135;
  } else if (name.indexOf("z50 ultra 12/256 starry sky") != -1) {
    return 36139;
  } else if (name.indexOf("z50 ultra 12/512 black") != -1) {
    return 36133;
  } else if (name.indexOf("z50 ultra 12/512 silver") != -1) {
    return 36136;
  } else if (name.indexOf("z50 ultra 12/512 starry sky") != -1) {
    return 36140;
  } else if (name.indexOf("z50 ultra 16/1tb black") != -1) {
    return 36134;
  } else if (name.indexOf("z50 ultra 16/1tb silver") != -1) {
    return 36137;
  } else if (name.indexOf("z50 ultra 16/1tb starry sky") != -1) {
    return 36141;
  } else if (name.indexOf("z50 ultra 8/256 black") != -1) {
    return 36131;
  } else if (name.indexOf("z50 ultra 8/256 silver") != -1) {
    return 36138;
  } else if (name.indexOf("z50 ultra 8/256 starry sky") != -1) {
    return 36142;
  } else if (name.indexOf("z50s pro 12/1tb black") != -1) {
    return 28514;
  } else if (name.indexOf("z50s pro 12/1tb khaki") != -1) {
    return 28515;
  } else if (name.indexOf("z50s pro 12/1tb silver") != -1) {
    return 36070;
  } else if (name.indexOf("z50s pro 12/256 black") != -1) {
    return 28516;
  } else if (name.indexOf("z50s pro 12/256 khaki") != -1) {
    return 28517;
  } else if (name.indexOf("z50s pro 12/256 silver") != -1) {
    return 36071;
  } else if (name.indexOf("z50s pro 16/1tb black") != -1) {
    return 28518;
  } else if (name.indexOf("z50s pro 16/1tb khaki") != -1) {
    return 28519;
  } else if (name.indexOf("z50s pro 16/1tb silver") != -1) {
    return 36072;
  } else if (name.indexOf("z60 ultra 12/256 black") != -1) {
    return 34473;
  } else if (name.indexOf("z60 ultra 12/512 black") != -1) {
    return 34474;
  } else if (
    name.indexOf("z60 ultra 12/512 titanium") != -1 ||
    name.indexOf("z60 ultra 12/512 silver") != -1
  ) {
    return 34475;
  } else if (
    name.indexOf("z60 ultra 16/512 titanium") != -1 ||
    name.indexOf("z60 ultra 16/512 silver") != -1
  ) {
    return 34476;
  } else if (name.indexOf("z60 ultra 8/256 black") != -1) {
    return 34472;

    // Garmin
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

    //  ASUS
  } else if (name.indexOf("rog ally 16/256 white") != -1) {
    return 30134;
  } else if (name.indexOf("rog ally 16/512 white") != -1) {
    return 27653;
  } else if (name.indexOf("rog ally x 12/1tb black") != -1) {
    return 36185;
  } else if (name.indexOf("rog phone 8 12/256 phantom black") != -1) {
    return 35690;
  } else if (name.indexOf("rog phone 8 12/256 rebel gr") != -1) {
    return 35692;
  } else if (name.indexOf("rog phone 8 16/256 phantom black") != -1) {
    return 35691;
  } else if (name.indexOf("rog phone 8 16/256 rebel gr") != -1) {
    return 35693;
  } else if (name.indexOf("rog phone 8 pro 12/256 phantom black") != -1) {
    return 35694;
  } else if (name.indexOf("rog phone 8 pro 16/256 phantom black") != -1) {
    return 35695;
  } else if (name.indexOf("rog phone 8 pro 16/512 phantom black") != -1) {
    return 36474;
  } else if (name.indexOf("rog phone 8 pro 24/1tb phantom black") != -1) {
    return 36473;
  } else if (name.indexOf("zenfone 10 12/256 aurora green") != -1) {
    return 28372;
  } else if (name.indexOf("zenfone 10 12/256 comet white") != -1) {
    return 28373;
  } else if (name.indexOf("zenfone 10 12/256 eclipse red") != -1) {
    return 28374;
  } else if (name.indexOf("zenfone 10 12/256 midnight black") != -1) {
    return 28375;
  } else if (name.indexOf("zenfone 10 12/256 starry blue") != -1) {
    return 28376;
  } else if (name.indexOf("zenfone 10 16/256 aurora green") != -1) {
    return 28377;
  } else if (name.indexOf("zenfone 10 16/256 comet white") != -1) {
    return 28378;
  } else if (name.indexOf("zenfone 10 16/256 eclipse red") != -1) {
    return 28379;
  } else if (name.indexOf("zenfone 10 16/256 midnight black") != -1) {
    return 28380;
  } else if (name.indexOf("zenfone 10 16/256 starry blue") != -1) {
    return 28381;
  } else if (name.indexOf("zenfone 10 16/512 midnight black") != -1) {
    return 27802;
  } else if (name.indexOf("zenfone 10 16/512 starry blue") != -1) {
    return 27801;
  } else if (name.indexOf("zenfone 10 16/512 aurora green") != -1) {
    return 28382;
  } else if (name.indexOf("zenfone 10 16/512 comet white") != -1) {
    return 28383;
  } else if (name.indexOf("zenfone 10 16/512 eclipse red") != -1) {
    return 28384;
  } else if (name.indexOf("zenfone 10 16/512 starry blue") != -1) {
    return 28386;
  } else if (name.indexOf("zenfone 10 8/128 midnight black") != -1) {
    return 27798;
  } else if (name.indexOf("zenfone 10 8/128 aurora green") != -1) {
    return 28387;
  } else if (name.indexOf("zenfone 10 8/128 comet white") != -1) {
    return 28388;
  } else if (name.indexOf("zenfone 10 8/128 eclipse red") != -1) {
    return 28389;
  } else if (name.indexOf("zenfone 10 8/128 starry blue") != -1) {
    return 28391;
  } else if (name.indexOf("zenfone 10 8/256 comet white") != -1) {
    return 27799;
  } else if (name.indexOf("zenfone 10 8/256 midnight black") != -1) {
    return 27800;
  } else if (name.indexOf("zenfone 10 8/256 starry blue") != -1) {
    return 27803;
  } else if (name.indexOf("zenfone 10 8/256 aurora green") != -1) {
    return 28392;
  } else if (name.indexOf("zenfone 10 8/256 eclipse red") != -1) {
    return 28394;
  } else if (name.indexOf("zenfone 11 ultra 12/256 desert sand") != -1) {
    return 36170;
  } else if (name.indexOf("zenfone 11 ultra 12/256 eternal black") != -1) {
    return 36159;
  } else if (name.indexOf("zenfone 11 ultra 12/256 misty gr") != -1) {
    return 36168;
  } else if (name.indexOf("zenfone 11 ultra 12/256 skyline blue") != -1) {
    return 36166;
  } else if (name.indexOf("zenfone 11 ultra 16/512 desert sand") != -1) {
    return 36171;
  } else if (name.indexOf("zenfone 11 ultra 16/512 eternal black") != -1) {
    return 36158;
  } else if (name.indexOf("zenfone 11 ultra 16/512 misty gr") != -1) {
    return 36169;
  } else if (name.indexOf("zenfone 11 ultra 16/512 skyline blue") != -1) {
    return 36167;
  } else if (name.indexOf("zenfone 8 flip 8/128 black") != -1) {
    return 27753;
  } else if (
    name.indexOf("zenfone 8 flip 8/128 grey") != -1 ||
    name.indexOf("zenfone 8 flip 8/128 gray") != -1
  ) {
    return 27752;
  } else if (
    name.indexOf("zenfone 8 flip 8/256 grey") != -1 ||
    name.indexOf("zenfone 8 flip 8/256 gray") != -1
  ) {
    return 27754;
  } else if (name.indexOf("zenfone 9 16/256 black") != -1) {
    return 28397;
  } else if (name.indexOf("zenfone 9 6/128 midnight black") != -1) {
    return 28398;
  } else if (name.indexOf("zenfone 9 6/128 moonlight white") != -1) {
    return 28399;
  } else if (name.indexOf("zenfone 9 6/128 starry blue") != -1) {
    return 28400;
  } else if (name.indexOf("zenfone 9 6/128 sunset red") != -1) {
    return 28401;
  } else if (name.indexOf("zenfone 9 8/128 midnight black") != -1) {
    return 28218;
  } else if (name.indexOf("zenfone 9 8/128 starry blue") != -1) {
    return 28219;
  } else if (name.indexOf("zenfone 9 8/128 white") != -1) {
    return 28402;
  } else if (name.indexOf("zenfone 9 8/256 midnight black") != -1) {
    return 28403;
  } else if (name.indexOf("zenfone 9 8/256 moonlight white") != -1) {
    return 28404;
  } else if (name.indexOf("zenfone 9 8/256 starry blue") != -1) {
    return 28405;
  } else if (name.indexOf("zenfone 9 8/256 sunset red") != -1) {
    return 28406;

    //  JBL
  } else if (name.indexOf("jbl flip 6 black") != -1) {
    return 27639;
  } else if (name.indexOf("jbl flip 6 blue") != -1) {
    return 28084;
  } else if (name.indexOf("jbl flip 6 gray") != -1) {
    return 28086;
  } else if (name.indexOf("jbl flip 6 red") != -1) {
    return 28085;
  } else if (name.indexOf("jbl flip 6 squad") != -1) {
    return 28083;
  } else if (name.indexOf("jbl flip 6 teal") != -1) {
    return 28087;
  } else if (name.indexOf("jbl boombox 3 black") != -1) {
    return 27643;
  } else if (name.indexOf("jbl boombox 3 squad") != -1) {
    return 28082;
  } else if (name.indexOf("jbl charge 5 black") != -1) {
    return 13691;
  } else if (name.indexOf("jbl charge 5 blue") != -1) {
    return 20283;
  } else if (name.indexOf("jbl charge 5 forest green") != -1) {
    return 20278;
  } else if (
    name.indexOf("jbl charge 5 grey") != -1 ||
    name.indexOf("jbl charge 5 gray") != -1
  ) {
    return 20285;
  } else if (name.indexOf("jbl charge 5 pink") != -1) {
    return 20281;
  } else if (name.indexOf("jbl charge 5 red") != -1) {
    return 20279;
  } else if (name.indexOf("jbl charge 5 squad") != -1) {
    return 20280;
  } else if (name.indexOf("jbl charge 5 teal") != -1) {
    return 20282;
  } else if (name.indexOf("jbl charge 5 white") != -1) {
    return 20286;
  } else if (
    //  Garmin
    name.indexOf("honor 90 12/256 silver") != -1
  ) {
    return 28121;
  } else if (name.indexOf("honor 90 12/256 green") != -1) {
    return 28118;
  } else if (name.indexOf("honor 90 12/256 black") != -1) {
    return 28112;
  } else if (name.indexOf("honor 90 12/256 blue") != -1) {
    return 28115;
  } else if (name.indexOf("honor 90 16/256 silver") != -1) {
    return 28122;
  } else if (name.indexOf("honor 90 16/256 green") != -1) {
    return 28119;
  } else if (name.indexOf("honor 90 16/256 black") != -1) {
    return 28113;
  } else if (name.indexOf("honor 90 16/256 blue") != -1) {
    return 28116;
  } else if (name.indexOf("honor 90 16/512 silver") != -1) {
    return 28123;
  } else if (name.indexOf("honor 90 16/512 green") != -1) {
    return 28120;
  } else if (name.indexOf("honor 90 16/512 black") != -1) {
    return 28114;
  } else if (name.indexOf("honor 90 16/512 blue") != -1) {
    return 28117;
  } else if (name.indexOf("honor 90 pro 12/256 silver") != -1) {
    return 28130;
  } else if (name.indexOf("honor 90 pro 12/256 green") != -1) {
    return 28127;
  } else if (name.indexOf("honor 90 pro 12/256 black") != -1) {
    return 28124;
  } else if (name.indexOf("honor 90 pro 12/256 blue") != -1) {
    return 28133;
  } else if (name.indexOf("honor 90 pro 16/256 silver") != -1) {
    return 28131;
  } else if (name.indexOf("honor 90 pro 16/256 green") != -1) {
    return 28128;
  } else if (name.indexOf("honor 90 pro 16/256 black") != -1) {
    return 28125;
  } else if (name.indexOf("honor 90 pro 16/256 blue") != -1) {
    return 28134;
  } else if (name.indexOf("honor 90 pro 16/512 silver") != -1) {
    return 28132;
  } else if (name.indexOf("honor 90 pro 16/512 green") != -1) {
    return 28129;
  } else if (name.indexOf("honor 90 pro 16/512 black") != -1) {
    return 28126;
  } else if (name.indexOf("honor 90 pro 16/512 blue") != -1) {
    return 28135;

    // Yandex
  } else if (
    (name.indexOf("яндекс") != -1 || name.indexOf("станция") != -1) &&
    name.indexOf("2") != -1 &&
    name.indexOf("красн") != -1
  ) {
    return 23952;
  } else if (
    (name.indexOf("яндекс") != -1 || name.indexOf("станция") != -1) &&
    name.indexOf("2") != -1 &&
    name.indexOf("син") != -1
  ) {
    return 23951;
  } else if (
    (name.indexOf("яндекс") != -1 || name.indexOf("станция") != -1) &&
    name.indexOf("2") != -1 &&
    name.indexOf("черн") != -1
  ) {
    return 23950;
  } else if (
    (name.indexOf("яндекс") != -1 || name.indexOf("станция") != -1) &&
    name.indexOf("2") != -1 &&
    (name.indexOf("песочн") != -1 || name.indexOf("бежев") != -1)
  ) {
    return 23953;
  } else if (
  (name.indexOf("яндекс") != -1 || name.indexOf("станция") != -1) &&
  name.indexOf("2") != -1 &&
  name.indexOf("бел") != -1) {
    return 18848;
  } else if (
    name.indexOf("без zigbee") == -1 &&
    (name.indexOf("яндекс") != -1 || name.indexOf("станция") != -1) &&
    name.indexOf("макс") != -1 &&
    name.indexOf("zigbee") != -1 &&
    name.indexOf("красн") != -1
  ) {
    return 30289;
  } else if (
    name.indexOf("без zigbee") == -1 &&
    (name.indexOf("яндекс") != -1 || name.indexOf("станция") != -1) &&
    name.indexOf("макс") != -1 &&
    name.indexOf("zigbee") != -1 &&
    name.indexOf("сер") != -1
  ) {
    return 30287;
  } else if (
    name.indexOf("без zigbee") == -1 &&
    (name.indexOf("яндекс") != -1 || name.indexOf("станция") != -1) &&
    name.indexOf("макс") != -1 &&
    name.indexOf("zigbee") != -1 &&
    name.indexOf("син") != -1
  ) {
    return 30292;
  } else if (
    name.indexOf("без zigbee") == -1 &&
    (name.indexOf("яндекс") != -1 || name.indexOf("станция") != -1) &&
    name.indexOf("макс") != -1 &&
    name.indexOf("zigbee") != -1 &&
    name.indexOf("черн") != -1
  ) {
    return 30293;
  } else if (
    name.indexOf("яндекс") != -1 &&
    (name.indexOf("яндекс") != -1 || name.indexOf("станция") != -1) &&
    name.indexOf("zigbee") != -1 &&
    name.indexOf("зелен") != -1
  ) {
    return 30291;
  } else if (
    name.indexOf("без zigbee") == -1 &&
    (name.indexOf("яндекс") != -1 || name.indexOf("станция") != -1) &&
    name.indexOf("макс") != -1 &&
    name.indexOf("zigbee") != -1 &&
    name.indexOf("бежев") != -1
  ) {
    return 30288;
  } else if (
    name.indexOf("без zigbee") == -1 &&
    (name.indexOf("яндекс") != -1 || name.indexOf("станция") != -1) &&
    name.indexOf("макс") != -1 &&
    name.indexOf("zigbee") != -1 &&
    name.indexOf("бел") != -1
  ) {
    return 30286;
  } else if (
    name.indexOf("без zigbee") == -1 &&
    (name.indexOf("яндекс") != -1 || name.indexOf("станция") != -1) &&
    name.indexOf("макс") != -1 &&
    name.indexOf("zigbee") != -1 &&
    name.indexOf("бирюзов") != -1
  ) {
    return 30290;
  } else if (
    (name.indexOf("яндекс") != -1 || name.indexOf("станция") != -1) &&
    name.indexOf("макс") != -1 &&
    name.indexOf("красн") != -1
  ) {
    return 23957;
  } else if (
    (name.indexOf("яндекс") != -1 || name.indexOf("станция") != -1) &&
    name.indexOf("макс") != -1 &&
    name.indexOf("син") != -1
  ) {
    return 23958;
  } else if (
    (name.indexOf("яндекс") != -1 || name.indexOf("станция") != -1) &&
    name.indexOf("макс") != -1 &&
    name.indexOf("черн") != -1
  ) {
    return 18974;
  } else if (
    (name.indexOf("яндекс") != -1 || name.indexOf("станция") != -1) &&
    name.indexOf("макс") != -1 &&
    name.indexOf("бел") != -1
  ) {
    return 18973;
  } else if (name.indexOf("яндекс миди черная") != -1) {
    return 30892;
  } else if (name.indexOf("яндекс миди зеленая") != -1) {
    return 30893;
  } else if (name.indexOf("яндекс миди белая") != -1) {
    return 30894;
  } else if (name.indexOf("яндекс миди оранжевая") != -1) {
    return 35837;
  } else if (name.indexOf("яндекс миди малиновая") != -1) {
    return 35838;
  } else if (
    (name.indexOf("яндекс") != -1 || name.indexOf("станция") != -1) &&
    name.indexOf("мини") != -1 &&
    name.indexOf("красн") != -1 &&
    name.indexOf("с часами") != -1
  ) {
    return 23955;
  } else if (
    (name.indexOf("яндекс") != -1 || name.indexOf("станция") != -1) &&
    name.indexOf("мини") != -1 &&
    name.indexOf("син") != -1 &&
    name.indexOf("с часами") != -1
  ) {
    return 23956;
  } else if (
    (name.indexOf("яндекс") != -1 || name.indexOf("станция") != -1) &&
    name.indexOf("мини") != -1 &&
    name.indexOf("черн") != -1 &&
    name.indexOf("с часами") != -1
  ) {
    return 23954;
  } else {
    return returnIDXiaomi(name) || "No match";
  }
};
