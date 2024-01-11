export interface Food {
    name: string;
    perGrams: number;
    ingredient: Ingredient[];
}

export interface Ingredient {
    name: string;
    carbohydrates: number;
    proteins: number;
    fats: number;
    calories: number;
    perGrams: number;
}

export enum MEAL_TIME {
    BREAK_FIRST,
    LUNCH,
    DINNER
}

export interface FoodSchedule {
    sid: number;
    date: string;
    mealTime: MEAL_TIME;
    food: Food[];
}