import { Pizza } from "../food-builder/pizza/pizza";

export interface Order {
    user: {
      username: any,
      email: any,
      address: any,
      phone: any
    },
    food: any,
    value: number
  }