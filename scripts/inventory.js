"use strict";

class Inventory
{
	constructor()
	{
		this._contents = new Map();
		this._contentsChangedCallbacks = [];
	}
	
	add(item)
	{
		let currentValue = this._contents.get(item);
		currentValue = (currentValue == undefined ? 0 : currentValue);
		this._contents.set(item, currentValue + 1);
		
		this._contentsChanged();
	}
	
	has(item)
	{
		const value = this._contents.get(item);
		const valueAsInteger = parseInt(value);
		return (isNaN(valueAsInteger) == false && valueAsInteger != 0);
	}
	
	keys()
	{
		return this._contents.keys();
	}
	
	entries()
	{
		return this._contents.entries();
	}
	
	set(item, quantity)
	{
		const returnValue = this._contents.set(item, quantity);
		this._contentsChanged();
		
		return returnValue;
	}
	
	delete(item)
	{
		const returnValue = this._contents.delete(item);
		this._contentsChanged();
		
		return returnValue;
	}
	
	onContentsChanged(callback)
	{
		this._contentsChangedCallbacks.push(callback);
	}
	
	_contentsChanged()
	{
		for (let callback of this._contentsChangedCallbacks.values())
		{
			callback();
		}
	}
}
