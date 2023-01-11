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
      name: 'Paratha With Dahi',
      price: 30,
      favorite: false,
      star: 5,
      tags: ["fastfood", "Lunch"],
      imageUrl: './assets/food-1.jpg',
      cookTime: '10 - 20',
      origins: ["italy", "India"],

      },
      {
      id: 2,
      name: 'Dahi Puchke',
      price: 10,
      favorite: true,
      star: 4.5,
      tags: ["fastfood"],
      imageUrl: './assets/food-2.jpg',
      cookTime: '5 - 10',
      origins: ["India"],
    },
    {
      id: 1,
      name: 'Berger',
      price: 40,
      favorite: false,
      star: 3.5,
      tags: ["fastfood"],
      imageUrl: './assets/food-4.jpg',
      cookTime: '10 - 20',
      origins: ["italy", "India", "China"],
    },
    {
      id: 1,
      name: 'Corn Ice-Cream',
      price: 10,
      favorite: false,
      star: 1.5,
      tags: ["fastfood"],
      imageUrl: './assets/food-5.jpg',
      cookTime: '0 - 10',
      origins: ["India"],
    },
    {
      id: 1,
      name: 'Paneer',
      price: 10,
      favorite: false,
      star: 4.5,
      tags: ["Lunch"],
      imageUrl: './assets/food-6.jpg',
      cookTime: '15 - 20',
      origins: ["India", "North-East"],
    },
    {
      id: 1,
      name: 'Icecream',
      price: 10,
      favorite: false,
      star: 4.5,
      tags: ["fastfood"],
      imageUrl: './assets/food-7.jpg',
      cookTime: '5 - 10',
      origins: ["India"],
    },
    {
      id: 1,
      name: 'Jalebi',
      price: 10,
      favorite: false,
      star: 4.5,
      tags: ["Sweet", "Lunch"],
      imageUrl: './assets/food-8.jpg',
      cookTime: '10 - 20',
      origins: ["India"],
    },
    {
      id: 1,
      name: 'Pizza Pepperoni',
      price: 10,
      favorite: false,
      star: 2.5,
      tags: ["fastfood", "Pizza", "Lunch"],
      imageUrl: './assets/food-9.jpg',
      cookTime: '20 - 30',
      origins: ["italy", "India", "United States"],
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