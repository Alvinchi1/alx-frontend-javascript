import Building from './5-building';

class SkyHighBuilding extends Building {
	constructor(sqft, floor) {
		super(sqft);
		this._floors =floors;
	}

	get floors() {
		return (this._floors);
	}

	evacuationWarningMessage() {
		return ('Evacuate clowly the ${this.floors} floors');
	}
}


export default SkyHighBuilding;
