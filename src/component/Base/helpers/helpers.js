export const returnFixNameBase= (name) => {
    const replaceGB = name.replace("GB", "")
    const replaceNote4G= replaceGB.indexOf("Note ") ? replaceGB.replace("4G ", "") : replaceGB
    const fixPlus = replaceNote4G.replace("Plus", "+")
    const fixNordCE3 = fixPlus.replace("Nord CE 3", "Nord CE3")

    return fixNordCE3
}