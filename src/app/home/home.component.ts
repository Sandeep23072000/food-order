import { Component, OnInit } from '@angular/core';
import { FoodService } from '../services/food.service';
import { Foods } from '../shared/models/food';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
   images: any;
  foods : Foods[] = [];
  constructor(
    private fs: FoodService,
  ) { }

  ngOnInit(): void {
    this.foods = this.fs.getfood();
  }

}
