export const returnFixNameArti = (name) => {
    const replacePhoneStar = name.replace("📱*", " ")
    const fixBlack = replacePhoneStar.replace("⚫", " Black")
    const fixPurple = fixBlack.replace("🟣", " Purple")
    const fixWhite = fixPurple.replace("⚪", " White")
    const fixBlue = fixWhite.replace("🔵", " Blue")
    const fixYellow = fixBlue.replace("🟡", " Yellow")
    const fixGreen = fixYellow.replace("🟢", " Green")
    const fixRed = fixGreen.replace("🔴", " Red")
    const fixPink = fixRed.replace("💕", " Pink")

    const replacePhone = replacePhoneStar.replace("📱", "")
    const replaceNewStar = replacePhone.replace("🆕*", " ")
    const replaceLaptopStar = replaceNewStar.replace("💻*", " ")
    const replaceMacMiniStar = replaceLaptopStar.replace("🖥*", " ")
    const replacePadStar = replaceMacMiniStar.replace("📋*", " ")
    const replaceStar = replacePadStar.replace("⭐", " ")
    const fixUSB = replaceStar.replace("2(USB-C)", "2 USB-C")
    const fixUSBC = fixUSB.replace("(USB-C)", "USB-C")
    const fix4ANC = fixUSBC.replace("4(шумодав)", "4 anc")
    const fix2023 = fix4ANC.replace("(2023)", "2023")

    return fix2023
}