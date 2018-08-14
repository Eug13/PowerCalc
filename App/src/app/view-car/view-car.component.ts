import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-car',
  templateUrl: './view-car.component.html',
  styleUrls: ['./view-car.component.css']
})


export class ViewCarComponent implements OnInit {


  @Output('delCar') delCar = new EventEmitter<{ name: number, counter: number, times: number, rutine: number, six: number, rec: number }>();
  @Input('singleCar') singleCar: { name: number, counter: number, times: number, six: number };

  constructor() {
  }

  private targetClass: string = 'current';
  showStyle: false;
  done: false;
  public count: number = 0;
  nonCounter = 1;
  // dataArr = [];
  check = '';
  message = '';



  checked(event) {
    event.target.setAttribute("class", "round new");
    // event.target.setAttribute("id", this.count);
    this.count++
    if (this.count === 6) {
      this.check = 'new'
      localStorage.setItem('checked', JSON.stringify(this.check));

    }

    if (this.singleCar.counter === 5) {
      if (this.count === 5) {
        this.check = 'new'
        localStorage.setItem('checked', JSON.stringify(this.check));

      }
    }

    if (this.singleCar.counter === 6) {
      if (this.count === 4) {
        this.check = 'new'
        localStorage.setItem('checked', JSON.stringify(this.check));

      }
    }

    if (this.singleCar.counter === 7) {
      if (this.count === 3) {
        this.check = 'new'
        localStorage.setItem('checked', JSON.stringify(this.check));

      }
    }

    if (this.singleCar.counter === 8) {
      if (this.count === 2) {
        this.check = 'new'
        localStorage.setItem('checked', JSON.stringify(this.check));

      }
    }
    if (this.singleCar.counter === 9) {
      if (this.count === 1) {
        this.check = 'new'
        localStorage.setItem('checked', JSON.stringify(this.check));
      }
      if (this.count >= 6 ) {
        this.message = '! CONGRATULATIONS THIS IS YOUR LAST TRAINING IN THIS CYCLE !'
      }
    }
    
    // console.log(this.singleCar)
    // console.log(this.count)
  }


  getStyle() {
    if (this.showStyle) {
      this.getDone();
      return "silver";
    } else {
      return "";
    }
  }

  getDone() {
    if (this.showStyle) {
      return "inline";
    } else {
      return "";
    }
  }

  allDone() {
    if (this.done) {
      return "none";
    } else {
      return "";
    }
  }

  remove() {
    this.delCar.emit({
      name: null,
      counter: null,
      times: null,
      rutine: null,
      six: null,
      rec: null
    });



    this.count = 0;

    console.log(this.nonCounter)
    this.nonCounter++;
    localStorage.setItem('nonCounter', JSON.stringify(this.nonCounter));
    const input = true;
    localStorage.setItem('inputCalc', JSON.stringify(input));
    if (this.singleCar.counter === 9) {
      localStorage.clear();
    }
    window.location.reload();
  }

  ngOnInit() {
    if (localStorage.getItem('checked')) {
      this.check = JSON.parse(localStorage.getItem('checked'));

      // console.log(localStorage.getItem('array'));
      // localStorage.clear()
    }
    if (localStorage.getItem('nonCounter')) {
      this.nonCounter = JSON.parse(localStorage.getItem('nonCounter'));
    }

  }


}
