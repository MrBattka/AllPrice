import { returnIDSamsung2 } from "./returnIDSamsung2";


export const returnIDSamsung = (nameStock) => {
  const removeDoubleSpace = nameStock.replace(/\s+/g, " ");
  const name = removeDoubleSpace.toLowerCase();

  if (
    name.indexOf("a05 4/128") !== -1 &&
    (name.indexOf("blue/black") !== -1 ||
      name.indexOf("black") !== -1 ||
      name.indexOf("dark") !== -1 ||
      name.indexOf("черный") !== -1)
  ) {
    return 30948;
  } else if (name.indexOf("a05 4/128") !== -1 && name.indexOf("green") !== -1) {
    return 30949;
  } else if (
    name.indexOf("a05 4/128") !== -1 &&
    name.indexOf("silver") !== -1
  ) {
    return 30950;
  } else if (
    name.indexOf("a05 4/64") !== -1 &&
    (name.indexOf("blue/black") !== -1 ||
      name.indexOf("black") !== -1 ||
      name.indexOf("dark") !== -1)
  ) {
    return 31006;
  } else if (name.indexOf("a05 4/64") !== -1 && name.indexOf("green") !== -1) {
    return 31007;
  } else if (name.indexOf("a05 4/64") !== -1 && name.indexOf("silver") !== -1) {
    return 31008;
  } else if (
    name.indexOf("a05 6/128") !== -1 &&
    (name.indexOf("blue/black") !== -1 ||
      name.indexOf("black") !== -1 ||
      name.indexOf("dark") !== -1)
  ) {
    return 30135;
  } else if (name.indexOf("a05 6/128") !== -1 && name.indexOf("green") !== -1) {
    return 30137;
  } else if (
    name.indexOf("a05 6/128") !== -1 &&
    name.indexOf("silver") !== -1
  ) {
    return 30136;
  } else if (
    name.indexOf("a05s 4/128") !== -1 &&
    (name.indexOf("blue/black") !== -1 ||
      name.indexOf("black") !== -1 ||
      name.indexOf("dark") !== -1)
  ) {
    return 30901;
  } else if (
    name.indexOf("a05s 4/128") !== -1 &&
    name.indexOf("green") !== -1
  ) {
    return 30902;
  } else if (
    name.indexOf("a05s 4/128") !== -1 &&
    name.indexOf("silver") !== -1
  ) {
    return 30903;
  } else if (
    name.indexOf("a05s 4/128") !== -1 &&
    name.indexOf("violet") !== -1
  ) {
    return 30904;
  } else if (
    name.indexOf("a05s 4/64") !== -1 &&
    (name.indexOf("blue/black") !== -1 ||
      name.indexOf("black") !== -1 ||
      name.indexOf("dark") !== -1)
  ) {
    return 31009;
  } else if (name.indexOf("a05s 4/64") !== -1 && name.indexOf("green") !== -1) {
    return 31010;
  } else if (
    name.indexOf("a05s 4/64") !== -1 &&
    name.indexOf("silver") !== -1
  ) {
    return 31011;
  } else if (
    name.indexOf("a05s 4/64") !== -1 &&
    name.indexOf("violet") !== -1
  ) {
    return 31012;
  } else if (
    name.indexOf("a05s 6/128") !== -1 &&
    (name.indexOf("blue/black") !== -1 ||
      name.indexOf("black") !== -1 ||
      name.indexOf("dark") !== -1)
  ) {
    return 30138;
  } else if (
    name.indexOf("a05s 6/128") !== -1 &&
    name.indexOf("green") !== -1
  ) {
    return 30140;
  } else if (
    name.indexOf("a05s 6/128") !== -1 &&
    name.indexOf("silver") !== -1
  ) {
    return 30139;
  } else if (
    name.indexOf("a05s 6/128") !== -1 &&
    name.indexOf("violet") !== -1
  ) {
    return 30141;
  } else if (name.indexOf("a06 4/128 black") !== -1) {
    return 36872;
  } else if (name.indexOf("a06 4/128 gold") !== -1) {
    return 36879;
  } else if (
    name.indexOf("a06 4/128 light blue") !== -1 ||
    name.indexOf("a06 4/128 blue") !== -1
  ) {
    return 36876;
  } else if (name.indexOf("a06 4/64 black") !== -1) {
    return 36873;
  } else if (name.indexOf("a06 4/64 gold") !== -1) {
    return 36880;
  } else if (name.indexOf("a06 4/64 light blue") !== -1) {
    return 36877;
  } else if (name.indexOf("a06 6/128 black") !== -1) {
    return 36875;
  } else if (name.indexOf("a06 6/128 gold") !== -1) {
    return 36881;
  } else if (
    name.indexOf("a06 6/128 light blue") !== -1 ||
    name.indexOf("a06 6/128 blue") !== -1
  ) {
    return 36878;
  } else if (
    name.indexOf("a15 4/128") !== -1 &&
    (name.indexOf("blue/black") !== -1 ||
      name.indexOf("black") !== -1 ||
      name.indexOf("dark") !== -1)
  ) {
    return 31076;
  } else if (
    name.indexOf("a15 4/128") !== -1 &&
    (name.indexOf("light blue") !== -1 || name.indexOf("white") !== -1)
  ) {
    return 31078;
  } else if (name.indexOf("a15 4/128") !== -1 && name.indexOf("blue") !== -1) {
    return 31079;
  } else if (
    name.indexOf("a15 4/128") !== -1 &&
    name.indexOf("yellow") !== -1
  ) {
    return 35697;
  } else if (
    name.indexOf("a15 6/128") !== -1 &&
    (name.indexOf("blue/black") !== -1 ||
      name.indexOf("black") !== -1 ||
      name.indexOf("dark") !== -1)
  ) {
    return 31080;
  } else if (
    name.indexOf("a15 6/128") !== -1 &&
    (name.indexOf("light blue") !== -1 || name.indexOf("white") !== -1)
  ) {
    return 31082;
  } else if (name.indexOf("a15 6/128") !== -1 && name.indexOf("blue") !== -1) {
    return 31083;
  } else if (
    name.indexOf("a15 6/128") !== -1 &&
    name.indexOf("yellow") !== -1
  ) {
    return 35698;
  } else if (
    name.indexOf("a15 8/128") !== -1 &&
    (name.indexOf("blue/black") !== -1 ||
      name.indexOf("black") !== -1 ||
      name.indexOf("dark") !== -1)
  ) {
    return 31084;
  } else if (
    name.indexOf("a15 8/128") !== -1 &&
    (name.indexOf("light blue") !== -1 || name.indexOf("white") !== -1)
  ) {
    return 31086;
  } else if (name.indexOf("a15 8/128") !== -1 && name.indexOf("blue") !== -1) {
    return 31087;
  } else if (
    name.indexOf("a15 8/128") !== -1 &&
    name.indexOf("yellow") !== -1
  ) {
    return 35699;
  } else if (
    name.indexOf("a15 8/256") !== -1 &&
    (name.indexOf("blue/black") !== -1 ||
      name.indexOf("black") !== -1 ||
      name.indexOf("dark") !== -1)
  ) {
    return 31088;
  } else if (
    name.indexOf("a15 8/256") !== -1 &&
    (name.indexOf("light blue") !== -1 || name.indexOf("white") !== -1)
  ) {
    return 31090;
  } else if (name.indexOf("a15 8/256") !== -1 && name.indexOf("blue") !== -1) {
    return 31091;
  } else if (
    name.indexOf("a15 8/256") !== -1 &&
    name.indexOf("yellow") !== -1
  ) {
    return 35704;
  } else if (
    name.indexOf("a16 4/128") !== -1 &&
    name.indexOf("gray") !== -1 &&
    name.indexOf("5g") === -1
  ) {
    return 37886;
  } else if (
    name.indexOf("a16 4/128") !== -1 &&
    (name.indexOf("a16 4/128 black") !== -1 ||
      name.indexOf("a16 4/128 midnight blue") !== -1) &&
    name.indexOf("5g") === -1
  ) {
    return 37887;
  } else if (
    name.indexOf("a16 4/128") !== -1 &&
    name.indexOf("green") !== -1 &&
    name.indexOf("5g") === -1
  ) {
    return 37888;
  } else if (
    name.indexOf("a16 4/256") !== -1 &&
    name.indexOf("gray") !== -1 &&
    name.indexOf("5g") === -1
  ) {
    return 37916;
  } else if (
    name.indexOf("a16 4/128") !== -1 &&
    (name.indexOf("a16 4/256 black") !== -1 ||
      name.indexOf("a16 4/256 midnight blue") !== -1) &&
    name.indexOf("5g") === -1
  ) {
    return 37917;
  } else if (
    name.indexOf("a16 4/256") !== -1 &&
    name.indexOf("green") !== -1 &&
    name.indexOf("5g") === -1
  ) {
    return 37918;
  } else if (
    name.indexOf("a16 4/128") !== -1 &&
    name.indexOf("blue black") !== -1 &&
    name.indexOf("5g") !== -1
  ) {
    return 36988;
  } else if (
    name.indexOf("a16 4/128") !== -1 &&
    name.indexOf("gold") !== -1 &&
    name.indexOf("5g") !== -1
  ) {
    return 36990;
  } else if (
    name.indexOf("a16 4/128") !== -1 &&
    name.indexOf("gray") !== -1 &&
    name.indexOf("5g") !== -1
  ) {
    return 36989;
  } else if (
    name.indexOf("a16 4/128") !== -1 &&
    name.indexOf("green") !== -1 &&
    name.indexOf("5g") !== -1
  ) {
    return 36991;
  } else if (
    name.indexOf("a16 6/128") !== -1 &&
    name.indexOf("blue black") !== -1 &&
    name.indexOf("5g") !== -1
  ) {
    return 37923;
  } else if (
    name.indexOf("a16 6/128") !== -1 &&
    name.indexOf("gold") !== -1 &&
    name.indexOf("5g") !== -1
  ) {
    return 37924;
  } else if (
    name.indexOf("a16 6/128") !== -1 &&
    name.indexOf("gray") !== -1 &&
    name.indexOf("5g") !== -1
  ) {
    return 37925;
  } else if (
    name.indexOf("a16 6/128") !== -1 &&
    name.indexOf("green") !== -1 &&
    name.indexOf("5g") !== -1
  ) {
    return 37926;
  } else if (
    name.indexOf("a16 8/128") !== -1 &&
    name.indexOf("blue black") !== -1 &&
    name.indexOf("5g") !== -1
  ) {
    return 37931;
  } else if (
    name.indexOf("a16 8/128") !== -1 &&
    name.indexOf("gold") !== -1 &&
    name.indexOf("5g") !== -1
  ) {
    return 37932;
  } else if (
    name.indexOf("a16 8/128") !== -1 &&
    name.indexOf("gray") !== -1 &&
    name.indexOf("5g") !== -1
  ) {
    return 37933;
  } else if (
    name.indexOf("a16 8/128") !== -1 &&
    name.indexOf("green") !== -1 &&
    name.indexOf("5g") !== -1
  ) {
    return 37934;
  } else if (
    name.indexOf("a16 8/256") !== -1 &&
    name.indexOf("blue black") !== -1 &&
    name.indexOf("5g") !== -1
  ) {
    return 36992;
  } else if (
    name.indexOf("a16 8/256") !== -1 &&
    name.indexOf("gold") !== -1 &&
    name.indexOf("5g") !== -1
  ) {
    return 36993;
  } else if (
    name.indexOf("a16 8/256") !== -1 &&
    name.indexOf("gray") !== -1 &&
    name.indexOf("5g") !== -1
  ) {
    return 36994;
  } else if (
    name.indexOf("a16 8/256") !== -1 &&
    name.indexOf("green") !== -1 &&
    name.indexOf("5g") !== -1
  ) {
    return 36995;
  } else if (
    name.indexOf("a16 6/128") !== -1 &&
    name.indexOf("gray") !== -1 &&
    name.indexOf("5g") === -1
  ) {
    return 37892;
  } else if (
    name.indexOf("a16 6/128") !== -1 &&
    (name.indexOf("midnight blue") !== -1 || name.indexOf("black") !== -1) &&
    name.indexOf("5g") === -1
  ) {
    return 37893;
  } else if (
    name.indexOf("a16 6/128") !== -1 &&
    name.indexOf("green") !== -1 &&
    name.indexOf("5g") === -1
  ) {
    return 37894;
  } else if (
    name.indexOf("a16 6/256") !== -1 &&
    name.indexOf("gray") !== -1 &&
    name.indexOf("5g") === -1
  ) {
    return 37910;
  } else if (
    name.indexOf("a16 6/256") !== -1 &&
    (name.indexOf("midnight blue") !== -1 || name.indexOf("black") !== -1) &&
    name.indexOf("5g") === -1
  ) {
    return 37911;
  } else if (
    name.indexOf("a16 6/256") !== -1 &&
    name.indexOf("green") !== -1 &&
    name.indexOf("5g") === -1
  ) {
    return 37912;
  } else if (
    name.indexOf("a16 8/128") !== -1 &&
    name.indexOf("gray") !== -1 &&
    name.indexOf("5g") === -1
  ) {
    return 37898;
  } else if (
    name.indexOf("a16 8/128") !== -1 &&
    (name.indexOf("midnight blue") !== -1 || name.indexOf("black") !== -1) &&
    name.indexOf("5g") === -1
  ) {
    return 37899;
  } else if (
    name.indexOf("a16 8/128") !== -1 &&
    name.indexOf("green") !== -1 &&
    name.indexOf("5g") === -1
  ) {
    return 37900;
  } else if (
    name.indexOf("a16 8/256") !== -1 &&
    name.indexOf("gray") !== -1 &&
    name.indexOf("5g") === -1
  ) {
    return 37904;
  } else if (
    name.indexOf("a16 8/256") !== -1 &&
    (name.indexOf("midnight blue") !== -1 || name.indexOf("black") !== -1) &&
    name.indexOf("5g") === -1
  ) {
    return 37905;
  } else if (
    name.indexOf("a16 8/256") !== -1 &&
    name.indexOf("green") !== -1 &&
    name.indexOf("5g") === -1
  ) {
    return 37906;
  } else if (
    name.indexOf("a24 4/128") !== -1 &&
    (name.indexOf("blue/black") !== -1 ||
      name.indexOf("black") !== -1 ||
      name.indexOf("dark") !== -1 ||
      name.indexOf("черный") !== -1)
  ) {
    return 28214;
  } else if (name.indexOf("a24 4/128") !== -1 && name.indexOf("blue") !== -1) {
    return 28215;
  } else if (name.indexOf("a24 4/128") !== -1 && name.indexOf("red") !== -1) {
    return 28216;
  } else if (
    name.indexOf("a24 4/128") !== -1 &&
    (name.indexOf("lime") !== -1 || name.indexOf("green") !== -1)
  ) {
    return 28217;
  } else if (
    name.indexOf("a24 6/128") !== -1 &&
    (name.indexOf("blue/black") !== -1 ||
      name.indexOf("black") !== -1 ||
      name.indexOf("dark") !== -1)
  ) {
    return 27805;
  } else if (name.indexOf("a24 6/128") !== -1 && name.indexOf("blue") !== -1) {
    return 27808;
  } else if (name.indexOf("a24 6/128") !== -1 && name.indexOf("red") !== -1) {
    return 27810;
  } else if (
    name.indexOf("a24 6/128") !== -1 &&
    (name.indexOf("lime") !== -1 || name.indexOf("green") !== -1)
  ) {
    return 27806;
  } else if (
    name.indexOf("a24 8/128") !== -1 &&
    (name.indexOf("blue/black") !== -1 ||
      name.indexOf("black") !== -1 ||
      name.indexOf("dark") !== -1)
  ) {
    return 27804;
  } else if (name.indexOf("a24 8/128") !== -1 && name.indexOf("blue") !== -1) {
    return 27809;
  } else if (name.indexOf("a24 8/128") !== -1 && name.indexOf("red") !== -1) {
    return 27811;
  } else if (
    name.indexOf("a24 8/128") !== -1 &&
    (name.indexOf("lime") !== -1 || name.indexOf("green") !== -1)
  ) {
    return 27807;
  } else if (
    name.indexOf("a25 6/128") !== -1 &&
    (name.indexOf("blue/black") !== -1 ||
      name.indexOf("black") !== -1 ||
      name.indexOf("dark") !== -1)
  ) {
    return 31092;
  } else if (name.indexOf("a25 6/128") !== -1 && name.indexOf("blue") !== -1) {
    return 31094;
  } else if (
    name.indexOf("a25 6/128") !== -1 &&
    (name.indexOf("light blue") !== -1 || name.indexOf("silver") !== -1)
  ) {
    return 35705;
  } else if (
    name.indexOf("a25 6/128") !== -1 &&
    name.indexOf("yellow") !== -1
  ) {
    return 31093;
  } else if (
    name.indexOf("a25 8/128") !== -1 &&
    (name.indexOf("blue/black") !== -1 ||
      name.indexOf("black") !== -1 ||
      name.indexOf("dark") !== -1)
  ) {
    return 31096;
  } else if (name.indexOf("a25 8/128") !== -1 && name.indexOf("blue") !== -1) {
    return 31098;
  } else if (
    name.indexOf("a25 8/128") !== -1 &&
    (name.indexOf("light blue") !== -1 || name.indexOf("silver") !== -1)
  ) {
    return 35706;
  } else if (
    name.indexOf("a25 8/128") !== -1 &&
    name.indexOf("yellow") !== -1
  ) {
    return 31097;
  } else if (
    name.indexOf("a25 8/256") !== -1 &&
    (name.indexOf("blue/black") !== -1 ||
      name.indexOf("black") !== -1 ||
      name.indexOf("dark") !== -1 ||
      name.indexOf("темно-синий") !== -1)
  ) {
    return 31100;
  } else if (name.indexOf("a25 8/256") !== -1 && name.indexOf("blue") !== -1) {
    return 31102;
  } else if (
    name.indexOf("a25 8/256") !== -1 &&
    (name.indexOf("light blue") !== -1 || name.indexOf("silver") !== -1)
  ) {
    return 35707;
  } else if (
    name.indexOf("a25 8/256") !== -1 &&
    name.indexOf("yellow") !== -1
  ) {
    return 31101;
  } else if (name.indexOf("a26 6/128") !== -1 && name.indexOf("black") !== -1) {
    return 38424;
  } else if (name.indexOf("a26 6/128") !== -1 && name.indexOf("mint") !== -1) {
    return 38425;
  } else if (name.indexOf("a26 6/128") !== -1 && name.indexOf("pink") !== -1) {
    return 38426;
  } else if (name.indexOf("a26 6/128") !== -1 && name.indexOf("white") !== -1) {
    return 38427;
  } else if (name.indexOf("a26 8/128") !== -1 && name.indexOf("black") !== -1) {
    return 38432;
  } else if (name.indexOf("a26 8/128") !== -1 && name.indexOf("mint") !== -1) {
    return 38433;
  } else if (name.indexOf("a26 8/128") !== -1 && name.indexOf("pink") !== -1) {
    return 38434;
  } else if (name.indexOf("a26 8/128") !== -1 && name.indexOf("white") !== -1) {
    return 38435;
  } else if (name.indexOf("a26 8/256") !== -1 && name.indexOf("black") !== -1) {
    return 38440;
  } else if (name.indexOf("a26 8/256") !== -1 && name.indexOf("mint") !== -1) {
    return 38441;
  } else if (name.indexOf("a26 8/256") !== -1 && name.indexOf("pink") !== -1) {
    return 38442;
  } else if (name.indexOf("a26 8/256") !== -1 && name.indexOf("white") !== -1) {
    return 38443;
  } else if (
    name.indexOf("a36 12/256") !== -1 &&
    name.indexOf("black") !== -1
  ) {
    return 38417;
  } else if (
    name.indexOf("a36 12/256") !== -1 &&
    (name.indexOf("lavender") !== -1 || name.indexOf("purple") !== -1)
  ) {
    return 38418;
  } else if (name.indexOf("a36 12/256") !== -1 && name.indexOf("lime") !== -1) {
    return 38419;
  } else if (
    name.indexOf("a36 12/256") !== -1 &&
    name.indexOf("white") !== -1
  ) {
    return 38420;
  } else if (name.indexOf("a36 6/128") !== -1 && name.indexOf("black") !== -1) {
    return 38393;
  } else if (
    name.indexOf("a36 6/128") !== -1 &&
    (name.indexOf("lavender") !== -1 || name.indexOf("purple") !== -1)
  ) {
    return 38394;
  } else if (name.indexOf("a36 6/128") !== -1 && name.indexOf("lime") !== -1) {
    return 38395;
  } else if (name.indexOf("a36 6/128") !== -1 && name.indexOf("white") !== -1) {
    return 38396;
  } else if (name.indexOf("a36 8/128") !== -1 && name.indexOf("black") !== -1) {
    return 38401;
  } else if (
    name.indexOf("a36 8/128") !== -1 &&
    (name.indexOf("lavender") !== -1 || name.indexOf("purple") !== -1)
  ) {
    return 38402;
  } else if (name.indexOf("a36 8/128") !== -1 && name.indexOf("lime") !== -1) {
    return 38403;
  } else if (name.indexOf("a36 8/128") !== -1 && name.indexOf("white") !== -1) {
    return 38404;
  } else if (name.indexOf("a36 8/256") !== -1 && name.indexOf("black") !== -1) {
    return 38409;
  } else if (
    name.indexOf("a36 8/256") !== -1 &&
    (name.indexOf("lavender") !== -1 || name.indexOf("purple") !== -1)
  ) {
    return 38410;
  } else if (name.indexOf("a36 8/256") !== -1 && name.indexOf("lime") !== -1) {
    return 38411;
  } else if (name.indexOf("a36 8/256") !== -1 && name.indexOf("white") !== -1) {
    return 38412;
  } else if (
    name.indexOf("a56 12/256") !== -1 &&
    (name.indexOf("graphite") !== -1 || name.indexOf("black") !== -1)
  ) {
    return 38386;
  } else if (name.indexOf("a56 12/256") !== -1 && name.indexOf("gray") !== -1) {
    return 38387;
  } else if (
    name.indexOf("a56 12/256") !== -1 &&
    name.indexOf("olive") !== -1
  ) {
    return 38388;
  } else if (name.indexOf("a56 12/256") !== -1 && name.indexOf("pink") !== -1) {
    return 38389;
  } else if (
    name.indexOf("a56 8/128") !== -1 &&
    (name.indexOf("graphite") !== -1 || name.indexOf("black") !== -1)
  ) {
    return 38370;
  } else if (name.indexOf("a56 8/128") !== -1 && name.indexOf("gray") !== -1) {
    return 38371;
  } else if (name.indexOf("a56 8/128") !== -1 && name.indexOf("olive") !== -1) {
    return 38372;
  } else if (name.indexOf("a56 8/128") !== -1 && name.indexOf("pink") !== -1) {
    return 38369;
  } else if (
    name.indexOf("a56 8/256") !== -1 &&
    (name.indexOf("graphite") !== -1 || name.indexOf("black") !== -1)
  ) {
    return 38378;
  } else if (name.indexOf("a56 8/256") !== -1 && name.indexOf("gray") !== -1) {
    return 38379;
  } else if (name.indexOf("a56 8/256") !== -1 && name.indexOf("olive") !== -1) {
    return 38380;
  } else if (name.indexOf("a56 8/256") !== -1 && name.indexOf("pink") !== -1) {
    return 38381;
  } else if (
    name.indexOf("a34 6/128") !== -1 &&
    name.indexOf("graphite") !== -1
  ) {
    return 27195;
  } else if (
    name.indexOf("a34 6/128") !== -1 &&
    (name.indexOf("lime") !== -1 ||
      name.indexOf("lime") !== -1 ||
      name.indexOf("yellow") !== -1)
  ) {
    return 27198;
  } else if (
    name.indexOf("a34 6/128") !== -1 &&
    name.indexOf("silver") !== -1
  ) {
    return 27201;
  } else if (
    name.indexOf("a34 6/128") !== -1 &&
    name.indexOf("violet") !== -1
  ) {
    return 27204;
  } else if (
    name.indexOf("a34 8/128") !== -1 &&
    name.indexOf("graphite") !== -1
  ) {
    return 27197;
  } else if (
    name.indexOf("a34 8/128") !== -1 &&
    (name.indexOf("lime") !== -1 ||
      name.indexOf("lime") !== -1 ||
      name.indexOf("yellow") !== -1)
  ) {
    return 27199;
  } else if (
    name.indexOf("a34 8/128") !== -1 &&
    name.indexOf("silver") !== -1
  ) {
    return 27202;
  } else if (
    name.indexOf("a34 8/128") !== -1 &&
    name.indexOf("violet") !== -1
  ) {
    return 27205;
  } else if (
    name.indexOf("a34 8/256") !== -1 &&
    name.indexOf("graphite") !== -1
  ) {
    return 27196;
  } else if (
    name.indexOf("a34 8/256") !== -1 &&
    (name.indexOf("lime") !== -1 ||
      name.indexOf("lime") !== -1 ||
      name.indexOf("yellow") !== -1)
  ) {
    return 27200;
  } else if (
    name.indexOf("a34 8/256") !== -1 &&
    name.indexOf("silver") !== -1
  ) {
    return 27203;
  } else if (
    name.indexOf("a34 8/256") !== -1 &&
    name.indexOf("violet") !== -1
  ) {
    return 27206;
  } else if (
    name.indexOf("a35 6/128") !== -1 &&
    (name.indexOf("iceblue") !== -1 ||
      name.indexOf("blue") !== -1 ||
      name.indexOf("blue") !== -1)
  ) {
    return 35917;
  } else if (name.indexOf("a35 6/128") !== -1 && name.indexOf("lilac") !== -1) {
    return 35914;
  } else if (
    name.indexOf("a35 6/128") !== -1 &&
    (name.indexOf("navy") !== -1 ||
      name.indexOf("black") !== -1 ||
      name.indexOf("navy") !== -1 ||
      name.indexOf("dark") !== -1)
  ) {
    return 35912;
  } else if (
    name.indexOf("a35 6/128") !== -1 &&
    (name.indexOf("lemon") !== -1 ||
      name.indexOf("lime") !== -1 ||
      name.indexOf("yellow") !== -1)
  ) {
    return 35920;
  } else if (name.indexOf("a35 8/128") !== -1 && name.indexOf("blue") !== -1) {
    return 35918;
  } else if (name.indexOf("a35 8/128") !== -1 && name.indexOf("lilac") !== -1) {
    return 35915;
  } else if (
    name.indexOf("a35 8/128") !== -1 &&
    (name.indexOf("navy") !== -1 ||
      name.indexOf("black") !== -1 ||
      name.indexOf("dark") !== -1)
  ) {
    return 35911;
  } else if (
    name.indexOf("a35 8/128") !== -1 &&
    (name.indexOf("lemon") !== -1 ||
      name.indexOf("lime") !== -1 ||
      name.indexOf("yellow") !== -1)
  ) {
    return 35921;
  } else if (
    name.indexOf("a35 8/256") !== -1 &&
    (name.indexOf("iceblue") !== -1 || name.indexOf("blue") !== -1)
  ) {
    return 35919;
  } else if (name.indexOf("a35 8/256") !== -1 && name.indexOf("lilac") !== -1) {
    return 35916;
  } else if (
    name.indexOf("a35 8/256") !== -1 &&
    (name.indexOf("navy") !== -1 ||
      name.indexOf("black") !== -1 ||
      name.indexOf("dark") !== -1)
  ) {
    return 35913;
  } else if (
    name.indexOf("a35 8/256") !== -1 &&
    (name.indexOf("lemon") !== -1 ||
      name.indexOf("lime") !== -1 ||
      name.indexOf("yellow") !== -1)
  ) {
    return 35922;
  } else if (name.indexOf("a53 6/128") !== -1 && name.indexOf("black") !== -1) {
    return 22587;
  } else if (name.indexOf("a53 6/128") !== -1 && name.indexOf("blue") !== -1) {
    return 22588;
  } else if (name.indexOf("a53 6/128") !== -1 && name.indexOf("peach") !== -1) {
    return 22589;
  } else if (name.indexOf("a53 6/128") !== -1 && name.indexOf("white") !== -1) {
    return 22590;
  } else if (
    name.indexOf("a54 6/128") !== -1 &&
    (name.indexOf("graphite") !== -1 || name.indexOf("black") !== -1)
  ) {
    return 27226;
  } else if (
    name.indexOf("a54 6/128") !== -1 &&
    (name.indexOf("lime") !== -1 ||
      name.indexOf("lime") !== -1 ||
      name.indexOf("yellow") !== -1)
  ) {
    return 27223;
  } else if (
    name.indexOf("a54 6/128") !== -1 &&
    name.indexOf("violet") !== -1
  ) {
    return 27229;
  } else if (name.indexOf("a54 6/128") !== -1 && name.indexOf("white") !== -1) {
    return 27232;
  } else if (
    name.indexOf("a54 8/128") !== -1 &&
    (name.indexOf("graphite") !== -1 || name.indexOf("black") !== -1)
  ) {
    return 27227;
  } else if (
    name.indexOf("a54 8/128") !== -1 &&
    (name.indexOf("lime") !== -1 ||
      name.indexOf("lime") !== -1 ||
      name.indexOf("yellow") !== -1)
  ) {
    return 27224;
  } else if (
    name.indexOf("a54 8/128") !== -1 &&
    name.indexOf("violet") !== -1
  ) {
    return 27230;
  } else if (name.indexOf("a54 8/128") !== -1 && name.indexOf("white") !== -1) {
    return 27233;
  } else if (
    name.indexOf("a54 8/256") !== -1 &&
    (name.indexOf("graphite") !== -1 || name.indexOf("black") !== -1)
  ) {
    return 27228;
  } else if (
    name.indexOf("a54 8/256") !== -1 &&
    (name.indexOf("lime") !== -1 ||
      name.indexOf("lime") !== -1 ||
      name.indexOf("yellow") !== -1)
  ) {
    return 27225;
  } else if (
    name.indexOf("a54 8/256") !== -1 &&
    name.indexOf("violet") !== -1
  ) {
    return 27231;
  } else if (name.indexOf("a54 8/256") !== -1 && name.indexOf("white") !== -1) {
    return 27234;
  } else if (
    name.indexOf("a55 12/256") !== -1 &&
    (name.indexOf("iceblue") !== -1 || name.indexOf("blue") !== -1)
  ) {
    return 35929;
  } else if (
    name.indexOf("a55 ") !== -1 &&
    name.indexOf("12/256") !== -1 &&
    (name.indexOf("lemon") !== -1 ||
      name.indexOf("lime") !== -1 ||
      name.indexOf("yellow") !== -1)
  ) {
    return 35932;
  } else if (
    name.indexOf("a55 12/256") !== -1 &&
    (name.indexOf("lilac") !== -1 ||
      name.indexOf("violet") !== -1 ||
      name.indexOf("lavender") !== -1)
  ) {
    return 35926;
  } else if (
    name.indexOf("a55 12/256") !== -1 &&
    (name.indexOf("navy") !== -1 || name.indexOf("black") !== -1)
  ) {
    return 35925;
  } else if (
    name.indexOf("a55 8/128") !== -1 &&
    (name.indexOf("iceblue") !== -1 || name.indexOf("blue") !== -1)
  ) {
    return 35930;
  } else if (
    name.indexOf("a55 8/128") !== -1 &&
    (name.indexOf("lemon") !== -1 ||
      name.indexOf("lime") !== -1 ||
      name.indexOf("yellow") !== -1)
  ) {
    return 35933;
  } else if (
    name.indexOf("a55 8/128") !== -1 &&
    (name.indexOf("lilac") !== -1 ||
      name.indexOf("violet") !== -1 ||
      name.indexOf("lavender") !== -1)
  ) {
    return 35927;
  } else if (
    name.indexOf("a55 8/128") !== -1 &&
    (name.indexOf("navy") !== -1 ||
      name.indexOf("black") !== -1 ||
      name.indexOf("темно-синий") !== -1)
  ) {
    return 35923;
  } else if (
    name.indexOf("a55 8/256") !== -1 &&
    (name.indexOf("iceblue") !== -1 || name.indexOf("blue") !== -1)
  ) {
    return 35931;
  } else if (
    name.indexOf("a55 8/256") !== -1 &&
    (name.indexOf("lemon") !== -1 ||
      name.indexOf("lime") !== -1 ||
      name.indexOf("yellow") !== -1)
  ) {
    return 35934;
  } else if (
    name.indexOf("a55 8/256") !== -1 &&
    (name.indexOf("lilac") !== -1 ||
      name.indexOf("violet") !== -1 ||
      name.indexOf("lavender") !== -1)
  ) {
    return 35928;
  } else if (
    name.indexOf("a55 8/256") !== -1 &&
    (name.indexOf("navy") !== -1 || name.indexOf("black") !== -1)
  ) {
    return 35924;
  } else if (name.indexOf("f15 4/128") !== -1 && name.indexOf("black") !== -1) {
    return 37936;
  } else if (
    name.indexOf("f15 4/128") !== -1 &&
    name.indexOf("violet") !== -1
  ) {
    return 37956;
  } else if (name.indexOf("f15 4/128") !== -1 && name.indexOf("green") !== -1) {
    return 37957;
  } else if (name.indexOf("f15 6/128") !== -1 && name.indexOf("black") !== -1) {
    return 37961;
  } else if (
    name.indexOf("f15 6/128") !== -1 &&
    name.indexOf("violet") !== -1
  ) {
    return 37962;
  } else if (name.indexOf("f15 6/128") !== -1 && name.indexOf("green") !== -1) {
    return 37963;
  } else if (name.indexOf("f15 8/128") !== -1 && name.indexOf("black") !== -1) {
    return 37967;
  } else if (
    name.indexOf("f15 8/128") !== -1 &&
    name.indexOf("violet") !== -1
  ) {
    return 37968;
  } else if (name.indexOf("f15 8/128") !== -1 && name.indexOf("green") !== -1) {
    return 37969;
  } else if (name.indexOf("f55 8/256 black") !== -1) {
    return 37938;
  } else if (name.indexOf("f55 8/256 apricot") !== -1) {
    return 37945;
  } else if (name.indexOf("f55 12/256 apricot") !== -1) {
    return 37948;
  } else if (name.indexOf("f55 12/256 black") !== -1) {
    return 37949;
  } else if (name.indexOf("f55 8/128 apricot") !== -1) {
    return 37952;
  } else if (name.indexOf("f55 8/128 black") !== -1) {
    return 37953;
  } else if (name.indexOf("m15 4/128 dark blue") !== -1) {
    return 37978;
  } else if (name.indexOf("m15 4/128 light blue") !== -1) {
    return 37979;
  } else if (name.indexOf("m15 4/128 silver") !== -1) {
    return 37980;
  } else if (name.indexOf("m15 6/128 dark blue") !== -1) {
    return 37984;
  } else if (name.indexOf("m15 6/128 light blue") !== -1) {
    return 37985;
  } else if (name.indexOf("m15 6/128 silver") !== -1) {
    return 37986;
  } else if (name.indexOf("m15 8/128 dark blue") !== -1) {
    return 37990;
  } else if (name.indexOf("m15 8/128 light blue") !== -1) {
    return 37991;
  } else if (name.indexOf("m15 8/128 silver") !== -1) {
    return 37992;
  } else if (name.indexOf("m15 8/256 dark blue") !== -1) {
    return 37996;
  } else if (name.indexOf("m15 8/256 light blue") !== -1) {
    return 37997;
  } else if (name.indexOf("m15 8/256 silver") !== -1) {
    return 37998;
  } else if (name.indexOf("m35 6/128 dark blue") !== -1) {
    return 38269;
  } else if (name.indexOf("m35 6/128 light blue") !== -1) {
    return 38270;
  } else if (name.indexOf("m35 6/128 gray") !== -1) {
    return 38275;
  } else if (name.indexOf("m35 8/128 light blue") !== -1) {
    return 38281;
  } else if (name.indexOf("m35 8/128 dark blue") !== -1) {
    return 38279;
  } else if (name.indexOf("m35 8/128 gray") !== -1) {
    return 38280;
  } else if (name.indexOf("m35 8/256 dark blue") !== -1) {
    return 38285;
  } else if (name.indexOf("m35 8/256 light blue") !== -1) {
    return 38287;
  } else if (name.indexOf("m35 8/256 gray") !== -1) {
    return 38286;
  } else if (name.indexOf("m55s 8/128 green") !== -1) {
    return 37943;
  } else if (
    name.indexOf("m55s 8/128") !== -1 &&
    name.indexOf("black") !== -1
  ) {
    return 37971;
  } else if (name.indexOf("m55s 8/256 green") !== -1) {
    return 37974;
  } else if (
    name.indexOf("m55s 8/256") !== -1 &&
    name.indexOf("black") !== -1
  ) {
    return 37975;
  } else if (
    name.indexOf("s22 ultra") !== -1 &&
    name.indexOf("12/1tb") !== -1 &&
    name.indexOf("burgundy") !== -1
  ) {
    return 21905;
  } else if (
    name.indexOf("s22 ultra") !== -1 &&
    name.indexOf("12/1tb") !== -1 &&
    name.indexOf("graphite") !== -1
  ) {
    return 21906;
  } else if (
    name.indexOf("s22 ultra") !== -1 &&
    name.indexOf("12/1tb") !== -1 &&
    name.indexOf("green") !== -1
  ) {
    return 21907;
  } else if (
    name.indexOf("s22 ultra") !== -1 &&
    name.indexOf("12/1tb") !== -1 &&
    name.indexOf("black") !== -1
  ) {
    return 21908;
  } else if (
    name.indexOf("s22 ultra") !== -1 &&
    name.indexOf("12/1tb") !== -1 &&
    name.indexOf("red") !== -1
  ) {
    return 21909;
  } else if (
    name.indexOf("s22 ultra") !== -1 &&
    name.indexOf("12/1tb") !== -1 &&
    name.indexOf("blue") !== -1
  ) {
    return 21910;
  } else if (
    name.indexOf("s22 ultra") !== -1 &&
    name.indexOf("12/1tb") !== -1 &&
    name.indexOf("white") !== -1
  ) {
    return 21911;
  } else if (
    name.indexOf("s22 ultra") !== -1 &&
    name.indexOf("12/256") !== -1 &&
    name.indexOf("burgundy") !== -1
  ) {
    return 21888;
  } else if (
    name.indexOf("s22 ultra") !== -1 &&
    name.indexOf("12/256") !== -1 &&
    name.indexOf("graphite") !== -1
  ) {
    return 21892;
  } else if (
    name.indexOf("s22 ultra") !== -1 &&
    name.indexOf("12/256") !== -1 &&
    name.indexOf("green") !== -1
  ) {
    return 21893;
  } else if (
    name.indexOf("s22 ultra") !== -1 &&
    name.indexOf("12/256") !== -1 &&
    name.indexOf("black") !== -1
  ) {
    return 21895;
  } else if (
    name.indexOf("s22 ultra") !== -1 &&
    name.indexOf("12/256") !== -1 &&
    name.indexOf("red") !== -1
  ) {
    return 21896;
  } else if (
    name.indexOf("s22 ultra") !== -1 &&
    name.indexOf("12/256") !== -1 &&
    name.indexOf("blue") !== -1
  ) {
    return 21894;
  } else if (
    name.indexOf("s22 ultra") !== -1 &&
    name.indexOf("12/256") !== -1 &&
    name.indexOf("white") !== -1
  ) {
    return 21897;
  } else if (
    name.indexOf("s22 ultra") !== -1 &&
    name.indexOf("12/512") !== -1 &&
    name.indexOf("burgundy") !== -1
  ) {
    return 21898;
  } else if (
    name.indexOf("s22 ultra") !== -1 &&
    name.indexOf("12/512") !== -1 &&
    name.indexOf("graphite") !== -1
  ) {
    return 21899;
  } else if (
    name.indexOf("s22 ultra") !== -1 &&
    name.indexOf("12/512") !== -1 &&
    name.indexOf("green") !== -1
  ) {
    return 21900;
  } else if (
    name.indexOf("s22 ultra") !== -1 &&
    name.indexOf("12/512") !== -1 &&
    name.indexOf("black") !== -1
  ) {
    return 21901;
  } else if (
    name.indexOf("s22 ultra") !== -1 &&
    name.indexOf("12/512") !== -1 &&
    name.indexOf("red") !== -1
  ) {
    return 21902;
  } else if (
    name.indexOf("s22 ultra") !== -1 &&
    name.indexOf("12/512") !== -1 &&
    name.indexOf("blue") !== -1
  ) {
    return 21903;
  } else if (
    name.indexOf("s22 ultra") !== -1 &&
    name.indexOf("12/512") !== -1 &&
    name.indexOf("white") !== -1
  ) {
    return 21904;
  } else if (
    name.indexOf("s22 ultra") !== -1 &&
    name.indexOf("8/128") !== -1 &&
    name.indexOf("burgundy") !== -1
  ) {
    return 21891;
  } else if (
    name.indexOf("s22 ultra") !== -1 &&
    name.indexOf("8/128") !== -1 &&
    name.indexOf("graphite") !== -1
  ) {
    return 21889;
  } else if (
    name.indexOf("s22 ultra") !== -1 &&
    name.indexOf("8/128") !== -1 &&
    name.indexOf("green") !== -1
  ) {
    return 21890;
  } else if (
    name.indexOf("s22 ultra") !== -1 &&
    name.indexOf("8/128") !== -1 &&
    name.indexOf("black") !== -1
  ) {
    return 21883;
  } else if (
    name.indexOf("s22 ultra") !== -1 &&
    name.indexOf("8/128") !== -1 &&
    name.indexOf("red") !== -1
  ) {
    return 21886;
  } else if (
    name.indexOf("s22 ultra") !== -1 &&
    name.indexOf("8/128") !== -1 &&
    name.indexOf("blue") !== -1
  ) {
    return 21885;
  } else if (
    name.indexOf("s22 ultra") !== -1 &&
    name.indexOf("8/128") !== -1 &&
    name.indexOf("white") !== -1
  ) {
    return 21887;
  } else if (
    name.indexOf("s22+ ") !== -1 &&
    name.indexOf("8/128") !== -1 &&
    name.indexOf("cream") !== -1
  ) {
    return 21867;
  } else if (
    name.indexOf("s22+ ") !== -1 &&
    name.indexOf("8/128") !== -1 &&
    name.indexOf("graphite") !== -1
  ) {
    return 21868;
  } else if (
    name.indexOf("s22+ ") !== -1 &&
    name.indexOf("8/128") !== -1 &&
    name.indexOf("green") !== -1
  ) {
    return 21869;
  } else if (
    name.indexOf("s22+ ") !== -1 &&
    name.indexOf("8/128") !== -1 &&
    name.indexOf("black") !== -1
  ) {
    return 21866;
  } else if (
    name.indexOf("s22+ ") !== -1 &&
    name.indexOf("8/128") !== -1 &&
    name.indexOf("pink") !== -1
  ) {
    return 21874;
  } else if (
    name.indexOf("s22+ ") !== -1 &&
    name.indexOf("8/128") !== -1 &&
    name.indexOf("blue") !== -1
  ) {
    return 21871;
  } else if (
    name.indexOf("s22+ ") !== -1 &&
    name.indexOf("8/128") !== -1 &&
    name.indexOf("violet") !== -1
  ) {
    return 21872;
  } else if (
    name.indexOf("s22+ ") !== -1 &&
    name.indexOf("8/128") !== -1 &&
    name.indexOf("white") !== -1
  ) {
    return 21882;
  } else if (
    name.indexOf("s22+ ") !== -1 &&
    name.indexOf("8/256") !== -1 &&
    name.indexOf("cream") !== -1
  ) {
    return 21875;
  } else if (
    name.indexOf("s22+ ") !== -1 &&
    name.indexOf("8/256") !== -1 &&
    name.indexOf("graphite") !== -1
  ) {
    return 21876;
  } else if (
    name.indexOf("s22+ ") !== -1 &&
    name.indexOf("8/256") !== -1 &&
    name.indexOf("green") !== -1
  ) {
    return 21877;
  } else if (
    name.indexOf("s22+ ") !== -1 &&
    name.indexOf("8/256") !== -1 &&
    name.indexOf("black") !== -1
  ) {
    return 21878;
  } else if (
    name.indexOf("s22+ ") !== -1 &&
    name.indexOf("8/256") !== -1 &&
    name.indexOf("pink") !== -1
  ) {
    return 21879;
  } else if (
    name.indexOf("s22+ ") !== -1 &&
    name.indexOf("8/256") !== -1 &&
    name.indexOf("blue") !== -1
  ) {
    return 21880;
  } else if (
    name.indexOf("s22+ ") !== -1 &&
    name.indexOf("8/256") !== -1 &&
    name.indexOf("violet") !== -1
  ) {
    return 21881;
  } else if (
    name.indexOf("s22+ ") !== -1 &&
    name.indexOf("8/256") !== -1 &&
    name.indexOf("white") !== -1
  ) {
    return 21873;
  } else if (
    name.indexOf("s22 ") !== -1 &&
    name.indexOf("8/128") !== -1 &&
    name.indexOf("cream") !== -1
  ) {
    return 21857;
  } else if (
    name.indexOf("s22 ") !== -1 &&
    name.indexOf("8/128") !== -1 &&
    name.indexOf("graphite") !== -1
  ) {
    return 21854;
  } else if (
    name.indexOf("s22 ") !== -1 &&
    name.indexOf("8/128") !== -1 &&
    name.indexOf("green") !== -1
  ) {
    return 21853;
  } else if (
    name.indexOf("s22 ") !== -1 &&
    name.indexOf("8/128") !== -1 &&
    name.indexOf("black") !== -1
  ) {
    return 21850;
  } else if (
    name.indexOf("s22 ") !== -1 &&
    name.indexOf("8/128") !== -1 &&
    name.indexOf("pink") !== -1
  ) {
    return 21852;
  } else if (
    name.indexOf("s22 ") !== -1 &&
    name.indexOf("8/128") !== -1 &&
    name.indexOf("blue") !== -1
  ) {
    return 21855;
  } else if (
    name.indexOf("s22 ") !== -1 &&
    name.indexOf("8/128") !== -1 &&
    name.indexOf("violet") !== -1
  ) {
    return 21856;
  } else if (
    name.indexOf("s22 ") !== -1 &&
    name.indexOf("8/128") !== -1 &&
    name.indexOf("white") !== -1
  ) {
    return 21851;
  } else if (
    name.indexOf("s22 ") !== -1 &&
    name.indexOf("8/256") !== -1 &&
    name.indexOf("cream") !== -1
  ) {
    return 21858;
  } else if (
    name.indexOf("s22 ") !== -1 &&
    name.indexOf("8/256") !== -1 &&
    name.indexOf("graphite") !== -1
  ) {
    return 21859;
  } else if (
    name.indexOf("s22 ") !== -1 &&
    name.indexOf("8/256") !== -1 &&
    name.indexOf("green") !== -1
  ) {
    return 21860;
  } else if (
    name.indexOf("s22 ") !== -1 &&
    name.indexOf("8/256") !== -1 &&
    name.indexOf("black") !== -1
  ) {
    return 21861;
  } else if (
    name.indexOf("s22 ") !== -1 &&
    name.indexOf("8/256") !== -1 &&
    name.indexOf("pink") !== -1
  ) {
    return 21862;
  } else if (
    name.indexOf("s22 ") !== -1 &&
    name.indexOf("8/256") !== -1 &&
    name.indexOf("blue") !== -1
  ) {
    return 21863;
  } else if (
    name.indexOf("s22 ") !== -1 &&
    name.indexOf("8/256") !== -1 &&
    name.indexOf("violet") !== -1
  ) {
    return 21864;
  } else if (
    name.indexOf("s22 ") !== -1 &&
    name.indexOf("8/256") !== -1 &&
    name.indexOf("white") !== -1
  ) {
    return 21865;
  } else if (
    name.indexOf("s23 fe ") !== -1 &&
    name.indexOf("8/128") !== -1 &&
    name.indexOf("cream") !== -1
  ) {
    return 30158;
  } else if (
    name.indexOf("s23 fe ") !== -1 &&
    name.indexOf("8/128") !== -1 &&
    name.indexOf("graphite") !== -1
  ) {
    return 30162;
  } else if (
    name.indexOf("s23 fe ") !== -1 &&
    name.indexOf("8/128") !== -1 &&
    (name.indexOf("indigo") !== -1 || name.indexOf("blue") !== -1)
  ) {
    return 30166;
  } else if (
    name.indexOf("s23 fe ") !== -1 &&
    name.indexOf("8/128") !== -1 &&
    (name.indexOf("mint") !== -1 || name.indexOf("green") !== -1)
  ) {
    return 30160;
  } else if (
    name.indexOf("s23 fe ") !== -1 &&
    name.indexOf("8/128") !== -1 &&
    (name.indexOf("lavender") !== -1 || name.indexOf("purple") !== -1)
  ) {
    return 30164;
  } else if (
    name.indexOf("s23 fe ") !== -1 &&
    name.indexOf("8/128") !== -1 &&
    (name.indexOf("orange") !== -1 || name.indexOf("tangerine") !== -1)
  ) {
    return 30168;
  } else if (
    name.indexOf("s23 fe ") !== -1 &&
    name.indexOf("8/256") !== -1 &&
    name.indexOf("cream") !== -1
  ) {
    return 30159;
  } else if (
    name.indexOf("s23 fe ") !== -1 &&
    name.indexOf("8/256") !== -1 &&
    name.indexOf("graphite") !== -1
  ) {
    return 30163;
  } else if (
    name.indexOf("s23 fe ") !== -1 &&
    name.indexOf("8/256") !== -1 &&
    (name.indexOf("indigo") !== -1 || name.indexOf("blue") !== -1)
  ) {
    return 30167;
  } else if (
    name.indexOf("s23 fe ") !== -1 &&
    name.indexOf("8/256") !== -1 &&
    (name.indexOf("mint") !== -1 || name.indexOf("green") !== -1)
  ) {
    return 30161;
  } else if (
    name.indexOf("s23 fe ") !== -1 &&
    name.indexOf("8/256") !== -1 &&
    (name.indexOf("lavender") !== -1 || name.indexOf("purple") !== -1)
  ) {
    return 30165;
  } else if (
    name.indexOf("s23 fe ") !== -1 &&
    name.indexOf("8/256") !== -1 &&
    (name.indexOf("orange") !== -1 || name.indexOf("tangerine") !== -1)
  ) {
    return 30169;
  } else if (
    name.indexOf("s23 ultra ") !== -1 &&
    name.indexOf("12/1tb") !== -1 &&
    name.indexOf("cream") !== -1 &&
    name.indexOf("🇰🇿") !== -1
  ) {
    return 30697;
  } else if (
    name.indexOf("s23 ultra ") !== -1 &&
    name.indexOf("12/1tb") !== -1 &&
    name.indexOf("graphite") !== -1 &&
    name.indexOf("🇰🇿") !== -1
  ) {
    return 30698;
  } else if (
    name.indexOf("s23 ultra ") !== -1 &&
    name.indexOf("12/1tb") !== -1 &&
    name.indexOf("green") !== -1 &&
    name.indexOf("🇰🇿") !== -1
  ) {
    return 30699;
  } else if (
    name.indexOf("s23 ultra ") !== -1 &&
    name.indexOf("12/1tb") !== -1 &&
    name.indexOf("lavender") !== -1 &&
    name.indexOf("🇰🇿") !== -1
  ) {
    return 30700;
  } else if (
    name.indexOf("s23 ultra ") !== -1 &&
    name.indexOf("12/1tb") !== -1 &&
    name.indexOf("lime") !== -1 &&
    name.indexOf("🇰🇿") !== -1
  ) {
    return 30701;
  } else if (
    name.indexOf("s23 ultra ") !== -1 &&
    name.indexOf("12/1tb") !== -1 &&
    name.indexOf("red") !== -1 &&
    name.indexOf("🇰🇿") !== -1
  ) {
    return 30702;
  } else if (
    name.indexOf("s23 ultra ") !== -1 &&
    name.indexOf("12/1tb") !== -1 &&
    name.indexOf("blue") !== -1 &&
    name.indexOf("🇰🇿") !== -1
  ) {
    return 30703;
  } else if (
    name.indexOf("s23 ultra ") !== -1 &&
    name.indexOf("12/256") !== -1 &&
    name.indexOf("cream") !== -1 &&
    name.indexOf("🇰🇿") !== -1
  ) {
    return 30704;
  } else if (
    name.indexOf("s23 ultra ") !== -1 &&
    name.indexOf("12/256") !== -1 &&
    name.indexOf("green") !== -1 &&
    name.indexOf("🇰🇿") !== -1
  ) {
    return 30705;
  } else if (
    name.indexOf("s23 ultra ") !== -1 &&
    name.indexOf("12/256") !== -1 &&
    name.indexOf("lavender") !== -1 &&
    name.indexOf("🇰🇿") !== -1
  ) {
    return 30706;
  } else if (
    name.indexOf("s23 ultra ") !== -1 &&
    name.indexOf("12/256") !== -1 &&
    name.indexOf("black") !== -1 &&
    name.indexOf("🇰🇿") !== -1
  ) {
    return 30707;
  } else if (
    name.indexOf("s23 ultra ") !== -1 &&
    name.indexOf("12/256") !== -1 &&
    name.indexOf("red") !== -1 &&
    name.indexOf("🇰🇿") !== -1
  ) {
    return 30708;
  } else if (
    name.indexOf("s23 ultra ") !== -1 &&
    name.indexOf("12/512") !== -1 &&
    name.indexOf("cream") !== -1 &&
    name.indexOf("🇰🇿") !== -1
  ) {
    return 30709;
  } else if (
    name.indexOf("s23 ultra ") !== -1 &&
    name.indexOf("12/512") !== -1 &&
    name.indexOf("green") !== -1 &&
    name.indexOf("🇰🇿") !== -1
  ) {
    return 30710;
  } else if (
    name.indexOf("s23 ultra ") !== -1 &&
    name.indexOf("12/512") !== -1 &&
    name.indexOf("lavender") !== -1 &&
    name.indexOf("🇰🇿") !== -1
  ) {
    return 30711;
  } else if (
    name.indexOf("s23 ultra ") !== -1 &&
    name.indexOf("12/512") !== -1 &&
    name.indexOf("black") !== -1 &&
    name.indexOf("🇰🇿") !== -1
  ) {
    return 30712;
  } else if (
    name.indexOf("s23 ultra ") !== -1 &&
    name.indexOf("8/256") !== -1 &&
    name.indexOf("cream") !== -1 &&
    name.indexOf("🇰🇿") !== -1
  ) {
    return 30713;
  } else if (
    name.indexOf("s23 ultra ") !== -1 &&
    name.indexOf("8/256") !== -1 &&
    name.indexOf("green") !== -1 &&
    name.indexOf("🇰🇿") !== -1
  ) {
    return 30714;
  } else if (
    name.indexOf("s23 ultra ") !== -1 &&
    name.indexOf("8/256") !== -1 &&
    name.indexOf("lavender") !== -1 &&
    name.indexOf("🇰🇿") !== -1
  ) {
    return 30715;
  } else if (
    name.indexOf("s23 ultra ") !== -1 &&
    name.indexOf("8/256") !== -1 &&
    name.indexOf("black") !== -1 &&
    name.indexOf("🇰🇿") !== -1
  ) {
    return 30716;
  } else if (
    name.indexOf("s23 ultra ") !== -1 &&
    name.indexOf("1tb") !== -1 &&
    name.indexOf("cream") !== -1
  ) {
    return 30717;
  } else if (
    name.indexOf("s23 ultra ") !== -1 &&
    name.indexOf("1tb") !== -1 &&
    name.indexOf("graphite") !== -1
  ) {
    return 30718;
  } else if (
    name.indexOf("s23 ultra ") !== -1 &&
    name.indexOf("1tb") !== -1 &&
    name.indexOf("black") !== -1
  ) {
    return 26246;
  } else if (
    name.indexOf("s23 ultra ") !== -1 &&
    name.indexOf("1tb") !== -1 &&
    name.indexOf("green") !== -1
  ) {
    return 30719;
  } else if (
    name.indexOf("s23 ultra ") !== -1 &&
    name.indexOf("1tb") !== -1 &&
    name.indexOf("lavender") !== -1
  ) {
    return 30720;
  } else if (
    name.indexOf("s23 ultra ") !== -1 &&
    name.indexOf("1tb") !== -1 &&
    name.indexOf("lime") !== -1
  ) {
    return 30721;
  } else if (
    name.indexOf("s23 ultra ") !== -1 &&
    name.indexOf("1tb") !== -1 &&
    name.indexOf("red") !== -1
  ) {
    return 30722;
  } else if (
    name.indexOf("s23 ultra ") !== -1 &&
    name.indexOf("1tb") !== -1 &&
    name.indexOf("blue") !== -1
  ) {
  } else if (
    name.indexOf("s23 ultra ") !== -1 &&
    name.indexOf("12/256") !== -1 &&
    name.indexOf("cream") !== -1
  ) {
    return 30724;
  } else if (
    name.indexOf("s23 ultra ") !== -1 &&
    name.indexOf("12/256") !== -1 &&
    name.indexOf("green") !== -1
  ) {
    return 30725;
  } else if (
    name.indexOf("s23 ultra ") !== -1 &&
    name.indexOf("12/256") !== -1 &&
    name.indexOf("lavender") !== -1
  ) {
    return 30726;
  } else if (
    name.indexOf("s23 ultra ") !== -1 &&
    name.indexOf("12/256") !== -1 &&
    name.indexOf("black") !== -1
  ) {
    return 30727;
  } else if (
    name.indexOf("s23 ultra ") !== -1 &&
    name.indexOf("12/256") !== -1 &&
    name.indexOf("red") !== -1
  ) {
    return 30728;
  } else if (
    name.indexOf("s23 ultra ") !== -1 &&
    name.indexOf("12/512") !== -1 &&
    name.indexOf("cream") !== -1
  ) {
    return 30729;
  } else if (
    name.indexOf("s23 ultra ") !== -1 &&
    name.indexOf("12/512") !== -1 &&
    name.indexOf("green") !== -1
  ) {
    return 30730;
  } else if (
    name.indexOf("s23 ultra ") !== -1 &&
    name.indexOf("12/512") !== -1 &&
    name.indexOf("lavender") !== -1
  ) {
    return 30731;
  } else if (
    name.indexOf("s23 ultra ") !== -1 &&
    name.indexOf("12/512") !== -1 &&
    name.indexOf("black") !== -1
  ) {
    return 30732;
  } else if (
    name.indexOf("s23 ultra ") !== -1 &&
    name.indexOf("8/256") !== -1 &&
    name.indexOf("cream") !== -1
  ) {
    return 30733;
  } else if (
    name.indexOf("s23 ultra ") !== -1 &&
    name.indexOf("8/256") !== -1 &&
    name.indexOf("green") !== -1
  ) {
    return 30734;
  } else if (
    name.indexOf("s23 ultra ") !== -1 &&
    name.indexOf("8/256") !== -1 &&
    name.indexOf("lavender") !== -1
  ) {
    return 30735;
  } else if (
    name.indexOf("s23 ultra ") !== -1 &&
    name.indexOf("8/256") !== -1 &&
    name.indexOf("black") !== -1
  ) {
    return 30736;
  } else if (
    name.indexOf("s23+ ") !== -1 &&
    name.indexOf("8/256") !== -1 &&
    name.indexOf("cream") !== -1
  ) {
    return 30757;
  } else if (
    name.indexOf("s23+ ") !== -1 &&
    name.indexOf("8/256") !== -1 &&
    name.indexOf("green") !== -1
  ) {
    return 30758;
  } else if (
    name.indexOf("s23+ ") !== -1 &&
    name.indexOf("8/256") !== -1 &&
    name.indexOf("lavender") !== -1
  ) {
    return 30759;
  } else if (
    name.indexOf("s23+ ") !== -1 &&
    name.indexOf("8/256") !== -1 &&
    name.indexOf("black") !== -1
  ) {
    return 30760;
  } else if (
    name.indexOf("s23+ ") !== -1 &&
    name.indexOf("8/512") !== -1 &&
    name.indexOf("cream") !== -1
  ) {
    return 30761;
  } else if (
    name.indexOf("s23+ ") !== -1 &&
    name.indexOf("8/512") !== -1 &&
    name.indexOf("graphite") !== -1
  ) {
    return 30762;
  } else if (
    name.indexOf("s23+ ") !== -1 &&
    name.indexOf("8/512") !== -1 &&
    name.indexOf("green") !== -1
  ) {
    return 30763;
  } else if (
    name.indexOf("s23+ ") !== -1 &&
    name.indexOf("8/512") !== -1 &&
    name.indexOf("lavender") !== -1
  ) {
    return 30764;
  } else if (
    name.indexOf("s23+ ") !== -1 &&
    name.indexOf("8/512") !== -1 &&
    name.indexOf("black") !== -1
  ) {
    return 30765;
  } else if (
    name.indexOf("s23+ ") !== -1 &&
    name.indexOf("8/256") !== -1 &&
    name.indexOf("cream") !== -1 &&
    name.indexOf("🇰🇿") !== -1
  ) {
    return 30766;
  } else if (
    name.indexOf("s23+ ") !== -1 &&
    name.indexOf("8/256") !== -1 &&
    name.indexOf("green") !== -1 &&
    name.indexOf("🇰🇿") !== -1
  ) {
    return 30767;
  } else if (
    name.indexOf("s23+ ") !== -1 &&
    name.indexOf("8/256") !== -1 &&
    name.indexOf("lavender") !== -1 &&
    name.indexOf("🇰🇿") !== -1
  ) {
    return 30768;
  } else if (
    name.indexOf("s23+ ") !== -1 &&
    name.indexOf("8/256") !== -1 &&
    name.indexOf("black") !== -1 &&
    name.indexOf("🇰🇿") !== -1
  ) {
    return 30769;
  } else if (
    name.indexOf("s23+ ") !== -1 &&
    name.indexOf("8/512") !== -1 &&
    name.indexOf("cream") !== -1 &&
    name.indexOf("🇰🇿") !== -1
  ) {
    return 30770;
  } else if (
    name.indexOf("s23+ ") !== -1 &&
    name.indexOf("8/512") !== -1 &&
    name.indexOf("graphite") !== -1 &&
    name.indexOf("🇰🇿") !== -1
  ) {
    return 30771;
  } else if (
    name.indexOf("s23+ ") !== -1 &&
    name.indexOf("8/512") !== -1 &&
    name.indexOf("green") !== -1 &&
    name.indexOf("🇰🇿") !== -1
  ) {
    return 30772;
  } else if (
    name.indexOf("s23+ ") !== -1 &&
    name.indexOf("8/512") !== -1 &&
    name.indexOf("lavender") !== -1 &&
    name.indexOf("🇰🇿") !== -1
  ) {
    return 30773;
  } else if (
    name.indexOf("s23+ ") !== -1 &&
    name.indexOf("8/512") !== -1 &&
    name.indexOf("black") !== -1 &&
    name.indexOf("🇰🇿") !== -1
  ) {
    return 30774;
  } else if (
    name.indexOf("s23 ") !== -1 &&
    name.indexOf("s23 fe") === -1 &&
    name.indexOf("s23+ ") === -1 &&
    name.indexOf("s23 ultra") === -1 &&
    name.indexOf("8/128") !== -1 &&
    name.indexOf("cream") !== -1 &&
    name.indexOf("🇰🇿") !== -1
  ) {
    return 30673;
  } else if (
    name.indexOf("s23 ") !== -1 &&
    name.indexOf("s23 fe") === -1 &&
    name.indexOf("s23+ ") === -1 &&
    name.indexOf("s23 ultra") === -1 &&
    name.indexOf("8/128") !== -1 &&
    name.indexOf("green") !== -1 &&
    name.indexOf("🇰🇿") !== -1
  ) {
    return 30674;
  } else if (
    name.indexOf("s23 ") !== -1 &&
    name.indexOf("s23 fe") === -1 &&
    name.indexOf("s23+ ") === -1 &&
    name.indexOf("s23 ultra") === -1 &&
    name.indexOf("8/128") !== -1 &&
    name.indexOf("lavender") !== -1 &&
    name.indexOf("🇰🇿") !== -1
  ) {
    return 30675;
  } else if (
    name.indexOf("s23 ") !== -1 &&
    name.indexOf("s23 fe") === -1 &&
    name.indexOf("s23+ ") === -1 &&
    name.indexOf("s23 ultra") === -1 &&
    name.indexOf("8/128") !== -1 &&
    name.indexOf("black") !== -1 &&
    name.indexOf("🇰🇿") !== -1
  ) {
    return 30676;
  } else if (
    name.indexOf("s23 ") !== -1 &&
    name.indexOf("s23 fe") === -1 &&
    name.indexOf("s23+ ") === -1 &&
    name.indexOf("s23 ultra") === -1 &&
    name.indexOf("8/256") !== -1 &&
    name.indexOf("cream") !== -1 &&
    name.indexOf("🇰🇿") !== -1
  ) {
    return 30677;
  } else if (
    name.indexOf("s23 ") !== -1 &&
    name.indexOf("s23 fe") === -1 &&
    name.indexOf("s23+ ") === -1 &&
    name.indexOf("s23 ultra") === -1 &&
    name.indexOf("8/256") !== -1 &&
    name.indexOf("green") !== -1 &&
    name.indexOf("🇰🇿") !== -1
  ) {
    return 30678;
  } else if (
    name.indexOf("s23 ") !== -1 &&
    name.indexOf("s23 fe") === -1 &&
    name.indexOf("s23+ ") === -1 &&
    name.indexOf("s23 ultra") === -1 &&
    name.indexOf("8/256") !== -1 &&
    name.indexOf("lavender") !== -1 &&
    name.indexOf("🇰🇿") !== -1
  ) {
    return 30679;
  } else if (
    name.indexOf("s23 ") !== -1 &&
    name.indexOf("s23 fe") === -1 &&
    name.indexOf("s23+ ") === -1 &&
    name.indexOf("s23 ultra") === -1 &&
    name.indexOf("8/256") !== -1 &&
    name.indexOf("black") !== -1 &&
    name.indexOf("🇰🇿") !== -1
  ) {
    return 30680;
  } else if (
    name.indexOf("s23 ") !== -1 &&
    name.indexOf("s23 fe") === -1 &&
    name.indexOf("s23+ ") === -1 &&
    name.indexOf("s23 ultra") === -1 &&
    name.indexOf("8/128") !== -1 &&
    name.indexOf("cream") !== -1
  ) {
    return 30689;
  } else if (
    name.indexOf("s23 ") !== -1 &&
    name.indexOf("s23 fe") === -1 &&
    name.indexOf("s23+ ") === -1 &&
    name.indexOf("s23 ultra") === -1 &&
    name.indexOf("8/128") !== -1 &&
    name.indexOf("green") !== -1
  ) {
    return 30690;
  } else if (
    name.indexOf("s23 ") !== -1 &&
    name.indexOf("s23 fe") === -1 &&
    name.indexOf("s23+ ") === -1 &&
    name.indexOf("s23 ultra") === -1 &&
    name.indexOf("8/128") !== -1 &&
    name.indexOf("lavender") !== -1
  ) {
    return 30691;
  } else if (
    name.indexOf("s23 ") !== -1 &&
    name.indexOf("s23 fe") === -1 &&
    name.indexOf("s23+ ") === -1 &&
    name.indexOf("s23 ultra") === -1 &&
    name.indexOf("8/128") !== -1 &&
    name.indexOf("black") !== -1
  ) {
    return 30692;
  } else if (
    name.indexOf("s23 ") !== -1 &&
    name.indexOf("s23 fe") === -1 &&
    name.indexOf("s23+ ") === -1 &&
    name.indexOf("s23 ultra") === -1 &&
    name.indexOf("8/128") !== -1 &&
    name.indexOf("graphite") !== -1
  ) {
    return 30692;
  } else if (
    name.indexOf("s23 ") !== -1 &&
    name.indexOf("s23 fe") === -1 &&
    name.indexOf("s23+ ") === -1 &&
    name.indexOf("s23 ultra") === -1 &&
    name.indexOf("8/256") !== -1 &&
    name.indexOf("cream") !== -1
  ) {
    return 30693;
  } else if (
    name.indexOf("s23 ") !== -1 &&
    name.indexOf("s23 fe") === -1 &&
    name.indexOf("s23+ ") === -1 &&
    name.indexOf("s23 ultra") === -1 &&
    name.indexOf("8/256") !== -1 &&
    name.indexOf("green") !== -1
  ) {
    return 30694;
  } else if (
    name.indexOf("s23 ") !== -1 &&
    name.indexOf("s23 fe") === -1 &&
    name.indexOf("s23+ ") === -1 &&
    name.indexOf("s23 ultra") === -1 &&
    name.indexOf("8/256") !== -1 &&
    name.indexOf("lavender") !== -1
  ) {
    return 30695;
  } else if (
    name.indexOf("s23 ") !== -1 &&
    name.indexOf("s23 fe") === -1 &&
    name.indexOf("s23+ ") === -1 &&
    name.indexOf("s23 ultra") === -1 &&
    name.indexOf("8/256") !== -1 &&
    name.indexOf("graphite")
  ) {
    return 30696;
  } else if (
    name.indexOf("s23 ") !== -1 &&
    name.indexOf("s23 fe") === -1 &&
    name.indexOf("s23+ ") === -1 &&
    name.indexOf("s23 ultra") === -1 &&
    name.indexOf("8/512") !== -1 &&
    name.indexOf("cream") !== -1
  ) {
    return 26218;
  } else if (
    name.indexOf("s23 ") !== -1 &&
    name.indexOf("s23 fe") === -1 &&
    name.indexOf("s23+ ") === -1 &&
    name.indexOf("s23 ultra") === -1 &&
    name.indexOf("8/512") !== -1 &&
    name.indexOf("graphite") !== -1
  ) {
    return 26227;
  } else if (
    name.indexOf("s23 ") !== -1 &&
    name.indexOf("s23 fe") === -1 &&
    name.indexOf("s23+ ") === -1 &&
    name.indexOf("s23 ultra") === -1 &&
    name.indexOf("8/512") !== -1 &&
    name.indexOf("green") !== -1
  ) {
    return 26221;
  } else if (
    name.indexOf("s23 ") !== -1 &&
    name.indexOf("s23 fe") === -1 &&
    name.indexOf("s23+ ") === -1 &&
    name.indexOf("s23 ultra") === -1 &&
    name.indexOf("8/512") !== -1 &&
    name.indexOf("lavender") !== -1
  ) {
    return 26224;
  } else if (
    name.indexOf("s23 ") !== -1 &&
    name.indexOf("s23 fe") === -1 &&
    name.indexOf("s23+ ") === -1 &&
    name.indexOf("s23 ultra") === -1 &&
    name.indexOf("8/512") !== -1 &&
    name.indexOf("lime") !== -1
  ) {
    return 26230;
  } else if (
    name.indexOf("s23 ") !== -1 &&
    name.indexOf("s23 fe") === -1 &&
    name.indexOf("s23+ ") === -1 &&
    name.indexOf("s23 ultra") === -1 &&
    name.indexOf("8/512") !== -1 &&
    name.indexOf("black") !== -1
  ) {
    return 26214;
  } else if (
    name.indexOf("s24 fe") !== -1 &&
    name.indexOf("8/128") !== -1 &&
    (name.indexOf("mint") !== -1 || name.indexOf("green") !== -1)
  ) {
    return 36813;
  } else if (
    name.indexOf("s24 fe") !== -1 &&
    name.indexOf("8/256") !== -1 &&
    (name.indexOf("mint") !== -1 || name.indexOf("green") !== -1)
  ) {
    return 36814;
  } else if (
    name.indexOf("s24 fe") !== -1 &&
    name.indexOf("8/512") !== -1 &&
    (name.indexOf("mint") !== -1 || name.indexOf("green") !== -1)
  ) {
    return 36815;
  } else if (
    name.indexOf("s24 fe") !== -1 &&
    name.indexOf("8/128") !== -1 &&
    name.indexOf("yellow") !== -1
  ) {
    return 36816;
  } else if (
    name.indexOf("s24 fe") !== -1 &&
    name.indexOf("8/256") !== -1 &&
    name.indexOf("yellow") !== -1
  ) {
    return 36817;
  } else if (
    name.indexOf("s24 fe") !== -1 &&
    name.indexOf("8/512") !== -1 &&
    name.indexOf("yellow") !== -1
  ) {
    return 36818;
  } else if (
    name.indexOf("s24 fe") !== -1 &&
    name.indexOf("8/128") !== -1 &&
    name.indexOf("blue") !== -1
  ) {
    return 36831;
  } else if (
    name.indexOf("s24 fe") !== -1 &&
    name.indexOf("8/256") !== -1 &&
    name.indexOf("blue") !== -1
  ) {
    return 36832;
  } else if (
    name.indexOf("s24 fe") !== -1 &&
    name.indexOf("8/512") !== -1 &&
    name.indexOf("blue") !== -1
  ) {
    return 36833;
  } else if (
    name.indexOf("s24 fe") !== -1 &&
    name.indexOf("8/128") !== -1 &&
    name.indexOf("gray") !== -1
  ) {
    return 36810;
  } else if (
    name.indexOf("s24 fe") !== -1 &&
    name.indexOf("8/256") !== -1 &&
    name.indexOf("gray") !== -1
  ) {
    return 36811;
  } else if (
    name.indexOf("s24 fe") !== -1 &&
    name.indexOf("8/512") !== -1 &&
    name.indexOf("gray") !== -1
  ) {
    return 36812;
  } else if (
    name.indexOf("s24 fe") !== -1 &&
    name.indexOf("8/128") !== -1 &&
    (name.indexOf("graphite") !== -1 || name.indexOf("black") !== -1)
  ) {
    return 36807;
  } else if (
    name.indexOf("s24 fe") !== -1 &&
    name.indexOf("8/256") !== -1 &&
    (name.indexOf("graphite") !== -1 || name.indexOf("black") !== -1)
  ) {
    return 36808;
  } else if (
    name.indexOf("s24 fe") !== -1 &&
    name.indexOf("8/512") !== -1 &&
    (name.indexOf("graphite") !== -1 || name.indexOf("black") !== -1)
  ) {
    return 36809;
  } else if (
    name.indexOf("s24+") !== -1 &&
    name.indexOf("12/256") !== -1 &&
    name.indexOf("green") !== -1
  ) {
    return 35768;
  } else if (
    name.indexOf("s24+") !== -1 &&
    name.indexOf("12/256") !== -1 &&
    name.indexOf("orange") !== -1
  ) {
    return 35777;
  } else if (
    name.indexOf("s24+") !== -1 &&
    name.indexOf("12/256") !== -1 &&
    name.indexOf("blue") !== -1
  ) {
    return 35828;
  } else if (
    name.indexOf("s24+") !== -1 &&
    name.indexOf("12/512") !== -1 &&
    name.indexOf("green") !== -1
  ) {
    return 35769;
  } else if (
    name.indexOf("s24+") !== -1 &&
    name.indexOf("12/512") !== -1 &&
    name.indexOf("orange") !== -1
  ) {
    return 35778;
  } else if (
    name.indexOf("s24+") !== -1 &&
    name.indexOf("12/512") !== -1 &&
    name.indexOf("blue") !== -1
  ) {
    return 35829;
  } else if (
    name.indexOf("s24+") !== -1 &&
    name.indexOf("12/256") !== -1 &&
    name.indexOf("yellow") !== -1 &&
    name.indexOf("🇰🇿") !== -1
  ) {
    return 34353;
  } else if (
    name.indexOf("s24+") !== -1 &&
    name.indexOf("12/256") !== -1 &&
    name.indexOf("yellow") !== -1
  ) {
    return 30987;
  } else if (
    name.indexOf("s24+") !== -1 &&
    name.indexOf("12/256") !== -1 &&
    (name.indexOf("violet") !== -1 || name.indexOf("purple") !== -1) &&
    name.indexOf("🇰🇿") !== -1
  ) {
    return 34352;
  } else if (
    name.indexOf("s24+") !== -1 &&
    name.indexOf("12/256") !== -1 &&
    (name.indexOf("violet") !== -1 || name.indexOf("purple") !== -1)
  ) {
    return 30989;
  } else if (
    name.indexOf("s24+") !== -1 &&
    name.indexOf("12/256") !== -1 &&
    name.indexOf("gray") !== -1 &&
    name.indexOf("🇰🇿") !== -1
  ) {
    return 34354;
  } else if (
    name.indexOf("s24+") !== -1 &&
    name.indexOf("12/256") !== -1 &&
    name.indexOf("gray") !== -1
  ) {
    return 30991;
  } else if (
    name.indexOf("s24+") !== -1 &&
    name.indexOf("12/256") !== -1 &&
    name.indexOf("black") !== -1 &&
    name.indexOf("🇰🇿") !== -1
  ) {
    return 34349;
  } else if (
    name.indexOf("s24+") !== -1 &&
    name.indexOf("12/256") !== -1 &&
    name.indexOf("black") !== -1
  ) {
    return 30985;
  } else if (
    name.indexOf("s24+") !== -1 &&
    name.indexOf("12/512") !== -1 &&
    name.indexOf("yellow") !== -1 &&
    name.indexOf("🇰🇿") !== -1
  ) {
    return 34351;
  } else if (
    name.indexOf("s24+") !== -1 &&
    name.indexOf("12/512") !== -1 &&
    name.indexOf("yellow") !== -1
  ) {
    return 30988;
  } else if (
    name.indexOf("s24+") !== -1 &&
    name.indexOf("12/512") !== -1 &&
    (name.indexOf("violet") !== -1 || name.indexOf("purple") !== -1) &&
    name.indexOf("🇰🇿") !== -1
  ) {
    return 34348;
  } else if (
    name.indexOf("s24+") !== -1 &&
    name.indexOf("12/512") !== -1 &&
    (name.indexOf("violet") !== -1 || name.indexOf("purple") !== -1)
  ) {
    return 30990;
  } else if (
    name.indexOf("s24+") !== -1 &&
    name.indexOf("12/512") !== -1 &&
    name.indexOf("gray") !== -1 &&
    name.indexOf("🇰🇿") !== -1
  ) {
    return 34347;
  } else if (
    name.indexOf("s24+") !== -1 &&
    name.indexOf("12/512") !== -1 &&
    name.indexOf("gray") !== -1
  ) {
    return 30992;
  } else if (
    name.indexOf("s24+") !== -1 &&
    name.indexOf("12/512") !== -1 &&
    name.indexOf("black") !== -1 &&
    name.indexOf("🇰🇿") !== -1
  ) {
    return 34350;
  } else if (
    name.indexOf("s24+") !== -1 &&
    name.indexOf("12/512") !== -1 &&
    name.indexOf("black") !== -1
  ) {
    return 30986;
  } else if (
    name.indexOf("s24 ultra") !== -1 &&
    name.indexOf("1tb") !== -1 &&
    name.indexOf("blue") !== -1
  ) {
    return 35874;
  } else if (
    name.indexOf("s24 ultra") !== -1 &&
    name.indexOf("1tb") !== -1 &&
    name.indexOf("green") !== -1
  ) {
    return 35875;
  } else if (
    name.indexOf("s24 ultra") !== -1 &&
    name.indexOf("1tb") !== -1 &&
    name.indexOf("orange") !== -1
  ) {
    return 35876;
  } else if (
    name.indexOf("s24 ultra") !== -1 &&
    name.indexOf("256") !== -1 &&
    name.indexOf("blue") !== -1
  ) {
    return 35877;
  } else if (
    name.indexOf("s24 ultra") !== -1 &&
    name.indexOf("256") !== -1 &&
    name.indexOf("green") !== -1
  ) {
    return 35878;
  } else if (
    name.indexOf("s24 ultra") !== -1 &&
    name.indexOf("256") !== -1 &&
    name.indexOf("orange") !== -1
  ) {
    return 35879;
  } else if (
    name.indexOf("s24 ultra") !== -1 &&
    name.indexOf("512") !== -1 &&
    name.indexOf("blue") !== -1
  ) {
    return 35882;
  } else if (
    name.indexOf("s24 ultra") !== -1 &&
    name.indexOf("512") !== -1 &&
    name.indexOf("green") !== -1
  ) {
    return 35880;
  } else if (
    name.indexOf("s24 ultra") !== -1 &&
    name.indexOf("512") !== -1 &&
    name.indexOf("orange") !== -1
  ) {
    return 35881;
  } else if (
    name.indexOf("s24 ultra") !== -1 &&
    name.indexOf("1tb") !== -1 &&
    name.indexOf("black") !== -1 &&
    name.indexOf("🇰🇿") !== -1
  ) {
    return 34362;
  } else if (
    name.indexOf("s24 ultra") !== -1 &&
    name.indexOf("1tb") !== -1 &&
    name.indexOf("black") !== -1
  ) {
    return 34394;
  } else if (
    name.indexOf("s24 ultra") !== -1 &&
    name.indexOf("1tb") !== -1 &&
    name.indexOf("gray") !== -1 &&
    name.indexOf("🇰🇿") !== -1
  ) {
    return 34363;
  } else if (
    name.indexOf("s24 ultra") !== -1 &&
    name.indexOf("1tb") !== -1 &&
    name.indexOf("gray") !== -1
  ) {
    return 34395;
  } else if (
    name.indexOf("s24 ultra") !== -1 &&
    name.indexOf("1tb") !== -1 &&
    name.indexOf("violet") !== -1 &&
    name.indexOf("🇰🇿") !== -1
  ) {
    return 34361;
  } else if (
    name.indexOf("s24 ultra") !== -1 &&
    name.indexOf("1tb") !== -1 &&
    name.indexOf("violet") !== -1
  ) {
    return 34393;
  } else if (
    name.indexOf("s24 ultra") !== -1 &&
    name.indexOf("1tb") !== -1 &&
    name.indexOf("yellow") !== -1 &&
    name.indexOf("🇰🇿") !== -1
  ) {
    return 34359;
  } else if (
    name.indexOf("s24 ultra") !== -1 &&
    name.indexOf("1tb") !== -1 &&
    name.indexOf("yellow") !== -1
  ) {
    return 34391;
  } else if (
    name.indexOf("s24 ultra") !== -1 &&
    name.indexOf("256") !== -1 &&
    name.indexOf("black") !== -1 &&
    name.indexOf("🇰🇿") !== -1
  ) {
    return 34366;
  } else if (
    name.indexOf("s24 ultra") !== -1 &&
    name.indexOf("256") !== -1 &&
    name.indexOf("black") !== -1
  ) {
    return 34398;
  } else if (
    name.indexOf("s24 ultra") !== -1 &&
    name.indexOf("256") !== -1 &&
    name.indexOf("gray") !== -1 &&
    name.indexOf("🇰🇿") !== -1
  ) {
    return 34364;
  } else if (
    name.indexOf("s24 ultra") !== -1 &&
    name.indexOf("256") !== -1 &&
    name.indexOf("gray") !== -1
  ) {
    return 34396;
  } else if (
    name.indexOf("s24 ultra") !== -1 &&
    name.indexOf("256") !== -1 &&
    name.indexOf("violet") !== -1 &&
    name.indexOf("🇰🇿") !== -1
  ) {
    return 34355;
  } else if (
    name.indexOf("s24 ultra") !== -1 &&
    name.indexOf("256") !== -1 &&
    (name.indexOf("violet") !== -1 || name.indexOf("purple") !== -1)
  ) {
    return 34387;
  } else if (
    name.indexOf("s24 ultra") !== -1 &&
    name.indexOf("256") !== -1 &&
    name.indexOf("yellow") !== -1 &&
    name.indexOf("🇰🇿") !== -1
  ) {
    return 34357;
  } else if (
    name.indexOf("s24 ultra") !== -1 &&
    name.indexOf("256") !== -1 &&
    name.indexOf("yellow") !== -1
  ) {
    return 34389;
  } else if (
    name.indexOf("s24 ultra") !== -1 &&
    name.indexOf("512") !== -1 &&
    name.indexOf("black") !== -1 &&
    name.indexOf("🇰🇿") !== -1
  ) {
    return 34358;
  } else if (
    name.indexOf("s24 ultra") !== -1 &&
    name.indexOf("512") !== -1 &&
    name.indexOf("black") !== -1
  ) {
    return 34390;
  } else if (
    name.indexOf("s24 ultra") !== -1 &&
    name.indexOf("512") !== -1 &&
    name.indexOf("gray") !== -1 &&
    name.indexOf("🇰🇿") !== -1
  ) {
    return 34360;
  } else if (
    name.indexOf("s24 ultra") !== -1 &&
    name.indexOf("512") !== -1 &&
    name.indexOf("gray") !== -1
  ) {
    return 34392;
  } else if (
    name.indexOf("s24 ultra") !== -1 &&
    name.indexOf("512") !== -1 &&
    (name.indexOf("violet") !== -1 || name.indexOf("purple") !== -1) &&
    name.indexOf("🇰🇿") !== -1
  ) {
    return 34365;
  } else if (
    name.indexOf("s24 ultra") !== -1 &&
    name.indexOf("512") !== -1 &&
    (name.indexOf("violet") !== -1 || name.indexOf("purple") !== -1)
  ) {
    return 34397;
  } else if (
    name.indexOf("s24 ultra") !== -1 &&
    name.indexOf("512") !== -1 &&
    name.indexOf("yellow") !== -1 &&
    name.indexOf("🇰🇿") !== -1
  ) {
    return 34356;
  } else if (
    name.indexOf("s24 ultra") !== -1 &&
    name.indexOf("512") !== -1 &&
    name.indexOf("yellow") !== -1
  ) {
    return 34388;
  } else if (
    name.indexOf("s24+") !== -1 &&
    name.indexOf("12/256") !== -1 &&
    name.indexOf("yellow") !== -1 &&
    name.indexOf("🇰🇿") !== -1
  ) {
    return 34353;
  } else if (
    name.indexOf("s24+") !== -1 &&
    name.indexOf("12/256") !== -1 &&
    (name.indexOf("violet") !== -1 || name.indexOf("purple") !== -1) &&
    name.indexOf("🇰🇿") !== -1
  ) {
    return 34352;
  } else if (
    name.indexOf("s24+") !== -1 &&
    name.indexOf("12/256") !== -1 &&
    name.indexOf("gray") !== -1 &&
    name.indexOf("🇰🇿") !== -1
  ) {
    return 34354;
  } else if (
    name.indexOf("s24+") !== -1 &&
    name.indexOf("12/256") !== -1 &&
    name.indexOf("black") !== -1 &&
    name.indexOf("🇰🇿") !== -1
  ) {
    return 34349;
  } else if (
    name.indexOf("s24+") !== -1 &&
    name.indexOf("12/512") !== -1 &&
    name.indexOf("yellow") !== -1 &&
    name.indexOf("🇰🇿") !== -1
  ) {
    return 34351;
  } else if (
    name.indexOf("s24+") !== -1 &&
    name.indexOf("12/512") !== -1 &&
    (name.indexOf("violet") !== -1 || name.indexOf("purple") !== -1) &&
    name.indexOf("🇰🇿") !== -1
  ) {
    return 34348;
  } else if (
    name.indexOf("s24+") !== -1 &&
    name.indexOf("12/512") !== -1 &&
    name.indexOf("gray") !== -1 &&
    name.indexOf("🇰🇿") !== -1
  ) {
    return 34347;
  } else if (
    name.indexOf("s24+") !== -1 &&
    name.indexOf("12/512") !== -1 &&
    name.indexOf("black") !== -1 &&
    name.indexOf("🇰🇿") !== -1
  ) {
    return 34350;
  } else if (
    name.indexOf("s24 ") !== -1 &&
    name.indexOf("s24+") === -1 &&
    name.indexOf("s24 ultra") === -1 &&
    name.indexOf("s24 fe") === -1 &&
    name.indexOf("8/128") !== -1 &&
    name.indexOf("yellow") !== -1 &&
    name.indexOf("🇰🇿") !== -1
  ) {
    return 34341;
  } else if (
    name.indexOf("s24 ") !== -1 &&
    name.indexOf("s24+") === -1 &&
    name.indexOf("s24 ultra") === -1 &&
    name.indexOf("s24 fe") === -1 &&
    name.indexOf("8/128") !== -1 &&
    (name.indexOf("violet") !== -1 || name.indexOf("purple") !== -1) &&
    name.indexOf("🇰🇿") !== -1
  ) {
    return 34339;
  } else if (
    name.indexOf("s24 ") !== -1 &&
    name.indexOf("s24+") === -1 &&
    name.indexOf("s24 ultra") === -1 &&
    name.indexOf("s24 fe") === -1 &&
    name.indexOf("8/128") !== -1 &&
    name.indexOf("gray") !== -1 &&
    name.indexOf("🇰🇿") !== -1
  ) {
    return 34336;
  } else if (
    name.indexOf("s24 ") !== -1 &&
    name.indexOf("s24+") === -1 &&
    name.indexOf("s24 ultra") === -1 &&
    name.indexOf("s24 fe") === -1 &&
    name.indexOf("8/128") !== -1 &&
    name.indexOf("black") !== -1 &&
    name.indexOf("🇰🇿") !== -1
  ) {
    return 34345;
  } else if (
    name.indexOf("s24 ") !== -1 &&
    name.indexOf("s24+") === -1 &&
    name.indexOf("s24 ultra") === -1 &&
    name.indexOf("s24 fe") === -1 &&
    name.indexOf("8/256") !== -1 &&
    name.indexOf("yellow") !== -1 &&
    name.indexOf("🇰🇿") !== -1
  ) {
    return 34344;
  } else if (
    name.indexOf("s24 ") !== -1 &&
    name.indexOf("s24+") === -1 &&
    name.indexOf("s24 ultra") === -1 &&
    name.indexOf("s24 fe") === -1 &&
    name.indexOf("8/256") !== -1 &&
    name.indexOf("violet") !== -1 &&
    name.indexOf("🇰🇿") !== -1
  ) {
    return 34338;
  } else if (
    name.indexOf("s24 ") !== -1 &&
    name.indexOf("s24+") === -1 &&
    name.indexOf("s24 ultra") === -1 &&
    name.indexOf("s24 fe") === -1 &&
    name.indexOf("8/256") !== -1 &&
    name.indexOf("gray") !== -1 &&
    name.indexOf("🇰🇿") !== -1
  ) {
    return 34346;
  } else if (
    name.indexOf("s24 ") !== -1 &&
    name.indexOf("s24+") === -1 &&
    name.indexOf("s24 ultra") === -1 &&
    name.indexOf("s24 fe") === -1 &&
    name.indexOf("8/256") !== -1 &&
    name.indexOf("black") !== -1 &&
    name.indexOf("🇰🇿") !== -1
  ) {
    return 34343;
  } else if (
    name.indexOf("s24 ") !== -1 &&
    name.indexOf("s24+") === -1 &&
    name.indexOf("s24 ultra") === -1 &&
    name.indexOf("s24 fe") === -1 &&
    name.indexOf("8/512") !== -1 &&
    name.indexOf("yellow") !== -1 &&
    name.indexOf("🇰🇿") !== -1
  ) {
    return 34340;
  } else if (
    name.indexOf("s24 ") !== -1 &&
    name.indexOf("s24+") === -1 &&
    name.indexOf("s24 ultra") === -1 &&
    name.indexOf("s24 fe") === -1 &&
    name.indexOf("8/512") !== -1 &&
    name.indexOf("violet") !== -1 &&
    name.indexOf("🇰🇿") !== -1
  ) {
    return 34337;
  } else if (
    name.indexOf("s24 ") !== -1 &&
    name.indexOf("s24+") === -1 &&
    name.indexOf("s24 ultra") === -1 &&
    name.indexOf("s24 fe") === -1 &&
    name.indexOf("8/512") !== -1 &&
    name.indexOf("gray") !== -1 &&
    name.indexOf("🇰🇿") !== -1
  ) {
    return 34335;
  } else if (
    name.indexOf("s24 ") !== -1 &&
    name.indexOf("s24+") === -1 &&
    name.indexOf("s24 ultra") === -1 &&
    name.indexOf("s24 fe") === -1 &&
    name.indexOf("8/512") !== -1 &&
    name.indexOf("black") !== -1 &&
    name.indexOf("🇰🇿") !== -1
  ) {
    return 34342;
  } else if (
    name.indexOf("s24 ") !== -1 &&
    name.indexOf("s24+") === -1 &&
    name.indexOf("s24 ultra") === -1 &&
    name.indexOf("s24 fe") === -1 &&
    name.indexOf("12/256") !== -1 &&
    name.indexOf("yellow") !== -1
  ) {
    return 36038;
  } else if (
    name.indexOf("s24 ") !== -1 &&
    name.indexOf("s24+") === -1 &&
    name.indexOf("s24 ultra") === -1 &&
    name.indexOf("s24 fe") === -1 &&
    name.indexOf("12/256") !== -1 &&
    name.indexOf("violet") !== -1
  ) {
    return 36039;
  } else if (
    name.indexOf("s24 ") !== -1 &&
    name.indexOf("s24+") === -1 &&
    name.indexOf("s24 ultra") === -1 &&
    name.indexOf("s24 fe") === -1 &&
    name.indexOf("12/256") !== -1 &&
    name.indexOf("green") !== -1
  ) {
    return 36040;
  } else if (
    name.indexOf("s24 ") !== -1 &&
    name.indexOf("s24+") === -1 &&
    name.indexOf("s24 ultra") === -1 &&
    name.indexOf("s24 fe") === -1 &&
    name.indexOf("12/256") !== -1 &&
    name.indexOf("gray") !== -1
  ) {
    return 36042;
  } else if (
    name.indexOf("s24 ") !== -1 &&
    name.indexOf("s24+") === -1 &&
    name.indexOf("s24 ultra") === -1 &&
    name.indexOf("s24 fe") === -1 &&
    name.indexOf("12/256") !== -1 &&
    name.indexOf("black") !== -1
  ) {
    return 36043;
  } else if (
    name.indexOf("s24 ") !== -1 &&
    name.indexOf("s24+") === -1 &&
    name.indexOf("s24 ultra") === -1 &&
    name.indexOf("s24 fe") === -1 &&
    name.indexOf("12/256") !== -1 &&
    name.indexOf("orange") !== -1
  ) {
    return 36044;
  } else if (
    name.indexOf("s24 ") !== -1 &&
    name.indexOf("s24+") === -1 &&
    name.indexOf("s24 ultra") === -1 &&
    name.indexOf("s24 fe") === -1 &&
    name.indexOf("12/256") !== -1 &&
    name.indexOf("blue") !== -1
  ) {
    return 36046;
  } else if (
    name.indexOf("s24 ") !== -1 &&
    name.indexOf("s24+") === -1 &&
    name.indexOf("s24 ultra") === -1 &&
    name.indexOf("s24 fe") === -1 &&
    name.indexOf("8/128") !== -1 &&
    name.indexOf("yellow") !== -1
  ) {
    return 30976;
  } else if (
    name.indexOf("s24 ") !== -1 &&
    name.indexOf("s24+") === -1 &&
    name.indexOf("s24 ultra") === -1 &&
    name.indexOf("s24 fe") === -1 &&
    name.indexOf("8/128") !== -1 &&
    name.indexOf("violet") !== -1
  ) {
    return 30979;
  } else if (
    name.indexOf("s24 ") !== -1 &&
    name.indexOf("s24+") === -1 &&
    name.indexOf("s24 ultra") === -1 &&
    name.indexOf("s24 fe") === -1 &&
    name.indexOf("8/128") !== -1 &&
    name.indexOf("green") !== -1
  ) {
    return 35749;
  } else if (
    name.indexOf("s24 ") !== -1 &&
    name.indexOf("s24+") === -1 &&
    name.indexOf("s24 ultra") === -1 &&
    name.indexOf("s24 fe") === -1 &&
    name.indexOf("8/128") !== -1 &&
    name.indexOf("gray") !== -1
  ) {
    return 30982;
  } else if (
    name.indexOf("s24 ") !== -1 &&
    name.indexOf("s24+") === -1 &&
    name.indexOf("s24 ultra") === -1 &&
    name.indexOf("s24 fe") === -1 &&
    name.indexOf("8/128") !== -1 &&
    name.indexOf("black") !== -1
  ) {
    return 30973;
  } else if (
    name.indexOf("s24 ") !== -1 &&
    name.indexOf("s24+") === -1 &&
    name.indexOf("s24 ultra") === -1 &&
    name.indexOf("s24 fe") === -1 &&
    name.indexOf("8/128") !== -1 &&
    name.indexOf("orange") !== -1
  ) {
    return 35774;
  } else if (
    name.indexOf("s24 ") !== -1 &&
    name.indexOf("s24+") === -1 &&
    name.indexOf("s24 ultra") === -1 &&
    name.indexOf("s24 fe") === -1 &&
    name.indexOf("8/128") !== -1 &&
    name.indexOf("blue") !== -1
  ) {
    return 35825;
  } else if (
    name.indexOf("s24 ") !== -1 &&
    name.indexOf("s24+") === -1 &&
    name.indexOf("s24 ultra") === -1 &&
    name.indexOf("s24 fe") === -1 &&
    name.indexOf("8/256") !== -1 &&
    name.indexOf("yellow") !== -1
  ) {
    return 30977;
  } else if (
    name.indexOf("s24 ") !== -1 &&
    name.indexOf("s24+") === -1 &&
    name.indexOf("s24 ultra") === -1 &&
    name.indexOf("s24 fe") === -1 &&
    name.indexOf("8/256") !== -1 &&
    name.indexOf("violet") !== -1
  ) {
    return 30980;
  } else if (
    name.indexOf("s24 ") !== -1 &&
    name.indexOf("s24+") === -1 &&
    name.indexOf("s24 ultra") === -1 &&
    name.indexOf("s24 fe") === -1 &&
    name.indexOf("8/256") !== -1 &&
    name.indexOf("green") !== -1
  ) {
    return 35752;
  } else if (
    name.indexOf("s24 ") !== -1 &&
    name.indexOf("s24+") === -1 &&
    name.indexOf("s24 ultra") === -1 &&
    name.indexOf("s24 fe") === -1 &&
    name.indexOf("8/256") !== -1 &&
    name.indexOf("gray") !== -1
  ) {
    return 30983;
  } else if (
    name.indexOf("s24 ") !== -1 &&
    name.indexOf("s24+") === -1 &&
    name.indexOf("s24 ultra") === -1 &&
    name.indexOf("s24 fe") === -1 &&
    name.indexOf("8/256") !== -1 &&
    name.indexOf("black") !== -1
  ) {
    return 30974;
  } else if (
    name.indexOf("s24 ") !== -1 &&
    name.indexOf("s24+") === -1 &&
    name.indexOf("s24 ultra") === -1 &&
    name.indexOf("s24 fe") === -1 &&
    name.indexOf("8/256") !== -1 &&
    name.indexOf("orange") !== -1
  ) {
    return 35775;
  } else if (
    name.indexOf("s24 ") !== -1 &&
    name.indexOf("s24+") === -1 &&
    name.indexOf("s24 ultra") === -1 &&
    name.indexOf("s24 fe") === -1 &&
    name.indexOf("8/256") !== -1 &&
    name.indexOf("blue") !== -1
  ) {
    return 35826;
  } else if (
    name.indexOf("s24 ") !== -1 &&
    name.indexOf("s24+") === -1 &&
    name.indexOf("s24 ultra") === -1 &&
    name.indexOf("s24 fe") === -1 &&
    name.indexOf("8/512") !== -1 &&
    name.indexOf("yellow") !== -1
  ) {
    return 30978;
  } else if (
    name.indexOf("s24 ") !== -1 &&
    name.indexOf("s24+") === -1 &&
    name.indexOf("s24 ultra") === -1 &&
    name.indexOf("s24 fe") === -1 &&
    name.indexOf("8/512") !== -1 &&
    name.indexOf("violet") !== -1
  ) {
    return 30981;
  } else if (
    name.indexOf("s24 ") !== -1 &&
    name.indexOf("s24+") === -1 &&
    name.indexOf("s24 ultra") === -1 &&
    name.indexOf("s24 fe") === -1 &&
    name.indexOf("8/512") !== -1 &&
    name.indexOf("green") !== -1
  ) {
    return 35767;
  } else if (
    name.indexOf("s24 ") !== -1 &&
    name.indexOf("s24+") === -1 &&
    name.indexOf("s24 ultra") === -1 &&
    name.indexOf("s24 fe") === -1 &&
    name.indexOf("8/512") !== -1 &&
    name.indexOf("gray") !== -1
  ) {
    return 30984;
  } else if (
    name.indexOf("s24 ") !== -1 &&
    name.indexOf("s24+") === -1 &&
    name.indexOf("s24 ultra") === -1 &&
    name.indexOf("s24 fe") === -1 &&
    name.indexOf("8/512") !== -1 &&
    name.indexOf("black") !== -1
  ) {
    return 30975;
  } else if (
    name.indexOf("s24 ") !== -1 &&
    name.indexOf("s24+") === -1 &&
    name.indexOf("s24 ultra") === -1 &&
    name.indexOf("s24 fe") === -1 &&
    name.indexOf("8/512") !== -1 &&
    name.indexOf("orange") !== -1
  ) {
    return 35776;
  } else if (
    name.indexOf("s24 ") !== -1 &&
    name.indexOf("s24+") === -1 &&
    name.indexOf("s24 ultra") === -1 &&
    name.indexOf("s24 fe") === -1 &&
    name.indexOf("8/512") !== -1 &&
    name.indexOf("blue") !== -1
  ) {
    return 35827;
  
  } else {
    return returnIDSamsung2(name) || "No match";
  }
};
