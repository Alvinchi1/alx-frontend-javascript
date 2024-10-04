import Car from './car';

class EVCar extends Car {
	constructor(brand = '', motor = '', color = '', range = '') {
		super(brand, motor, color);
		this._range = range;
	}

	static get [Symbol.Species]() {
		return Car;
	}
}

export default EVCar;
