"use strict";

// const Showcase = Object.freeze(
// {
// 	THE_DESERT_JEWEL_AND_THE_ABYSSAL_FLAME: new SummoningShowcase(),
// 	WINDS_OF_HOPE: new SummoningShowcase(),
// });

// Showcase.THE_DESERT_JEWEL_AND_THE_ABYSSAL_FLAME.createBin(NonLimitedGachaAdventurers.filter(x => x.rarity == Rarity.GOLD), (0.005 + 0.005), 0.005 / (0.005 + 0.005));
// Showcase.THE_DESERT_JEWEL_AND_THE_ABYSSAL_FLAME.createBin(NonLimitedGachaAdventurers.filter(x => x.rarity == Rarity.SILVER), (0.0175 + 0.0307), 0.0175 / (0.0175 + 0.0307));
// Showcase.THE_DESERT_JEWEL_AND_THE_ABYSSAL_FLAME.createBin(NonLimitedGachaAdventurers.filter(x => x.rarity == Rarity.BRONZE), (0.04 + 0.2975), 0.04 / (0.04 + 0.2975));
// Showcase.THE_DESERT_JEWEL_AND_THE_ABYSSAL_FLAME.featuredItems = [Adventurer.NAVEED, Adventurer.SINOA, Adventurer.VIDA];

// const Showcases = Object.values(Showcase);

// const CURRENT_SHOWCASE_NAME = "Dragon Special";
// const gachaPool = NonLimitedGachaAdventurers;
// const featuredItems = [Adventurer.XAINFRIED, Adventurer.MUSASHI];

// const CURRENT_SHOWCASE_NAME = "Dragonyule Defenders";
// const gachaPool = NonLimitedGachaAdventurers.concat([Adventurer.DRAGONYULE_CLEO, Adventurer.DRAGONYULE_NEFARIA, Adventurer.DRAGONYULE_XANDER]);
// const featuredItems = [Adventurer.DRAGONYULE_CLEO, Adventurer.DRAGONYULE_NEFARIA, Adventurer.DRAGONYULE_XANDER];

// const CURRENT_SHOWCASE_NAME = "Gala Dragalia";
// const limitedGachaInclusions = [Adventurer.GALA_SARISSE];
// const gachaPool = NonLimitedGachaAdventurers.concat(limitedGachaInclusions);
// const featuredItems = [Adventurer.GALA_SARISSE];

// const featuredFiveStarsPercentage = (0.5 / 100.0);
// const nonFeaturedFiveStarsPercentage = (1.0 / 100.0);
// const featuredFourStarsPercentage = (0.0 / 100.0);
// const nonFeaturedFourStarsPercentage = (4.82 / 100.0);
// const featuredThreeStarsPercentage = (0.0 / 100.0);
// const nonFeaturedThreeStarsPercentage = (33.25 / 100.0);

// const CURRENT_SHOWCASE_NAME = "Circus of Dreams";
// const limitedGachaInclusions = [];
// const gachaPool = NonLimitedGachaAdventurers.concat(limitedGachaInclusions);
// const featuredItems = [Adventurer.ANNELIE, Adventurer.FRITZ, Adventurer.MARTY];

// const featuredFiveStarsPercentage = (0.5 / 100.0);
// const nonFeaturedFiveStarsPercentage = (0.5 / 100.0);
// const featuredFourStarsPercentage = (1.75 / 100.0);
// const nonFeaturedFourStarsPercentage = (3.07 / 100.0);
// const featuredThreeStarsPercentage = (4.0 / 100.0);
// const nonFeaturedThreeStarsPercentage = (29.75 / 100.0);

// const CURRENT_SHOWCASE_NAME = "Springtime Spree";
// const limitedGachaInclusions = [];
// const gachaPool = NonLimitedGachaAdventurers.concat(limitedGachaInclusions);
// const featuredItems = [Adventurer.LIN_YOU, Adventurer.KU_HAI, Adventurer.XIAO_LEI];

// const fiveStarFudgeFactor = (0.04682263 - 0.04); // Experimentally determined. Accounts for the "pity" mechanic where five-star odds rise as successive non-five-stars are summoned.

// const featuredFiveStarsPercentage = (0.5 / 100.0) + ((fiveStarFudgeFactor / 2.0) * (0.5 / 2.0));
// const nonFeaturedFiveStarsPercentage = (0.5 / 100.0) + ((fiveStarFudgeFactor / 2.0) * (0.5 / 2.0));
// const featuredFourStarsPercentage = (1.75 / 100.0);
// const nonFeaturedFourStarsPercentage = (3.07 / 100.0);
// const featuredThreeStarsPercentage = (4.0 / 100.0) - ((fiveStarFudgeFactor / 2.0) * (4.0 / 8.0));
// const nonFeaturedThreeStarsPercentage = (29.75 / 100.0) - ((fiveStarFudgeFactor / 2.0) * (29.75 / 72.0));

// const CURRENT_SHOWCASE_NAME = "Ardent Admirers";
// const limitedGachaInclusions = [Adventurer.VALENTINES_HILDEGARDE, Adventurer.VALENTINES_EZELITH, Adventurer.VALENTINES_ORION];
// const gachaPool = NonLimitedGachaAdventurers.concat(limitedGachaInclusions);
// const featuredItems = [Adventurer.VALENTINES_HILDEGARDE, Adventurer.VALENTINES_EZELITH, Adventurer.VALENTINES_ORION];

// const fiveStarFudgeFactor = (0.04682263 - 0.04); // Experimentally determined. Accounts for the "pity" mechanic where five-star odds rise as successive non-five-stars are summoned.

// const featuredFiveStarsPercentage = (0.5 / 100.0) + ((fiveStarFudgeFactor / 2.0) * (0.5 / 2.0));
// const nonFeaturedFiveStarsPercentage = (0.5 / 100.0) + ((fiveStarFudgeFactor / 2.0) * (0.5 / 2.0));
// const featuredFourStarsPercentage = (1.75 / 100.0);
// const nonFeaturedFourStarsPercentage = (3.07 / 100.0);
// const featuredThreeStarsPercentage = (4.0 / 100.0) - ((fiveStarFudgeFactor / 2.0) * (4.0 / 8.0));
// const nonFeaturedThreeStarsPercentage = (29.75 / 100.0) - ((fiveStarFudgeFactor / 2.0) * (29.75 / 72.0));

// const CURRENT_SHOWCASE_NAME = "Dragon Special";
// const limitedGachaInclusions = [];
// const gachaPool = NonLimitedGachaAdventurers.concat(limitedGachaInclusions);
// const featuredItems = [Adventurer.MIKOTO, Adventurer.VANESSA];

// const fiveStarFudgeFactor = (0.04682263 - 0.04); // Experimentally determined. Accounts for the "pity" mechanic where five-star odds rise as successive non-five-stars are summoned.

// const featuredFiveStarsPercentage = (0.4 / 100.0) + ((fiveStarFudgeFactor / 2.0) * (0.4 / 2.0));
// const nonFeaturedFiveStarsPercentage = (0.4 / 100.0) + ((fiveStarFudgeFactor / 2.0) * (0.4 / 2.0));
// const featuredFourStarsPercentage = (1.25 / 100.0);
// const nonFeaturedFourStarsPercentage = (3.07 / 100.0);
// const featuredThreeStarsPercentage = 0.0;
// const nonFeaturedThreeStarsPercentage = (33.75 / 100.0) - (fiveStarFudgeFactor * (33.75 / 80.0));

// const CURRENT_SHOWCASE_NAME = "Thunder and Splendor";
// const limitedGachaInclusions = [];
// const gachaPool = NonLimitedGachaAdventurers.concat(limitedGachaInclusions);
// const featuredItems = [Adventurer.ALBERT, Adventurer.ODETTA, Adventurer.JAKOB];

// const fiveStarFudgeFactor = (0.04682263 - 0.04); // Experimentally determined. Accounts for the "pity" mechanic where five-star odds rise as successive non-five-stars are summoned.

// const featuredFiveStarsPercentage = (0.5 / 100.0) + ((fiveStarFudgeFactor / 2.0) * (0.5 / 2.0));
// const nonFeaturedFiveStarsPercentage = (0.5 / 100.0) + ((fiveStarFudgeFactor / 2.0) * (0.5 / 2.0));
// const featuredFourStarsPercentage = (1.75 / 100.0);
// const nonFeaturedFourStarsPercentage = (3.07 / 100.0);
// const featuredThreeStarsPercentage = (4.0 / 100.0) - ((fiveStarFudgeFactor / 2.0) * (4.0 / 8.0));
// const nonFeaturedThreeStarsPercentage = (29.75 / 100.0) - ((fiveStarFudgeFactor / 2.0) * (29.75 / 72.0));

// const CURRENT_SHOWCASE_NAME = "The Accursed Archives";
// const limitedGachaInclusions = [];
// const gachaPool = NonLimitedGachaAdventurers.concat(limitedGachaInclusions);
// const featuredItems = [Adventurer.HEINWALD, Adventurer.CURRAN, Adventurer.KLEIMANN];

// const fiveStarFudgeFactor = (0.04682263 - 0.04); // Experimentally determined. Accounts for the "pity" mechanic where five-star odds rise as successive non-five-stars are summoned.

// const featuredFiveStarsPercentage = (1.0 / 100.0) + ((fiveStarFudgeFactor / 2.0) * (1.0 / 2.0));
// const nonFeaturedFiveStarsPercentage = (0.5 / 100.0) + ((fiveStarFudgeFactor / 2.0) * (0.5 / 2.0));
// const featuredFourStarsPercentage = (1.75 / 100.0);
// const nonFeaturedFourStarsPercentage = (3.07 / 100.0);
// const featuredThreeStarsPercentage = 0.0;
// const nonFeaturedThreeStarsPercentage = (33.75 / 100.0) - (fiveStarFudgeFactor * (33.75 / 80.0));

// const CURRENT_SHOWCASE_NAME = "Water's Blessing";
// const limitedGachaInclusions = [];
// const gachaPool = NonLimitedGachaAdventurers.concat(limitedGachaInclusions);
// const featuredItems = NonLimitedGachaAdventurers.filter(x => x.element == Element.WATER);

// const fiveStarFudgeFactor = (0.04682263 - 0.04); // Experimentally determined. Accounts for the "pity" mechanic where five-star odds rise as successive non-five-stars are summoned.

// const featuredFiveStarsPercentage = (1.0 / 100.0) + ((fiveStarFudgeFactor / 2.0) * (1.0 / 2.0));
// const nonFeaturedFiveStarsPercentage = (0.5 / 100.0) + ((fiveStarFudgeFactor / 2.0) * (0.5 / 2.0));
// const featuredFourStarsPercentage = (4.0 / 100.0);
// const nonFeaturedFourStarsPercentage = (3.07 / 100.0);
// const featuredThreeStarsPercentage = (10.66 / 100.0) - ((fiveStarFudgeFactor / 2.0) * (10.66 / 16.0));
// const nonFeaturedThreeStarsPercentage = (21.75 / 100.0) - ((fiveStarFudgeFactor / 2.0) * (21.75 / 64.0));

// const CURRENT_SHOWCASE_NAME = "Gala Dragalia";
// const limitedGachaInclusions = [Adventurer.GALA_SARISSE, Adventurer.GALA_RANZAL];
// const gachaPool = NonLimitedGachaAdventurers.concat(limitedGachaInclusions);
// const featuredItems = [Adventurer.GALA_RANZAL];

// const fiveStarFudgeFactor = (0.06513 - 0.06); // Experimentally determined. Accounts for the "pity" mechanic where five-star odds rise as successive non-five-stars are summoned.

// // This math may be off.
// const featuredFiveStarsPercentage = (0.5 / 100.0) + (fiveStarFudgeFactor * (0.04 / 0.5));
// const nonFeaturedFiveStarsPercentage = (1.5 / 100.0) + ((fiveStarFudgeFactor * (0.46 / 0.5)) * (1.5 / 5.5));
// const featuredFourStarsPercentage = 0.0;
// const nonFeaturedFourStarsPercentage = (4.82 / 100.0);
// const featuredThreeStarsPercentage = 0.0;
// const nonFeaturedThreeStarsPercentage = (32.75 / 100.0) - (fiveStarFudgeFactor * (32.75 / 78.0));

// const CURRENT_SHOWCASE_NAME = "The Hunt for Harmony";
// const limitedGachaInclusions = [];
// const gachaPool = NonLimitedGachaAdventurers.concat(limitedGachaInclusions);
// const featuredItems = [Adventurer.LARANOA, Adventurer.XANDER, Adventurer.FLEUR];

// const fiveStarFudgeFactor = (0.04682263 - 0.04); // Experimentally determined. Accounts for the "pity" mechanic where five-star odds rise as successive non-five-stars are summoned.

// const featuredFiveStarsPercentage = (1.0 / 100.0) + ((fiveStarFudgeFactor / 2.0) * (1.0 / 2.0));
// const nonFeaturedFiveStarsPercentage = (0.5 / 100.0) + ((fiveStarFudgeFactor / 2.0) * (0.5 / 2.0));
// const featuredFourStarsPercentage = (1.75 / 100.0);
// const nonFeaturedFourStarsPercentage = (3.07 / 100.0);
// const featuredThreeStarsPercentage = 0.0;
// const nonFeaturedThreeStarsPercentage = (33.75 / 100.0) - (fiveStarFudgeFactor * (33.75 / 80.0));

// const CURRENT_SHOWCASE_NAME = "Dragon Showcase";
// const limitedGachaInclusions = [];
// const gachaPool = NonLimitedGachaAdventurers.concat(limitedGachaInclusions);
// const featuredItems = [Adventurer.XAINFRIED, Adventurer.THANIEL];

// const fiveStarFudgeFactor = (0.04682263 - 0.04); // Experimentally determined. Accounts for the "pity" mechanic where five-star odds rise as successive non-five-stars are summoned.

// const featuredFiveStarsPercentage = (0.5 / 100.0) + ((fiveStarFudgeFactor / 2.0) * (0.5 / 2.0));
// const nonFeaturedFiveStarsPercentage = (0.5 / 100.0) + ((fiveStarFudgeFactor / 2.0) * (0.5 / 2.0));
// const featuredFourStarsPercentage = (1.87 / 100.0);
// const nonFeaturedFourStarsPercentage = (3.07 / 100.0);
// const featuredThreeStarsPercentage = 0.0;
// const nonFeaturedThreeStarsPercentage = (33.75 / 100.0) - (fiveStarFudgeFactor * (33.75 / 80.0));

// const CURRENT_SHOWCASE_NAME = "Visions of Amity";
// const limitedGachaInclusions = [];
// const gachaPool = NonLimitedGachaAdventurers.concat(limitedGachaInclusions);
// const featuredItems = [Adventurer.SYLAS, Adventurer.MARIBELLE, Adventurer.YUE];

// const fiveStarFudgeFactor = (0.04682263 - 0.04); // Experimentally determined. Accounts for the "pity" mechanic where five-star odds rise as successive non-five-stars are summoned.

// const featuredFiveStarsPercentage = (1.0 / 100.0) + ((fiveStarFudgeFactor / 2.0) * (1.0 / 1.5));
// const nonFeaturedFiveStarsPercentage = (0.75 / 100.0) + ((fiveStarFudgeFactor / 2.0) * (0.75 / 2.5));
// const featuredFourStarsPercentage = (3.5 / 100.0);
// const nonFeaturedFourStarsPercentage = (3.07 / 100.0);
// const featuredThreeStarsPercentage = 0.0;
// const nonFeaturedThreeStarsPercentage = (33.75 / 100.0) - (fiveStarFudgeFactor * (33.75 / 80.0));

const CURRENT_SHOWCASE_NAME = "Lost Heroes";
const limitedGachaInclusions = [Adventurer.MARTH, Adventurer.FJORM, Adventurer.VERONICA];
const gachaPool = NonLimitedGachaAdventurers.concat(limitedGachaInclusions);
const featuredItems = [Adventurer.MARTH, Adventurer.FJORM, Adventurer.VERONICA];

const fiveStarFudgeFactor = (0.04682263 - 0.04); // Experimentally determined. Accounts for the "pity" mechanic where five-star odds rise as successive non-five-stars are summoned.

const featuredFiveStarsPercentage = (1.5 / 100.0) + ((fiveStarFudgeFactor * (0.19 / 0.5)) * (1.5 / 1.5));
const nonFeaturedFiveStarsPercentage = (1.25 / 100.0) + ((fiveStarFudgeFactor * (0.31 / 0.5)) * (1.25 / 2.5));
const featuredFourStarsPercentage = 0.0;
const nonFeaturedFourStarsPercentage = (8.55 / 100.0);
const featuredThreeStarsPercentage = 0.0;
const nonFeaturedThreeStarsPercentage = (48.0 / 100.0) - (fiveStarFudgeFactor * (48.0 / 80.0));
