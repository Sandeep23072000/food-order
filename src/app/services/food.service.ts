import { Injectable } from '@angular/core';
import { Foods } from '../shared/models/food';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getfood(): Foods[] {
    return [
      {
      id: 1,
      name: 'Pizza Pepperoni',
      price: 10,
      favorite: false,
      star: 5,
      tags: ["fastfood", "Pizza", "Lunch"],
      imageUrl: './assets/food-1.jpg',
      cookTime: '10 - 20',
      origins: ["italy"],

      },
      {
      id: 2,
      name: 'Pizza Pepperoni',
      price: 10,
      favorite: true,
      star: 4.5,
      tags: ["fastfood", "Pizza", "Lunch"],
      imageUrl: './assets/food-2.jpg',
      cookTime: '10 - 20',
      origins: ["italy"],
    },
    {
      id: 1,
      name: 'Pizza Pepperoni',
      price: 10,
      favorite: false,
      star: 3.5,
      tags: ["fastfood", "Pizza", "Lunch"],
      imageUrl: './assets/food-4.jpg',
      cookTime: '10 - 20',
      origins: ["italy"],
    },
    {
      id: 1,
      name: 'Pizza Pepperoni',
      price: 10,
      favorite: false,
      star: 1.5,
      tags: ["fastfood", "Pizza", "Lunch"],
      imageUrl: './assets/food-5.jpg',
      cookTime: '10 - 20',
      origins: ["italy"],
    },
    {
      id: 1,
      name: 'Pizza Pepperoni',
      price: 10,
      favorite: false,
      star: 4.5,
      tags: ["fastfood", "Pizza", "Lunch"],
      imageUrl: './assets/food-6.jpg',
      cookTime: '10 - 20',
      origins: ["italy"],
    },
    {
      id: 1,
      name: 'icecream',
      price: 10,
      favorite: false,
      star: 4.5,
      tags: ["fastfood", "Pizza", "Lunch"],
      imageUrl: './assets/food-7.jpg',
      cookTime: '10 - 20',
      origins: ["italy"],
    },
    {
      id: 1,
      name: 'Pizza Pepperoni',
      price: 10,
      favorite: false,
      star: 4.5,
      tags: ["fastfood", "Pizza", "Lunch"],
      imageUrl: './assets/food-8.jpg',
      cookTime: '10 - 20',
      origins: ["italy"],
    },
    {
      id: 1,
      name: 'Pizza Pepperoni',
      price: 10,
      favorite: false,
      star: 2.5,
      tags: ["fastfood", "Pizza", "Lunch"],
      imageUrl: './assets/food-9.jpg',
      cookTime: '10 - 20',
      origins: ["italy"],
    }
      // './assets/food-1.jpg',
      // './assets/food-2.jpg',
      // './assets/food-4.jpg',
      // './assets/food-5.jpg',
      // './assets/food-6.jpg',
      // './assets/food-7.jpg',
      // './assets/food-8.jpg',
      // './assets/food-9.jpg',

    ];
  }
}