export const returnQuickID = (nameStock) => {
  const removeDoubleSpace = nameStock.replace(/\s+/g, " ");
  const name = removeDoubleSpace.toLowerCase();

  if (
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
  } else if (
    name.indexOf("s25") !== -1 &&
    name.indexOf("ultra") === -1 &&
    name.indexOf("s25+") === -1 &&
    name.indexOf("12/256") !== -1 &&
    name.indexOf("pink") !== -1
  ) {
    return 37483;
  } else if (
    name.indexOf("s25+") !== -1 &&
    name.indexOf("ultra") === -1 &&
    name.indexOf("12/256") !== -1 &&
    name.indexOf("pink") !== -1
  ) {
    return 37485;
  } else if (
    name.indexOf("s25") !== -1 &&
    name.indexOf("ultra") === -1 &&
    name.indexOf("s25+") === -1 &&
    name.indexOf("12/256") !== -1 &&
    name.indexOf("black") !== -1
  ) {
    return 37487;
  } else if (
    name.indexOf("s25") !== -1 &&
    name.indexOf("ultra") === -1 &&
    name.indexOf("s25+") === -1 &&
    name.indexOf("12/256") !== -1 &&
    name.indexOf("red") !== -1
  ) {
    return 37490;
  } else if (
    name.indexOf("s25") !== -1 &&
    name.indexOf("ultra") === -1 &&
    name.indexOf("s25+") === -1 &&
    name.indexOf("12/256") !== -1 &&
    name.indexOf("navy") !== -1
  ) {
    return 37492;
  } else if (
    name.indexOf("s25") !== -1 &&
    name.indexOf("ultra") === -1 &&
    name.indexOf("s25+") === -1 &&
    name.indexOf("12/256") !== -1 &&
    name.indexOf("icyblue") !== -1
  ) {
    return 37495;
  } else if (
    name.indexOf("s25") !== -1 &&
    name.indexOf("ultra") === -1 &&
    name.indexOf("s25+") === -1 &&
    name.indexOf("12/256") !== -1 &&
    name.indexOf("silver") !== -1
  ) {
    return 37497;
  } else if (
    name.indexOf("s25") !== -1 &&
    name.indexOf("ultra") === -1 &&
    name.indexOf("s25+") === -1 &&
    name.indexOf("12/256") !== -1 &&
    name.indexOf("mint") !== -1
  ) {
    return 37499;
  } else if (
    name.indexOf("s25") !== -1 &&
    name.indexOf("ultra") === -1 &&
    name.indexOf("s25+") === -1 &&
    name.indexOf("12/512") !== -1 &&
    name.indexOf("black") !== -1
  ) {
    return 37508;
  } else if (
    name.indexOf("s25") !== -1 &&
    name.indexOf("ultra") === -1 &&
    name.indexOf("s25+") === -1 &&
    name.indexOf("12/512") !== -1 &&
    name.indexOf("red") !== -1
  ) {
    return 37509;
  } else if (
    name.indexOf("s25") !== -1 &&
    name.indexOf("ultra") === -1 &&
    name.indexOf("s25+") === -1 &&
    name.indexOf("12/512") !== -1 &&
    name.indexOf("icyblue") !== -1
  ) {
    return 37510;
  } else if (
    name.indexOf("s25") !== -1 &&
    name.indexOf("ultra") === -1 &&
    name.indexOf("s25+") === -1 &&
    name.indexOf("12/512") !== -1 &&
    name.indexOf("mint") !== -1
  ) {
    return 37511;
  } else if (
    name.indexOf("s25") !== -1 &&
    name.indexOf("ultra") === -1 &&
    name.indexOf("s25+") === -1 &&
    name.indexOf("12/512") !== -1 &&
    name.indexOf("navy") !== -1
  ) {
    return 37512;
  } else if (
    name.indexOf("s25") !== -1 &&
    name.indexOf("ultra") === -1 &&
    name.indexOf("s25+") === -1 &&
    name.indexOf("12/512") !== -1 &&
    name.indexOf("pink") !== -1
  ) {
    return 37513;
  } else if (
    name.indexOf("s25") !== -1 &&
    name.indexOf("ultra") === -1 &&
    name.indexOf("s25+") === -1 &&
    name.indexOf("12/512") !== -1 &&
    name.indexOf("silver") !== -1
  ) {
    return 37514;
  } else if (
    name.indexOf("s25") !== -1 &&
    name.indexOf("ultra") === -1 &&
    name.indexOf("s25+") === -1 &&
    name.indexOf("12/128") !== -1 &&
    name.indexOf("black") !== -1
  ) {
    return 37522;
  } else if (
    name.indexOf("s25") !== -1 &&
    name.indexOf("ultra") === -1 &&
    name.indexOf("s25+") === -1 &&
    name.indexOf("12/128") !== -1 &&
    name.indexOf("red") !== -1
  ) {
    return 37523;
  } else if (
    name.indexOf("s25") !== -1 &&
    name.indexOf("ultra") === -1 &&
    name.indexOf("s25+") === -1 &&
    name.indexOf("12/128") !== -1 &&
    name.indexOf("icyblue") !== -1
  ) {
    return 37524;
  } else if (
    name.indexOf("s25") !== -1 &&
    name.indexOf("ultra") === -1 &&
    name.indexOf("s25+") === -1 &&
    name.indexOf("12/128") !== -1 &&
    name.indexOf("mint") !== -1
  ) {
    return 37525;
  } else if (
    name.indexOf("s25") !== -1 &&
    name.indexOf("ultra") === -1 &&
    name.indexOf("s25+") === -1 &&
    name.indexOf("12/128") !== -1 &&
    name.indexOf("navy") !== -1
  ) {
    return 37526;
  } else if (
    name.indexOf("s25") !== -1 &&
    name.indexOf("ultra") === -1 &&
    name.indexOf("s25+") === -1 &&
    name.indexOf("12/128") !== -1 &&
    name.indexOf("pink") !== -1
  ) {
    return 37527;
  } else if (
    name.indexOf("s25") !== -1 &&
    name.indexOf("ultra") === -1 &&
    name.indexOf("s25+") === -1 &&
    name.indexOf("12/128") !== -1 &&
    name.indexOf("silver") !== -1
  ) {
    return 37528;
  } else if (
    name.indexOf("s25+") !== -1 &&
    name.indexOf("ultra") === -1 &&
    name.indexOf("12/256") !== -1 &&
    name.indexOf("black") !== -1
  ) {
    return 37564;
  } else if (
    name.indexOf("s25+") !== -1 &&
    name.indexOf("ultra") === -1 &&
    name.indexOf("12/256") !== -1 &&
    name.indexOf("red") !== -1
  ) {
    return 37565;
  } else if (
    name.indexOf("s25+") !== -1 &&
    name.indexOf("ultra") === -1 &&
    name.indexOf("12/256") !== -1 &&
    name.indexOf("icy") !== -1
  ) {
    return 37566;
  } else if (
    name.indexOf("s25+") !== -1 &&
    name.indexOf("ultra") === -1 &&
    name.indexOf("12/256") !== -1 &&
    name.indexOf("mint") !== -1
  ) {
    return 37567;
  } else if (
    name.indexOf("s25+") !== -1 &&
    name.indexOf("ultra") === -1 &&
    name.indexOf("12/256") !== -1 &&
    name.indexOf("navy") !== -1
  ) {
    return 37568;
  } else if (
    name.indexOf("s25+") !== -1 &&
    name.indexOf("ultra") === -1 &&
    name.indexOf("12/256") !== -1 &&
    name.indexOf("silver") !== -1
  ) {
    return 37570;
  } else if (
    name.indexOf("s25+") !== -1 &&
    name.indexOf("ultra") === -1 &&
    name.indexOf("12/512") !== -1 &&
    name.indexOf("black") !== -1
  ) {
    return 37578;
  } else if (
    name.indexOf("s25+") !== -1 &&
    name.indexOf("ultra") === -1 &&
    name.indexOf("12/512") !== -1 &&
    name.indexOf("red") !== -1
  ) {
    return 37579;
  } else if (
    name.indexOf("s25+") !== -1 &&
    name.indexOf("ultra") === -1 &&
    name.indexOf("12/512") !== -1 &&
    name.indexOf("icy") !== -1
  ) {
    return 37580;
  } else if (
    name.indexOf("s25+") !== -1 &&
    name.indexOf("ultra") === -1 &&
    name.indexOf("12/512") !== -1 &&
    name.indexOf("mint") !== -1
  ) {
    return 37581;
  } else if (
    name.indexOf("s25+") !== -1 &&
    name.indexOf("ultra") === -1 &&
    name.indexOf("12/512") !== -1 &&
    name.indexOf("navy") !== -1
  ) {
    return 37582;
  } else if (
    name.indexOf("s25+") !== -1 &&
    name.indexOf("ultra") === -1 &&
    name.indexOf("12/512") !== -1 &&
    name.indexOf("pink") !== -1
  ) {
    return 37583;
  } else if (
    name.indexOf("s25+") !== -1 &&
    name.indexOf("ultra") === -1 &&
    name.indexOf("12/512") !== -1 &&
    name.indexOf("silver") !== -1
  ) {
    return 37584;
  } else if (
    name.indexOf("s25 ultra") !== -1 &&
    name.indexOf("12/256") !== -1 &&
    name.indexOf("black") !== -1 &&
    name.indexOf("jet") === -1
  ) {
    return 37591;
  } else if (
    name.indexOf("s25 ultra") !== -1 &&
    name.indexOf("12/256") !== -1 &&
    name.indexOf("green") !== -1
  ) {
    return 37592;
  } else if (
    name.indexOf("s25 ultra") !== -1 &&
    name.indexOf("12/256") !== -1 &&
    name.indexOf("jet black") !== -1
  ) {
    return 37593;
  } else if (
    name.indexOf("s25 ultra") !== -1 &&
    name.indexOf("12/256") !== -1 &&
    name.indexOf("pink") !== -1
  ) {
    return 37594;
  } else if (
    name.indexOf("s25 ultra") !== -1 &&
    name.indexOf("12/256") !== -1 &&
    name.indexOf("blue") !== -1
  ) {
    return 37595;
  } else if (
    name.indexOf("s25 ultra") !== -1 &&
    name.indexOf("12/256") !== -1 &&
    name.indexOf("gray") !== -1
  ) {
    return 37596;
  } else if (
    name.indexOf("s25 ultra") !== -1 &&
    name.indexOf("12/256") !== -1 &&
    name.indexOf("white") !== -1
  ) {
    return 37597;
  } else if (
    name.indexOf("s25 ultra") !== -1 &&
    name.indexOf("12/512") !== -1 &&
    name.indexOf("black") !== -1 &&
    name.indexOf("jet") === -1
  ) {
    return 37627;
  } else if (
    name.indexOf("s25 ultra") !== -1 &&
    name.indexOf("12/512") !== -1 &&
    name.indexOf("green") !== -1
  ) {
    return 37628;
  } else if (
    name.indexOf("s25 ultra") !== -1 &&
    name.indexOf("12/512") !== -1 &&
    name.indexOf("jet black") !== -1
  ) {
    return 37629;
  } else if (
    name.indexOf("s25 ultra") !== -1 &&
    name.indexOf("12/512") !== -1 &&
    name.indexOf("pink") !== -1
  ) {
    return 37630;
  } else if (
    name.indexOf("s25 ultra") !== -1 &&
    name.indexOf("12/512") !== -1 &&
    name.indexOf("blue") !== -1
  ) {
    return 37631;
  } else if (
    name.indexOf("s25 ultra") !== -1 &&
    name.indexOf("12/512") !== -1 &&
    name.indexOf("gray") !== -1
  ) {
    return 37632;
  } else if (
    name.indexOf("s25 ultra") !== -1 &&
    name.indexOf("12/512") !== -1 &&
    name.indexOf("white") !== -1
  ) {
    return 37633;
  } else if (
    name.indexOf("s25 ultra") !== -1 &&
    name.indexOf("12/1tb") !== -1 &&
    name.indexOf("black") !== -1 &&
    name.indexOf("jet") === -1
  ) {
    return 37641;
  } else if (
    name.indexOf("s25 ultra") !== -1 &&
    name.indexOf("12/1tb") !== -1 &&
    name.indexOf("green") !== -1
  ) {
    return 37642;
  } else if (
    name.indexOf("s25 ultra") !== -1 &&
    name.indexOf("12/1tb") !== -1 &&
    name.indexOf("jet black") !== -1
  ) {
    return 37643;
  } else if (
    name.indexOf("s25 ultra") !== -1 &&
    name.indexOf("12/1tb") !== -1 &&
    name.indexOf("pink") !== -1
  ) {
    return 37644;
  } else if (
    name.indexOf("s25 ultra") !== -1 &&
    name.indexOf("12/1tb") !== -1 &&
    name.indexOf("blue") !== -1
  ) {
    return 37645;
  } else if (
    name.indexOf("s25 ultra") !== -1 &&
    name.indexOf("12/1tb") !== -1 &&
    name.indexOf("gray") !== -1
  ) {
    return 37646;
  } else if (
    name.indexOf("s25 ultra") !== -1 &&
    name.indexOf("12/1tb") !== -1 &&
    name.indexOf("white") !== -1
  ) {
    return 37647;
  } else if (
    name.indexOf("s25 ultra") !== -1 &&
    name.indexOf("16/1tb") !== -1 &&
    name.indexOf("black") !== -1 &&
    name.indexOf("jet") === -1
  ) {
    return 37655;
  } else if (
    name.indexOf("s25 ultra") !== -1 &&
    name.indexOf("16/1tb") !== -1 &&
    name.indexOf("green") !== -1
  ) {
    return 37656;
  } else if (
    name.indexOf("s25 ultra") !== -1 &&
    name.indexOf("16/1tb") !== -1 &&
    name.indexOf("jet black") !== -1
  ) {
    return 37657;
  } else if (
    name.indexOf("s25 ultra") !== -1 &&
    name.indexOf("16/1tb") !== -1 &&
    name.indexOf("pink") !== -1
  ) {
    return 37658;
  } else if (
    name.indexOf("s25 ultra") !== -1 &&
    name.indexOf("16/1tb") !== -1 &&
    name.indexOf("blue") !== -1
  ) {
    return 37659;
  } else if (
    name.indexOf("s25 ultra") !== -1 &&
    name.indexOf("16/1tb") !== -1 &&
    name.indexOf("gray") !== -1
  ) {
    return 37660;
  } else if (
    name.indexOf("s25 ultra") !== -1 &&
    name.indexOf("16/1tb") !== -1 &&
    name.indexOf("white") !== -1
  ) {
    return 37661;
    // Apple
  } else if (
    (name.indexOf("15 128") !== -1 &&
      name.indexOf(" black ") !== -1 &&
      name.indexOf("🇨🇳") !== -1) ||
    (name.indexOf("15 128") !== -1 &&
      name.indexOf("midnight") !== -1 &&
      name.indexOf("🇨🇳") !== -1) ||
    (name.indexOf("15 128") !== -1 &&
      name.indexOf(" black ") !== -1 &&
      name.indexOf("🇭🇰") !== -1) ||
    (name.indexOf("15 128") !== -1 &&
      name.indexOf("midnight") !== -1 &&
      name.indexOf("🇭🇰") !== -1)
  ) {
    return 30370;
  } else if (
    (name.indexOf("15 128") !== -1 &&
      name.indexOf("blue") !== -1 &&
      name.indexOf("🇨🇳") !== -1) ||
    (name.indexOf("15 128") !== -1 &&
      name.indexOf("blue") !== -1 &&
      name.indexOf("🇭🇰") !== -1)
  ) {
    return 30371;
  } else if (
    (name.indexOf("15 128") !== -1 &&
      name.indexOf(" green ") !== -1 &&
      name.indexOf("🇨🇳") !== -1) ||
    (name.indexOf("15 128") !== -1 &&
      name.indexOf("green") !== -1 &&
      name.indexOf("🇭🇰") !== -1)
  ) {
    return 30372;
  } else if (
    (name.indexOf("15 128") !== -1 &&
      name.indexOf(" pink ") !== -1 &&
      name.indexOf("🇨🇳") !== -1) ||
    (name.indexOf("15 128") !== -1 &&
      name.indexOf("pink") !== -1 &&
      name.indexOf("🇭🇰") !== -1)
  ) {
    return 30373;
  } else if (
    (name.indexOf("15 128") !== -1 &&
      name.indexOf(" yellow ") !== -1 &&
      name.indexOf("🇨🇳") !== -1) ||
    (name.indexOf("15 128") !== -1 &&
      name.indexOf("yellow") !== -1 &&
      name.indexOf("🇭🇰") !== -1)
  ) {
    return 30374;
  } else if (
    name.indexOf("15 128 black") !== -1 ||
    name.indexOf("15 128 midnight") !== -1
  ) {
    return 28224;
  } else if (name.indexOf("15 128 blue") !== -1) {
    return 28227;
  } else if (name.indexOf("15 128 green") !== -1) {
    return 28230;
  } else if (name.indexOf("15 128 pink") !== -1) {
    return 28236;
  } else if (name.indexOf("15 128 yellow") !== -1) {
    return 28233;
  } else if (
    (name.indexOf("15 256") !== -1 &&
      name.indexOf(" black ") !== -1 &&
      name.indexOf("🇨🇳") !== -1) ||
    (name.indexOf("15 256") !== -1 &&
      name.indexOf("midnight") !== -1 &&
      name.indexOf("🇨🇳") !== -1) ||
    (name.indexOf("15 256") !== -1 &&
      name.indexOf(" black ") !== -1 &&
      name.indexOf("🇭🇰") !== -1) ||
    (name.indexOf("15 256") !== -1 &&
      name.indexOf("midnight") !== -1 &&
      name.indexOf("🇭🇰") !== -1)
  ) {
    return 30375;
  } else if (
    (name.indexOf("15 256") !== -1 &&
      name.indexOf("blue") !== -1 &&
      name.indexOf("🇨🇳") !== -1) ||
    (name.indexOf("15 256") !== -1 &&
      name.indexOf("blue") !== -1 &&
      name.indexOf("🇭🇰") !== -1)
  ) {
    return 30376;
  } else if (
    (name.indexOf("15 256") !== -1 &&
      name.indexOf("green") !== -1 &&
      name.indexOf("🇨🇳") !== -1) ||
    (name.indexOf("15 256") !== -1 &&
      name.indexOf("green") !== -1 &&
      name.indexOf("🇭🇰") !== -1)
  ) {
    return 30377;
  } else if (
    (name.indexOf("15 256") !== -1 &&
      name.indexOf("pink") !== -1 &&
      name.indexOf("🇨🇳") !== -1) ||
    (name.indexOf("15 256") !== -1 &&
      name.indexOf("pink") !== -1 &&
      name.indexOf("🇭🇰") !== -1)
  ) {
    return 30378;
  } else if (
    (name.indexOf("15 256") !== -1 &&
      name.indexOf("yellow") !== -1 &&
      name.indexOf("🇨🇳") !== -1) ||
    (name.indexOf("15 256") !== -1 &&
      name.indexOf("yellow") !== -1 &&
      name.indexOf("🇭🇰") !== -1)
  ) {
    return 30379;
  } else if (
    name.indexOf("15 256 black") !== -1 ||
    name.indexOf("15 256 midnight") !== -1
  ) {
    return 28225;
  } else if (name.indexOf("15 256 blue") !== -1) {
    return 28228;
  } else if (name.indexOf("15 256 green") !== -1) {
    return 28231;
  } else if (name.indexOf("15 256 pink") !== -1) {
    return 28237;
  } else if (name.indexOf("15 256 yellow") !== -1) {
    return 28234;
  } else if (
    (name.indexOf("15 512") !== -1 &&
      name.indexOf(" black ") !== -1 &&
      name.indexOf("🇨🇳") !== -1) ||
    (name.indexOf("15 512") !== -1 &&
      name.indexOf("midnight") !== -1 &&
      name.indexOf("🇨🇳") !== -1) ||
    (name.indexOf("15 512") !== -1 &&
      name.indexOf(" black ") !== -1 &&
      name.indexOf("🇭🇰") !== -1) ||
    (name.indexOf("15 512") !== -1 &&
      name.indexOf("midnight") !== -1 &&
      name.indexOf("🇭🇰") !== -1)
  ) {
    return 30380;
  } else if (
    (name.indexOf("15 512") !== -1 &&
      name.indexOf("blue") !== -1 &&
      name.indexOf("🇨🇳") !== -1) ||
    (name.indexOf("15 512") !== -1 &&
      name.indexOf("blue") !== -1 &&
      name.indexOf("🇭🇰") !== -1)
  ) {
    return 30381;
  } else if (
    (name.indexOf("15 512") !== -1 &&
      name.indexOf("green") !== -1 &&
      name.indexOf("🇨🇳") !== -1) ||
    (name.indexOf("15 512") !== -1 &&
      name.indexOf("green") !== -1 &&
      name.indexOf("🇭🇰") !== -1)
  ) {
    return 30382;
  } else if (
    (name.indexOf("15 512") !== -1 &&
      name.indexOf("pink") !== -1 &&
      name.indexOf("🇨🇳") !== -1) ||
    (name.indexOf("15 512") !== -1 &&
      name.indexOf("pink") !== -1 &&
      name.indexOf("🇭🇰") !== -1)
  ) {
    return 30383;
  } else if (
    (name.indexOf("15 512") !== -1 &&
      name.indexOf("yellow") !== -1 &&
      name.indexOf("🇨🇳") !== -1) ||
    (name.indexOf("15 512") !== -1 &&
      name.indexOf("yellow") !== -1 &&
      name.indexOf("🇭🇰") !== -1)
  ) {
    return 30384;
  } else if (
    name.indexOf("15 512 black") !== -1 ||
    name.indexOf("15 512 midnight") !== -1
  ) {
    return 28226;
  } else if (name.indexOf("15 512 blue") !== -1) {
    return 28229;
  } else if (name.indexOf("15 512 green") !== -1) {
    return 28232;
  } else if (name.indexOf("15 512 pink") !== -1) {
    return 28238;
  } else if (name.indexOf("15 512 yellow") !== -1) {
    return 28235;
  } else if (
    (name.indexOf("15 plus 128") !== -1 &&
      name.indexOf(" black ") !== -1 &&
      name.indexOf("🇨🇳") !== -1) ||
    (name.indexOf("15 plus 128") !== -1 &&
      name.indexOf("midnight") !== -1 &&
      name.indexOf("🇨🇳") !== -1) ||
    (name.indexOf("15 plus 128") !== -1 &&
      name.indexOf(" black ") !== -1 &&
      name.indexOf("🇭🇰") !== -1) ||
    (name.indexOf("15 plus 128") !== -1 &&
      name.indexOf("midnight") !== -1 &&
      name.indexOf("🇭🇰") !== -1)
  ) {
    return 30385;
  } else if (
    (name.indexOf("15 plus 128") !== -1 &&
      name.indexOf("blue") !== -1 &&
      name.indexOf("🇨🇳") !== -1) ||
    (name.indexOf("15 plus 128") !== -1 &&
      name.indexOf("blue") !== -1 &&
      name.indexOf("🇭🇰") !== -1)
  ) {
    return 30386;
  } else if (
    (name.indexOf("15 plus 128") !== -1 &&
      name.indexOf("green") !== -1 &&
      name.indexOf("🇨🇳") !== -1) ||
    (name.indexOf("15 plus 128") !== -1 &&
      name.indexOf("green") !== -1 &&
      name.indexOf("🇭🇰") !== -1)
  ) {
    return 30387;
  } else if (
    (name.indexOf("15 plus 128") !== -1 &&
      name.indexOf("pink") !== -1 &&
      name.indexOf("🇨🇳") !== -1) ||
    (name.indexOf("15 plus 128") !== -1 &&
      name.indexOf("pink") !== -1 &&
      name.indexOf("🇭🇰") !== -1)
  ) {
    return 30388;
  } else if (
    (name.indexOf("15 plus 128") !== -1 &&
      name.indexOf("yellow") !== -1 &&
      name.indexOf("🇨🇳") !== -1) ||
    (name.indexOf("15 plus 128") !== -1 &&
      name.indexOf("yellow") !== -1 &&
      name.indexOf("🇭🇰") !== -1)
  ) {
    return 30389;
  } else if (
    name.indexOf("15 plus 128 yellow 🇺🇸") !== -1 ||
    name.indexOf("15 plus 128 yellow 🇺🇸") !== -1 ||
    name.indexOf("15 plus 128 yellow🇺🇸") !== -1
  ) {
    return 30331;
  } else if (
    name.indexOf("15 plus 128 black") !== -1 ||
    name.indexOf("15 plus 128 midnight") !== -1
  ) {
    return 28239;
  } else if (name.indexOf("15 plus 128 blue") !== -1) {
    return 28242;
  } else if (name.indexOf("15 plus 128 green") !== -1) {
    return 28245;
  } else if (name.indexOf("15 plus 128 pink") !== -1) {
    return 28248;
  } else if (name.indexOf("15 plus 128 yellow") !== -1) {
    return 28251;
  } else if (
    (name.indexOf("15 plus 256") !== -1 &&
      name.indexOf(" black ") !== -1 &&
      name.indexOf("🇨🇳") !== -1) ||
    (name.indexOf("15 plus 256") !== -1 &&
      name.indexOf("midnight") !== -1 &&
      name.indexOf("🇨🇳") !== -1) ||
    (name.indexOf("15 plus 256") !== -1 &&
      name.indexOf(" black ") !== -1 &&
      name.indexOf("🇭🇰") !== -1) ||
    (name.indexOf("15 plus 256") !== -1 &&
      name.indexOf("midnight") !== -1 &&
      name.indexOf("🇭🇰") !== -1)
  ) {
    return 30390;
  } else if (
    (name.indexOf("15 plus 256") !== -1 &&
      name.indexOf("blue") !== -1 &&
      name.indexOf("🇨🇳") !== -1) ||
    (name.indexOf("15 plus 256") !== -1 &&
      name.indexOf("blue") !== -1 &&
      name.indexOf("🇭🇰") !== -1)
  ) {
    return 30391;
  } else if (
    (name.indexOf("15 plus 256") !== -1 &&
      name.indexOf("green") !== -1 &&
      name.indexOf("🇨🇳") !== -1) ||
    (name.indexOf("15 plus 256") !== -1 &&
      name.indexOf("green") !== -1 &&
      name.indexOf("🇭🇰") !== -1)
  ) {
    return 30392;
  } else if (
    (name.indexOf("15 plus 256") !== -1 &&
      name.indexOf("pink") !== -1 &&
      name.indexOf("🇨🇳") !== -1) ||
    (name.indexOf("15 plus 256") !== -1 &&
      name.indexOf("pink") !== -1 &&
      name.indexOf("🇭🇰") !== -1)
  ) {
    return 30393;
  } else if (
    (name.indexOf("15 plus 256") !== -1 &&
      name.indexOf("yellow") !== -1 &&
      name.indexOf("🇨🇳") !== -1) ||
    (name.indexOf("15 plus 256") !== -1 &&
      name.indexOf("yellow") !== -1 &&
      name.indexOf("🇭🇰") !== -1)
  ) {
    return 30394;
  } else if (
    name.indexOf("15 plus 256 black") !== -1 ||
    name.indexOf("15 plus 256 midnight") !== -1
  ) {
    return 28240;
  } else if (name.indexOf("15 plus 256 blue") !== -1) {
    return 28243;
  } else if (name.indexOf("15 plus 256 green") !== -1) {
    return 28246;
  } else if (name.indexOf("15 plus 256 pink") !== -1) {
    return 28249;
  } else if (name.indexOf("15 plus 256 yellow") !== -1) {
    return 28252;
  } else if (
    (name.indexOf("15 plus 512") !== -1 &&
      name.indexOf(" black ") !== -1 &&
      name.indexOf("🇨🇳") !== -1) ||
    (name.indexOf("15 plus 512") !== -1 &&
      name.indexOf("midnight") !== -1 &&
      name.indexOf("🇨🇳") !== -1) ||
    (name.indexOf("15 plus 512") !== -1 &&
      name.indexOf(" black ") !== -1 &&
      name.indexOf("🇭🇰") !== -1) ||
    (name.indexOf("15 plus 512") !== -1 &&
      name.indexOf("midnight") !== -1 &&
      name.indexOf("🇭🇰") !== -1)
  ) {
    return 30395;
  } else if (
    (name.indexOf("15 plus 512") !== -1 &&
      name.indexOf("blue") !== -1 &&
      name.indexOf("🇨🇳") !== -1) ||
    (name.indexOf("15 plus 512") !== -1 &&
      name.indexOf("blue") !== -1 &&
      name.indexOf("🇭🇰") !== -1)
  ) {
    return 30396;
  } else if (
    (name.indexOf("15 plus 512") !== -1 &&
      name.indexOf("green") !== -1 &&
      name.indexOf("🇨🇳") !== -1) ||
    (name.indexOf("15 plus 512") !== -1 &&
      name.indexOf("green") !== -1 &&
      name.indexOf("🇭🇰") !== -1)
  ) {
    return 30397;
  } else if (
    (name.indexOf("15 plus 512") !== -1 &&
      name.indexOf("pink") !== -1 &&
      name.indexOf("🇨🇳") !== -1) ||
    (name.indexOf("15 plus 512") !== -1 &&
      name.indexOf("pink") !== -1 &&
      name.indexOf("🇭🇰") !== -1)
  ) {
    return 30398;
  } else if (
    (name.indexOf("15 plus 512") !== -1 &&
      name.indexOf("yellow") !== -1 &&
      name.indexOf("🇨🇳") !== -1) ||
    (name.indexOf("15 plus 512") !== -1 &&
      name.indexOf("yellow") !== -1 &&
      name.indexOf("🇭🇰") !== -1)
  ) {
    return 30399;
  } else if (
    name.indexOf("15 plus 512 black") !== -1 ||
    name.indexOf("15 plus 512 midnight") !== -1
  ) {
    return 28241;
  } else if (name.indexOf("15 plus 512 blue") !== -1) {
    return 28244;
  } else if (name.indexOf("15 plus 512 green") !== -1) {
    return 28247;
  } else if (name.indexOf("15 plus 512 pink") !== -1) {
    return 28250;
  } else if (name.indexOf("15 plus 512 yellow") !== -1) {
    return 28253;
  } else if (
    (name.indexOf("15 pro 1tb") !== -1 &&
      name.indexOf("black") !== -1 &&
      name.indexOf("🇨🇳") !== -1) ||
    (name.indexOf("15 pro 1tb") !== -1 &&
      name.indexOf("black") !== -1 &&
      name.indexOf("🇭🇰") !== -1)
  ) {
    return 30400;
  } else if (
    (name.indexOf("15 pro 1tb") !== -1 &&
      name.indexOf("blue") !== -1 &&
      name.indexOf("🇨🇳") !== -1) ||
    (name.indexOf("15 pro 1tb") !== -1 &&
      name.indexOf("blue") !== -1 &&
      name.indexOf("🇭🇰") !== -1)
  ) {
    return 30401;
  } else if (
    (name.indexOf("15 pro 1tb") !== -1 &&
      name.indexOf("natural") !== -1 &&
      name.indexOf("🇨🇳") !== -1) ||
    (name.indexOf("15 pro 1tb") !== -1 &&
      name.indexOf("natural") !== -1 &&
      name.indexOf("🇭🇰") !== -1)
  ) {
    return 30402;
  } else if (
    (name.indexOf("15 pro 1tb") !== -1 &&
      name.indexOf("white") !== -1 &&
      name.indexOf("🇨🇳") !== -1) ||
    (name.indexOf("15 pro 1tb") !== -1 &&
      name.indexOf("white") !== -1 &&
      name.indexOf("🇭🇰") !== -1)
  ) {
    return 30403;
  } else if (
    name.indexOf("15 pro 1tb black ") !== -1 ||
    name.indexOf("15 pro 1tb black ") !== -1
  ) {
    return 28257;
  } else if (
    name.indexOf("15 pro 1tb blue ") !== -1 ||
    name.indexOf("15 pro 1tb blue ") !== -1
  ) {
    return 28258;
  } else if (
    name.indexOf("15 pro 1tb natural ") !== -1 ||
    name.indexOf("15 pro 1tb natural ") !== -1
  ) {
    return 28262;
  } else if (
    name.indexOf("15 pro 1tb white ") !== -1 ||
    name.indexOf("15 pro 1tb white ") !== -1
  ) {
    return 28266;
  } else if (
    (name.indexOf("15 pro 128") !== -1 &&
      name.indexOf("black") !== -1 &&
      name.indexOf("🇨🇳") !== -1) ||
    (name.indexOf("15 pro 128") !== -1 &&
      name.indexOf("black") !== -1 &&
      name.indexOf("🇭🇰") !== -1)
  ) {
    return 30404;
  } else if (
    (name.indexOf("15 pro 128") !== -1 &&
      name.indexOf("blue") !== -1 &&
      name.indexOf("🇨🇳") !== -1) ||
    (name.indexOf("15 pro 128") !== -1 &&
      name.indexOf("blue") !== -1 &&
      name.indexOf("🇭🇰") !== -1)
  ) {
    return 30405;
  } else if (
    (name.indexOf("15 pro 128") !== -1 &&
      name.indexOf("natural") !== -1 &&
      name.indexOf("🇨🇳") !== -1) ||
    (name.indexOf("15 pro 128") !== -1 &&
      name.indexOf("natural") !== -1 &&
      name.indexOf("🇭🇰") !== -1)
  ) {
    return 30406;
  } else if (
    (name.indexOf("15 pro 128") !== -1 &&
      name.indexOf("white") !== -1 &&
      name.indexOf("🇨🇳") !== -1) ||
    (name.indexOf("15 pro 128") !== -1 &&
      name.indexOf("white") !== -1 &&
      name.indexOf("🇭🇰") !== -1)
  ) {
    return 30407;
  } else if (name.indexOf("15 pro 128 blue") !== -1) {
    return 28259;
  } else if (name.indexOf("15 pro 128 natural") !== -1) {
    return 28263;
  } else if (name.indexOf("15 pro 128 white") !== -1) {
    return 28267;
  } else if (
    (name.indexOf("15 pro 256") !== -1 &&
      name.indexOf("black") !== -1 &&
      name.indexOf("🇨🇳") !== -1) ||
    (name.indexOf("15 pro 256") !== -1 &&
      name.indexOf("black") !== -1 &&
      name.indexOf("🇭🇰") !== -1)
  ) {
    return 30408;
  } else if (
    (name.indexOf("15 pro 256") !== -1 &&
      name.indexOf("blue") !== -1 &&
      name.indexOf("🇨🇳") !== -1) ||
    (name.indexOf("15 pro 256") !== -1 &&
      name.indexOf("blue") !== -1 &&
      name.indexOf("🇭🇰") !== -1)
  ) {
    return 30409;
  } else if (
    (name.indexOf("15 pro 256") !== -1 &&
      name.indexOf("natural") !== -1 &&
      name.indexOf("🇨🇳") !== -1) ||
    (name.indexOf("15 pro 256") !== -1 &&
      name.indexOf("natural") !== -1 &&
      name.indexOf("🇭🇰") !== -1)
  ) {
    return 30410;
  } else if (
    (name.indexOf("15 pro 256") !== -1 &&
      name.indexOf("white") !== -1 &&
      name.indexOf("🇭🇰") !== -1) ||
    (name.indexOf("15 pro 256") !== -1 &&
      name.indexOf("white") !== -1 &&
      name.indexOf("🇨🇳") !== -1)
  ) {
    return 30411;
  } else if (name.indexOf("15 pro 256 blue ") !== -1) {
    return 28260;
  } else if (name.indexOf("15 pro 256 natural ") !== -1) {
    return 28264;
  } else if (name.indexOf("15 pro 256 white ") !== -1) {
    return 28268;
  } else if (
    (name.indexOf("15 pro 512") !== -1 &&
      name.indexOf("black") !== -1 &&
      name.indexOf("🇨🇳") !== -1) ||
    (name.indexOf("15 pro 512") !== -1 &&
      name.indexOf("black") !== -1 &&
      name.indexOf("🇭🇰") !== -1)
  ) {
    return 30412;
  } else if (
    (name.indexOf("15 pro 512") !== -1 &&
      name.indexOf("blue") !== -1 &&
      name.indexOf("🇨🇳") !== -1) ||
    (name.indexOf("15 pro 512") !== -1 &&
      name.indexOf("blue") !== -1 &&
      name.indexOf("🇭🇰") !== -1)
  ) {
    return 30413;
  } else if (
    (name.indexOf("15 pro 512") !== -1 &&
      name.indexOf("natural") !== -1 &&
      name.indexOf("🇨🇳") !== -1) ||
    (name.indexOf("15 pro 512") !== -1 &&
      name.indexOf("natural") !== -1 &&
      name.indexOf("🇭🇰") !== -1)
  ) {
    return 30414;
  } else if (
    (name.indexOf("15 pro 512") !== -1 &&
      name.indexOf("white") !== -1 &&
      name.indexOf("🇨🇳") !== -1) ||
    (name.indexOf("15 pro 512") !== -1 &&
      name.indexOf("white") !== -1 &&
      name.indexOf("🇭🇰") !== -1)
  ) {
    return 30415;
  } else if (name.indexOf("15 pro 512 blue") !== -1) {
    return 28261;
  } else if (name.indexOf("15 pro 512 natural") !== -1) {
    return 28265;
  } else if (
    name.indexOf("15 pro 512") !== -1 &&
    (name.indexOf("whıte") !== -1 || name.indexOf("white") !== -1)
  ) {
    return 28269;
  } else if (
    (name.indexOf("15 pro max 1tb") !== -1 &&
      name.indexOf("black") !== -1 &&
      name.indexOf("🇨🇳") !== -1) ||
    (name.indexOf("15 pro max 1tb") !== -1 &&
      name.indexOf("black") !== -1 &&
      name.indexOf("🇭🇰") !== -1)
  ) {
    return 30416;
  } else if (
    (name.indexOf("15 pro max 1tb") !== -1 &&
      name.indexOf("blue") !== -1 &&
      name.indexOf("🇨🇳") !== -1) ||
    (name.indexOf("15 pro max 1tb") !== -1 &&
      name.indexOf("blue") !== -1 &&
      name.indexOf("🇭🇰") !== -1)
  ) {
    return 30417;
  } else if (
    (name.indexOf("15 pro max 1tb") !== -1 &&
      name.indexOf("natural") !== -1 &&
      name.indexOf("🇨🇳") !== -1) ||
    (name.indexOf("15 pro max 1tb") !== -1 &&
      name.indexOf("natural") !== -1 &&
      name.indexOf("🇭🇰") !== -1)
  ) {
    return 30418;
  } else if (
    (name.indexOf("15 pro max 1tb") !== -1 &&
      name.indexOf("white") !== -1 &&
      name.indexOf("🇨🇳") !== -1) ||
    (name.indexOf("15 pro max 1tb") !== -1 &&
      name.indexOf("white") !== -1 &&
      name.indexOf("🇭🇰") !== -1)
  ) {
    return 30419;
  } else if (
    name.indexOf("15 pro max 1tb black ") !== -1 ||
    name.indexOf("15 pro max 1tb black ") !== -1
  ) {
    return 28272;
  } else if (
    name.indexOf("15 pro max 1tb blue ") !== -1 ||
    name.indexOf("15 pro max 1tb blue ") !== -1
  ) {
    return 28273;
  } else if (
    name.indexOf("15 pro max 1tb natural ") !== -1 ||
    name.indexOf("15 pro max 1tb natural ") !== -1
  ) {
    return 28276;
  } else if (
    name.indexOf("15 pro max 1tb white ") !== -1 ||
    name.indexOf("15 pro max 1tb white ") !== -1
  ) {
    return 28279;
  } else if (
    (name.indexOf("15 pro max 256") !== -1 &&
      name.indexOf("black") !== -1 &&
      name.indexOf("🇨🇳") !== -1) ||
    (name.indexOf("15 pro max 256") !== -1 &&
      name.indexOf("black") !== -1 &&
      name.indexOf("🇭🇰") !== -1)
  ) {
    return 30420;
  } else if (
    (name.indexOf("15 pro max 256") !== -1 &&
      name.indexOf("blue") !== -1 &&
      name.indexOf("🇨🇳") !== -1) ||
    (name.indexOf("15 pro max 256") !== -1 &&
      name.indexOf("blue") !== -1 &&
      name.indexOf("🇭🇰") !== -1)
  ) {
    return 30421;
  } else if (
    (name.indexOf("15 pro max 256") !== -1 &&
      name.indexOf("natural") !== -1 &&
      name.indexOf("🇨🇳") !== -1) ||
    (name.indexOf("15 pro max 256") !== -1 &&
      name.indexOf("natural") !== -1 &&
      name.indexOf("🇭🇰") !== -1)
  ) {
    return 30422;
  } else if (
    (name.indexOf("15 pro max 256") !== -1 &&
      name.indexOf("white") !== -1 &&
      name.indexOf("🇨🇳") !== -1) ||
    (name.indexOf("15 pro max 256") !== -1 &&
      name.indexOf("white") !== -1 &&
      name.indexOf("🇭🇰") !== -1)
  ) {
    return 30423;
  } else if (name.indexOf("15 pro max 256 blue") !== -1) {
    return 28274;
  } else if (name.indexOf("15 pro max 256 natural") !== -1) {
    return 28277;
  } else if (name.indexOf("15 pro max 256 white") !== -1) {
    return 28280;
  } else if (
    (name.indexOf("15 pro max 512") !== -1 &&
      name.indexOf("black") !== -1 &&
      name.indexOf("🇨🇳") !== -1) ||
    (name.indexOf("15 pro max 512") !== -1 &&
      name.indexOf("black") !== -1 &&
      name.indexOf("🇭🇰") !== -1)
  ) {
    return 30424;
  } else if (
    (name.indexOf("15 pro max 512") !== -1 &&
      name.indexOf("blue") !== -1 &&
      name.indexOf("🇨🇳") !== -1) ||
    (name.indexOf("15 pro max 512") !== -1 &&
      name.indexOf("blue") !== -1 &&
      name.indexOf("🇭🇰") !== -1)
  ) {
    return 30425;
  } else if (
    (name.indexOf("15 pro max 512") !== -1 &&
      name.indexOf("natural") !== -1 &&
      name.indexOf("🇨🇳") !== -1) ||
    (name.indexOf("15 pro max 512") !== -1 &&
      name.indexOf("natural") !== -1 &&
      name.indexOf("🇭🇰") !== -1)
  ) {
    return 30426;
  } else if (
    (name.indexOf("15 pro max 512") !== -1 &&
      name.indexOf("white") !== -1 &&
      name.indexOf("🇨🇳") !== -1) ||
    (name.indexOf("15 pro max 512") !== -1 &&
      name.indexOf("white") !== -1 &&
      name.indexOf("🇭🇰") !== -1)
  ) {
    return 30427;
  } else if (name.indexOf("15 pro max 512 blue") !== -1) {
    return 28275;
  } else if (name.indexOf("15 pro max 512 natural") !== -1) {
    return 28278;
  } else if (name.indexOf("15 pro max 512 white") !== -1) {
    return 28281;
  } else if (name.indexOf("16 128 black") !== -1) {
    return 36611;
  } else if (name.indexOf("16 128 pink") !== -1) {
    return 36618;
  } else if (
    name.indexOf("16 128 teal") !== -1 ||
    name.indexOf("16 128 green") !== -1
  ) {
    return 36617;
  } else if (
    name.indexOf("16 128 ultramarine") !== -1 ||
    name.indexOf("16 128 blue") !== -1
  ) {
    return 36615;
  } else if (name.indexOf("16 128 white") !== -1) {
    return 36616;
  } else if (name.indexOf("16 256 black") !== -1) {
    return 36619;
  } else if (name.indexOf("16 256 pink") !== -1) {
    return 36620;
  } else if (
    name.indexOf("16 256 teal") !== -1 ||
    name.indexOf("16 256 green") !== -1
  ) {
    return 36621;
  } else if (
    name.indexOf("16 256 ultramarine") !== -1 ||
    name.indexOf("16 256 blue") !== -1
  ) {
    return 36622;
  } else if (name.indexOf("16 256 white") !== -1) {
    return 36623;
  } else if (name.indexOf("16 512 black") !== -1) {
    return 36624;
  } else if (name.indexOf("16 512 pink") !== -1) {
    return 36625;
  } else if (
    name.indexOf("16 512 teal") !== -1 ||
    name.indexOf("16 512 green") !== -1
  ) {
    return 36626;
  } else if (
    name.indexOf("16 512 ultramarine") !== -1 ||
    name.indexOf("16 512 blue") !== -1
  ) {
    return 36627;
  } else if (name.indexOf("16 512 white") !== -1) {
    return 36628;
  } else if (name.indexOf("16 plus 128 black") !== -1) {
    return 36612;
  } else if (name.indexOf("16 plus 128 pink") !== -1) {
    return 36630;
  } else if (
    name.indexOf("16 plus 128 teal") !== -1 ||
    name.indexOf("16 plus 128 green") !== -1
  ) {
    return 36629;
  } else if (
    name.indexOf("16 plus 128 ultramarine") !== -1 ||
    name.indexOf("16 plus 128 blue") !== -1
  ) {
    return 36632;
  } else if (name.indexOf("16 plus 128 white") !== -1) {
    return 36631;
  } else if (name.indexOf("16 plus 256 black") !== -1) {
    return 36633;
  } else if (name.indexOf("16 plus 256 pink") !== -1) {
    return 36634;
  } else if (
    name.indexOf("16 plus 256 teal") !== -1 ||
    name.indexOf("16 plus 256 green") !== -1
  ) {
    return 36635;
  } else if (
    name.indexOf("16 plus 256 ultramarine") !== -1 ||
    name.indexOf("16 plus 256 blue") !== -1
  ) {
    return 36636;
  } else if (name.indexOf("16 plus 256 white") !== -1) {
    return 36637;
  } else if (name.indexOf("16 plus 512 black") !== -1) {
    return 36638;
  } else if (name.indexOf("16 plus 512 pink") !== -1) {
    return 36639;
  } else if (
    name.indexOf("16 plus 512 teal") !== -1 ||
    name.indexOf("16 plus 512 green") !== -1
  ) {
    return 36640;
  } else if (
    name.indexOf("16 plus 512 ultramarine") !== -1 ||
    name.indexOf("16 plus 512 blue") !== -1
  ) {
    return 36641;
  } else if (name.indexOf("16 plus 512 white") !== -1) {
    return 36642;
  } else if (name.indexOf("16 pro 1tb black") !== -1) {
    return 36655;
  } else if (name.indexOf("16 pro 1tb desert") !== -1) {
    return 36645;
  } else if (name.indexOf("16 pro 1tb natural") !== -1) {
    return 36661;
  } else if (name.indexOf("16 pro 1tb white") !== -1) {
    return 36658;
  } else if (name.indexOf("16 pro 128 black") !== -1) {
    return 38662;
  } else if (name.indexOf("16 pro 128 desert") !== -1) {
    return 36652;
  } else if (name.indexOf("16 pro 128 natural") !== -1) {
    return 36659;
  } else if (name.indexOf("16 pro 128 white") !== -1) {
    return 36657;
  } else if (name.indexOf("16 pro 256 black") !== -1) {
    return 36653;
  } else if (name.indexOf("16 pro 256 desert") !== -1) {
    return 36650;
  } else if (name.indexOf("16 pro 256 natural") !== -1) {
    return 36660;
  } else if (name.indexOf("16 pro 256 white") !== -1) {
    return 36613;
  } else if (name.indexOf("16 pro 512 black") !== -1) {
    return 36654;
  } else if (name.indexOf("16 pro 512 desert") !== -1) {
    return 36651;
  } else if (name.indexOf("16 pro 512 natural") !== -1) {
    return 36644;
  } else if (name.indexOf("16 pro 512 white") !== -1) {
    return 36656;
  } else if (name.indexOf("16 pro max 1tb black") !== -1) {
    return 36664;
  } else if (name.indexOf("16 pro max 1tb desert") !== -1) {
    return 36673;
  } else if (name.indexOf("16 pro max 1tb natural") !== -1) {
    return 36665;
  } else if (name.indexOf("16 pro max 1tb white") !== -1) {
    return 38663;
  } else if (name.indexOf("16 pro max 256 black") !== -1) {
    return 36662;
  } else if (name.indexOf("16 pro max 256 desert") !== -1) {
    return 36675;
  } else if (name.indexOf("16 pro max 256 natural") !== -1) {
    return 36667;
  } else if (name.indexOf("16 pro max 256 white") !== -1) {
    return 38664;
  } else if (name.indexOf("16 pro max 512 black") !== -1) {
    return 36663;
  } else if (name.indexOf("16 pro max 512 desert") !== -1) {
    return 36676;
  } else if (name.indexOf("16 pro max 512 natural") !== -1) {
    return 36668;
  } else if (name.indexOf("16 pro max 512 white") !== -1) {
    return 38665;
  } else if (name.indexOf("16e 128 black") !== -1) {
    return 38256;
  } else if (name.indexOf("16e 128 white") !== -1) {
    return 38257;
  } else if (name.indexOf("16e 256 black") !== -1) {
    return 38258;
  } else if (name.indexOf("16e 256 white") !== -1) {
    return 38259;
  } else if (name.indexOf("16e 512 black") !== -1) {
    return 38262;
  } else if (name.indexOf("16e 512 white") !== -1) {
    return 38263;
  } else {
    return "No match";
  }
};
