import { returnIDApple } from "./returnIDApple";

export const returnIDOtherBrand2 = (name) => {
  // Xbox
  if (name.indexOf("xbox") !== -1 && name.indexOf(" x ") !== -1) {
    return 24539;
  } else if (
    name.indexOf("xbox") !== -1 &&
    name.indexOf(" s") !== -1 &&
    name.indexOf("1tb") === -1
  ) {
    return 24537;
  } else if (
    name.indexOf("xbox") !== -1 &&
    name.indexOf(" s") !== -1 &&
    name.indexOf("1tb") !== -1 &&
    name.indexOf("black") !== -1
  ) {
    return 38005;
  } else if (
    name.indexOf("xbox") !== -1 &&
    name.indexOf(" s") !== -1 &&
    name.indexOf("1tb") !== -1 &&
    name.indexOf("black") === -1
  ) {
    return 38017;

    // PlayStation
  } else if (
    (name.indexOf("ps5") !== -1 ||
      name.indexOf("playstation 5") !== -1 ||
      name.indexOf("ps 5") !== -1) &&
    name.indexOf("slim") !== -1 &&
    (name.indexOf("disk") !== -1 ||
      name.indexOf("disc") !== -1 ||
      name.indexOf("disс") !== -1)
  ) {
    return 30947;
  } else if (
    (name.indexOf("ps5") !== -1 ||
      name.indexOf("playstation 5") !== -1 ||
      name.indexOf("ps 5") !== -1) &&
    name.indexOf("slim") !== -1 &&
    name.indexOf("digital") !== -1
  ) {
    return 30946;
  } else if (
    (name.indexOf("ps5") !== -1 ||
      name.indexOf("playstation 5") !== -1 ||
      name.indexOf("ps 5") !== -1) &&
    name.indexOf("pro") !== -1 &&
    (name.indexOf("disc") === -1 || name.indexOf("диск") === -1)
  ) {
    return 36834;
  } else if (
    (name.indexOf("ps5") !== -1 ||
      name.indexOf("playstation 5") !== -1 ||
      name.indexOf("ps 5") !== -1) &&
    name.indexOf("pro") !== -1 &&
    name.indexOf("ray") !== -1
  ) {
    return 36835;
  } else if (
    (name.indexOf("dualsense black") !== -1 ||
      name.indexOf("dualsense white") !== -1 ||
      name.indexOf("dualsenseBlack") !== -1 ||
      name.indexOf("dualsenseWhite") !== -1 ||
      name.indexOf("dualsense") !== -1) &&
    name.indexOf("white") !== -1
  ) {
    return 36800;
  } else if (name.indexOf("dualsense") !== -1 && name.indexOf("red") !== -1) {
    return 36796;
  } else if (name.indexOf("dualsense purple") !== -1) {
    return 36799;
  } else if (name.indexOf("dualsense black") !== -1) {
    return 36801;
  } else if (name.indexOf("dualsense pink") !== -1) {
    return 36798;
  } else if (name.indexOf("dualsense") !== -1 && name.indexOf("blue") !== -1) {
    return 36797;
  } else if (
    name.indexOf("ps portal") !== -1 ||
    name.indexOf("portal remote") !== -1
  ) {
    return 34478;

    //  Steam deck
  } else if (
    name.indexOf("steam deck oled 512") !== -1 ||
    name.indexOf("steam deck oled 16/512") !== -1
  ) {
    return 34401;
  } else if (
    name.indexOf("steam deck oled 1tb") !== -1 ||
    name.indexOf("steam deck oled 16/1tb") !== -1
  ) {
    return 34403;
  } else if (name.indexOf("steam deck 16/64") !== -1) {
    return 28310;
  } else if (name.indexOf("steam deck 64") !== -1) {
    return 30300;
  } else if (name.indexOf("steam deck 256") !== -1) {
    return 30301;
  } else if (name.indexOf("steam deck 512") !== -1) {
    return 30302;

    // Oculus
  } else if (
    name.indexOf("oculus quest 2") !== -1 &&
    name.indexOf("128") !== -1
  ) {
    return 38653;
  } else if (
    name.indexOf("oculus quest 2") !== -1 &&
    name.indexOf("256") !== -1
  ) {
    return 38654;
  } else if (
    name.indexOf("oculus quest 3") !== -1 &&
    name.indexOf("128") !== -1 &&
    name.indexOf("quest 3s") === -1
  ) {
    return 36846;
  } else if (
    name.indexOf("oculus quest 3") !== -1 &&
    name.indexOf("512") !== -1 &&
    name.indexOf("quest 3s") === -1
  ) {
    return 36847;
  } else if (
    name.indexOf("oculus quest Pro") !== -1 &&
    name.indexOf("256") !== -1
  ) {
    return 37132;
  } else if (
    name.indexOf("oculus quest 3s") !== -1 &&
    name.indexOf("128") !== -1
  ) {
    return 38683;
  } else if (
    name.indexOf("oculus quest 3s") !== -1 &&
    name.indexOf("256") !== -1
  ) {
    return 38692;

    // Pico
  } else if (name.indexOf("pico 4") !== -1 && name.indexOf("128") !== -1) {
    return 28186;
  } else if (name.indexOf("pico 4") !== -1 && name.indexOf("256") !== -1) {
    return 28187;

    // Marshall
  } else if (
    name.indexOf("major 4 black") !== -1 ||
    name.indexOf("major iv black") !== -1 ||
    name.indexOf("4 major black") !== -1
  ) {
    return 28100;
  } else if (
    name.indexOf("major 4 brown") !== -1 ||
    name.indexOf("major iv brown") !== -1 ||
    name.indexOf("4 major brown") !== -1
  ) {
    return 28101;
  } else if (
    name.indexOf("major 5 black") !== -1 ||
    name.indexOf("major v black") !== -1 ||
    name.indexOf("4 major black") !== -1
  ) {
    return 38985;
  } else if (
    name.indexOf("major 5 brown") !== -1 ||
    name.indexOf("major v brown") !== -1 ||
    name.indexOf("5 major brown") !== -1
  ) {
    return 38986;
  } else if (
    name.indexOf("major 5 cream") !== -1 ||
    name.indexOf("major v cream") !== -1 ||
    name.indexOf("5 major cream") !== -1
  ) {
    return 38987;
  } else if (
    name.indexOf("minor 4 black") !== -1 ||
    name.indexOf("4 minor black") !== -1
  ) {
    return 38989;
  } else if (
    name.indexOf("minor 4 cream") !== -1 ||
    name.indexOf("4 minor cream") !== -1
  ) {
    return 38990;

    // Nintendo
  } else if (name.indexOf("switch oled neon") !== -1) {
    return 27654;
  } else if (
    name.indexOf("switch oled pokemon") !== -1 ||
    name.indexOf("switch oled violet") !== -1
  ) {
    return 27656;
  } else if (name.indexOf("switch oled splatoon") !== -1) {
    return 27655;
  } else if (name.indexOf("switch oled white") !== -1) {
    return 20467;
  } else if (
    name.indexOf("switch lite gray") !== -1 ||
    name.indexOf("switch lite grey") !== -1
  ) {
    return 17231;
  } else if (name.indexOf("switch lite yellow") !== -1) {
    return 17232;
  } else if (name.indexOf("switch lite coral") !== -1) {
    return 17228;
  } else if (name.indexOf("switch lite turquoise") !== -1) {
    return 17230;
  } else if (name.indexOf("switch lite zacian") !== -1) {
    return 17229;
  } else if (name.indexOf("switch 32 gray") !== -1) {
    return 17228;
  } else if (name.indexOf("switch 32 neon") !== -1) {
    return 17230;
  } else if (name.indexOf("switch 32 yellow") !== -1) {
    return 17229;
  } else if (
    name.indexOf("switch") !== -1 &&
    name.indexOf("32") !== -1 &&
    name.indexOf("gray") !== -1
  ) {
    return 19101;
  } else if (
    name.indexOf("switch") !== -1 &&
    name.indexOf("32") !== -1 &&
    name.indexOf("neon") !== -1 &&
    name.indexOf("red") !== -1 &&
    name.indexOf("blue") !== -1
  ) {
    return 19100;
  } else if (
    name.indexOf("switch") !== -1 &&
    name.indexOf("32") !== -1 &&
    name.indexOf("yellow") !== -1 &&
    name.indexOf("blue") !== -1
  ) {
    return 19102;

    // Sony
  } else if (name.indexOf("sony ult wear black") != -1) {
    return 39724;
  } else if (name.indexOf("sony ult wear gray") != -1) {
    return 39722;
  } else if (name.indexOf("sony ult wear white-silver") != -1) {
    return 39721;
  } else if (name.indexOf("sony wh-1000xm4 black") != -1) {
    return 39799;
  } else if (name.indexOf("sony wh-1000xm4 platinum silver") != -1) {
    return 39803;
  } else if (name.indexOf("sony wh-1000xm5 black") != -1) {
    return 39708;
  } else if (name.indexOf("sony wh-1000xm5 blue") != -1) {
    return 39706;
  } else if (name.indexOf("sony wh-1000xm5 pink") != -1) {
    return 39703;
  } else if (name.indexOf("sony wh-1000xm5 platinum silver") != -1) {
    return 39710;
  } else if (name.indexOf("sony wh-1000xm6 black") != -1) {
    return 39699;
  } else if (name.indexOf("sony wh-1000xm6 blue") != -1) {
    return 39697;
  } else if (name.indexOf("sony wh-1000xm6 platinum silver") != -1) {
    return 39701;
  } else if (name.indexOf("sony wh-ch520 beige") != -1) {
    return 39734;
  } else if (name.indexOf("sony wh-ch520 black") != -1) {
    return 39737;
  } else if (name.indexOf("sony wh-ch520 blue") != -1) {
    return 39732;
  } else if (name.indexOf("sony wh-ch520 white") != -1) {
    return 39736;
  } else if (name.indexOf("sony wh-ch720n blue") != -1) {
    return 39726;
  } else if (name.indexOf("sony wh-ch720n black") != -1) {
    return 39730;
  } else if (name.indexOf("sony wh-ch720n pink") != -1) {
    return 39718;
  } else if (name.indexOf("sony wh-ch720n white") != -1) {
    return 39728;
  } else if (
    name.indexOf("xperia 1 vii ") != -1 &&
    name.indexOf("12/256") != -1 &&
    name.indexOf("black") != -1 &&
    name.indexOf("dual") != -1
  ) {
    return 39577;
  } else if (
    name.indexOf("xperia 1 vii ") != -1 &&
    name.indexOf("12/256") != -1 &&
    name.indexOf("green") != -1 &&
    name.indexOf("dual") != -1
  ) {
    return 39578;
  } else if (
    name.indexOf("xperia 1 vii ") != -1 &&
    name.indexOf("12/256") != -1 &&
    name.indexOf("purple") != -1 &&
    name.indexOf("dual") != -1
  ) {
    return 39579;
  } else if (
    name.indexOf("xperia 1 vii ") != -1 &&
    name.indexOf("12/512") != -1 &&
    name.indexOf("green") != -1 &&
    name.indexOf("dual") != -1
  ) {
    return 39581;
  } else if (
    name.indexOf("xperia 1 vii ") != -1 &&
    name.indexOf("12/512") != -1 &&
    name.indexOf("purple") != -1 &&
    name.indexOf("dual") != -1
  ) {
    return 39582;
  } else if (
    name.indexOf("xperia 1 vii ") != -1 &&
    name.indexOf("12/512") != -1 &&
    name.indexOf("black") != -1 &&
    name.indexOf("dual") != -1
  ) {
    return 39580;
  } else if (
    name.indexOf("xperia pro-i") != -1 &&
    name.indexOf("12/512") != -1 &&
    name.indexOf("5g") != -1 &&
    name.indexOf("black") != -1
  ) {
    return 21233;
  } else if (
    name.indexOf("xperia 1 vii ") != -1 &&
    name.indexOf("12/256") != -1 &&
    name.indexOf("black") != -1
  ) {
    return 39144;
  } else if (
    name.indexOf("xperia 1 vii ") != -1 &&
    name.indexOf("12/256") != -1 &&
    name.indexOf("green") != -1
  ) {
    return 39145;
  } else if (
    name.indexOf("xperia 1 vii ") != -1 &&
    name.indexOf("12/256") != -1 &&
    name.indexOf("purple") != -1
  ) {
    return 39146;
  } else if (
    name.indexOf("xperia 1 vii ") != -1 &&
    name.indexOf("12/512") != -1 &&
    name.indexOf("black") != -1
  ) {
    return 39150;
  } else if (
    name.indexOf("xperia 1 vii ") != -1 &&
    name.indexOf("12/512") != -1 &&
    name.indexOf("green") != -1
  ) {
    return 39151;
  } else if (
    name.indexOf("xperia 1 vii ") != -1 &&
    name.indexOf("12/512") != -1 &&
    name.indexOf("purple") != -1
  ) {
    return 39152;
  } else if (
    name.indexOf("xperia 1iv") !== -1 &&
    name.indexOf("16/512") !== -1 &&
    name.indexOf("black") !== -1 &&
    name.indexOf("gaming") !== -1
  ) {
    return 37696;
  } else if (
    name.indexOf("xperia 1v ") !== -1 &&
    name.indexOf("12/256") !== -1 &&
    name.indexOf("black") !== -1
  ) {
    return 27888;
  } else if (
    name.indexOf("xperia 1v ") !== -1 &&
    name.indexOf("12/256") !== -1 &&
    name.indexOf("green") !== -1
  ) {
    return 27890;
  } else if (
    name.indexOf("xperia 1v ") !== -1 &&
    name.indexOf("12/256") !== -1 &&
    name.indexOf("silver") !== -1
  ) {
    return 27892;
  } else if (
    name.indexOf("xperia 1v ") !== -1 &&
    name.indexOf("12/512") !== -1 &&
    name.indexOf("black") !== -1
  ) {
    return 27889;
  } else if (
    name.indexOf("xperia 1v ") !== -1 &&
    name.indexOf("12/512") !== -1 &&
    name.indexOf("green") !== -1
  ) {
    return 27893;
  } else if (
    name.indexOf("xperia 1v ") !== -1 &&
    name.indexOf("12/512") !== -1 &&
    name.indexOf("silver") !== -1
  ) {
    return 27891;
  } else if (
    name.indexOf("xperia 1") !== -1 &&
    name.indexOf("iv") !== -1 &&
    name.indexOf("12/256") !== -1 &&
    name.indexOf("black") !== -1
  ) {
    return 24028;
  } else if (
    name.indexOf("xperia 1") !== -1 &&
    name.indexOf("iv") !== -1 &&
    name.indexOf("12/256") !== -1 &&
    (name.indexOf("violet") !== -1 || name.indexOf("purple") !== -1)
  ) {
    return 24030;
  } else if (
    name.indexOf("xperia 1") !== -1 &&
    name.indexOf("iv") !== -1 &&
    name.indexOf("12/256") !== -1 &&
    name.indexOf("white") !== -1
  ) {
    return 24032;
  } else if (
    name.indexOf("xperia 1") !== -1 &&
    name.indexOf("iv") !== -1 &&
    name.indexOf("12/512") !== -1 &&
    name.indexOf("black") !== -1
  ) {
    return 24029;
  } else if (
    name.indexOf("xperia 1") !== -1 &&
    name.indexOf("iv") !== -1 &&
    name.indexOf("12/512") !== -1 &&
    (name.indexOf("violet") !== -1 || name.indexOf("purple") !== -1)
  ) {
    return 24031;
  } else if (
    name.indexOf("xperia 1") !== -1 &&
    name.indexOf("iv") !== -1 &&
    name.indexOf("12/512") !== -1 &&
    name.indexOf("white") !== -1
  ) {
    return 24033;
  } else if (
    name.indexOf("xperia 1") !== -1 &&
    name.indexOf("vi") !== -1 &&
    name.indexOf("12/256") !== -1 &&
    name.indexOf("black") !== -1 &&
    (name.indexOf("🇭🇰") !== -1 || name.indexOf("hk") !== -1)
  ) {
    return 36446;
  } else if (
    name.indexOf("xperia 1") !== -1 &&
    name.indexOf("vi") !== -1 &&
    name.indexOf("12/256") !== -1 &&
    name.indexOf("black") !== -1 &&
    (name.indexOf("🇭🇰") === -1 || name.indexOf("hk") === -1)
  ) {
    return 36426;
  } else if (
    name.indexOf("xperia 1") !== -1 &&
    name.indexOf("vi") !== -1 &&
    name.indexOf("12/256") !== -1 &&
    name.indexOf("green") !== -1 &&
    (name.indexOf("🇭🇰") !== -1 || name.indexOf("hk") !== -1)
  ) {
    return 36447;
  } else if (
    name.indexOf("xperia 1") !== -1 &&
    name.indexOf("vi") !== -1 &&
    name.indexOf("12/256") !== -1 &&
    name.indexOf("green") !== -1
  ) {
    return 36428;
  } else if (
    name.indexOf("xperia 1") !== -1 &&
    name.indexOf("vi") !== -1 &&
    name.indexOf("12/256") !== -1 &&
    name.indexOf("silver") !== -1 &&
    (name.indexOf("🇭🇰") !== -1 || name.indexOf("hk") !== -1)
  ) {
    return 36448;
  } else if (
    name.indexOf("xperia 1") !== -1 &&
    name.indexOf("vi") !== -1 &&
    name.indexOf("12/256") !== -1 &&
    name.indexOf("silver") !== -1 &&
    (name.indexOf("🇭🇰") === -1 || name.indexOf("hk") === -1)
  ) {
    return 36430;
  } else if (
    name.indexOf("xperia 1") !== -1 &&
    name.indexOf("vi") !== -1 &&
    name.indexOf("12/256") !== -1 &&
    name.indexOf("red") !== -1 &&
    (name.indexOf("🇭🇰") !== -1 || name.indexOf("hk") !== -1)
  ) {
    return 36449;
  } else if (
    name.indexOf("xperia 1") !== -1 &&
    name.indexOf("vi") !== -1 &&
    name.indexOf("12/256") !== -1 &&
    name.indexOf("red") !== -1 &&
    (name.indexOf("🇭🇰") === -1 || name.indexOf("hk") === -1)
  ) {
    return 36432;
  } else if (
    name.indexOf("xperia 1") !== -1 &&
    name.indexOf("vi") !== -1 &&
    name.indexOf("12/512") !== -1 &&
    name.indexOf("black") !== -1 &&
    (name.indexOf("🇭🇰") !== -1 || name.indexOf("hk") !== -1)
  ) {
    return 36450;
  } else if (
    name.indexOf("xperia 1") !== -1 &&
    name.indexOf("vi") !== -1 &&
    name.indexOf("12/512") !== -1 &&
    name.indexOf("black") !== -1 &&
    (name.indexOf("🇭🇰") === -1 || name.indexOf("hk") === -1)
  ) {
    return 36434;
  } else if (
    name.indexOf("xperia 1") !== -1 &&
    name.indexOf("vi") !== -1 &&
    name.indexOf("12/512") !== -1 &&
    name.indexOf("green") !== -1 &&
    (name.indexOf("🇭🇰") !== -1 || name.indexOf("hk") !== -1)
  ) {
    return 36451;
  } else if (
    name.indexOf("xperia 1") !== -1 &&
    name.indexOf("vi") !== -1 &&
    name.indexOf("12/512") !== -1 &&
    name.indexOf("green") !== -1 &&
    (name.indexOf("🇭🇰") === -1 || name.indexOf("hk") === -1)
  ) {
    return 36436;
  } else if (
    name.indexOf("xperia 1") !== -1 &&
    name.indexOf("vi") !== -1 &&
    name.indexOf("12/512") !== -1 &&
    name.indexOf("silver") !== -1 &&
    (name.indexOf("🇭🇰") !== -1 || name.indexOf("hk") !== -1)
  ) {
    return 36452;
  } else if (
    name.indexOf("xperia 1") !== -1 &&
    name.indexOf("vi") !== -1 &&
    name.indexOf("12/512") !== -1 &&
    name.indexOf("silver") !== -1 &&
    (name.indexOf("🇭🇰") === -1 || name.indexOf("hk") === -1)
  ) {
    return 36438;
  } else if (
    name.indexOf("xperia 1") !== -1 &&
    name.indexOf("vi") !== -1 &&
    name.indexOf("12/512") !== -1 &&
    name.indexOf("red") !== -1 &&
    (name.indexOf("🇭🇰") !== -1 || name.indexOf("hk") !== -1)
  ) {
    return 36453;
  } else if (
    name.indexOf("xperia 1") !== -1 &&
    name.indexOf("vi") !== -1 &&
    name.indexOf("12/512") !== -1 &&
    name.indexOf("red") !== -1 &&
    (name.indexOf("🇭🇰") === -1 || name.indexOf("hk") === -1)
  ) {
    return 36440;
  } else if (
    name.indexOf("xperia 10") !== -1 &&
    name.indexOf("vi") !== -1 &&
    name.indexOf("8/128") !== -1 &&
    name.indexOf("black") !== -1 &&
    (name.indexOf("🇭🇰") !== -1 || name.indexOf("hk") !== -1)
  ) {
    return 36188;
  } else if (
    name.indexOf("xperia 10") !== -1 &&
    name.indexOf("vi") !== -1 &&
    name.indexOf("8/128") !== -1 &&
    name.indexOf("black") !== -1 &&
    (name.indexOf("🇭🇰") === -1 || name.indexOf("hk") === -1)
  ) {
    return 36186;
  } else if (
    name.indexOf("xperia 10") !== -1 &&
    name.indexOf("vi") !== -1 &&
    name.indexOf("8/128") !== -1 &&
    name.indexOf("blue") !== -1 &&
    (name.indexOf("🇭🇰") !== -1 || name.indexOf("hk") !== -1)
  ) {
    return 36313;
  } else if (
    name.indexOf("xperia 10") !== -1 &&
    name.indexOf("vi") !== -1 &&
    name.indexOf("8/128") !== -1 &&
    name.indexOf("blue") !== -1 &&
    (name.indexOf("🇭🇰") === -1 || name.indexOf("hk") === -1)
  ) {
    return 36309;
  } else if (
    name.indexOf("xperia 10") !== -1 &&
    name.indexOf("vi") !== -1 &&
    name.indexOf("8/128") !== -1 &&
    name.indexOf("white") !== -1 &&
    (name.indexOf("🇭🇰") !== -1 || name.indexOf("hk") !== -1)
  ) {
    return 36310;
  } else if (
    name.indexOf("xperia 10") !== -1 &&
    name.indexOf("vi") !== -1 &&
    name.indexOf("8/128") !== -1 &&
    name.indexOf("white") !== -1 &&
    (name.indexOf("🇭🇰") !== -1 || name.indexOf("hk") !== -1)
  ) {
    return 36315;
  } else if (
    name.indexOf("xperia 5") !== -1 &&
    name.indexOf("v") !== -1 &&
    name.indexOf("8/256") !== -1 &&
    name.indexOf("blue") !== -1
  ) {
    return 28470;
  } else if (
    name.indexOf("xperia 10") !== -1 &&
    name.indexOf("iv") !== -1 &&
    name.indexOf("6/128") !== -1 &&
    name.indexOf("black") !== -1
  ) {
    return 24024;
  } else if (
    name.indexOf("xperia 10") !== -1 &&
    name.indexOf("iv") !== -1 &&
    name.indexOf("6/128") !== -1 &&
    name.indexOf("lavender") !== -1
  ) {
    return 24026;
  } else if (
    name.indexOf("xperia 10") !== -1 &&
    name.indexOf("iv") !== -1 &&
    name.indexOf("6/128") !== -1 &&
    name.indexOf("mint") !== -1
  ) {
    return 24025;
  } else if (
    name.indexOf("xperia 10") !== -1 &&
    name.indexOf("iv") !== -1 &&
    name.indexOf("6/128") !== -1 &&
    name.indexOf("white") !== -1
  ) {
    return 24027;
  } else if (
    name.indexOf("xperia 10") !== -1 &&
    name.indexOf("v") !== -1 &&
    name.indexOf("6/128") !== -1 &&
    name.indexOf("black") !== -1
  ) {
    return 27894;
  } else if (
    name.indexOf("xperia 10") !== -1 &&
    name.indexOf("v") !== -1 &&
    name.indexOf("6/128") !== -1 &&
    name.indexOf("lavender") !== -1
  ) {
    return 27898;
  } else if (
    name.indexOf("xperia 10") !== -1 &&
    name.indexOf("v") !== -1 &&
    name.indexOf("6/128") !== -1 &&
    name.indexOf("green") !== -1
  ) {
    return 27900;
  } else if (
    name.indexOf("xperia 10") !== -1 &&
    name.indexOf("v") !== -1 &&
    name.indexOf("6/128") !== -1 &&
    name.indexOf("white") !== -1
  ) {
    return 27896;
  } else if (
    name.indexOf("xperia 10") !== -1 &&
    name.indexOf("v") !== -1 &&
    name.indexOf("8/128") !== -1 &&
    name.indexOf("black") !== -1
  ) {
    return 27895;
  } else if (
    name.indexOf("xperia 10") !== -1 &&
    name.indexOf("v") !== -1 &&
    name.indexOf("8/128") !== -1 &&
    name.indexOf("lavender") !== -1
  ) {
    return 27899;
  } else if (
    name.indexOf("xperia 10") !== -1 &&
    name.indexOf("v") !== -1 &&
    name.indexOf("8/128") !== -1 &&
    name.indexOf("green") !== -1
  ) {
    return 27901;
  } else if (
    name.indexOf("xperia 10") !== -1 &&
    name.indexOf("v") !== -1 &&
    name.indexOf("8/128") !== -1 &&
    name.indexOf("white") !== -1
  ) {
    return 27897;
  } else if (
    name.indexOf("xperia 5") !== -1 &&
    name.indexOf("iv") !== -1 &&
    name.indexOf("8/128") !== -1 &&
    name.indexOf("black") !== -1
  ) {
    return 24034;
  } else if (
    name.indexOf("xperia 5") !== -1 &&
    name.indexOf("iv") !== -1 &&
    name.indexOf("8/128") !== -1 &&
    name.indexOf("white") !== -1
  ) {
    return 24038;
  } else if (
    name.indexOf("xperia 5") !== -1 &&
    name.indexOf("iv") !== -1 &&
    name.indexOf("8/128") !== -1 &&
    name.indexOf("green") !== -1
  ) {
    return 24036;
  } else if (
    name.indexOf("xperia 5") !== -1 &&
    name.indexOf("iv") !== -1 &&
    name.indexOf("8/256") !== -1 &&
    name.indexOf("black") !== -1
  ) {
    return 24035;
  } else if (
    name.indexOf("xperia 5") !== -1 &&
    name.indexOf("iv") !== -1 &&
    name.indexOf("8/256") !== -1 &&
    name.indexOf("white") !== -1
  ) {
    return 24039;
  } else if (
    name.indexOf("xperia 5") !== -1 &&
    name.indexOf("iv") !== -1 &&
    name.indexOf("8/256") !== -1 &&
    name.indexOf("white") !== -1
  ) {
    return 24039;
  } else if (
    name.indexOf("xperia 5") !== -1 &&
    name.indexOf("iv") !== -1 &&
    name.indexOf("8/256") !== -1 &&
    name.indexOf("green") !== -1
  ) {
    return 24037;
  } else if (
    name.indexOf("xperia 5") !== -1 &&
    name.indexOf("v") !== -1 &&
    name.indexOf("8/128") !== -1 &&
    name.indexOf("black") !== -1
  ) {
    return 28466;
  } else if (
    name.indexOf("xperia 5") !== -1 &&
    name.indexOf("v") !== -1 &&
    name.indexOf("8/128") !== -1 &&
    name.indexOf("blue") !== -1
  ) {
    return 28467;
  } else if (
    name.indexOf("xperia 5") !== -1 &&
    name.indexOf("v") !== -1 &&
    name.indexOf("8/128") !== -1 &&
    name.indexOf("silver") !== -1
  ) {
    return 28468;
  } else if (
    name.indexOf("xperia 5") !== -1 &&
    name.indexOf("v") !== -1 &&
    name.indexOf("8/256") !== -1 &&
    name.indexOf("black") !== -1
  ) {
    return 28469;
  } else if (
    name.indexOf("xperia 5") !== -1 &&
    name.indexOf("v") !== -1 &&
    name.indexOf("8/256") !== -1 &&
    name.indexOf("silver") !== -1
  ) {
    return 28471;

    // ZTE
  } else if (
    name.indexOf("nubia z70s ultra") != -1 &&
    name.indexOf("12/256") != -1 &&
    name.indexOf("brown") != -1
  ) {
    return 39128;
  } else if (
    name.indexOf("nubia z70s ultra") != -1 &&
    name.indexOf("12/256") != -1 &&
    name.indexOf("black") != -1
  ) {
    return 39129;
  } else if (
    name.indexOf("nubia z70s ultra") != -1 &&
    name.indexOf("16/1tb") != -1 &&
    name.indexOf("brown") != -1
  ) {
    return 39136;
  } else if (
    name.indexOf("nubia z70s ultra") != -1 &&
    name.indexOf("16/1tb") != -1 &&
    name.indexOf("black") != -1
  ) {
    return 39137;
  } else if (
    name.indexOf("nubia z70s ultra") != -1 &&
    name.indexOf("16/512") != -1 &&
    name.indexOf("brown") != -1
  ) {
    return 39132;
  } else if (
    name.indexOf("nubia z70s ultra") != -1 &&
    name.indexOf("16/512") != -1 &&
    name.indexOf("black") != -1
  ) {
    return 39133;
  } else if (
    name.indexOf("nubia z70s ultra") != -1 &&
    name.indexOf("24/1tb") != -1 &&
    name.indexOf("brown") != -1
  ) {
    return 39140;
  } else if (
    name.indexOf("nubia z70s ultra") != -1 &&
    name.indexOf("24/1tb") != -1 &&
    name.indexOf("black") != -1
  ) {
    return 39141;
  } else if (
    name.indexOf("nubia z70 ultra") !== -1 &&
    name.indexOf("12/256 black") !== -1
  ) {
    return 37798;
  } else if (
    name.indexOf("nubia z70 ultra") !== -1 &&
    (name.indexOf("12/256 gold") !== -1 || name.indexOf("12/256 yellow") !== -1)
  ) {
    return 37852;
  } else if (
    name.indexOf("nubia z70 ultra") !== -1 &&
    name.indexOf("12/256 orange") !== -1
  ) {
    return 37853;
  } else if (
    name.indexOf("nubia z70 ultra") !== -1 &&
    name.indexOf("12/256 starry night") !== -1
  ) {
    return 37854;
  } else if (
    name.indexOf("nubia z70 ultra") !== -1 &&
    name.indexOf("12/512 black") !== -1
  ) {
    return 37859;
  } else if (
    name.indexOf("nubia z70 ultra") !== -1 &&
    (name.indexOf("12/512 gold") !== -1 || name.indexOf("12/512 yellow") !== -1)
  ) {
    return 37860;
  } else if (
    name.indexOf("nubia z70 ultra") !== -1 &&
    name.indexOf("12/512 orange") !== -1
  ) {
    return 37861;
  } else if (
    name.indexOf("nubia z70 ultra") !== -1 &&
    name.indexOf("12/512 starry night") !== -1
  ) {
    return 37862;
  } else if (
    name.indexOf("nubia z70 ultra") !== -1 &&
    name.indexOf("12/1tb black") !== -1
  ) {
    return 37867;
  } else if (
    name.indexOf("nubia z70 ultra") !== -1 &&
    (name.indexOf("12/1tb gold") !== -1 || name.indexOf("12/1tb yellow") !== -1)
  ) {
    return 37868;
  } else if (
    name.indexOf("nubia z70 ultra") !== -1 &&
    name.indexOf("12/1tb orange") !== -1
  ) {
    return 37869;
  } else if (
    name.indexOf("nubia z70 ultra") !== -1 &&
    name.indexOf("12/1tb starry night") !== -1
  ) {
    return 37870;
  } else if (
    name.indexOf("nubia z70 ultra") !== -1 &&
    name.indexOf("24/1tb black") !== -1
  ) {
    return 37875;
  } else if (
    name.indexOf("nubia z70 ultra") !== -1 &&
    (name.indexOf("24/1tb gold") !== -1 || name.indexOf("24/1tb yellow") !== -1)
  ) {
    return 37876;
  } else if (
    name.indexOf("nubia z70 ultra") !== -1 &&
    name.indexOf("24/1tb orange") !== -1
  ) {
    return 37877;
  } else if (
    name.indexOf("nubia z70 ultra") !== -1 &&
    name.indexOf("24/1tb starry night") !== -1
  ) {
    return 37878;
  } else if (
    name.indexOf("redmagic") !== -1 &&
    name.indexOf("tablet") !== -1 &&
    name.indexOf("12/256") !== -1 &&
    name.indexOf("black") !== -1
  ) {
    return 36079;
  } else if (
    name.indexOf("redmagic") !== -1 &&
    name.indexOf("tablet") !== -1 &&
    name.indexOf("16/512") !== -1 &&
    name.indexOf("black") !== -1
  ) {
    return 36080;
  } else if (name.indexOf("nubia flip 12/512 cosmic black") !== -1) {
    return 36865;
  } else if (name.indexOf("nubia flip 12/512 flowering lilac") !== -1) {
    return 36869;
  } else if (name.indexOf("nubia flip 12/512 sunshine gold") !== -1) {
    return 36866;
  } else if (name.indexOf("nubia flip 8/128 cosmic black") !== -1) {
    return 36863;
  } else if (name.indexOf("nubia flip 8/128 flowering lilac") !== -1) {
    return 36870;
  } else if (name.indexOf("nubia flip 8/128 sunshine gold") !== -1) {
    return 36867;
  } else if (name.indexOf("nubia flip 8/256 cosmic black") !== -1) {
    return 36864;
  } else if (name.indexOf("nubia flip 8/256 flowering lilac") !== -1) {
    return 36871;
  } else if (name.indexOf("nubia flip 8/256 sunshine gold") !== -1) {
    return 36868;
  } else if (name.indexOf("nubia neo 8/256 black") !== -1) {
    return 36060;
  } else if (name.indexOf("nubia neo 8/256 yellow") !== -1) {
    return 36061;
  } else if (name.indexOf("nubia redmagic 8 pro 12/256 midnight") !== -1) {
    return 28511;
  } else if (name.indexOf("nubia redmagic 8 pro 16/512 midnight") !== -1) {
    return 28512;
  } else if (name.indexOf("nubia redmagic 8s pro 12/256 graphite") !== -1) {
    return 28513;
  } else if (name.indexOf("nubia z60s pro 12/256 aqua") !== -1) {
    return 36911;
  } else if (name.indexOf("nubia z60s pro 12/256 black") !== -1) {
    return 36915;
  } else if (name.indexOf("nubia z60s pro 12/256 white") !== -1) {
    return 36913;
  } else if (name.indexOf("nubia z60s pro 16/1tb aqua") !== -1) {
    return 36914;
  } else if (name.indexOf("nubia z60s pro 16/1tb black") !== -1) {
    return 36912;
  } else if (name.indexOf("nubia z60s pro 16/1tb white") !== -1) {
    return 36916;
  } else if (name.indexOf("nubia z60s pro 16/512 aqua") !== -1) {
    return 36908;
  } else if (name.indexOf("nubia z60s pro 16/512 black") !== -1) {
    return 36909;
  } else if (name.indexOf("nubia z60s pro 16/512 white") !== -1) {
    return 36910;
  } else if (name.indexOf("nubia z60s pro 24/1tb aqua") !== -1) {
    return 36905;
  } else if (name.indexOf("nubia z60s pro 24/1tb black") !== -1) {
    return 36906;
  } else if (name.indexOf("nubia z60s pro 24/1tb white") !== -1) {
    return 36907;
  } else if (name.indexOf("nubia z60s pro 8/256 aqua") !== -1) {
    return 36904;
  } else if (name.indexOf("nubia z60s pro 8/256 black") !== -1) {
    return 36903;
  } else if (name.indexOf("nubia z60s pro 8/256 white") !== -1) {
    return 36900;
  } else if (name.indexOf("red magic 8 pro 12/256 transparent") !== -1) {
    return 28498;
  } else if (name.indexOf("red magic 8 pro 16/512 titanium") !== -1) {
    return 27793;
  } else if (name.indexOf("red magic 8 pro 16/512 midnight") !== -1) {
    return 28499;
  } else if (name.indexOf("red magic 8 pro 16/512 transparent") !== -1) {
    return 28500;
  } else if (name.indexOf("red magic 8 pro 8/128 midnight") !== -1) {
    return 28501;
  } else if (name.indexOf("red magic 8 pro 8/128 transparent") !== -1) {
    return 28502;
  } else if (name.indexOf("red magic 8 pro 8/256 midnight") !== -1) {
    return 28503;
  } else if (name.indexOf("red magic 8 pro 8/256 transparent") !== -1) {
    return 28504;
  } else if (name.indexOf("red magic 8 pro plus 12/256 black") !== -1) {
    return 36064;
  } else if (name.indexOf("red magic 8 pro plus 12/256 transparent") !== -1) {
    return 36067;
  } else if (name.indexOf("red magic 8 pro plus 16/1tb black") !== -1) {
    return 36066;
  } else if (name.indexOf("red magic 8 pro plus 16/1tb transparent") !== -1) {
    return 36068;
  } else if (name.indexOf("red magic 8 pro plus 16/512 black") !== -1) {
    return 36065;
  } else if (name.indexOf("red magic 8 pro plus 16/512 transparent") !== -1) {
    return 36069;
  } else if (name.indexOf("red magic 8s pro 12/256 midnight") !== -1) {
    return 28525;
  } else if (name.indexOf("red magic 8s pro 12/256 platinum") !== -1) {
    return 28530;
  } else if (name.indexOf("red magic 8s pro 12/256 transparent") !== -1) {
    return 28505;
  } else if (name.indexOf("red magic 8s pro 16/512 midnight") !== -1) {
    return 28506;
  } else if (name.indexOf("red magic 8s pro 16/512 platinum") !== -1) {
    return 28529;
  } else if (name.indexOf("red magic 8s pro 16/512 transparent") !== -1) {
    return 28526;
  } else if (name.indexOf("red magic 8s pro 8/128 midnight") !== -1) {
    return 28507;
  } else if (name.indexOf("red magic 8s pro 8/128 platinum") !== -1) {
    return 28528;
  } else if (name.indexOf("red magic 8s pro 8/128 transparent") !== -1) {
    return 28508;
  } else if (name.indexOf("red magic 8s pro 8/256 midnight") !== -1) {
    return 28509;
  } else if (name.indexOf("red magic 8s pro 8/256 platinum") !== -1) {
    return 28527;
  } else if (name.indexOf("red magic 8s pro 8/256 transparent") !== -1) {
    return 28510;
  } else if (name.indexOf("red magic 9 pro 12/256 sleet") !== -1) {
    return 34469;
  } else if (name.indexOf("red magic 9 pro 16/512 cyclone") !== -1) {
    return 34471;
  } else if (name.indexOf("red magic 9 pro 16/512 snowfall") !== -1) {
    return 34470;
  } else if (name.indexOf("redmagic 8 pro 12/256 transparent") !== -1) {
    return 28498;
  } else if (name.indexOf("redmagic 8 pro 16/512 titanium") !== -1) {
    return 27793;
  } else if (name.indexOf("redmagic 8 pro 16/512 midnight") !== -1) {
    return 28499;
  } else if (name.indexOf("redmagic 8 pro 16/512 transparent") !== -1) {
    return 28500;
  } else if (name.indexOf("redmagic 8 pro 8/128 midnight") !== -1) {
    return 28501;
  } else if (name.indexOf("redmagic 8 pro 8/128 transparent") !== -1) {
    return 28502;
  } else if (name.indexOf("redmagic 8 pro 8/256 midnight") !== -1) {
    return 28503;
  } else if (name.indexOf("redmagic 8 pro 8/256 transparent") !== -1) {
    return 28504;
  } else if (name.indexOf("redmagic 8 pro plus 12/256 black") !== -1) {
    return 36064;
  } else if (name.indexOf("redmagic 8 pro plus 12/256 transparent") !== -1) {
    return 36067;
  } else if (name.indexOf("redmagic 8 pro plus 16/1tb black") !== -1) {
    return 36066;
  } else if (name.indexOf("redmagic 8 pro plus 16/1tb transparent") !== -1) {
    return 36068;
  } else if (name.indexOf("redmagic 8 pro plus 16/512 black") !== -1) {
    return 36065;
  } else if (name.indexOf("redmagic 8 pro plus 16/512 transparent") !== -1) {
    return 36069;
  } else if (name.indexOf("redmagic 8s pro 12/256 midnight") !== -1) {
    return 28525;
  } else if (name.indexOf("redmagic 8s pro 12/256 platinum") !== -1) {
    return 28530;
  } else if (name.indexOf("redmagic 8s pro 12/256 transparent") !== -1) {
    return 28505;
  } else if (name.indexOf("redmagic 8s pro 16/512 midnight") !== -1) {
    return 28506;
  } else if (name.indexOf("redmagic 8s pro 16/512 platinum") !== -1) {
    return 28529;
  } else if (name.indexOf("redmagic 8s pro 16/512 transparent") !== -1) {
    return 28526;
  } else if (name.indexOf("redmagic 8s pro 8/128 midnight") !== -1) {
    return 28507;
  } else if (name.indexOf("redmagic 8s pro 8/128 platinum") !== -1) {
    return 28528;
  } else if (name.indexOf("redmagic 8s pro 8/128 transparent") !== -1) {
    return 28508;
  } else if (name.indexOf("redmagic 8s pro 8/256 midnight") !== -1) {
    return 28509;
  } else if (name.indexOf("redmagic 8s pro 8/256 platinum") !== -1) {
    return 28527;
  } else if (name.indexOf("redmagic 8s pro 8/256 transparent") !== -1) {
    return 28510;
  } else if (
    (name.indexOf("redmagic") !== -1 || name.indexOf("red magic") !== -1) &&
    name.indexOf("9s pro +") !== -1 &&
    name.indexOf("16/512") !== -1 &&
    (name.indexOf("sleet") !== -1 || name.indexOf("black") !== -1)
  ) {
    return 36686;
  } else if (name.indexOf("redmagic 9s pro + 16/512 frost") !== -1) {
    return 36729;
  } else if (name.indexOf("redmagic 9s pro + 16/512 cyclone") !== -1) {
    return 36730;
  } else if (
    (name.indexOf("redmagic") !== -1 || name.indexOf("red magic") !== -1) &&
    name.indexOf("9s pro +") !== -1 &&
    name.indexOf("16/512") !== -1 &&
    (name.indexOf("snowfall") !== -1 || name.indexOf("silver") !== -1)
  ) {
    return 36731;
  } else if (name.indexOf("redmagic 9s pro + 24/1tb cyclone") !== -1) {
    return 36732;
  } else if (
    (name.indexOf("redmagic") !== -1 || name.indexOf("red magic") !== -1) &&
    name.indexOf("9s pro +") !== -1 &&
    name.indexOf("24/1tb") !== -1 &&
    (name.indexOf("sleet") !== -1 || name.indexOf("black") !== -1)
  ) {
    return 36733;
  } else if (name.indexOf("red magic 9s pro + 24/1tb frost") !== -1) {
    return 36734;
  } else if (
    (name.indexOf("redmagic") !== -1 || name.indexOf("red magic") !== -1) &&
    name.indexOf("9s pro +") !== -1 &&
    name.indexOf("24/1tb") !== -1 &&
    (name.indexOf("snowfall") !== -1 || name.indexOf("silver") !== -1)
  ) {
    return 36735;
  } else if (name.indexOf("redmagic 9s pro 12/256 cyclone") !== -1) {
    return 36736;
  } else if (
    (name.indexOf("redmagic") !== -1 || name.indexOf("red magic") !== -1) &&
    name.indexOf("9s pro") !== -1 &&
    name.indexOf("12/256") !== -1 &&
    (name.indexOf("snowfall") !== -1 || name.indexOf("silver") !== -1)
  ) {
    return 36737;
  } else if (
    (name.indexOf("redmagic") !== -1 || name.indexOf("red magic") !== -1) &&
    name.indexOf("9s pro") !== -1 &&
    name.indexOf("12/256") !== -1 &&
    (name.indexOf("frost") !== -1 || name.indexOf("white") !== -1)
  ) {
    return 36738;
  } else if (name.indexOf("redmagic 9s pro 12/512 cyclone") !== -1) {
    return 36739;
  } else if (
    (name.indexOf("redmagic") !== -1 || name.indexOf("red magic") !== -1) &&
    name.indexOf("9s pro") !== -1 &&
    name.indexOf("12/512") !== -1 &&
    (name.indexOf("sleet") !== -1 || name.indexOf("black") !== -1)
  ) {
    return 36740;
  } else if (
    (name.indexOf("redmagic") !== -1 || name.indexOf("red magic") !== -1) &&
    name.indexOf("9s pro") !== -1 &&
    name.indexOf("12/512") !== -1 &&
    (name.indexOf("frost") !== -1 || name.indexOf("white") !== -1)
  ) {
    return 36741;
  } else if (
    (name.indexOf("redmagic") !== -1 || name.indexOf("red magic") !== -1) &&
    name.indexOf("9s pro") !== -1 &&
    name.indexOf("12/512") !== -1 &&
    (name.indexOf("snowfall") !== -1 || name.indexOf("silver") !== -1)
  ) {
    return 36742;
  } else if (name.indexOf("redmagic 9s pro 16/512 cyclone") !== -1) {
    return 36743;
  } else if (
    (name.indexOf("redmagic") !== -1 || name.indexOf("red magic") !== -1) &&
    name.indexOf("9s pro") !== -1 &&
    name.indexOf("16/512") !== -1 &&
    (name.indexOf("sleet") !== -1 || name.indexOf("black") !== -1)
  ) {
    return 36744;
  } else if (
    (name.indexOf("redmagic") !== -1 || name.indexOf("red magic") !== -1) &&
    name.indexOf("9s pro") !== -1 &&
    name.indexOf("16/512") !== -1 &&
    (name.indexOf("frost") !== -1 || name.indexOf("white") !== -1)
  ) {
    return 36745;
  } else if (
    (name.indexOf("redmagic") !== -1 || name.indexOf("red magic") !== -1) &&
    name.indexOf("9s pro") !== -1 &&
    name.indexOf("16/512") !== -1 &&
    (name.indexOf("snowfall") !== -1 || name.indexOf("silver") !== -1)
  ) {
    return 36746;
  } else if (
    (name.indexOf("redmagic 9 pro") !== -1 ||
      name.indexOf("red magic 9 pro") !== -1) &&
    name.indexOf("12/256") !== -1 &&
    name.indexOf("cyclone") !== -1
  ) {
    return 36794;
  } else if (
    (name.indexOf("redmagic 9 pro") !== -1 ||
      name.indexOf("red magic 9 pro") !== -1) &&
    name.indexOf("12/256") !== -1 &&
    (name.indexOf("snowfall") !== -1 || name.indexOf("white") !== -1)
  ) {
    return 36795;
  } else if (name.indexOf("redmagic 9 pro 16/512 sleet") !== -1) {
    return 36793;
  } else if (
    (name.indexOf("redmagic") !== -1 || name.indexOf("red magic") !== -1) &&
    name.indexOf("9 pro") !== -1 &&
    name.indexOf("12/256") !== -1 &&
    (name.indexOf("sleet") !== -1 || name.indexOf("black") !== -1)
  ) {
    return 34469;
  } else if (name.indexOf("redmagic 9 pro 16/512 cyclone") !== -1) {
    return 34471;
  } else if (
    (name.indexOf("redmagic") !== -1 || name.indexOf("red magic") !== -1) &&
    name.indexOf("9 pro") !== -1 &&
    name.indexOf("16/512") !== -1 &&
    (name.indexOf("snowfall") !== -1 || name.indexOf("silver") !== -1)
  ) {
    return 34470;
  } else if (name.indexOf("redmagic 8 pro 12/256 midnight") !== -1) {
    return 28511;
  } else if (name.indexOf("redmagic 8 pro 16/512 midnight") !== -1) {
    return 28512;
  } else if (name.indexOf("redmagic 8s pro 12/256 graphite") !== -1) {
    return 28513;
  } else if (
    (name.indexOf("redmagic") !== -1 || name.indexOf("red magic") !== -1) &&
    name.indexOf("9s pro") !== -1 &&
    name.indexOf("12/256") !== -1 &&
    (name.indexOf("sleet") !== -1 || name.indexOf("black") !== -1)
  ) {
    return 36685;
  } else if (
    (name.indexOf("redmagic 10 pro") !== -1 ||
      name.indexOf("red magic 10 pro") !== -1) &&
    name.indexOf("12/256") !== -1 &&
    name.indexOf("transparent") === -1 &&
    (name.indexOf("black") !== -1 ||
      name.indexOf("dark") !== -1 ||
      name.indexOf("shadow") !== -1)
  ) {
    return 38675;
  } else if (
    (name.indexOf("redmagic 10 pro +") !== -1 ||
      name.indexOf("red magic 10 pro +") !== -1) &&
    name.indexOf("16/512") !== -1 &&
    name.indexOf("transparent") === -1 &&
    (name.indexOf("black") !== -1 ||
      name.indexOf("dark") !== -1 ||
      name.indexOf("shadow") !== -1)
  ) {
    return 37738;
  } else if (
    (name.indexOf("redmagic 10 pro") !== -1 ||
      name.indexOf("red magic 10 pro") !== -1) &&
    name.indexOf("12/256") !== -1 &&
    (name.indexOf("black") !== -1 ||
      name.indexOf("dark") !== -1 ||
      name.indexOf("dusk") !== -1)
  ) {
    return 37740;
  } else if (
    (name.indexOf("redmagic 10 pro") !== -1 ||
      name.indexOf("red magic 10 pro") !== -1) &&
    name.indexOf("12/256") !== -1 &&
    (name.indexOf("silver") !== -1 || name.indexOf("moonlight") !== -1)
  ) {
    return 37741;
  } else if (
    (name.indexOf("redmagic 10 pro") !== -1 ||
      name.indexOf("red magic 10 pro") !== -1) &&
    name.indexOf("12/256") !== -1 &&
    name.indexOf("transparent") === -1 &&
    name.indexOf("lightspeed") !== -1
  ) {
    return 37742;
  } else if (
    (name.indexOf("redmagic 10 pro +") !== -1 ||
      name.indexOf("red magic 10 pro +") !== -1) &&
    name.indexOf("16/512") !== -1 &&
    (name.indexOf("dark") !== -1 ||
      name.indexOf("black") !== -1 ||
      name.indexOf("dusk") !== -1)
  ) {
    return 37743;
  } else if (
    (name.indexOf("redmagic 10 pro +") !== -1 ||
      name.indexOf("red magic 10 pro +") !== -1) &&
    name.indexOf("16/512") !== -1 &&
    (name.indexOf("silver") !== -1 || name.indexOf("moonlight") !== -1)
  ) {
    return 37744;
  } else if (
    (name.indexOf("redmagic 10 pro +") !== -1 ||
      name.indexOf("red magic 10 pro +") !== -1) &&
    name.indexOf("16/512") !== -1 &&
    name.indexOf("lightspeed") !== -1
  ) {
    return 37745;
  } else if (
    (name.indexOf("redmagic 10 pro") !== -1 ||
      name.indexOf("red magic 10 pro") !== -1) &&
    name.indexOf("16/512") !== -1 &&
    name.indexOf("transparent") === -1 &&
    (name.indexOf("dark") !== -1 ||
      name.indexOf("black") !== -1 ||
      name.indexOf("shadow") !== -1)
  ) {
    return 37746;
  } else if (
    (name.indexOf("redmagic 10 pro") !== -1 ||
      name.indexOf("red magic 10 pro") !== -1) &&
    name.indexOf("12/512") !== -1 &&
    (name.indexOf("black") !== -1 ||
      name.indexOf("dark") !== -1 ||
      name.indexOf("dusk") !== -1)
  ) {
    return 37747;
  } else if (
    (name.indexOf("redmagic 10 pro") !== -1 ||
      name.indexOf("red magic 10 pro") !== -1) &&
    name.indexOf("24/1tb") !== -1 &&
    (name.indexOf("silver") !== -1 || name.indexOf("moonlight") !== -1)
  ) {
    return 37748;
  } else if (
    (name.indexOf("redmagic 10 pro") !== -1 ||
      name.indexOf("red magic 10 pro") !== -1) &&
    name.indexOf("24/1tb") !== -1 &&
    name.indexOf("transparent") === -1 &&
    name.indexOf("lightspeed") !== -1
  ) {
    return 37749;
  } else if (
    (name.indexOf("redmagic 10 pro") !== -1 ||
      name.indexOf("red magic 10 pro") !== -1) &&
    name.indexOf("24/1tb") !== -1 &&
    name.indexOf("transparent") === -1 &&
    (name.indexOf("dark") !== -1 ||
      name.indexOf("black") !== -1 ||
      name.indexOf("shadow") !== -1)
  ) {
    return 37750;
  } else if (
    (name.indexOf("redmagic 10 pro") !== -1 ||
      name.indexOf("red magic 10 pro") !== -1) &&
    name.indexOf("12/512") !== -1 &&
    name.indexOf("transparent") === -1 &&
    (name.indexOf("dark") !== -1 ||
      name.indexOf("black") !== -1 ||
      name.indexOf("shadow") !== -1)
  ) {
    return 37751;
  } else if (
    (name.indexOf("redmagic 10 pro") !== -1 ||
      name.indexOf("red magic 10 pro") !== -1) &&
    name.indexOf("16/512") !== -1 &&
    (name.indexOf("black") !== -1 ||
      name.indexOf("dark") !== -1 ||
      name.indexOf("dusk") !== -1)
  ) {
    return 37752;
  } else if (
    (name.indexOf("redmagic 10 pro") !== -1 ||
      name.indexOf("red magic 10 pro") !== -1) &&
    name.indexOf("24/1tb") !== -1 &&
    (name.indexOf("black") !== -1 ||
      name.indexOf("dark") !== -1 ||
      name.indexOf("dusk") !== -1)
  ) {
    return 37753;
  } else if (
    (name.indexOf("redmagic 10 pro") !== -1 ||
      name.indexOf("red magic 10 pro") !== -1) &&
    name.indexOf("12/512") !== -1 &&
    (name.indexOf("silver") !== -1 || name.indexOf("moonlight") !== -1)
  ) {
    return 37754;
  } else if (
    (name.indexOf("redmagic 10 pro") !== -1 ||
      name.indexOf("red magic 10 pro") !== -1) &&
    name.indexOf("16/512") !== -1 &&
    (name.indexOf("silver") !== -1 || name.indexOf("moonlight") !== -1)
  ) {
    return 37755;
  } else if (
    (name.indexOf("redmagic 10 pro") !== -1 ||
      name.indexOf("red magic 10 pro") !== -1) &&
    name.indexOf("16/512") !== -1 &&
    name.indexOf("transparent") === -1 &&
    name.indexOf("lightspeed") !== -1
  ) {
    return 37756;
  } else if (
    (name.indexOf("redmagic 10 pro") !== -1 ||
      name.indexOf("red magic 10 pro") !== -1) &&
    name.indexOf("12/512") !== -1 &&
    name.indexOf("transparent") === -1 &&
    name.indexOf("lightspeed") !== -1
  ) {
    return 37757;
  } else if (
    (name.indexOf("redmagic 10 pro +") !== -1 ||
      name.indexOf("red magic 10 pro +") !== -1) &&
    name.indexOf("transparent") === -1 &&
    name.indexOf("24/1tb") !== -1 &&
    (name.indexOf("black") !== -1 ||
      name.indexOf("dark") !== -1 ||
      name.indexOf("shadow") !== -1)
  ) {
    return 37770;
  } else if (
    (name.indexOf("redmagic 10 pro +") !== -1 ||
      name.indexOf("red magic 10 pro +") !== -1) &&
    name.indexOf("24/1tb") !== -1 &&
    (name.indexOf("black") !== -1 ||
      name.indexOf("dark") !== -1 ||
      name.indexOf("dusk") !== -1)
  ) {
    return 37771;
  } else if (
    (name.indexOf("redmagic 10 pro +") !== -1 ||
      name.indexOf("red magic 10 pro +") !== -1) &&
    name.indexOf("24/1tb") !== -1 &&
    (name.indexOf("silver") !== -1 || name.indexOf("moonlight") !== -1)
  ) {
    return 37772;
  } else if (
    (name.indexOf("redmagic 10 pro +") !== -1 ||
      name.indexOf("red magic 10 pro +") !== -1) &&
    name.indexOf("24/1tb") !== -1 &&
    name.indexOf("transparent") === -1 &&
    name.indexOf("lightspeed") !== -1
  ) {
    return 37773;
  } else if (
    name.indexOf("redmagic") !== -1 &&
    name.indexOf("red magic") !== -1 &&
    name.indexOf("10 pro") !== -1 &&
    (name.indexOf("pro +") === -1 || name.indexOf("pro plus") === -1) &&
    name.indexOf("12/256") !== -1 &&
    name.indexOf("dusk") !== -1
  ) {
    return 38670;
  } else if (
    name.indexOf("redmagic") !== -1 &&
    name.indexOf("red magic") !== -1 &&
    name.indexOf("10 pro") !== -1 &&
    (name.indexOf("pro +") === -1 || name.indexOf("pro plus") === -1) &&
    name.indexOf("12/256") !== -1 &&
    name.indexOf("lightspeed") !== -1
  ) {
    return 37742;
  } else if (
    name.indexOf("redmagic") !== -1 &&
    name.indexOf("red magic") !== -1 &&
    name.indexOf("10 pro") !== -1 &&
    (name.indexOf("pro +") === -1 || name.indexOf("pro plus") === -1) &&
    name.indexOf("12/256") !== -1 &&
    name.indexOf("moonlight") !== -1
  ) {
    return 37741;
  } else if (
    name.indexOf("redmagic") !== -1 &&
    name.indexOf("red magic") !== -1 &&
    name.indexOf("10 pro") !== -1 &&
    (name.indexOf("pro +") === -1 || name.indexOf("pro plus") === -1) &&
    name.indexOf("12/256") !== -1 &&
    name.indexOf("shadow") !== -1
  ) {
    return 38675;
  } else if (
    name.indexOf("redmagic") !== -1 &&
    name.indexOf("red magic") !== -1 &&
    name.indexOf("10 pro") !== -1 &&
    (name.indexOf("pro +") === -1 || name.indexOf("pro plus") === -1) &&
    name.indexOf("12/512") !== -1 &&
    name.indexOf("dusk") !== -1
  ) {
    return 37747;
  } else if (
    name.indexOf("redmagic") !== -1 &&
    name.indexOf("red magic") !== -1 &&
    name.indexOf("10 pro") !== -1 &&
    (name.indexOf("pro +") === -1 || name.indexOf("pro plus") === -1) &&
    name.indexOf("12/512") !== -1 &&
    name.indexOf("lightspeed") !== -1
  ) {
    return 37757;
  } else if (
    name.indexOf("redmagic") !== -1 &&
    name.indexOf("red magic") !== -1 &&
    name.indexOf("10 pro") !== -1 &&
    (name.indexOf("pro +") === -1 || name.indexOf("pro plus") === -1) &&
    name.indexOf("12/512") !== -1 &&
    name.indexOf("moonlight") !== -1
  ) {
    return 37754;
  } else if (
    name.indexOf("redmagic") !== -1 &&
    name.indexOf("red magic") !== -1 &&
    name.indexOf("10 pro") !== -1 &&
    (name.indexOf("pro +") === -1 || name.indexOf("pro plus") === -1) &&
    name.indexOf("12/512") !== -1 &&
    name.indexOf("shadow") !== -1
  ) {
    return 37751;
  } else if (
    name.indexOf("redmagic") !== -1 &&
    name.indexOf("red magic") !== -1 &&
    name.indexOf("10 pro") !== -1 &&
    (name.indexOf("pro +") === -1 || name.indexOf("pro plus") === -1) &&
    name.indexOf("16/512") !== -1 &&
    name.indexOf("dusk") !== -1
  ) {
    return 37752;
  } else if (
    name.indexOf("redmagic") !== -1 &&
    name.indexOf("red magic") !== -1 &&
    name.indexOf("10 pro") !== -1 &&
    (name.indexOf("pro +") === -1 || name.indexOf("pro plus") === -1) &&
    name.indexOf("16/512") !== -1 &&
    name.indexOf("lightspeed") !== -1
  ) {
    return 37756;
  } else if (
    name.indexOf("redmagic") !== -1 &&
    name.indexOf("red magic") !== -1 &&
    name.indexOf("10 pro") !== -1 &&
    (name.indexOf("pro +") === -1 || name.indexOf("pro plus") === -1) &&
    name.indexOf("16/512") !== -1 &&
    name.indexOf("moonlight") !== -1
  ) {
    return 37755;
  } else if (
    name.indexOf("redmagic") !== -1 &&
    name.indexOf("red magic") !== -1 &&
    name.indexOf("10 pro") !== -1 &&
    (name.indexOf("pro +") === -1 || name.indexOf("pro plus") === -1) &&
    name.indexOf("16/512") !== -1 &&
    name.indexOf("shadow") !== -1
  ) {
    return 37746;
  } else if (
    name.indexOf("redmagic") !== -1 &&
    name.indexOf("red magic") !== -1 &&
    name.indexOf("10 pro") !== -1 &&
    (name.indexOf("pro +") === -1 || name.indexOf("pro plus") === -1) &&
    name.indexOf("24/1tb") !== -1 &&
    name.indexOf("dusk") !== -1
  ) {
    return 37753;
  } else if (
    name.indexOf("redmagic") !== -1 &&
    name.indexOf("red magic") !== -1 &&
    name.indexOf("10 pro") !== -1 &&
    (name.indexOf("pro +") === -1 || name.indexOf("pro plus") === -1) &&
    name.indexOf("24/1tb") !== -1 &&
    name.indexOf("lightspeed") !== -1
  ) {
    return 37749;
  } else if (
    name.indexOf("redmagic") !== -1 &&
    name.indexOf("red magic") !== -1 &&
    name.indexOf("10 pro") !== -1 &&
    (name.indexOf("pro +") === -1 || name.indexOf("pro plus") === -1) &&
    name.indexOf("24/1tb") !== -1 &&
    name.indexOf("moonlight") !== -1
  ) {
    return 37748;
  } else if (
    name.indexOf("redmagic") !== -1 &&
    name.indexOf("red magic") !== -1 &&
    name.indexOf("10 pro") !== -1 &&
    (name.indexOf("pro +") === -1 || name.indexOf("pro plus") === -1) &&
    name.indexOf("24/1tb") !== -1 &&
    name.indexOf("shadow") !== -1
  ) {
    return 37750;
  } else if (
    name.indexOf("redmagic") !== -1 &&
    name.indexOf("red magic") !== -1 &&
    (name.indexOf("10 pro +") !== -1 || name.indexOf("10 pro plus") !== -1) &&
    name.indexOf("16/512") !== -1 &&
    name.indexOf("dusk") !== -1
  ) {
    return 37743;
  } else if (
    name.indexOf("redmagic") !== -1 &&
    name.indexOf("red magic") !== -1 &&
    (name.indexOf("10 pro +") !== -1 || name.indexOf("10 pro plus") !== -1) &&
    name.indexOf("16/512") !== -1 &&
    name.indexOf("lightspeed") !== -1
  ) {
    return 37745;
  } else if (
    name.indexOf("redmagic") !== -1 &&
    name.indexOf("red magic") !== -1 &&
    (name.indexOf("10 pro +") !== -1 || name.indexOf("10 pro plus") !== -1) &&
    name.indexOf("16/512") !== -1 &&
    name.indexOf("moonlight") !== -1
  ) {
    return 37744;
  } else if (
    name.indexOf("redmagic") !== -1 &&
    name.indexOf("red magic") !== -1 &&
    (name.indexOf("10 pro +") !== -1 || name.indexOf("10 pro plus") !== -1) &&
    name.indexOf("16/512") !== -1 &&
    name.indexOf("shadow") !== -1
  ) {
    return 37738;
  } else if (
    name.indexOf("redmagic") !== -1 &&
    name.indexOf("red magic") !== -1 &&
    (name.indexOf("10 pro +") !== -1 || name.indexOf("10 pro plus") !== -1) &&
    name.indexOf("24/1tb") !== -1 &&
    name.indexOf("dusk") !== -1
  ) {
    return 37771;
  } else if (
    name.indexOf("redmagic") !== -1 &&
    name.indexOf("red magic") !== -1 &&
    (name.indexOf("10 pro +") !== -1 || name.indexOf("10 pro plus") !== -1) &&
    name.indexOf("24/1tb") !== -1 &&
    name.indexOf("lightspeed") !== -1
  ) {
    return 37773;
  } else if (
    name.indexOf("redmagic") !== -1 &&
    name.indexOf("red magic") !== -1 &&
    (name.indexOf("10 pro +") !== -1 || name.indexOf("10 pro plus") !== -1) &&
    name.indexOf("24/1tb") !== -1 &&
    name.indexOf("moonlight") !== -1
  ) {
    return 37772;
  } else if (
    name.indexOf("redmagic") !== -1 &&
    name.indexOf("red magic") !== -1 &&
    (name.indexOf("10 pro +") !== -1 || name.indexOf("10 pro plus") !== -1) &&
    name.indexOf("24/1tb") !== -1 &&
    name.indexOf("shadow") !== -1
  ) {
    return 37770;
  } else if (name.indexOf("z50 ultra 12/256 black") !== -1) {
    return 36132;
  } else if (name.indexOf("z50 ultra 12/256 silver") !== -1) {
    return 36135;
  } else if (name.indexOf("z50 ultra 12/256 starry sky") !== -1) {
    return 36139;
  } else if (name.indexOf("z50 ultra 12/512 black") !== -1) {
    return 36133;
  } else if (name.indexOf("z50 ultra 12/512 silver") !== -1) {
    return 36136;
  } else if (name.indexOf("z50 ultra 12/512 starry sky") !== -1) {
    return 36140;
  } else if (name.indexOf("z50 ultra 16/1tb black") !== -1) {
    return 36134;
  } else if (name.indexOf("z50 ultra 16/1tb silver") !== -1) {
    return 36137;
  } else if (name.indexOf("z50 ultra 16/1tb starry sky") !== -1) {
    return 36141;
  } else if (name.indexOf("z50 ultra 8/256 black") !== -1) {
    return 36131;
  } else if (name.indexOf("z50 ultra 8/256 silver") !== -1) {
    return 36138;
  } else if (name.indexOf("z50 ultra 8/256 starry sky") !== -1) {
    return 36142;
  } else if (name.indexOf("z50s pro 12/1tb black") !== -1) {
    return 28514;
  } else if (name.indexOf("z50s pro 12/1tb khaki") !== -1) {
    return 28515;
  } else if (name.indexOf("z50s pro 12/1tb silver") !== -1) {
    return 36070;
  } else if (name.indexOf("z50s pro 12/256 black") !== -1) {
    return 28516;
  } else if (name.indexOf("z50s pro 12/256 khaki") !== -1) {
    return 28517;
  } else if (name.indexOf("z50s pro 12/256 silver") !== -1) {
    return 36071;
  } else if (name.indexOf("z50s pro 16/1tb black") !== -1) {
    return 28518;
  } else if (name.indexOf("z50s pro 16/1tb khaki") !== -1) {
    return 28519;
  } else if (name.indexOf("z50s pro 16/1tb silver") !== -1) {
    return 36072;
  } else if (name.indexOf("z60 ultra 12/256 black") !== -1) {
    return 34473;
  } else if (name.indexOf("z60 ultra 12/512 black") !== -1) {
    return 34474;
  } else if (name.indexOf("Z60 Ultra 12/256 Titanium") !== -1) {
    return 36791;
  } else if (name.indexOf("z60 ultra 16/1tb black") !== -1) {
    return 36783;
  } else if (name.indexOf("z60 ultra 8/256 titanium") !== -1) {
    return 36792;
  } else if (
    name.indexOf("z60 ultra 12/512 titanium") !== -1 ||
    name.indexOf("z60 ultra 12/512 silver") !== -1
  ) {
    return 34475;
  } else if (
    name.indexOf("z60 ultra 16/512 titanium") !== -1 ||
    name.indexOf("z60 ultra 16/512 silver") !== -1
  ) {
    return 34476;
  } else if (
    name.indexOf("z60 ultra") !== -1 &&
    name.indexOf("16/512") !== -1 &&
    name.indexOf("black") !== -1
  ) {
    return 36782;
  } else if (name.indexOf("z60 ultra 8/256 black") !== -1) {
    return 34472;

    //  ASUS
  } else if (
    (name.indexOf("rog amd ryzen") !== -1 || name.indexOf("rog ally") !== -1) &&
    name.indexOf("16/256") !== -1
  ) {
    return 30134;
  } else if (
    (name.indexOf("rog amd ryzen") !== -1 || name.indexOf("rog ally") !== -1) &&
    name.indexOf("16/512") !== -1
  ) {
    return 27653;
  } else if (name.indexOf("rog ally x 12/1tb black") !== -1) {
    return 36185;
  } else if (name.indexOf("rog phone 8 12/256 phantom black") !== -1) {
    return 35690;
  } else if (name.indexOf("rog phone 8 12/256 rebel gr") !== -1) {
    return 35692;
  } else if (name.indexOf("rog phone 8 16/256 phantom black") !== -1) {
    return 35691;
  } else if (name.indexOf("rog phone 8 16/256 rebel gr") !== -1) {
    return 35693;
  } else if (name.indexOf("rog phone 8 pro 12/256 phantom black") !== -1) {
    return 35694;
  } else if (name.indexOf("rog phone 8 pro 16/256 phantom black") !== -1) {
    return 35695;
  } else if (name.indexOf("rog phone 8 pro 16/512 phantom black") !== -1) {
    return 36474;
  } else if (name.indexOf("rog phone 8 pro 24/1tb phantom black") !== -1) {
    return 36473;
  } else if (name.indexOf("zenfone 10 12/256 aurora green") !== -1) {
    return 28372;
  } else if (name.indexOf("zenfone 10 12/256 comet white") !== -1) {
    return 28373;
  } else if (name.indexOf("zenfone 10 12/256 eclipse red") !== -1) {
    return 28374;
  } else if (name.indexOf("zenfone 10 12/256 midnight black") !== -1) {
    return 28375;
  } else if (name.indexOf("zenfone 10 12/256 starry blue") !== -1) {
    return 28376;
  } else if (name.indexOf("zenfone 10 16/256 aurora green") !== -1) {
    return 28377;
  } else if (name.indexOf("zenfone 10 16/256 comet white") !== -1) {
    return 28378;
  } else if (name.indexOf("zenfone 10 16/256 eclipse red") !== -1) {
    return 28379;
  } else if (name.indexOf("zenfone 10 16/256 midnight black") !== -1) {
    return 28380;
  } else if (name.indexOf("zenfone 10 16/256 starry blue") !== -1) {
    return 28381;
  } else if (name.indexOf("zenfone 10 16/512 midnight black") !== -1) {
    return 27802;
  } else if (name.indexOf("zenfone 10 16/512 starry blue") !== -1) {
    return 27801;
  } else if (name.indexOf("zenfone 10 16/512 aurora green") !== -1) {
    return 28382;
  } else if (name.indexOf("zenfone 10 16/512 comet white") !== -1) {
    return 28383;
  } else if (name.indexOf("zenfone 10 16/512 eclipse red") !== -1) {
    return 28384;
  } else if (name.indexOf("zenfone 10 16/512 starry blue") !== -1) {
    return 28386;
  } else if (name.indexOf("zenfone 10 8/128 midnight black") !== -1) {
    return 27798;
  } else if (name.indexOf("zenfone 10 8/128 aurora green") !== -1) {
    return 28387;
  } else if (name.indexOf("zenfone 10 8/128 comet white") !== -1) {
    return 28388;
  } else if (name.indexOf("zenfone 10 8/128 eclipse red") !== -1) {
    return 28389;
  } else if (name.indexOf("zenfone 10 8/128 starry blue") !== -1) {
    return 28391;
  } else if (name.indexOf("zenfone 10 8/256 comet white") !== -1) {
    return 27799;
  } else if (name.indexOf("zenfone 10 8/256 midnight black") !== -1) {
    return 27800;
  } else if (name.indexOf("zenfone 10 8/256 starry blue") !== -1) {
    return 27803;
  } else if (name.indexOf("zenfone 10 8/256 aurora green") !== -1) {
    return 28392;
  } else if (name.indexOf("zenfone 10 8/256 eclipse red") !== -1) {
    return 28394;
  } else if (name.indexOf("zenfone 11 ultra 12/256 desert sand") !== -1) {
    return 36170;
  } else if (name.indexOf("zenfone 11 ultra 12/256 eternal black") !== -1) {
    return 36159;
  } else if (name.indexOf("zenfone 11 ultra 12/256 misty gr") !== -1) {
    return 36168;
  } else if (name.indexOf("zenfone 11 ultra 12/256 skyline blue") !== -1) {
    return 36166;
  } else if (name.indexOf("zenfone 11 ultra 16/512 desert sand") !== -1) {
    return 36171;
  } else if (name.indexOf("zenfone 11 ultra 16/512 eternal black") !== -1) {
    return 36158;
  } else if (name.indexOf("zenfone 11 ultra 16/512 misty gr") !== -1) {
    return 36169;
  } else if (name.indexOf("zenfone 11 ultra 16/512 skyline blue") !== -1) {
    return 36167;
  } else if (
    name.indexOf("zenfone 12 ultra 16/512") !== -1 &&
    name.indexOf("white") !== -1
  ) {
    return 38113;
  } else if (
    name.indexOf("zenfone 12 ultra 16/512") !== -1 &&
    name.indexOf("green") !== -1
  ) {
    return 38112;
  } else if (
    name.indexOf("zenfone 12 ultra 12/256") !== -1 &&
    name.indexOf("green") !== -1
  ) {
    return 38107;
  } else if (
    name.indexOf("zenfone 12 ultra 12/256") !== -1 &&
    name.indexOf("black") !== -1
  ) {
    return 38080;
  } else if (
    name.indexOf("zenfone 12 ultra 12/256") !== -1 &&
    name.indexOf("white") !== -1
  ) {
    return 38105;
  } else if (
    name.indexOf("zenfone 12 ultra 16/512") !== -1 &&
    name.indexOf("black") !== -1
  ) {
    return 38111;
  } else if (name.indexOf("zenfone 8 flip 8/128 black") !== -1) {
    return 27753;
  } else if (
    name.indexOf("zenfone 8 flip 8/128 grey") !== -1 ||
    name.indexOf("zenfone 8 flip 8/128 gray") !== -1
  ) {
    return 27752;
  } else if (
    name.indexOf("zenfone 8 flip 8/256 grey") !== -1 ||
    name.indexOf("zenfone 8 flip 8/256 gray") !== -1
  ) {
    return 27754;
  } else if (
    name.indexOf("zenfone 8 flip") !== -1 &&
    name.indexOf("8/128") !== -1 &&
    (name.indexOf("galactic") !== -1 || name.indexOf("black") !== -1)
  ) {
    return 30263;
  } else if (
    name.indexOf("zenfone 8 flip") !== -1 &&
    name.indexOf("8/256") !== -1 &&
    (name.indexOf("galactic") !== -1 || name.indexOf("black") !== -1)
  ) {
    return 30264;
  } else if (
    name.indexOf("zenfone 8 flip") !== -1 &&
    name.indexOf("8/128") !== -1 &&
    (name.indexOf("glacier") !== -1 || name.indexOf("silver") !== -1)
  ) {
    return 30265;
  } else if (
    name.indexOf("zenfone 8 flip") !== -1 &&
    name.indexOf("8/256") !== -1 &&
    (name.indexOf("glacier") !== -1 || name.indexOf("silver") !== -1)
  ) {
    return 30266;
  } else if (name.indexOf("zenfone 9 16/256 black") !== -1) {
    return 28397;
  } else if (name.indexOf("zenfone 9 6/128 midnight black") !== -1) {
    return 28398;
  } else if (name.indexOf("zenfone 9 6/128 moonlight white") !== -1) {
    return 28399;
  } else if (name.indexOf("zenfone 9 6/128 starry blue") !== -1) {
    return 28400;
  } else if (name.indexOf("zenfone 9 6/128 sunset red") !== -1) {
    return 28401;
  } else if (name.indexOf("zenfone 9 8/128 midnight black") !== -1) {
    return 28218;
  } else if (name.indexOf("zenfone 9 8/128 starry blue") !== -1) {
    return 28219;
  } else if (name.indexOf("zenfone 9 8/128 white") !== -1) {
    return 28402;
  } else if (name.indexOf("zenfone 9 8/256 midnight black") !== -1) {
    return 28403;
  } else if (name.indexOf("zenfone 9 8/256 moonlight white") !== -1) {
    return 28404;
  } else if (name.indexOf("zenfone 9 8/256 starry blue") !== -1) {
    return 28405;
  } else if (name.indexOf("zenfone 9 8/256 sunset red") !== -1) {
    return 28406;

    //  JBL
  } else if (name.indexOf("jbl charge 6 black") != -1) {
    return 39173;
  } else if (name.indexOf("jbl charge 6 blue") != -1) {
    return 39174;
  } else if (name.indexOf("jbl charge 6 purple") != -1) {
    return 39175;
  } else if (name.indexOf("jbl charge 6 red") != -1) {
    return 39176;
  } else if (name.indexOf("jbl charge 6 squad") != -1) {
    return 39177;
  } else if (name.indexOf("jbl charge 6 white") != -1) {
    return 39178;
  } else if (name.indexOf("jbl clip 5 black") != -1) {
    return 39197;
  } else if (name.indexOf("jbl clip 5 blue") != -1) {
    return 39199;
  } else if (name.indexOf("jbl clip 5 orange") != -1) {
    return 39205;
  } else if (name.indexOf("jbl clip 5 pink") != -1) {
    return 39200;
  } else if (name.indexOf("jbl clip 5 red") != -1) {
    return 39201;
  } else if (name.indexOf("jbl clip 5 sand") != -1) {
    return 39202;
  } else if (name.indexOf("jbl clip 5 squad") != -1) {
    return 39203;
  } else if (name.indexOf("jbl clip 5 white") != -1) {
    return 39204;
  } else if (name.indexOf("jbl flip 7 black") != -1) {
    return 39184;
  } else if (name.indexOf("jbl flip 7 blue") != -1) {
    return 39185;
  } else if (name.indexOf("jbl flip 7 purple") != -1) {
    return 39186;
  } else if (name.indexOf("jbl flip 7 red") != -1) {
    return 39187;
  } else if (name.indexOf("jbl flip 7 squad") != -1) {
    return 39188;
  } else if (name.indexOf("jbl flip 7 white") != -1) {
    return 39189;
  } else if (name.indexOf("jbl xtreme 4 black") !== -1) {
    return 38000;
  } else if (name.indexOf("jbl xtreme 4 blue") !== -1) {
    return 38007;
  } else if (name.indexOf("jbl xtreme 4 khaki") !== -1) {
    return 38009;
  } else if (name.indexOf("jbl flip 6 black") !== -1) {
    return 27639;
  } else if (name.indexOf("jbl flip 6 blue") !== -1) {
    return 28084;
  } else if (name.indexOf("jbl flip 6 gray") !== -1) {
    return 28086;
  } else if (name.indexOf("jbl flip 6 red") !== -1) {
    return 28085;
  } else if (name.indexOf("jbl flip 6 squad") !== -1) {
    return 28083;
  } else if (name.indexOf("jbl flip 6 teal") !== -1) {
    return 28087;
  } else if (name.indexOf("jbl flip 6 pink") !== -1) {
    return 38682;
  } else if (name.indexOf("jbl boombox black") !== -1) {
    return 12546;
  } else if (name.indexOf("jbl boombox 2 black") !== -1) {
    return 19658;
  } else if (name.indexOf("jbl boombox 2 squad") !== -1) {
    return 19631;
  } else if (name.indexOf("jbl boombox 3 black") !== -1) {
    return 27643;
  } else if (name.indexOf("jbl boombox 3 squad") !== -1) {
    return 28082;
  } else if (name.indexOf("jbl charge 5 black") !== -1) {
    return 13691;
  } else if (name.indexOf("jbl charge 5 blue") !== -1) {
    return 20283;
  } else if (name.indexOf("jbl charge 5 forest green") !== -1) {
    return 20278;
  } else if (
    name.indexOf("jbl charge 5 grey") !== -1 ||
    name.indexOf("jbl charge 5 gray") !== -1
  ) {
    return 20285;
  } else if (name.indexOf("jbl charge 5 pink") !== -1) {
    return 20281;
  } else if (name.indexOf("jbl charge 5 red") !== -1) {
    return 20279;
  } else if (name.indexOf("jbl charge 5 squad") !== -1) {
    return 20280;
  } else if (name.indexOf("jbl charge 5 teal") !== -1) {
    return 20282;
  } else if (name.indexOf("jbl charge 5 white") !== -1) {
    return 20286;
  } else if (name.indexOf("jbl clip 3 black/white camouflage") !== -1) {
    return 15233;
  } else if (name.indexOf("jbl clip 3 black/white/brown camo") !== -1) {
    return 19609;
  } else if (name.indexOf("jbl clip 3 desert sand") !== -1) {
    return 15231;
  } else if (name.indexOf("jbl clip 3 pink") !== -1) {
    return 15230;
  } else if (name.indexOf("jbl clip 3 red") !== -1) {
    return 15224;
  } else if (name.indexOf("jbl clip 3 green") !== -1) {
    return 15228;
  } else if (name.indexOf("jbl clip 3 black") !== -1) {
    return 15222;
  } else if (name.indexOf("jbl clip 3 yellow") !== -1) {
    return 15229;
  } else if (name.indexOf("jbl clip 3 blue") !== -1) {
    return 15223;
  } else if (name.indexOf("jbl clip 3 teal") !== -1) {
    return 15226;
  } else if (name.indexOf("jbl clip 3 squad") !== -1) {
    return 15232;
  } else if (name.indexOf("jbl clip 3 white") !== -1) {
    return 15227;
  } else if (name.indexOf("jbl clip 3 grey") !== -1) {
    return 15225;
  } else if (name.indexOf("jbl clip 4 black/orange") !== -1) {
    return 20301;
  } else if (name.indexOf("jbl clip 4 blue") !== -1) {
    return 20305;
  } else if (name.indexOf("jbl clip 4 blue/pink") !== -1) {
    return 20302;
  } else if (name.indexOf("jbl clip 4 orange") !== -1) {
    return 20306;
  } else if (name.indexOf("jbl clip 4 pink") !== -1) {
    return 20304;
  } else if (
    name.indexOf("jbl clip 4 teal") !== -1 ||
    name.indexOf("jbl clip 4 green") !== -1
  ) {
    return 20307;
  } else if (name.indexOf("jbl clip 4 white") !== -1) {
    return 20308;
  } else if (name.indexOf("jbl clip 4 yellow") !== -1) {
    return 20303;
  } else if (name.indexOf("jbl flip 5 black") !== -1) {
    return 15234;
  } else if (name.indexOf("jbl flip 5 blue") !== -1) {
    return 15235;
  } else if (name.indexOf("jbl flip 5 eco edition forest green") !== -1) {
    return 18972;
  } else if (name.indexOf("jbl flip 5 eco edition ocean blue") !== -1) {
    return 18970;
  } else if (name.indexOf("jbl flip 5 grey") !== -1) {
    return 15237;
  } else if (name.indexOf("jbl flip 5 mustard yellow") !== -1) {
    return 15240;
  } else if (name.indexOf("jbl flip 5 pink") !== -1) {
    return 15241;
  } else if (name.indexOf("jbl flip 5 red") !== -1) {
    return 15236;
  } else if (name.indexOf("jbl flip 5 sand") !== -1) {
    return 15242;
  } else if (name.indexOf("jbl flip 5 squad") !== -1) {
    return 15243;
  } else if (name.indexOf("jbl flip 5 teal") !== -1) {
    return 15238;
  } else if (name.indexOf("jbl flip 5 white") !== -1) {
    return 15239;
  } else if (name.indexOf("jbl go 3 black") !== -1) {
    return 18968;
  } else if (name.indexOf("jbl go 3 black / orange") !== -1) {
    return 18963;
  } else if (name.indexOf("jbl go 3 blue") !== -1) {
    return 18964;
  } else if (name.indexOf("jbl go 3 blue / pink") !== -1) {
    return 18960;
  } else if (name.indexOf("jbl go 3 green") !== -1) {
    return 18959;
  } else if (name.indexOf("jbl go 3 grey") !== -1) {
    return 18961;
  } else if (name.indexOf("jbl go 3 orange") !== -1) {
    return 18966;
  } else if (name.indexOf("jbl go 3 pink") !== -1) {
    return 18969;
  } else if (name.indexOf("jbl go 3 red") !== -1) {
    return 18965;
  } else if (name.indexOf("jbl go 3 teal") !== -1) {
    return 18962;
  } else if (name.indexOf("jbl go 3 white") !== -1) {
    return 18958;
  } else if (name.indexOf("jbl go 3 yellow") !== -1) {
    return 18967;
  } else if (name.indexOf("jbl pulse 4 black") !== -1) {
    return 19629;
  } else if (name.indexOf("jbl xtreme 3 black") !== -1) {
    return 19588;
  } else if (name.indexOf("jbl xtreme 3 blue") !== -1) {
    return 19590;
  } else if (name.indexOf("jbl xtreme 3 gray") !== -1) {
    return 22149;
  } else if (name.indexOf("jbl xtreme 3 squad") !== -1) {
    return 19589;
  } else if (name.indexOf("jbl partybox 100 black") !== -1) {
    return 19637;
  } else if (name.indexOf("jbl partybox 1000 black") !== -1) {
    return 19638;
  } else if (name.indexOf("jbl partybox 300 black") !== -1) {
    return 19640;
  } else if (name.indexOf("jbl partybox 310 black") !== -1) {
    return 19639;

    //  Honor
  } else if (
    name.indexOf("honor 200") != -1 &&
    name.indexOf("12/256") != -1 &&
    name.indexOf("lite") === -1 &&
    name.indexOf("pro") === -1 &&
    name.indexOf("black") != -1
  ) {
    return 39080;
  } else if (
    name.indexOf("honor 200") != -1 &&
    name.indexOf("12/256") != -1 &&
    name.indexOf("lite") === -1 &&
    name.indexOf("pro") === -1 &&
    name.indexOf("green") != -1
  ) {
    return 39081;
  } else if (
    name.indexOf("honor 200") != -1 &&
    name.indexOf("12/256") != -1 &&
    name.indexOf("lite") === -1 &&
    name.indexOf("pro") === -1 &&
    name.indexOf("white") != -1
  ) {
    return 39082;
  } else if (
    name.indexOf("honor 200") != -1 &&
    name.indexOf("12/512") != -1 &&
    name.indexOf("lite") === -1 &&
    name.indexOf("pro") === -1 &&
    name.indexOf("black") != -1
  ) {
    return 39098;
  } else if (
    name.indexOf("honor 200") != -1 &&
    name.indexOf("12/512") != -1 &&
    name.indexOf("lite") === -1 &&
    name.indexOf("pro") === -1 &&
    name.indexOf("green") != -1
  ) {
    return 39099;
  } else if (
    name.indexOf("honor 200") != -1 &&
    name.indexOf("12/512") != -1 &&
    name.indexOf("lite") === -1 &&
    name.indexOf("pro") === -1 &&
    name.indexOf("white") != -1
  ) {
    return 39100;
  } else if (
    name.indexOf("honor 200") != -1 &&
    name.indexOf("16/256") != -1 &&
    name.indexOf("lite") === -1 &&
    name.indexOf("pro") === -1 &&
    name.indexOf("black") != -1
  ) {
    return 39086;
  } else if (
    name.indexOf("honor 200") != -1 &&
    name.indexOf("16/256") != -1 &&
    name.indexOf("lite") === -1 &&
    name.indexOf("pro") === -1 &&
    name.indexOf("gren") != -1
  ) {
    return 39087;
  } else if (
    name.indexOf("honor 200") != -1 &&
    name.indexOf("16/256") != -1 &&
    name.indexOf("lite") === -1 &&
    name.indexOf("pro") === -1 &&
    name.indexOf("white") != -1
  ) {
    return 39088;
  } else if (
    name.indexOf("honor 200") != -1 &&
    name.indexOf("16/512") != -1 &&
    name.indexOf("lite") === -1 &&
    name.indexOf("pro") === -1 &&
    name.indexOf("black") != -1
  ) {
    return 39092;
  } else if (
    name.indexOf("honor 200") != -1 &&
    name.indexOf("16/512") != -1 &&
    name.indexOf("lite") === -1 &&
    name.indexOf("pro") === -1 &&
    name.indexOf("green") != -1
  ) {
    return 39093;
  } else if (
    name.indexOf("honor 200") != -1 &&
    name.indexOf("16/512") != -1 &&
    name.indexOf("lite") === -1 &&
    name.indexOf("pro") === -1 &&
    name.indexOf("white") != -1
  ) {
    return 39094;
  } else if (
    name.indexOf("honor 200") != -1 &&
    name.indexOf("8/256") != -1 &&
    name.indexOf("lite") === -1 &&
    name.indexOf("pro") === -1 &&
    name.indexOf("black") != -1
  ) {
    return 38995;
  } else if (
    name.indexOf("honor 200") != -1 &&
    name.indexOf("8/256") != -1 &&
    name.indexOf("lite") === -1 &&
    name.indexOf("pro") === -1 &&
    name.indexOf("green") != -1
  ) {
    return 39075;
  } else if (
    name.indexOf("honor 200") != -1 &&
    name.indexOf("8/256") != -1 &&
    name.indexOf("lite") === -1 &&
    name.indexOf("pro") === -1 &&
    name.indexOf("white") != -1
  ) {
    return 39076;
  } else if (
    name.indexOf("honor 200 pro") != -1 &&
    name.indexOf("12/256") != -1 &&
    name.indexOf("black") != -1
  ) {
    return 39042;
  } else if (
    name.indexOf("honor 200 pro") != -1 &&
    name.indexOf("12/256") != -1 &&
    name.indexOf("green") != -1
  ) {
    return 39043;
  } else if (
    name.indexOf("honor 200 pro") != -1 &&
    name.indexOf("12/256") != -1 &&
    name.indexOf("white") != -1
  ) {
    return 39044;
  } else if (
    name.indexOf("honor 200 pro") != -1 &&
    name.indexOf("12/512") != -1 &&
    name.indexOf("black") != -1
  ) {
    return 39048;
  } else if (
    name.indexOf("honor 200 pro") != -1 &&
    name.indexOf("12/512") != -1 &&
    name.indexOf("black") != -1
  ) {
    return 39049;
  } else if (
    name.indexOf("honor 200 pro") != -1 &&
    name.indexOf("12/512") != -1 &&
    name.indexOf("black") != -1
  ) {
    return 39050;
  } else if (
    name.indexOf("honor 200 pro") != -1 &&
    name.indexOf("16/512") != -1 &&
    name.indexOf("black") != -1
  ) {
    return 39054;
  } else if (
    name.indexOf("honor 200 pro") != -1 &&
    name.indexOf("16/512") != -1 &&
    name.indexOf("green") != -1
  ) {
    return 39055;
  } else if (
    name.indexOf("honor 200 pro") != -1 &&
    name.indexOf("16/512") != -1 &&
    name.indexOf("white") != -1
  ) {
    return 39056;
  } else if (
    name.indexOf("honor 200 pro") != -1 &&
    name.indexOf("16/1tb") != -1 &&
    name.indexOf("green") != -1
  ) {
    return 39061;
  } else if (
    name.indexOf("honor 200 pro") != -1 &&
    name.indexOf("16/1tb") != -1 &&
    name.indexOf("white") != -1
  ) {
    return 39062;
  } else if (
    name.indexOf("honor 200 pro") != -1 &&
    name.indexOf("16/1tb") != -1 &&
    name.indexOf("black") != -1
  ) {
    return 39060;
  } else if (
    name.indexOf("honor 200 lite") != -1 &&
    name.indexOf("8/256") != -1 &&
    name.indexOf("black") != -1
  ) {
    return 38999;
  } else if (
    name.indexOf("honor 200 lite") != -1 &&
    name.indexOf("8/256") != -1 &&
    name.indexOf("blue") != -1
  ) {
    return 39066;
  } else if (
    name.indexOf("honor 200 lite") != -1 &&
    name.indexOf("8/256") != -1 &&
    name.indexOf("lake") != -1
  ) {
    return 39065;
  } else if (
    name.indexOf("honor 200 lite") != -1 &&
    name.indexOf("12/256") != -1 &&
    name.indexOf("lake") != -1
  ) {
    return 39071;
  } else if (
    name.indexOf("honor 200 lite") != -1 &&
    name.indexOf("12/256") != -1 &&
    name.indexOf("black") != -1
  ) {
    return 39070;
  } else if (
    name.indexOf("honor 200 lite") != -1 &&
    name.indexOf("12/256") != -1 &&
    name.indexOf("blue") != -1
  ) {
    return 39072;
  } else if (
    name.indexOf("honor magic 6 pro") != -1 &&
    name.indexOf("12/256") != -1 &&
    name.indexOf("black") != -1
  ) {
    return 39001;
  } else if (
    name.indexOf("honor magic 6 pro") != -1 &&
    name.indexOf("12/256") != -1 &&
    name.indexOf("green") != -1
  ) {
    return 39112;
  } else if (
    name.indexOf("honor magic 6 pro") != -1 &&
    name.indexOf("16/256") != -1 &&
    name.indexOf("black") != -1
  ) {
    return 39113;
  } else if (
    name.indexOf("honor magic 6 pro") != -1 &&
    name.indexOf("16/256") != -1 &&
    name.indexOf("green") != -1
  ) {
    return 39114;
  } else if (
    name.indexOf("honor magic 6 lite") != -1 &&
    name.indexOf("8/256") != -1 &&
    name.indexOf("green") != -1
  ) {
    return 39103;
  } else if (
    name.indexOf("honor magic 6 lite") != -1 &&
    name.indexOf("8/256") != -1 &&
    name.indexOf("black") != -1
  ) {
    return 39003;
  } else if (
    name.indexOf("honor magic 6 lite") != -1 &&
    name.indexOf("8/256") != -1 &&
    name.indexOf("orange") != -1
  ) {
    return 39104;
  } else if (
    name.indexOf("honor magic 6 lite") != -1 &&
    name.indexOf("8/512") != -1 &&
    name.indexOf("green") != -1
  ) {
    return 39108;
  } else if (
    name.indexOf("honor magic 6 lite") != -1 &&
    name.indexOf("8/512") != -1 &&
    name.indexOf("black") != -1
  ) {
    return 39109;
  } else if (
    name.indexOf("honor magic 6 lite") != -1 &&
    name.indexOf("8/512") != -1 &&
    name.indexOf("orange") != -1
  ) {
    return 39110;
  } else if (
    name.indexOf("honor magic 6 pro") != -1 &&
    name.indexOf("12/512") != -1 &&
    name.indexOf("black") != -1
  ) {
    return 39117;
  } else if (
    name.indexOf("honor magic 6 pro") != -1 &&
    name.indexOf("12/512") != -1 &&
    name.indexOf("green") != -1
  ) {
    return 39118;
  } else if (
    name.indexOf("honor magic 6 pro") != -1 &&
    name.indexOf("16/1tb") != -1 &&
    name.indexOf("black") != -1
  ) {
    return 39125;
  } else if (
    name.indexOf("honor magic 6 pro") != -1 &&
    name.indexOf("16/1tb") != -1 &&
    name.indexOf("green") != -1
  ) {
    return 39126;
  } else if (
    name.indexOf("honor magic 6 pro") != -1 &&
    name.indexOf("16/512") != -1 &&
    name.indexOf("black") != -1
  ) {
    return 39121;
  } else if (
    name.indexOf("honor magic 6 pro") != -1 &&
    name.indexOf("16/512") != -1 &&
    name.indexOf("green") != -1
  ) {
    return 39122;
  } else if (name.indexOf("honor 90 12/256 silver") !== -1) {
    return 28121;
  } else if (name.indexOf("honor 90 12/256 green") !== -1) {
    return 28118;
  } else if (name.indexOf("honor 90 12/256 black") !== -1) {
    return 28112;
  } else if (name.indexOf("honor 90 12/256 blue") !== -1) {
    return 28115;
  } else if (name.indexOf("honor 90 16/256 silver") !== -1) {
    return 28122;
  } else if (name.indexOf("honor 90 16/256 green") !== -1) {
    return 28119;
  } else if (name.indexOf("honor 90 16/256 black") !== -1) {
    return 28113;
  } else if (name.indexOf("honor 90 16/256 blue") !== -1) {
    return 28116;
  } else if (name.indexOf("honor 90 16/512 silver") !== -1) {
    return 28123;
  } else if (name.indexOf("honor 90 16/512 green") !== -1) {
    return 28120;
  } else if (name.indexOf("honor 90 16/512 black") !== -1) {
    return 28114;
  } else if (name.indexOf("honor 90 16/512 blue") !== -1) {
    return 28117;
  } else if (name.indexOf("honor 90 pro 12/256 silver") !== -1) {
    return 28130;
  } else if (name.indexOf("honor 90 pro 12/256 green") !== -1) {
    return 28127;
  } else if (name.indexOf("honor 90 pro 12/256 black") !== -1) {
    return 28124;
  } else if (name.indexOf("honor 90 pro 12/256 blue") !== -1) {
    return 28133;
  } else if (name.indexOf("honor 90 pro 16/256 silver") !== -1) {
    return 28131;
  } else if (name.indexOf("honor 90 pro 16/256 green") !== -1) {
    return 28128;
  } else if (name.indexOf("honor 90 pro 16/256 black") !== -1) {
    return 28125;
  } else if (name.indexOf("honor 90 pro 16/256 blue") !== -1) {
    return 28134;
  } else if (name.indexOf("honor 90 pro 16/512 silver") !== -1) {
    return 28132;
  } else if (name.indexOf("honor 90 pro 16/512 green") !== -1) {
    return 28129;
  } else if (name.indexOf("honor 90 pro 16/512 black") !== -1) {
    return 28126;
  } else if (name.indexOf("honor 90 pro 16/512 blue") !== -1) {
    return 28135;
  } else if (
    name.indexOf("magic v2 16/256") !== -1 &&
    name.indexOf("black") !== -1
  ) {
    return 38133;
  } else if (
    name.indexOf("magic v2 16/256") !== -1 &&
    name.indexOf("gold") !== -1
  ) {
    return 38132;
  } else if (
    name.indexOf("magic v2 16/256") !== -1 &&
    name.indexOf("black") !== -1
  ) {
    return 38131;
  } else if (
    name.indexOf("magic v2 16/256") !== -1 &&
    name.indexOf("purple") !== -1
  ) {
    return 38134;
  } else if (
    name.indexOf("magic v2 16/512") !== -1 &&
    name.indexOf("black") !== -1
  ) {
    return 38139;
  } else if (
    name.indexOf("magic v2 16/1tb") !== -1 &&
    name.indexOf("black") !== -1
  ) {
    return 38147;
  } else if (
    name.indexOf("magic v2 16/512") !== -1 &&
    name.indexOf("purple") !== -1
  ) {
    return 38142;
  } else if (
    name.indexOf("magic v2 16/512") !== -1 &&
    name.indexOf("gold") !== -1
  ) {
    return 38140;
  } else if (
    name.indexOf("magic v2 16/512") !== -1 &&
    name.indexOf("black") !== -1
  ) {
    return 38141;
  } else if (
    name.indexOf("magic v2 16/1tb") !== -1 &&
    name.indexOf("gold") !== -1
  ) {
    return 38148;
  } else if (
    name.indexOf("magic v2 16/1tb") !== -1 &&
    name.indexOf("black") !== -1
  ) {
    return 38149;
  } else if (
    name.indexOf("magic v2 16/1tb") !== -1 &&
    name.indexOf("purple") !== -1
  ) {
    return 38150;
  } else if (
    name.indexOf("honor magic v3") !== -1 &&
    name.indexOf("12/256") !== -1 &&
    (name.indexOf("red") !== -1 || name.indexOf("brown") !== -1)
  ) {
    return 38728;
  } else if (
    name.indexOf("honor magic v3") !== -1 &&
    name.indexOf("12/256") !== -1 &&
    name.indexOf("snow") !== -1
  ) {
    return 38729;
  } else if (
    name.indexOf("honor magic v3") !== -1 &&
    name.indexOf("12/256") !== -1 &&
    name.indexOf("green") !== -1
  ) {
    return 38730;
  } else if (
    name.indexOf("honor magic v3") !== -1 &&
    name.indexOf("12/256") !== -1 &&
    name.indexOf("black") !== -1
  ) {
    return 38731;
  } else if (
    name.indexOf("honor magic v3") !== -1 &&
    name.indexOf("12/512") !== -1 &&
    (name.indexOf("red") !== -1 || name.indexOf("brown") !== -1)
  ) {
    return 38736;
  } else if (
    name.indexOf("honor magic v3") !== -1 &&
    name.indexOf("12/512") !== -1 &&
    name.indexOf("snow") !== -1
  ) {
    return 38737;
  } else if (
    name.indexOf("honor magic v3") !== -1 &&
    name.indexOf("12/512") !== -1 &&
    name.indexOf("green") !== -1
  ) {
    return 38738;
  } else if (
    name.indexOf("honor magic v3") !== -1 &&
    name.indexOf("12/512") !== -1 &&
    name.indexOf("black") !== -1
  ) {
    return 38739;
  } else if (
    name.indexOf("honor magic v3") !== -1 &&
    name.indexOf("16/1tb") !== -1 &&
    (name.indexOf("red") !== -1 || name.indexOf("brown") !== -1)
  ) {
    return 38752;
  } else if (
    name.indexOf("honor magic v3") !== -1 &&
    name.indexOf("16/1tb") !== -1 &&
    name.indexOf("snow") !== -1
  ) {
    return 38753;
  } else if (
    name.indexOf("honor magic v3") !== -1 &&
    name.indexOf("16/1tb") !== -1 &&
    name.indexOf("green") !== -1
  ) {
    return 38754;
  } else if (
    name.indexOf("honor magic v3") !== -1 &&
    name.indexOf("16/1tb") !== -1 &&
    name.indexOf("black") !== -1
  ) {
    return 38755;
  } else if (
    name.indexOf("honor magic v3") !== -1 &&
    name.indexOf("16/512") !== -1 &&
    (name.indexOf("red") !== -1 || name.indexOf("brown") !== -1)
  ) {
    return 38744;
  } else if (
    name.indexOf("honor magic v3") !== -1 &&
    name.indexOf("16/512") !== -1 &&
    name.indexOf("snow") !== -1
  ) {
    return 38745;
  } else if (
    name.indexOf("honor magic v3") !== -1 &&
    name.indexOf("16/512") !== -1 &&
    name.indexOf("green") !== -1
  ) {
    return 38746;
  } else if (
    name.indexOf("honor magic v3") !== -1 &&
    name.indexOf("16/512") !== -1 &&
    name.indexOf("black") !== -1
  ) {
    return 38747;
  } else if (
    name.indexOf("honor magic 7 pro") != -1 &&
    name.indexOf("12/256") != -1 &&
    name.indexOf("black") != -1
  ) {
    return 38815;
  } else if (
    name.indexOf("honor magic 7 pro") != -1 &&
    name.indexOf("12/256") != -1 &&
    name.indexOf("blue") != -1
  ) {
    return 38818;
  } else if (
    name.indexOf("honor magic 7 pro") != -1 &&
    name.indexOf("12/256") != -1 &&
    name.indexOf("white") != -1
  ) {
    return 38819;
  } else if (
    name.indexOf("honor magic 7 pro") != -1 &&
    name.indexOf("12/512") != -1 &&
    name.indexOf("black") != -1
  ) {
    return 38823;
  } else if (
    name.indexOf("honor magic 7 pro") != -1 &&
    name.indexOf("12/512") != -1 &&
    name.indexOf("blue") != -1
  ) {
    return 38824;
  } else if (
    name.indexOf("honor magic 7 pro") != -1 &&
    name.indexOf("12/512") != -1 &&
    name.indexOf("white") != -1
  ) {
    return 38825;
  } else if (
    name.indexOf("honor magic 7 pro") != -1 &&
    name.indexOf("16/512") != -1 &&
    name.indexOf("black") != -1
  ) {
    return 38838;
  } else if (
    name.indexOf("honor magic 7 pro") != -1 &&
    name.indexOf("16/512") != -1 &&
    name.indexOf("blue") != -1
  ) {
    return 38839;
  } else if (
    name.indexOf("honor magic 7 pro") != -1 &&
    name.indexOf("16/512") != -1 &&
    name.indexOf("white") != -1
  ) {
    return 38840;
  } else if (
    name.indexOf("honor magic 7 pro") != -1 &&
    name.indexOf("16/1tb") != -1 &&
    name.indexOf("black") != -1
  ) {
    return 38832;
  } else if (
    name.indexOf("honor magic 7 pro") != -1 &&
    name.indexOf("16/1tb") != -1 &&
    name.indexOf("blue") != -1
  ) {
    return 38833;
  } else if (
    name.indexOf("honor magic 7 pro") != -1 &&
    name.indexOf("16/1tb") != -1 &&
    name.indexOf("white") != -1
  ) {
    return 38834;

    // Yandex
  } else if (
    (name.indexOf("яндекс") !== -1 || name.indexOf("станция") !== -1) &&
    name.indexOf("лайт") !== -1 &&
    name.indexOf("2 ") === -1 &&
    (name.indexOf("капучино") !== -1 || name.indexOf("beige") !== -1)
  ) {
    return 20411;
  } else if (
    (name.indexOf("яндекс") !== -1 || name.indexOf("станция") !== -1) &&
    name.indexOf("лайт") !== -1 &&
    name.indexOf("2 ") === -1 &&
    (name.indexOf("лимон") !== -1 ||
      name.indexOf("желтый") !== -1 ||
      name.indexOf("yellow") !== -1)
  ) {
    return 20409;
  } else if (
    (name.indexOf("яндекс") !== -1 || name.indexOf("станция") !== -1) &&
    name.indexOf("лайт") !== -1 &&
    name.indexOf("2 ") === -1 &&
    (name.indexOf("мята") !== -1 ||
      name.indexOf("зеленая") !== -1 ||
      name.indexOf("turquoise") !== -1)
  ) {
    return 20408;
  } else if (
    (name.indexOf("яндекс") !== -1 || name.indexOf("станция") !== -1) &&
    name.indexOf("лайт") !== -1 &&
    name.indexOf("2 ") === -1 &&
    (name.indexOf("фиолет") !== -1 || name.indexOf("purple") !== -1)
  ) {
    return 20407;
  } else if (
    (name.indexOf("яндекс") !== -1 || name.indexOf("станция") !== -1) &&
    name.indexOf("лайт") !== -1 &&
    name.indexOf("2 ") === -1 &&
    (name.indexOf("фламинго") !== -1 ||
      name.indexOf("розовый") !== -1 ||
      name.indexOf("pink") !== -1)
  ) {
    return 37163;
  } else if (
    (name.indexOf("яндекс") !== -1 || name.indexOf("станция") !== -1) &&
    name.indexOf("лайт") !== -1 &&
    name.indexOf("2 ") === -1 &&
    (name.indexOf("чили") !== -1 ||
      name.indexOf("красный") !== -1 ||
      name.indexOf("red") !== -1)
  ) {
    return 20412;
  } else if (
    (name.indexOf("яндекс") !== -1 || name.indexOf("станция") !== -1) &&
    name.indexOf("2") !== -1 &&
    name.indexOf("лайт") === -1 &&
    (name.indexOf("красн") !== -1 || name.indexOf("red") !== -1)
  ) {
    return 23952;
  } else if (
    (name.indexOf("яндекс") !== -1 || name.indexOf("станция") !== -1) &&
    name.indexOf("2") !== -1 &&
    name.indexOf("лайт") === -1 &&
    (name.indexOf("син") !== -1 || name.indexOf("blue") !== -1)
  ) {
    return 23951;
  } else if (
    (name.indexOf("яндекс") !== -1 || name.indexOf("станция") !== -1) &&
    name.indexOf("2") !== -1 &&
    name.indexOf("лайт") === -1 &&
    (name.indexOf("черн") !== -1 || name.indexOf("black") !== -1)
  ) {
    return 23950;
  } else if (
    (name.indexOf("яндекс") !== -1 || name.indexOf("станция") !== -1) &&
    name.indexOf("2") !== -1 &&
    name.indexOf("лайт") === -1 &&
    (name.indexOf("песочн") !== -1 || name.indexOf("бежев") !== -1)
  ) {
    return 23953;
  } else if (
    (name.indexOf("яндекс") !== -1 || name.indexOf("станция") !== -1) &&
    name.indexOf("2") !== -1 &&
    name.indexOf("лайт") === -1 &&
    name.indexOf("бел") !== -1
  ) {
    return 18848;
  } else if (
    (name.indexOf("яндекс") !== -1 || name.indexOf("станция") !== -1) &&
    name.indexOf("2") !== -1 &&
    name.indexOf("лайт") !== -1 &&
    name.indexOf("корал") !== -1
  ) {
    return 37165;
  } else if (
    (name.indexOf("яндекс") !== -1 || name.indexOf("станция") !== -1) &&
    name.indexOf("2") !== -1 &&
    name.indexOf("лайт") !== -1 &&
    name.indexOf("розов") !== -1
  ) {
    return 37163;
  } else if (
    (name.indexOf("яндекс") !== -1 || name.indexOf("станция") !== -1) &&
    name.indexOf("2") !== -1 &&
    name.indexOf("лайт") !== -1 &&
    (name.indexOf("сини") !== -1 || name.indexOf("blue") !== -1)
  ) {
    return 37162;
  } else if (
    (name.indexOf("яндекс") !== -1 || name.indexOf("станция") !== -1) &&
    name.indexOf("2") !== -1 &&
    name.indexOf("лайт") !== -1 &&
    name.indexOf("фиоле") !== -1
  ) {
    return 37161;
  } else if (
    (name.indexOf("яндекс") !== -1 || name.indexOf("станция") !== -1) &&
    name.indexOf("2") !== -1 &&
    name.indexOf("лайт") !== -1 &&
    (name.indexOf("зелен") !== -1 || name.indexOf("green") !== -1)
  ) {
    return 37164;
  } else if (
    name.indexOf("без zigbee") === -1 &&
    (name.indexOf("яндекс") !== -1 || name.indexOf("станция") !== -1) &&
    (name.indexOf("макс") !== -1 || name.indexOf("max") !== -1) &&
    name.indexOf("zigbee") !== -1 &&
    name.indexOf("красн") !== -1
  ) {
    return 30289;
  } else if (
    name.indexOf("без zigbee") === -1 &&
    (name.indexOf("яндекс") !== -1 || name.indexOf("станция") !== -1) &&
    (name.indexOf("макс") !== -1 || name.indexOf("max") !== -1) &&
    name.indexOf("zigbee") !== -1 &&
    name.indexOf("сер") !== -1
  ) {
    return 30287;
  } else if (
    name.indexOf("без zigbee") === -1 &&
    (name.indexOf("яндекс") !== -1 || name.indexOf("станция") !== -1) &&
    (name.indexOf("макс") !== -1 || name.indexOf("max") !== -1) &&
    name.indexOf("zigbee") !== -1 &&
    name.indexOf("син") !== -1
  ) {
    return 30292;
  } else if (
    name.indexOf("без zigbee") === -1 &&
    (name.indexOf("яндекс") !== -1 || name.indexOf("станция") !== -1) &&
    (name.indexOf("макс") !== -1 || name.indexOf("max") !== -1) &&
    name.indexOf("zigbee") !== -1 &&
    (name.indexOf("черн") !== -1 || name.indexOf("графит") !== -1)
  ) {
    return 30293;
  } else if (
    (name.indexOf("яндекс") !== -1 || name.indexOf("станция") !== -1) &&
    name.indexOf("zigbee") !== -1 &&
    name.indexOf("зелен") !== -1
  ) {
    return 30291;
  } else if (
    (name.indexOf("яндекс") !== -1 || name.indexOf("станция") !== -1) &&
    (name.indexOf("макс") !== -1 || name.indexOf("max") !== -1) &&
    name.indexOf("zigbee") !== -1 &&
    (name.indexOf("бежев") !== -1 || name.indexOf("beige") !== -1)
  ) {
    return 30288;
  } else if (
    (name.indexOf("яндекс") !== -1 || name.indexOf("станция") !== -1) &&
    (name.indexOf("макс") !== -1 || name.indexOf("max") !== -1) &&
    name.indexOf("zigbee") !== -1 &&
    name.indexOf("бел") !== -1
  ) {
    return 30286;
  } else if (
    (name.indexOf("яндекс") !== -1 || name.indexOf("станция") !== -1) &&
    (name.indexOf("макс") !== -1 || name.indexOf("max") !== -1) &&
    name.indexOf("zigbee") !== -1 &&
    name.indexOf("бирюзов") !== -1
  ) {
    return 30290;
  } else if (
    (name.indexOf("яндекс") !== -1 || name.indexOf("станция") !== -1) &&
    (name.indexOf("макс") !== -1 || name.indexOf("max") !== -1) &&
    name.indexOf("красн") !== -1
  ) {
    return 23957;
  } else if (
    (name.indexOf("яндекс") !== -1 || name.indexOf("станция") !== -1) &&
    (name.indexOf("макс") !== -1 || name.indexOf("max") !== -1) &&
    name.indexOf("син") !== -1
  ) {
    return 23958;
  } else if (
    (name.indexOf("яндекс") !== -1 || name.indexOf("станция") !== -1) &&
    (name.indexOf("макс") !== -1 || name.indexOf("max") !== -1) &&
    (name.indexOf("черн") !== -1 || name.indexOf("black") !== -1)
  ) {
    return 18974;
  } else if (
    (name.indexOf("яндекс") !== -1 || name.indexOf("станция") !== -1) &&
    name.indexOf("макс") !== -1 &&
    name.indexOf("бел") !== -1
  ) {
    return 18973;
  } else if (
    (name.indexOf("яндекс") !== -1 || name.indexOf("станция") !== -1) &&
    name.indexOf("мини") !== -1 &&
    name.indexOf("красн") !== -1 &&
    name.indexOf("с часами") !== -1
  ) {
    return 23955;
  } else if (
    (name.indexOf("яндекс") !== -1 || name.indexOf("станция") !== -1) &&
    name.indexOf("мини") !== -1 &&
    name.indexOf("син") !== -1 &&
    name.indexOf("с часами") !== -1
  ) {
    return 23956;
  } else if (
    (name.indexOf("яндекс") !== -1 || name.indexOf("станция") !== -1) &&
    name.indexOf("мини") !== -1 &&
    name.indexOf("черн") !== -1 &&
    name.indexOf("с часами") !== -1
  ) {
    return 23954;
  } else if (
    (name.indexOf("яндекс") !== -1 || name.indexOf("станция") !== -1) &&
    name.indexOf("мини") !== -1 &&
    name.indexOf("бел") !== -1 &&
    name.indexOf("без подп") !== -1
  ) {
    return 18852;
  } else if (
    (name.indexOf("яндекс") !== -1 || name.indexOf("станция") !== -1) &&
    name.indexOf("мини") !== -1 &&
    name.indexOf("черн") !== -1 &&
    name.indexOf("без подп") !== -1
  ) {
    return 18851;
  } else if (
    (name.indexOf("яндекс") !== -1 || name.indexOf("станция") !== -1) &&
    name.indexOf("мини") !== -1 &&
    name.indexOf("3") !== -1 &&
    name.indexOf("черн") !== -1
  ) {
    return 37470;
  } else if (
    (name.indexOf("яндекс") !== -1 || name.indexOf("станция") !== -1) &&
    name.indexOf("мини") !== -1 &&
    name.indexOf("3") !== -1 &&
    name.indexOf("сер") !== -1
  ) {
    return 38013;
  } else if (
    (name.indexOf("яндекс") !== -1 || name.indexOf("станция") !== -1) &&
    name.indexOf("мини") !== -1 &&
    name.indexOf("3") !== -1 &&
    name.indexOf("фиол") !== -1
  ) {
    return 38015;
  } else if (
    (name.indexOf("яндекс") !== -1 || name.indexOf("станция") !== -1) &&
    name.indexOf("миди") !== -1 &&
    (name.indexOf("черн") !== -1 || name.indexOf("black") !== -1)
  ) {
    return 30892;
  } else if (
    (name.indexOf("яндекс") !== -1 || name.indexOf("станция") !== -1) &&
    name.indexOf("миди") !== -1 &&
    (name.indexOf("зелен") !== -1 || name.indexOf("green") !== -1)
  ) {
    return 30893;
  } else if (
    (name.indexOf("яндекс") !== -1 || name.indexOf("станция") !== -1) &&
    name.indexOf("миди") !== -1 &&
    (name.indexOf("бел") !== -1 || name.indexOf("silver") !== -1)
  ) {
    return 30894;
  } else if (
    (name.indexOf("яндекс") !== -1 || name.indexOf("станция") !== -1) &&
    name.indexOf("миди") !== -1 &&
    (name.indexOf("оранж") !== -1 || name.indexOf("orange") !== -1)
  ) {
    return 35837;
  } else if (
    (name.indexOf("яндекс") !== -1 || name.indexOf("станция") !== -1) &&
    name.indexOf("миди") !== -1 &&
    (name.indexOf("малин") !== -1 || name.indexOf("raspberry") !== -1)
  ) {
    return 35838;
  } else if (
    (name.indexOf("яндекс") !== -1 || name.indexOf("станция") !== -1) &&
    name.indexOf("фиолет") !== -1 &&
    name.indexOf("без подп") !== -1
  ) {
    return 18850;
  } else if (
    (name.indexOf("яндекс") !== -1 || name.indexOf("станция") !== -1) &&
    name.indexOf("черн") !== -1 &&
    name.indexOf("без подп") !== -1
  ) {
    return 18849;
  } else if (name.indexOf("coros pod 2") !== -1) {
    return 27150;
  } else if (name.indexOf("openswim blue") !== -1) {
    return 27127;
  } else if (name.indexOf("openswim black") !== -1) {
    return 24581;
  } else if (
    name.indexOf("finis") !== -1 &&
    name.indexOf("smart") !== -1 &&
    name.indexOf("goggle") !== -1
  ) {
    return 26204;
  } else if (
    name.indexOf("nothing phone cmf") != -1 &&
    name.indexOf("2") != -1 &&
    name.indexOf("pro") != -1 &&
    name.indexOf("8/128") != -1 &&
    name.indexOf("black") != -1
  ) {
    return 39156;
  } else if (
    name.indexOf("nothing phone cmf") != -1 &&
    name.indexOf("2") != -1 &&
    name.indexOf("pro") != -1 &&
    name.indexOf("8/128") != -1 &&
    name.indexOf("green") != -1
  ) {
    return 39157;
  } else if (
    name.indexOf("nothing phone cmf") != -1 &&
    name.indexOf("2") != -1 &&
    name.indexOf("pro") != -1 &&
    name.indexOf("8/128") != -1 &&
    name.indexOf("orange") != -1
  ) {
    return 39158;
  } else if (
    name.indexOf("nothing phone cmf") != -1 &&
    name.indexOf("2") != -1 &&
    name.indexOf("pro") != -1 &&
    name.indexOf("8/128") != -1 &&
    name.indexOf("white") != -1
  ) {
    return 39159;
  } else if (
    name.indexOf("nothing phone cmf") != -1 &&
    name.indexOf("2") != -1 &&
    name.indexOf("pro") != -1 &&
    name.indexOf("8/256") != -1 &&
    name.indexOf("black") != -1
  ) {
    return 39164;
  } else if (
    name.indexOf("nothing phone cmf") != -1 &&
    name.indexOf("2") != -1 &&
    name.indexOf("pro") != -1 &&
    name.indexOf("8/256") != -1 &&
    name.indexOf("green") != -1
  ) {
    return 39165;
  } else if (
    name.indexOf("nothing phone cmf") != -1 &&
    name.indexOf("2") != -1 &&
    name.indexOf("pro") != -1 &&
    name.indexOf("8/256") != -1 &&
    name.indexOf("orange") != -1
  ) {
    return 39166;
  } else if (
    name.indexOf("nothing phone cmf") != -1 &&
    name.indexOf("2") != -1 &&
    name.indexOf("pro") != -1 &&
    name.indexOf("8/256") != -1 &&
    name.indexOf("white") != -1
  ) {
    return 39167;
  } else if (
    name.indexOf("nothing phone") !== -1 &&
    (name.indexOf("1 ") !== -1 || name.indexOf("(1)") !== -1) &&
    name.indexOf("cmf") !== -1 &&
    name.indexOf("6/128") !== -1 &&
    name.indexOf("black") !== -1
  ) {
    return 38082;
  } else if (
    name.indexOf("nothing phone") !== -1 &&
    (name.indexOf("1 ") !== -1 || name.indexOf("(1)") !== -1) &&
    name.indexOf("cmf") !== -1 &&
    name.indexOf("8/128") !== -1 &&
    name.indexOf("green") !== -1
  ) {
    return 38120;
  } else if (
    name.indexOf("nothing phone") !== -1 &&
    (name.indexOf("1 ") !== -1 || name.indexOf("(1)") !== -1) &&
    name.indexOf("cmf") !== -1 &&
    name.indexOf("8/128") !== -1 &&
    name.indexOf("black") !== -1
  ) {
    return 38119;
  } else if (
    name.indexOf("nothing phone") !== -1 &&
    (name.indexOf("1 ") !== -1 || name.indexOf("(1)") !== -1) &&
    name.indexOf("cmf") !== -1 &&
    name.indexOf("8/128") !== -1 &&
    name.indexOf("orange") !== -1
  ) {
    return 38121;
  } else if (
    name.indexOf("nothing phone") !== -1 &&
    (name.indexOf("1 ") !== -1 || name.indexOf("(1)") !== -1) &&
    name.indexOf("cmf") !== -1 &&
    name.indexOf("6/128") !== -1 &&
    name.indexOf("green") !== -1
  ) {
    return 38115;
  } else if (
    name.indexOf("nothing phone") !== -1 &&
    (name.indexOf("1 ") !== -1 || name.indexOf("(1)") !== -1) &&
    name.indexOf("cmf") !== -1 &&
    name.indexOf("6/128") !== -1 &&
    name.indexOf("orange") !== -1
  ) {
    return 38114;
  } else if (
    name.indexOf("nothing phone") !== -1 &&
    (name.indexOf("1 ") !== -1 || name.indexOf("(1)") !== -1) &&
    name.indexOf("cmf") !== -1 &&
    name.indexOf("8/256") !== -1 &&
    name.indexOf("black") !== -1
  ) {
    return 38125;
  } else if (
    name.indexOf("nothing phone") !== -1 &&
    (name.indexOf("1 ") !== -1 || name.indexOf("(1)") !== -1) &&
    name.indexOf("cmf") !== -1 &&
    name.indexOf("8/256") !== -1 &&
    name.indexOf("green") !== -1
  ) {
    return 38126;
  } else if (
    name.indexOf("nothing phone") !== -1 &&
    (name.indexOf("1 ") !== -1 || name.indexOf("(1)") !== -1) &&
    name.indexOf("cmf") !== -1 &&
    name.indexOf("8/256") !== -1 &&
    name.indexOf("orange") !== -1
  ) {
    return 38127;
  } else if (
    name.indexOf("nothing phone") !== -1 &&
    (name.indexOf("1 ") !== -1 || name.indexOf("(1)") !== -1) &&
    name.indexOf("cmf") === -1 &&
    name.indexOf("8/128") !== -1 &&
    name.indexOf("black") !== -1
  ) {
    return 27993;
  } else if (
    name.indexOf("nothing phone") !== -1 &&
    (name.indexOf("1 ") !== -1 || name.indexOf("(1)") !== -1) &&
    name.indexOf("cmf") === -1 &&
    name.indexOf("8/128") !== -1 &&
    name.indexOf("white") !== -1
  ) {
    return 27989;
  } else if (
    name.indexOf("nothing phone") !== -1 &&
    (name.indexOf("1 ") !== -1 || name.indexOf("(1)") !== -1) &&
    name.indexOf("cmf") === -1 &&
    name.indexOf("8/256") !== -1 &&
    name.indexOf("black") !== -1
  ) {
    return 27994;
  } else if (
    name.indexOf("nothing phone") !== -1 &&
    (name.indexOf("1 ") !== -1 || name.indexOf("(1)") !== -1) &&
    name.indexOf("cmf") === -1 &&
    name.indexOf("8/256") !== -1 &&
    name.indexOf("white") !== -1
  ) {
    return 27991;
  } else if (
    name.indexOf("nothing phone") !== -1 &&
    (name.indexOf("1 ") !== -1 || name.indexOf("(1)") !== -1) &&
    name.indexOf("cmf") === -1 &&
    name.indexOf("12/256") !== -1 &&
    name.indexOf("black") !== -1
  ) {
    return 27992;
  } else if (
    name.indexOf("nothing phone") !== -1 &&
    (name.indexOf("1 ") !== -1 || name.indexOf("(1)") !== -1) &&
    name.indexOf("cmf") === -1 &&
    name.indexOf("12/256") !== -1 &&
    name.indexOf("white") !== -1
  ) {
    return 27990;
  } else if (
    name.indexOf("nothing phone") !== -1 &&
    (name.indexOf("2 ") !== -1 || name.indexOf("(2)") !== -1) &&
    name.indexOf("8/128") !== -1 &&
    name.indexOf("gray") !== -1
  ) {
    return 27995;
  } else if (
    name.indexOf("nothing phone") !== -1 &&
    (name.indexOf("2 ") !== -1 || name.indexOf("(2)") !== -1) &&
    name.indexOf("2a") === -1 &&
    name.indexOf("plus") === -1 &&
    name.indexOf("8/128") !== -1 &&
    name.indexOf("white") !== -1
  ) {
    return 28000;
  } else if (
    name.indexOf("nothing phone") !== -1 &&
    (name.indexOf("2 ") !== -1 || name.indexOf("(2)") !== -1) &&
    name.indexOf("2a") === -1 &&
    name.indexOf("plus") === -1 &&
    name.indexOf("12/256") !== -1 &&
    name.indexOf("gray") !== -1
  ) {
    return 27996;
  } else if (
    name.indexOf("nothing phone") !== -1 &&
    (name.indexOf("2 ") !== -1 || name.indexOf("(2)") !== -1) &&
    name.indexOf("2a") === -1 &&
    name.indexOf("plus") === -1 &&
    name.indexOf("12/256") !== -1 &&
    name.indexOf("white") !== -1
  ) {
    return 27998;
  } else if (
    name.indexOf("nothing phone") !== -1 &&
    (name.indexOf("2 ") !== -1 || name.indexOf("(2)") !== -1) &&
    name.indexOf("2a") === -1 &&
    name.indexOf("plus") === -1 &&
    name.indexOf("12/512") !== -1 &&
    name.indexOf("gray") !== -1
  ) {
    return 27997;
  } else if (
    name.indexOf("nothing phone") !== -1 &&
    (name.indexOf("2 ") !== -1 || name.indexOf("(2)") !== -1) &&
    name.indexOf("2a") === -1 &&
    name.indexOf("plus") === -1 &&
    name.indexOf("12/512") !== -1 &&
    name.indexOf("white") !== -1
  ) {
    return 27999;
  } else if (
    name.indexOf("nothing phone") !== -1 &&
    name.indexOf("2a") !== -1 &&
    name.indexOf("plus") === -1 &&
    name.indexOf("8/128") !== -1 &&
    name.indexOf("black") !== -1
  ) {
    return 35902;
  } else if (
    name.indexOf("nothing phone") !== -1 &&
    name.indexOf("2a") !== -1 &&
    name.indexOf("plus") === -1 &&
    name.indexOf("8/128") !== -1 &&
    name.indexOf("milk") !== -1
  ) {
    return 35909;
  } else if (
    name.indexOf("nothing phone") !== -1 &&
    name.indexOf("2a") !== -1 &&
    name.indexOf("plus") === -1 &&
    name.indexOf("8/128") !== -1 &&
    name.indexOf("white") !== -1
  ) {
    return 35906;
  } else if (
    name.indexOf("nothing phone") !== -1 &&
    name.indexOf("2a") !== -1 &&
    name.indexOf("plus") === -1 &&
    name.indexOf("8/256") !== -1 &&
    name.indexOf("black") !== -1
  ) {
    return 35903;
  } else if (
    name.indexOf("nothing phone") !== -1 &&
    name.indexOf("2a") !== -1 &&
    name.indexOf("plus") === -1 &&
    name.indexOf("8/256") !== -1 &&
    name.indexOf("milk") !== -1
  ) {
    return 35910;
  } else if (
    name.indexOf("nothing phone") !== -1 &&
    name.indexOf("2a") !== -1 &&
    name.indexOf("plus") === -1 &&
    name.indexOf("8/256") !== -1 &&
    name.indexOf("white") !== -1
  ) {
    return 35907;
  } else if (
    name.indexOf("nothing phone") !== -1 &&
    name.indexOf("2a") !== -1 &&
    name.indexOf("plus") === -1 &&
    name.indexOf("12/256") !== -1 &&
    name.indexOf("black") !== -1
  ) {
    return 35904;
  } else if (
    name.indexOf("nothing phone") !== -1 &&
    name.indexOf("2a") !== -1 &&
    name.indexOf("plus") === -1 &&
    name.indexOf("12/256") !== -1 &&
    name.indexOf("milk") !== -1
  ) {
    return 35908;
  } else if (
    name.indexOf("nothing phone") !== -1 &&
    name.indexOf("2a") !== -1 &&
    name.indexOf("plus") === -1 &&
    name.indexOf("12/256") !== -1 &&
    name.indexOf("white") !== -1
  ) {
    return 35905;
  } else if (
    name.indexOf("nothing phone") !== -1 &&
    name.indexOf("2a") !== -1 &&
    name.indexOf("plus") !== -1 &&
    name.indexOf("8/256") !== -1 &&
    name.indexOf("black") !== -1
  ) {
    return 37124;
  } else if (
    name.indexOf("nothing phone") !== -1 &&
    name.indexOf("2a") !== -1 &&
    name.indexOf("plus") !== -1 &&
    name.indexOf("8/256") !== -1 &&
    name.indexOf("gray") !== -1
  ) {
    return 37127;
  } else if (
    name.indexOf("nothing phone") !== -1 &&
    name.indexOf("2a") !== -1 &&
    name.indexOf("plus") !== -1 &&
    name.indexOf("12/256") !== -1 &&
    name.indexOf("black") !== -1
  ) {
    return 37126;
  } else if (
    name.indexOf("nothing phone") !== -1 &&
    name.indexOf("2a") !== -1 &&
    name.indexOf("plus") !== -1 &&
    name.indexOf("12/256") !== -1 &&
    name.indexOf("gray") !== -1
  ) {
    return 37125;
  } else if (
    name.indexOf("nothing phone") !== -1 &&
    name.indexOf("pro") === -1 &&
    name.indexOf("plus") === -1 &&
    name.indexOf("3a") !== -1 &&
    name.indexOf("12/256") !== -1 &&
    name.indexOf("black") !== -1
  ) {
    return 38722;
  } else if (
    name.indexOf("nothing phone") !== -1 &&
    name.indexOf("pro") === -1 &&
    name.indexOf("plus") === -1 &&
    name.indexOf("3a") !== -1 &&
    name.indexOf("12/256") !== -1 &&
    name.indexOf("blue") !== -1
  ) {
    return 38723;
  } else if (
    name.indexOf("nothing phone") !== -1 &&
    name.indexOf("pro") === -1 &&
    name.indexOf("plus") === -1 &&
    name.indexOf("3a") !== -1 &&
    name.indexOf("12/256") !== -1 &&
    name.indexOf("white") !== -1
  ) {
    return 38724;
  } else if (
    name.indexOf("nothing phone") !== -1 &&
    name.indexOf("pro") === -1 &&
    name.indexOf("plus") === -1 &&
    name.indexOf("3a") !== -1 &&
    name.indexOf("8/128") !== -1 &&
    name.indexOf("black") !== -1
  ) {
    return 38678;
  } else if (
    name.indexOf("nothing phone") !== -1 &&
    name.indexOf("pro") === -1 &&
    name.indexOf("plus") === -1 &&
    name.indexOf("3a") !== -1 &&
    name.indexOf("8/128") !== -1 &&
    name.indexOf("blue") !== -1
  ) {
    return 38711;
  } else if (
    name.indexOf("nothing phone") !== -1 &&
    name.indexOf("pro") === -1 &&
    name.indexOf("plus") === -1 &&
    name.indexOf("3a") !== -1 &&
    name.indexOf("8/128") !== -1 &&
    name.indexOf("white") !== -1
  ) {
    return 38712;
  } else if (
    name.indexOf("nothing phone") !== -1 &&
    name.indexOf("pro") === -1 &&
    name.indexOf("plus") === -1 &&
    name.indexOf("3a") !== -1 &&
    name.indexOf("8/256") !== -1 &&
    name.indexOf("black") !== -1
  ) {
    return 38716;
  } else if (
    name.indexOf("nothing phone") !== -1 &&
    name.indexOf("pro") === -1 &&
    name.indexOf("plus") === -1 &&
    name.indexOf("3a") !== -1 &&
    name.indexOf("8/256") !== -1 &&
    name.indexOf("blue") !== -1
  ) {
    return 38717;
  } else if (
    name.indexOf("nothing phone") !== -1 &&
    name.indexOf("pro") === -1 &&
    name.indexOf("plus") === -1 &&
    name.indexOf("3a") !== -1 &&
    name.indexOf("8/256") !== -1 &&
    name.indexOf("white") !== -1
  ) {
    return 38718;
  } else if (
    name.indexOf("nothing phone") !== -1 &&
    name.indexOf("pro") !== -1 &&
    name.indexOf("plus") === -1 &&
    name.indexOf("3a") !== -1 &&
    name.indexOf("12/256") !== -1 &&
    name.indexOf("black") !== -1
  ) {
    return 38703;
  } else if (
    name.indexOf("nothing phone") !== -1 &&
    name.indexOf("pro") !== -1 &&
    name.indexOf("plus") === -1 &&
    name.indexOf("3a") !== -1 &&
    name.indexOf("12/256") !== -1 &&
    name.indexOf("gray") !== -1
  ) {
    return 38704;
  } else if (
    name.indexOf("nothing phone") !== -1 &&
    name.indexOf("pro") !== -1 &&
    name.indexOf("plus") === -1 &&
    name.indexOf("3a") !== -1 &&
    name.indexOf("8/128") !== -1 &&
    name.indexOf("black") !== -1
  ) {
    return 38676;
  } else if (
    name.indexOf("nothing phone") !== -1 &&
    name.indexOf("pro") !== -1 &&
    name.indexOf("plus") === -1 &&
    name.indexOf("3a") !== -1 &&
    name.indexOf("8/128") !== -1 &&
    name.indexOf("gray") !== -1
  ) {
    return 38694;
  } else if (
    name.indexOf("nothing phone") !== -1 &&
    name.indexOf("pro") !== -1 &&
    name.indexOf("plus") === -1 &&
    name.indexOf("3a") !== -1 &&
    name.indexOf("8/256") !== -1 &&
    name.indexOf("black") !== -1
  ) {
    return 38699;
  } else if (
    name.indexOf("nothing phone") !== -1 &&
    name.indexOf("pro") !== -1 &&
    name.indexOf("plus") === -1 &&
    name.indexOf("3a") !== -1 &&
    name.indexOf("8/256") !== -1 &&
    name.indexOf("gray") !== -1
  ) {
    return 38700;

    // Casio
  } else if (name.indexOf("gwg-2000 1a1") !== -1) {
    return 37449;
  } else if (name.indexOf("gwg-2000 1a3") !== -1) {
    return 37450;
  } else if (name.indexOf("gwg-2000 1a5") !== -1) {
    return 37451;
  } else if (name.indexOf("gwg-b1000 1a4") !== -1) {
    return 37452;
  } else if (name.indexOf("gwg-b1000 3a") !== -1) {
    return 37453;
  } else if (name.indexOf("mtg-b1000-1a") !== -1) {
    return 37454;
  } else if (name.indexOf("mtg-b1000b-1a") !== -1) {
    return 37455;
  } else if (name.indexOf("mtg-b1000d-1a") !== -1) {
    return 37456;
  } else if (name.indexOf("mtg-b1000xbd-1a") !== -1) {
    return 37457;
  } else if (name.indexOf("mtg-b2000b-1a") !== -1) {
    return 37297;
  } else if (name.indexOf("mtg-b2000bd-1a") !== -1) {
    return 37296;
  } else if (name.indexOf("mtg-b2000ybd-1a") !== -1) {
    return 37298;
  } else if (name.indexOf("mtg-b2000yr-1a") !== -1) {
    return 37473;
  } else if (name.indexOf("mtg-b3000-1a") !== -1) {
    return 37458;
  } else if (
    name.indexOf("shokz") !== -1 &&
    name.indexOf("openrun pro 2") !== -1 &&
    name.indexOf("black") !== -1
  ) {
    return 37472;
  } else if (
    name.indexOf("openrun pro 2") !== -1 &&
    name.indexOf("white") !== -1
  ) {
    return 37663;
  } else if (
    name.indexOf("openrun pro 2") !== -1 &&
    name.indexOf("orange") !== -1
  ) {
    return 37665;
  } else if (
    name.indexOf("shokz") !== -1 &&
    name.indexOf("openrun pro") !== -1 &&
    name.indexOf("openrun pro 2") === -1 &&
    name.indexOf("orange") !== -1
  ) {
    return 37666;
  } else if (
    name.indexOf("shokz") !== -1 &&
    name.indexOf("openswim") !== -1 &&
    name.indexOf("blue") !== -1
  ) {
    return 27127;
  } else if (
    name.indexOf("shokz") !== -1 &&
    name.indexOf("openswim pro") !== -1 &&
    name.indexOf("openswim pro 2") === -1 &&
    name.indexOf("blue") !== -1
  ) {
    return 37471;
  } else if (
    name.indexOf("shokz") !== -1 &&
    name.indexOf("openswim pro") !== -1 &&
    name.indexOf("openswim pro 2") === -1 &&
    name.indexOf("black") !== -1
  ) {
    return 24581;
    // Huawei
  } else if (
    name.indexOf("mate x6") != -1 &&
    name.indexOf("12/256") != -1 &&
    name.indexOf("black") != -1
  ) {
    return 38993;
  } else if (
    name.indexOf("mate x6") != -1 &&
    name.indexOf("12/256") != -1 &&
    name.indexOf("red") != -1
  ) {
    return 39021;
  } else if (
    name.indexOf("mate x6") != -1 &&
    name.indexOf("12/256") != -1 &&
    name.indexOf("gray") != -1
  ) {
    return 39019;
  } else if (
    name.indexOf("mate x6") != -1 &&
    name.indexOf("12/512") != -1 &&
    name.indexOf("black") != -1
  ) {
    return 39025;
  } else if (
    name.indexOf("mate x6") != -1 &&
    name.indexOf("12/512") != -1 &&
    name.indexOf("gray") != -1
  ) {
    return 39026;
  } else if (
    name.indexOf("mate x6") != -1 &&
    name.indexOf("12/512") != -1 &&
    name.indexOf("red") != -1
  ) {
    return 39027;
  } else if (
    name.indexOf("mate x6") != -1 &&
    name.indexOf("16/512") != -1 &&
    name.indexOf("black") != -1
  ) {
    return 39031;
  } else if (
    name.indexOf("mate x6") != -1 &&
    name.indexOf("16/512") != -1 &&
    name.indexOf("gray") != -1
  ) {
    return 39032;
  } else if (
    name.indexOf("mate x6") != -1 &&
    name.indexOf("16/512") != -1 &&
    name.indexOf("red") != -1
  ) {
    return 39033;
  } else if (
    name.indexOf("mate x6") != -1 &&
    name.indexOf("16/1tb") != -1 &&
    name.indexOf("gray") != -1
  ) {
    return 39037;
  } else if (
    name.indexOf("mate x6") != -1 &&
    name.indexOf("16/1tb") != -1 &&
    name.indexOf("gray") != -1
  ) {
    return 39038;
  } else if (
    name.indexOf("mate x6") != -1 &&
    name.indexOf("16/1tb") != -1 &&
    name.indexOf("gray") != -1
  ) {
    return 39039;
  } else if (name.indexOf("pura 70 ultra 16/512 black") !== -1) {
    return 38154;
  } else if (name.indexOf("pura 70 ultra 16/1tb green") !== -1) {
    return 38164;
  } else if (name.indexOf("pura 70 ultra 16/1tb brown") !== -1) {
    return 38163;
  } else if (name.indexOf("pura 70 ultra 16/1tb black") !== -1) {
    return 38162;
  } else if (name.indexOf("pura 70 ultra 16/512 brown") !== -1) {
    return 38155;
  } else if (name.indexOf("pura 70 ultra 16/512 green") !== -1) {
    return 38156;
  } else if (name.indexOf("pura 70 ultra 16/512 white") !== -1) {
    return 38157;
  } else if (name.indexOf("pura 70 ultra 16/1tb white") !== -1) {
    return 38165;
  } else if (name.indexOf("pura 70 pro 16/512 white") !== -1) {
    return 38179;
  } else if (name.indexOf("pura 70 pro 12/512 purple") !== -1) {
    return 38172;
  } else if (name.indexOf("pura 70 pro 12/1tb white") !== -1) {
    return 38185;
  } else if (name.indexOf("pura 70 pro 12/512 white") !== -1) {
    return 38179;
  } else if (name.indexOf("pura 70 pro 12/256 black") !== -1) {
    return 38168;
  } else if (name.indexOf("pura 70 pro 12/256 purple") !== -1) {
    return 38169;
  } else if (name.indexOf("pura 70 pro 12/256 white") !== -1) {
    return 38170;
  } else if (name.indexOf("pura 70 pro 12/512 black") !== -1) {
    return 38177;
  } else if (name.indexOf("pura 70 pro 16/512 black") !== -1) {
    return 38177;
  } else if (name.indexOf("pura 70 pro 16/512 purple") !== -1) {
    return 38178;
  } else if (name.indexOf("pura 70 pro 12/1tb black") !== -1) {
    return 38183;
  } else if (name.indexOf("pura 70 pro 12/1tb purple") !== -1) {
    return 38184;
  } else if (name.indexOf("pura 70 12/1tb pink") !== -1) {
    return 38207;
  } else if (name.indexOf("pura 70 12/256 white") !== -1) {
    return 38192;
  } else if (name.indexOf("pura 70 12/256 pink") !== -1) {
    return 38191;
  } else if (name.indexOf("pura 70 12/512 black") !== -1) {
    return 38197;
  } else if (name.indexOf("pura 70 12/256 black") !== -1) {
    return 38189;
  } else if (name.indexOf("pura 70 12/256 blue") !== -1) {
    return 38190;
  } else if (name.indexOf("pura 70 12/512 pink") !== -1) {
    return 38199;
  } else if (name.indexOf("pura 70 12/512 white") !== -1) {
    return 38200;
  } else if (name.indexOf("pura 70 12/512 blue") !== -1) {
    return 38198;
  } else if (name.indexOf("pura 70 12/1tb black") !== -1) {
    return 38205;
  } else if (name.indexOf("pura 70 12/1tb blue") !== -1) {
    return 38206;
  } else if (name.indexOf("pura 70 12/1tb white") !== -1) {
    return 38208;
  } else {
    return returnIDApple(name) || "No match";
  }
};
