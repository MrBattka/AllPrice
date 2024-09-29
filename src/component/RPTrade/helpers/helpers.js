export const returnFixNameRPTrade = (name) => {
    const replaceGB = name.replace("GB", "")
    const replace4G = replaceGB.replace("4G ", "")
    const replaceSE = replace4G.replace("SE 8.7", "SE")
    const replaceNoteBlue= replaceSE.indexOf("Note ") ? replaceSE.replace("Ice Blue", "Blue") : replaceSE
    const replaceNoteMidnight = replaceNoteBlue.indexOf("Note ") ? replaceNoteBlue.replace("Midnight ", "") : replaceNoteBlue
    const replaceNoteMint = replaceNoteBlue.indexOf("Note ") ? replaceNoteMidnight.replace("Mint ", "") : replaceNoteMidnight
    const replaceNoteForest = replaceNoteMint.indexOf("Note ") ? replaceNoteMint.replace("Forest ", "") : replaceNoteMint

    return replaceNoteForest
}