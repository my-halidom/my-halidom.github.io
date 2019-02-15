"use strict";

const WYRMITE_PER_PULL = 150;
const BLACK_STAR = "&#x2605;";

const currentShowcase = new SummoningShowcase(
	gachaPool.filter(x => x.rarity == Rarity.BRONZE),
	gachaPool.filter(x => x.rarity == Rarity.SILVER),
	gachaPool.filter(x => x.rarity == Rarity.GOLD),
);

currentShowcase.featuredItems = featuredItems;

const gachaInstance = new Gacha();

// Featured 5-Star
gachaInstance.addCollection(Array.from(currentShowcase.featuredItems).filter(x => x.rarity == Rarity.GOLD), featuredFiveStarsPercentage);
gachaInstance.addCollection(gachaPool.filter(x => x.rarity == Rarity.GOLD && currentShowcase.featuredItems.has(x) == false), nonFeaturedFiveStarsPercentage);
gachaInstance.addCollection(Array.from(currentShowcase.featuredItems).filter(x => x.rarity == Rarity.SILVER), featuredFourStarsPercentage);
gachaInstance.addCollection(gachaPool.filter(x => x.rarity == Rarity.SILVER && currentShowcase.featuredItems.has(x) == false), nonFeaturedFourStarsPercentage);
gachaInstance.addCollection(Array.from(currentShowcase.featuredItems).filter(x => x.rarity == Rarity.BRONZE), featuredThreeStarsPercentage);
gachaInstance.addCollection(gachaPool.filter(x => x.rarity == Rarity.BRONZE && currentShowcase.featuredItems.has(x) == false), nonFeaturedThreeStarsPercentage);

function isFeatured(item)
{
	return currentShowcase.featuredItems.has(item);
}

document.createWyrmiteAmountElement = function(initialAmount)
{
	var e = document.createElement("span");
	e.className = "wyrmite_cost";

	var amountElement = document.createElement("div");
	amountElement.className = "wyrmite_quantity";
	e.appendChild(amountElement);
	
	var iconElement = document.createElement("div");
	iconElement.className = "wyrmite_icon_wrapper";
	
	var wyrmiteImageElement = document.createElement("img");
	wyrmiteImageElement.setAttribute("src", "assets/images/game/wyrmite.png");
	wyrmiteImageElement.setAttribute("alt", "wyrmite");
	
	iconElement.appendChild(wyrmiteImageElement);
	
	e.appendChild(iconElement);
	
	Object.defineProperty(e, "amount", {
		get() { return this._amount; },
		set(newValue) { this._amount = newValue; amountElement.innerText = newValue.toLocaleString(); },
	});
	
	initialAmount = (initialAmount || 0);
	e.amount = initialAmount;
	
	return e;
};

const newFiveStarWyrmiteCost = document.createWyrmiteAmountElement();
document.querySelector("#new_five_star_cost .cost").appendChild(newFiveStarWyrmiteCost);
const newFourStarWyrmiteCost = document.createWyrmiteAmountElement();
document.querySelector("#new_four_star_cost .cost").appendChild(newFourStarWyrmiteCost);

const newFeaturedFiveStarWyrmiteAmountElement = document.createWyrmiteAmountElement();
const newFiveStarWyrmiteAmountElement = document.createWyrmiteAmountElement();
const newFeaturedFourStarWyrmiteAmountElement = document.createWyrmiteAmountElement();
const newFourOrGreaterStarWyrmiteAmountElement = document.createWyrmiteAmountElement();

(function()
{
	const fragment = document.createDocumentFragment();
	var p;
	
	p = document.createElement('div');
	p.className = "current_showcase_name";
	p.innerHTML = `The current showcase is <strong>"${CURRENT_SHOWCASE_NAME}"</strong>`;
	fragment.appendChild(p);
	
	p = document.createElement('p');
	p.innerText = `Based on your current inventory and the current showcase, it is estimated that you would need to spend the following amounts to summon an unowned adventurer:`;
	fragment.appendChild(p);
	
	document.querySelector(".showcase_name").innerText = CURRENT_SHOWCASE_NAME;
	
	const grid = document.createElement('div');
	grid.className = "analysis_grid";
	
	var gridElement;
	
	gridElement = document.createElement('div');
	gridElement.className = "label";
	gridElement.innerHTML = `Any featured 5${BLACK_STAR}`;
	grid.appendChild(gridElement);
	
	gridElement = document.createElement('div');
	gridElement.appendChild(newFeaturedFiveStarWyrmiteAmountElement);
	grid.appendChild(gridElement);
	
	gridElement = document.createElement('div');
	gridElement.className = "label";
	gridElement.innerHTML = `Any 5${BLACK_STAR}`;
	grid.appendChild(gridElement);
	
	gridElement = document.createElement('div');
	gridElement.appendChild(newFiveStarWyrmiteAmountElement);
	grid.appendChild(gridElement);
	
	gridElement = document.createElement('div');
	gridElement.className = "label";
	gridElement.innerHTML = `Any featured 4${BLACK_STAR}`;
	grid.appendChild(gridElement);
	
	gridElement = document.createElement('div');
	gridElement.appendChild(newFeaturedFourStarWyrmiteAmountElement);
	grid.appendChild(gridElement);
	
	gridElement = document.createElement('div');
	gridElement.className = "label";
	gridElement.innerHTML = `Any 4${BLACK_STAR} or 5${BLACK_STAR}`;
	grid.appendChild(gridElement);
	
	gridElement = document.createElement('div');
	gridElement.appendChild(newFourOrGreaterStarWyrmiteAmountElement);
	grid.appendChild(gridElement);
	
	fragment.appendChild(grid);
	
	const analysisElement = document.getElementById("analysis");
	analysisElement.appendChild(fragment);
})();

function updateWyrmiteCosts()
{
	const gachaContents = gachaInstance.contents;
	const gachaContentsOwnedByPlayer = gachaInstance.contents.filter(x => playerInventory.has(x));
	const gachaContentsNotOwnedByPlayer = gachaInstance.contents.filter(x => !playerInventory.has(x));
	
	const fiveStarContents = gachaInstance.contents.filter(item => item.rarity == Rarity.GOLD);
	const ownedFiveStarContents = fiveStarContents.filter(item => playerInventory.has(item));
	const unownedFiveStarContents = fiveStarContents.filter(item => !playerInventory.has(item));
	const unownedFeaturedFiveStarContents = unownedFiveStarContents.filter(item => isFeatured(item));

	const chanceOfNewFiveStar = unownedFiveStarContents.reduce((acc, x) => acc + gachaInstance.getPercentageChance(x), 0);
	const chanceOfDuplicateFiveStar = ownedFiveStarContents.reduce((acc, x) => acc + gachaInstance.getPercentageChance(x), 0);
	const chanceOfNewFeaturedFiveStar = unownedFeaturedFiveStarContents.reduce((acc, x) => acc + gachaInstance.getPercentageChance(x), 0);

	const fourOrGreaterStarContents = gachaInstance.contents.filter(item => item.rarity >= Rarity.SILVER);
	const ownedFourOrGreaterStarContents = fourOrGreaterStarContents.filter(item => playerInventory.has(item));
	const unownedFourOrGreaterStarContents = fourOrGreaterStarContents.filter(item => !playerInventory.has(item));
	const unownedFeaturedFourStarContents = gachaInstance.contents.filter(item => item.rarity == Rarity.SILVER && !playerInventory.has(item) && isFeatured(item));

	const chanceOfNewfourOrGreaterStar = unownedFourOrGreaterStarContents.reduce((acc, x) => acc + gachaInstance.getPercentageChance(x), 0);
	const chanceOfDuplicatefourOrGreaterStar = ownedFourOrGreaterStarContents.reduce((acc, x) => acc + gachaInstance.getPercentageChance(x), 0);
	const chanceOfNewFeaturedFourStar = unownedFeaturedFourStarContents.reduce((acc, x) => acc + gachaInstance.getPercentageChance(x), 0);
	
	const newFeaturedFiveStarWyrmiteAmount = Math.ceil(1/chanceOfNewFeaturedFiveStar) * WYRMITE_PER_PULL;
	const newFeaturedFourStarWyrmiteAmount = Math.ceil(1/chanceOfNewFeaturedFourStar) * WYRMITE_PER_PULL;
	const newFiveStarWyrmiteAmount = Math.ceil(1/chanceOfNewFiveStar) * WYRMITE_PER_PULL;
	const newFourOrGreaterStarWyrmiteAmount = Math.ceil(1/chanceOfNewfourOrGreaterStar) * WYRMITE_PER_PULL;
	
	newFiveStarWyrmiteCost.amount = newFiveStarWyrmiteAmount;
	newFourStarWyrmiteCost.amount = newFourOrGreaterStarWyrmiteAmount;
	
	newFeaturedFiveStarWyrmiteAmountElement.amount = newFeaturedFiveStarWyrmiteAmount;
	newFiveStarWyrmiteAmountElement.amount = newFiveStarWyrmiteAmount;
	newFeaturedFourStarWyrmiteAmountElement.amount = newFeaturedFourStarWyrmiteAmount;
	newFourOrGreaterStarWyrmiteAmountElement.amount = newFourOrGreaterStarWyrmiteAmount;
}

const playerInventory = new Inventory();

function loadInventory()
{
	if (typeof(Storage) !== "undefined")
	{
		if (localStorage.inventory == undefined)
		{
			localStorage.inventory = "[]";
		}

		//console.log("Loading inventory from localstorage.");
		
		var map = new Map(JSON.parse(localStorage.inventory));
		
		for (var [id, quantity] of map)
		{
			let adventurer = null;
			
			let adventurersWithMatchingIds = Adventurers.filter(x => x.id == id);
			// If no adventurer with such an ID could be found...
			if (adventurersWithMatchingIds.length <= 0)
			{
				// ...try treating the ID as a name instead.
				let adventurersWithMatchingNames = Adventurers.filter(x => x.name == id);
				if (adventurersWithMatchingNames.length > 0)
				{
					adventurer = adventurersWithMatchingNames[0];
				}
			}
			else
			{
				adventurer = adventurersWithMatchingIds[0];
			}
			
			if (adventurer != null)
			{
				playerInventory.set(adventurer, quantity);
			}
			else
			{
				console.error(`Could not find adventurer with identifier "${id}".`);
			}
		}
		
		//console.log("Loading options from localstorage.");
		
		if (localStorage.options == undefined)
		{
			localStorage.options = localStorage.options = JSON.stringify(options);
		}
		else
		{
			options = JSON.parse(localStorage.options);
		}
	}
}

function saveInventory()
{
	if (typeof(Storage) !== "undefined")
	{
		localStorage.inventory = JSON.stringify(Array.from(playerInventory.entries()).map((x => [x[0].id != "" ? x[0].id : x[0].name, x[1]])));
		localStorage.options = JSON.stringify(options);
	}
}

function onInventoryChanged()
{
	saveInventory();
	
	updateWyrmiteCosts();
}

loadInventory();

playerInventory.onContentsChanged(onInventoryChanged);

function createGrouping(legendString)
{
	const grouping = document.createElement("fieldset");
	const legend = document.createElement("legend");
	//legend.innerText = legendString;
	legend.innerHTML = legendString;
	grouping.className = legendString.toLowerCase();
	grouping.appendChild(legend);
	
	const groupingContents = document.createElement("div");
	groupingContents.className = "fieldset_contents";
	grouping.appendChild(groupingContents);
	
	return grouping;
}

function createRepresentativeDOMElement(item)
{
	let itemName = item.name;
	
	let itemDiv = document.createElement("div");
	//itemDiv.style.backgroundImage = `url("assets/images/adventurers/${item.id}.png")`;
	//itemDiv.style.order = Math.floor(gachaInstance.getPercentageChance(item) * -10000);
	itemDiv.style.order = Array.from(Object.entries(Element)).map(x => x[1]).indexOf(item.element);
	itemDiv.className = `adventurer`;
	itemDiv.id = item.id;
	itemDiv.setAttribute("data-element", item.element.toString());
	itemDiv.setAttribute("data-owned", (playerInventory.has(item) ? "true" : "false"));
	itemDiv.setAttribute("data-limited", (LimitedAdventurers.has(item) ? "true" : "false"));
	
	//// Disabled for now.
	// let elementalBackgroundDiv = document.createElement("div");
	// elementalBackgroundDiv.className = "elemental_background";
	// itemDiv.appendChild(elementalBackgroundDiv);
	
	// A picture of the item/adventurer
	let itemPortraitDiv = document.createElement("div");
	itemPortraitDiv.className = "portrait";
	if (item.id != "")
	{
		itemPortraitDiv.style.backgroundImage = `url("assets/images/adventurers/${item.id}.png")`;
	}
	else
	{
		itemPortraitDiv.style.backgroundImage = `url("assets/images/adventurers/unknown_adventurer.png")`;
	}
	itemDiv.appendChild(itemPortraitDiv);
	
	let itemNameDiv = document.createElement("div");
	itemNameDiv.className = "name";
	itemNameDiv.innerText = item.name;
	itemDiv.appendChild(itemNameDiv);
	
	if (gachaInstance.contains(item))
	{
		if (isFeatured(item) != false)
		{
			let featuredDiv = document.createElement("div");
			featuredDiv.className = "featured";
			itemDiv.appendChild(featuredDiv);
		}
		
		const estimatedOdds = gachaInstance.getPercentageChance(item);
		
		// let percentageChanceDiv = document.createElement("div");
		// percentageChanceDiv.className = "percentage_chance";
		// percentageChanceDiv.innerText = `${gachaInstance.getPercentageChance(item).toLocaleString("en", {style: "percent", maximumSignificantDigits: 3})}`;
		// itemDiv.appendChild(percentageChanceDiv);
		
		// let drawChanceDiv = document.createElement("div");
		// drawChanceDiv.className = "draw_odds";
		// drawChanceDiv.innerText = `1 in ${Math.ceil(1 / estimatedOdds)}`;
		// //drawChanceDiv.innerText = `${gachaInstance.getPercentageChance(item).toLocaleString("en", {style: "percent", maximumSignificantDigits: 3})}`;
		// itemDiv.appendChild(drawChanceDiv);
		
		let wrymiteCostDiv = document.createElement("div");
		wrymiteCostDiv.className = "cost_to_obtain";
		wrymiteCostDiv.appendChild(document.createWyrmiteAmountElement(Math.ceil(1/estimatedOdds) * WYRMITE_PER_PULL));
		itemDiv.appendChild(wrymiteCostDiv);
	}
	
	// let itemRarityDiv = document.createElement("div");
	// itemRarityDiv.className = "rarity";
	// itemRarityDiv.innerHTML = `${BLACK_STAR}`.repeat(item.rarity);
	// itemDiv.appendChild(itemRarityDiv);
	
	return itemDiv;
}

const adventurersElement = document.getElementById("adventurers");
if (adventurersElement != null && adventurersElement != undefined)
{
	for (let [label, rarityValue] of Object.entries(Rarity).reverse())
	{
		const rarityGrouping = createGrouping(`<img src="assets/images/game/${rarityValue}_stars.png">`);
		rarityGrouping.className = `rarity_${rarityValue}`;
		adventurersElement.appendChild(rarityGrouping);
	}
	
	for (let adventurer of Array.from(Adventurers.values()).sort((a, b) => a.weaponType - b.weaponType))
	{
		if (options.display.showStoryAdventurers == false && StoryAdventurers.has(adventurer))
		{
			continue;
		}
		
		if (options.display.showWelfareAdventurers == false && WelfareAdventurers.has(adventurer))
		{
			continue;
		}
		
		// if (options.display.showOutOfShowcaseLimitedAdventurers == false && LimitedAdventurers.has(adventurer) && gachaInstance.contents.includes(adventurer) == false && playerInventory.has(adventurer) == false)
		// {
		// 	continue;
		// }
		
		let adventurerDiv = createRepresentativeDOMElement(adventurer);
		
		let targetRarityGrouping = adventurersElement.getElementsByClassName(`rarity_${adventurer.rarity}`)[0].getElementsByTagName("div")[0];
		
		targetRarityGrouping.appendChild(adventurerDiv);
		
		adventurerDiv.addEventListener("click", () =>
		{
			if (playerInventory.has(adventurer) != false)
			{
				playerInventory.delete(adventurer);
				adventurerDiv.setAttribute("data-owned", "false");
			}
			else
			{
				playerInventory.set(adventurer, 1);
				adventurerDiv.setAttribute("data-owned", "true");
			}
		});
	}
}

updateWyrmiteCosts();
