"use strict";

const Adventurer = Object.freeze(
{
	AELEEN: new AdventurerObject("110029_01", "Aeleen", Element.WIND, Weapon.LANCE, 4),
	ALAIN: new AdventurerObject("110001_01", "Alain", Element.FLAME, Weapon.LANCE, 3),
	ALTHEMIA: new AdventurerObject("110047_01", "Althemia", Element.SHADOW, Weapon.WAND, 3),
	HALLOWEEN_ALTHEMIA: new AdventurerObject("110047_02", "🎃 Althemia", Element.LIGHT, Weapon.STAFF, 4),
	AMANE: new AdventurerObject("110041_01", "Amane", Element.LIGHT, Weapon.WAND, 4),
	AOI: new AdventurerObject("110002_01", "Aoi", Element.FLAME, Weapon.BLADE, 3),
	AURIEN: new AdventurerObject("110006_01", "Aurien", Element.FLAME, Weapon.STAFF, 3),
	BERSERKER: new AdventurerObject("110050_01", "Berserker", Element.SHADOW, Weapon.SWORD, 4),
	CELLIERA: new AdventurerObject("110255_01", "Celliera", Element.WATER, Weapon.BLADE, 4),
	CIBELLA: new AdventurerObject("110014_01", "Cibella", Element.WATER, Weapon.LANCE, 3),
	CLEO: new AdventurerObject("100004_01", "Cleo", Element.SHADOW, Weapon.STAFF, 4),
	EDWARD: new AdventurerObject("110049_01", "Edward", Element.SHADOW, Weapon.STAFF, 3),
	HALLOWEEN_EDWARD: new AdventurerObject("110049_02", "🎃 Edward", Element.LIGHT, Weapon.BLADE, 3),
	ELEONORA: new AdventurerObject("110031_01", "Eleonora", Element.WIND, Weapon.BOW, 4),
	ELISANNE: new AdventurerObject("100002_01", "Elisanne", Element.WATER, Weapon.LANCE, 4),
	HALLOWEEN_ELISANNE: new AdventurerObject("100002_02", "🎃 Elisanne", Element.LIGHT, Weapon.LANCE, 5),
	ERIK: new AdventurerObject("110045_01", "Erik", Element.SHADOW, Weapon.AXE, 3),
	ESTELLE: new AdventurerObject("110063_01", "Estelle", Element.LIGHT, Weapon.STAFF, 3),
	EUDEN: new AdventurerObject("100001_01", "Euden", Element.FLAME, Weapon.SWORD, 4),
	EZELITH: new AdventurerObject("110011_01", "Ezelith", Element.FLAME, Weapon.DAGGER, 5),
	FRANCESCA: new AdventurerObject("110026_01", "Francesca", Element.WIND, Weapon.DAGGER, 3),
	HAWK: new AdventurerObject("110267_01", "Hawk", Element.WIND, Weapon.BOW, 5),
	HILDEGARDE: new AdventurerObject("110043_01", "Hildegarde", Element.LIGHT, Weapon.STAFF, 5),
	HOPE: new AdventurerObject("110038_01", "Hope", Element.LIGHT, Weapon.STAFF, 3),
	IRFAN: new AdventurerObject("110037_01", "Irfan", Element.LIGHT, Weapon.DAGGER, 3),
	JOE: new AdventurerObject("110003_01", "Joe", Element.FLAME, Weapon.BOW, 3),
	JOHANNA: new AdventurerObject("110023_01", "Johanna", Element.WIND, Weapon.AXE, 3),
	JULIETTA: new AdventurerObject("110042_01", "Julietta", Element.LIGHT, Weapon.AXE, 5),
	JUROTA: new AdventurerObject("110016_01", "Jurota", Element.WATER, Weapon.BLADE, 3),
	KARINA: new AdventurerObject("110018_01", "Karina", Element.WATER, Weapon.AXE, 4),
	KARL: new AdventurerObject("110008_01", "Karl", Element.FLAME, Weapon.SWORD, 4),
	KLEIMANN: new AdventurerObject("110051_01", "Kleimann", Element.SHADOW, Weapon.WAND, 4),
	LILY: new AdventurerObject("110252_01", "Lily", Element.WATER, Weapon.WAND, 5),
	LINUS: new AdventurerObject("110033_01", "Linus", Element.LIGHT, Weapon.AXE, 3),
	LUCA: new AdventurerObject("100006_01", "Luca", Element.LIGHT, Weapon.BOW, 4),
	LUTHER: new AdventurerObject("110020_01", "Luther", Element.WATER, Weapon.DAGGER, 4),
	MALKA: new AdventurerObject("110034_01", "Malka", Element.LIGHT, Weapon.LANCE, 3),
	MALORA: new AdventurerObject("110036_01", "Malora", Element.LIGHT, Weapon.BOW, 3),
	MARIBELLE: new AdventurerObject("110032_01", "Maribelle", Element.WIND, Weapon.WAND, 5),
	MELODY: new AdventurerObject("110027_01", "Melody", Element.WIND, Weapon.BLADE, 3),
	MELSA: new AdventurerObject("110270_01", "Melsa", Element.FLAME, Weapon.DAGGER, 4),
	MIKOTO: new AdventurerObject("110010_01", "Mikoto", Element.FLAME, Weapon.BLADE, 5),
	MUSASHI: new AdventurerObject("110030_01", "Musashi", Element.WIND, Weapon.BLADE, 4),
	NAVEED: new AdventurerObject("110266_01", "Naveed", Element.FLAME, Weapon.SWORD, 5),
	NEFARIA: new AdventurerObject("110053_01", "Nefaria", Element.SHADOW, Weapon.BOW, 5),
	NICOLAS: new AdventurerObject("110025_01", "Nicolas", Element.WIND, Weapon.WAND, 3),
	ORION: new AdventurerObject("110052_01", "Orion", Element.SHADOW, Weapon.DAGGER, 4),
	ORSEM: new AdventurerObject("110253_01", "Orsem", Element.WATER, Weapon.DAGGER, 4),
	PHILIA: new AdventurerObject("110028_01", "Philia", Element.WIND, Weapon.BOW, 3),
	RAEMOND: new AdventurerObject("110035_01", "Raemond", Element.LIGHT, Weapon.SWORD, 3),
	RANZAL: new AdventurerObject("100003_01", "Ranzal", Element.WIND, Weapon.AXE, 4),
	RAWN: new AdventurerObject("110040_01", "Rawn", Element.LIGHT, Weapon.BOW, 4),
	RENELLE: new AdventurerObject("110005_01", "Renelle", Element.FLAME, Weapon.DAGGER, 3),
	REX: new AdventurerObject("110012_01", "Rex", Element.WATER, Weapon.AXE, 3),
	RICARDT: new AdventurerObject("110017_01", "Ricardt", Element.WATER, Weapon.STAFF, 3),
	RODRIGO: new AdventurerObject("110046_01", "Rodrigo", Element.SHADOW, Weapon.SWORD, 3),
	RYOZEN: new AdventurerObject("110039_01", "Ryozen", Element.LIGHT, Weapon.LANCE, 4),
	SINOA: new AdventurerObject("110009_01", "Sinoa", Element.FLAME, Weapon.WAND, 4),
	SOPHIE: new AdventurerObject("110024_01", "Sophie", Element.WIND, Weapon.STAFF, 3),
	TARO: new AdventurerObject("110044_01", "Taro", Element.SHADOW, Weapon.BLADE, 3),
	THANIEL: new AdventurerObject("110019_01", "Thaniel", Element.WATER, Weapon.STAFF, 4),
	VANESSA: new AdventurerObject("110007_01", "Vanessa", Element.FLAME, Weapon.AXE, 4),
	VERICA: new AdventurerObject("110269_01", "Verica", Element.FLAME, Weapon.STAFF, 4),
	VICE: new AdventurerObject("110048_01", "Vice", Element.SHADOW, Weapon.DAGGER, 3),
	VIDA: new AdventurerObject("110067_01", "Vida", Element.SHADOW, Weapon.DAGGER, 3),
	WAIKE: new AdventurerObject("110013_01", "Waike", Element.WATER, Weapon.BOW, 3),
	XAINFRIED: new AdventurerObject("110021_01", "Xainfried", Element.WATER, Weapon.LANCE, 5),
	XANDER: new AdventurerObject("110022_01", "Xander", Element.WATER, Weapon.SWORD, 5),
	XANIA: new AdventurerObject("110004_01", "Xania", Element.FLAME, Weapon.WAND, 3),
	ZACE: new AdventurerObject("110254_01", "Zace", Element.SHADOW, Weapon.LANCE, 3),
	ZARDIN: new AdventurerObject("110015_01", "Zardin", Element.WATER, Weapon.SWORD, 3),
	LOUISE: new AdventurerObject("110256_01", "Louise", Element.WIND, Weapon.BOW, 5),
	LOWEN: new AdventurerObject("110257_01", "Lowen", Element.WIND, Weapon.STAFF, 4),
	PIETRO: new AdventurerObject("110258_01", "Pietro", Element.WATER, Weapon.AXE, 3),
	LUCRETIA: new AdventurerObject("110305_01", "Lucretia", Element.LIGHT, Weapon.WAND, 5),
	VIXEL: new AdventurerObject("110304_01", "Vixel", Element.LIGHT, Weapon.STAFF, 4),
	PIA: new AdventurerObject("110302_01", "Pia", Element.WIND, Weapon.LANCE, 4),
	ELIAS: new AdventurerObject("110303_01", "Elias", Element.LIGHT, Weapon.BOW, 4),
	DRAGONYULE_CLEO: new AdventurerObject("100004_02", "🎄 Cleo", Element.WATER, Weapon.DAGGER, 5),
	DRAGONYULE_NEFARIA: new AdventurerObject("110053_02", "🎄 Nefaria", Element.WATER, Weapon.BOW, 4),
	DRAGONYULE_XANDER: new AdventurerObject("110022_02", "🎄 Xander", Element.WATER, Weapon.WAND, 4),
	ADDIS: new AdventurerObject("110310_01", "Addis", Element.WIND, Weapon.BLADE, 4),
	IEYASU: new AdventurerObject("110313_01", "Ieyasu", Element.SHADOW, Weapon.BLADE, 5),
	SAZANKA: new AdventurerObject("110311_01", "Sazanka", Element.SHADOW, Weapon.AXE, 4),
	BOTAN: new AdventurerObject("110312_01", "Botan", Element.SHADOW, Weapon.LANCE, 4),
	GALA_SARISSE: new AdventurerObject("100029_02", "Gala Sarisse", Element.FLAME, Weapon.BOW, 5),
	ANNELIE: new AdventurerObject("110275_01", "Annelie", Element.LIGHT, Weapon.LANCE, 5),
	FRITZ: new AdventurerObject("110276_01", "Fritz", Element.LIGHT, Weapon.DAGGER, 4),
	MARTY: new AdventurerObject("110261_01", "Marty", Element.FLAME, Weapon.SWORD, 3),
	LIN_YOU: new AdventurerObject("110268_01", "Lin You", Element.WIND, Weapon.AXE, 5),
	KU_HAI: new AdventurerObject("110315_01", "Ku Hai", Element.WIND, Weapon.SWORD, 4),
	XIAO_LEI: new AdventurerObject("110316_01", "Xiao Lei", Element.LIGHT, Weapon.WAND, 3),
	SU_FANG: new AdventurerObject("110314_01", "Su Fang", Element.WIND, Weapon.DAGGER, 4),
	VALENTINES_HILDEGARDE: new AdventurerObject("110043_02", "💕 Hildegarde", Element.FLAME, Weapon.STAFF, 5),
	VALENTINES_EZELITH: new AdventurerObject("110011_02", "💕 Ezelith", Element.FLAME, Weapon.BOW, 4),
	VALENTINES_ORION: new AdventurerObject("110052_03", "💕 Orion", Element.FLAME, Weapon.SWORD, 3),
});

const Adventurers = Object.values(Adventurer);

/**
 * Adventurer you get for free by completing the campaign.
 */
const StoryAdventurers = new Set(
[
	Adventurer.EUDEN,
	Adventurer.ELISANNE,
	Adventurer.CLEO,
	Adventurer.RANZAL,
	Adventurer.LUCA,
]);

/**
 * Non-summonable adventurers which can only be obtained by maximizing their friendship in their respective events.
 */
const WelfareAdventurers = new Set(
[
	Adventurer.CELLIERA,
	Adventurer.MELSA,
	Adventurer.ELIAS,
	Adventurer.BOTAN,
	Adventurer.SU_FANG,
]);

/**
 * Adventurers which can only be summoned during limited-time events.
 */
const LimitedAdventurers = new Set(
[
	Adventurer.HALLOWEEN_ALTHEMIA,
	Adventurer.HALLOWEEN_EDWARD,
	Adventurer.HALLOWEEN_ELISANNE,
	Adventurer.DRAGONYULE_CLEO,
	Adventurer.DRAGONYULE_NEFARIA,
	Adventurer.DRAGONYULE_XANDER,
	Adventurer.ADDIS,
	Adventurer.IEYASU,
	Adventurer.SAZANKA,
	Adventurer.GALA_SARISSE,
	Adventurer.VALENTINES_HILDEGARDE,
	Adventurer.VALENTINES_EZELITH,
	Adventurer.VALENTINES_ORION,
]);

const GachaAdventurers = Adventurers.filter(x => !(StoryAdventurers.has(x) || WelfareAdventurers.has(x)));
const NonLimitedGachaAdventurers = GachaAdventurers.filter(x => !LimitedAdventurers.has(x));
