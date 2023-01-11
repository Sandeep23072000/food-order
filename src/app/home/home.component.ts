import { Component, OnInit } from '@angular/core';
import { FoodService } from '../services/food.service';
import { Foods } from '../shared/models/food';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  foods: Foods[] = [];
  constructor(
    private fs: FoodService,
    private route: ActivatedRoute,
  ) {
    // this.foods = this.fs.getfood();
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if (params['searchItem']) {
        this.foods = this.fs.getfood().filter(food => food.name.toLowerCase().includes(params['searchItem'].toLowerCase()));
      }
      else {
        this.foods = this.fs.getfood();
      }
    });
  }

}
