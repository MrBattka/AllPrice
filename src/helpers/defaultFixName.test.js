import { describe, it, expect } from 'vitest';
import { defaultFixName } from './defaultFixName';

/**
 * Тесты для defaultFixName
 * Проверяют все ключевые правила трансформации названий товаров
 */

describe('defaultFixName', () => {
  // === 1. Общие замены ===
  it('should normalize general typos and formats', () => {
    expect(defaultFixName('Grey')).toBe('gray');
    expect(defaultFixName('extrime')).toBe('extreme');
    expect(defaultFixName('red magic')).toBe('redmagic');
    expect(defaultFixName('PS5')).toBe('ps 5');
    expect(defaultFixName('PlayStation 5')).toBe('ps 5');
    expect(defaultFixName('PlayStation')).toBe('ps');
    expect(defaultFixName('Major IV')).toBe('major 4');
    expect(defaultFixName('Major V')).toBe('major 5');
    expect(defaultFixName('esim')).toBe('esim');
    expect(defaultFixName('e-sim')).toBe('esim');
    expect(defaultFixName('2sim')).toBe('dual');
    expect(defaultFixName('2-sim')).toBe('dual');
    expect(defaultFixName('Type')).toBe('usb');
    expect(defaultFixName('pro +')).toBe('pro plus');
    expect(defaultFixName('pro+')).toBe('pro plus');
    expect(defaultFixName('note 14 pro plus')).toBe('note 14 pro +');
    expect(defaultFixName('ul 2')).toBe('ultra 2');
    expect(defaultFixName('Pencil 1')).toBe('pencil lightning');
    expect(defaultFixName('gopro hero 1')).toBe('gopro hero 1');
    expect(defaultFixName('s23 plus')).toBe('S23+');
    expect(defaultFixName('s24 +')).toBe('S24+');
    expect(defaultFixName('Mist Blue')).toBe('blue');
    expect(defaultFixName('Cosmic Orange')).toBe('orange');
    expect(defaultFixName('Deep Blue')).toBe('blue');
    expect(defaultFixName('Sky Blue')).toBe('blue');
    expect(defaultFixName('Space Black')).toBe('black');
    expect(defaultFixName('Cloud White')).toBe('white');
    expect(defaultFixName('Light Gold')).toBe('gold');
    expect(defaultFixName('Iceblue')).toBe('icyblue');
    expect(defaultFixName('Olive')).toBe('green');
    expect(defaultFixName('Jetblack')).toBe('jet black');
  });
  // === 2. AirPods ===
  it('should handle AirPods Pro 2 → usb', () => {
    expect(defaultFixName('AirPods Pro 2 Type-C')).toBe('airpods pro 2 usb-c');
  });

  it('should handle AirPods Max + USB → 2', () => {
    expect(defaultFixName('AirPods Max USB')).toBe('airpods max 2');
  });

  // === 3. SE2 + S8/S9 → midnight/starlight ===
  it('should convert SE2 S8/S9 colors', () => {
    expect(defaultFixName('se2 black')).toBe('se2 midnight');
    expect(defaultFixName('s8 black')).toBe('s8 midnight');
    expect(defaultFixName('s9 black')).toBe('s9 midnight');
    expect(defaultFixName('s9 white')).toBe('s9 starlight');
    expect(defaultFixName('s8 white')).toBe('s8 starlight');
    expect(defaultFixName('se2 white')).toBe('se2 starlight');
  });

  // === 4. Ultra 2 → ob/tl/al → case → ti ===
  it('should expand Ultra 2 abbreviations', () => {
    expect(defaultFixName('ul 2 ocean band')).toBe('ultra 2 ob');
    expect(defaultFixName('ul 2 trail loop')).toBe('ultra 2 tl');
    expect(defaultFixName('ul 2 alpine loop')).toBe('ultra 2 al');
    expect(defaultFixName('ultra 2 case')).toBe('ultra 2 ti');
  });

  // === 5. iPad Pro 11 + M4/M5 → gray → black ===
  it('should convert iPad Pro 11 gray to black with M4/M5', () => {
    expect(defaultFixName('iPad Pro 11 M4 Gray')).toBe('ipad pro 11 m4 black');
    expect(defaultFixName('iPad Pro 11 M5 Gray')).toBe('ipad pro 11 m5 black');
  });

  // === 7. Magic 7/8 Pro → gray → white, cyan → green ===
  it('should handle Magic 7/8 Pro colors', () => {
    expect(defaultFixName('Magic 7 Pro Gray')).toBe('magic 7 pro white');
    expect(defaultFixName('Magic 8 Pro Cyan')).toBe('magic 8 pro green');
  });

  // === 8. Ultra 3 → ocean → ob ===
  it('should convert ocean → ob for Ultra 3', () => {
    expect(defaultFixName('Ultra 3 ocean')).toBe('ultra 3 ob');
  });

  // === 9. Buds 3 → black/gray → silver (if not FE) ===
  it('should convert Buds 3 colors to silver', () => {
    expect(defaultFixName('Buds 3 Black')).toBe('galaxy buds 3 silver');
    expect(defaultFixName('Buds 3 Gray')).toBe('galaxy buds 3 silver');
    expect(defaultFixName('Buds 3 FE Black')).toBe('galaxy buds 3 fe black'); // не меняется
  });

  // === 10. Buds 3 White/Silver → Galaxy Buds 3... ===
  it('should prefix Galaxy Buds 3 models', () => {
    expect(defaultFixName('buds 3 white')).toBe('galaxy buds 3 white');
    expect(defaultFixName('buds 3 silver')).toBe('galaxy buds 3 silver');
    expect(defaultFixName('buds 3 fe gray')).toBe('galaxy buds 3 fe gray');
    expect(defaultFixName('buds 3 fe black')).toBe('galaxy buds 3 fe black');
    expect(defaultFixName('buds 3 pro white')).toBe('galaxy buds 3 pro white');
    expect(defaultFixName('buds 3 pro silver')).toBe('galaxy buds 3 pro silver');
  });

  // === 11. Magic 11 Pro → cryo → black ===
  it('should convert cryo → black for Magic 11 Pro', () => {
    expect(defaultFixName('Magic 11 Pro cryo')).toBe('magic 11 pro black');
  });

  // === 12. S25 Ultra/FE → silver → white, gold → pink ===
  it('should handle S25 Ultra color rules', () => {
    expect(defaultFixName('S25 Ultra Silver')).toBe('s25 ultra white');
    expect(defaultFixName('S25 FE Silver')).toBe('s25 fe white');
    expect(defaultFixName('S25 Ultra Gold')).toBe('s25 ultra pink');
  });

  // === 13. Gray → black for many devices (except mi pad 8 pro) ===
  it('should convert gray → black for multiple devices', () => {
    expect(defaultFixName('Magic V5 Gray')).toBe('magic v5 black');
    expect(defaultFixName('Pura 80 Gray')).toBe('pura 80 black');
    expect(defaultFixName('OnePlus 13 Gray')).toBe('oneplus 13 black');
    expect(defaultFixName('Ace 6T Gray')).toBe('ace 6t black');
    expect(defaultFixName('A26 Gray')).toBe('a26 black');
    expect(defaultFixName('A36 Gray')).toBe('a36 black');
    expect(defaultFixName('S25 FE Gray')).toBe('s25 fe black');
    expect(defaultFixName('Mi Pad 8 Gray')).toBe('mi pad 8 black');
    expect(defaultFixName('Poco F7 Gray')).toBe('poco f7 black');
    expect(defaultFixName('Z70 Ultra Gray')).toBe('z70 ultra black');
    expect(defaultFixName('Honor 400 Gray')).toBe('honor 400 black');

    // Исключение
    expect(defaultFixName('Mi Pad 8 Pro Gray')).toBe('mi pad 8 pro gray');
  });

  // === 14. OnePlus 15 → viol → purple ===
  it('should convert viol → purple for OnePlus 15', () => {
    expect(defaultFixName('OnePlus 15 viol')).toBe('oneplus 15 purple');
  });

  // === 15. Ace 5 → silver → titan ===
  it('should convert silver → titan for Ace 5', () => {
    expect(defaultFixName('Ace 5 Silver')).toBe('ace 5 titan');
  });

  // === 16. Ace 6 / S25+ → gray → silver ===
  it('should convert gray → silver for Ace 6 / S25+', () => {
    expect(defaultFixName('Ace 6 Gray')).toBe('ace 6 silver');
    expect(defaultFixName('S25+ Gray')).toBe('s25+ silver');
  });

  // === 17. Pura 80 → yellow → gold ===
  it('should convert yellow → gold for Pura 80', () => {
    expect(defaultFixName('Pura 80 Yellow')).toBe('pura 80 gold');
  });

  // === 18. RedMagic 10 Pro → shadow → black ===
  it('should convert shadow → black for RedMagic 10 Pro', () => {
    expect(defaultFixName('RedMagic 10 Pro Shadow')).toBe('redmagic 10 pro black');
  });

  // === 19. Note 14 → midnight → black ===
  it('should convert midnight → black for Note 14', () => {
    expect(defaultFixName('Note 14 Midnight')).toBe('note 14 black');
  });

  // === 20. Pixel 10 → white → porcelain, jade → green ===
  it('should handle Pixel 10 colors', () => {
    expect(defaultFixName('Pixel 10 Jade')).toBe('pixel 10 green');
  });

  // === 21. Honor 400 → yellow → gold ===
  it('should convert yellow → gold for Honor 400', () => {
    expect(defaultFixName('Honor 400 Yellow')).toBe('honor 400 gold');
  });

  // === 22. OnePlus color mappings ===
  it('should apply OnePlus color mappings', () => {
    expect(defaultFixName('OnePlus noir')).toBe('oneplus black');
    expect(defaultFixName('OnePlus ocean')).toBe('oneplus blue');
    expect(defaultFixName('OnePlus astral')).toBe('oneplus silver');
    expect(defaultFixName('OnePlus arctic')).toBe('oneplus white');
    expect(defaultFixName('OnePlus trail')).toBe('oneplus silver');
    expect(defaultFixName('OnePlus dusk')).toBe('oneplus black');
  });

  // === 23. Magic → phantom/subzero/prism ===
  it('should handle Magic color mappings', () => {
    expect(defaultFixName('Magic phantom')).toBe('magic black');
    expect(defaultFixName('Magic subzero')).toBe('magic silver');
    expect(defaultFixName('Magic 11 air prism')).toBe('magic 11 air white');
  });

  // === 24. Mi 17 → gray → black ===
  it('should convert Mi 17 gray → black', () => {
    expect(defaultFixName('Mi 17 Gray')).toBe('mi 17 black');
  });

  // === 25. Note 14 → green → blue ===
  it('should convert Note 14 green → blue', () => {
    expect(defaultFixName('Note 14 Green')).toBe('note 14 blue');
  });

  // === 26. Note 15 → color/gray → titan ===
  it('should convert Note 15 colors to titan', () => {
    expect(defaultFixName('Note 15 color')).toBe('note 15 titan');
    expect(defaultFixName('Note 15 Pro Gray')).toBe('note 15 pro titan');
  });

  // === 27. Note 15 Pro + / Z70 Ultra → gold → brown ===
  it('should convert gold → brown in special cases', () => {
    expect(defaultFixName('Note 15 Pro + Gold')).toBe('note 15 pro + brown');
    expect(defaultFixName('Z70 Ultra Gold')).toBe('z70 ultra brown');
  });

  // === 28. A07 / Tab S11 → black → gray ===
  it('should convert black → gray for A07 / Tab S11', () => {
    expect(defaultFixName('A07 4/64 Black')).toBe('a07 4/64 gray');
    expect(defaultFixName('Tab S11 Black')).toBe('tab s11 gray');
  });

  // === 29. iPad Mini → 2024 → 7 ===
  it('should convert iPad Mini 2024 → 7', () => {
    expect(defaultFixName('iPad Mini 2024')).toBe('ipad mini 7');
  });

  // === 31. iPhone 13/14/15 → white → starlight, black → midnight ===
  it('should convert iPhone 13-15 colors', () => {
    expect(defaultFixName('iPhone 13 128 White')).toBe('iphone 13 128 starlight');
    expect(defaultFixName('iPhone 14 256 Black')).toBe('iphone 14 256 midnight');
    expect(defaultFixName('iPhone 15 Plus 512 Black')).toBe('iphone 15 plus 512 midnight');
  });

  // === 32. Z Flip 5 → mint stays, else → Green ===
  it('should preserve mint only for Z Flip 5', () => {
    expect(defaultFixName('Z Flip 5 Mint')).toBe('z flip 5 mint');
    expect(defaultFixName('Galaxy Mint')).toBe('galaxy Green');
  });

  // === 33. A36 → lime → Green, else → Yellow ===
  it('should convert lime based on device', () => {
    expect(defaultFixName('A36 Lime')).toBe('a36 Green');
    expect(defaultFixName('Other Lime')).toBe('other Yellow');
  });

  // === 34. Graphite → Black (if not exempt) ===
  it('should convert graphite → Black unless exempt', () => {
    expect(defaultFixName('Case Graphite')).toBe('case Black');
  });

  // === 35. A35/A55 → navy/lavender/violet → Lilac ===
  it('should convert A35/A55 colors', () => {
    expect(defaultFixName('A35 Navy')).toBe('a35 Black');
    expect(defaultFixName('A55 Lavender')).toBe('a55 Lilac');
    expect(defaultFixName('A35 Violet')).toBe('a35 Lilac');
  });

  // === 36. LTE → 5G, buds pro 2 → buds 2 pro ===
  it('should replace LTE and buds order', () => {
    expect(defaultFixName('LTE')).toBe('5g');
    expect(defaultFixName('buds pro 2')).toBe('buds 2 pro');
  });

  // === 37. lavender/violet → Purple ===
  it('should convert lavender/violet → Purple', () => {
    expect(defaultFixName('Lavender')).toBe('Purple');
    expect(defaultFixName('Violet')).toBe('Purple');
  });

  // === 38. Poco → lunar → silver ===
  it('should convert lunar → silver for Poco', () => {
    expect(defaultFixName('Poco Lunar')).toBe('poco silver');
  });

  // === 39. Note 13 Pro → teal/blue → Green ===
  it('should convert Note 13 Pro colors', () => {
    expect(defaultFixName('Note 13 Pro Teal')).toBe('note 13 pro Green');
    expect(defaultFixName('Note 13 Pro Blue')).toBe('note 13 pro Green');
  });

  // === 41. Pad 6s Pro / Mi Pad 7 → gray → Black ===
  it('should convert gray → Black for newer pads', () => {
    expect(defaultFixName('Pad 6s Pro Gray')).toBe('pad 6s pro Black');
    expect(defaultFixName('Mi Pad 7 Gray')).toBe('mi pad 7 Black');
  });

  // === 42. iPhone 17 → sage → Green ===
  it('should convert sage → Green for iPhone 17', () => {
    expect(defaultFixName('iPhone 17 Sage')).toBe('iphone 17 Green');
  });

  // === 43. SE3 → midnight/starlight → black/white ===
  it('should convert SE3 colors', () => {
    expect(defaultFixName('SE3 Midnight')).toBe('se3 black');
    expect(defaultFixName('SE3 Starlight')).toBe('se3 white');
  });

  // === 44. Nord color mappings ===
  it('should handle Nord color mappings', () => {
    expect(defaultFixName('Nord 5 Ice')).toBe('nord 5 blue');
    expect(defaultFixName('Nord 5 Sands')).toBe('nord 5 white');
    expect(defaultFixName('Nord CE5 Mist')).toBe('nord ce5 white');
    expect(defaultFixName('Nord CE5 Gray')).toBe('nord ce5 white');
    expect(defaultFixName('Nord Tempest')).toBe('nord gray');
    expect(defaultFixName('Nord Mistry')).toBe('nord green');
    expect(defaultFixName('Nord Mercurial')).toBe('nord silver');
    expect(defaultFixName('Nord Oasis')).toBe('nord green');
    expect(defaultFixName('Nord Obsidian')).toBe('nord black');
    expect(defaultFixName('Nord Celadon')).toBe('nord green');
    expect(defaultFixName('Nord Chrome')).toBe('nord black');
    expect(defaultFixName('Open Dusk')).toBe('open green');
  });

  // === 45. Pixel color mappings ===
  it('should handle Pixel color mappings', () => {
    expect(defaultFixName('Pixel Snow')).toBe('pixel white');
    expect(defaultFixName('Pixel Sea')).toBe('pixel blue');
    expect(defaultFixName('Pixel Bay')).toBe('pixel blue');
    expect(defaultFixName('Pixel Rose')).toBe('pixel pink');
    expect(defaultFixName('Pixel Peony')).toBe('pixel pink');
    expect(defaultFixName('Pixel Iris')).toBe('pixel purple');
    expect(defaultFixName('Pixel Aloe')).toBe('pixel green');
    expect(defaultFixName('Pixel Porcelain')).toBe('pixel gold');
  });

  // === 46. eSIM / Dual SIM для iPhone 17 ===
  it('should handle iPhone 17 SIM flags', () => {
    expect(defaultFixName('iPhone 17 256 esim')).toBe('iphone 17 256 🇺🇸');
    expect(defaultFixName('iPhone 17 256 +')).toBe('iphone 17 256 🇮🇳');
    expect(defaultFixName('iPhone 17 256 🇯🇵')).toBe('iphone 17 256 🇺🇸');
  });

  // === 47. Yandex → станция → яндекс + цвета ===
  it('should convert Yandex station and colors', () => {
    expect(defaultFixName('станция')).toBe('яндекс');
    expect(defaultFixName('яндекс black')).toBe('яндекс черн');
    expect(defaultFixName('яндекс blue')).toBe('яндекс син');
    expect(defaultFixName('яндекс green')).toBe('яндекс зелен');
    expect(defaultFixName('яндекс red')).toBe('яндекс красн');
    expect(defaultFixName('яндекс gray')).toBe('яндекс сер');
    expect(defaultFixName('яндекс purple')).toBe('яндекс фиол');
    expect(defaultFixName('яндекс pink')).toBe('яндекс розов');
    expect(defaultFixName('яндекс white')).toBe('яндекс бел');
    expect(defaultFixName('яндекс beige')).toBe('яндекс беж');
    expect(defaultFixName('яндекс max')).toBe('яндекс макс');
    expect(defaultFixName('яндекс лиловая')).toBe('яндекс фиолет');
  });

  // === 48. OpenSwim → coral → orange ===
  it('should convert OpenSwim coral → orange', () => {
    expect(defaultFixName('OpenSwim Coral')).toBe('openswim orange');
  });

  // === 49. Honor → белый/чёрный/зелёный → en ===
  it('should convert Honor russian colors', () => {
    expect(defaultFixName('Honor белый')).toBe('honor white');
    expect(defaultFixName('Honor чёрный')).toBe('honor black');
    expect(defaultFixName('Honor зелёный')).toBe('honor green');
  });

  // === 50. A37 → black → chark, green → gray ===
  it('should convert A37 colors', () => {
    expect(defaultFixName('A37 Black')).toBe('a37 chark');
    expect(defaultFixName('A37 Green')).toBe('a37 gray');
  });
});