import { returnIDOtherBrand } from "./returnOtherBrands";

export const returnIDGarmin2 = (name) => {
  if (
    (name.indexOf("epix") != -1 &&
      name.indexOf("pro") === -1 &&
      name.indexOf("gen 2") != -1 &&
      name.indexOf("47") != -1 &&
      name.indexOf("slate steel") != -1 &&
      name.indexOf("graphite band") != -1) ||
    name.indexOf("010-02582-01") != -1
  ) {
    return 28170;
  } else if (
    (name.indexOf("epix") != -1 &&
      name.indexOf("pro") === -1 &&
      name.indexOf("gen 2") != -1 &&
      name.indexOf("sapphire") != -1 &&
      name.indexOf("47") != -1 &&
      name.indexOf("black carbon") != -1 &&
      name.indexOf("gray dlc") != -1) ||
    name.indexOf("010-02582-30") != -1
  ) {
    return 39242;
  } else if (
    (name.indexOf("epix") != -1 &&
      name.indexOf("pro") === -1 &&
      name.indexOf("gen 2") != -1 &&
      name.indexOf("sapphire") != -1 &&
      name.indexOf("47") != -1 &&
      name.indexOf("black carbon") === -1 &&
      name.indexOf("gray dlc") != -1) ||
    name.indexOf("010-02582-11") != -1
  ) {
    return 39244;
  } else if (
    (name.indexOf("epix") != -1 &&
      name.indexOf("pro") === -1 &&
      name.indexOf("gen 2") != -1 &&
      name.indexOf("sapphire") != -1 &&
      name.indexOf("47") != -1 &&
      name.indexOf("white") !== -1 &&
      name.indexOf("carrera white band") != -1) ||
    name.indexOf("010-02582-21") != -1
  ) {
    return 28171;
  } else if (
    (name.indexOf("epix") != -1 &&
      name.indexOf("pro") === -1 &&
      name.indexOf("gen 2") != -1 &&
      name.indexOf("sapphire") != -1 &&
      name.indexOf("47") != -1 &&
      name.indexOf("black") !== -1 &&
      name.indexOf("black band") != -1) ||
    name.indexOf("010-02803-01") != -1
  ) {
    return 28172;
  } else if (
    (name.indexOf("epix pro") != -1 &&
      name.indexOf("gen 2") != -1 &&
      name.indexOf("sapphire") != -1 &&
      name.indexOf("42") != -1 &&
      name.indexOf("silver") !== -1 &&
      name.indexOf("whitestone band") != -1) ||
    name.indexOf("010-02802-01") != -1
  ) {
    return 30296;
  } else if (
    (name.indexOf("epix pro") != -1 &&
      name.indexOf("gen 2") != -1 &&
      name.indexOf("sapphire") != -1 &&
      name.indexOf("47") != -1 &&
      name.indexOf("slate gray") !== -1 &&
      name.indexOf("black band") != -1) ||
    name.indexOf("010-02803-01") != -1
  ) {
    return 28173;
  } else if (
    (name.indexOf("epix pro") != -1 &&
      name.indexOf("gen 2") != -1 &&
      name.indexOf("sapphire") != -1 &&
      name.indexOf("51") != -1 &&
      name.indexOf("slate gray") !== -1 &&
      name.indexOf("black band") != -1) ||
    name.indexOf("010-02804-21") != -1
  ) {
    return 30295;
  } else if (
    (name.indexOf("epix pro") != -1 &&
      name.indexOf("gen 2") != -1 &&
      name.indexOf("sapphire") != -1 &&
      name.indexOf("42") != -1 &&
      name.indexOf("carbon gray dlc") !== -1 &&
      name.indexOf("black band") === -1) ||
    name.indexOf("010-02802-15") != -1
  ) {
    return 39246;
  } else if (
    (name.indexOf("epix pro") != -1 &&
      name.indexOf("gen 2") != -1 &&
      name.indexOf("sapphire") != -1 &&
      name.indexOf("42") != -1 &&
      name.indexOf("carbon gray dlc") !== -1 &&
      name.indexOf("black band") !== -1) ||
    name.indexOf("010-02802-15") != -1
  ) {
    return 30294;
  } else if (
    (name.indexOf("epix pro") != -1 &&
      name.indexOf("gen 2") != -1 &&
      name.indexOf("sapphire") != -1 &&
      name.indexOf("42") != -1 &&
      name.indexOf("soft gold") !== -1 &&
      name.indexOf("light sand band") !== -1) ||
    name.indexOf("010-02802-11") != -1
  ) {
    return 30297;
  } else if (
    (name.indexOf("epix pro") != -1 &&
      name.indexOf("gen 2") != -1 &&
      name.indexOf("sapphire") != -1 &&
      name.indexOf("47") != -1 &&
      name.indexOf("carbon gray dlc") !== -1 &&
      name.indexOf("black band") !== -1) ||
    name.indexOf("010-02803-11") != -1
  ) {
    return 28174;
  } else if (
    (name.indexOf("epix pro") != -1 &&
      name.indexOf("gen 2") != -1 &&
      name.indexOf("sapphire") != -1 &&
      name.indexOf("47") != -1 &&
      name.indexOf("titanium") !== -1 &&
      name.indexOf("whitestone band") !== -1) ||
    name.indexOf("010-02803-21") != -1
  ) {
    return 28175;
  } else if (
    (name.indexOf("epix pro") != -1 &&
      name.indexOf("gen 2") != -1 &&
      name.indexOf("sapphire") != -1 &&
      name.indexOf("51") != -1 &&
      name.indexOf("carbon gray dlc") !== -1 &&
      name.indexOf("black band") !== -1) ||
    name.indexOf("010-02804-01") != -1
  ) {
    return 28177;
  } else if (
    (name.indexOf("epix pro") != -1 &&
      name.indexOf("gen 2") != -1 &&
      name.indexOf("sapphire") != -1 &&
      name.indexOf("51") != -1 &&
      name.indexOf("titanium") !== -1 &&
      name.indexOf("whitestone band") !== -1) ||
    name.indexOf("010-02804-11") != -1
  ) {
    return 28176;
  } else if (
    (name.indexOf("epix pro") != -1 &&
      name.indexOf("gen 2") != -1 &&
      name.indexOf("sapphire") != -1 &&
      name.indexOf("51") != -1 &&
      name.indexOf("carbon gray brown") !== -1) ||
    name.indexOf("010-02804-30") != -1
  ) {
    return 39250;
  } else if (
    name.indexOf("fenix 7 ") != -1 &&
    name.indexOf("pro") === -1 &&
    name.indexOf("solar") != -1 &&
    name.indexOf("sapphire") != -1 &&
    name.indexOf("carbon gray dlc") !== -1 &&
    name.indexOf("black band") !== -1
  ) {
    return 24796;
  } else if (
    name.indexOf("fenix 7 ") != -1 &&
    name.indexOf("pro") === -1 &&
    name.indexOf("solar") != -1 &&
    name.indexOf("sapphire") != -1 &&
    name.indexOf("slate gray") !== -1 &&
    name.indexOf("black band") !== -1
  ) {
    return 24795;
  } else if (
    name.indexOf("fenix 7 ") != -1 &&
    name.indexOf("pro") === -1 &&
    name.indexOf("solar") != -1 &&
    name.indexOf("sapphire") != -1 &&
    name.indexOf("black dlc") !== -1 &&
    name.indexOf("black band") !== -1
  ) {
    return 24799;
  } else if (
    name.indexOf("fenix 7 ") != -1 &&
    name.indexOf("pro") === -1 &&
    name.indexOf("solar") != -1 &&
    name.indexOf("sapphire") != -1 &&
    name.indexOf("carbon gray dlc") !== -1 &&
    name.indexOf("vented titanium band") !== -1
  ) {
    return 24800;
  } else if (
    name.indexOf("fenix 7 ") != -1 &&
    name.indexOf("pro") === -1 &&
    name.indexOf("solar") != -1 &&
    name.indexOf("sapphire") != -1 &&
    name.indexOf("mineral blue dlc") !== -1 &&
    name.indexOf("whitestone band") !== -1
  ) {
    return 24797;
  } else if (
    name.indexOf("fenix 7 ") != -1 &&
    name.indexOf("pro") === -1 &&
    name.indexOf("solar") != -1 &&
    name.indexOf("sapphire") != -1 &&
    name.indexOf("titanium") !== -1 &&
    name.indexOf("chestnut leather band") !== -1
  ) {
    return 24798;
  } else if (
    name.indexOf("fenix 7 ") != -1 &&
    name.indexOf("pro") === -1 &&
    name.indexOf("solar") === -1 &&
    name.indexOf("sapphire") === -1 &&
    name.indexOf("silver") !== -1 &&
    name.indexOf("graphite band") !== -1
  ) {
    return 24790;
  } else if (
    name.indexOf("fenix 7 pro") != -1 &&
    name.indexOf("solar") !== -1 &&
    name.indexOf("sapphire") !== -1 &&
    name.indexOf("carbon gray dlc") !== -1 &&
    name.indexOf("black band") !== -1
  ) {
    return 28167;
  } else if (
    name.indexOf("fenix 7 pro") != -1 &&
    name.indexOf("solar") !== -1 &&
    name.indexOf("sapphire") !== -1 &&
    name.indexOf("fog gray") !== -1 &&
    name.indexOf("ember orange band") !== -1
  ) {
    return 28168;
  } else if (
    name.indexOf("fenix 7 pro") != -1 &&
    name.indexOf("solar") !== -1 &&
    name.indexOf("sapphire") === -1 &&
    name.indexOf("slate gray") !== -1 &&
    name.indexOf("black band") !== -1
  ) {
    return 28169;
  } else if (
    (name.indexOf("fenix 7s pro") != -1 &&
      name.indexOf("solar") !== -1 &&
      name.indexOf("sapphire") !== -1 &&
      name.indexOf("carbon gray dlc") !== -1 &&
      name.indexOf("black band") !== -1) ||
    name.indexOf("010-02776-11") != -1
  ) {
    return 28179;
  } else if (
    (name.indexOf("fenix 7s pro") != -1 &&
      name.indexOf("solar") !== -1 &&
      name.indexOf("sapphire") !== -1 &&
      name.indexOf("soft gold") !== -1 &&
      name.indexOf("light sand band") !== -1) ||
    name.indexOf("010-02776-15") != -1
  ) {
    return 28180;
  } else if (
    (name.indexOf("fenix 7s pro") != -1 &&
      name.indexOf("solar") !== -1 &&
      name.indexOf("sapphire") === -1 &&
      name.indexOf("silver") !== -1 &&
      name.indexOf("graphite band") !== -1) ||
    name.indexOf("010-02776-01") != -1
  ) {
    return 28178;
  } else if (
    name.indexOf("fenix 7s") != -1 &&
    name.indexOf("pro") === -1 &&
    name.indexOf("solar") !== -1 &&
    name.indexOf("sapphire") !== -1 &&
    name.indexOf("carbon gray dlc") !== -1 &&
    name.indexOf("black band") !== -1
  ) {
    return 24776;
  } else if (
    name.indexOf("fenix 7s") != -1 &&
    name.indexOf("pro") === -1 &&
    name.indexOf("solar") !== -1 &&
    name.indexOf("sapphire") !== -1 &&
    name.indexOf("cream gold") !== -1 &&
    name.indexOf("cream heathered nylon band") !== -1
  ) {
    return 24779;
  } else if (
    name.indexOf("fenix 7s") != -1 &&
    name.indexOf("pro") === -1 &&
    name.indexOf("solar") !== -1 &&
    name.indexOf("sapphire") !== -1 &&
    name.indexOf("cream gold") !== -1 &&
    name.indexOf("light sand band") !== -1
  ) {
    return 24775;
  } else if (
    name.indexOf("fenix 7s") != -1 &&
    name.indexOf("pro") === -1 &&
    name.indexOf("solar") !== -1 &&
    name.indexOf("sapphire") !== -1 &&
    name.indexOf("dark bronze") !== -1 &&
    name.indexOf("shale gray band") !== -1
  ) {
    return 24777;
  } else if (
    name.indexOf("fenix 7s") != -1 &&
    name.indexOf("pro") === -1 &&
    name.indexOf("solar") !== -1 &&
    name.indexOf("sapphire") !== -1 &&
    name.indexOf("rose gold") !== -1 &&
    name.indexOf("limestone leather band") !== -1
  ) {
    return 24778;
  } else if (
    name.indexOf("fenix 7s") != -1 &&
    name.indexOf("pro") === -1 &&
    name.indexOf("solar") === -1 &&
    name.indexOf("sapphire") === -1 &&
    name.indexOf("silver") !== -1 &&
    name.indexOf("graphite band") !== -1
  ) {
    return 24720;
  } else if (
    name.indexOf("fenix 7s") != -1 &&
    name.indexOf("pro") === -1 &&
    name.indexOf("solar") === -1 &&
    name.indexOf("sapphire") === -1 &&
    name.indexOf("silver") !== -1 &&
    name.indexOf("whitestone band") !== -1
  ) {
    return 24726;
  } else if (
    name.indexOf("fenix 7s") != -1 &&
    name.indexOf("pro") === -1 &&
    name.indexOf("solar") !== -1 &&
    name.indexOf("sapphire") === -1 &&
    name.indexOf("rose gold") !== -1 &&
    name.indexOf("sand band") !== -1
  ) {
    return 24731;
  } else if (
    name.indexOf("fenix 7s") != -1 &&
    name.indexOf("pro") === -1 &&
    name.indexOf("solar") !== -1 &&
    name.indexOf("sapphire") === -1 &&
    name.indexOf("slate gray") !== -1 &&
    name.indexOf("black band") !== -1
  ) {
    return 24732;
  } else if (
    name.indexOf("fenix 7x") != -1 &&
    name.indexOf("pro") === -1 &&
    name.indexOf("solar") !== -1 &&
    name.indexOf("sapphire") === -1 &&
    name.indexOf("slate gray") !== -1 &&
    name.indexOf("black band") !== -1
  ) {
    return 24805;
  } else if (
    (name.indexOf("fenix 7x pro") != -1 &&
      name.indexOf("solar") !== -1 &&
      name.indexOf("sapphire") !== -1 &&
      name.indexOf("carbon gray dlc") !== -1 &&
      name.indexOf("black band") !== -1) ||
    name.indexOf("010-02778-11") != -1
  ) {
    return 28181;
  } else if (
    (name.indexOf("fenix 7x pro") != -1 &&
      name.indexOf("solar") !== -1 &&
      name.indexOf("sapphire") !== -1 &&
      name.indexOf("fog gray") !== -1 &&
      name.indexOf("ember orange band") !== -1) ||
    name.indexOf("010-02778-15") != -1
  ) {
    return 28182;
  } else if (
    name.indexOf("fenix 7x pro") != -1 &&
    name.indexOf("solar") !== -1 &&
    name.indexOf("no wi-fi") !== -1 &&
    name.indexOf("sapphire") === -1 &&
    name.indexOf("slate gray") !== -1 &&
    name.indexOf("black band") !== -1
  ) {
    return 35809;
  } else if (
    (name.indexOf("fenix 7x pro") != -1 &&
      name.indexOf("solar") !== -1 &&
      name.indexOf("sapphire") === -1 &&
      name.indexOf("slate gray") !== -1 &&
      name.indexOf("black band") !== -1) ||
    name.indexOf("010-02778-01") != -1
  ) {
    return 35810;
  } else if (
    name.indexOf("fenix 7x") != -1 &&
    name.indexOf("pro") === -1 &&
    name.indexOf("solar") !== -1 &&
    name.indexOf("sapphire") !== -1 &&
    name.indexOf("black dlc") !== -1 &&
    name.indexOf("black band") !== -1
  ) {
    return 24834;
  } else if (
    name.indexOf("fenix 7x") != -1 &&
    name.indexOf("pro") === -1 &&
    name.indexOf("solar") !== -1 &&
    name.indexOf("sapphire") !== -1 &&
    name.indexOf("carbon gray dlc") !== -1 &&
    name.indexOf("black band") !== -1
  ) {
    return 24806;
  } else if (
    name.indexOf("fenix 7x") != -1 &&
    name.indexOf("pro") === -1 &&
    name.indexOf("solar") !== -1 &&
    name.indexOf("sapphire") !== -1 &&
    name.indexOf("carbon gray dlc") !== -1 &&
    name.indexOf("vented titanium band") !== -1
  ) {
    return 24832;
  } else if (
    (name.indexOf("fenix 7x") != -1 &&
      name.indexOf("pro") === -1 &&
      name.indexOf("solar") !== -1 &&
      name.indexOf("sapphire") !== -1 &&
      name.indexOf("mineral blue dlc") !== -1 &&
      name.indexOf("whitestone band") !== -1) ||
    name.indexOf("010-02541-15") != -1
  ) {
    return 24807;
  } else if (
    name.indexOf("fenix 7x") != -1 &&
    name.indexOf("pro") === -1 &&
    name.indexOf("solar") !== -1 &&
    name.indexOf("sapphire") !== -1 &&
    name.indexOf("titanium") !== -1 &&
    name.indexOf("chestnut leather band") !== -1
  ) {
    return 24833;
  } else if (
    (name.indexOf("fenix 8 ") != -1 &&
      name.indexOf("pro") === -1 &&
      name.indexOf("amoled") !== -1 &&
      name.indexOf("43") !== -1 &&
      name.indexOf("solar") === -1 &&
      name.indexOf("sapphire") === -1 &&
      name.indexOf("silver") !== -1 &&
      name.indexOf("white silicone band") !== -1) ||
    name.indexOf("010-02903-00") != -1 ||
    name.indexOf("010-02903-06") != -1
  ) {
    return 36844;
  } else if (
    (name.indexOf("fenix 8 ") != -1 &&
      name.indexOf("pro") === -1 &&
      name.indexOf("amoled") !== -1 &&
      name.indexOf("43") !== -1 &&
      name.indexOf("solar") === -1 &&
      name.indexOf("sapphire") !== -1 &&
      name.indexOf("dark grey") !== -1 &&
      name.indexOf("black silicone band") !== -1) ||
    name.indexOf("010-02903-21") != -1 ||
    name.indexOf("010-02903-28") != -1
  ) {
    return 36837;
  } else if (
    (name.indexOf("fenix 8 ") != -1 &&
      name.indexOf("pro") === -1 &&
      name.indexOf("amoled") !== -1 &&
      name.indexOf("43") !== -1 &&
      name.indexOf("solar") === -1 &&
      name.indexOf("sapphire") !== -1 &&
      name.indexOf("gold") !== -1 &&
      name.indexOf("gold silicone band") !== -1) ||
    name.indexOf("010-02903-11") != -1 ||
    name.indexOf("010-02903-18") != -1
  ) {
    return 27153;
  } else if (
    (name.indexOf("fenix 8 ") != -1 &&
      name.indexOf("pro") === -1 &&
      name.indexOf("amoled") !== -1 &&
      name.indexOf("43") !== -1 &&
      name.indexOf("solar") === -1 &&
      name.indexOf("sapphire") !== -1 &&
      name.indexOf("soft gold") !== -1 &&
      name.indexOf("gray leather band") !== -1) ||
    name.indexOf("010-02903-40") != -1
  ) {
    return 36843;
  } else if (
    (name.indexOf("fenix 8 ") != -1 &&
      name.indexOf("pro") === -1 &&
      name.indexOf("amoled") !== -1 &&
      name.indexOf("47") !== -1 &&
      name.indexOf("solar") === -1 &&
      name.indexOf("sapphire") !== -1 &&
      name.indexOf("orange") !== -1 &&
      name.indexOf("graphite silicone band") !== -1) ||
    name.indexOf("010-02904-11") != -1 ||
    name.indexOf("010-02904-19") != -1
  ) {
    return 36838;
  } else if (
    (name.indexOf("fenix 8 ") != -1 &&
      name.indexOf("pro") === -1 &&
      name.indexOf("amoled") !== -1 &&
      name.indexOf("47") !== -1 &&
      name.indexOf("solar") === -1 &&
      name.indexOf("sapphire") !== -1 &&
      name.indexOf("dark grey") !== -1 &&
      name.indexOf("black silicone band") !== -1) ||
    name.indexOf("010-02904-21") != -1 ||
    name.indexOf("010-02904-29") != -1
  ) {
    return 36839;
  } else if (
    (name.indexOf("fenix 8 ") != -1 &&
      name.indexOf("pro") === -1 &&
      name.indexOf("amoled") !== -1 &&
      name.indexOf("47") !== -1 &&
      name.indexOf("solar") === -1 &&
      name.indexOf("sapphire") !== -1 &&
      name.indexOf("gray") !== -1 &&
      name.indexOf("gray titanium band") !== -1) ||
    name.indexOf("010-02904-40") != -1
  ) {
    return 36840;
  } else if (
    (name.indexOf("fenix 8 ") != -1 &&
      name.indexOf("pro") === -1 &&
      name.indexOf("amoled") !== -1 &&
      name.indexOf("47") !== -1 &&
      name.indexOf("solar") === -1 &&
      name.indexOf("sapphire") !== -1 &&
      name.indexOf("slate gray") !== -1 &&
      name.indexOf("black silicone band") !== -1) ||
    name.indexOf("010-02904-00") != -1 ||
    name.indexOf("010-02904-09") != -1
  ) {
    return 39252;
  } else if (
    (name.indexOf("fenix 8 ") != -1 &&
      name.indexOf("pro") === -1 &&
      name.indexOf("amoled") !== -1 &&
      name.indexOf("47") !== -1 &&
      name.indexOf("solar") !== -1 &&
      name.indexOf("sapphire") !== -1 &&
      name.indexOf("carbon gray dlc") !== -1 &&
      name.indexOf("pebble gray silicone") !== -1) ||
    name.indexOf("010-02906-11") != -1 ||
    name.indexOf("010-02906-70") != -1
  ) {
    return 38238;
  } else if (
    (name.indexOf("fenix 8 ") != -1 &&
      name.indexOf("pro") === -1 &&
      name.indexOf("amoled") !== -1 &&
      name.indexOf("47") !== -1 &&
      name.indexOf("solar") !== -1 &&
      name.indexOf("sapphire") !== -1 &&
      name.indexOf("titanium amp / yellow") !== -1 &&
      name.indexOf("graphite silicone band") !== -1) ||
    name.indexOf("010-02906-21") != -1
  ) {
    return 38240;
  } else if (
    (name.indexOf("fenix 8 ") != -1 &&
      name.indexOf("pro") === -1 &&
      name.indexOf("amoled") !== -1 &&
      name.indexOf("51") !== -1 &&
      name.indexOf("solar") === -1 &&
      name.indexOf("sapphire") !== -1 &&
      name.indexOf("bare titanium") !== -1 &&
      name.indexOf("black chestnut leather") !== -1 &&
      name.indexOf("graphite silicone band") !== -1) ||
    name.indexOf("010-02905-40") != -1
  ) {
    return 38241;
  } else if (
    (name.indexOf("fenix 8 ") != -1 &&
      name.indexOf("pro") === -1 &&
      name.indexOf("amoled") !== -1 &&
      name.indexOf("51") !== -1 &&
      name.indexOf("solar") === -1 &&
      name.indexOf("sapphire") !== -1 &&
      name.indexOf("dark gray") !== -1 &&
      name.indexOf("black silicone band") !== -1) ||
    name.indexOf("010-02905-21") != -1 ||
    name.indexOf("010-02905-63") != -1
  ) {
    return 36842;
  } else if (
    (name.indexOf("fenix 8 ") != -1 &&
      name.indexOf("pro") === -1 &&
      name.indexOf("amoled") !== -1 &&
      name.indexOf("51") !== -1 &&
      name.indexOf("solar") === -1 &&
      name.indexOf("sapphire") !== -1 &&
      name.indexOf("gray / orange") !== -1 &&
      name.indexOf("graphite silicone band") !== -1) ||
    name.indexOf("010-02905-11") != -1 ||
    name.indexOf("010-02905-53") != -1
  ) {
    return 38242;
  } else if (
    (name.indexOf("fenix 8 ") != -1 &&
      name.indexOf("pro") === -1 &&
      name.indexOf("amoled") !== -1 &&
      name.indexOf("51") !== -1 &&
      name.indexOf("solar") !== -1 &&
      name.indexOf("sapphire") !== -1 &&
      name.indexOf("carbon gray dlc") !== -1 &&
      name.indexOf("pebble gray silicone") !== -1) ||
    name.indexOf("010-02907-11") != -1 ||
    name.indexOf("010-02907-70") != -1
  ) {
    return 38243;
  } else if (
    (name.indexOf("fenix 8 ") != -1 &&
      name.indexOf("pro") === -1 &&
      name.indexOf("amoled") !== -1 &&
      name.indexOf("51") !== -1 &&
      name.indexOf("solar") !== -1 &&
      name.indexOf("sapphire") !== -1 &&
      name.indexOf("amp / yellow") !== -1 &&
      name.indexOf("graphite silicone band") !== -1) ||
    name.indexOf("010-02907-21") != -1
  ) {
    return 38244;
  } else if (
    (name.indexOf("fenix 8 ") != -1 &&
      name.indexOf("pro") === -1 &&
      name.indexOf("amoled") !== -1 &&
      name.indexOf("51") !== -1 &&
      name.indexOf("solar") === -1 &&
      name.indexOf("sapphire") === -1 &&
      name.indexOf("slate gray") !== -1 &&
      name.indexOf("black") !== -1) ||
    name.indexOf("010-02905-00") != -1
  ) {
    return 39255;
  } else if (
    (name.indexOf("fenix e ") != -1 &&
      name.indexOf("pro") === -1 &&
      name.indexOf("amoled") !== -1 &&
      name.indexOf("47") !== -1 &&
      name.indexOf("solar") === -1 &&
      name.indexOf("sapphire") === -1 &&
      name.indexOf("black") !== -1 &&
      name.indexOf("black silicone band") !== -1) ||
    name.indexOf("010-03025-01") != -1 ||
    name.indexOf("010-03025-13") != -1
  ) {
    return 39269;
  } else if (
    (name.indexOf("fenix e ") != -1 &&
      name.indexOf("pro") === -1 &&
      name.indexOf("amoled") !== -1 &&
      name.indexOf("47") !== -1 &&
      name.indexOf("solar") === -1 &&
      name.indexOf("sapphire") === -1 &&
      name.indexOf("silver") !== -1 &&
      name.indexOf("black silicone band") !== -1) ||
    name.indexOf("010-03025-00") != -1
  ) {
    return 39283;
  } else if (
    (name.indexOf("forerunner 165 ") != -1 &&
      name.indexOf("pro") === -1 &&
      name.indexOf("amoled") === -1 &&
      name.indexOf("solar") === -1 &&
      name.indexOf("sapphire") === -1 &&
      name.indexOf("black") !== -1 &&
      name.indexOf("slate grey") !== -1) ||
    name.indexOf("010-02863-20") != -1
  ) {
    return 37168;
  } else if (
    (name.indexOf("forerunner 165 ") != -1 &&
      name.indexOf("pro") === -1 &&
      name.indexOf("amoled") === -1 &&
      name.indexOf("solar") === -1 &&
      name.indexOf("sapphire") === -1 &&
      name.indexOf("mist grey") !== -1 &&
      name.indexOf("whitestone") !== -1) ||
    name.indexOf("010-02863-21") != -1
  ) {
    return 37170;
  } else if (
    (name.indexOf("forerunner 165 ") != -1 &&
      name.indexOf("pro") === -1 &&
      name.indexOf("amoled") === -1 &&
      name.indexOf("solar") === -1 &&
      name.indexOf("sapphire") === -1 &&
      name.indexOf("music") !== -1 &&
      name.indexOf("black") !== -1 &&
      name.indexOf("slate grey") !== -1) ||
    name.indexOf("010-02863-30") != -1
  ) {
    return 37169;
  } else if (
    (name.indexOf("forerunner 165 ") != -1 &&
      name.indexOf("pro") === -1 &&
      name.indexOf("amoled") === -1 &&
      name.indexOf("solar") === -1 &&
      name.indexOf("sapphire") === -1 &&
      name.indexOf("music") !== -1 &&
      name.indexOf("lilac berry") !== -1 &&
      name.indexOf("lilac") !== -1) ||
    name.indexOf("010-02863-33") != -1
  ) {
    return 37173;
  } else if (
    (name.indexOf("forerunner 165 ") != -1 &&
      name.indexOf("pro") === -1 &&
      name.indexOf("amoled") === -1 &&
      name.indexOf("solar") === -1 &&
      name.indexOf("sapphire") === -1 &&
      name.indexOf("music") !== -1 &&
      name.indexOf("mist grey") !== -1 &&
      name.indexOf("whitestone") !== -1) ||
    name.indexOf("010-02863-31") != -1
  ) {
    return 37171;
  } else if (
    (name.indexOf("forerunner 165 ") != -1 &&
      name.indexOf("pro") === -1 &&
      name.indexOf("amoled") === -1 &&
      name.indexOf("solar") === -1 &&
      name.indexOf("sapphire") === -1 &&
      name.indexOf("music") !== -1 &&
      name.indexOf("turquoise") !== -1 &&
      name.indexOf("aqua") !== -1) ||
    name.indexOf("010-02863-32") != -1
  ) {
    return 37172;
  } else if (
    name.indexOf("forerunner 255 ") != -1 &&
    name.indexOf("pro") === -1 &&
    name.indexOf("amoled") === -1 &&
    name.indexOf("solar") === -1 &&
    name.indexOf("sapphire") === -1 &&
    name.indexOf("music") === -1 &&
    name.indexOf("basic tidal") !== -1 &&
    name.indexOf("blue") !== -1
  ) {
    return 27338;
  } else if (
    name.indexOf("forerunner 255 ") != -1 &&
    name.indexOf("pro") === -1 &&
    name.indexOf("amoled") === -1 &&
    name.indexOf("solar") === -1 &&
    name.indexOf("sapphire") === -1 &&
    name.indexOf("music") !== -1 &&
    name.indexOf("black") !== -1
  ) {
    return 27337;
  } else if (
    name.indexOf("forerunner 255s") != -1 &&
    name.indexOf("pro") === -1 &&
    name.indexOf("amoled") === -1 &&
    name.indexOf("solar") === -1 &&
    name.indexOf("sapphire") === -1 &&
    name.indexOf("music") === -1 &&
    name.indexOf("light pink") !== -1
  ) {
    return 27341;
  } else if (
    name.indexOf("forerunner 255s") != -1 &&
    name.indexOf("pro") === -1 &&
    name.indexOf("amoled") === -1 &&
    name.indexOf("solar") === -1 &&
    name.indexOf("sapphire") === -1 &&
    name.indexOf("music") !== -1 &&
    name.indexOf("whitestone") !== -1
  ) {
    return 27342;
  } else if (
    name.indexOf("forerunner 255s") != -1 &&
    name.indexOf("pro") === -1 &&
    name.indexOf("amoled") === -1 &&
    name.indexOf("solar") === -1 &&
    name.indexOf("sapphire") === -1 &&
    name.indexOf("music") === -1 &&
    name.indexOf("powder gray") !== -1
  ) {
    return 27340;
  } else if (
    (name.indexOf("forerunner 265 ") != -1 &&
      name.indexOf("pro") === -1 &&
      name.indexOf("amoled") === -1 &&
      name.indexOf("solar") === -1 &&
      name.indexOf("sapphire") === -1 &&
      name.indexOf("music") === -1 &&
      name.indexOf("46") !== -1 &&
      name.indexOf("black bezel") !== -1 &&
      name.indexOf("gray silicone band") !== -1) ||
    name.indexOf("010-02810-10") != -1
  ) {
    return 27327;
  } else if (
    (name.indexOf("forerunner 265 ") != -1 &&
      name.indexOf("pro") === -1 &&
      name.indexOf("amoled") === -1 &&
      name.indexOf("solar") === -1 &&
      name.indexOf("sapphire") === -1 &&
      name.indexOf("music") === -1 &&
      name.indexOf("46") !== -1 &&
      name.indexOf("aqua case") !== -1 &&
      name.indexOf("black bezel") !== -1 &&
      name.indexOf("black silicone band") !== -1) ||
    name.indexOf("010-02810-12") != -1
  ) {
    return 27328;
  } else if (
    (name.indexOf("forerunner 265 ") != -1 &&
      name.indexOf("pro") === -1 &&
      name.indexOf("amoled") === -1 &&
      name.indexOf("solar") === -1 &&
      name.indexOf("sapphire") === -1 &&
      name.indexOf("music") === -1 &&
      name.indexOf("46") !== -1 &&
      name.indexOf("whitestone case") !== -1 &&
      name.indexOf("black bezel") !== -1 &&
      name.indexOf("tidal blue silicone band") !== -1) ||
    name.indexOf("010-02810-11") != -1
  ) {
    return 27326;
  } else if (
    (name.indexOf("forerunner 265s") != -1 &&
      name.indexOf("pro") === -1 &&
      name.indexOf("amoled") === -1 &&
      name.indexOf("solar") === -1 &&
      name.indexOf("sapphire") === -1 &&
      name.indexOf("music") === -1 &&
      name.indexOf("42") !== -1 &&
      name.indexOf("black/amp") !== -1 &&
      name.indexOf("black bezel") !== -1 &&
      name.indexOf("yellow silicone band") !== -1) ||
    name.indexOf("010-02810-13") != -1
  ) {
    return 27325;
  } else if (
    (name.indexOf("forerunner 265s") != -1 &&
      name.indexOf("pro") === -1 &&
      name.indexOf("amoled") === -1 &&
      name.indexOf("solar") === -1 &&
      name.indexOf("sapphire") === -1 &&
      name.indexOf("music") === -1 &&
      name.indexOf("42") !== -1 &&
      name.indexOf("light pink") !== -1 &&
      name.indexOf("black bezel") !== -1 &&
      name.indexOf("whitestone silicone band") !== -1) ||
    name.indexOf("010-02810-15") != -1
  ) {
    return 27324;
  } else if (
    (name.indexOf("forerunner 265s") != -1 &&
      name.indexOf("pro") === -1 &&
      name.indexOf("amoled") === -1 &&
      name.indexOf("solar") === -1 &&
      name.indexOf("sapphire") === -1 &&
      name.indexOf("music") === -1 &&
      name.indexOf("42") !== -1 &&
      name.indexOf("whitestone case") !== -1 &&
      name.indexOf("black bezel") !== -1 &&
      name.indexOf("neo tropic silicone band") !== -1) ||
    name.indexOf("010-02810-14") != -1
  ) {
    return 27323;
  } else if (
    name.indexOf("forerunner 55 ") != -1 &&
    name.indexOf("pro") === -1 &&
    name.indexOf("amoled") === -1 &&
    name.indexOf("solar") === -1 &&
    name.indexOf("sapphire") === -1 &&
    name.indexOf("music") === -1 &&
    name.indexOf("black") !== -1
  ) {
    return 27332;
  } else if (
    name.indexOf("forerunner 55 ") != -1 &&
    name.indexOf("pro") === -1 &&
    name.indexOf("amoled") === -1 &&
    name.indexOf("solar") === -1 &&
    name.indexOf("sapphire") === -1 &&
    name.indexOf("music") === -1 &&
    name.indexOf("white") !== -1
  ) {
    return 27331;
  } else if (
    name.indexOf("forerunner 955 ") != -1 &&
    name.indexOf("pro") === -1 &&
    name.indexOf("amoled") === -1 &&
    name.indexOf("solar") === -1 &&
    name.indexOf("sapphire") === -1 &&
    name.indexOf("music") === -1 &&
    name.indexOf("black") !== -1
  ) {
    return 27317;
  } else if (
    name.indexOf("forerunner 955 ") != -1 &&
    name.indexOf("pro") === -1 &&
    name.indexOf("amoled") === -1 &&
    name.indexOf("solar") !== -1 &&
    name.indexOf("sapphire") === -1 &&
    name.indexOf("music") === -1 &&
    name.indexOf("black") !== -1
  ) {
    return 27318;
  } else if (
    name.indexOf("forerunner 955 ") != -1 &&
    name.indexOf("pro") === -1 &&
    name.indexOf("amoled") === -1 &&
    name.indexOf("solar") !== -1 &&
    name.indexOf("sapphire") === -1 &&
    name.indexOf("music") === -1 &&
    name.indexOf("whitestone emea") !== -1
  ) {
    return 27319;
  } else if (
    (name.indexOf("forerunner 965 ") != -1 &&
      name.indexOf("pro") === -1 &&
      name.indexOf("amoled") === -1 &&
      name.indexOf("solar") === -1 &&
      name.indexOf("sapphire") === -1 &&
      name.indexOf("music") === -1 &&
      name.indexOf("carbon gray dlc") !== -1 &&
      name.indexOf("titanium bezel") !== -1 &&
      name.indexOf("black case") !== -1 &&
      name.indexOf("black silicone band") !== -1) ||
    name.indexOf("010-02809-12") != -1
  ) {
    return 27320;
  } else if (
    (name.indexOf("forerunner 965 ") != -1 &&
      name.indexOf("pro") === -1 &&
      name.indexOf("amoled") === -1 &&
      name.indexOf("solar") === -1 &&
      name.indexOf("sapphire") === -1 &&
      name.indexOf("music") === -1 &&
      name.indexOf("carbon gray dlc") !== -1 &&
      name.indexOf("titanium bezel") !== -1 &&
      name.indexOf("black case") !== -1 &&
      name.indexOf("powder gray silicone band") !== -1) ||
    name.indexOf("010-02809-10") != -1
  ) {
    return 27321;
  } else if (
    (name.indexOf("forerunner 965 ") != -1 &&
      name.indexOf("pro") === -1 &&
      name.indexOf("amoled") === -1 &&
      name.indexOf("solar") === -1 &&
      name.indexOf("sapphire") === -1 &&
      name.indexOf("music") === -1 &&
      name.indexOf("carbon gray dlc") === -1 &&
      name.indexOf("titanium bezel") !== -1 &&
      name.indexOf("whitestone case") !== -1 &&
      name.indexOf("powder gray silicone band") !== -1) ||
    name.indexOf("010-02809-11") != -1
  ) {
    return 27322;
  } else if (
    (name.indexOf("instinct 2 ") != -1 &&
      name.indexOf("pro") === -1 &&
      name.indexOf("amoled") === -1 &&
      name.indexOf("solar") === -1 &&
      name.indexOf("sapphire") === -1 &&
      name.indexOf("camo") !== -1 &&
      name.indexOf("graphite") === -1) ||
    name.indexOf("010-02626-03") != -1
  ) {
    return 35788;
  } else if (
    (name.indexOf("instinct 2 ") != -1 &&
      name.indexOf("pro") === -1 &&
      name.indexOf("amoled") === -1 &&
      name.indexOf("solar") === -1 &&
      name.indexOf("sapphire") === -1 &&
      name.indexOf("dezl") !== -1) ||
    name.indexOf("010-02626-70") != -1
  ) {
    return 35791;
  } else if (
    (name.indexOf("instinct 2 ") != -1 &&
      name.indexOf("pro") === -1 &&
      name.indexOf("amoled") === -1 &&
      name.indexOf("solar") !== -1 &&
      name.indexOf("sapphire") === -1 &&
      name.indexOf("camo") === -1 &&
      name.indexOf("graphite") !== -1) ||
    name.indexOf("010-02627-00") != -1
  ) {
    return 35787;
  } else if (
    (name.indexOf("instinct 2 ") != -1 &&
      name.indexOf("pro") === -1 &&
      name.indexOf("amoled") === -1 &&
      name.indexOf("solar") !== -1 &&
      name.indexOf("sapphire") === -1 &&
      name.indexOf("camo") === -1 &&
      name.indexOf("mist gray") !== -1) ||
    name.indexOf("010-02627-01") != -1
  ) {
    return 35786;
  } else if (
    (name.indexOf("instinct 2 ") != -1 &&
      name.indexOf("pro") === -1 &&
      name.indexOf("amoled") === -1 &&
      name.indexOf("solar") !== -1 &&
      name.indexOf("sapphire") === -1 &&
      name.indexOf("tactical") !== -1 &&
      name.indexOf("camo") === -1 &&
      name.indexOf("black") !== -1) ||
    name.indexOf("010-02627-03") != -1
  ) {
    return 35789;
  } else if (
    (name.indexOf("instinct 2 ") != -1 &&
      name.indexOf("pro") === -1 &&
      name.indexOf("amoled") === -1 &&
      name.indexOf("solar") !== -1 &&
      name.indexOf("sapphire") === -1 &&
      name.indexOf("standard") !== -1 &&
      name.indexOf("camo") === -1 &&
      name.indexOf("electric lime") !== -1) ||
    name.indexOf("010-02626-01") != -1
  ) {
    return 35785;
  } else if (
    (name.indexOf("instinct 2 ") != -1 &&
      name.indexOf("pro") === -1 &&
      name.indexOf("amoled") === -1 &&
      name.indexOf("solar") !== -1 &&
      name.indexOf("sapphire") === -1 &&
      name.indexOf("standard") !== -1 &&
      name.indexOf("camo") === -1 &&
      name.indexOf("graphite") !== -1) ||
    name.indexOf("010-02626-00") != -1
  ) {
    return 34461;
  } else if (
    (name.indexOf("instinct 2 ") != -1 &&
      name.indexOf("pro") === -1 &&
      name.indexOf("amoled") === -1 &&
      name.indexOf("solar") !== -1 &&
      name.indexOf("sapphire") === -1 &&
      name.indexOf("surf") !== -1 &&
      name.indexOf("camo") === -1 &&
      name.indexOf("mavericks") !== -1) ||
    name.indexOf("010-02626-00") != -1
  ) {
    return 35790;
  } else if (
    (name.indexOf("instinct 2s") != -1 &&
      name.indexOf("pro") === -1 &&
      name.indexOf("amoled") === -1 &&
      name.indexOf("solar") !== -1 &&
      name.indexOf("sapphire") === -1 &&
      name.indexOf("camo") !== -1 &&
      name.indexOf("mist") !== -1) ||
    name.indexOf("010-02563-03") != -1
  ) {
    return 35766;
  } else if (
    (name.indexOf("instinct 2s") != -1 &&
      name.indexOf("pro") === -1 &&
      name.indexOf("amoled") === -1 &&
      name.indexOf("solar") !== -1 &&
      name.indexOf("sapphire") === -1 &&
      name.indexOf("camo") === -1 &&
      name.indexOf("graphite") !== -1) ||
    name.indexOf("010-02564-00") != -1
  ) {
    return 35761;
  } else if (
    (name.indexOf("instinct 2s") != -1 &&
      name.indexOf("pro") === -1 &&
      name.indexOf("amoled") === -1 &&
      name.indexOf("solar") !== -1 &&
      name.indexOf("sapphire") === -1 &&
      name.indexOf("camo") === -1 &&
      name.indexOf("mist gray") !== -1) ||
    name.indexOf("010-02564-01") != -1
  ) {
    return 35762;
  } else if (
    (name.indexOf("instinct 2s") != -1 &&
      name.indexOf("pro") === -1 &&
      name.indexOf("amoled") === -1 &&
      name.indexOf("solar") !== -1 &&
      name.indexOf("sapphire") === -1 &&
      name.indexOf("camo") === -1 &&
      name.indexOf("neo tropic") !== -1) ||
    name.indexOf("010-02564-02") != -1
  ) {
    return 35763;
  } else if (
    (name.indexOf("instinct 2s") != -1 &&
      name.indexOf("pro") === -1 &&
      name.indexOf("amoled") === -1 &&
      name.indexOf("solar") !== -1 &&
      name.indexOf("sapphire") === -1 &&
      name.indexOf("standard") !== -1 &&
      name.indexOf("deep orchid") !== -1) ||
    name.indexOf("010-02563-04") != -1
  ) {
    return 35764;
  } else if (
    (name.indexOf("instinct 2s") != -1 &&
      name.indexOf("pro") === -1 &&
      name.indexOf("amoled") === -1 &&
      name.indexOf("solar") !== -1 &&
      name.indexOf("sapphire") === -1 &&
      name.indexOf("standard") !== -1 &&
      name.indexOf("graphite") !== -1) ||
    name.indexOf("010-02563-00") != -1
  ) {
    return 35765;
  } else if (
    (name.indexOf("instinct 2x") != -1 &&
      name.indexOf("pro") === -1 &&
      name.indexOf("amoled") === -1 &&
      name.indexOf("solar") === -1 &&
      name.indexOf("sapphire") === -1 &&
      name.indexOf("standard") === -1 &&
      name.indexOf("flame red") !== -1) ||
    name.indexOf("010-02805-01") != -1
  ) {
    return 34465;
  } else if (
    (name.indexOf("instinct 2x") != -1 &&
      name.indexOf("pro") === -1 &&
      name.indexOf("amoled") === -1 &&
      name.indexOf("solar") !== -1 &&
      name.indexOf("sapphire") === -1 &&
      name.indexOf("standard") === -1 &&
      name.indexOf("graphite") !== -1) ||
    name.indexOf("010-02805-00") != -1
  ) {
    return 34466;
  } else if (
    (name.indexOf("instinct 2x") != -1 &&
      name.indexOf("pro") === -1 &&
      name.indexOf("amoled") === -1 &&
      name.indexOf("solar") !== -1 &&
      name.indexOf("sapphire") === -1 &&
      name.indexOf("standard") === -1 &&
      name.indexOf("moss") !== -1) ||
    name.indexOf("010-02805-05") != -1
  ) {
    return 34467;
  } else if (
    (name.indexOf("instinct 2x") != -1 &&
      name.indexOf("pro") === -1 &&
      name.indexOf("amoled") === -1 &&
      name.indexOf("solar") !== -1 &&
      name.indexOf("sapphire") === -1 &&
      name.indexOf("standard") === -1 &&
      name.indexOf("whitestone") !== -1) ||
    name.indexOf("010-02805-04") != -1
  ) {
    return 34468;
  } else if (
    (name.indexOf("instinct 3 ") != -1 &&
      name.indexOf("pro") === -1 &&
      name.indexOf("amoled") !== -1 &&
      name.indexOf("solar") === -1 &&
      name.indexOf("45") !== -1 &&
      name.indexOf("sapphire") === -1 &&
      name.indexOf("standard") === -1 &&
      name.indexOf("black") !== -1) ||
    name.indexOf("010-02936-00") != -1 ||
    name.indexOf("010-02936-40") != -1
  ) {
    return 39301;
  } else if (
    (name.indexOf("instinct 3 ") != -1 &&
      name.indexOf("pro") === -1 &&
      name.indexOf("amoled") !== -1 &&
      name.indexOf("solar") === -1 &&
      name.indexOf("45") !== -1 &&
      name.indexOf("sapphire") === -1 &&
      name.indexOf("standard") === -1 &&
      name.indexOf("neotropic") !== -1) ||
    name.indexOf("010-02936-01") != -1
  ) {
    return 39304;
  } else if (
    (name.indexOf("instinct 3 ") != -1 &&
      name.indexOf("pro") === -1 &&
      name.indexOf("amoled") === -1 &&
      name.indexOf("solar") !== -1 &&
      name.indexOf("45") !== -1 &&
      name.indexOf("sapphire") === -1 &&
      name.indexOf("standard") === -1 &&
      name.indexOf("black") !== -1) ||
    name.indexOf("010-02934-00") != -1 ||
    name.indexOf("010-02934-40") != -1
  ) {
    return 39312;
  } else if (
    (name.indexOf("instinct 3 ") != -1 &&
      name.indexOf("pro") === -1 &&
      name.indexOf("amoled") === -1 &&
      name.indexOf("solar") !== -1 &&
      name.indexOf("45") !== -1 &&
      name.indexOf("sapphire") === -1 &&
      name.indexOf("standard") === -1 &&
      name.indexOf("grey twilight") !== -1) ||
    name.indexOf("010-02934-01") != -1
  ) {
    return 39314;
  } else if (
    (name.indexOf("instinct 3 ") != -1 &&
      name.indexOf("pro") === -1 &&
      name.indexOf("amoled") === -1 &&
      name.indexOf("solar") !== -1 &&
      name.indexOf("50") !== -1 &&
      name.indexOf("sapphire") === -1 &&
      name.indexOf("tactical") !== -1 &&
      name.indexOf("black") !== -1) ||
    name.indexOf("010-02935-50") != -1 ||
    name.indexOf("010-02935-90") != -1
  ) {
    return 39326;
  } else if (
    (name.indexOf("instinct 3 ") != -1 &&
      name.indexOf("pro") === -1 &&
      name.indexOf("amoled") !== -1 &&
      name.indexOf("solar") === -1 &&
      name.indexOf("50") !== -1 &&
      name.indexOf("sapphire") === -1 &&
      name.indexOf("tactical") === -1 &&
      name.indexOf("black") !== -1) ||
    name.indexOf("010-03020-00") != -1 ||
    name.indexOf("010-03020-40") != -1
  ) {
    return 39306;
  } else if (
    (name.indexOf("instinct 3 ") != -1 &&
      name.indexOf("pro") === -1 &&
      name.indexOf("amoled") !== -1 &&
      name.indexOf("solar") === -1 &&
      name.indexOf("50") !== -1 &&
      name.indexOf("sapphire") === -1 &&
      name.indexOf("tactical") === -1 &&
      name.indexOf("neotropic grey") !== -1) ||
    name.indexOf("010-03020-01") != -1
  ) {
    return 39308;
  } else if (
    (name.indexOf("instinct 3 ") != -1 &&
      name.indexOf("pro") === -1 &&
      name.indexOf("amoled") !== -1 &&
      name.indexOf("solar") === -1 &&
      name.indexOf("50") !== -1 &&
      name.indexOf("sapphire") === -1 &&
      name.indexOf("tactical") !== -1 &&
      name.indexOf("black") !== -1) ||
    name.indexOf("010-03020-50") != -1 ||
    name.indexOf("010-03020-90") != -1
  ) {
    return 39310;
  } else if (
    (name.indexOf("instinct 3 ") != -1 &&
      name.indexOf("pro") === -1 &&
      name.indexOf("amoled") === -1 &&
      name.indexOf("solar") !== -1 &&
      name.indexOf("50") !== -1 &&
      name.indexOf("sapphire") === -1 &&
      name.indexOf("tactical") === -1 &&
      name.indexOf("black") !== -1) ||
    name.indexOf("010-02935-00") != -1 ||
    name.indexOf("010-02935-40") != -1
  ) {
    return 39317;
  } else if (
    (name.indexOf("instinct 3 ") != -1 &&
      name.indexOf("pro") === -1 &&
      name.indexOf("amoled") === -1 &&
      name.indexOf("solar") !== -1 &&
      name.indexOf("50") !== -1 &&
      name.indexOf("sapphire") === -1 &&
      name.indexOf("tactical") === -1 &&
      name.indexOf("grey orange") !== -1) ||
    name.indexOf("010-02935-01") != -1
  ) {
    return 39321;
  } else if (
    (name.indexOf("instinct e ") != -1 &&
      name.indexOf("pro") === -1 &&
      name.indexOf("amoled") === -1 &&
      name.indexOf("solar") === -1 &&
      name.indexOf("40") !== -1 &&
      name.indexOf("sapphire") === -1 &&
      name.indexOf("tactical") === -1 &&
      name.indexOf("black charcoal") !== -1) ||
    name.indexOf("010-02932-00") != -1 ||
    name.indexOf("010-02932-13") != -1
  ) {
    return 39342;
  } else if (
    (name.indexOf("instinct e ") != -1 &&
      name.indexOf("pro") === -1 &&
      name.indexOf("amoled") === -1 &&
      name.indexOf("solar") === -1 &&
      name.indexOf("40") !== -1 &&
      name.indexOf("sapphire") === -1 &&
      name.indexOf("tactical") === -1 &&
      name.indexOf("electric lime grey") !== -1) ||
    name.indexOf("010-02932-01") != -1
  ) {
    return 39344;
  } else if (
    (name.indexOf("instinct e ") != -1 &&
      name.indexOf("pro") === -1 &&
      name.indexOf("amoled") === -1 &&
      name.indexOf("solar") === -1 &&
      name.indexOf("45") !== -1 &&
      name.indexOf("sapphire") === -1 &&
      name.indexOf("tactical") === -1 &&
      name.indexOf("black charcoal") !== -1) ||
    name.indexOf("010-02933-00") != -1 ||
    name.indexOf("010-02933-13") != -1
  ) {
    return 39346;
  } else if (
    (name.indexOf("instinct e ") != -1 &&
      name.indexOf("pro") === -1 &&
      name.indexOf("amoled") === -1 &&
      name.indexOf("solar") === -1 &&
      name.indexOf("45") !== -1 &&
      name.indexOf("sapphire") === -1 &&
      name.indexOf("tactical") === -1 &&
      name.indexOf("electric lime") !== -1) ||
    name.indexOf("010-02933-01") != -1
  ) {
    return 39347;
  } else if (
    (name.indexOf("marq ") != -1 &&
      name.indexOf("gen 2") !== -1 &&
      name.indexOf("pro") === -1 &&
      name.indexOf("amoled") === -1 &&
      name.indexOf("solar") === -1 &&
      name.indexOf("sapphire") === -1 &&
      name.indexOf("adventurer") !== -1 &&
      name.indexOf("modern tool watch") !== -1) ||
    name.indexOf("010-02648-31") != -1
  ) {
    return 35815;
  } else if (
    (name.indexOf("marq ") != -1 &&
      name.indexOf("gen 2") !== -1 &&
      name.indexOf("pro") === -1 &&
      name.indexOf("amoled") === -1 &&
      name.indexOf("solar") === -1 &&
      name.indexOf("sapphire") === -1 &&
      name.indexOf("athlete") !== -1 &&
      name.indexOf("carbon edition") !== -1 &&
      name.indexOf("modern tool watch") !== -1) ||
    name.indexOf("010-02722-10") != -1
  ) {
    return 35811;
  } else if (
    (name.indexOf("marq ") != -1 &&
      name.indexOf("gen 2") !== -1 &&
      name.indexOf("pro") === -1 &&
      name.indexOf("amoled") === -1 &&
      name.indexOf("solar") === -1 &&
      name.indexOf("sapphire") === -1 &&
      name.indexOf("athlete") !== -1 &&
      name.indexOf("performance edition") !== -1 &&
      name.indexOf("modern tool watch") !== -1) ||
    name.indexOf("010-02648-51") != -1
  ) {
    return 35814;
  } else if (
    (name.indexOf("marq ") != -1 &&
      name.indexOf("gen 2") !== -1 &&
      name.indexOf("pro") === -1 &&
      name.indexOf("amoled") === -1 &&
      name.indexOf("solar") === -1 &&
      name.indexOf("sapphire") === -1 &&
      name.indexOf("aviator") !== -1 &&
      name.indexOf("modern tool watch") !== -1) ||
    name.indexOf("010-02648-01") != -1
  ) {
    return 35816;
  } else if (
    (name.indexOf("marq ") != -1 &&
      name.indexOf("gen 2") !== -1 &&
      name.indexOf("pro") === -1 &&
      name.indexOf("amoled") === -1 &&
      name.indexOf("solar") === -1 &&
      name.indexOf("sapphire") === -1 &&
      name.indexOf("captain") !== -1 &&
      name.indexOf("modern tool watch") !== -1) ||
    name.indexOf("010-02648-11") != -1
  ) {
    return 35817;
  } else if (
    (name.indexOf("marq ") != -1 &&
      name.indexOf("gen 2") !== -1 &&
      name.indexOf("pro") === -1 &&
      name.indexOf("amoled") === -1 &&
      name.indexOf("solar") === -1 &&
      name.indexOf("sapphire") === -1 &&
      name.indexOf("commander") !== -1 &&
      name.indexOf("carbon edition") !== -1 &&
      name.indexOf("modern tool watch") !== -1) ||
    name.indexOf("010-02722-00") != -1
  ) {
    return 35813;
  } else if (
    (name.indexOf("marq ") != -1 &&
      name.indexOf("gen 2") !== -1 &&
      name.indexOf("pro") === -1 &&
      name.indexOf("amoled") === -1 &&
      name.indexOf("solar") === -1 &&
      name.indexOf("sapphire") === -1 &&
      name.indexOf("golfer") !== -1 &&
      name.indexOf("carbon edition") !== -1 &&
      name.indexOf("modern tool watch") !== -1) ||
    name.indexOf("010-02722-21") != -1
  ) {
    return 35812;
  } else if (
    (name.indexOf("venu 3 ") != -1 &&
      name.indexOf("pro") === -1 &&
      name.indexOf("45") !== -1 &&
      name.indexOf("amoled") === -1 &&
      name.indexOf("solar") === -1 &&
      name.indexOf("sapphire") === -1 &&
      name.indexOf("silver") !== -1 &&
      name.indexOf("whitestone") !== -1) ||
    name.indexOf("010-02784-00") != -1
  ) {
    return 39349;
  } else if (
    (name.indexOf("venu 3 ") != -1 &&
      name.indexOf("pro") === -1 &&
      name.indexOf("45") !== -1 &&
      name.indexOf("amoled") === -1 &&
      name.indexOf("solar") === -1 &&
      name.indexOf("sapphire") === -1 &&
      name.indexOf("slate") !== -1 &&
      name.indexOf("black leather") !== -1) ||
    name.indexOf("010-02784-52") != -1
  ) {
    return 39351;
  } else if (
    name.indexOf("venu 3 ") != -1 &&
    name.indexOf("pro") === -1 &&
    name.indexOf("45") !== -1 &&
    name.indexOf("amoled") === -1 &&
    name.indexOf("solar") === -1 &&
    name.indexOf("sapphire") === -1 &&
    name.indexOf("steel bezel") !== -1 &&
    name.indexOf("whitestone case") !== -1 &&
    name.indexOf("silicone band") !== -1
  ) {
    return 35797;
  } else if (
    name.indexOf("venu 3 ") != -1 &&
    name.indexOf("pro") === -1 &&
    name.indexOf("45") !== -1 &&
    name.indexOf("amoled") === -1 &&
    name.indexOf("solar") === -1 &&
    name.indexOf("sapphire") === -1 &&
    name.indexOf("slate stainless") !== -1 &&
    name.indexOf("steel bezel") !== -1 &&
    name.indexOf("black case") !== -1 &&
    name.indexOf("silicone band") !== -1
  ) {
    return 35798;
  } else if (
    (name.indexOf("venu 3s ") != -1 &&
      name.indexOf("pro") === -1 &&
      name.indexOf("41") !== -1 &&
      name.indexOf("amoled") === -1 &&
      name.indexOf("solar") === -1 &&
      name.indexOf("sapphire") === -1 &&
      name.indexOf("silver stainless") !== -1 &&
      name.indexOf("steel bezel") === -1 &&
      name.indexOf("sage grey") !== -1) ||
    name.indexOf("010-02785-01") !== -1
  ) {
    return 39650;
  } else if (
    (name.indexOf("venu 3s ") != -1 &&
      name.indexOf("pro") === -1 &&
      name.indexOf("41") !== -1 &&
      name.indexOf("amoled") === -1 &&
      name.indexOf("solar") === -1 &&
      name.indexOf("sapphire") === -1 &&
      name.indexOf("slate") !== -1 &&
      name.indexOf("steel bezel") === -1 &&
      name.indexOf("pebble gray") !== -1) ||
    name.indexOf("010-02785-00") !== -1
  ) {
    return 39656;
  } else if (
    (name.indexOf("venu 3s ") != -1 &&
      name.indexOf("pro") === -1 &&
      name.indexOf("41") !== -1 &&
      name.indexOf("amoled") === -1 &&
      name.indexOf("solar") === -1 &&
      name.indexOf("sapphire") === -1 &&
      name.indexOf("soft gold") !== -1 &&
      name.indexOf("steel bezel") === -1 &&
      name.indexOf("dust rose") !== -1) ||
    name.indexOf("010-02785-03") !== -1
  ) {
    return 39354;
  } else if (
    (name.indexOf("venu 3s ") != -1 &&
      name.indexOf("pro") === -1 &&
      name.indexOf("41") !== -1 &&
      name.indexOf("amoled") === -1 &&
      name.indexOf("solar") === -1 &&
      name.indexOf("sapphire") === -1 &&
      name.indexOf("soft gold") !== -1 &&
      name.indexOf("steel bezel") === -1 &&
      name.indexOf("french gray") !== -1) ||
    name.indexOf("010-02785-02") !== -1
  ) {
    return 39669;
  } else if (
    (name.indexOf("venu 3s ") != -1 &&
      name.indexOf("pro") === -1 &&
      name.indexOf("41") !== -1 &&
      name.indexOf("amoled") === -1 &&
      name.indexOf("solar") === -1 &&
      name.indexOf("sapphire") === -1 &&
      name.indexOf("soft gold") !== -1 &&
      name.indexOf("steel bezel") === -1 &&
      name.indexOf("french gray leather") !== -1) ||
    name.indexOf("010-02785-55") !== -1
  ) {
    return 39672;
  } else if (
    (name.indexOf("venu 3s ") != -1 &&
      name.indexOf("pro") === -1 &&
      name.indexOf("41") !== -1 &&
      name.indexOf("amoled") === -1 &&
      name.indexOf("solar") === -1 &&
      name.indexOf("sapphire") === -1 &&
      name.indexOf("soft gold") !== -1 &&
      name.indexOf("steel bezel") === -1 &&
      name.indexOf("ivory") !== -1) ||
    name.indexOf("010-02785-04") !== -1
  ) {
    return 39667;
  } else if (
    name.indexOf("venu 3s ") != -1 &&
    name.indexOf("pro") === -1 &&
    name.indexOf("41") !== -1 &&
    name.indexOf("amoled") === -1 &&
    name.indexOf("solar") === -1 &&
    name.indexOf("sapphire") === -1 &&
    name.indexOf("stainless") !== -1 &&
    name.indexOf("steel bezel") !== -1 &&
    name.indexOf("sage gray case") !== -1 &&
    name.indexOf("silicone band") !== -1
  ) {
    return 35794;
  } else if (
    name.indexOf("venu 3s ") != -1 &&
    name.indexOf("pro") === -1 &&
    name.indexOf("41") !== -1 &&
    name.indexOf("amoled") === -1 &&
    name.indexOf("solar") === -1 &&
    name.indexOf("sapphire") === -1 &&
    name.indexOf("slate") !== -1 &&
    name.indexOf("stainless") !== -1 &&
    name.indexOf("steel bezel") !== -1 &&
    name.indexOf("pebble gray case") !== -1 &&
    name.indexOf("silicone band") !== -1
  ) {
    return 35793;
  } else if (
    name.indexOf("venu 3s ") != -1 &&
    name.indexOf("pro") === -1 &&
    name.indexOf("41") !== -1 &&
    name.indexOf("amoled") === -1 &&
    name.indexOf("solar") === -1 &&
    name.indexOf("sapphire") === -1 &&
    name.indexOf("soft gold") !== -1 &&
    name.indexOf("stainless") !== -1 &&
    name.indexOf("steel bezel") !== -1 &&
    name.indexOf("dust rose case") !== -1 &&
    name.indexOf("silicone band") !== -1
  ) {
    return 35795;
  } else if (
    name.indexOf("venu 3s ") != -1 &&
    name.indexOf("pro") === -1 &&
    name.indexOf("41") !== -1 &&
    name.indexOf("amoled") === -1 &&
    name.indexOf("solar") === -1 &&
    name.indexOf("sapphire") === -1 &&
    name.indexOf("soft gold") !== -1 &&
    name.indexOf("stainless") !== -1 &&
    name.indexOf("steel bezel") !== -1 &&
    name.indexOf("ivory case") !== -1 &&
    name.indexOf("silicone band") !== -1
  ) {
    return 35792;
  } else {
    return returnIDOtherBrand(name) || "No match";
  }
};
