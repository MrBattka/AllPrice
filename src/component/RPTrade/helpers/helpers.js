export const returnFixNameRPTrade = (name) => {
    const replaceGB = name.replace("GB", "")
    const replace4G = replaceGB.replace("4G ", "")
    const replaceSE = replace4G.replace("SE 8.7", "SE")
    const replaceNoteBlue= replaceSE.indexOf("Note ") !== -1 ? replaceSE.replace("Ice Blue", "Blue") : replaceSE
    const replaceNoteMidnight = replaceNoteBlue.indexOf("Note ") !== -1 ? replaceNoteBlue.replace("Midnight ", "") : replaceNoteBlue
    const replaceNoteMint = replaceNoteBlue.indexOf("Note ") !== -1 ? replaceNoteMidnight.replace("Mint ", "") : replaceNoteMidnight
    const replaceNoteForest = replaceNoteMint.indexOf("Note ") !== -1 ? replaceNoteMint.replace("Forest ", "") : replaceNoteMint
    const replace5G = replaceNoteForest.indexOf("X7") !== -1 ? replaceNoteForest.replace("5G ", "") : replaceNoteForest

    return replace5G
}