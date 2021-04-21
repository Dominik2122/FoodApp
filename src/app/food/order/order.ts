import { Pizza } from "../food-builder/pizza/pizza";

export interface Order {
    user: {
      username: string,
      email: string,
      address: string,
      phone: string
    },
    food: any,
    value: number
  }