import { Training } from './training.model'
import { EventEmitter } from '@angular/core';
import { InputCarComponent } from './../input-car/input-car.component'

export class TrainingService {
    cars = [];

    constructor() { }

    updateCar(car: { name: number, counter: number }) {
        this.cars.push(car);
        console.log(this.cars)
    }


    getTraining() {
        return this.cars;
    }


}