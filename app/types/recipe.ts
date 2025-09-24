export type Recipes = {
  recipes: Recipe[]
  total: number
  skip: number
  limit: number
}

export type Recipe = {
  id: number
  name: string
  ingredients: string[]
  instructions: string[]
  prepTimeMinutes: number
  cookTimeMinutes: number
  servings: number
  difficulty: Difficulty
  cuisine: string
  caloriesPerServing: number
  tags: string[]
  userId: number
  image: string
  rating: number
  reviewCount: number
  mealType: string[]
}

export enum Difficulty {
  Easy = 'Easy',
  Medium = 'Medium',
}
