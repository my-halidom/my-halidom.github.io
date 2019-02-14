"use strict";

const Element =
{
	FLAME: { toString: (() => "flame") },
	WATER: { toString: (() => "water") },
	WIND: { toString: (() => "wind") },
	LIGHT: { toString: (() => "light") },
	SHADOW: { toString: (() => "shadow") },
};

const Weapon =
{
	SWORD: 0,
	BLADE: 1,
	DAGGER: 2,
	AXE: 3,
	LANCE: 4,
	BOW: 5,
	WAND: 6,
	STAFF: 7,
};

const Rarity =
{
	BRONZE: 3,
	SILVER: 4,
	GOLD: 5
};

/**
 * Base class for all objects.
 */
class DragaliaObject
{
	constructor(id, rarity)
	{
		this._id = id;
		this._rarity = rarity;
	}
	
	get id() { return this._id; }
	get rarity() { return this._rarity; }
}

class ElementalDragaliaObject extends DragaliaObject
{
	constructor(id, rarity, element)
	{
		super(id, rarity);
		this._element = element;
	}
	
	get element() { return this._element; }
}

class AdventurerObject extends ElementalDragaliaObject
{
	constructor(id, name, element, weaponType, rarity)
	{
		super(id, rarity, element);
		this._name = name;
		this._weaponType = weaponType;
	}
	
	get name() { return this._name; }
	get weaponType() { return this._weaponType; }
}

class Dragon extends ElementalDragaliaObject
{
	constructor(id, name, element, rarity)
	{
		super(id, rarity, element);
		this._name = name;
	}
	
	get name() { return this._name; }
}

class ShowcaseBin
{
	constructor(items, featuredItems, odds, featuredRatio)
	{
		this._allItems = new Set();
		this._featuredItems = new Set();
	}
}

class SummoningShowcase
{
	constructor()
	{
		this._bins = [];
		// for (let i = 0; i < arguments.length - 1; ++i)
		// {
		// 	this._bins.push(arguments[i]);
		// }
		
		// this._featuredItems = new Set(arguments[arguments.length - 1]);
		
		for (let i = 0; i < arguments.length; ++i)
		{
			this._bins.push(arguments[i]);
		}
		
		this._featuredItems = new Set();
	}
	
	createBin(items, overallPercentage, featuredRatio)
	{
		this._bins.push(items);
	}
	
	// setFeatured(items)
	// {
	// 	this._featuredItems = new Set([...this._featuredItems, ...items]);
	// }
	
	set featuredItems(items)
	{
		this._featuredItems = new Set(items);
	}
	
	get featuredItems()
	{
		return new Set(this._featuredItems);
	}
	
	isFeatured(item)
	{
		return this._featuredItems.has(item);
	}
}

class Gacha
{
	constructor()
	{
		this._contents = new Map();
		this._collections = new Map();
	}
	
	get contents()
	{
		const contentsArray = new Array();
		for (let collection of this._collections.keys())
		{
			//console.log(collection);
			for (let item of collection)
			{
				contentsArray.push(item);
			}
		}
		
		return contentsArray;
	}
	
	/**
	 * 
	 * @param {*} collection 
	 * @param {*} percentChance 
	 */
	addCollection(collection, percentChance)
	{
		this._collections.set(new Set(collection), percentChance);
	}
	
	/**
	 * 
	 * @param {*} item 
	 */
	getPercentageChance(item)
	{
		for (var [collection, percentChance] of this._collections)
		{
			if (collection.has(item) == true)
			{
				return (percentChance / collection.size);
			}
		}
		
		// Default case; not found.
		return 0.0;
	}
	
	contains(item)
	{
		return this.contents.includes(item);
	}
}
