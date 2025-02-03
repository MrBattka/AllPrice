import { returnIDXiaomi } from "./returnIDXiaomi";

export const returnIDSamsung = (nameStock) => {
  const removeDoubleSpace = nameStock.replace(/\s+/g, " ");
  const name = removeDoubleSpace.toLowerCase();
  if (
    name.indexOf("a05 4/128") != -1 &&
    (name.indexOf("blue/black") != -1 ||
      name.indexOf("black") != -1 ||
      name.indexOf("dark") != -1 ||
      name.indexOf("черный") != -1)
  ) {
    return 30948;
  } else if (name.indexOf("a05 4/128") != -1 && name.indexOf("green") != -1) {
    return 30949;
  } else if (name.indexOf("a05 4/128") != -1 && name.indexOf("silver") != -1) {
    return 30950;
  } else if (
    name.indexOf("a05 4/64") != -1 &&
    (name.indexOf("blue/black") != -1 ||
      name.indexOf("black") != -1 ||
      name.indexOf("dark") != -1)
  ) {
    return 31006;
  } else if (name.indexOf("a05 4/64") != -1 && name.indexOf("green") != -1) {
    return 31007;
  } else if (name.indexOf("a05 4/64") != -1 && name.indexOf("silver") != -1) {
    return 31008;
  } else if (
    name.indexOf("a05 6/128") != -1 &&
    (name.indexOf("blue/black") != -1 ||
      name.indexOf("black") != -1 ||
      name.indexOf("dark") != -1)
  ) {
    return 30135;
  } else if (name.indexOf("a05 6/128") != -1 && name.indexOf("green") != -1) {
    return 30137;
  } else if (name.indexOf("a05 6/128") != -1 && name.indexOf("silver") != -1) {
    return 30136;
  } else if (
    name.indexOf("a05s 4/128") != -1 &&
    (name.indexOf("blue/black") != -1 ||
      name.indexOf("black") != -1 ||
      name.indexOf("dark") != -1)
  ) {
    return 30901;
  } else if (name.indexOf("a05s 4/128") != -1 && name.indexOf("green") != -1) {
    return 30902;
  } else if (name.indexOf("a05s 4/128") != -1 && name.indexOf("silver") != -1) {
    return 30903;
  } else if (name.indexOf("a05s 4/128") != -1 && name.indexOf("violet") != -1) {
    return 30904;
  } else if (
    name.indexOf("a05s 4/64") != -1 &&
    (name.indexOf("blue/black") != -1 ||
      name.indexOf("black") != -1 ||
      name.indexOf("dark") != -1)
  ) {
    return 31009;
  } else if (name.indexOf("a05s 4/64") != -1 && name.indexOf("green") != -1) {
    return 31010;
  } else if (name.indexOf("a05s 4/64") != -1 && name.indexOf("silver") != -1) {
    return 31011;
  } else if (name.indexOf("a05s 4/64") != -1 && name.indexOf("violet") != -1) {
    return 31012;
  } else if (
    name.indexOf("a05s 6/128") != -1 &&
    (name.indexOf("blue/black") != -1 ||
      name.indexOf("black") != -1 ||
      name.indexOf("dark") != -1)
  ) {
    return 30138;
  } else if (name.indexOf("a05s 6/128") != -1 && name.indexOf("green") != -1) {
    return 30140;
  } else if (name.indexOf("a05s 6/128") != -1 && name.indexOf("silver") != -1) {
    return 30139;
  } else if (name.indexOf("a05s 6/128") != -1 && name.indexOf("violet") != -1) {
    return 30141;
  } else if (name.indexOf("a06 4/128 black") != -1) {
    return 36872;
  } else if (name.indexOf("a06 4/128 gold") != -1) {
    return 36879;
  } else if (
    name.indexOf("a06 4/128 light blue") != -1 ||
    name.indexOf("a06 4/128 blue") != -1
  ) {
    return 36876;
  } else if (name.indexOf("a06 4/64 black") != -1) {
    return 36873;
  } else if (name.indexOf("a06 4/64 gold") != -1) {
    return 36880;
  } else if (name.indexOf("a06 4/64 light blue") != -1) {
    return 36877;
  } else if (name.indexOf("a06 6/128 black") != -1) {
    return 36875;
  } else if (name.indexOf("a06 6/128 gold") != -1) {
    return 36881;
  } else if (
    name.indexOf("a06 6/128 light blue") != -1 ||
    name.indexOf("a06 6/128 blue") != -1
  ) {
    return 36878;
  } else if (
    name.indexOf("a15 4/128") != -1 &&
    (name.indexOf("blue/black") != -1 ||
      name.indexOf("black") != -1 ||
      name.indexOf("dark") != -1)
  ) {
    return 31076;
  } else if (
    name.indexOf("a15 4/128") != -1 &&
    name.indexOf("light blue") != -1
  ) {
    return 31078;
  } else if (name.indexOf("a15 4/128") != -1 && name.indexOf("blue") != -1) {
    return 31079;
  } else if (name.indexOf("a15 4/128") != -1 && name.indexOf("yellow") != -1) {
    return 35697;
  } else if (
    name.indexOf("a15 6/128") != -1 &&
    (name.indexOf("blue/black") != -1 ||
      name.indexOf("black") != -1 ||
      name.indexOf("dark") != -1)
  ) {
    return 31080;
  } else if (
    name.indexOf("a15 6/128") != -1 &&
    name.indexOf("light blue") != -1
  ) {
    return 31082;
  } else if (name.indexOf("a15 6/128") != -1 && name.indexOf("blue") != -1) {
    return 31083;
  } else if (name.indexOf("a15 6/128") != -1 && name.indexOf("yellow") != -1) {
    return 35698;
  } else if (
    name.indexOf("a15 8/128") != -1 &&
    (name.indexOf("blue/black") != -1 ||
      name.indexOf("black") != -1 ||
      name.indexOf("dark") != -1)
  ) {
    return 31084;
  } else if (
    name.indexOf("a15 8/128") != -1 &&
    name.indexOf("light blue") != -1
  ) {
    return 31086;
  } else if (name.indexOf("a15 8/128") != -1 && name.indexOf("blue") != -1) {
    return 31087;
  } else if (name.indexOf("a15 8/128") != -1 && name.indexOf("yellow") != -1) {
    return 35699;
  } else if (
    name.indexOf("a15 8/256") != -1 &&
    (name.indexOf("blue/black") != -1 ||
      name.indexOf("black") != -1 ||
      name.indexOf("dark") != -1)
  ) {
    return 31088;
  } else if (
    name.indexOf("a15 8/256") != -1 &&
    name.indexOf("light blue") != -1
  ) {
    return 31090;
  } else if (name.indexOf("a15 8/256") != -1 && name.indexOf("blue") != -1) {
    return 31091;
  } else if (name.indexOf("a15 8/256") != -1 && name.indexOf("yellow") != -1) {
    return 35704;
  } else if (
    name.indexOf("a16 8/256") != -1 &&
    (name.indexOf("blue/black") != -1 ||
      name.indexOf("black") != -1 ||
      name.indexOf("dark") != -1 ||
      name.indexOf("черный") != -1)
  ) {
    return 36992;
  } else if (name.indexOf("a16 8/256") != -1 && name.indexOf("gold") != -1) {
    return 36993;
  } else if (
    name.indexOf("a16 8/256") != -1 &&
    (name.indexOf("gray") != -1 ||
      name.indexOf("серебристый") != -1 ||
      name.indexOf("silver") != -1)
  ) {
    return 36994;
  } else if (
    name.indexOf("a16 8/256") != -1 &&
    (name.indexOf("green") != -1 ||
      name.indexOf("мятный") != -1 ||
      name.indexOf("mint") != -1)
  ) {
    return 36995;
  } else if (
    name.indexOf("a16 4/128") != -1 &&
    (name.indexOf("blue/black") != -1 ||
      name.indexOf("black") != -1 ||
      name.indexOf("dark") != -1 ||
      name.indexOf("черный") != -1)
  ) {
    return 36988;
  } else if (name.indexOf("a16 4/128") != -1 && name.indexOf("gold") != -1) {
    return 36990;
  } else if (
    name.indexOf("a16 4/128") != -1 &&
    (name.indexOf("gray") != -1 ||
      name.indexOf("серебристый") != -1 ||
      name.indexOf("silver") != -1)
  ) {
    return 36989;
  } else if (
    name.indexOf("a16 4/128") != -1 &&
    (name.indexOf("green") != -1 ||
      name.indexOf("мятный") != -1 ||
      name.indexOf("mint") != -1)
  ) {
    return 36991;
  } else if (
    name.indexOf("a24 4/128") != -1 &&
    (name.indexOf("blue/black") != -1 ||
      name.indexOf("black") != -1 ||
      name.indexOf("dark") != -1 ||
      name.indexOf("черный") != -1)
  ) {
    return 28214;
  } else if (name.indexOf("a24 4/128") != -1 && name.indexOf("blue") != -1) {
    return 28215;
  } else if (name.indexOf("a24 4/128") != -1 && name.indexOf("red") != -1) {
    return 28216;
  } else if (
    name.indexOf("a24 4/128") != -1 &&
    (name.indexOf("lime") != -1 || name.indexOf("green") != -1)
  ) {
    return 28217;
  } else if (
    name.indexOf("a24 6/128") != -1 &&
    (name.indexOf("blue/black") != -1 ||
      name.indexOf("black") != -1 ||
      name.indexOf("dark") != -1)
  ) {
    return 27805;
  } else if (name.indexOf("a24 6/128") != -1 && name.indexOf("blue") != -1) {
    return 27808;
  } else if (name.indexOf("a24 6/128") != -1 && name.indexOf("red") != -1) {
    return 27810;
  } else if (
    name.indexOf("a24 6/128") != -1 &&
    (name.indexOf("lime") != -1 || name.indexOf("green") != -1)
  ) {
    return 27806;
  } else if (
    name.indexOf("a24 8/128") != -1 &&
    (name.indexOf("blue/black") != -1 ||
      name.indexOf("black") != -1 ||
      name.indexOf("dark") != -1)
  ) {
    return 27804;
  } else if (name.indexOf("a24 8/128") != -1 && name.indexOf("blue") != -1) {
    return 27809;
  } else if (name.indexOf("a24 8/128") != -1 && name.indexOf("red") != -1) {
    return 27811;
  } else if (
    name.indexOf("a24 8/128") != -1 &&
    (name.indexOf("lime") != -1 || name.indexOf("green") != -1)
  ) {
    return 27807;
  } else if (
    name.indexOf("a25 6/128") != -1 &&
    (name.indexOf("blue/black") != -1 ||
      name.indexOf("black") != -1 ||
      name.indexOf("dark") != -1)
  ) {
    return 31092;
  } else if (name.indexOf("a25 6/128") != -1 && name.indexOf("blue") != -1) {
    return 31094;
  } else if (
    name.indexOf("a25 6/128") != -1 &&
    (name.indexOf("light blue") != -1 || name.indexOf("silver") != -1)
  ) {
    return 35705;
  } else if (name.indexOf("a25 6/128") != -1 && name.indexOf("yellow") != -1) {
    return 31093;
  } else if (
    name.indexOf("a25 8/128") != -1 &&
    (name.indexOf("blue/black") != -1 ||
      name.indexOf("black") != -1 ||
      name.indexOf("dark") != -1)
  ) {
    return 31096;
  } else if (name.indexOf("a25 8/128") != -1 && name.indexOf("blue") != -1) {
    return 31098;
  } else if (
    name.indexOf("a25 8/128") != -1 &&
    (name.indexOf("light blue") != -1 || name.indexOf("silver") != -1)
  ) {
    return 35706;
  } else if (name.indexOf("a25 8/128") != -1 && name.indexOf("yellow") != -1) {
    return 31097;
  } else if (
    name.indexOf("a25 8/256") != -1 &&
    (name.indexOf("blue/black") != -1 ||
      name.indexOf("black") != -1 ||
      name.indexOf("dark") != -1 ||
      name.indexOf("темно-синий") != -1)
  ) {
    return 31100;
  } else if (name.indexOf("a25 8/256") != -1 && name.indexOf("blue") != -1) {
    return 31102;
  } else if (
    name.indexOf("a25 8/256") != -1 &&
    (name.indexOf("light blue") != -1 || name.indexOf("silver") != -1)
  ) {
    return 35707;
  } else if (name.indexOf("a25 8/256") != -1 && name.indexOf("yellow") != -1) {
    return 31101;
  } else if (
    name.indexOf("a34 6/128") != -1 &&
    name.indexOf("graphite") != -1
  ) {
    return 27195;
  } else if (
    name.indexOf("a34 6/128") != -1 &&
    (name.indexOf("lime") != -1 ||
      name.indexOf("lime") != -1 ||
      name.indexOf("yellow") != -1)
  ) {
    return 27198;
  } else if (name.indexOf("a34 6/128") != -1 && name.indexOf("silver") != -1) {
    return 27201;
  } else if (name.indexOf("a34 6/128") != -1 && name.indexOf("violet") != -1) {
    return 27204;
  } else if (
    name.indexOf("a34 8/128") != -1 &&
    name.indexOf("graphite") != -1
  ) {
    return 27197;
  } else if (
    name.indexOf("a34 8/128") != -1 &&
    (name.indexOf("lime") != -1 ||
      name.indexOf("lime") != -1 ||
      name.indexOf("yellow") != -1)
  ) {
    return 27199;
  } else if (name.indexOf("a34 8/128") != -1 && name.indexOf("silver") != -1) {
    return 27202;
  } else if (name.indexOf("a34 8/128") != -1 && name.indexOf("violet") != -1) {
    return 27205;
  } else if (
    name.indexOf("a34 8/256") != -1 &&
    name.indexOf("graphite") != -1
  ) {
    return 27196;
  } else if (
    name.indexOf("a34 8/256") != -1 &&
    (name.indexOf("lime") != -1 ||
      name.indexOf("lime") != -1 ||
      name.indexOf("yellow") != -1)
  ) {
    return 27200;
  } else if (name.indexOf("a34 8/256") != -1 && name.indexOf("silver") != -1) {
    return 27203;
  } else if (name.indexOf("a34 8/256") != -1 && name.indexOf("violet") != -1) {
    return 27206;
  } else if (
    name.indexOf("a35 6/128") != -1 &&
    (name.indexOf("iceblue") != -1 ||
      name.indexOf("blue") != -1 ||
      name.indexOf("blue") != -1)
  ) {
    return 35917;
  } else if (name.indexOf("a35 6/128") != -1 && name.indexOf("lilac") != -1) {
    return 35914;
  } else if (
    name.indexOf("a35 6/128") != -1 &&
    (name.indexOf("navy") != -1 ||
      name.indexOf("black") != -1 ||
      name.indexOf("navy") != -1 ||
      name.indexOf("dark") != -1)
  ) {
    return 35912;
  } else if (
    name.indexOf("a35 6/128") != -1 &&
    (name.indexOf("lemon") != -1 ||
      name.indexOf("lime") != -1 ||
      name.indexOf("yellow") != -1)
  ) {
    return 35920;
  } else if (name.indexOf("a35 8/128") != -1 && name.indexOf("blue") != -1) {
    return 35918;
  } else if (name.indexOf("a35 8/128") != -1 && name.indexOf("lilac") != -1) {
    return 35915;
  } else if (
    name.indexOf("a35 8/128") != -1 &&
    (name.indexOf("navy") != -1 ||
      name.indexOf("black") != -1 ||
      name.indexOf("dark") != -1)
  ) {
    return 35911;
  } else if (
    name.indexOf("a35 8/128") != -1 &&
    (name.indexOf("lemon") != -1 ||
      name.indexOf("lime") != -1 ||
      name.indexOf("yellow") != -1)
  ) {
    return 35921;
  } else if (
    name.indexOf("a35 8/256") != -1 &&
    (name.indexOf("iceblue") != -1 || name.indexOf("blue") != -1)
  ) {
    return 35919;
  } else if (name.indexOf("a35 8/256") != -1 && name.indexOf("lilac") != -1) {
    return 35916;
  } else if (
    name.indexOf("a35 8/256") != -1 &&
    (name.indexOf("navy") != -1 ||
      name.indexOf("black") != -1 ||
      name.indexOf("dark") != -1)
  ) {
    return 35913;
  } else if (
    name.indexOf("a35 8/256") != -1 &&
    (name.indexOf("lemon") != -1 ||
      name.indexOf("lime") != -1 ||
      name.indexOf("yellow") != -1)
  ) {
    return 35922;
  } else if (name.indexOf("a53 6/128") != -1 && name.indexOf("black") != -1) {
    return 22587;
  } else if (name.indexOf("a53 6/128") != -1 && name.indexOf("blue") != -1) {
    return 22588;
  } else if (name.indexOf("a53 6/128") != -1 && name.indexOf("peach") != -1) {
    return 22589;
  } else if (name.indexOf("a53 6/128") != -1 && name.indexOf("white") != -1) {
    return 22590;
  } else if (
    name.indexOf("a54 6/128") != -1 &&
    (name.indexOf("graphite") != -1 || name.indexOf("black") != -1)
  ) {
    return 27226;
  } else if (
    name.indexOf("a54 6/128") != -1 &&
    (name.indexOf("lime") != -1 ||
      name.indexOf("lime") != -1 ||
      name.indexOf("yellow") != -1)
  ) {
    return 27223;
  } else if (name.indexOf("a54 6/128") != -1 && name.indexOf("violet") != -1) {
    return 27229;
  } else if (name.indexOf("a54 6/128") != -1 && name.indexOf("white") != -1) {
    return 27232;
  } else if (
    name.indexOf("a54 8/128") != -1 &&
    (name.indexOf("graphite") != -1 || name.indexOf("black") != -1)
  ) {
    return 27227;
  } else if (
    name.indexOf("a54 8/128") != -1 &&
    (name.indexOf("lime") != -1 ||
      name.indexOf("lime") != -1 ||
      name.indexOf("yellow") != -1)
  ) {
    return 27224;
  } else if (name.indexOf("a54 8/128") != -1 && name.indexOf("violet") != -1) {
    return 27230;
  } else if (name.indexOf("a54 8/128") != -1 && name.indexOf("white") != -1) {
    return 27233;
  } else if (
    name.indexOf("a54 8/256") != -1 &&
    (name.indexOf("graphite") != -1 || name.indexOf("black") != -1)
  ) {
    return 27228;
  } else if (
    name.indexOf("a54 8/256") != -1 &&
    (name.indexOf("lime") != -1 ||
      name.indexOf("lime") != -1 ||
      name.indexOf("yellow") != -1)
  ) {
    return 27225;
  } else if (name.indexOf("a54 8/256") != -1 && name.indexOf("violet") != -1) {
    return 27231;
  } else if (name.indexOf("a54 8/256") != -1 && name.indexOf("white") != -1) {
    return 27234;
  } else if (
    name.indexOf("a55 12/256") != -1 &&
    (name.indexOf("iceblue") != -1 || name.indexOf("blue") != -1)
  ) {
    return 35929;
  } else if (
    name.indexOf("a55 ") != -1 &&
    name.indexOf("12/256") != -1 &&
    (name.indexOf("lemon") != -1 ||
      name.indexOf("lime") != -1 ||
      name.indexOf("yellow") != -1)
  ) {
    return 35932;
  } else if (
    name.indexOf("a55 12/256") != -1 &&
    (name.indexOf("lilac") != -1 ||
      name.indexOf("violet") != -1 ||
      name.indexOf("lavender") != -1)
  ) {
    return 35926;
  } else if (
    name.indexOf("a55 12/256") != -1 &&
    (name.indexOf("navy") != -1 || name.indexOf("black") != -1)
  ) {
    return 35925;
  } else if (
    name.indexOf("a55 8/128") != -1 &&
    (name.indexOf("iceblue") != -1 || name.indexOf("blue") != -1)
  ) {
    return 35930;
  } else if (
    name.indexOf("a55 8/128") != -1 &&
    (name.indexOf("lemon") != -1 ||
      name.indexOf("lime") != -1 ||
      name.indexOf("yellow") != -1)
  ) {
    return 35933;
  } else if (
    name.indexOf("a55 8/128") != -1 &&
    (name.indexOf("lilac") != -1 ||
      name.indexOf("violet") != -1 ||
      name.indexOf("lavender") != -1)
  ) {
    return 35927;
  } else if (
    name.indexOf("a55 8/128") != -1 &&
    (name.indexOf("navy") != -1 ||
      name.indexOf("black") != -1 ||
      name.indexOf("темно-синий") != -1)
  ) {
    return 35923;
  } else if (
    name.indexOf("a55 8/256") != -1 &&
    (name.indexOf("iceblue") != -1 || name.indexOf("blue") != -1)
  ) {
    return 35931;
  } else if (
    name.indexOf("a55 8/256") != -1 &&
    (name.indexOf("lemon") != -1 ||
      name.indexOf("lime") != -1 ||
      name.indexOf("yellow") != -1)
  ) {
    return 35934;
  } else if (
    name.indexOf("a55 8/256") != -1 &&
    (name.indexOf("lilac") != -1 ||
      name.indexOf("violet") != -1 ||
      name.indexOf("lavender") != -1)
  ) {
    return 35928;
  } else if (
    name.indexOf("a55 8/256") != -1 &&
    (name.indexOf("navy") != -1 || name.indexOf("black") != -1)
  ) {
    return 35924;
  } else if (
    name.indexOf("s22 ultra") != -1 &&
    name.indexOf("12/1tb") != -1 &&
    name.indexOf("burgundy") != -1
  ) {
    return 21905;
  } else if (
    name.indexOf("s22 ultra") != -1 &&
    name.indexOf("12/1tb") != -1 &&
    name.indexOf("graphite") != -1
  ) {
    return 21906;
  } else if (
    name.indexOf("s22 ultra") != -1 &&
    name.indexOf("12/1tb") != -1 &&
    name.indexOf("green") != -1
  ) {
    return 21907;
  } else if (
    name.indexOf("s22 ultra") != -1 &&
    name.indexOf("12/1tb") != -1 &&
    name.indexOf("black") != -1
  ) {
    return 21908;
  } else if (
    name.indexOf("s22 ultra") != -1 &&
    name.indexOf("12/1tb") != -1 &&
    name.indexOf("red") != -1
  ) {
    return 21909;
  } else if (
    name.indexOf("s22 ultra") != -1 &&
    name.indexOf("12/1tb") != -1 &&
    name.indexOf("blue") != -1
  ) {
    return 21910;
  } else if (
    name.indexOf("s22 ultra") != -1 &&
    name.indexOf("12/1tb") != -1 &&
    name.indexOf("white") != -1
  ) {
    return 21911;
  } else if (
    name.indexOf("s22 ultra") != -1 &&
    name.indexOf("12/256") != -1 &&
    name.indexOf("burgundy") != -1
  ) {
    return 21888;
  } else if (
    name.indexOf("s22 ultra") != -1 &&
    name.indexOf("12/256") != -1 &&
    name.indexOf("graphite") != -1
  ) {
    return 21892;
  } else if (
    name.indexOf("s22 ultra") != -1 &&
    name.indexOf("12/256") != -1 &&
    name.indexOf("green") != -1
  ) {
    return 21893;
  } else if (
    name.indexOf("s22 ultra") != -1 &&
    name.indexOf("12/256") != -1 &&
    name.indexOf("black") != -1
  ) {
    return 21895;
  } else if (
    name.indexOf("s22 ultra") != -1 &&
    name.indexOf("12/256") != -1 &&
    name.indexOf("red") != -1
  ) {
    return 21896;
  } else if (
    name.indexOf("s22 ultra") != -1 &&
    name.indexOf("12/256") != -1 &&
    name.indexOf("blue") != -1
  ) {
    return 21894;
  } else if (
    name.indexOf("s22 ultra") != -1 &&
    name.indexOf("12/256") != -1 &&
    name.indexOf("white") != -1
  ) {
    return 21897;
  } else if (
    name.indexOf("s22 ultra") != -1 &&
    name.indexOf("12/512") != -1 &&
    name.indexOf("burgundy") != -1
  ) {
    return 21898;
  } else if (
    name.indexOf("s22 ultra") != -1 &&
    name.indexOf("12/512") != -1 &&
    name.indexOf("graphite") != -1
  ) {
    return 21899;
  } else if (
    name.indexOf("s22 ultra") != -1 &&
    name.indexOf("12/512") != -1 &&
    name.indexOf("green") != -1
  ) {
    return 21900;
  } else if (
    name.indexOf("s22 ultra") != -1 &&
    name.indexOf("12/512") != -1 &&
    name.indexOf("black") != -1
  ) {
    return 21901;
  } else if (
    name.indexOf("s22 ultra") != -1 &&
    name.indexOf("12/512") != -1 &&
    name.indexOf("red") != -1
  ) {
    return 21902;
  } else if (
    name.indexOf("s22 ultra") != -1 &&
    name.indexOf("12/512") != -1 &&
    name.indexOf("blue") != -1
  ) {
    return 21903;
  } else if (
    name.indexOf("s22 ultra") != -1 &&
    name.indexOf("12/512") != -1 &&
    name.indexOf("white") != -1
  ) {
    return 21904;
  } else if (
    name.indexOf("s22 ultra") != -1 &&
    name.indexOf("8/128") != -1 &&
    name.indexOf("burgundy") != -1
  ) {
    return 21891;
  } else if (
    name.indexOf("s22 ultra") != -1 &&
    name.indexOf("8/128") != -1 &&
    name.indexOf("graphite") != -1
  ) {
    return 21889;
  } else if (
    name.indexOf("s22 ultra") != -1 &&
    name.indexOf("8/128") != -1 &&
    name.indexOf("green") != -1
  ) {
    return 21890;
  } else if (
    name.indexOf("s22 ultra") != -1 &&
    name.indexOf("8/128") != -1 &&
    name.indexOf("black") != -1
  ) {
    return 21883;
  } else if (
    name.indexOf("s22 ultra") != -1 &&
    name.indexOf("8/128") != -1 &&
    name.indexOf("red") != -1
  ) {
    return 21886;
  } else if (
    name.indexOf("s22 ultra") != -1 &&
    name.indexOf("8/128") != -1 &&
    name.indexOf("blue") != -1
  ) {
    return 21885;
  } else if (
    name.indexOf("s22 ultra") != -1 &&
    name.indexOf("8/128") != -1 &&
    name.indexOf("white") != -1
  ) {
    return 21887;
  } else if (
    name.indexOf("s22+ ") != -1 &&
    name.indexOf("8/128") != -1 &&
    name.indexOf("cream") != -1
  ) {
    return 21867;
  } else if (
    name.indexOf("s22+ ") != -1 &&
    name.indexOf("8/128") != -1 &&
    name.indexOf("graphite") != -1
  ) {
    return 21868;
  } else if (
    name.indexOf("s22+ ") != -1 &&
    name.indexOf("8/128") != -1 &&
    name.indexOf("green") != -1
  ) {
    return 21869;
  } else if (
    name.indexOf("s22+ ") != -1 &&
    name.indexOf("8/128") != -1 &&
    name.indexOf("black") != -1
  ) {
    return 21866;
  } else if (
    name.indexOf("s22+ ") != -1 &&
    name.indexOf("8/128") != -1 &&
    name.indexOf("pink") != -1
  ) {
    return 21874;
  } else if (
    name.indexOf("s22+ ") != -1 &&
    name.indexOf("8/128") != -1 &&
    name.indexOf("blue") != -1
  ) {
    return 21871;
  } else if (
    name.indexOf("s22+ ") != -1 &&
    name.indexOf("8/128") != -1 &&
    name.indexOf("violet") != -1
  ) {
    return 21872;
  } else if (
    name.indexOf("s22+ ") != -1 &&
    name.indexOf("8/128") != -1 &&
    name.indexOf("white") != -1
  ) {
    return 21882;
  } else if (
    name.indexOf("s22+ ") != -1 &&
    name.indexOf("8/256") != -1 &&
    name.indexOf("cream") != -1
  ) {
    return 21875;
  } else if (
    name.indexOf("s22+ ") != -1 &&
    name.indexOf("8/256") != -1 &&
    name.indexOf("graphite") != -1
  ) {
    return 21876;
  } else if (
    name.indexOf("s22+ ") != -1 &&
    name.indexOf("8/256") != -1 &&
    name.indexOf("green") != -1
  ) {
    return 21877;
  } else if (
    name.indexOf("s22+ ") != -1 &&
    name.indexOf("8/256") != -1 &&
    name.indexOf("black") != -1
  ) {
    return 21878;
  } else if (
    name.indexOf("s22+ ") != -1 &&
    name.indexOf("8/256") != -1 &&
    name.indexOf("pink") != -1
  ) {
    return 21879;
  } else if (
    name.indexOf("s22+ ") != -1 &&
    name.indexOf("8/256") != -1 &&
    name.indexOf("blue") != -1
  ) {
    return 21880;
  } else if (
    name.indexOf("s22+ ") != -1 &&
    name.indexOf("8/256") != -1 &&
    name.indexOf("violet") != -1
  ) {
    return 21881;
  } else if (
    name.indexOf("s22+ ") != -1 &&
    name.indexOf("8/256") != -1 &&
    name.indexOf("white") != -1
  ) {
    return 21873;
  } else if (
    name.indexOf("s22 ") != -1 &&
    name.indexOf("8/128") != -1 &&
    name.indexOf("cream") != -1
  ) {
    return 21857;
  } else if (
    name.indexOf("s22 ") != -1 &&
    name.indexOf("8/128") != -1 &&
    name.indexOf("graphite") != -1
  ) {
    return 21854;
  } else if (
    name.indexOf("s22 ") != -1 &&
    name.indexOf("8/128") != -1 &&
    name.indexOf("green") != -1
  ) {
    return 21853;
  } else if (
    name.indexOf("s22 ") != -1 &&
    name.indexOf("8/128") != -1 &&
    name.indexOf("black") != -1
  ) {
    return 21850;
  } else if (
    name.indexOf("s22 ") != -1 &&
    name.indexOf("8/128") != -1 &&
    name.indexOf("pink") != -1
  ) {
    return 21852;
  } else if (
    name.indexOf("s22 ") != -1 &&
    name.indexOf("8/128") != -1 &&
    name.indexOf("blue") != -1
  ) {
    return 21855;
  } else if (
    name.indexOf("s22 ") != -1 &&
    name.indexOf("8/128") != -1 &&
    name.indexOf("violet") != -1
  ) {
    return 21856;
  } else if (
    name.indexOf("s22 ") != -1 &&
    name.indexOf("8/128") != -1 &&
    name.indexOf("white") != -1
  ) {
    return 21851;
  } else if (
    name.indexOf("s22 ") != -1 &&
    name.indexOf("8/256") != -1 &&
    name.indexOf("cream") != -1
  ) {
    return 21858;
  } else if (
    name.indexOf("s22 ") != -1 &&
    name.indexOf("8/256") != -1 &&
    name.indexOf("graphite") != -1
  ) {
    return 21859;
  } else if (
    name.indexOf("s22 ") != -1 &&
    name.indexOf("8/256") != -1 &&
    name.indexOf("green") != -1
  ) {
    return 21860;
  } else if (
    name.indexOf("s22 ") != -1 &&
    name.indexOf("8/256") != -1 &&
    name.indexOf("black") != -1
  ) {
    return 21861;
  } else if (
    name.indexOf("s22 ") != -1 &&
    name.indexOf("8/256") != -1 &&
    name.indexOf("pink") != -1
  ) {
    return 21862;
  } else if (
    name.indexOf("s22 ") != -1 &&
    name.indexOf("8/256") != -1 &&
    name.indexOf("blue") != -1
  ) {
    return 21863;
  } else if (
    name.indexOf("s22 ") != -1 &&
    name.indexOf("8/256") != -1 &&
    name.indexOf("violet") != -1
  ) {
    return 21864;
  } else if (
    name.indexOf("s22 ") != -1 &&
    name.indexOf("8/256") != -1 &&
    name.indexOf("white") != -1
  ) {
    return 21865;
  } else if (
    name.indexOf("s23 fe ") != -1 &&
    name.indexOf("8/128") != -1 &&
    name.indexOf("cream") != -1
  ) {
    return 30158;
  } else if (
    name.indexOf("s23 fe ") != -1 &&
    name.indexOf("8/128") != -1 &&
    name.indexOf("graphite") != -1
  ) {
    return 30162;
  } else if (
    name.indexOf("s23 fe ") != -1 &&
    name.indexOf("8/128") != -1 &&
    (name.indexOf("indigo") != -1 || name.indexOf("blue") != -1)
  ) {
    return 30166;
  } else if (
    name.indexOf("s23 fe ") != -1 &&
    name.indexOf("8/128") != -1 &&
    (name.indexOf("mint") != -1 || name.indexOf("green") != -1)
  ) {
    return 30160;
  } else if (
    name.indexOf("s23 fe ") != -1 &&
    name.indexOf("8/128") != -1 &&
    (name.indexOf("lavender") != -1 || name.indexOf("purple") != -1)
  ) {
    return 30164;
  } else if (
    name.indexOf("s23 fe ") != -1 &&
    name.indexOf("8/128") != -1 &&
    (name.indexOf("orange") != -1 || name.indexOf("tangerine") != -1)
  ) {
    return 30168;
  } else if (
    name.indexOf("s23 fe ") != -1 &&
    name.indexOf("8/256") != -1 &&
    name.indexOf("cream") != -1
  ) {
    return 30159;
  } else if (
    name.indexOf("s23 fe ") != -1 &&
    name.indexOf("8/256") != -1 &&
    name.indexOf("graphite") != -1
  ) {
    return 30163;
  } else if (
    name.indexOf("s23 fe ") != -1 &&
    name.indexOf("8/256") != -1 &&
    (name.indexOf("indigo") != -1 || name.indexOf("blue") != -1)
  ) {
    return 30167;
  } else if (
    name.indexOf("s23 fe ") != -1 &&
    name.indexOf("8/256") != -1 &&
    (name.indexOf("mint") != -1 || name.indexOf("green") != -1)
  ) {
    return 30161;
  } else if (
    name.indexOf("s23 fe ") != -1 &&
    name.indexOf("8/256") != -1 &&
    (name.indexOf("lavender") != -1 || name.indexOf("purple") != -1)
  ) {
    return 30165;
  } else if (
    name.indexOf("s23 fe ") != -1 &&
    name.indexOf("8/256") != -1 &&
    (name.indexOf("orange") != -1 || name.indexOf("tangerine") != -1)
  ) {
    return 30169;
  } else if (
    name.indexOf("s23 ultra ") != -1 &&
    name.indexOf("12/1tb") != -1 &&
    name.indexOf("cream") != -1 &&
    name.indexOf("🇰🇿") != -1
  ) {
    return 30697;
  } else if (
    name.indexOf("s23 ultra ") != -1 &&
    name.indexOf("12/1tb") != -1 &&
    name.indexOf("graphite") != -1 &&
    name.indexOf("🇰🇿") != -1
  ) {
    return 30698;
  } else if (
    name.indexOf("s23 ultra ") != -1 &&
    name.indexOf("12/1tb") != -1 &&
    name.indexOf("green") != -1 &&
    name.indexOf("🇰🇿") != -1
  ) {
    return 30699;
  } else if (
    name.indexOf("s23 ultra ") != -1 &&
    name.indexOf("12/1tb") != -1 &&
    name.indexOf("lavender") != -1 &&
    name.indexOf("🇰🇿") != -1
  ) {
    return 30700;
  } else if (
    name.indexOf("s23 ultra ") != -1 &&
    name.indexOf("12/1tb") != -1 &&
    name.indexOf("lime") != -1 &&
    name.indexOf("🇰🇿") != -1
  ) {
    return 30701;
  } else if (
    name.indexOf("s23 ultra ") != -1 &&
    name.indexOf("12/1tb") != -1 &&
    name.indexOf("red") != -1 &&
    name.indexOf("🇰🇿") != -1
  ) {
    return 30702;
  } else if (
    name.indexOf("s23 ultra ") != -1 &&
    name.indexOf("12/1tb") != -1 &&
    name.indexOf("blue") != -1 &&
    name.indexOf("🇰🇿") != -1
  ) {
    return 30703;
  } else if (
    name.indexOf("s23 ultra ") != -1 &&
    name.indexOf("12/256") != -1 &&
    name.indexOf("cream") != -1 &&
    name.indexOf("🇰🇿") != -1
  ) {
    return 30704;
  } else if (
    name.indexOf("s23 ultra ") != -1 &&
    name.indexOf("12/256") != -1 &&
    name.indexOf("green") != -1 &&
    name.indexOf("🇰🇿") != -1
  ) {
    return 30705;
  } else if (
    name.indexOf("s23 ultra ") != -1 &&
    name.indexOf("12/256") != -1 &&
    name.indexOf("lavender") != -1 &&
    name.indexOf("🇰🇿") != -1
  ) {
    return 30706;
  } else if (
    name.indexOf("s23 ultra ") != -1 &&
    name.indexOf("12/256") != -1 &&
    name.indexOf("black") != -1 &&
    name.indexOf("🇰🇿") != -1
  ) {
    return 30707;
  } else if (
    name.indexOf("s23 ultra ") != -1 &&
    name.indexOf("12/256") != -1 &&
    name.indexOf("red") != -1 &&
    name.indexOf("🇰🇿") != -1
  ) {
    return 30708;
  } else if (
    name.indexOf("s23 ultra ") != -1 &&
    name.indexOf("12/512") != -1 &&
    name.indexOf("cream") != -1 &&
    name.indexOf("🇰🇿") != -1
  ) {
    return 30709;
  } else if (
    name.indexOf("s23 ultra ") != -1 &&
    name.indexOf("12/512") != -1 &&
    name.indexOf("green") != -1 &&
    name.indexOf("🇰🇿") != -1
  ) {
    return 30710;
  } else if (
    name.indexOf("s23 ultra ") != -1 &&
    name.indexOf("12/512") != -1 &&
    name.indexOf("lavender") != -1 &&
    name.indexOf("🇰🇿") != -1
  ) {
    return 30711;
  } else if (
    name.indexOf("s23 ultra ") != -1 &&
    name.indexOf("12/512") != -1 &&
    name.indexOf("black") != -1 &&
    name.indexOf("🇰🇿") != -1
  ) {
    return 30712;
  } else if (
    name.indexOf("s23 ultra ") != -1 &&
    name.indexOf("8/256") != -1 &&
    name.indexOf("cream") != -1 &&
    name.indexOf("🇰🇿") != -1
  ) {
    return 30713;
  } else if (
    name.indexOf("s23 ultra ") != -1 &&
    name.indexOf("8/256") != -1 &&
    name.indexOf("green") != -1 &&
    name.indexOf("🇰🇿") != -1
  ) {
    return 30714;
  } else if (
    name.indexOf("s23 ultra ") != -1 &&
    name.indexOf("8/256") != -1 &&
    name.indexOf("lavender") != -1 &&
    name.indexOf("🇰🇿") != -1
  ) {
    return 30715;
  } else if (
    name.indexOf("s23 ultra ") != -1 &&
    name.indexOf("8/256") != -1 &&
    name.indexOf("black") != -1 &&
    name.indexOf("🇰🇿") != -1
  ) {
    return 30716;
  } else if (
    name.indexOf("s23 ultra ") != -1 &&
    name.indexOf("1tb") != -1 &&
    name.indexOf("cream") != -1
  ) {
    return 30717;
  } else if (
    name.indexOf("s23 ultra ") != -1 &&
    name.indexOf("1tb") != -1 &&
    name.indexOf("graphite") != -1
  ) {
    return 30718;
  } else if (
    name.indexOf("s23 ultra ") != -1 &&
    name.indexOf("1tb") != -1 &&
    name.indexOf("black") != -1
  ) {
    return 26246;
  } else if (
    name.indexOf("s23 ultra ") != -1 &&
    name.indexOf("1tb") != -1 &&
    name.indexOf("green") != -1
  ) {
    return 30719;
  } else if (
    name.indexOf("s23 ultra ") != -1 &&
    name.indexOf("1tb") != -1 &&
    name.indexOf("lavender") != -1
  ) {
    return 30720;
  } else if (
    name.indexOf("s23 ultra ") != -1 &&
    name.indexOf("1tb") != -1 &&
    name.indexOf("lime") != -1
  ) {
    return 30721;
  } else if (
    name.indexOf("s23 ultra ") != -1 &&
    name.indexOf("1tb") != -1 &&
    name.indexOf("red") != -1
  ) {
    return 30722;
  } else if (
    name.indexOf("s23 ultra ") != -1 &&
    name.indexOf("1tb") != -1 &&
    name.indexOf("blue") != -1
  ) {
  } else if (
    name.indexOf("s23 ultra ") != -1 &&
    name.indexOf("12/256") != -1 &&
    name.indexOf("cream") != -1
  ) {
    return 30724;
  } else if (
    name.indexOf("s23 ultra ") != -1 &&
    name.indexOf("12/256") != -1 &&
    name.indexOf("green") != -1
  ) {
    return 30725;
  } else if (
    name.indexOf("s23 ultra ") != -1 &&
    name.indexOf("12/256") != -1 &&
    name.indexOf("lavender") != -1
  ) {
    return 30726;
  } else if (
    name.indexOf("s23 ultra ") != -1 &&
    name.indexOf("12/256") != -1 &&
    name.indexOf("black") != -1
  ) {
    return 30727;
  } else if (
    name.indexOf("s23 ultra ") != -1 &&
    name.indexOf("12/256") != -1 &&
    name.indexOf("red") != -1
  ) {
    return 30728;
  } else if (
    name.indexOf("s23 ultra ") != -1 &&
    name.indexOf("12/512") != -1 &&
    name.indexOf("cream") != -1
  ) {
    return 30729;
  } else if (
    name.indexOf("s23 ultra ") != -1 &&
    name.indexOf("12/512") != -1 &&
    name.indexOf("green") != -1
  ) {
    return 30730;
  } else if (
    name.indexOf("s23 ultra ") != -1 &&
    name.indexOf("12/512") != -1 &&
    name.indexOf("lavender") != -1
  ) {
    return 30731;
  } else if (
    name.indexOf("s23 ultra ") != -1 &&
    name.indexOf("12/512") != -1 &&
    name.indexOf("black") != -1
  ) {
    return 30732;
  } else if (
    name.indexOf("s23 ultra ") != -1 &&
    name.indexOf("8/256") != -1 &&
    name.indexOf("cream") != -1
  ) {
    return 30733;
  } else if (
    name.indexOf("s23 ultra ") != -1 &&
    name.indexOf("8/256") != -1 &&
    name.indexOf("green") != -1
  ) {
    return 30734;
  } else if (
    name.indexOf("s23 ultra ") != -1 &&
    name.indexOf("8/256") != -1 &&
    name.indexOf("lavender") != -1
  ) {
    return 30735;
  } else if (
    name.indexOf("s23 ultra ") != -1 &&
    name.indexOf("8/256") != -1 &&
    name.indexOf("black") != -1
  ) {
    return 30736;
  } else if (
    name.indexOf("s23+ ") != -1 &&
    name.indexOf("8/256") != -1 &&
    name.indexOf("cream") != -1
  ) {
    return 30757;
  } else if (
    name.indexOf("s23+ ") != -1 &&
    name.indexOf("8/256") != -1 &&
    name.indexOf("green") != -1
  ) {
    return 30758;
  } else if (
    name.indexOf("s23+ ") != -1 &&
    name.indexOf("8/256") != -1 &&
    name.indexOf("lavender") != -1
  ) {
    return 30759;
  } else if (
    name.indexOf("s23+ ") != -1 &&
    name.indexOf("8/256") != -1 &&
    name.indexOf("black") != -1
  ) {
    return 30760;
  } else if (
    name.indexOf("s23+ ") != -1 &&
    name.indexOf("8/512") != -1 &&
    name.indexOf("cream") != -1
  ) {
    return 30761;
  } else if (
    name.indexOf("s23+ ") != -1 &&
    name.indexOf("8/512") != -1 &&
    name.indexOf("graphite") != -1
  ) {
    return 30762;
  } else if (
    name.indexOf("s23+ ") != -1 &&
    name.indexOf("8/512") != -1 &&
    name.indexOf("green") != -1
  ) {
    return 30763;
  } else if (
    name.indexOf("s23+ ") != -1 &&
    name.indexOf("8/512") != -1 &&
    name.indexOf("lavender") != -1
  ) {
    return 30764;
  } else if (
    name.indexOf("s23+ ") != -1 &&
    name.indexOf("8/512") != -1 &&
    name.indexOf("black") != -1
  ) {
    return 30765;
  } else if (
    name.indexOf("s23+ ") != -1 &&
    name.indexOf("8/256") != -1 &&
    name.indexOf("cream") != -1 &&
    name.indexOf("🇰🇿") != -1
  ) {
    return 30766;
  } else if (
    name.indexOf("s23+ ") != -1 &&
    name.indexOf("8/256") != -1 &&
    name.indexOf("green") != -1 &&
    name.indexOf("🇰🇿") != -1
  ) {
    return 30767;
  } else if (
    name.indexOf("s23+ ") != -1 &&
    name.indexOf("8/256") != -1 &&
    name.indexOf("lavender") != -1 &&
    name.indexOf("🇰🇿") != -1
  ) {
    return 30768;
  } else if (
    name.indexOf("s23+ ") != -1 &&
    name.indexOf("8/256") != -1 &&
    name.indexOf("black") != -1 &&
    name.indexOf("🇰🇿") != -1
  ) {
    return 30769;
  } else if (
    name.indexOf("s23+ ") != -1 &&
    name.indexOf("8/512") != -1 &&
    name.indexOf("cream") != -1 &&
    name.indexOf("🇰🇿") != -1
  ) {
    return 30770;
  } else if (
    name.indexOf("s23+ ") != -1 &&
    name.indexOf("8/512") != -1 &&
    name.indexOf("graphite") != -1 &&
    name.indexOf("🇰🇿") != -1
  ) {
    return 30771;
  } else if (
    name.indexOf("s23+ ") != -1 &&
    name.indexOf("8/512") != -1 &&
    name.indexOf("green") != -1 &&
    name.indexOf("🇰🇿") != -1
  ) {
    return 30772;
  } else if (
    name.indexOf("s23+ ") != -1 &&
    name.indexOf("8/512") != -1 &&
    name.indexOf("lavender") != -1 &&
    name.indexOf("🇰🇿") != -1
  ) {
    return 30773;
  } else if (
    name.indexOf("s23+ ") != -1 &&
    name.indexOf("8/512") != -1 &&
    name.indexOf("black") != -1 &&
    name.indexOf("🇰🇿") != -1
  ) {
    return 30774;
  } else if (
    name.indexOf("s23 ") != -1 &&
    name.indexOf("8/128") != -1 &&
    name.indexOf("cream") != -1 &&
    name.indexOf("🇰🇿") != -1
  ) {
    return 30673;
  } else if (
    name.indexOf("s23 ") != -1 &&
    name.indexOf("8/128") != -1 &&
    name.indexOf("green") != -1 &&
    name.indexOf("🇰🇿") != -1
  ) {
    return 30674;
  } else if (
    name.indexOf("s23 ") != -1 &&
    name.indexOf("8/128") != -1 &&
    name.indexOf("lavender") != -1 &&
    name.indexOf("🇰🇿") != -1
  ) {
    return 30675;
  } else if (
    name.indexOf("s23 ") != -1 &&
    name.indexOf("8/128") != -1 &&
    name.indexOf("black") != -1 &&
    name.indexOf("🇰🇿") != -1
  ) {
    return 30676;
  } else if (
    name.indexOf("s23 ") != -1 &&
    name.indexOf("8/256") != -1 &&
    name.indexOf("cream") != -1 &&
    name.indexOf("🇰🇿") != -1
  ) {
    return 30677;
  } else if (
    name.indexOf("s23 ") != -1 &&
    name.indexOf("8/256") != -1 &&
    name.indexOf("green") != -1 &&
    name.indexOf("🇰🇿") != -1
  ) {
    return 30678;
  } else if (
    name.indexOf("s23 ") != -1 &&
    name.indexOf("8/256") != -1 &&
    name.indexOf("lavender") != -1 &&
    name.indexOf("🇰🇿") != -1
  ) {
    return 30679;
  } else if (
    name.indexOf("s23 ") != -1 &&
    name.indexOf("8/256") != -1 &&
    name.indexOf("black") != -1 &&
    name.indexOf("🇰🇿") != -1
  ) {
    return 30680;
  } else if (
    name.indexOf("s23 ") != -1 &&
    name.indexOf("8/128") != -1 &&
    name.indexOf("cream") != -1
  ) {
    return 30689;
  } else if (
    name.indexOf("s23 ") != -1 &&
    name.indexOf("8/128") != -1 &&
    name.indexOf("green") != -1
  ) {
    return 30690;
  } else if (
    name.indexOf("s23 ") != -1 &&
    name.indexOf("8/128") != -1 &&
    name.indexOf("lavender") != -1
  ) {
    return 30691;
  } else if (
    name.indexOf("s23 ") != -1 &&
    name.indexOf("8/128") != -1 &&
    name.indexOf("black") != -1
  ) {
    return 30692;
  } else if (
    name.indexOf("s23 ") != -1 &&
    name.indexOf("8/128") != -1 &&
    name.indexOf("graphite") != -1
  ) {
    return 30692;
  } else if (
    name.indexOf("s23 ") != -1 &&
    name.indexOf("8/256") != -1 &&
    name.indexOf("cream") != -1
  ) {
    return 30693;
  } else if (
    name.indexOf("s23 ") != -1 &&
    name.indexOf("8/256") != -1 &&
    name.indexOf("green") != -1
  ) {
    return 30694;
  } else if (
    name.indexOf("s23 ") != -1 &&
    name.indexOf("8/256") != -1 &&
    name.indexOf("lavender") != -1
  ) {
    return 30695;
  } else if (
    name.indexOf("s23 ") != -1 &&
    name.indexOf("8/256") != -1 &&
    name.indexOf("graphite")
  ) {
    return 30696;
  } else if (
    name.indexOf("s23 ") != -1 &&
    name.indexOf("8/512") != -1 &&
    name.indexOf("cream") != -1
  ) {
    return 26218;
  } else if (
    name.indexOf("s23 ") != -1 &&
    name.indexOf("8/512") != -1 &&
    name.indexOf("graphite") != -1
  ) {
    return 26227;
  } else if (
    name.indexOf("s23 ") != -1 &&
    name.indexOf("8/512") != -1 &&
    name.indexOf("green") != -1
  ) {
    return 26221;
  } else if (
    name.indexOf("s23 ") != -1 &&
    name.indexOf("8/512") != -1 &&
    name.indexOf("lavender") != -1
  ) {
    return 26224;
  } else if (
    name.indexOf("s23 ") != -1 &&
    name.indexOf("8/512") != -1 &&
    name.indexOf("lime") != -1
  ) {
    return 26230;
  } else if (
    name.indexOf("s23 ") != -1 &&
    name.indexOf("8/512") != -1 &&
    name.indexOf("black") != -1
  ) {
    return 26214;
  } else if (
    name.indexOf("s24 fe") != -1 &&
    name.indexOf("8/128") != -1 &&
    (name.indexOf("mint") != -1 || name.indexOf("green") != -1)
  ) {
    return 36813;
  } else if (
    name.indexOf("s24 fe") != -1 &&
    name.indexOf("8/256") != -1 &&
    (name.indexOf("mint") != -1 || name.indexOf("green") != -1)
  ) {
    return 36814;
  } else if (
    name.indexOf("s24 fe") != -1 &&
    name.indexOf("8/512") != -1 &&
    (name.indexOf("mint") != -1 || name.indexOf("green") != -1)
  ) {
    return 36815;
  } else if (
    name.indexOf("s24 fe") != -1 &&
    name.indexOf("8/128") != -1 &&
    name.indexOf("yellow") != -1
  ) {
    return 36816;
  } else if (
    name.indexOf("s24 fe") != -1 &&
    name.indexOf("8/256") != -1 &&
    name.indexOf("yellow") != -1
  ) {
    return 36817;
  } else if (
    name.indexOf("s24 fe") != -1 &&
    name.indexOf("8/512") != -1 &&
    name.indexOf("yellow") != -1
  ) {
    return 36818;
  } else if (
    name.indexOf("s24 fe") != -1 &&
    name.indexOf("8/128") != -1 &&
    name.indexOf("blue") != -1
  ) {
    return 36831;
  } else if (
    name.indexOf("s24 fe") != -1 &&
    name.indexOf("8/256") != -1 &&
    name.indexOf("blue") != -1
  ) {
    return 36832;
  } else if (
    name.indexOf("s24 fe") != -1 &&
    name.indexOf("8/512") != -1 &&
    name.indexOf("blue") != -1
  ) {
    return 36833;
  } else if (
    name.indexOf("s24 fe") != -1 &&
    name.indexOf("8/128") != -1 &&
    name.indexOf("gray") != -1
  ) {
    return 36810;
  } else if (
    name.indexOf("s24 fe") != -1 &&
    name.indexOf("8/256") != -1 &&
    name.indexOf("gray") != -1
  ) {
    return 36811;
  } else if (
    name.indexOf("s24 fe") != -1 &&
    name.indexOf("8/512") != -1 &&
    name.indexOf("gray") != -1
  ) {
    return 36812;
  } else if (
    name.indexOf("s24 fe") != -1 &&
    name.indexOf("8/128") != -1 &&
    (name.indexOf("graphite") != -1 || name.indexOf("black") != -1)
  ) {
    return 36807;
  } else if (
    name.indexOf("s24 fe") != -1 &&
    name.indexOf("8/256") != -1 &&
    (name.indexOf("graphite") != -1 || name.indexOf("black") != -1)
  ) {
    return 36808;
  } else if (
    name.indexOf("s24 fe") != -1 &&
    name.indexOf("8/512") != -1 &&
    (name.indexOf("graphite") != -1 || name.indexOf("black") != -1)
  ) {
    return 36809;
  } else if (
    name.indexOf("s24+") != -1 &&
    name.indexOf("12/256") != -1 &&
    name.indexOf("green") != -1
  ) {
    return 35768;
  } else if (
    name.indexOf("s24+") != -1 &&
    name.indexOf("12/256") != -1 &&
    name.indexOf("orange") != -1
  ) {
    return 35777;
  } else if (
    name.indexOf("s24+") != -1 &&
    name.indexOf("12/256") != -1 &&
    name.indexOf("blue") != -1
  ) {
    return 35828;
  } else if (
    name.indexOf("s24+") != -1 &&
    name.indexOf("12/512") != -1 &&
    name.indexOf("green") != -1
  ) {
    return 35769;
  } else if (
    name.indexOf("s24+") != -1 &&
    name.indexOf("12/512") != -1 &&
    name.indexOf("orange") != -1
  ) {
    return 35778;
  } else if (
    name.indexOf("s24+") != -1 &&
    name.indexOf("12/512") != -1 &&
    name.indexOf("blue") != -1
  ) {
    return 35829;
  } else if (
    name.indexOf("s24+") != -1 &&
    name.indexOf("12/256") != -1 &&
    name.indexOf("yellow") != -1 &&
    name.indexOf("🇰🇿") != -1
  ) {
    return 34353;
  } else if (
    name.indexOf("s24+") != -1 &&
    name.indexOf("12/256") != -1 &&
    name.indexOf("yellow") != -1
  ) {
    return 30987;
  } else if (
    name.indexOf("s24+") != -1 &&
    name.indexOf("12/256") != -1 &&
    (name.indexOf("violet") != -1 || name.indexOf("purple") != -1) &&
    name.indexOf("🇰🇿") != -1
  ) {
    return 34352;
  } else if (
    name.indexOf("s24+") != -1 &&
    name.indexOf("12/256") != -1 &&
    (name.indexOf("violet") != -1 || name.indexOf("purple") != -1)
  ) {
    return 30989;
  } else if (
    name.indexOf("s24+") != -1 &&
    name.indexOf("12/256") != -1 &&
    name.indexOf("gray") != -1 &&
    name.indexOf("🇰🇿") != -1
  ) {
    return 34354;
  } else if (
    name.indexOf("s24+") != -1 &&
    name.indexOf("12/256") != -1 &&
    name.indexOf("gray") != -1
  ) {
    return 30991;
  } else if (
    name.indexOf("s24+") != -1 &&
    name.indexOf("12/256") != -1 &&
    name.indexOf("black") != -1 &&
    name.indexOf("🇰🇿") != -1
  ) {
    return 34349;
  } else if (
    name.indexOf("s24+") != -1 &&
    name.indexOf("12/256") != -1 &&
    name.indexOf("black") != -1
  ) {
    return 30985;
  } else if (
    name.indexOf("s24+") != -1 &&
    name.indexOf("12/512") != -1 &&
    name.indexOf("yellow") != -1 &&
    name.indexOf("🇰🇿") != -1
  ) {
    return 34351;
  } else if (
    name.indexOf("s24+") != -1 &&
    name.indexOf("12/512") != -1 &&
    name.indexOf("yellow") != -1
  ) {
    return 30988;
  } else if (
    name.indexOf("s24+") != -1 &&
    name.indexOf("12/512") != -1 &&
    (name.indexOf("violet") != -1 || name.indexOf("purple") != -1) &&
    name.indexOf("🇰🇿") != -1
  ) {
    return 34348;
  } else if (
    name.indexOf("s24+") != -1 &&
    name.indexOf("12/512") != -1 &&
    (name.indexOf("violet") != -1 || name.indexOf("purple") != -1)
  ) {
    return 30990;
  } else if (
    name.indexOf("s24+") != -1 &&
    name.indexOf("12/512") != -1 &&
    name.indexOf("gray") != -1 &&
    name.indexOf("🇰🇿") != -1
  ) {
    return 34347;
  } else if (
    name.indexOf("s24+") != -1 &&
    name.indexOf("12/512") != -1 &&
    name.indexOf("gray") != -1
  ) {
    return 30992;
  } else if (
    name.indexOf("s24+") != -1 &&
    name.indexOf("12/512") != -1 &&
    name.indexOf("black") != -1 &&
    name.indexOf("🇰🇿") != -1
  ) {
    return 34350;
  } else if (
    name.indexOf("s24+") != -1 &&
    name.indexOf("12/512") != -1 &&
    name.indexOf("black") != -1
  ) {
    return 30986;
  } else if (
    name.indexOf("s24 ultra") != -1 &&
    name.indexOf("1tb") != -1 &&
    name.indexOf("blue") != -1
  ) {
    return 35874;
  } else if (
    name.indexOf("s24 ultra") != -1 &&
    name.indexOf("1tb") != -1 &&
    name.indexOf("green") != -1
  ) {
    return 35875;
  } else if (
    name.indexOf("s24 ultra") != -1 &&
    name.indexOf("1tb") != -1 &&
    name.indexOf("orange") != -1
  ) {
    return 35876;
  } else if (
    name.indexOf("s24 ultra") != -1 &&
    name.indexOf("256") != -1 &&
    name.indexOf("blue") != -1
  ) {
    return 35877;
  } else if (
    name.indexOf("s24 ultra") != -1 &&
    name.indexOf("256") != -1 &&
    name.indexOf("green") != -1
  ) {
    return 35878;
  } else if (
    name.indexOf("s24 ultra") != -1 &&
    name.indexOf("256") != -1 &&
    name.indexOf("orange") != -1
  ) {
    return 35879;
  } else if (
    name.indexOf("s24 ultra") != -1 &&
    name.indexOf("512") != -1 &&
    name.indexOf("blue") != -1
  ) {
    return 35882;
  } else if (
    name.indexOf("s24 ultra") != -1 &&
    name.indexOf("512") != -1 &&
    name.indexOf("green") != -1
  ) {
    return 35880;
  } else if (
    name.indexOf("s24 ultra") != -1 &&
    name.indexOf("512") != -1 &&
    name.indexOf("orange") != -1
  ) {
    return 35881;
  } else if (
    name.indexOf("s24 ultra") != -1 &&
    name.indexOf("1tb") != -1 &&
    name.indexOf("black") != -1 &&
    name.indexOf("🇰🇿") != -1
  ) {
    return 34362;
  } else if (
    name.indexOf("s24 ultra") != -1 &&
    name.indexOf("1tb") != -1 &&
    name.indexOf("black") != -1
  ) {
    return 34394;
  } else if (
    name.indexOf("s24 ultra") != -1 &&
    name.indexOf("1tb") != -1 &&
    name.indexOf("gray") != -1 &&
    name.indexOf("🇰🇿") != -1
  ) {
    return 34363;
  } else if (
    name.indexOf("s24 ultra") != -1 &&
    name.indexOf("1tb") != -1 &&
    name.indexOf("gray") != -1
  ) {
    return 34395;
  } else if (
    name.indexOf("s24 ultra") != -1 &&
    name.indexOf("1tb") != -1 &&
    name.indexOf("violet") != -1 &&
    name.indexOf("🇰🇿") != -1
  ) {
    return 34361;
  } else if (
    name.indexOf("s24 ultra") != -1 &&
    name.indexOf("1tb") != -1 &&
    name.indexOf("violet") != -1
  ) {
    return 34393;
  } else if (
    name.indexOf("s24 ultra") != -1 &&
    name.indexOf("1tb") != -1 &&
    name.indexOf("yellow") != -1 &&
    name.indexOf("🇰🇿") != -1
  ) {
    return 34359;
  } else if (
    name.indexOf("s24 ultra") != -1 &&
    name.indexOf("1tb") != -1 &&
    name.indexOf("yellow") != -1
  ) {
    return 34391;
  } else if (
    name.indexOf("s24 ultra") != -1 &&
    name.indexOf("256") != -1 &&
    name.indexOf("black") != -1 &&
    name.indexOf("🇰🇿") != -1
  ) {
    return 34366;
  } else if (
    name.indexOf("s24 ultra") != -1 &&
    name.indexOf("256") != -1 &&
    name.indexOf("black") != -1
  ) {
    return 34398;
  } else if (
    name.indexOf("s24 ultra") != -1 &&
    name.indexOf("256") != -1 &&
    name.indexOf("gray") != -1 &&
    name.indexOf("🇰🇿") != -1
  ) {
    return 34364;
  } else if (
    name.indexOf("s24 ultra") != -1 &&
    name.indexOf("256") != -1 &&
    name.indexOf("gray") != -1
  ) {
    return 34396;
  } else if (
    name.indexOf("s24 ultra") != -1 &&
    name.indexOf("256") != -1 &&
    name.indexOf("violet") != -1 &&
    name.indexOf("🇰🇿") != -1
  ) {
    return 34355;
  } else if (
    name.indexOf("s24 ultra") != -1 &&
    name.indexOf("256") != -1 &&
    (name.indexOf("violet") != -1 || name.indexOf("purple") != -1)
  ) {
    return 34387;
  } else if (
    name.indexOf("s24 ultra") != -1 &&
    name.indexOf("256") != -1 &&
    name.indexOf("yellow") != -1 &&
    name.indexOf("🇰🇿") != -1
  ) {
    return 34357;
  } else if (
    name.indexOf("s24 ultra") != -1 &&
    name.indexOf("256") != -1 &&
    name.indexOf("yellow") != -1
  ) {
    return 34389;
  } else if (
    name.indexOf("s24 ultra") != -1 &&
    name.indexOf("512") != -1 &&
    name.indexOf("black") != -1 &&
    name.indexOf("🇰🇿") != -1
  ) {
    return 34358;
  } else if (
    name.indexOf("s24 ultra") != -1 &&
    name.indexOf("512") != -1 &&
    name.indexOf("black") != -1
  ) {
    return 34390;
  } else if (
    name.indexOf("s24 ultra") != -1 &&
    name.indexOf("512") != -1 &&
    name.indexOf("gray") != -1 &&
    name.indexOf("🇰🇿") != -1
  ) {
    return 34360;
  } else if (
    name.indexOf("s24 ultra") != -1 &&
    name.indexOf("512") != -1 &&
    name.indexOf("gray") != -1
  ) {
    return 34392;
  } else if (
    name.indexOf("s24 ultra") != -1 &&
    name.indexOf("512") != -1 &&
    (name.indexOf("violet") != -1 || name.indexOf("purple") != -1) &&
    name.indexOf("🇰🇿") != -1
  ) {
    return 34365;
  } else if (
    name.indexOf("s24 ultra") != -1 &&
    name.indexOf("512") != -1 &&
    (name.indexOf("violet") != -1 || name.indexOf("purple") != -1)
  ) {
    return 34397;
  } else if (
    name.indexOf("s24 ultra") != -1 &&
    name.indexOf("512") != -1 &&
    name.indexOf("yellow") != -1 &&
    name.indexOf("🇰🇿") != -1
  ) {
    return 34356;
  } else if (
    name.indexOf("s24 ultra") != -1 &&
    name.indexOf("512") != -1 &&
    name.indexOf("yellow") != -1
  ) {
    return 34388;
  } else if (
    name.indexOf("s24+") != -1 &&
    name.indexOf("12/256") != -1 &&
    name.indexOf("yellow") != -1 &&
    name.indexOf("🇰🇿") != -1
  ) {
    return 34353;
  } else if (
    name.indexOf("s24+") != -1 &&
    name.indexOf("12/256") != -1 &&
    (name.indexOf("violet") != -1 || name.indexOf("purple") != -1) &&
    name.indexOf("🇰🇿") != -1
  ) {
    return 34352;
  } else if (
    name.indexOf("s24+") != -1 &&
    name.indexOf("12/256") != -1 &&
    name.indexOf("gray") != -1 &&
    name.indexOf("🇰🇿") != -1
  ) {
    return 34354;
  } else if (
    name.indexOf("s24+") != -1 &&
    name.indexOf("12/256") != -1 &&
    name.indexOf("black") != -1 &&
    name.indexOf("🇰🇿") != -1
  ) {
    return 34349;
  } else if (
    name.indexOf("s24+") != -1 &&
    name.indexOf("12/512") != -1 &&
    name.indexOf("yellow") != -1 &&
    name.indexOf("🇰🇿") != -1
  ) {
    return 34351;
  } else if (
    name.indexOf("s24+") != -1 &&
    name.indexOf("12/512") != -1 &&
    (name.indexOf("violet") != -1 || name.indexOf("purple") != -1) &&
    name.indexOf("🇰🇿") != -1
  ) {
    return 34348;
  } else if (
    name.indexOf("s24+") != -1 &&
    name.indexOf("12/512") != -1 &&
    name.indexOf("gray") != -1 &&
    name.indexOf("🇰🇿") != -1
  ) {
    return 34347;
  } else if (
    name.indexOf("s24+") != -1 &&
    name.indexOf("12/512") != -1 &&
    name.indexOf("black") != -1 &&
    name.indexOf("🇰🇿") != -1
  ) {
    return 34350;
  } else if (
    name.indexOf("s24 ") != -1 &&
    name.indexOf("8/128") != -1 &&
    name.indexOf("yellow") != -1 &&
    name.indexOf("🇰🇿") != -1
  ) {
    return 34341;
  } else if (
    name.indexOf("s24 ") != -1 &&
    name.indexOf("8/128") != -1 &&
    (name.indexOf("violet") != -1 || name.indexOf("purple") != -1) &&
    name.indexOf("🇰🇿") != -1
  ) {
    return 34339;
  } else if (
    name.indexOf("s24 ") != -1 &&
    name.indexOf("8/128") != -1 &&
    name.indexOf("gray") != -1 &&
    name.indexOf("🇰🇿") != -1
  ) {
    return 34336;
  } else if (
    name.indexOf("s24 ") != -1 &&
    name.indexOf("8/128") != -1 &&
    name.indexOf("black") != -1 &&
    name.indexOf("🇰🇿") != -1
  ) {
    return 34345;
  } else if (
    name.indexOf("s24 ") != -1 &&
    name.indexOf("8/256") != -1 &&
    name.indexOf("yellow") != -1 &&
    name.indexOf("🇰🇿") != -1
  ) {
    return 34344;
  } else if (
    name.indexOf("s24 ") != -1 &&
    name.indexOf("8/256") != -1 &&
    name.indexOf("violet") != -1 &&
    name.indexOf("🇰🇿") != -1
  ) {
    return 34338;
  } else if (
    name.indexOf("s24 ") != -1 &&
    name.indexOf("8/256") != -1 &&
    name.indexOf("gray") != -1 &&
    name.indexOf("🇰🇿") != -1
  ) {
    return 34346;
  } else if (
    name.indexOf("s24 ") != -1 &&
    name.indexOf("8/256") != -1 &&
    name.indexOf("black") != -1 &&
    name.indexOf("🇰🇿") != -1
  ) {
    return 34343;
  } else if (
    name.indexOf("s24 ") != -1 &&
    name.indexOf("8/512") != -1 &&
    name.indexOf("yellow") != -1 &&
    name.indexOf("🇰🇿") != -1
  ) {
    return 34340;
  } else if (
    name.indexOf("s24 ") != -1 &&
    name.indexOf("8/512") != -1 &&
    name.indexOf("violet") != -1 &&
    name.indexOf("🇰🇿") != -1
  ) {
    return 34337;
  } else if (
    name.indexOf("s24 ") != -1 &&
    name.indexOf("8/512") != -1 &&
    name.indexOf("gray") != -1 &&
    name.indexOf("🇰🇿") != -1
  ) {
    return 34335;
  } else if (
    name.indexOf("s24 ") != -1 &&
    name.indexOf("8/512") != -1 &&
    name.indexOf("black") != -1 &&
    name.indexOf("🇰🇿") != -1
  ) {
    return 34342;
  } else if (
    name.indexOf("s24 ") != -1 &&
    name.indexOf("12/256") != -1 &&
    name.indexOf("yellow") != -1
  ) {
    return 36038;
  } else if (
    name.indexOf("s24 ") != -1 &&
    name.indexOf("12/256") != -1 &&
    name.indexOf("violet") != -1
  ) {
    return 36039;
  } else if (
    name.indexOf("s24 ") != -1 &&
    name.indexOf("12/256") != -1 &&
    name.indexOf("green") != -1
  ) {
    return 36040;
  } else if (
    name.indexOf("s24 ") != -1 &&
    name.indexOf("12/256") != -1 &&
    name.indexOf("gray") != -1
  ) {
    return 36042;
  } else if (
    name.indexOf("s24 ") != -1 &&
    name.indexOf("12/256") != -1 &&
    name.indexOf("black") != -1
  ) {
    return 36043;
  } else if (
    name.indexOf("s24 ") != -1 &&
    name.indexOf("12/256") != -1 &&
    name.indexOf("orange") != -1
  ) {
    return 36044;
  } else if (
    name.indexOf("s24 ") != -1 &&
    name.indexOf("12/256") != -1 &&
    name.indexOf("blue") != -1
  ) {
    return 36046;
  } else if (
    name.indexOf("s24 ") != -1 &&
    name.indexOf("8/128") != -1 &&
    name.indexOf("yellow") != -1
  ) {
    return 30976;
  } else if (
    name.indexOf("s24 ") != -1 &&
    name.indexOf("8/128") != -1 &&
    name.indexOf("violet") != -1
  ) {
    return 30979;
  } else if (
    name.indexOf("s24 ") != -1 &&
    name.indexOf("8/128") != -1 &&
    name.indexOf("green") != -1
  ) {
    return 35749;
  } else if (
    name.indexOf("s24 ") != -1 &&
    name.indexOf("8/128") != -1 &&
    name.indexOf("gray") != -1
  ) {
    return 30982;
  } else if (
    name.indexOf("s24 ") != -1 &&
    name.indexOf("8/128") != -1 &&
    name.indexOf("black") != -1
  ) {
    return 30973;
  } else if (
    name.indexOf("s24 ") != -1 &&
    name.indexOf("8/128") != -1 &&
    name.indexOf("orange") != -1
  ) {
    return 35774;
  } else if (
    name.indexOf("s24 ") != -1 &&
    name.indexOf("8/128") != -1 &&
    name.indexOf("blue") != -1
  ) {
    return 35825;
  } else if (
    name.indexOf("s24 ") != -1 &&
    name.indexOf("8/256") != -1 &&
    name.indexOf("yellow") != -1
  ) {
    return 30977;
  } else if (
    name.indexOf("s24 ") != -1 &&
    name.indexOf("8/256") != -1 &&
    name.indexOf("violet") != -1
  ) {
    return 30980;
  } else if (
    name.indexOf("s24 ") != -1 &&
    name.indexOf("8/256") != -1 &&
    name.indexOf("green") != -1
  ) {
    return 35752;
  } else if (
    name.indexOf("s24 ") != -1 &&
    name.indexOf("8/256") != -1 &&
    name.indexOf("gray") != -1
  ) {
    return 30983;
  } else if (
    name.indexOf("s24 ") != -1 &&
    name.indexOf("8/256") != -1 &&
    name.indexOf("black") != -1
  ) {
    return 30974;
  } else if (
    name.indexOf("s24 ") != -1 &&
    name.indexOf("8/256") != -1 &&
    name.indexOf("orange") != -1
  ) {
    return 35775;
  } else if (
    name.indexOf("s24 ") != -1 &&
    name.indexOf("8/256") != -1 &&
    name.indexOf("blue") != -1
  ) {
    return 35826;
  } else if (
    name.indexOf("s24 ") != -1 &&
    name.indexOf("8/512") != -1 &&
    name.indexOf("yellow") != -1
  ) {
    return 30978;
  } else if (
    name.indexOf("s24 ") != -1 &&
    name.indexOf("8/512") != -1 &&
    name.indexOf("violet") != -1
  ) {
    return 30981;
  } else if (
    name.indexOf("s24 ") != -1 &&
    name.indexOf("8/512") != -1 &&
    name.indexOf("green") != -1
  ) {
    return 35767;
  } else if (
    name.indexOf("s24 ") != -1 &&
    name.indexOf("8/512") != -1 &&
    name.indexOf("gray") != -1
  ) {
    return 30984;
  } else if (
    name.indexOf("s24 ") != -1 &&
    name.indexOf("8/512") != -1 &&
    name.indexOf("black") != -1
  ) {
    return 30975;
  } else if (
    name.indexOf("s24 ") != -1 &&
    name.indexOf("8/512") != -1 &&
    name.indexOf("orange") != -1
  ) {
    return 35776;
  } else if (
    name.indexOf("s24 ") != -1 &&
    name.indexOf("8/512") != -1 &&
    name.indexOf("blue") != -1
  ) {
    return 35827;

  } else if (name.indexOf("s25") != -1 &&
  name.indexOf("ultra") == -1 &&
  name.indexOf("s25+") == -1 &&
  name.indexOf("12/256") != -1 &&
  name.indexOf("pink") != -1) {
    return 37483;
  } else if (
name.indexOf("s25+") != -1 &&
  name.indexOf("ultra") == -1 &&
  name.indexOf("12/256") != -1 &&
  name.indexOf("pink") != -1) {
    return 37485;
  } else if (
name.indexOf("s25") != -1 &&
  name.indexOf("ultra") == -1 &&
  name.indexOf("s25+") == -1 &&
  name.indexOf("12/256") != -1 &&
  name.indexOf("black") != -1) {
    return 37487;
  } else if (
name.indexOf("s25") != -1 &&
  name.indexOf("ultra") == -1 &&
  name.indexOf("s25+") == -1 &&
  name.indexOf("12/256") != -1 &&
  name.indexOf("red") != -1) {
    return 37490;
  } else if (
name.indexOf("s25") != -1 &&
  name.indexOf("ultra") == -1 &&
  name.indexOf("s25+") == -1 &&
  name.indexOf("12/256") != -1 &&
  name.indexOf("navy") != -1) {
    return 37492;
  } else if (
name.indexOf("s25") != -1 &&
  name.indexOf("ultra") == -1 &&
  name.indexOf("s25+") == -1 &&
  name.indexOf("12/256") != -1 &&
  name.indexOf("icyblue") != -1) {
    return 37495;
  } else if (
name.indexOf("s25") != -1 &&
  name.indexOf("ultra") == -1 &&
  name.indexOf("s25+") == -1 &&
  name.indexOf("12/256") != -1 &&
  name.indexOf("silver") != -1) {
    return 37497;
  } else if (
name.indexOf("s25") != -1 &&
  name.indexOf("ultra") == -1 &&
  name.indexOf("s25+") == -1 &&
  name.indexOf("12/256") != -1 &&
  name.indexOf("mint") != -1) {
    return 37499;
  } else if (
name.indexOf("s25") != -1 &&
  name.indexOf("ultra") == -1 &&
  name.indexOf("s25+") == -1 &&
  name.indexOf("12/512") != -1 &&
  name.indexOf("black") != -1) {
    return 37508;
  } else if (
name.indexOf("s25") != -1 &&
  name.indexOf("ultra") == -1 &&
  name.indexOf("s25+") == -1 &&
  name.indexOf("12/512") != -1 &&
  name.indexOf("red") != -1) {
    return 37509;
  } else if (
name.indexOf("s25") != -1 &&
  name.indexOf("ultra") == -1 &&
  name.indexOf("s25+") == -1 &&
  name.indexOf("12/512") != -1 &&
  name.indexOf("icyblue") != -1) {
    return 37510;
  } else if (
name.indexOf("s25") != -1 &&
  name.indexOf("ultra") == -1 &&
  name.indexOf("s25+") == -1 &&
  name.indexOf("12/512") != -1 &&
  name.indexOf("mint") != -1) {
    return 37511;
  } else if (
name.indexOf("s25") != -1 &&
  name.indexOf("ultra") == -1 &&
  name.indexOf("s25+") == -1 &&
  name.indexOf("12/512") != -1 &&
  name.indexOf("navy") != -1) {
    return 37512;
  } else if (
name.indexOf("s25") != -1 &&
  name.indexOf("ultra") == -1 &&
  name.indexOf("s25+") == -1 &&
  name.indexOf("12/512") != -1 &&
  name.indexOf("pink") != -1) {
    return 37513;
  } else if (
name.indexOf("s25") != -1 &&
  name.indexOf("ultra") == -1 &&
  name.indexOf("s25+") == -1 &&
  name.indexOf("12/512") != -1 &&
  name.indexOf("silver") != -1) {
    return 37514;
  } else if (
name.indexOf("s25") != -1 &&
  name.indexOf("ultra") == -1 &&
  name.indexOf("s25+") == -1 &&
  name.indexOf("12/128") != -1 &&
  name.indexOf("black") != -1) {
    return 37522;
  } else if (
name.indexOf("s25") != -1 &&
  name.indexOf("ultra") == -1 &&
  name.indexOf("s25+") == -1 &&
  name.indexOf("12/128") != -1 &&
  name.indexOf("red") != -1) {
    return 37523;
  } else if (
name.indexOf("s25") != -1 &&
  name.indexOf("ultra") == -1 &&
  name.indexOf("s25+") == -1 &&
  name.indexOf("12/128") != -1 &&
  name.indexOf("icyblue") != -1) {
    return 37524;
  } else if (
name.indexOf("s25") != -1 &&
  name.indexOf("ultra") == -1 &&
  name.indexOf("s25+") == -1 &&
  name.indexOf("12/128") != -1 &&
  name.indexOf("mint") != -1) {
    return 37525;
  } else if (
name.indexOf("s25") != -1 &&
  name.indexOf("ultra") == -1 &&
  name.indexOf("s25+") == -1 &&
  name.indexOf("12/128") != -1 &&
  name.indexOf("navy") != -1) {
    return 37526;
  } else if (
name.indexOf("s25") != -1 &&
  name.indexOf("ultra") == -1 &&
  name.indexOf("s25+") == -1 &&
  name.indexOf("12/128") != -1 &&
  name.indexOf("pink") != -1) {
    return 37527;
  } else if (
name.indexOf("s25") != -1 &&
  name.indexOf("ultra") == -1 &&
  name.indexOf("s25+") == -1 &&
  name.indexOf("12/128") != -1 &&
  name.indexOf("silver") != -1) {
    return 37528;
  } else if (
  name.indexOf("s25+") != -1 &&
  name.indexOf("ultra") == -1 &&
  name.indexOf("12/256") != -1 &&
  name.indexOf("black") != -1) {
    return 37564;
  } else if (
name.indexOf("s25+") != -1 &&
  name.indexOf("ultra") == -1 &&
  name.indexOf("12/256") != -1 &&
  name.indexOf("red") != -1) {
    return 37565;
  } else if (
name.indexOf("s25+") != -1 &&
  name.indexOf("ultra") == -1 &&
  name.indexOf("12/256") != -1 &&
  name.indexOf("icy") != -1) {
    return 37566;
  } else if (
name.indexOf("s25+") != -1 &&
  name.indexOf("ultra") == -1 &&
  name.indexOf("12/256") != -1 &&
  name.indexOf("mint") != -1) {
    return 37567;
  } else if (
name.indexOf("s25+") != -1 &&
  name.indexOf("ultra") == -1 &&
  name.indexOf("12/256") != -1 &&
  name.indexOf("navy") != -1) {
    return 37568;
  } else if (
name.indexOf("s25+") != -1 &&
  name.indexOf("ultra") == -1 &&
  name.indexOf("12/256") != -1 &&
  name.indexOf("silver") != -1) {
    return 37570;
  } else if (
name.indexOf("s25+") != -1 &&
  name.indexOf("ultra") == -1 &&
  name.indexOf("12/512") != -1 &&
  name.indexOf("black") != -1) {
    return 37578;
  } else if (
name.indexOf("s25+") != -1 &&
  name.indexOf("ultra") == -1 &&
  name.indexOf("12/512") != -1 &&
  name.indexOf("red") != -1) {
    return 37579;
  } else if (
name.indexOf("s25+") != -1 &&
  name.indexOf("ultra") == -1 &&
  name.indexOf("12/512") != -1 &&
  name.indexOf("icy") != -1) {
    return 37580;
  } else if (
name.indexOf("s25+") != -1 &&
  name.indexOf("ultra") == -1 &&
  name.indexOf("12/512") != -1 &&
  name.indexOf("mint") != -1) {
    return 37581;
  } else if (
name.indexOf("s25+") != -1 &&
  name.indexOf("ultra") == -1 &&
  name.indexOf("12/512") != -1 &&
  name.indexOf("navy") != -1) {
    return 37582;
  } else if (
name.indexOf("s25+") != -1 &&
  name.indexOf("ultra") == -1 &&
  name.indexOf("12/512") != -1 &&
  name.indexOf("pink") != -1) {
    return 37583;
  } else if (
name.indexOf("s25+") != -1 &&
  name.indexOf("ultra") == -1 &&
  name.indexOf("12/512") != -1 &&
  name.indexOf("silver") != -1) {
    return 37584;
  } else if (
  name.indexOf("s25 ultra") != -1 &&
  name.indexOf("12/256") != -1 &&
  name.indexOf("black") != -1 &&
  name.indexOf("jet") == -1) {
    return 37591;
  } else if (
name.indexOf("s25 ultra") != -1 &&
  name.indexOf("12/256") != -1 &&
  name.indexOf("green") != -1) {
    return 37592;
  } else if (
name.indexOf("s25 ultra") != -1 &&
  name.indexOf("12/256") != -1 &&
  name.indexOf("jet black") != -1) {
    return 37593;
  } else if (
name.indexOf("s25 ultra") != -1 &&
  name.indexOf("12/256") != -1 &&
  name.indexOf("pink") != -1) {
    return 37594;
  } else if (
name.indexOf("s25 ultra") != -1 &&
  name.indexOf("12/256") != -1 &&
  name.indexOf("blue") != -1) {
    return 37595;
  } else if (
name.indexOf("s25 ultra") != -1 &&
  name.indexOf("12/256") != -1 &&
  name.indexOf("gray") != -1) {
    return 37596;
  } else if (
name.indexOf("s25 ultra") != -1 &&
  name.indexOf("12/256") != -1 &&
  name.indexOf("white") != -1) {
    return 37597;
  } else if (
name.indexOf("s25 ultra") != -1 &&
  name.indexOf("12/512") != -1 &&
  name.indexOf("black") != -1 &&
  name.indexOf("jet") == -1) {
    return 37627;
  } else if (
name.indexOf("s25 ultra") != -1 &&
  name.indexOf("12/512") != -1 &&
  name.indexOf("green") != -1) {
    return 37628;
  } else if (
name.indexOf("s25 ultra") != -1 &&
  name.indexOf("12/512") != -1 &&
  name.indexOf("jet black") != -1) {
    return 37629;
  } else if (
name.indexOf("s25 ultra") != -1 &&
  name.indexOf("12/512") != -1 &&
  name.indexOf("pink") != -1) {
    return 37630;
  } else if (
name.indexOf("s25 ultra") != -1 &&
  name.indexOf("12/512") != -1 &&
  name.indexOf("blue") != -1) {
    return 37631;
  } else if (
name.indexOf("s25 ultra") != -1 &&
  name.indexOf("12/512") != -1 &&
  name.indexOf("gray") != -1) {
    return 37632;
  } else if (
name.indexOf("s25 ultra") != -1 &&
  name.indexOf("12/512") != -1 &&
  name.indexOf("white") != -1) {
    return 37633;
  } else if (
name.indexOf("s25 ultra") != -1 &&
  name.indexOf("12/1tb") != -1 &&
  name.indexOf("black") != -1 &&
  name.indexOf("jet") == -1) {
    return 37641;
  } else if (
name.indexOf("s25 ultra") != -1 &&
  name.indexOf("12/1tb") != -1 &&
  name.indexOf("green") != -1) {
    return 37642;
  } else if (
name.indexOf("s25 ultra") != -1 &&
  name.indexOf("12/1tb") != -1 &&
  name.indexOf("jet black") != -1) {
    return 37643;
  } else if (
name.indexOf("s25 ultra") != -1 &&
  name.indexOf("12/1tb") != -1 &&
  name.indexOf("pink") != -1) {
    return 37644;
  } else if (
name.indexOf("s25 ultra") != -1 &&
  name.indexOf("12/1tb") != -1 &&
  name.indexOf("blue") != -1) {
    return 37645;
  } else if (
name.indexOf("s25 ultra") != -1 &&
  name.indexOf("12/1tb") != -1 &&
  name.indexOf("gray") != -1) {
    return 37646;
  } else if (
name.indexOf("s25 ultra") != -1 &&
  name.indexOf("12/1tb") != -1 &&
  name.indexOf("white") != -1) {
    return 37647;
  } else if (
name.indexOf("s25 ultra") != -1 &&
  name.indexOf("16/1tb") != -1 &&
  name.indexOf("black") != -1 &&
  name.indexOf("jet") == -1) {
    return 37655;
  } else if (
name.indexOf("s25 ultra") != -1 &&
  name.indexOf("16/1tb") != -1 &&
  name.indexOf("green") != -1) {
    return 37656;
  } else if (
name.indexOf("s25 ultra") != -1 &&
  name.indexOf("16/1tb") != -1 &&
  name.indexOf("jet black") != -1) {
    return 37657;
  } else if (
name.indexOf("s25 ultra") != -1 &&
  name.indexOf("16/1tb") != -1 &&
  name.indexOf("pink") != -1) {
    return 37658;
  } else if (
name.indexOf("s25 ultra") != -1 &&
  name.indexOf("16/1tb") != -1 &&
  name.indexOf("blue") != -1) {
    return 37659;
  } else if (
name.indexOf("s25 ultra") != -1 &&
  name.indexOf("16/1tb") != -1 &&
  name.indexOf("gray") != -1) {
    return 37660;
  } else if (
name.indexOf("s25 ultra") != -1 &&
  name.indexOf("16/1tb") != -1 &&
  name.indexOf("white") != -1) {
    return 37661;


  } else if (name.indexOf("z flip 5 8/256 blue 🇰🇿") != -1) {
    return 30816;
  } else if (name.indexOf("z flip 5 8/256 cream 🇰🇿") != -1) {
    return 30817;
  } else if (name.indexOf("z flip 5 8/256 graphite 🇰🇿") != -1) {
    return 30818;
  } else if (name.indexOf("z flip 5 8/256 gray 🇰🇿") != -1) {
    return 30819;
  } else if (name.indexOf("z flip 5 8/256 green 🇰🇿") != -1) {
    return 30820;
  } else if (name.indexOf("z flip 5 8/256 lavender 🇰🇿") != -1) {
    return 30821;
  } else if (name.indexOf("z flip 5 8/256 mint 🇰🇿") != -1) {
    return 30822;
  } else if (name.indexOf("z flip 5 8/256 yellow 🇰🇿") != -1) {
    return 30823;
  } else if (name.indexOf("z flip 5 8/512 blue 🇰🇿") != -1) {
    return 30824;
  } else if (name.indexOf("z flip 5 8/512 cream 🇰🇿") != -1) {
    return 30825;
  } else if (name.indexOf("z flip 5 8/512 graphite 🇰🇿") != -1) {
    return 30826;
  } else if (name.indexOf("z flip 5 8/512 gray 🇰🇿") != -1) {
    return 30827;
  } else if (name.indexOf("z flip 5 8/512 green 🇰🇿") != -1) {
    return 30828;
  } else if (name.indexOf("z flip 5 8/512 lavender 🇰🇿") != -1) {
    return 30829;
  } else if (name.indexOf("z flip 5 8/512 mint 🇰🇿") != -1) {
    return 30830;
  } else if (name.indexOf("z flip 5 8/512 yellow 🇰🇿") != -1) {
    return 30831;
  } else if (name.indexOf("z flip 6 12/256 black") != -1) {
    return 36517;
  } else if (name.indexOf("z flip 6 12/256 blue") != -1) {
    return 36513;
  } else if (name.indexOf("z flip 6 12/256 mint") != -1) {
    return 36514;
  } else if (name.indexOf("z flip 6 12/256 peach") != -1) {
    return 36518;
  } else if (
    name.indexOf("z flip 6 12/256 silver") != -1 ||
    name.indexOf("z flip 6 12/256 gray") != -1
  ) {
    return 36515;
  } else if (name.indexOf("z flip 6 12/256 white") != -1) {
    return 36516;
  } else if (name.indexOf("z flip 6 12/256 yellow") != -1) {
    return 36494;
  } else if (name.indexOf("z flip 6 12/512 black") != -1) {
    return 36519;
  } else if (name.indexOf("z flip 6 12/512 blue") != -1) {
    return 36520;
  } else if (name.indexOf("z flip 6 12/512 mint") != -1) {
    return 36521;
  } else if (name.indexOf("z flip 6 12/512 peach") != -1) {
    return 36522;
  } else if (
    name.indexOf("z flip 6 12/512 silver") != -1 ||
    name.indexOf("z flip 6 12/512 gray") != -1
  ) {
    return 36523;
  } else if (name.indexOf("z flip 6 12/512 white") != -1) {
    return 36524;
  } else if (name.indexOf("z flip 6 12/512 yellow") != -1) {
    return 36525;
  } else if (name.indexOf("z flip 5 8/256 blue") != -1) {
    return 27949;
  } else if (
    name.indexOf("z flip 5 8/256 cream") != -1 ||
    name.indexOf("z flip 5 8/256 white") != -1
  ) {
    return 27943;
  } else if (
    name.indexOf("z flip 5 8/256 graphite") != -1 ||
    name.indexOf("z flip 5 8/256 black") != -1
  ) {
    return 27941;
  } else if (name.indexOf("z flip 5 8/256 gray") != -1) {
    return 27947;
  } else if (name.indexOf("z flip 5 8/256 green") != -1) {
    return 27951;
  } else if (name.indexOf("z flip 5 8/256 lavender") != -1) {
    return 27945;
  } else if (name.indexOf("z flip 5 8/256 mint") != -1) {
    return 27939;
  } else if (name.indexOf("z flip 5 8/256 yellow") != -1) {
    return 27953;
  } else if (name.indexOf("z flip 5 8/512 blue") != -1) {
    return 27950;
  } else if (
    name.indexOf("z flip 5 8/512 cream") != -1 ||
    name.indexOf("z flip 5 8/512 white") != -1
  ) {
    return 27944;
  } else if (
    name.indexOf("z flip 5 8/512 graphite") != -1 ||
    name.indexOf("z flip 5 8/512 black") != -1
  ) {
    return 27942;
  } else if (name.indexOf("z flip 5 8/512 gray") != -1) {
    return 27948;
  } else if (name.indexOf("z flip 5 8/512 green") != -1) {
    return 27952;
  } else if (name.indexOf("z flip 5 8/512 lavender") != -1) {
    return 27946;
  } else if (
    name.indexOf("z") != -1 &&
    name.indexOf("flip") != -1 &&
    name.indexOf("5") != -1 &&
    name.indexOf("512") != -1 &&
    name.indexOf("mint") != -1
  ) {
    return 27940;
  } else if (name.indexOf("z flip 5 8/512 yellow") != -1) {
    return 27954;
  } else if (name.indexOf("z fold 5 12/1tb blue 🇰🇿") != -1) {
    return 30862;
  } else if (name.indexOf("z fold 5 12/1tb cream 🇰🇿") != -1) {
    return 30863;
  } else if (name.indexOf("z fold 5 12/1tb gray 🇰🇿") != -1) {
    return 30864;
  } else if (name.indexOf("z fold 5 12/1tb icy blue 🇰🇿") != -1) {
    return 30865;
  } else if (
    name.indexOf("z fold 5 12/1tb black 🇰🇿") != -1 ||
    name.indexOf("z fold 5 12/1tb phantom black 🇰🇿") != -1
  ) {
    return 30866;
  } else if (name.indexOf("z fold 5 12/256 blue 🇰🇿") != -1) {
    return 30867;
  } else if (name.indexOf("z fold 5 12/256 cream 🇰🇿") != -1) {
    return 30868;
  } else if (name.indexOf("z fold 5 12/256 gray 🇰🇿") != -1) {
    return 30869;
  } else if (name.indexOf("z fold 5 12/256 icy blue 🇰🇿") != -1) {
    return 30870;
  } else if (
    name.indexOf("z fold 5 12/256 black 🇰🇿") != -1 ||
    name.indexOf("z fold 5 12/256 phantom black 🇰🇿") != -1
  ) {
    return 30871;
  } else if (name.indexOf("z fold 5 12/512 blue 🇰🇿") != -1) {
    return 30872;
  } else if (name.indexOf("z fold 5 12/512 cream 🇰🇿") != -1) {
    return 30873;
  } else if (name.indexOf("z fold 5 12/512 gray 🇰🇿") != -1) {
    return 30874;
  } else if (name.indexOf("z fold 5 12/512 icy blue 🇰🇿") != -1) {
    return 30875;
  } else if (
    name.indexOf("z fold 5 12/512 black 🇰🇿") != -1 ||
    name.indexOf("z fold 5 12/512 phantom black 🇰🇿") != -1
  ) {
    return 30876;
  } else if (
    name.indexOf("z fold 6") != -1 &&
    name.indexOf("1tb") != -1 &&
    name.indexOf("black") != -1
  ) {
    return 36508;
  } else if (
    name.indexOf("z fold 6") != -1 &&
    name.indexOf("1tb") != -1 &&
    name.indexOf("navy") != -1
  ) {
    return 36509;
  } else if (
    name.indexOf("z fold 6") != -1 &&
    name.indexOf("1tb") != -1 &&
    name.indexOf("pink") != -1
  ) {
    return 36510;
  } else if (
    name.indexOf("z fold 6") != -1 &&
    name.indexOf("1tb") != -1 &&
    name.indexOf("silver") != -1
  ) {
    return 36511;
  } else if (
    name.indexOf("z fold 6") != -1 &&
    name.indexOf("1tb") != -1 &&
    name.indexOf("white") != -1
  ) {
    return 36512;
  } else if (
    name.indexOf("z fold 6") != -1 &&
    name.indexOf("256") != -1 &&
    name.indexOf("black") != -1
  ) {
    return 36499;
  } else if (
    name.indexOf("z fold 6") != -1 &&
    name.indexOf("256") != -1 &&
    name.indexOf("navy") != -1
  ) {
    return 36493;
  } else if (
    name.indexOf("z fold 6") != -1 &&
    name.indexOf("256") != -1 &&
    name.indexOf("pink") != -1
  ) {
    return 36502;
  } else if (
    name.indexOf("z fold 6") != -1 &&
    name.indexOf("256") != -1 &&
    name.indexOf("silver") != -1
  ) {
    return 36501;
  } else if (
    name.indexOf("z fold 6") != -1 &&
    name.indexOf("256") != -1 &&
    name.indexOf("white") != -1
  ) {
    return 36500;
  } else if (
    name.indexOf("z fold 6") != -1 &&
    name.indexOf("512") != -1 &&
    name.indexOf("black") != -1
  ) {
    return 36503;
  } else if (
    name.indexOf("z fold 6") != -1 &&
    name.indexOf("512") != -1 &&
    name.indexOf("navy") != -1
  ) {
    return 36504;
  } else if (
    name.indexOf("z fold 6") != -1 &&
    name.indexOf("512") != -1 &&
    name.indexOf("pink") != -1
  ) {
    return 36505;
  } else if (
    name.indexOf("z fold 6") != -1 &&
    name.indexOf("512") != -1 &&
    name.indexOf("silver") != -1
  ) {
    return 36506;
  } else if (
    name.indexOf("z fold 6") != -1 &&
    name.indexOf("512") != -1 &&
    name.indexOf("white") != -1
  ) {
    return 36507;
  } else if (name.indexOf("z fold 5 12/1tb blue") != -1) {
    return 27967;
  } else if (name.indexOf("z fold 5 12/1tb cream") != -1) {
    return 27961;
  } else if (name.indexOf("z fold 5 12/1tb gray") != -1) {
    return 27964;
  } else if (name.indexOf("z fold 5 12/1tb icy blue") != -1) {
    return 27957;
  } else if (
    name.indexOf("z fold 5 12/1tb black") != -1 ||
    name.indexOf("z fold 5 12/1tb phantom black") != -1
  ) {
    return 27958;
  } else if (name.indexOf("z fold 5 12/256 blue") != -1) {
    return 27968;
  } else if (name.indexOf("z fold 5 12/256 cream") != -1) {
    return 27962;
  } else if (name.indexOf("z fold 5 12/256 gray") != -1) {
    return 27965;
  } else if (name.indexOf("z fold 5 12/256 icy blue") != -1) {
    return 27955;
  } else if (
    name.indexOf("z fold 5 12/256 black") != -1 ||
    name.indexOf("z fold 5 12/256 phantom black") != -1
  ) {
    return 27959;
  } else if (name.indexOf("z fold 5 12/512 blue") != -1) {
    return 27969;
  } else if (name.indexOf("z fold 5 12/512 cream") != -1) {
    return 27963;
  } else if (name.indexOf("z fold 5 12/512 gray") != -1) {
    return 27966;
  } else if (name.indexOf("z fold 5 12/512 icy blue") != -1) {
    return 27956;
  } else if (
    name.indexOf("z fold 5 12/512 black") != -1 ||
    name.indexOf("z fold 5 12/512 phantom black") != -1
  ) {
    return 27960;

    // Tab
  } else if (
    name.indexOf("tab s8") != -1 &&
    name.indexOf("12/256") != -1 &&
    name.indexOf("5g") != -1 &&
    name.indexOf("graphite") != -1
  ) {
    return 21918;
  } else if (
    name.indexOf("tab s8") != -1 &&
    name.indexOf("12/256") != -1 &&
    name.indexOf("5g") != -1 &&
    name.indexOf("pink") != -1
  ) {
    return 21919;
  } else if (
    name.indexOf("tab s8") != -1 &&
    name.indexOf("12/256") != -1 &&
    name.indexOf("5g") != -1 &&
    name.indexOf("silver") != -1
  ) {
    return 21920;
  } else if (
    name.indexOf("tab s8") != -1 &&
    name.indexOf("12/256") != -1 &&
    name.indexOf("wi-fi") != -1 &&
    name.indexOf("graphite") != -1
  ) {
    return 22703;
  } else if (
    name.indexOf("tab s8") != -1 &&
    name.indexOf("12/256") != -1 &&
    name.indexOf("wi-fi") != -1 &&
    name.indexOf("pink") != -1
  ) {
    return 22704;
  } else if (
    name.indexOf("tab s8") != -1 &&
    name.indexOf("12/256") != -1 &&
    name.indexOf("wi-fi") != -1 &&
    name.indexOf("silver") != -1
  ) {
    return 22705;
  } else if (
    name.indexOf("tab s8") != -1 &&
    name.indexOf("8/128") != -1 &&
    name.indexOf("5g") != -1 &&
    name.indexOf("graphite") != -1
  ) {
    return 21913;
  } else if (
    name.indexOf("tab s8") != -1 &&
    name.indexOf("8/128") != -1 &&
    name.indexOf("5g") != -1 &&
    name.indexOf("pink") != -1
  ) {
    return 21914;
  } else if (
    name.indexOf("tab s8") != -1 &&
    name.indexOf("8/128") != -1 &&
    name.indexOf("5g") != -1 &&
    name.indexOf("silver") != -1
  ) {
    return 21912;
  } else if (
    name.indexOf("tab s8") != -1 &&
    name.indexOf("8/128") != -1 &&
    name.indexOf("wi-fi") != -1 &&
    name.indexOf("graphite") != -1
  ) {
    return 22706;
  } else if (
    name.indexOf("tab s8") != -1 &&
    name.indexOf("8/128") != -1 &&
    name.indexOf("wi-fi") != -1 &&
    name.indexOf("pink") != -1
  ) {
    return 22707;
  } else if (
    name.indexOf("tab s8") != -1 &&
    name.indexOf("8/128") != -1 &&
    name.indexOf("wi-fi") != -1 &&
    name.indexOf("silver") != -1
  ) {
    return 22708;
  } else if (
    name.indexOf("tab s8") != -1 &&
    name.indexOf("8/256") != -1 &&
    name.indexOf("5g") != -1 &&
    name.indexOf("graphite") != -1
  ) {
    return 21915;
  } else if (
    name.indexOf("tab s8") != -1 &&
    name.indexOf("8/256") != -1 &&
    name.indexOf("5g") != -1 &&
    name.indexOf("pink") != -1
  ) {
    return 21916;
  } else if (
    name.indexOf("tab s8") != -1 &&
    name.indexOf("8/256") != -1 &&
    name.indexOf("5g") != -1 &&
    name.indexOf("silver") != -1
  ) {
    return 21917;
  } else if (
    name.indexOf("tab s8") != -1 &&
    name.indexOf("8/256") != -1 &&
    name.indexOf("wi-fi") != -1 &&
    name.indexOf("graphite") != -1
  ) {
    return 22709;
  } else if (
    name.indexOf("tab s8") != -1 &&
    name.indexOf("8/256") != -1 &&
    name.indexOf("wi-fi") != -1 &&
    name.indexOf("pink") != -1
  ) {
    return 22710;
  } else if (
    name.indexOf("tab s8") != -1 &&
    name.indexOf("8/256") != -1 &&
    name.indexOf("wi-fi") != -1 &&
    name.indexOf("silver") != -1
  ) {
    return 22711;
  } else if (
    name.indexOf("tab s8 +") != -1 &&
    name.indexOf("12/256") != -1 &&
    name.indexOf("5g") != -1 &&
    name.indexOf("graphite") != -1
  ) {
    return 21927;
  } else if (
    name.indexOf("tab s8 +") != -1 &&
    name.indexOf("12/256") != -1 &&
    name.indexOf("5g") != -1 &&
    name.indexOf("pink") != -1
  ) {
    return 21928;
  } else if (
    name.indexOf("tab s8 +") != -1 &&
    name.indexOf("12/256") != -1 &&
    name.indexOf("5g") != -1 &&
    name.indexOf("silver") != -1
  ) {
    return 21929;
  } else if (
    name.indexOf("tab s8 +") != -1 &&
    name.indexOf("12/256") != -1 &&
    name.indexOf("wi-fi") != -1 &&
    name.indexOf("graphite") != -1
  ) {
    return 22712;
  } else if (
    name.indexOf("tab s8 +") != -1 &&
    name.indexOf("12/256") != -1 &&
    name.indexOf("wi-fi") != -1 &&
    name.indexOf("pink") != -1
  ) {
    return 22713;
  } else if (
    name.indexOf("tab s8 +") != -1 &&
    name.indexOf("12/256") != -1 &&
    name.indexOf("wi-fi") != -1 &&
    name.indexOf("silver") != -1
  ) {
    return 22714;
  } else if (
    name.indexOf("tab s8 +") != -1 &&
    name.indexOf("8/128") != -1 &&
    name.indexOf("5g") != -1 &&
    name.indexOf("graphite") != -1
  ) {
    return 21921;
  } else if (
    name.indexOf("tab s8 +") != -1 &&
    name.indexOf("8/128") != -1 &&
    name.indexOf("5g") != -1 &&
    name.indexOf("pink") != -1
  ) {
    return 21922;
  } else if (
    name.indexOf("tab s8 +") != -1 &&
    name.indexOf("8/128") != -1 &&
    name.indexOf("5g") != -1 &&
    name.indexOf("silver") != -1
  ) {
    return 21923;
  } else if (
    name.indexOf("tab s8 +") != -1 &&
    name.indexOf("8/128") != -1 &&
    name.indexOf("wi-fi") != -1 &&
    name.indexOf("graphite") != -1
  ) {
    return 22715;
  } else if (
    name.indexOf("tab s8 +") != -1 &&
    name.indexOf("8/128") != -1 &&
    name.indexOf("wi-fi") != -1 &&
    name.indexOf("pink") != -1
  ) {
    return 22716;
  } else if (
    name.indexOf("tab s8 +") != -1 &&
    name.indexOf("8/128") != -1 &&
    name.indexOf("wi-fi") != -1 &&
    name.indexOf("silver") != -1
  ) {
    return 22717;
  } else if (
    name.indexOf("tab s8 +") != -1 &&
    name.indexOf("8/256") != -1 &&
    name.indexOf("5g") != -1 &&
    name.indexOf("graphite") != -1
  ) {
    return 21924;
  } else if (
    name.indexOf("tab s8 +") != -1 &&
    name.indexOf("8/256") != -1 &&
    name.indexOf("5g") != -1 &&
    name.indexOf("pink") != -1
  ) {
    return 21925;
  } else if (
    name.indexOf("tab s8 +") != -1 &&
    name.indexOf("8/256") != -1 &&
    name.indexOf("5g") != -1 &&
    name.indexOf("silver") != -1
  ) {
    return 21926;
  } else if (
    name.indexOf("tab s8 +") != -1 &&
    name.indexOf("8/256") != -1 &&
    name.indexOf("wi-fi") != -1 &&
    name.indexOf("graphite") != -1
  ) {
    return 22718;
  } else if (
    name.indexOf("tab s8 +") != -1 &&
    name.indexOf("8/256") != -1 &&
    name.indexOf("wi-fi") != -1 &&
    name.indexOf("pink") != -1
  ) {
    return 22719;
  } else if (
    name.indexOf("tab s8 +") != -1 &&
    name.indexOf("8/256") != -1 &&
    name.indexOf("wi-fi") != -1 &&
    name.indexOf("silver") != -1
  ) {
    return 22720;
  } else if (
    name.indexOf("tab s8 ultra") != -1 &&
    name.indexOf("12/256") != -1 &&
    name.indexOf("5g") != -1 &&
    name.indexOf("graphite") != -1
  ) {
    return 21933;
  } else if (
    name.indexOf("tab s8 ultra") != -1 &&
    name.indexOf("12/256") != -1 &&
    name.indexOf("wi-fi") != -1 &&
    name.indexOf("graphite") != -1
  ) {
    return 22721;
  } else if (
    name.indexOf("tab s8 ultra") != -1 &&
    name.indexOf("12/512") != -1 &&
    name.indexOf("5g") != -1 &&
    name.indexOf("graphite") != -1
  ) {
    return 21932;
  } else if (
    name.indexOf("tab s8 ultra") != -1 &&
    name.indexOf("12/512") != -1 &&
    name.indexOf("wi-fi") != -1 &&
    name.indexOf("graphite") != -1
  ) {
    return 22722;
  } else if (
    name.indexOf("tab s8 ultra") != -1 &&
    name.indexOf("16/512") != -1 &&
    name.indexOf("5g") != -1 &&
    name.indexOf("graphite") != -1
  ) {
    return 21931;
  } else if (
    name.indexOf("tab s8 ultra") != -1 &&
    name.indexOf("16/512") != -1 &&
    name.indexOf("wi-fi") != -1 &&
    name.indexOf("graphite") != -1
  ) {
    return 22723;
  } else if (
    name.indexOf("tab s8 ultra") != -1 &&
    name.indexOf("8/128") != -1 &&
    name.indexOf("5g") != -1 &&
    name.indexOf("graphite") != -1
  ) {
    return 21930;
  } else if (
    name.indexOf("tab s8 ultra") != -1 &&
    name.indexOf("8/128") != -1 &&
    name.indexOf("wi-fi") != -1 &&
    name.indexOf("graphite") != -1
  ) {
    return 22724;
  } else if (
    name.indexOf("tab s9 +") != -1 &&
    name.indexOf("12/256") != -1 &&
    name.indexOf("wi-fi") != -1 &&
    name.indexOf("beige") != -1
  ) {
    return 30969;
  } else if (
    name.indexOf("tab s9 +") != -1 &&
    name.indexOf("12/256") != -1 &&
    name.indexOf("wi-fi") != -1 &&
    name.indexOf("graphite") != -1
  ) {
    return 30970;
  } else if (
    name.indexOf("tab a9 +") != -1 &&
    name.indexOf("64") != -1 &&
    (name.indexOf("lte") != -1 || name.indexOf("5g") != -1) &&
    (name.indexOf("graphite") != -1 || name.indexOf("gray") != -1)
  ) {
    return 31024;
  } else if (
    name.indexOf("tab a9 +") != -1 &&
    name.indexOf("64") != -1 &&
    (name.indexOf("lte") != -1 || name.indexOf("5g") != -1) &&
    (name.indexOf("navy") != -1 || name.indexOf("blue") != -1)
  ) {
    return 31025;
  } else if (
    name.indexOf("tab a9 +") != -1 &&
    name.indexOf("64") != -1 &&
    (name.indexOf("lte") != -1 || name.indexOf("5g") != -1) &&
    name.indexOf("silver") != -1
  ) {
    return 31026;
  } else if (
    name.indexOf("tab a9 +") != -1 &&
    name.indexOf("128") != -1 &&
    (name.indexOf("lte") != -1 || name.indexOf("5g") != -1) &&
    (name.indexOf("graphite") != -1 || name.indexOf("gray") != -1)
  ) {
    return 31027;
  } else if (
    name.indexOf("tab a9 +") != -1 &&
    name.indexOf("128") != -1 &&
    (name.indexOf("lte") != -1 || name.indexOf("5g") != -1) &&
    (name.indexOf("navy") != -1 || name.indexOf("blue") != -1)
  ) {
    return 31028;
  } else if (
    name.indexOf("tab a9 +") != -1 &&
    name.indexOf("128") != -1 &&
    (name.indexOf("lte") != -1 || name.indexOf("5g") != -1) &&
    name.indexOf("silver") != -1
  ) {
    return 31029;
  } else if (
    name.indexOf("tab a9") != -1 &&
    name.indexOf("64") != -1 &&
    (name.indexOf("lte") != -1 || name.indexOf("5g") != -1) &&
    (name.indexOf("graphite") != -1 || name.indexOf("gray") != -1)
  ) {
    return 31018;
  } else if (
    name.indexOf("tab a9") != -1 &&
    name.indexOf("64") != -1 &&
    (name.indexOf("lte") != -1 || name.indexOf("5g") != -1) &&
    (name.indexOf("navy") != -1 || name.indexOf("blue") != -1)
  ) {
    return 31019;
  } else if (
    name.indexOf("tab a9") != -1 &&
    name.indexOf("64") != -1 &&
    (name.indexOf("lte") != -1 || name.indexOf("5g") != -1) &&
    name.indexOf("silver") != -1
  ) {
    return 31020;
  } else if (
    name.indexOf("tab a9") != -1 &&
    name.indexOf("128") != -1 &&
    (name.indexOf("lte") != -1 || name.indexOf("5g") != -1) &&
    (name.indexOf("graphite") != -1 || name.indexOf("gray") != -1)
  ) {
    return 31021;
  } else if (
    name.indexOf("tab a9") != -1 &&
    name.indexOf("128") != -1 &&
    (name.indexOf("lte") != -1 || name.indexOf("5g") != -1) &&
    (name.indexOf("navy") != -1 || name.indexOf("blue") != -1)
  ) {
    return 31022;
  } else if (
    name.indexOf("tab a9") != -1 &&
    name.indexOf("128") != -1 &&
    (name.indexOf("lte") != -1 || name.indexOf("5g") != -1) &&
    name.indexOf("silver") != -1
  ) {
    return 31023;
  } else if (
    name.indexOf("tab s9 fe +") != -1 &&
    name.indexOf("12/256") != -1 &&
    (name.indexOf("lte") != -1 || name.indexOf("5g") != -1) &&
    name.indexOf("gray") != -1
  ) {
    return 31058;
  } else if (
    name.indexOf("tab s9 fe +") != -1 &&
    name.indexOf("12/256") != -1 &&
    (name.indexOf("lte") != -1 || name.indexOf("5g") != -1) &&
    (name.indexOf("lavender") != -1 || name.indexOf("pink") != -1)
  ) {
    return 31059;
  } else if (
    name.indexOf("tab s9 fe +") != -1 &&
    name.indexOf("12/256") != -1 &&
    (name.indexOf("lte") != -1 || name.indexOf("5g") != -1) &&
    (name.indexOf("mint") != -1 || name.indexOf("green") != -1)
  ) {
    return 31060;
  } else if (
    name.indexOf("tab s9 fe +") != -1 &&
    name.indexOf("12/256") != -1 &&
    (name.indexOf("lte") != -1 || name.indexOf("5g") != -1) &&
    name.indexOf("silver") != -1
  ) {
    return 31061;
  } else if (
    name.indexOf("tab s9 fe +") != -1 &&
    name.indexOf("8/128") != -1 &&
    (name.indexOf("lte") != -1 || name.indexOf("5g") != -1) &&
    name.indexOf("gray") != -1
  ) {
    return 31062;
  } else if (
    name.indexOf("tab s9 fe +") != -1 &&
    name.indexOf("8/128") != -1 &&
    (name.indexOf("lte") != -1 || name.indexOf("5g") != -1) &&
    (name.indexOf("lavender") != -1 || name.indexOf("pink") != -1)
  ) {
    return 31063;
  } else if (
    name.indexOf("tab s9 fe +") != -1 &&
    name.indexOf("8/128") != -1 &&
    (name.indexOf("lte") != -1 || name.indexOf("5g") != -1) &&
    (name.indexOf("mint") != -1 || name.indexOf("green") != -1)
  ) {
    return 31064;
  } else if (
    name.indexOf("tab s9 fe +") != -1 &&
    name.indexOf("8/128") != -1 &&
    (name.indexOf("lte") != -1 || name.indexOf("5g") != -1) &&
    name.indexOf("silver") != -1
  ) {
    return 31065;
  } else if (
    name.indexOf("tab s9 fe") != -1 &&
    name.indexOf("6/128") != -1 &&
    (name.indexOf("lte") != -1 || name.indexOf("5g") != -1) &&
    name.indexOf("gray") != -1
  ) {
    return 31050;
  } else if (
    name.indexOf("tab s9 fe") != -1 &&
    name.indexOf("6/128") != -1 &&
    (name.indexOf("lte") != -1 || name.indexOf("5g") != -1) &&
    (name.indexOf("lavender") != -1 || name.indexOf("pink") != -1)
  ) {
    return 31051;
  } else if (
    name.indexOf("tab s9 fe") != -1 &&
    name.indexOf("6/128") != -1 &&
    (name.indexOf("lte") != -1 || name.indexOf("5g") != -1) &&
    (name.indexOf("mint") != -1 || name.indexOf("green") != -1)
  ) {
    return 31052;
  } else if (
    name.indexOf("tab s9 fe") != -1 &&
    name.indexOf("6/128") != -1 &&
    (name.indexOf("lte") != -1 || name.indexOf("5g") != -1) &&
    name.indexOf("silver") != -1
  ) {
    return 31053;
  } else if (
    name.indexOf("tab s9 fe") != -1 &&
    name.indexOf("8/128") != -1 &&
    (name.indexOf("lte") != -1 || name.indexOf("5g") != -1) &&
    name.indexOf("gray") != -1
  ) {
    return 30570;
  } else if (
    name.indexOf("tab s9 fe") != -1 &&
    name.indexOf("8/128") != -1 &&
    (name.indexOf("lte") != -1 || name.indexOf("5g") != -1) &&
    (name.indexOf("lavender") != -1 || name.indexOf("pink") != -1)
  ) {
    return 30571;
  } else if (
    name.indexOf("tab s9 fe") != -1 &&
    name.indexOf("8/128") != -1 &&
    (name.indexOf("lte") != -1 || name.indexOf("5g") != -1) &&
    (name.indexOf("mint") != -1 || name.indexOf("green") != -1)
  ) {
    return 30572;
  } else if (
    name.indexOf("tab s9 fe") != -1 &&
    name.indexOf("8/128") != -1 &&
    (name.indexOf("lte") != -1 || name.indexOf("5g") != -1) &&
    name.indexOf("silver") != -1
  ) {
    return 30573;
  } else if (
    name.indexOf("tab s9 fe") != -1 &&
    name.indexOf("8/256") != -1 &&
    (name.indexOf("lte") != -1 || name.indexOf("5g") != -1) &&
    name.indexOf("gray") != -1
  ) {
    return 31054;
  } else if (
    name.indexOf("tab s9 fe") != -1 &&
    name.indexOf("8/256") != -1 &&
    (name.indexOf("lte") != -1 || name.indexOf("5g") != -1) &&
    (name.indexOf("lavender") != -1 || name.indexOf("pink") != -1)
  ) {
    return 31055;
  } else if (
    name.indexOf("tab s9 fe") != -1 &&
    name.indexOf("8/256") != -1 &&
    (name.indexOf("lte") != -1 || name.indexOf("5g") != -1) &&
    (name.indexOf("mint") != -1 || name.indexOf("green") != -1)
  ) {
    return 31056;
  } else if (
    name.indexOf("tab s9 fe") != -1 &&
    name.indexOf("8/256") != -1 &&
    (name.indexOf("lte") != -1 || name.indexOf("5g") != -1) &&
    name.indexOf("silver") != -1
  ) {
    return 31057;
  } else if (
    name.indexOf("tab s9 fe") != -1 &&
    name.indexOf("128") != -1 &&
    name.indexOf("gray") != -1
  ) {
    return 30146;
  } else if (
    name.indexOf("tab s9 fe") != -1 &&
    name.indexOf("128") != -1 &&
    (name.indexOf("lavender") != -1 || name.indexOf("pink") != -1)
  ) {
    return 30148;
  } else if (
    name.indexOf("tab s9 fe") != -1 &&
    name.indexOf("256") != -1 &&
    name.indexOf("gray") != -1
  ) {
    return 30147;
  } else if (
    name.indexOf("tab s9 fe") != -1 &&
    name.indexOf("256") != -1 &&
    (name.indexOf("lavender") != -1 || name.indexOf("pink") != -1)
  ) {
    return 30149;
  } else if (
    name.indexOf("tab s9 fe") != -1 &&
    name.indexOf("128") != -1 &&
    (name.indexOf("mint") != -1 || name.indexOf("green") != -1)
  ) {
    return 30142;
  } else if (
    name.indexOf("tab s9 fe") != -1 &&
    name.indexOf("128") != -1 &&
    name.indexOf("silver") != -1
  ) {
    return 30144;
  } else if (
    name.indexOf("tab s9 fe") != -1 &&
    name.indexOf("256") != -1 &&
    (name.indexOf("mint") != -1 || name.indexOf("green") != -1)
  ) {
    return 30143;
  } else if (
    name.indexOf("tab s9 fe") != -1 &&
    name.indexOf("256") != -1 &&
    name.indexOf("silver") != -1
  ) {
    return 30145;
  } else if (
    name.indexOf("tab s9 fe +") != -1 &&
    name.indexOf("256") != -1 &&
    name.indexOf("gray") != -1
  ) {
    return 30151;
  } else if (
    name.indexOf("tab s9 fe +") != -1 &&
    name.indexOf("256") != -1 &&
    (name.indexOf("lavender") != -1 || name.indexOf("pink") != -1)
  ) {
    return 30156;
  } else if (
    name.indexOf("tab s9 fe +") != -1 &&
    name.indexOf("256") != -1 &&
    (name.indexOf("mint") != -1 || name.indexOf("green") != -1)
  ) {
    return 30152;
  } else if (
    name.indexOf("tab s9 fe +") != -1 &&
    name.indexOf("256") != -1 &&
    name.indexOf("silver") != -1
  ) {
    return 30154;
  } else if (
    name.indexOf("tab s9 fe +") != -1 &&
    name.indexOf("128") != -1 &&
    name.indexOf("gray") != -1
  ) {
    return 30150;
  } else if (
    name.indexOf("tab s9 fe +") != -1 &&
    name.indexOf("128") != -1 &&
    (name.indexOf("lavender") != -1 || name.indexOf("pink") != -1)
  ) {
    return 30157;
  } else if (
    name.indexOf("tab s9 fe +") != -1 &&
    name.indexOf("128") != -1 &&
    (name.indexOf("mint") != -1 || name.indexOf("green") != -1)
  ) {
    return 30153;
  } else if (
    name.indexOf("tab s9 fe +") != -1 &&
    name.indexOf("128") != -1 &&
    name.indexOf("silver") != -1
  ) {
    return 30155;
  } else if (
    name.indexOf("tab s9 ultra") != -1 &&
    name.indexOf("256") != -1 &&
    (name.indexOf("lte") != -1 || name.indexOf("5g") != -1) &&
    name.indexOf("beige") != -1
  ) {
    return 31070;
  } else if (
    name.indexOf("tab s9 ultra") != -1 &&
    name.indexOf("256") != -1 &&
    (name.indexOf("lte") != -1 || name.indexOf("5g") != -1) &&
    (name.indexOf("graphite") != -1 || name.indexOf("gray") != -1)
  ) {
    return 31071;
  } else if (
    name.indexOf("tab s9 ultra") != -1 &&
    name.indexOf("512") != -1 &&
    (name.indexOf("lte") != -1 || name.indexOf("5g") != -1) &&
    name.indexOf("beige") != -1
  ) {
    return 31072;
  } else if (
    name.indexOf("tab s9 ultra") != -1 &&
    name.indexOf("512") != -1 &&
    (name.indexOf("lte") != -1 || name.indexOf("5g") != -1) &&
    (name.indexOf("graphite") != -1 || name.indexOf("gray") != -1)
  ) {
    return 31073;
  } else if (
    name.indexOf("tab s9 ultra") != -1 &&
    name.indexOf("1tb") != -1 &&
    (name.indexOf("lte") != -1 || name.indexOf("5g") != -1) &&
    name.indexOf("beige") != -1
  ) {
    return 31074;
  } else if (
    name.indexOf("tab s9 ultra") != -1 &&
    name.indexOf("1tb") != -1 &&
    (name.indexOf("lte") != -1 || name.indexOf("5g") != -1) &&
    (name.indexOf("graphite") != -1 || name.indexOf("gray") != -1)
  ) {
    return 31075;
  } else if (
    name.indexOf("tab s9 ultra") != -1 &&
    name.indexOf("256") != -1 &&
    (name.indexOf("lte") != -1 || name.indexOf("5g") != -1) &&
    name.indexOf("beige") != -1
  ) {
    return 31066;
  } else if (
    name.indexOf("tab s9 +") != -1 &&
    name.indexOf("256") != -1 &&
    (name.indexOf("lte") != -1 || name.indexOf("5g") != -1) &&
    (name.indexOf("graphite") != -1 || name.indexOf("gray") != -1)
  ) {
    return 31067;
  } else if (
    name.indexOf("tab s9 +") != -1 &&
    name.indexOf("512") != -1 &&
    (name.indexOf("lte") != -1 || name.indexOf("5g") != -1) &&
    name.indexOf("beige") != -1
  ) {
    return 31068;
  } else if (
    name.indexOf("tab s9 +") != -1 &&
    name.indexOf("256") != -1 &&
    (name.indexOf("lte") != -1 || name.indexOf("5g") != -1) &&
    name.indexOf("beige") != -1
  ) {
    return 31066;
  } else if (
    name.indexOf("tab s9 +") != -1 &&
    name.indexOf("512") != -1 &&
    (name.indexOf("lte") != -1 || name.indexOf("5g") != -1) &&
    (name.indexOf("graphite") != -1 || name.indexOf("gray") != -1)
  ) {
    return 31069;
  } else if (
    name.indexOf("tab s9 +") != -1 &&
    name.indexOf("256") != -1 &&
    (name.indexOf("graphite") != -1 || name.indexOf("gray") != -1)
  ) {
    return 27931;
  } else if (
    name.indexOf("tab s9 +") != -1 &&
    name.indexOf("512") != -1 &&
    name.indexOf("beige") != -1
  ) {
    return 27930;
  } else if (
    name.indexOf("tab s9 +") != -1 &&
    name.indexOf("256") != -1 &&
    name.indexOf("beige") != -1
  ) {
    return 27929;
  } else if (
    name.indexOf("tab s9 +") != -1 &&
    name.indexOf("512") != -1 &&
    (name.indexOf("graphite") != -1 || name.indexOf("gray") != -1)
  ) {
    return 27932;
  } else if (
    name.indexOf("tab s9 ultra") != -1 &&
    name.indexOf("256") != -1 &&
    name.indexOf("beige") != -1
  ) {
    return 27933;
  } else if (
    name.indexOf("tab s9 ultra") != -1 &&
    name.indexOf("256") != -1 &&
    (name.indexOf("graphite") != -1 || name.indexOf("gray") != -1)
  ) {
    return 27936;
  } else if (
    name.indexOf("tab s9 ultra") != -1 &&
    name.indexOf("512") != -1 &&
    name.indexOf("beige") != -1
  ) {
    return 27934;
  } else if (
    name.indexOf("tab s9 ultra") != -1 &&
    name.indexOf("512") != -1 &&
    (name.indexOf("graphite") != -1 || name.indexOf("gray") != -1)
  ) {
    return 27937;
  } else if (
    name.indexOf("tab s9 ultra") != -1 &&
    name.indexOf("1tb") != -1 &&
    name.indexOf("beige") != -1
  ) {
    return 27935;
  } else if (
    name.indexOf("tab s9 ultra") != -1 &&
    name.indexOf("1tb") != -1 &&
    (name.indexOf("graphite") != -1 || name.indexOf("gray") != -1)
  ) {
    return 27938;
  } else if (
    name.indexOf("tab s9") != -1 &&
    name.indexOf("256") != -1 &&
    (name.indexOf("lte") != -1 || name.indexOf("5g") != -1) &&
    name.indexOf("beige") != -1
  ) {
    return 31014;
  } else if (
    name.indexOf("tab s9") != -1 &&
    name.indexOf("256") != -1 &&
    (name.indexOf("lte") != -1 || name.indexOf("5g") != -1) &&
    (name.indexOf("graphite") != -1 || name.indexOf("gray") != -1)
  ) {
    return 31015;
  } else if (
    name.indexOf("tab s9") != -1 &&
    name.indexOf("128") != -1 &&
    (name.indexOf("lte") != -1 || name.indexOf("5g") != -1) &&
    name.indexOf("beige") != -1
  ) {
    return 31016;
  } else if (
    name.indexOf("tab s9") != -1 &&
    name.indexOf("128") != -1 &&
    (name.indexOf("lte") != -1 || name.indexOf("5g") != -1) &&
    (name.indexOf("graphite") != -1 || name.indexOf("gray") != -1)
  ) {
    return 31017;
  } else if (
    name.indexOf("tab s9") != -1 &&
    name.indexOf("256") != -1 &&
    name.indexOf("beige") != -1
  ) {
    return 27927;
  } else if (
    name.indexOf("tab s9") != -1 &&
    name.indexOf("256") != -1 &&
    (name.indexOf("graphite") != -1 || name.indexOf("gray") != -1)
  ) {
    return 27928;
  } else if (
    name.indexOf("tab s9") != -1 &&
    name.indexOf("128") != -1 &&
    name.indexOf("beige") != -1
  ) {
    return 27925;
  } else if (
    name.indexOf("tab s9") != -1 &&
    name.indexOf("128") != -1 &&
    (name.indexOf("graphite") != -1 || name.indexOf("gray") != -1)
  ) {
    return 27926;
  } else if (
    name.indexOf("tab a9 +") != -1 &&
    name.indexOf("64") != -1 &&
    (name.indexOf("graphite") != -1 || name.indexOf("gray") != -1)
  ) {
    return 30176;
  } else if (
    name.indexOf("tab a9 +") != -1 &&
    name.indexOf("64") != -1 &&
    name.indexOf("navy") != -1
  ) {
    return 30180;
  } else if (
    name.indexOf("tab a9 +") != -1 &&
    name.indexOf("64") != -1 &&
    name.indexOf("silver") != -1
  ) {
    return 30178;
  } else if (
    name.indexOf("tab a9 +") != -1 &&
    name.indexOf("128") != -1 &&
    (name.indexOf("graphite") != -1 || name.indexOf("gray") != -1)
  ) {
    return 30177;
  } else if (
    name.indexOf("tab a9 +") != -1 &&
    name.indexOf("128") != -1 &&
    name.indexOf("navy") != -1
  ) {
    return 30181;
  } else if (
    name.indexOf("tab a9 +") != -1 &&
    name.indexOf("128") != -1 &&
    name.indexOf("silver") != -1
  ) {
    return 30179;
  } else if (
    name.indexOf("tab a9") != -1 &&
    name.indexOf("64") != -1 &&
    (name.indexOf("graphite") != -1 || name.indexOf("gray") != -1)
  ) {
    return 30170;
  } else if (
    name.indexOf("tab a9") != -1 &&
    name.indexOf("64") != -1 &&
    name.indexOf("navy") != -1
  ) {
    return 30174;
  } else if (
    name.indexOf("tab a9") != -1 &&
    name.indexOf("64") != -1 &&
    name.indexOf("silver") != -1
  ) {
    return 30172;
  } else if (
    name.indexOf("tab a9") != -1 &&
    name.indexOf("128") != -1 &&
    (name.indexOf("graphite") != -1 || name.indexOf("gray") != -1)
  ) {
    return 30171;
  } else if (
    name.indexOf("tab a9") != -1 &&
    name.indexOf("128") != -1 &&
    name.indexOf("navy") != -1
  ) {
    return 30175;
  } else if (
    name.indexOf("tab a9") != -1 &&
    name.indexOf("128") != -1 &&
    name.indexOf("silver") != -1
  ) {
    return 30173;
  } else if (
    name.indexOf("tab a9 +") != -1 &&
    name.indexOf("256") != -1 &&
    name.indexOf("beige") != -1
  ) {
    return 27929;
  } else if (
    name.indexOf("tab a9 +") != -1 &&
    name.indexOf("256") != -1 &&
    (name.indexOf("graphite") != -1 || name.indexOf("gray") != -1)
  ) {
    return 27931;
  } else if (
    name.indexOf("tab a9 +") != -1 &&
    name.indexOf("512") != -1 &&
    name.indexOf("beige") != -1
  ) {
    return 27930;
  } else if (
    name.indexOf("tab a9 +") != -1 &&
    name.indexOf("512") != -1 &&
    (name.indexOf("graphite") != -1 || name.indexOf("gray") != -1)
  ) {
    return 27932;
  } else if (
    name.indexOf("tab s10 +") != -1 &&
    name.indexOf("5g") != -1 &&
    name.indexOf("12/256") != -1 &&
    name.indexOf("gray") != -1
  ) {
    return 36984;
  } else if (
    name.indexOf("tab s10 +") != -1 &&
    name.indexOf("5g") != -1 &&
    name.indexOf("12/256") != -1 &&
    name.indexOf("silver") != -1
  ) {
    return 36985;
  } else if (
    name.indexOf("tab s10 +") != -1 &&
    name.indexOf("5g") != -1 &&
    name.indexOf("12/512") != -1 &&
    name.indexOf("gray") != -1
  ) {
    return 36986;
  } else if (
    name.indexOf("tab s10 +") != -1 &&
    name.indexOf("5g") != -1 &&
    name.indexOf("12/512") != -1 &&
    name.indexOf("silver") != -1
  ) {
    return 36987;
  } else if (
    name.indexOf("tab s10 +") != -1 &&
    name.indexOf("wi-fi") != -1 &&
    name.indexOf("12/256") != -1 &&
    name.indexOf("gray") != -1
  ) {
    return 36980;
  } else if (
    name.indexOf("tab s10 +") != -1 &&
    name.indexOf("wi-fi") != -1 &&
    name.indexOf("12/256") != -1 &&
    name.indexOf("silver") != -1
  ) {
    return 36981;
  } else if (
    name.indexOf("tab s10 +") != -1 &&
    name.indexOf("wi-fi") != -1 &&
    name.indexOf("12/512") != -1 &&
    name.indexOf("gray") != -1
  ) {
    return 36982;
  } else if (
    name.indexOf("tab s10 +") != -1 &&
    name.indexOf("wi-fi") != -1 &&
    name.indexOf("12/512") != -1 &&
    name.indexOf("silver") != -1
  ) {
    return 36983;
  } else if (
    name.indexOf("tab s10 ultra") != -1 &&
    name.indexOf("5g") != -1 &&
    name.indexOf("12/256") != -1 &&
    name.indexOf("gray") != -1
  ) {
    return 36973;
  } else if (
    name.indexOf("tab s10 ultra") != -1 &&
    name.indexOf("5g") != -1 &&
    name.indexOf("12/256") != -1 &&
    name.indexOf("silver") != -1
  ) {
    return 36974;
  } else if (
    name.indexOf("tab s10 ultra") != -1 &&
    name.indexOf("5g") != -1 &&
    name.indexOf("12/512") != -1 &&
    name.indexOf("gray") != -1
  ) {
    return 36975;
  } else if (
    name.indexOf("tab s10 ultra") != -1 &&
    name.indexOf("5g") != -1 &&
    name.indexOf("12/512") != -1 &&
    name.indexOf("silver") != -1
  ) {
    return 36976;
  } else if (
    name.indexOf("tab s10 ultra") != -1 &&
    name.indexOf("5g") != -1 &&
    name.indexOf("12/1tb") != -1 &&
    name.indexOf("gray") != -1
  ) {
    return 36977;
  } else if (
    name.indexOf("tab s10 ultra") != -1 &&
    name.indexOf("5g") != -1 &&
    name.indexOf("12/1tb") != -1 &&
    name.indexOf("silver") != -1
  ) {
    return 36978;
  } else if (
    name.indexOf("tab s10 ultra") != -1 &&
    name.indexOf("wi-fi") != -1 &&
    name.indexOf("12/256") != -1 &&
    name.indexOf("gray") != -1
  ) {
    return 36967;
  } else if (
    name.indexOf("tab s10 ultra") != -1 &&
    name.indexOf("wi-fi") != -1 &&
    name.indexOf("12/256") != -1 &&
    name.indexOf("silver") != -1
  ) {
    return 36968;
  } else if (
    name.indexOf("tab s10 ultra") != -1 &&
    name.indexOf("wi-fi") != -1 &&
    name.indexOf("12/512") != -1 &&
    name.indexOf("gray") != -1
  ) {
    return 36969;
  } else if (
    name.indexOf("tab s10 ultra") != -1 &&
    name.indexOf("wi-fi") != -1 &&
    name.indexOf("12/512") != -1 &&
    name.indexOf("silver") != -1
  ) {
    return 36970;
  } else if (
    name.indexOf("tab s10 ultra") != -1 &&
    name.indexOf("wi-fi") != -1 &&
    name.indexOf("12/1tb") != -1 &&
    name.indexOf("gray") != -1
  ) {
    return 36971;
  } else if (
    name.indexOf("tab s10 ultra") != -1 &&
    name.indexOf("wi-fi") != -1 &&
    name.indexOf("12/1tb") != -1 &&
    name.indexOf("silver") != -1
  ) {
    return 36972;
  } else if (
    name.indexOf("tab s6 lite") != -1 &&
    name.indexOf("2022") != -1 &&
    name.indexOf("4/128") != -1 &&
    name.indexOf("blue") != -1
  ) {
    return 22825;
  } else if (
    name.indexOf("tab s6 lite") != -1 &&
    name.indexOf("2022") != -1 &&
    name.indexOf("4/128") != -1 &&
    name.indexOf("pink") != -1
  ) {
    return 22826;
  } else if (
    name.indexOf("tab s6 lite") != -1 &&
    name.indexOf("2022") != -1 &&
    name.indexOf("4/128") != -1 &&
    name.indexOf("gray") != -1
  ) {
    return 22827;
  } else if (
    name.indexOf("tab s6 lite") != -1 &&
    name.indexOf("2022") != -1 &&
    name.indexOf("4/64") != -1 &&
    name.indexOf("blue") != -1
  ) {
    return 22822;
  } else if (
    name.indexOf("tab s6 lite") != -1 &&
    name.indexOf("2022") != -1 &&
    name.indexOf("4/64") != -1 &&
    name.indexOf("pink") != -1
  ) {
    return 22824;

    // Watch
  } else if (name.indexOf("redmi watch 3 black") != -1) {
    return 26348;
  } else if (name.indexOf("redmi watch 3 white") != -1) {
    return 26349;
  } else if (name.indexOf("watch 4 40 black") != -1) {
    return 20537;
  } else if (
    name.indexOf("watch 4 40 pink") != -1 ||
    name.indexOf("watch 4 40 gold") != -1
  ) {
    return 20538;
  } else if (name.indexOf("watch 4 40 silver") != -1) {
    return 20539;
  } else if (name.indexOf("watch 4 44 black") != -1) {
    return 20528;
  } else if (name.indexOf("watch 4 44 green") != -1) {
    return 20535;
  } else if (name.indexOf("watch 4 44 silver") != -1) {
    return 20536;
  } else if (name.indexOf("watch 4 classic 42 black") != -1) {
    return 20541;
  } else if (name.indexOf("watch 4 classic 42 silver") != -1) {
    return 20540;
  } else if (name.indexOf("watch 4 classic 46 black") != -1) {
    return 20542;
  } else if (name.indexOf("watch 4 classic 46 silver") != -1) {
    return 20543;
  } else if (
    name.indexOf("galaxy watch 5 pro 45 black") != -1 ||
    name.indexOf("galaxy watch 5 pro 45 graphite") != -1
  ) {
    return 27921;
  } else if (name.indexOf("galaxy watch 5 pro 45 grey") != -1) {
    return 27917;
  } else if (
    name.indexOf("galaxy watch 6 40 graphite") != -1 ||
    name.indexOf("galaxy watch 6 40 black") != -1
  ) {
    return 27921;
  } else if (name.indexOf("galaxy watch 6 40 gold") != -1) {
    return 27922;
  } else if (
    name.indexOf("galaxy watch 6 44 graphite") != -1 ||
    name.indexOf("galaxy watch 6 44 black") != -1
  ) {
    return 27923;
  } else if (name.indexOf("galaxy watch 6 44 silver") != -1) {
    return 27924;
  } else if (
    name.indexOf("watch6 classic 43 graphite") != -1 ||
    name.indexOf("watch 6 classic 43 graphite") != -1 ||
    name.indexOf("watch 6 classic 43 black") != -1
  ) {
    return 27917;
  } else if (
    name.indexOf("watch6 classic 43 silver") != -1 ||
    name.indexOf("watch 6 classic 43 silver") != -1
  ) {
    return 27918;
  } else if (
    name.indexOf("watch6 classic 47 graphite") != -1 ||
    name.indexOf("watch 6 classic 47 graphite") != -1 ||
    name.indexOf("watch 6 classic 47 black") != -1
  ) {
    return 27920;
  } else if (name.indexOf("watch6 classic 47 silver") != -1) {
    return 27919;
  } else if (name.indexOf("watch 7 40") != -1 && name.indexOf("cream") != -1) {
    return 36526;
  } else if (name.indexOf("watch 7 40") != -1) {
    return 36528;
  } else if (name.indexOf("watch 7 40") != -1 && name.indexOf("silver") != -1) {
    return 36495;
  } else if (name.indexOf("watch 7 44") != -1 && name.indexOf("cream") != -1) {
    return 36527;
  } else if (name.indexOf("watch 7 44") != -1 && name.indexOf("green") != -1) {
    return 36529;
  } else if (name.indexOf("watch 7 44") != -1 && name.indexOf("silver") != -1) {
    return 36496;
  } else if (
    name.indexOf("watch ultra") != -1 &&
    name.indexOf("47") != -1 &&
    name.indexOf("silver") != -1
  ) {
    return 36497;
  } else if (
    name.indexOf("watch ultra") != -1 &&
    name.indexOf("47") != -1 &&
    name.indexOf("white") != -1
  ) {
    return 36530;
  } else if (
    name.indexOf("watch ultra") != -1 &&
    name.indexOf("47") != -1 &&
    name.indexOf("gray") != -1
  ) {
    return 36531;

    // Buds
  } else if (
    name.indexOf("buds 2 pro graphite") != -1 ||
    name.indexOf("buds pro 2 graphite") != -1 ||
    name.indexOf("buds 2 pro black") != -1
  ) {
    return 27358;
  } else if (
    name.indexOf("buds 2 pro purple") != -1 ||
    name.indexOf("buds pro 2 purple") != -1
  ) {
    return 27360;
  } else if (
    name.indexOf("buds 2 pro white") != -1 ||
    name.indexOf("buds pro 2 white") != -1
  ) {
    return 27359;
  } else if (name.indexOf("buds 2") != -1 && name.indexOf("black") != -1) {
    return 26585;
  } else if (name.indexOf("buds 2") != -1 && name.indexOf("graphite") != -1) {
    return 20560;
  } else if (name.indexOf("buds 2") != -1 && name.indexOf("lavender") != -1) {
    return 20564;
  } else if (name.indexOf("buds 2") != -1 && name.indexOf("olive") != -1) {
    return 20563;
  } else if (name.indexOf("buds 2") != -1 && name.indexOf("white") != -1) {
    return 20562;
  } else if (name.indexOf("buds 3 white") != -1) {
    return 36498;
  } else if (name.indexOf("buds 3 silver") != -1) {
    return 36532;
  } else if (name.indexOf("buds fe") != -1) {
    return 35689;
  } else if (name.indexOf("buds pro") != -1 && name.indexOf("black") != -1) {
    return 19098;
  } else if (name.indexOf("buds pro") != -1 && name.indexOf("silver") != -1) {
    return 19099;
  } else if (name.indexOf("buds pro") != -1 && name.indexOf("violet") != -1) {
    return 19097;
  } else if (name.indexOf("buds pro") != -1 && name.indexOf("white") != -1) {
    return 26586;
  } else {
    return returnIDXiaomi(name) || "No match";
  }
};
