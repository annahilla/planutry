export interface AuthUser  {
  name?:string | null;
  email: string | null;
  token: string;
  joined?: string;
}

export interface User {
  email:string;
  password: string;
}

export interface IngredientInterface {
  _id?: string;
  ingredient: string,
  quantity: number,
  unit: string
}

export interface Recipe {
  _id?: string;
  name: string;
  ingredients: IngredientInterface[],
  description?:string
}

export type DayOfTheWeek =
  "Monday"
  | "Tuesday"
  | "Wednesday"
  | "Thursday"
  | "Friday"
  | "Saturday"
  | "Sunday"

  export const days: DayOfTheWeek[] = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

export type Meal = "Breakfast" | "Lunch" | "Snack" | "Dinner";
export const meals: Meal[] = ["Breakfast", "Lunch", "Snack", "Dinner"];

export interface MenuInterface {
  _id?: string;
  recipe: Recipe | string,
  dayOfTheWeek: DayOfTheWeek,
  meal: Meal
}

export type SelectedRecipesState = {
  [meal: string]: Recipe | null;
};