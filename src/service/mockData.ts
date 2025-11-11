// Mock data based on Spoonacular API structure
// https://spoonacular.com/food-api/docs
// Dati basati su risposte reali dell'API Spoonacular

import type { Recipe, Ingredient } from "../types";

// ========================================
// MOCK COMPLETI - GET /recipes/{id}/information
// ========================================
// Dettagli completi delle ricette
export const mockRecipes: Recipe[] = [
  // Recipe 1: Easy Tomato Basil Chicken – One Pot Meal
  {
    id: 1070648,
    title: "Easy Tomato Basil Chicken – One Pot Meal",
    image: "https://img.spoonacular.com/recipes/1070648-312x231.jpg",
    imageType: "jpg",
    servings: 4,
    readyInMinutes: 30,
    cookingMinutes: 20,
    preparationMinutes: 10,
    license: "CC BY-SA 3.0",
    sourceName: "Spoonacular",
    sourceUrl: "https://spoonacular.com/easy-tomato-basil-chicken-one-pot-meal-1070648",
    spoonacularSourceUrl: "https://spoonacular.com/easy-tomato-basil-chicken-one-pot-meal-1070648",
    healthScore: 52,
    spoonacularScore: 75,
    pricePerServing: 285.5,
    analyzedInstructions: [],
    cheap: false,
    creditsText: "Spoonacular",
    cuisines: ["American"],
    dairyFree: false,
    diets: [],
    gaps: "no",
    glutenFree: false,
    instructions: "Cook pasta according to package directions. In a large skillet, heat oil and cook chicken until browned. Add bell peppers and cook until soft. Pour in tomato basil sauce and cooked pasta. Stir to combine and heat through. Garnish with fresh basil leaves.",
    ketogenic: false,
    lowFodmap: false,
    occasions: [],
    sustainable: false,
    vegan: false,
    vegetarian: false,
    veryHealthy: false,
    veryPopular: false,
    whole30: false,
    weightWatcherSmartPoints: 12,
    dishTypes: ["lunch", "main course", "main dish", "dinner"],
    extendedIngredients: [
      {
        id: 10211821,
        aisle: "Produce",
        image: "https://img.spoonacular.com/ingredients_100x100/bell-pepper-orange.png",
        consistency: "SOLID",
        name: "bell pepper",
        nameClean: "bell pepper",
        original: "1/4 cup bell pepper chopped",
        originalName: "bell pepper chopped",
        amount: 0.25,
        unit: "cup",
        meta: ["chopped"],
        measures: {
          us: { amount: 0.25, unitShort: "cup", unitLong: "cups" },
          metric: { amount: 37.5, unitShort: "g", unitLong: "grams" }
        }
      },
      {
        id: 5064,
        aisle: "Meat",
        image: "https://img.spoonacular.com/ingredients_100x100/cooked-chicken-breast.png",
        consistency: "SOLID",
        name: "chicken breast",
        nameClean: "chicken breast",
        original: "1 cup chicken breast strips/pre-cooked/chopped",
        originalName: "chicken breast strips/pre-cooked/chopped",
        amount: 1,
        unit: "cup",
        meta: [],
        measures: {
          us: { amount: 1, unitShort: "cup", unitLong: "cup" },
          metric: { amount: 140, unitShort: "g", unitLong: "grams" }
        }
      },
      {
        id: 2044,
        aisle: "Produce",
        image: "https://img.spoonacular.com/ingredients_100x100/fresh-basil.jpg",
        consistency: "SOLID",
        name: "basil",
        nameClean: "basil",
        original: "1/4 cup basil fresh",
        originalName: "basil fresh",
        amount: 0.25,
        unit: "cup",
        meta: ["fresh"],
        measures: {
          us: { amount: 0.25, unitShort: "cup", unitLong: "cups" },
          metric: { amount: 6, unitShort: "g", unitLong: "grams" }
        }
      },
      {
        id: 6233,
        aisle: "Pasta and Rice",
        image: "https://img.spoonacular.com/ingredients_100x100/tomato-sauce-or-pasta-sauce.jpg",
        consistency: "LIQUID",
        name: "tomato basil sauce",
        nameClean: "tomato basil sauce",
        original: "1 24oz tomato basil sauce",
        originalName: "tomato basil sauce",
        amount: 24,
        unit: "oz",
        meta: [],
        measures: {
          us: { amount: 24, unitShort: "oz", unitLong: "ounces" },
          metric: { amount: 680, unitShort: "g", unitLong: "grams" }
        }
      },
      {
        id: 11320420,
        aisle: "Pasta and Rice",
        image: "https://img.spoonacular.com/ingredients_100x100/fusilli.jpg",
        consistency: "SOLID",
        name: "rotini pasta",
        nameClean: "rotini pasta",
        original: "1 16oz rotini pasta",
        originalName: "rotini pasta",
        amount: 16,
        unit: "oz",
        meta: [],
        measures: {
          us: { amount: 16, unitShort: "oz", unitLong: "ounces" },
          metric: { amount: 454, unitShort: "g", unitLong: "grams" }
        }
      }
    ],
    summary: "Easy Tomato Basil Chicken is a delicious one-pot meal that combines tender chicken, fresh vegetables, and pasta in a savory tomato basil sauce. Perfect for busy weeknights when you want something quick but satisfying.",
    aggregateLikes: 10
  },

  // Recipe 2: Easy Gift Lasagna
  {
    id: 641974,
    title: "Easy Gift Lasagna",
    image: "https://img.spoonacular.com/recipes/641974-312x231.jpg",
    imageType: "jpg",
    servings: 8,
    readyInMinutes: 75,
    cookingMinutes: 45,
    preparationMinutes: 30,
    license: "CC BY-SA 3.0",
    sourceName: "Spoonacular",
    sourceUrl: "https://spoonacular.com/easy-gift-lasagna-641974",
    spoonacularSourceUrl: "https://spoonacular.com/easy-gift-lasagna-641974",
    healthScore: 28,
    spoonacularScore: 68,
    pricePerServing: 195.75,
    analyzedInstructions: [],
    cheap: false,
    creditsText: "Spoonacular",
    cuisines: ["Italian"],
    dairyFree: false,
    diets: [],
    gaps: "no",
    glutenFree: false,
    instructions: "Cook lasagna noodles according to package directions. In a bowl, mix ricotta cheese and half the mozzarella. Layer noodles, ricotta mixture, spaghetti sauce, and mozzarella in a baking dish. Repeat layers. Top with parmesan cheese. Bake at 375°F for 45 minutes.",
    ketogenic: false,
    lowFodmap: false,
    occasions: ["christmas", "thanksgiving"],
    sustainable: false,
    vegan: false,
    vegetarian: true,
    veryHealthy: false,
    veryPopular: false,
    whole30: false,
    weightWatcherSmartPoints: 15,
    dishTypes: ["lunch", "main course", "main dish", "dinner"],
    extendedIngredients: [
      {
        id: 1032,
        aisle: "Cheese",
        image: "https://img.spoonacular.com/ingredients_100x100/parmesan.jpg",
        consistency: "SOLID",
        name: "parmesan cheese",
        nameClean: "parmesan cheese",
        original: "1 cup fresh grated Parmesan cheese",
        originalName: "fresh grated Parmesan cheese",
        amount: 1,
        unit: "cup",
        meta: ["fresh", "grated"],
        measures: {
          us: { amount: 1, unitShort: "cup", unitLong: "cup" },
          metric: { amount: 100, unitShort: "g", unitLong: "grams" }
        }
      },
      {
        id: 1036,
        aisle: "Cheese",
        image: "https://img.spoonacular.com/ingredients_100x100/ricotta.png",
        consistency: "SOLID",
        name: "ricotta cheese",
        nameClean: "ricotta cheese",
        original: "1 small container Ricotta Cheese",
        originalName: "Ricotta Cheese",
        amount: 1,
        unit: "small container",
        meta: [],
        measures: {
          us: { amount: 1, unitShort: "small container", unitLong: "small container" },
          metric: { amount: 425, unitShort: "g", unitLong: "grams" }
        }
      },
      {
        id: 1001026,
        aisle: "Cheese",
        image: "https://img.spoonacular.com/ingredients_100x100/shredded-cheese-white.jpg",
        consistency: "SOLID",
        name: "mozzarella cheese",
        nameClean: "mozzarella cheese",
        original: "4 cups shredded Mozzarella Cheese",
        originalName: "shredded Mozzarella Cheese",
        amount: 4,
        unit: "cups",
        meta: ["shredded"],
        measures: {
          us: { amount: 4, unitShort: "cups", unitLong: "cups" },
          metric: { amount: 450, unitShort: "g", unitLong: "grams" }
        }
      },
      {
        id: 10620420,
        aisle: "Pasta and Rice",
        image: "https://img.spoonacular.com/ingredients_100x100/lasagna-noodles.jpg",
        consistency: "SOLID",
        name: "lasagna noodles",
        nameClean: "lasagna noodles",
        original: "9 Lasagna noodles – cooked according to package instructions",
        originalName: "Lasagna noodles – cooked according to package instructions",
        amount: 9,
        unit: "",
        meta: ["cooked"],
        measures: {
          us: { amount: 9, unitShort: "", unitLong: "" },
          metric: { amount: 9, unitShort: "", unitLong: "" }
        }
      },
      {
        id: 10011549,
        aisle: "Pasta and Rice",
        image: "https://img.spoonacular.com/ingredients_100x100/tomato-sauce-or-pasta-sauce.jpg",
        consistency: "LIQUID",
        name: "spaghetti sauce",
        nameClean: "spaghetti sauce",
        original: "1 batch of Best Ever Spaghetti Sauce",
        originalName: "batch of Best Ever Spaghetti Sauce",
        amount: 1,
        unit: "",
        meta: [],
        measures: {
          us: { amount: 1, unitShort: "", unitLong: "" },
          metric: { amount: 1, unitShort: "", unitLong: "" }
        }
      }
    ],
    summary: "Easy Gift Lasagna is a hearty Italian classic layered with cheese, pasta, and savory sauce. Perfect for gifting to loved ones or serving at family gatherings.",
    aggregateLikes: 2
  },

  // Recipe 3: Baked Ziti
  {
    id: 633876,
    title: "Baked Ziti",
    image: "https://img.spoonacular.com/recipes/633876-312x231.jpg",
    imageType: "jpg",
    servings: 6,
    readyInMinutes: 55,
    cookingMinutes: 35,
    preparationMinutes: 20,
    license: "CC BY-SA 3.0",
    sourceName: "Spoonacular",
    sourceUrl: "https://spoonacular.com/baked-ziti-633876",
    spoonacularSourceUrl: "https://spoonacular.com/baked-ziti-633876",
    healthScore: 22,
    spoonacularScore: 70,
    pricePerServing: 178.25,
    analyzedInstructions: [],
    cheap: false,
    creditsText: "Spoonacular",
    cuisines: ["Italian"],
    dairyFree: false,
    diets: ["vegetarian"],
    gaps: "no",
    glutenFree: false,
    instructions: "Cook ziti pasta until al dente. Mix with spaghetti sauce and ricotta cheese. Transfer to baking dish, top with mozzarella and parmesan. Bake at 350°F for 30 minutes until bubbly and golden.",
    ketogenic: false,
    lowFodmap: false,
    occasions: [],
    sustainable: false,
    vegan: false,
    vegetarian: true,
    veryHealthy: false,
    veryPopular: false,
    whole30: false,
    weightWatcherSmartPoints: 14,
    dishTypes: ["lunch", "main course", "main dish", "dinner"],
    extendedIngredients: [
      {
        id: 1036,
        aisle: "Cheese",
        image: "https://img.spoonacular.com/ingredients_100x100/ricotta.png",
        consistency: "SOLID",
        name: "ricotta cheese",
        nameClean: "ricotta cheese",
        original: "16 ounces ricotta cheese",
        originalName: "ricotta cheese",
        amount: 16,
        unit: "ounces",
        meta: [],
        measures: {
          us: { amount: 16, unitShort: "oz", unitLong: "ounces" },
          metric: { amount: 454, unitShort: "g", unitLong: "grams" }
        }
      },
      {
        id: 1026,
        aisle: "Cheese",
        image: "https://img.spoonacular.com/ingredients_100x100/mozzarella.png",
        consistency: "SOLID",
        name: "mozzarella cheese",
        nameClean: "mozzarella cheese",
        original: "3 cups mozzarella cheese , grated",
        originalName: "mozzarella cheese , grated",
        amount: 3,
        unit: "cups",
        meta: ["grated"],
        measures: {
          us: { amount: 3, unitShort: "cups", unitLong: "cups" },
          metric: { amount: 340, unitShort: "g", unitLong: "grams" }
        }
      },
      {
        id: 1033,
        aisle: "Cheese",
        image: "https://img.spoonacular.com/ingredients_100x100/parmesan.jpg",
        consistency: "SOLID",
        name: "parmesan cheese",
        nameClean: "parmesan cheese",
        original: "1/2 cup parmesan cheese , grated",
        originalName: "parmesan cheese , grated",
        amount: 0.5,
        unit: "cup",
        meta: ["grated"],
        measures: {
          us: { amount: 0.5, unitShort: "cup", unitLong: "cups" },
          metric: { amount: 50, unitShort: "g", unitLong: "grams" }
        }
      },
      {
        id: 20420,
        aisle: "Pasta and Rice",
        image: "https://img.spoonacular.com/ingredients_100x100/fusilli.jpg",
        consistency: "SOLID",
        name: "ziti",
        nameClean: "ziti",
        original: "1/2 lb ziti (or other shape pasta)",
        originalName: "ziti (or other shape pasta)",
        amount: 0.5,
        unit: "lb",
        meta: ["(or other shape pasta)"],
        measures: {
          us: { amount: 0.5, unitShort: "lb", unitLong: "pounds" },
          metric: { amount: 227, unitShort: "g", unitLong: "grams" }
        }
      },
      {
        id: 10011549,
        aisle: "Pasta and Rice",
        image: "https://img.spoonacular.com/ingredients_100x100/tomato-sauce-or-pasta-sauce.jpg",
        consistency: "LIQUID",
        name: "spaghetti sauce",
        nameClean: "spaghetti sauce",
        original: "3 cups spaghetti sauce",
        originalName: "spaghetti sauce",
        amount: 3,
        unit: "cups",
        meta: [],
        measures: {
          us: { amount: 3, unitShort: "cups", unitLong: "cups" },
          metric: { amount: 735, unitShort: "ml", unitLong: "milliliters" }
        }
      }
    ],
    summary: "Baked Ziti is a comforting Italian-American pasta dish with layers of cheese, pasta and rich tomato sauce. Easy to make and perfect for feeding a crowd.",
    aggregateLikes: 1
  },

  // Recipe 4: Bird's Nest Marinara
  {
    id: 634995,
    title: "Bird's Nest Marinara",
    image: "https://img.spoonacular.com/recipes/634995-312x231.jpg",
    imageType: "jpg",
    servings: 4,
    readyInMinutes: 35,
    cookingMinutes: 25,
    preparationMinutes: 10,
    license: "CC BY-SA 3.0",
    sourceName: "Spoonacular",
    sourceUrl: "https://spoonacular.com/birds-nest-marinara-634995",
    spoonacularSourceUrl: "https://spoonacular.com/birds-nest-marinara-634995",
    healthScore: 35,
    spoonacularScore: 72,
    pricePerServing: 245.5,
    analyzedInstructions: [],
    cheap: false,
    creditsText: "Spoonacular",
    cuisines: ["Italian"],
    dairyFree: false,
    diets: [],
    gaps: "no",
    glutenFree: false,
    instructions: "Cook capellini nests according to package directions. Brown Italian sausage in a skillet. Heat marinara sauce. Place pasta nests on plates, top with sauce, sausage, mozzarella balls and fresh basil.",
    ketogenic: false,
    lowFodmap: false,
    occasions: [],
    sustainable: false,
    vegan: false,
    vegetarian: false,
    veryHealthy: false,
    veryPopular: false,
    whole30: false,
    weightWatcherSmartPoints: 13,
    dishTypes: ["lunch", "main course", "main dish", "dinner"],
    extendedIngredients: [
      {
        id: 7036,
        aisle: "Meat",
        image: "https://img.spoonacular.com/ingredients_100x100/raw-pork-sausage.png",
        consistency: "SOLID",
        name: "italian sausage",
        nameClean: "italian sausage",
        original: "1/2 pound mild Italian sausage",
        originalName: "mild Italian sausage",
        amount: 0.5,
        unit: "pound",
        meta: ["mild", "italian"],
        measures: {
          us: { amount: 0.5, unitShort: "lb", unitLong: "pounds" },
          metric: { amount: 227, unitShort: "g", unitLong: "grams" }
        }
      },
      {
        id: 93790,
        aisle: "Cheese",
        image: "https://img.spoonacular.com/ingredients_100x100/mozzarella-balls.jpg",
        consistency: "SOLID",
        name: "mozzarella balls",
        nameClean: "mozzarella balls",
        original: "1 container fresh marinated mozzarella balls",
        originalName: "fresh marinated mozzarella balls",
        amount: 1,
        unit: "container",
        meta: ["fresh", "marinated"],
        measures: {
          us: { amount: 1, unitShort: "container", unitLong: "container" },
          metric: { amount: 227, unitShort: "g", unitLong: "grams" }
        }
      },
      {
        id: 2044,
        aisle: "Produce",
        image: "https://img.spoonacular.com/ingredients_100x100/fresh-basil.jpg",
        consistency: "SOLID",
        name: "basil",
        nameClean: "basil",
        original: "Fresh shredded basil",
        originalName: "Fresh shredded basil",
        amount: 4,
        unit: "servings",
        meta: ["fresh", "shredded"],
        measures: {
          us: { amount: 4, unitShort: "servings", unitLong: "servings" },
          metric: { amount: 4, unitShort: "servings", unitLong: "servings" }
        }
      },
      {
        id: 11720420,
        aisle: "Pasta and Rice",
        image: "https://img.spoonacular.com/ingredients_100x100/angelhair.jpg",
        consistency: "SOLID",
        name: "capellini nest",
        nameClean: "capellini nest",
        original: "1 inch package Nidi capellini nest (store-bought dried capellini, shaped like little nest the package)",
        originalName: "package Nidi capellini nest (store-bought dried capellini, shaped like little nest the package)",
        amount: 1,
        unit: "inch",
        meta: ["dried", "store-bought", "(shaped like little nest the package)"],
        measures: {
          us: { amount: 1, unitShort: "inch", unitLong: "inch" },
          metric: { amount: 1, unitShort: "inch", unitLong: "inch" }
        }
      },
      {
        id: 10111549,
        aisle: "Pasta and Rice",
        image: "https://img.spoonacular.com/ingredients_100x100/tomato-sauce-or-pasta-sauce.jpg",
        consistency: "LIQUID",
        name: "marinara sauce",
        nameClean: "marinara sauce",
        original: "24 ounces jar marinara sauce",
        originalName: "marinara sauce",
        amount: 24,
        unit: "ounces",
        meta: [],
        measures: {
          us: { amount: 24, unitShort: "oz", unitLong: "ounces" },
          metric: { amount: 680, unitShort: "g", unitLong: "grams" }
        }
      }
    ],
    summary: "Bird's Nest Marinara features delicate pasta nests topped with savory Italian sausage, fresh mozzarella balls, and aromatic basil in a rich marinara sauce. A unique and impressive presentation!",
    aggregateLikes: 1
  },

  // Recipe 5: Baked Ziti Or Rigatoni
  {
    id: 633884,
    title: "Baked Ziti Or Rigatoni",
    image: "https://img.spoonacular.com/recipes/633884-312x231.jpg",
    imageType: "jpg",
    servings: 8,
    readyInMinutes: 60,
    cookingMinutes: 40,
    preparationMinutes: 20,
    license: "CC BY-SA 3.0",
    sourceName: "Spoonacular",
    sourceUrl: "https://spoonacular.com/baked-ziti-or-rigatoni-633884",
    spoonacularSourceUrl: "https://spoonacular.com/baked-ziti-or-rigatoni-633884",
    healthScore: 25,
    spoonacularScore: 69,
    pricePerServing: 165.5,
    analyzedInstructions: [],
    cheap: false,
    creditsText: "Spoonacular",
    cuisines: ["Italian"],
    dairyFree: false,
    diets: ["vegetarian"],
    gaps: "no",
    glutenFree: false,
    instructions: "Cook pasta and drain. Mix ricotta with egg and parmesan. Layer half the pasta, all the ricotta mixture, then remaining pasta in a baking dish. Top with spaghetti sauce and mozzarella. Bake at 350°F for 35-40 minutes.",
    ketogenic: false,
    lowFodmap: false,
    occasions: [],
    sustainable: false,
    vegan: false,
    vegetarian: true,
    veryHealthy: false,
    veryPopular: false,
    whole30: false,
    weightWatcherSmartPoints: 13,
    dishTypes: ["lunch", "main course", "main dish", "dinner"],
    extendedIngredients: [
      {
        id: 1123,
        aisle: "Milk, Eggs, Other Dairy",
        image: "https://img.spoonacular.com/ingredients_100x100/egg.png",
        consistency: "SOLID",
        name: "egg",
        nameClean: "egg",
        original: "1 egg, slightly beaten",
        originalName: "egg, slightly beaten",
        amount: 1,
        unit: "",
        meta: ["slightly beaten"],
        measures: {
          us: { amount: 1, unitShort: "", unitLong: "" },
          metric: { amount: 1, unitShort: "", unitLong: "" }
        }
      },
      {
        id: 1032,
        aisle: "Cheese",
        image: "https://img.spoonacular.com/ingredients_100x100/parmesan.jpg",
        consistency: "SOLID",
        name: "parmesan cheese",
        nameClean: "parmesan cheese",
        original: "1/4 cup grated parmesan cheese",
        originalName: "grated parmesan cheese",
        amount: 0.25,
        unit: "cup",
        meta: ["grated"],
        measures: {
          us: { amount: 0.25, unitShort: "cup", unitLong: "cups" },
          metric: { amount: 25, unitShort: "g", unitLong: "grams" }
        }
      },
      {
        id: 1036,
        aisle: "Cheese",
        image: "https://img.spoonacular.com/ingredients_100x100/ricotta.png",
        consistency: "SOLID",
        name: "ricotta",
        nameClean: "ricotta",
        original: "1 (15 oz.) container ricotta",
        originalName: "ricotta",
        amount: 15,
        unit: "oz",
        meta: [],
        measures: {
          us: { amount: 15, unitShort: "oz", unitLong: "ounces" },
          metric: { amount: 425, unitShort: "g", unitLong: "grams" }
        }
      },
      {
        id: 1001026,
        aisle: "Cheese",
        image: "https://img.spoonacular.com/ingredients_100x100/shredded-cheese-white.jpg",
        consistency: "SOLID",
        name: "mozzarella",
        nameClean: "mozzarella",
        original: "8 ounces shredded mozzarella",
        originalName: "shredded mozzarella",
        amount: 8,
        unit: "ounces",
        meta: ["shredded"],
        measures: {
          us: { amount: 8, unitShort: "oz", unitLong: "ounces" },
          metric: { amount: 227, unitShort: "g", unitLong: "grams" }
        }
      },
      {
        id: 11520421,
        aisle: "Pasta and Rice",
        image: "https://img.spoonacular.com/ingredients_100x100/ziti.jpg",
        consistency: "SOLID",
        name: "ziti",
        nameClean: "ziti",
        original: "1 pound ziti, cooked",
        originalName: "ziti, cooked",
        amount: 1,
        unit: "pound",
        meta: ["cooked"],
        measures: {
          us: { amount: 1, unitShort: "lb", unitLong: "pound" },
          metric: { amount: 454, unitShort: "g", unitLong: "grams" }
        }
      },
      {
        id: 10011549,
        aisle: "Pasta and Rice",
        image: "https://img.spoonacular.com/ingredients_100x100/tomato-sauce-or-pasta-sauce.jpg",
        consistency: "LIQUID",
        name: "spaghetti sauce",
        nameClean: "spaghetti sauce",
        original: "3 1/2 cups spaghetti sauce",
        originalName: "spaghetti sauce",
        amount: 3.5,
        unit: "cups",
        meta: [],
        measures: {
          us: { amount: 3.5, unitShort: "cups", unitLong: "cups" },
          metric: { amount: 858, unitShort: "ml", unitLong: "milliliters" }
        }
      }
    ],
    summary: "Baked Ziti or Rigatoni is a classic Italian-American casserole with layers of pasta, creamy ricotta, and melted cheese. Perfect comfort food for any occasion.",
    aggregateLikes: 3
  }
];

// ========================================
// MOCK INGREDIENTI - GET /food/ingredients/search
// ========================================
// Ingredienti estratti dalle ricette
export const mockIngredients: Ingredient[] = [
  // Da Recipe 1: Easy Tomato Basil Chicken
  { id: 10211821, name: "bell pepper", image: "bell-pepper-orange.png" },
  { id: 5064, name: "chicken breast strips", image: "cooked-chicken-breast.png" },
  { id: 2044, name: "basil", image: "fresh-basil.jpg" },
  { id: 6233, name: "tomato basil sauce", image: "tomato-sauce-or-pasta-sauce.jpg" },
  { id: 11320420, name: "rotini pasta", image: "fusilli.jpg" },
  
  // Da Recipe 2: Easy Gift Lasagna
  { id: 1032, name: "parmesan cheese", image: "parmesan.jpg" },
  { id: 1036, name: "ricotta cheese", image: "ricotta.png" },
  { id: 1001026, name: "mozzarella cheese", image: "shredded-cheese-white.jpg" },
  { id: 10620420, name: "lasagna noodles", image: "lasagna-noodles.jpg" },
  { id: 10011549, name: "spaghetti sauce", image: "tomato-sauce-or-pasta-sauce.jpg" },
  
  // Da Recipe 3: Baked Ziti
  { id: 1026, name: "mozzarella cheese", image: "mozzarella.png" },
  { id: 1033, name: "parmesan cheese", image: "parmesan.jpg" },
  { id: 20420, name: "ziti", image: "fusilli.jpg" },
  
  // Da Recipe 4: Bird's Nest Marinara
  { id: 7036, name: "italian sausage", image: "raw-pork-sausage.png" },
  { id: 93790, name: "marinated mozzarella balls", image: "mozzarella-balls.jpg" },
  { id: 11720420, name: "capellini nest", image: "angelhair.jpg" },
  { id: 10111549, name: "marinara sauce", image: "tomato-sauce-or-pasta-sauce.jpg" },
  
  // Da Recipe 5: Baked Ziti Or Rigatoni
  { id: 1123, name: "egg", image: "egg.png" },
  { id: 11520421, name: "ziti", image: "ziti.jpg" },
  
  // Altri ingredienti comuni (simili all'esempio fornito)
  { id: 15025, name: "eel", image: "raw-eels.png" },
  { id: 17166, name: "elk", image: "beef-cubes-raw.png" },
  { id: 1018, name: "edam cheese", image: "Edam-cheese.jpg" },
  { id: 1057, name: "eggnog", image: "eggnog.png" },
  { id: 11213, name: "escarole", image: "escarole.jpg" },
  { id: 99296, name: "edamame", image: "edamame.png" },
  { id: 98908, name: "epazote", image: "epazote.jpg" },
  { id: 14037, name: "alcohol", image: "rum-dark.jpg" },
  { id: 1125, name: "egg yolk", image: "egg-yolk.jpg" }
];

// ========================================
// EXPORT per compatibilità con il codice esistente
// ========================================
// Questi export mantengono la compatibilità con utils.ts

// mockRecipesByIngredients non serve più perché viene generato dinamicamente in utils.ts
// ma lo esportiamo comunque per retrocompatibilità
export const mockRecipesByIngredients = mockRecipes;

// mockRecipeDetails è un alias di mockRecipes
export const mockRecipeDetails = mockRecipes;
