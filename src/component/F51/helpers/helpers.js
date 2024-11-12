export const returnNameF51 = (name) => {
    const replaceGb = name.replace("Gb", "")
    const replac4G = replaceGb.replace("4G", "")
    const replac121T = replac4G.replace("1T ", "1Tb ")
    const fixS24Plus = replac121T.replace("S24 +", "S24+")
    const fixA05s464 = fixS24Plus.replace("A05s 4/05", "A05s 4/64")
    const fixNordCE3 = fixA05s464.replace("Nord CE 3", "Nord CE3")
    const fixLavender = fixNordCE3.replace("Lavander", "Lavender")
    const fixmm = fixLavender.replace("mm", "")
    const fixFEPlus = fixmm.replace("FE+", "FE +")
    const fixYelow = fixFEPlus.replace("Yelow", "Yellow");
    const fixRedmiPad = fixYelow.replace("8.7 ", "")
    const fixRedmiPadSELTE = fixRedmiPad.indexOf("Redmi Pad") != -1 ? fixRedmiPad.replace("LTE ", "") : fixRedmiPad
    const fixRedmiPadSE5G = fixRedmiPadSELTE.indexOf("Redmi Pad") != -1 ? fixRedmiPadSELTE.replace("5G ", "") : fixRedmiPadSELTE
    const fixRedmiPadWiFi = fixRedmiPadSE5G.indexOf("Redmi Pad") != -1 ? fixRedmiPadSE5G.replace("Wi-Fi ", "") : fixRedmiPadSE5G
    const fixRedmiPadSE6 = fixRedmiPadWiFi.replace("Pad SE6", "Pad SE 6")
    
    const fixParcelain = fixRedmiPadSE6.replace("Parcelain", "Porcelain")

    
    const fixA9Plus = fixParcelain.indexOf("Tab ") != -1 ? fixParcelain.replace("A9+", "A9 +") : fixParcelain
    const fixS9Plus = fixA9Plus.indexOf("Tab ") != -1 ? fixA9Plus.replace("S9+", "S9 +") : fixA9Plus
    const fixS9FEPlus = fixS9Plus.indexOf("Tab ") != -1 ? fixS9Plus.replace("S9 + FE", "S9 FE +") : fixS9Plus
    const replaceTabWiFi = fixS9FEPlus.indexOf("Tab ") != -1 ? fixS9FEPlus.replace("Wi-Fi ", "") : fixS9FEPlus
    const fixRedMagic9ProSilver= replaceTabWiFi.indexOf("Red Magic 9 PRO") != -1 ? replaceTabWiFi.replace("Silver", "Snowfall") : replaceTabWiFi
    const fixmi12Black = fixRedMagic9ProSilver.indexOf("mi 12") != -1 ? fixRedMagic9ProSilver.replace("Gray", "Black") : fixRedMagic9ProSilver
    const fixS23FEGraphite = fixmi12Black.indexOf("S23 FE") != -1 ? fixmi12Black.replace("Gray", "Graphite") : fixmi12Black

    return fixS23FEGraphite
}