import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderDetailsService {

  constructor() { }

  foodDetails = [
    {
      id:1,
      foodName:"Beef Sandwich",
      foodDetails:"Pan-fried masala paneer.",
      foodPrice:150,
      foodImg:"../../../assets/img/beefSan.jpg"
    },
    {
      id:2,
      foodName:"Ramen",
      foodDetails:"Chicken,Egg,Srimp,Vegetable",
      foodPrice:200,
      foodImg:"../../../assets/img/ramen.jpg"
    },
    {
      id:3,
      foodName:"Chicken Burger",
      foodDetails:"Double patty",
      foodPrice:200,
      foodImg:"../../../assets/img/burger.jpg"
    },
    {
      id:4,
      foodName:"Chicken Pasta",
      foodDetails:"A homely mix of chicken seasoned with Indian spices.",
      foodPrice:150,
      foodImg:"../../../assets/img/pasta.jpg"
    },
    {
      id:5,
      foodName:"Chicken Fry",
      foodDetails:"Chicken leg coverd with red souce",
      foodPrice:120,
      foodImg:"../../../assets/img/chickenFry.jpg"
    },
    {
      id:6,
      foodName:"Chicken Chowmin",
      foodDetails:"Chicken,Cheese",
      foodPrice:150,
      foodImg:"../../../assets/img/noolds.jpg"
    },
    {
      id:7,
      foodName:"Chicken Nuggets",
      foodDetails:"Chicken,Cheese,Sauce",
      foodPrice:250,
      foodImg:"../../../assets/img/nuggets.jpg"
    },
    {
      id:8,
      foodName:"Chicken Pizza",
      foodDetails:"Chicken,Cheese,Black oliv,Capcicum,Onion,Tomato.",
      foodPrice:550,
      foodImg:"../../../assets/img/pizza.jpg"
    },
    {
      id:9,
      foodName:"Veggie Sandwich",
      foodDetails:"Onion,Green Capsicum,sweet corn , Red Paprika.",
      foodPrice:100,
      foodImg:"../../../assets/img/vegSan.jpg"
    },
    {
      id:10,
      foodName:"Rice Bowl",
      foodDetails:"Chicken,Rice,Vegetable",
      foodPrice:100,
      foodImg:"../../../assets/img/rice.jpg"
    },
    {
      id:11,
      foodName:"Chicken Noodles Soup",
      foodDetails:"Chicken,Noodles,Vegetable",
      foodPrice:250,
      foodImg:"../../../assets/img/soup.jpg"
    },
    {
      id:12,
      foodName:"Sea Supreme",
      foodDetails:"A mix of sea king and veggies.",
      foodPrice:250,
      foodImg:"../../../assets/img/picture2.jpg"
    }
  ]
}
