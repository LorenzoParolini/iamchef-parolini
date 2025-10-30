// Mock data based on Spoonacular API structure
// https://spoonacular.com/food-api/docs

// import { useState } from "react";

export interface Recipe {
  id: number;
  title: string;
  image: string;
  imageType: string;
  readyInMinutes: number;
  servings: number;
  pricePerServing: number;
  healthScore: number;
  spoonacularScore: number;
  vegetarian: boolean;
  vegan: boolean;
  glutenFree: boolean;
  dairyFree: boolean;
  veryHealthy: boolean;
  cheap: boolean;
  veryPopular: boolean;
  sustainable: boolean;
  weightWatcherSmartPoints: number;
  gaps: string;
  lowFodmap: boolean;
  aggregateLikes: number;
  creditsText: string;
  sourceName: string;
  sourceUrl: string;
  extendedIngredients: ExtendedIngredient[];
  cuisines: string[];
  dishTypes: string[];
  diets: string[];
  occasions: string[];
  instructions: string;
  analyzedInstructions: AnalyzedInstruction[];
  nutrition?: Nutrition;
  summary: string;
}

export interface ExtendedIngredient {
  id: number;
  aisle: string;
  image: string;
  consistency: string;
  name: string;
  nameClean: string;
  original: string;
  originalName: string;
  amount: number;
  unit: string;
  meta: string[];
  measures: {
    us: Measure;
    metric: Measure;
  };
}

export interface Measure {
  amount: number;
  unitShort: string;
  unitLong: string;
}

export interface AnalyzedInstruction {
  name: string;
  steps: Step[];
}

export interface Step {
  number: number;
  step: string;
  ingredients: StepIngredient[];
  equipment: StepEquipment[];
  length?: {
    number: number;
    unit: string;
  };
}

export interface StepIngredient {
  id: number;
  name: string;
  localizedName: string;
  image: string;
}

export interface StepEquipment {
  id: number;
  name: string;
  localizedName: string;
  image: string;
}

export interface Nutrition {
  nutrients: Nutrient[];
  properties: NutritionProperty[];
  caloricBreakdown: CaloricBreakdown;
  weightPerServing: WeightPerServing;
}

export interface Nutrient {
  name: string;
  amount: number;
  unit: string;
  percentOfDailyNeeds: number;
}

export interface NutritionProperty {
  name: string;
  amount: number;
  unit: string;
}

export interface CaloricBreakdown {
  percentProtein: number;
  percentFat: number;
  percentCarbs: number;
}

export interface WeightPerServing {
  amount: number;
  unit: string;
}

export interface RecipeSearchResponse {
  results: Recipe[];
  offset: number;
  number: number;
  totalResults: number;
}

export interface IngredientSearchResponse {
  results: Ingredient[];
  offset: number;
  number: number;
  totalResults: number;
}

export interface Ingredient {
  id: number;
  name: string;
  image: string;
}

// Mock data
export const mockRecipes: Recipe[] = [
  {
    id: 1,
    title: "Spaghetti alla Carbonara",
    image: "https://images.unsplash.com/photo-1612874742237-6526221588e3",
    imageType: "jpg",
    readyInMinutes: 20,
    servings: 2,
    pricePerServing: 250,
    healthScore: 45,
    spoonacularScore: 85,
    vegetarian: false,
    vegan: false,
    glutenFree: false,
    dairyFree: false,
    veryHealthy: false,
    cheap: false,
    veryPopular: true,
    sustainable: false,
    weightWatcherSmartPoints: 15,
    gaps: "no",
    lowFodmap: false,
    aggregateLikes: 1250,
    creditsText: "Chef Lorenzo",
    sourceName: "I am Chef",
    sourceUrl: "https://example.com",
    cuisines: ["Italian"],
    dishTypes: ["lunch", "dinner", "main course"],
    diets: [],
    occasions: [],
    summary: "Un classico della cucina romana, cremoso e saporito. Perfetto per una cena veloce ma ricca di gusto.",
    instructions: "Taglia il guanciale a listarelle e fallo rosolare in una padella senza aggiungere altri grassi, fino a quando diventa croccante. Togli il guanciale e tieni da parte il grasso.",
    extendedIngredients: [
      {
        id: 1,
        aisle: "Pasta",
        image: "spaghetti.jpg",
        consistency: "solid",
        name: "spaghetti",
        nameClean: "spaghetti",
        original: "400g spaghetti",
        originalName: "spaghetti",
        amount: 400,
        unit: "g",
        meta: [],
        measures: {
          us: { amount: 14.1, unitShort: "oz", unitLong: "ounces" },
          metric: { amount: 400, unitShort: "g", unitLong: "grams" }
        }
      },
      {
        id: 2,
        aisle: "Meat",
        image: "guanciale.jpg",
        consistency: "solid",
        name: "guanciale",
        nameClean: "guanciale",
        original: "150g guanciale",
        originalName: "guanciale",
        amount: 150,
        unit: "g",
        meta: [],
        measures: {
          us: { amount: 5.3, unitShort: "oz", unitLong: "ounces" },
          metric: { amount: 150, unitShort: "g", unitLong: "grams" }
        }
      },
      {
        id: 3,
        aisle: "Dairy",
        image: "egg.jpg",
        consistency: "solid",
        name: "uova",
        nameClean: "eggs",
        original: "4 uova",
        originalName: "uova",
        amount: 4,
        unit: "",
        meta: [],
        measures: {
          us: { amount: 4, unitShort: "", unitLong: "" },
          metric: { amount: 4, unitShort: "", unitLong: "" }
        }
      },
      {
        id: 4,
        aisle: "Cheese",
        image: "pecorino.jpg",
        consistency: "solid",
        name: "pecorino romano",
        nameClean: "pecorino romano",
        original: "100g pecorino romano grattugiato",
        originalName: "pecorino romano grattugiato",
        amount: 100,
        unit: "g",
        meta: ["grattugiato"],
        measures: {
          us: { amount: 3.5, unitShort: "oz", unitLong: "ounces" },
          metric: { amount: 100, unitShort: "g", unitLong: "grams" }
        }
      }
    ],
    analyzedInstructions: [
      {
        name: "Preparazione",
        steps: [
          {
            number: 1,
            step: "Taglia il guanciale a listarelle e fallo rosolare in una padella senza aggiungere altri grassi, fino a quando diventa croccante. Togli il guanciale e tieni da parte il grasso.",
            ingredients: [
              {
                id: 2,
                name: "guanciale",
                localizedName: "guanciale",
                image: "guanciale.jpg"
              }
            ],
            equipment: [
              {
                id: 1,
                name: "padella",
                localizedName: "frying pan",
                image: "pan.jpg"
              }
            ]
          },
          {
            number: 2,
            step: "In una ciotola, sbatti i tuorli con il pecorino e abbondante pepe nero macinato fresco fino ad ottenere una crema densa.",
            ingredients: [
              {
                id: 3,
                name: "uova",
                localizedName: "eggs",
                image: "egg.jpg"
              },
              {
                id: 4,
                name: "pecorino",
                localizedName: "pecorino",
                image: "pecorino.jpg"
              }
            ],
            equipment: [
              {
                id: 2,
                name: "ciotola",
                localizedName: "bowl",
                image: "bowl.jpg"
              }
            ]
          },
          {
            number: 3,
            step: "Cuoci gli spaghetti in abbondante acqua salata. Scolali al dente e versali nella padella con il grasso del guanciale.",
            ingredients: [
              {
                id: 1,
                name: "spaghetti",
                localizedName: "spaghetti",
                image: "spaghetti.jpg"
              }
            ],
            equipment: [
              {
                id: 1,
                name: "padella",
                localizedName: "frying pan",
                image: "pan.jpg"
              }
            ],
            length: {
              number: 10,
              unit: "minutes"
            }
          },
          {
            number: 4,
            step: "A fuoco spento, aggiungi la crema di uova e pecorino, un po' di acqua di cottura se necessario, e manteca energicamente. Aggiungi il guanciale croccante e servi subito.",
            ingredients: [],
            equipment: []
          }
        ]
      }
    ],
    nutrition: {
      nutrients: [
        {
          name: "Calories",
          amount: 650,
          unit: "kcal",
          percentOfDailyNeeds: 32.5
        },
        {
          name: "Fat",
          amount: 25,
          unit: "g",
          percentOfDailyNeeds: 38.5
        },
        {
          name: "Carbohydrates",
          amount: 75,
          unit: "g",
          percentOfDailyNeeds: 25
        },
        {
          name: "Protein",
          amount: 28,
          unit: "g",
          percentOfDailyNeeds: 56
        }
      ],
      properties: [],
      caloricBreakdown: {
        percentProtein: 17,
        percentFat: 35,
        percentCarbs: 48
      },
      weightPerServing: {
        amount: 350,
        unit: "g"
      }
    }
  },
  {
    id: 2,
    title: "Risotto ai Funghi",
    image: "https://images.unsplash.com/photo-1476124369491-c4291e8f0e1b",
    imageType: "jpg",
    readyInMinutes: 30,
    servings: 4,
    pricePerServing: 350,
    healthScore: 55,
    spoonacularScore: 80,
    vegetarian: true,
    vegan: false,
    glutenFree: true,
    dairyFree: false,
    veryHealthy: true,
    cheap: false,
    veryPopular: true,
    sustainable: true,
    weightWatcherSmartPoints: 12,
    gaps: "no",
    lowFodmap: false,
    aggregateLikes: 890,
    creditsText: "Chef Marco",
    sourceName: "I am Chef",
    sourceUrl: "https://example.com",
    cuisines: ["Italian"],
    dishTypes: ["lunch", "dinner", "main course"],
    diets: ["vegetarian"],
    occasions: [],
    summary: "Un cremoso risotto con funghi porcini, un classico della cucina italiana. Perfetto per una cena autunnale.",
    instructions: "Soffriggi lo scalogno tritato nel burro, aggiungi i funghi e falli rosolare. Aggiungi il riso e tostalo, poi inizia ad aggiungere il brodo poco alla volta.",
    extendedIngredients: [
      {
        id: 11,
        aisle: "Rice",
        image: "rice.jpg",
        consistency: "solid",
        name: "riso carnaroli",
        nameClean: "carnaroli rice",
        original: "320g riso carnaroli",
        originalName: "riso carnaroli",
        amount: 320,
        unit: "g",
        meta: [],
        measures: {
          us: { amount: 11.3, unitShort: "oz", unitLong: "ounces" },
          metric: { amount: 320, unitShort: "g", unitLong: "grams" }
        }
      },
      {
        id: 12,
        aisle: "Produce",
        image: "mushrooms.jpg",
        consistency: "solid",
        name: "funghi porcini",
        nameClean: "porcini mushrooms",
        original: "300g funghi porcini",
        originalName: "funghi porcini",
        amount: 300,
        unit: "g",
        meta: [],
        measures: {
          us: { amount: 10.6, unitShort: "oz", unitLong: "ounces" },
          metric: { amount: 300, unitShort: "g", unitLong: "grams" }
        }
      },
      {
        id: 13,
        aisle: "Produce",
        image: "onion.jpg",
        consistency: "solid",
        name: "scalogno",
        nameClean: "shallot",
        original: "1 scalogno",
        originalName: "scalogno",
        amount: 1,
        unit: "",
        meta: [],
        measures: {
          us: { amount: 1, unitShort: "", unitLong: "" },
          metric: { amount: 1, unitShort: "", unitLong: "" }
        }
      },
      {
        id: 14,
        aisle: "Dairy",
        image: "butter.jpg",
        consistency: "solid",
        name: "burro",
        nameClean: "butter",
        original: "50g burro",
        originalName: "burro",
        amount: 50,
        unit: "g",
        meta: [],
        measures: {
          us: { amount: 1.8, unitShort: "oz", unitLong: "ounces" },
          metric: { amount: 50, unitShort: "g", unitLong: "grams" }
        }
      },
      {
        id: 15,
        aisle: "Canned",
        image: "broth.jpg",
        consistency: "liquid",
        name: "brodo vegetale",
        nameClean: "vegetable broth",
        original: "1L brodo vegetale",
        originalName: "brodo vegetale",
        amount: 1,
        unit: "L",
        meta: [],
        measures: {
          us: { amount: 4.2, unitShort: "cups", unitLong: "cups" },
          metric: { amount: 1, unitShort: "L", unitLong: "liters" }
        }
      }
    ],
    analyzedInstructions: [
      {
        name: "Preparazione",
        steps: [
          {
            number: 1,
            step: "Pulisci i funghi e tagliali a fette. Trita finemente lo scalogno.",
            ingredients: [
              { id: 12, name: "funghi", localizedName: "mushrooms", image: "mushrooms.jpg" },
              { id: 13, name: "scalogno", localizedName: "shallot", image: "onion.jpg" }
            ],
            equipment: [
              { id: 3, name: "coltello", localizedName: "knife", image: "knife.jpg" }
            ]
          },
          {
            number: 2,
            step: "In una padella larga, sciogli il burro e rosola lo scalogno fino a doratura. Aggiungi i funghi e cuoci per 5 minuti.",
            ingredients: [
              { id: 14, name: "burro", localizedName: "butter", image: "butter.jpg" }
            ],
            equipment: [
              { id: 1, name: "padella", localizedName: "pan", image: "pan.jpg" }
            ],
            length: { number: 5, unit: "minutes" }
          },
          {
            number: 3,
            step: "Aggiungi il riso e tostalo per 2 minuti mescolando. Inizia ad aggiungere il brodo un mestolo alla volta.",
            ingredients: [
              { id: 11, name: "riso", localizedName: "rice", image: "rice.jpg" }
            ],
            equipment: [],
            length: { number: 18, unit: "minutes" }
          },
          {
            number: 4,
            step: "Continua ad aggiungere brodo e mescolare fino a cottura del riso (circa 18 minuti). Manteca con burro e parmigiano.",
            ingredients: [],
            equipment: []
          }
        ]
      }
    ],
    nutrition: {
      nutrients: [
        { name: "Calories", amount: 420, unit: "kcal", percentOfDailyNeeds: 21 },
        { name: "Fat", amount: 12, unit: "g", percentOfDailyNeeds: 18 },
        { name: "Carbohydrates", amount: 65, unit: "g", percentOfDailyNeeds: 22 },
        { name: "Protein", amount: 10, unit: "g", percentOfDailyNeeds: 20 }
      ],
      properties: [],
      caloricBreakdown: { percentProtein: 10, percentFat: 26, percentCarbs: 64 },
      weightPerServing: { amount: 280, unit: "g" }
    }
  },
  {
    id: 3,
    title: "Insalata Caprese",
    image: "https://images.unsplash.com/photo-1608897013039-887f21d8c804",
    imageType: "jpg",
    readyInMinutes: 10,
    servings: 2,
    pricePerServing: 180,
    healthScore: 75,
    spoonacularScore: 90,
    vegetarian: true,
    vegan: false,
    glutenFree: true,
    dairyFree: false,
    veryHealthy: true,
    cheap: true,
    veryPopular: true,
    sustainable: true,
    weightWatcherSmartPoints: 6,
    gaps: "no",
    lowFodmap: false,
    aggregateLikes: 2100,
    creditsText: "Chef Anna",
    sourceName: "I am Chef",
    sourceUrl: "https://example.com",
    cuisines: ["Italian"],
    dishTypes: ["antipasti", "salad"],
    diets: ["vegetarian"],
    occasions: ["summer"],
    summary: "Un piatto semplice e fresco con pomodori, mozzarella e basilico. L'essenza della cucina italiana.",
    instructions: "Taglia pomodori e mozzarella a fette. Alterna su un piatto, aggiungi basilico, olio e sale.",
    extendedIngredients: [
      {
        id: 6,
        aisle: "Produce",
        image: "tomato.jpg",
        consistency: "solid",
        name: "pomodoro",
        nameClean: "tomato",
        original: "4 pomodori maturi",
        originalName: "pomodori maturi",
        amount: 4,
        unit: "",
        meta: ["maturi"],
        measures: {
          us: { amount: 4, unitShort: "", unitLong: "" },
          metric: { amount: 4, unitShort: "", unitLong: "" }
        }
      },
      {
        id: 16,
        aisle: "Dairy",
        image: "mozzarella.jpg",
        consistency: "solid",
        name: "mozzarella di bufala",
        nameClean: "buffalo mozzarella",
        original: "250g mozzarella di bufala",
        originalName: "mozzarella di bufala",
        amount: 250,
        unit: "g",
        meta: [],
        measures: {
          us: { amount: 8.8, unitShort: "oz", unitLong: "ounces" },
          metric: { amount: 250, unitShort: "g", unitLong: "grams" }
        }
      },
      {
        id: 8,
        aisle: "Produce",
        image: "basil.jpg",
        consistency: "solid",
        name: "basilico",
        nameClean: "basil",
        original: "foglie di basilico fresco",
        originalName: "basilico fresco",
        amount: 10,
        unit: "foglie",
        meta: ["fresco"],
        measures: {
          us: { amount: 10, unitShort: "leaves", unitLong: "leaves" },
          metric: { amount: 10, unitShort: "foglie", unitLong: "foglie" }
        }
      },
      {
        id: 9,
        aisle: "Oil",
        image: "olive-oil.jpg",
        consistency: "liquid",
        name: "olio d'oliva",
        nameClean: "olive oil",
        original: "olio extravergine d'oliva",
        originalName: "olio extravergine d'oliva",
        amount: 3,
        unit: "cucchiai",
        meta: ["extravergine"],
        measures: {
          us: { amount: 3, unitShort: "tbsp", unitLong: "tablespoons" },
          metric: { amount: 45, unitShort: "ml", unitLong: "milliliters" }
        }
      }
    ],
    analyzedInstructions: [
      {
        name: "Preparazione",
        steps: [
          {
            number: 1,
            step: "Lava i pomodori e tagliali a fette spesse circa 1 cm.",
            ingredients: [
              { id: 6, name: "pomodoro", localizedName: "tomato", image: "tomato.jpg" }
            ],
            equipment: [
              { id: 3, name: "coltello", localizedName: "knife", image: "knife.jpg" }
            ]
          },
          {
            number: 2,
            step: "Scola la mozzarella e tagliatela a fette della stessa dimensione dei pomodori.",
            ingredients: [
              { id: 16, name: "mozzarella", localizedName: "mozzarella", image: "mozzarella.jpg" }
            ],
            equipment: []
          },
          {
            number: 3,
            step: "Su un piatto da portata, alterna fette di pomodoro e mozzarella. Inserisci foglie di basilico tra le fette.",
            ingredients: [
              { id: 8, name: "basilico", localizedName: "basil", image: "basil.jpg" }
            ],
            equipment: []
          },
          {
            number: 4,
            step: "Condisci con olio extravergine d'oliva, sale e pepe nero. Lascia riposare 5 minuti prima di servire.",
            ingredients: [
              { id: 9, name: "olio", localizedName: "oil", image: "olive-oil.jpg" }
            ],
            equipment: []
          }
        ]
      }
    ],
    nutrition: {
      nutrients: [
        { name: "Calories", amount: 320, unit: "kcal", percentOfDailyNeeds: 16 },
        { name: "Fat", amount: 22, unit: "g", percentOfDailyNeeds: 34 },
        { name: "Carbohydrates", amount: 8, unit: "g", percentOfDailyNeeds: 3 },
        { name: "Protein", amount: 18, unit: "g", percentOfDailyNeeds: 36 }
      ],
      properties: [],
      caloricBreakdown: { percentProtein: 23, percentFat: 62, percentCarbs: 15 },
      weightPerServing: { amount: 200, unit: "g" }
    }
  },
  {
    id: 4,
    title: "Pizza Margherita",
    image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002",
    imageType: "jpg",
    readyInMinutes: 120,
    servings: 4,
    pricePerServing: 150,
    healthScore: 50,
    spoonacularScore: 95,
    vegetarian: true,
    vegan: false,
    glutenFree: false,
    dairyFree: false,
    veryHealthy: false,
    cheap: true,
    veryPopular: true,
    sustainable: false,
    weightWatcherSmartPoints: 18,
    gaps: "no",
    lowFodmap: false,
    aggregateLikes: 3500,
    creditsText: "Chef Giuseppe",
    sourceName: "I am Chef",
    sourceUrl: "https://example.com",
    cuisines: ["Italian"],
    dishTypes: ["dinner", "main course"],
    diets: ["vegetarian"],
    occasions: [],
    summary: "La regina delle pizze, con pomodoro, mozzarella e basilico. Semplice ma indimenticabile.",
    instructions: "Prepara l'impasto e lascialo lievitare. Stendi la pizza, aggiungi pomodoro e mozzarella, inforna a 250°C.",
    extendedIngredients: [
      {
        id: 17,
        aisle: "Baking",
        image: "flour.jpg",
        consistency: "solid",
        name: "farina",
        nameClean: "flour",
        original: "500g farina 00",
        originalName: "farina 00",
        amount: 500,
        unit: "g",
        meta: [],
        measures: {
          us: { amount: 17.6, unitShort: "oz", unitLong: "ounces" },
          metric: { amount: 500, unitShort: "g", unitLong: "grams" }
        }
      },
      {
        id: 18,
        aisle: "Canned",
        image: "tomato-sauce.jpg",
        consistency: "liquid",
        name: "passata di pomodoro",
        nameClean: "tomato sauce",
        original: "300g passata di pomodoro",
        originalName: "passata di pomodoro",
        amount: 300,
        unit: "g",
        meta: [],
        measures: {
          us: { amount: 10.6, unitShort: "oz", unitLong: "ounces" },
          metric: { amount: 300, unitShort: "g", unitLong: "grams" }
        }
      },
      {
        id: 19,
        aisle: "Dairy",
        image: "mozzarella.jpg",
        consistency: "solid",
        name: "mozzarella",
        nameClean: "mozzarella",
        original: "250g mozzarella",
        originalName: "mozzarella",
        amount: 250,
        unit: "g",
        meta: [],
        measures: {
          us: { amount: 8.8, unitShort: "oz", unitLong: "ounces" },
          metric: { amount: 250, unitShort: "g", unitLong: "grams" }
        }
      },
      {
        id: 8,
        aisle: "Produce",
        image: "basil.jpg",
        consistency: "solid",
        name: "basilico",
        nameClean: "basil",
        original: "basilico fresco",
        originalName: "basilico fresco",
        amount: 1,
        unit: "mazzetto",
        meta: ["fresco"],
        measures: {
          us: { amount: 1, unitShort: "bunch", unitLong: "bunch" },
          metric: { amount: 1, unitShort: "mazzetto", unitLong: "mazzetto" }
        }
      }
    ],
    analyzedInstructions: [
      {
        name: "Preparazione",
        steps: [
          {
            number: 1,
            step: "Prepara l'impasto: mescola farina, acqua, lievito e sale. Impasta fino a ottenere un composto liscio.",
            ingredients: [
              { id: 17, name: "farina", localizedName: "flour", image: "flour.jpg" }
            ],
            equipment: [
              { id: 2, name: "ciotola", localizedName: "bowl", image: "bowl.jpg" }
            ],
            length: { number: 10, unit: "minutes" }
          },
          {
            number: 2,
            step: "Copri e lascia lievitare per almeno 2 ore in luogo tiepido.",
            ingredients: [],
            equipment: [],
            length: { number: 120, unit: "minutes" }
          },
          {
            number: 3,
            step: "Stendi l'impasto in forma circolare, aggiungi la passata di pomodoro e la mozzarella a pezzi.",
            ingredients: [
              { id: 18, name: "pomodoro", localizedName: "tomato sauce", image: "tomato-sauce.jpg" },
              { id: 19, name: "mozzarella", localizedName: "mozzarella", image: "mozzarella.jpg" }
            ],
            equipment: []
          },
          {
            number: 4,
            step: "Inforna a 250°C per 10-12 minuti. Aggiungi basilico fresco appena sfornata.",
            ingredients: [
              { id: 8, name: "basilico", localizedName: "basil", image: "basil.jpg" }
            ],
            equipment: [
              { id: 4, name: "forno", localizedName: "oven", image: "oven.jpg" }
            ],
            length: { number: 12, unit: "minutes" }
          }
        ]
      }
    ],
    nutrition: {
      nutrients: [
        { name: "Calories", amount: 580, unit: "kcal", percentOfDailyNeeds: 29 },
        { name: "Fat", amount: 15, unit: "g", percentOfDailyNeeds: 23 },
        { name: "Carbohydrates", amount: 85, unit: "g", percentOfDailyNeeds: 28 },
        { name: "Protein", amount: 22, unit: "g", percentOfDailyNeeds: 44 }
      ],
      properties: [],
      caloricBreakdown: { percentProtein: 15, percentFat: 23, percentCarbs: 62 },
      weightPerServing: { amount: 320, unit: "g" }
    }
  },
  {
    id: 5,
    title: "Grilled Chicken Breast with Garlic",
    image: "https://images.unsplash.com/photo-1598103442097-8b74394b95c6",
    imageType: "jpg",
    readyInMinutes: 25,
    servings: 4,
    pricePerServing: 220,
    healthScore: 72,
    spoonacularScore: 88,
    vegetarian: false,
    vegan: false,
    glutenFree: true,
    dairyFree: true,
    veryHealthy: true,
    cheap: false,
    veryPopular: true,
    sustainable: false,
    weightWatcherSmartPoints: 3,
    gaps: "no",
    lowFodmap: false,
    aggregateLikes: 1890,
    creditsText: "Healthy Kitchen",
    sourceName: "I am Chef",
    sourceUrl: "https://example.com",
    cuisines: [],
    dishTypes: ["lunch", "dinner", "main course"],
    diets: [],
    occasions: [],
    summary: "Juicy grilled chicken breast marinated with garlic and herbs. High in protein and perfect for a healthy meal.",
    instructions: "Season chicken breasts with garlic, salt and pepper. Grill for 6-7 minutes per side until cooked through.",
    extendedIngredients: [
      {
        id: 1015062,
        aisle: "Meat",
        image: "chicken-breasts.png",
        consistency: "solid",
        name: "chicken breast",
        nameClean: "chicken breast",
        original: "4 chicken breasts",
        originalName: "chicken breasts",
        amount: 4,
        unit: "",
        meta: [],
        measures: {
          us: { amount: 4, unitShort: "", unitLong: "" },
          metric: { amount: 4, unitShort: "", unitLong: "" }
        }
      },
      {
        id: 11215,
        aisle: "Produce",
        image: "garlic.jpg",
        consistency: "solid",
        name: "garlic",
        nameClean: "garlic",
        original: "4 cloves garlic, minced",
        originalName: "garlic, minced",
        amount: 4,
        unit: "cloves",
        meta: ["minced"],
        measures: {
          us: { amount: 4, unitShort: "cloves", unitLong: "cloves" },
          metric: { amount: 4, unitShort: "cloves", unitLong: "cloves" }
        }
      },
      {
        id: 4053,
        aisle: "Oil",
        image: "olive-oil.jpg",
        consistency: "liquid",
        name: "olive oil",
        nameClean: "olive oil",
        original: "2 tbsp olive oil",
        originalName: "olive oil",
        amount: 2,
        unit: "tbsp",
        meta: [],
        measures: {
          us: { amount: 2, unitShort: "tbsp", unitLong: "tablespoons" },
          metric: { amount: 30, unitShort: "ml", unitLong: "milliliters" }
        }
      },
      {
        id: 2047,
        aisle: "Spices",
        image: "salt.jpg",
        consistency: "solid",
        name: "salt",
        nameClean: "salt",
        original: "salt to taste",
        originalName: "salt",
        amount: 1,
        unit: "tsp",
        meta: [],
        measures: {
          us: { amount: 1, unitShort: "tsp", unitLong: "teaspoon" },
          metric: { amount: 1, unitShort: "tsp", unitLong: "teaspoon" }
        }
      },
      {
        id: 1002030,
        aisle: "Spices",
        image: "pepper.jpg",
        consistency: "solid",
        name: "pepper",
        nameClean: "pepper",
        original: "pepper to taste",
        originalName: "pepper",
        amount: 0.5,
        unit: "tsp",
        meta: [],
        measures: {
          us: { amount: 0.5, unitShort: "tsp", unitLong: "teaspoon" },
          metric: { amount: 0.5, unitShort: "tsp", unitLong: "teaspoon" }
        }
      }
    ],
    analyzedInstructions: [
      {
        name: "",
        steps: [
          {
            number: 1,
            step: "Preheat grill to medium-high heat. In a small bowl, mix minced garlic with olive oil, salt and pepper.",
            ingredients: [
              { id: 11215, name: "garlic", localizedName: "garlic", image: "garlic.jpg" },
              { id: 4053, name: "olive oil", localizedName: "olive oil", image: "olive-oil.jpg" }
            ],
            equipment: [
              { id: 404706, name: "grill", localizedName: "grill", image: "grill.jpg" }
            ]
          },
          {
            number: 2,
            step: "Brush chicken breasts with the garlic oil mixture on both sides.",
            ingredients: [
              { id: 1015062, name: "chicken breast", localizedName: "chicken breast", image: "chicken-breasts.png" }
            ],
            equipment: []
          },
          {
            number: 3,
            step: "Place chicken on grill and cook for 6-7 minutes per side until internal temperature reaches 165°F.",
            ingredients: [],
            equipment: [
              { id: 404706, name: "grill", localizedName: "grill", image: "grill.jpg" }
            ],
            length: { number: 14, unit: "minutes" }
          },
          {
            number: 4,
            step: "Remove from grill, let rest for 5 minutes before serving.",
            ingredients: [],
            equipment: [],
            length: { number: 5, unit: "minutes" }
          }
        ]
      }
    ],
    nutrition: {
      nutrients: [
        { name: "Calories", amount: 195, unit: "kcal", percentOfDailyNeeds: 10 },
        { name: "Fat", amount: 8, unit: "g", percentOfDailyNeeds: 12 },
        { name: "Carbohydrates", amount: 2, unit: "g", percentOfDailyNeeds: 1 },
        { name: "Protein", amount: 28, unit: "g", percentOfDailyNeeds: 56 }
      ],
      properties: [],
      caloricBreakdown: { percentProtein: 58, percentFat: 37, percentCarbs: 5 },
      weightPerServing: { amount: 150, unit: "g" }
    }
  },
  {
    id: 6,
    title: "Blueberry Pancakes",
    image: "https://images.unsplash.com/photo-1528207776546-365bb710ee93",
    imageType: "jpg",
    readyInMinutes: 20,
    servings: 4,
    pricePerServing: 125,
    healthScore: 18,
    spoonacularScore: 65,
    vegetarian: true,
    vegan: false,
    glutenFree: false,
    dairyFree: false,
    veryHealthy: false,
    cheap: true,
    veryPopular: true,
    sustainable: false,
    weightWatcherSmartPoints: 7,
    gaps: "no",
    lowFodmap: false,
    aggregateLikes: 2340,
    creditsText: "Breakfast Club",
    sourceName: "I am Chef",
    sourceUrl: "https://example.com",
    cuisines: ["American"],
    dishTypes: ["morning meal", "brunch", "breakfast"],
    diets: ["vegetarian"],
    occasions: [],
    summary: "Fluffy homemade pancakes loaded with fresh blueberries. Perfect for a weekend breakfast or brunch.",
    instructions: "Mix flour, sugar, baking powder, egg and milk. Fold in blueberries. Cook on griddle until golden brown.",
    extendedIngredients: [
      {
        id: 20081,
        aisle: "Baking",
        image: "flour.png",
        consistency: "solid",
        name: "flour",
        nameClean: "flour",
        original: "2 cups all-purpose flour",
        originalName: "all-purpose flour",
        amount: 2,
        unit: "cups",
        meta: ["all-purpose"],
        measures: {
          us: { amount: 2, unitShort: "cups", unitLong: "cups" },
          metric: { amount: 250, unitShort: "g", unitLong: "grams" }
        }
      },
      {
        id: 1077,
        aisle: "Dairy",
        image: "milk.png",
        consistency: "liquid",
        name: "milk",
        nameClean: "milk",
        original: "1.5 cups milk",
        originalName: "milk",
        amount: 1.5,
        unit: "cups",
        meta: [],
        measures: {
          us: { amount: 1.5, unitShort: "cups", unitLong: "cups" },
          metric: { amount: 360, unitShort: "ml", unitLong: "milliliters" }
        }
      },
      {
        id: 1123,
        aisle: "Dairy",
        image: "egg.png",
        consistency: "solid",
        name: "egg",
        nameClean: "egg",
        original: "2 eggs",
        originalName: "eggs",
        amount: 2,
        unit: "",
        meta: [],
        measures: {
          us: { amount: 2, unitShort: "", unitLong: "" },
          metric: { amount: 2, unitShort: "", unitLong: "" }
        }
      },
      {
        id: 9050,
        aisle: "Produce",
        image: "blueberries.jpg",
        consistency: "solid",
        name: "blueberries",
        nameClean: "blueberries",
        original: "1 cup fresh blueberries",
        originalName: "fresh blueberries",
        amount: 1,
        unit: "cup",
        meta: ["fresh"],
        measures: {
          us: { amount: 1, unitShort: "cup", unitLong: "cup" },
          metric: { amount: 150, unitShort: "g", unitLong: "grams" }
        }
      },
      {
        id: 19335,
        aisle: "Baking",
        image: "sugar-in-bowl.png",
        consistency: "solid",
        name: "sugar",
        nameClean: "sugar",
        original: "2 tbsp sugar",
        originalName: "sugar",
        amount: 2,
        unit: "tbsp",
        meta: [],
        measures: {
          us: { amount: 2, unitShort: "tbsp", unitLong: "tablespoons" },
          metric: { amount: 25, unitShort: "g", unitLong: "grams" }
        }
      },
      {
        id: 18371,
        aisle: "Baking",
        image: "white-powder.jpg",
        consistency: "solid",
        name: "baking powder",
        nameClean: "baking powder",
        original: "2 tsp baking powder",
        originalName: "baking powder",
        amount: 2,
        unit: "tsp",
        meta: [],
        measures: {
          us: { amount: 2, unitShort: "tsp", unitLong: "teaspoons" },
          metric: { amount: 2, unitShort: "tsp", unitLong: "teaspoons" }
        }
      }
    ],
    analyzedInstructions: [
      {
        name: "",
        steps: [
          {
            number: 1,
            step: "In a large bowl, whisk together flour, sugar, and baking powder.",
            ingredients: [
              { id: 20081, name: "flour", localizedName: "flour", image: "flour.png" },
              { id: 19335, name: "sugar", localizedName: "sugar", image: "sugar-in-bowl.png" },
              { id: 18371, name: "baking powder", localizedName: "baking powder", image: "white-powder.jpg" }
            ],
            equipment: [
              { id: 404661, name: "whisk", localizedName: "whisk", image: "whisk.png" }
            ]
          },
          {
            number: 2,
            step: "In another bowl, beat eggs and add milk. Pour into dry ingredients and mix until just combined.",
            ingredients: [
              { id: 1123, name: "egg", localizedName: "egg", image: "egg.png" },
              { id: 1077, name: "milk", localizedName: "milk", image: "milk.png" }
            ],
            equipment: []
          },
          {
            number: 3,
            step: "Gently fold in blueberries.",
            ingredients: [
              { id: 9050, name: "blueberries", localizedName: "blueberries", image: "blueberries.jpg" }
            ],
            equipment: []
          },
          {
            number: 4,
            step: "Heat a griddle over medium heat. Pour 1/4 cup batter for each pancake. Cook until bubbles form, flip and cook until golden.",
            ingredients: [],
            equipment: [
              { id: 404779, name: "griddle", localizedName: "griddle", image: "griddle.jpg" }
            ],
            length: { number: 5, unit: "minutes" }
          }
        ]
      }
    ],
    nutrition: {
      nutrients: [
        { name: "Calories", amount: 325, unit: "kcal", percentOfDailyNeeds: 16 },
        { name: "Fat", amount: 6, unit: "g", percentOfDailyNeeds: 9 },
        { name: "Carbohydrates", amount: 58, unit: "g", percentOfDailyNeeds: 19 },
        { name: "Protein", amount: 11, unit: "g", percentOfDailyNeeds: 22 }
      ],
      properties: [],
      caloricBreakdown: { percentProtein: 14, percentFat: 17, percentCarbs: 69 },
      weightPerServing: { amount: 180, unit: "g" }
    }
  },
  {
    id: 7,
    title: "Caesar Salad with Chicken",
    image: "https://images.unsplash.com/photo-1546793665-c74683f339c1",
    imageType: "jpg",
    readyInMinutes: 15,
    servings: 2,
    pricePerServing: 285,
    healthScore: 58,
    spoonacularScore: 75,
    vegetarian: false,
    vegan: false,
    glutenFree: false,
    dairyFree: false,
    veryHealthy: true,
    cheap: false,
    veryPopular: true,
    sustainable: false,
    weightWatcherSmartPoints: 9,
    gaps: "no",
    lowFodmap: false,
    aggregateLikes: 1560,
    creditsText: "Fresh Salads",
    sourceName: "I am Chef",
    sourceUrl: "https://example.com",
    cuisines: ["American"],
    dishTypes: ["salad", "lunch"],
    diets: [],
    occasions: [],
    summary: "Classic Caesar salad topped with grilled chicken breast. Fresh romaine lettuce, parmesan cheese and crispy breadcrumbs.",
    instructions: "Toss lettuce with dressing. Top with grilled chicken, parmesan and breadcrumbs.",
    extendedIngredients: [
      {
        id: 1015062,
        aisle: "Meat",
        image: "chicken-breasts.png",
        consistency: "solid",
        name: "chicken breast",
        nameClean: "chicken breast",
        original: "2 grilled chicken breasts, sliced",
        originalName: "grilled chicken breasts, sliced",
        amount: 2,
        unit: "",
        meta: ["grilled", "sliced"],
        measures: {
          us: { amount: 2, unitShort: "", unitLong: "" },
          metric: { amount: 2, unitShort: "", unitLong: "" }
        }
      },
      {
        id: 11252,
        aisle: "Produce",
        image: "romaine-lettuce.jpg",
        consistency: "solid",
        name: "romaine lettuce",
        nameClean: "romaine lettuce",
        original: "4 cups romaine lettuce, chopped",
        originalName: "romaine lettuce, chopped",
        amount: 4,
        unit: "cups",
        meta: ["chopped"],
        measures: {
          us: { amount: 4, unitShort: "cups", unitLong: "cups" },
          metric: { amount: 200, unitShort: "g", unitLong: "grams" }
        }
      },
      {
        id: 1033,
        aisle: "Cheese",
        image: "parmesan.jpg",
        consistency: "solid",
        name: "parmesan",
        nameClean: "parmesan cheese",
        original: "1/2 cup grated parmesan",
        originalName: "grated parmesan",
        amount: 0.5,
        unit: "cup",
        meta: ["grated"],
        measures: {
          us: { amount: 0.5, unitShort: "cup", unitLong: "cup" },
          metric: { amount: 50, unitShort: "g", unitLong: "grams" }
        }
      },
      {
        id: 99025,
        aisle: "Baking",
        image: "breadcrumbs.jpg",
        consistency: "solid",
        name: "breadcrumbs",
        nameClean: "breadcrumbs",
        original: "1/4 cup breadcrumbs",
        originalName: "breadcrumbs",
        amount: 0.25,
        unit: "cup",
        meta: [],
        measures: {
          us: { amount: 0.25, unitShort: "cup", unitLong: "cup" },
          metric: { amount: 30, unitShort: "g", unitLong: "grams" }
        }
      }
    ],
    analyzedInstructions: [
      {
        name: "",
        steps: [
          {
            number: 1,
            step: "Wash and chop romaine lettuce. Place in a large salad bowl.",
            ingredients: [
              { id: 11252, name: "lettuce", localizedName: "lettuce", image: "romaine-lettuce.jpg" }
            ],
            equipment: []
          },
          {
            number: 2,
            step: "Slice the grilled chicken breast.",
            ingredients: [
              { id: 1015062, name: "chicken", localizedName: "chicken", image: "chicken-breasts.png" }
            ],
            equipment: []
          },
          {
            number: 3,
            step: "Toss lettuce with Caesar dressing. Top with chicken slices, parmesan cheese and breadcrumbs.",
            ingredients: [
              { id: 1033, name: "parmesan", localizedName: "parmesan", image: "parmesan.jpg" }
            ],
            equipment: []
          }
        ]
      }
    ],
    nutrition: {
      nutrients: [
        { name: "Calories", amount: 445, unit: "kcal", percentOfDailyNeeds: 22 },
        { name: "Fat", amount: 22, unit: "g", percentOfDailyNeeds: 34 },
        { name: "Carbohydrates", amount: 18, unit: "g", percentOfDailyNeeds: 6 },
        { name: "Protein", amount: 42, unit: "g", percentOfDailyNeeds: 84 }
      ],
      properties: [],
      caloricBreakdown: { percentProtein: 38, percentFat: 45, percentCarbs: 17 },
      weightPerServing: { amount: 300, unit: "g" }
    }
  },
  {
    id: 8,
    title: "Chocolate Chip Cookies",
    image: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e",
    imageType: "jpg",
    readyInMinutes: 30,
    servings: 24,
    pricePerServing: 45,
    healthScore: 3,
    spoonacularScore: 42,
    vegetarian: true,
    vegan: false,
    glutenFree: false,
    dairyFree: false,
    veryHealthy: false,
    cheap: true,
    veryPopular: true,
    sustainable: false,
    weightWatcherSmartPoints: 4,
    gaps: "no",
    lowFodmap: false,
    aggregateLikes: 4820,
    creditsText: "Cookie Master",
    sourceName: "I am Chef",
    sourceUrl: "https://example.com",
    cuisines: ["American"],
    dishTypes: ["dessert"],
    diets: ["vegetarian"],
    occasions: [],
    summary: "Classic homemade chocolate chip cookies. Soft, chewy and loaded with chocolate chips. Perfect for any occasion!",
    instructions: "Cream butter and sugar. Add eggs and vanilla. Mix in flour and chocolate chips. Bake until golden.",
    extendedIngredients: [
      {
        id: 20081,
        aisle: "Baking",
        image: "flour.png",
        consistency: "solid",
        name: "flour",
        nameClean: "flour",
        original: "2.25 cups all-purpose flour",
        originalName: "all-purpose flour",
        amount: 2.25,
        unit: "cups",
        meta: ["all-purpose"],
        measures: {
          us: { amount: 2.25, unitShort: "cups", unitLong: "cups" },
          metric: { amount: 280, unitShort: "g", unitLong: "grams" }
        }
      },
      {
        id: 1001,
        aisle: "Dairy",
        image: "butter-sliced.jpg",
        consistency: "solid",
        name: "butter",
        nameClean: "butter",
        original: "1 cup softened butter",
        originalName: "softened butter",
        amount: 1,
        unit: "cup",
        meta: ["softened"],
        measures: {
          us: { amount: 1, unitShort: "cup", unitLong: "cup" },
          metric: { amount: 227, unitShort: "g", unitLong: "grams" }
        }
      },
      {
        id: 19335,
        aisle: "Baking",
        image: "sugar-in-bowl.png",
        consistency: "solid",
        name: "sugar",
        nameClean: "sugar",
        original: "3/4 cup granulated sugar",
        originalName: "granulated sugar",
        amount: 0.75,
        unit: "cup",
        meta: ["granulated"],
        measures: {
          us: { amount: 0.75, unitShort: "cup", unitLong: "cup" },
          metric: { amount: 150, unitShort: "g", unitLong: "grams" }
        }
      },
      {
        id: 19334,
        aisle: "Baking",
        image: "dark-brown-sugar.png",
        consistency: "solid",
        name: "brown sugar",
        nameClean: "brown sugar",
        original: "3/4 cup packed brown sugar",
        originalName: "packed brown sugar",
        amount: 0.75,
        unit: "cup",
        meta: ["packed"],
        measures: {
          us: { amount: 0.75, unitShort: "cup", unitLong: "cup" },
          metric: { amount: 165, unitShort: "g", unitLong: "grams" }
        }
      },
      {
        id: 1123,
        aisle: "Dairy",
        image: "egg.png",
        consistency: "solid",
        name: "egg",
        nameClean: "egg",
        original: "2 large eggs",
        originalName: "large eggs",
        amount: 2,
        unit: "large",
        meta: [],
        measures: {
          us: { amount: 2, unitShort: "large", unitLong: "larges" },
          metric: { amount: 2, unitShort: "large", unitLong: "larges" }
        }
      },
      {
        id: 2050,
        aisle: "Baking",
        image: "vanilla-extract.jpg",
        consistency: "liquid",
        name: "vanilla extract",
        nameClean: "vanilla extract",
        original: "2 tsp vanilla extract",
        originalName: "vanilla extract",
        amount: 2,
        unit: "tsp",
        meta: [],
        measures: {
          us: { amount: 2, unitShort: "tsp", unitLong: "teaspoons" },
          metric: { amount: 2, unitShort: "tsp", unitLong: "teaspoons" }
        }
      },
      {
        id: 10019071,
        aisle: "Baking",
        image: "chocolate-chips.jpg",
        consistency: "solid",
        name: "chocolate chips",
        nameClean: "chocolate chips",
        original: "2 cups chocolate chips",
        originalName: "chocolate chips",
        amount: 2,
        unit: "cups",
        meta: [],
        measures: {
          us: { amount: 2, unitShort: "cups", unitLong: "cups" },
          metric: { amount: 340, unitShort: "g", unitLong: "grams" }
        }
      },
      {
        id: 18372,
        aisle: "Baking",
        image: "white-powder.jpg",
        consistency: "solid",
        name: "baking soda",
        nameClean: "baking soda",
        original: "1 tsp baking soda",
        originalName: "baking soda",
        amount: 1,
        unit: "tsp",
        meta: [],
        measures: {
          us: { amount: 1, unitShort: "tsp", unitLong: "teaspoon" },
          metric: { amount: 1, unitShort: "tsp", unitLong: "teaspoon" }
        }
      }
    ],
    analyzedInstructions: [
      {
        name: "",
        steps: [
          {
            number: 1,
            step: "Preheat oven to 375°F. In a large bowl, cream together butter, granulated sugar and brown sugar until light and fluffy.",
            ingredients: [
              { id: 1001, name: "butter", localizedName: "butter", image: "butter-sliced.jpg" },
              { id: 19335, name: "sugar", localizedName: "sugar", image: "sugar-in-bowl.png" }
            ],
            equipment: [
              { id: 404784, name: "oven", localizedName: "oven", image: "oven.jpg" }
            ]
          },
          {
            number: 2,
            step: "Beat in eggs one at a time, then stir in vanilla extract.",
            ingredients: [
              { id: 1123, name: "eggs", localizedName: "eggs", image: "egg.png" },
              { id: 2050, name: "vanilla", localizedName: "vanilla", image: "vanilla-extract.jpg" }
            ],
            equipment: []
          },
          {
            number: 3,
            step: "Mix in flour and baking soda. Fold in chocolate chips.",
            ingredients: [
              { id: 20081, name: "flour", localizedName: "flour", image: "flour.png" },
              { id: 10019071, name: "chocolate chips", localizedName: "chocolate chips", image: "chocolate-chips.jpg" }
            ],
            equipment: []
          },
          {
            number: 4,
            step: "Drop rounded tablespoons of dough onto ungreased cookie sheets. Bake for 9-11 minutes until golden brown.",
            ingredients: [],
            equipment: [
              { id: 404727, name: "baking sheet", localizedName: "baking sheet", image: "baking-sheet.jpg" }
            ],
            length: { number: 11, unit: "minutes" }
          }
        ]
      }
    ],
    nutrition: {
      nutrients: [
        { name: "Calories", amount: 185, unit: "kcal", percentOfDailyNeeds: 9 },
        { name: "Fat", amount: 9, unit: "g", percentOfDailyNeeds: 14 },
        { name: "Carbohydrates", amount: 25, unit: "g", percentOfDailyNeeds: 8 },
        { name: "Protein", amount: 2, unit: "g", percentOfDailyNeeds: 4 }
      ],
      properties: [],
      caloricBreakdown: { percentProtein: 4, percentFat: 44, percentCarbs: 52 },
      weightPerServing: { amount: 35, unit: "g" }
    }
  },
  {
    id: 9,
    title: "Roasted Salmon with Lemon",
    image: "https://images.unsplash.com/photo-1485921325833-c519f76c4927",
    imageType: "jpg",
    readyInMinutes: 20,
    servings: 4,
    pricePerServing: 450,
    healthScore: 89,
    spoonacularScore: 92,
    vegetarian: false,
    vegan: false,
    glutenFree: true,
    dairyFree: true,
    veryHealthy: true,
    cheap: false,
    veryPopular: true,
    sustainable: true,
    weightWatcherSmartPoints: 5,
    gaps: "no",
    lowFodmap: false,
    aggregateLikes: 2890,
    creditsText: "Seafood Delights",
    sourceName: "I am Chef",
    sourceUrl: "https://example.com",
    cuisines: [],
    dishTypes: ["dinner", "main course"],
    diets: [],
    occasions: [],
    summary: "Perfectly roasted salmon fillet with fresh lemon. Rich in omega-3 fatty acids and incredibly flavorful. Ready in just 20 minutes!",
    instructions: "Season salmon with salt, pepper and lemon juice. Roast in oven until flaky.",
    extendedIngredients: [
      {
        id: 15076,
        aisle: "Seafood",
        image: "salmon.png",
        consistency: "solid",
        name: "salmon",
        nameClean: "salmon",
        original: "4 salmon fillets (6 oz each)",
        originalName: "salmon fillets",
        amount: 4,
        unit: "fillets",
        meta: [],
        measures: {
          us: { amount: 24, unitShort: "oz", unitLong: "ounces" },
          metric: { amount: 680, unitShort: "g", unitLong: "grams" }
        }
      },
      {
        id: 9152,
        aisle: "Produce",
        image: "lemon.png",
        consistency: "solid",
        name: "lemon",
        nameClean: "lemon",
        original: "2 lemons",
        originalName: "lemons",
        amount: 2,
        unit: "",
        meta: [],
        measures: {
          us: { amount: 2, unitShort: "", unitLong: "" },
          metric: { amount: 2, unitShort: "", unitLong: "" }
        }
      },
      {
        id: 4053,
        aisle: "Oil",
        image: "olive-oil.jpg",
        consistency: "liquid",
        name: "olive oil",
        nameClean: "olive oil",
        original: "2 tbsp olive oil",
        originalName: "olive oil",
        amount: 2,
        unit: "tbsp",
        meta: [],
        measures: {
          us: { amount: 2, unitShort: "tbsp", unitLong: "tablespoons" },
          metric: { amount: 30, unitShort: "ml", unitLong: "milliliters" }
        }
      },
      {
        id: 11215,
        aisle: "Produce",
        image: "garlic.jpg",
        consistency: "solid",
        name: "garlic",
        nameClean: "garlic",
        original: "3 cloves garlic, minced",
        originalName: "garlic, minced",
        amount: 3,
        unit: "cloves",
        meta: ["minced"],
        measures: {
          us: { amount: 3, unitShort: "cloves", unitLong: "cloves" },
          metric: { amount: 3, unitShort: "cloves", unitLong: "cloves" }
        }
      },
      {
        id: 2047,
        aisle: "Spices",
        image: "salt.jpg",
        consistency: "solid",
        name: "salt",
        nameClean: "salt",
        original: "salt and pepper to taste",
        originalName: "salt",
        amount: 1,
        unit: "tsp",
        meta: [],
        measures: {
          us: { amount: 1, unitShort: "tsp", unitLong: "teaspoon" },
          metric: { amount: 1, unitShort: "tsp", unitLong: "teaspoon" }
        }
      }
    ],
    analyzedInstructions: [
      {
        name: "",
        steps: [
          {
            number: 1,
            step: "Preheat oven to 400°F. Line a baking sheet with parchment paper.",
            ingredients: [],
            equipment: [
              { id: 404784, name: "oven", localizedName: "oven", image: "oven.jpg" },
              { id: 404727, name: "baking sheet", localizedName: "baking sheet", image: "baking-sheet.jpg" }
            ]
          },
          {
            number: 2,
            step: "Place salmon fillets on prepared baking sheet. Drizzle with olive oil and squeeze lemon juice over them.",
            ingredients: [
              { id: 15076, name: "salmon", localizedName: "salmon", image: "salmon.png" },
              { id: 4053, name: "olive oil", localizedName: "olive oil", image: "olive-oil.jpg" },
              { id: 9152, name: "lemon", localizedName: "lemon", image: "lemon.png" }
            ],
            equipment: []
          },
          {
            number: 3,
            step: "Sprinkle minced garlic, salt and pepper over the salmon.",
            ingredients: [
              { id: 11215, name: "garlic", localizedName: "garlic", image: "garlic.jpg" }
            ],
            equipment: []
          },
          {
            number: 4,
            step: "Roast in preheated oven for 12-15 minutes until salmon flakes easily with a fork.",
            ingredients: [],
            equipment: [
              { id: 404784, name: "oven", localizedName: "oven", image: "oven.jpg" }
            ],
            length: { number: 15, unit: "minutes" }
          }
        ]
      }
    ],
    nutrition: {
      nutrients: [
        { name: "Calories", amount: 340, unit: "kcal", percentOfDailyNeeds: 17 },
        { name: "Fat", amount: 18, unit: "g", percentOfDailyNeeds: 28 },
        { name: "Carbohydrates", amount: 3, unit: "g", percentOfDailyNeeds: 1 },
        { name: "Protein", amount: 38, unit: "g", percentOfDailyNeeds: 76 }
      ],
      properties: [],
      caloricBreakdown: { percentProtein: 45, percentFat: 48, percentCarbs: 7 },
      weightPerServing: { amount: 200, unit: "g" }
    }
  },
  {
    id: 10,
    title: "Vegetable Stir Fry with Rice",
    image: "https://images.unsplash.com/photo-1512058564366-18510be2db19",
    imageType: "jpg",
    readyInMinutes: 25,
    servings: 4,
    pricePerServing: 180,
    healthScore: 78,
    spoonacularScore: 86,
    vegetarian: true,
    vegan: true,
    glutenFree: true,
    dairyFree: true,
    veryHealthy: true,
    cheap: true,
    veryPopular: true,
    sustainable: true,
    weightWatcherSmartPoints: 6,
    gaps: "no",
    lowFodmap: false,
    aggregateLikes: 3120,
    creditsText: "Veggie Heaven",
    sourceName: "I am Chef",
    sourceUrl: "https://example.com",
    cuisines: ["Asian", "Chinese"],
    dishTypes: ["lunch", "dinner", "main course"],
    diets: ["vegetarian", "vegan"],
    occasions: [],
    summary: "Colorful and healthy vegetable stir fry served over fluffy rice. Packed with nutrients and bursting with flavor. Perfect for a quick weeknight dinner!",
    instructions: "Cook rice. Stir fry vegetables with garlic and ginger. Add soy sauce. Serve over rice.",
    extendedIngredients: [
      {
        id: 20444,
        aisle: "Grains",
        image: "uncooked-white-rice.png",
        consistency: "solid",
        name: "rice",
        nameClean: "rice",
        original: "2 cups rice",
        originalName: "rice",
        amount: 2,
        unit: "cups",
        meta: [],
        measures: {
          us: { amount: 2, unitShort: "cups", unitLong: "cups" },
          metric: { amount: 400, unitShort: "g", unitLong: "grams" }
        }
      },
      {
        id: 11124,
        aisle: "Produce",
        image: "sliced-carrot.png",
        consistency: "solid",
        name: "carrot",
        nameClean: "carrot",
        original: "2 large carrots, sliced",
        originalName: "carrots, sliced",
        amount: 2,
        unit: "large",
        meta: ["sliced"],
        measures: {
          us: { amount: 2, unitShort: "large", unitLong: "larges" },
          metric: { amount: 2, unitShort: "large", unitLong: "larges" }
        }
      },
      {
        id: 11090,
        aisle: "Produce",
        image: "broccoli.jpg",
        consistency: "solid",
        name: "broccoli",
        nameClean: "broccoli",
        original: "2 cups broccoli florets",
        originalName: "broccoli florets",
        amount: 2,
        unit: "cups",
        meta: [],
        measures: {
          us: { amount: 2, unitShort: "cups", unitLong: "cups" },
          metric: { amount: 180, unitShort: "g", unitLong: "grams" }
        }
      },
      {
        id: 11821,
        aisle: "Produce",
        image: "red-pepper.jpg",
        consistency: "solid",
        name: "bell pepper",
        nameClean: "bell pepper",
        original: "1 red bell pepper, sliced",
        originalName: "red bell pepper, sliced",
        amount: 1,
        unit: "",
        meta: ["red", "sliced"],
        measures: {
          us: { amount: 1, unitShort: "", unitLong: "" },
          metric: { amount: 1, unitShort: "", unitLong: "" }
        }
      },
      {
        id: 11215,
        aisle: "Produce",
        image: "garlic.jpg",
        consistency: "solid",
        name: "garlic",
        nameClean: "garlic",
        original: "4 cloves garlic, minced",
        originalName: "garlic, minced",
        amount: 4,
        unit: "cloves",
        meta: ["minced"],
        measures: {
          us: { amount: 4, unitShort: "cloves", unitLong: "cloves" },
          metric: { amount: 4, unitShort: "cloves", unitLong: "cloves" }
        }
      },
      {
        id: 2021,
        aisle: "Spices",
        image: "ginger.png",
        consistency: "solid",
        name: "ginger",
        nameClean: "ginger",
        original: "1 tbsp fresh ginger, minced",
        originalName: "fresh ginger, minced",
        amount: 1,
        unit: "tbsp",
        meta: ["fresh", "minced"],
        measures: {
          us: { amount: 1, unitShort: "tbsp", unitLong: "tablespoon" },
          metric: { amount: 15, unitShort: "g", unitLong: "grams" }
        }
      },
      {
        id: 2073,
        aisle: "Condiments",
        image: "soy-sauce.jpg",
        consistency: "liquid",
        name: "soy sauce",
        nameClean: "soy sauce",
        original: "3 tbsp soy sauce",
        originalName: "soy sauce",
        amount: 3,
        unit: "tbsp",
        meta: [],
        measures: {
          us: { amount: 3, unitShort: "tbsp", unitLong: "tablespoons" },
          metric: { amount: 45, unitShort: "ml", unitLong: "milliliters" }
        }
      },
      {
        id: 4058,
        aisle: "Oil",
        image: "sesame-oil.png",
        consistency: "liquid",
        name: "sesame oil",
        nameClean: "sesame oil",
        original: "2 tbsp sesame oil",
        originalName: "sesame oil",
        amount: 2,
        unit: "tbsp",
        meta: [],
        measures: {
          us: { amount: 2, unitShort: "tbsp", unitLong: "tablespoons" },
          metric: { amount: 30, unitShort: "ml", unitLong: "milliliters" }
        }
      }
    ],
    analyzedInstructions: [
      {
        name: "",
        steps: [
          {
            number: 1,
            step: "Cook rice according to package directions. Set aside.",
            ingredients: [
              { id: 20444, name: "rice", localizedName: "rice", image: "uncooked-white-rice.png" }
            ],
            equipment: [
              { id: 404752, name: "pot", localizedName: "pot", image: "stock-pot.jpg" }
            ]
          },
          {
            number: 2,
            step: "Heat sesame oil in a large wok or skillet over high heat.",
            ingredients: [
              { id: 4058, name: "sesame oil", localizedName: "sesame oil", image: "sesame-oil.png" }
            ],
            equipment: [
              { id: 404645, name: "frying pan", localizedName: "wok", image: "pan.png" }
            ]
          },
          {
            number: 3,
            step: "Add minced garlic and ginger, stir fry for 30 seconds until fragrant.",
            ingredients: [
              { id: 11215, name: "garlic", localizedName: "garlic", image: "garlic.jpg" },
              { id: 2021, name: "ginger", localizedName: "ginger", image: "ginger.png" }
            ],
            equipment: []
          },
          {
            number: 4,
            step: "Add carrots, broccoli and bell pepper. Stir fry for 5-7 minutes until vegetables are tender-crisp.",
            ingredients: [
              { id: 11124, name: "carrot", localizedName: "carrot", image: "sliced-carrot.png" },
              { id: 11090, name: "broccoli", localizedName: "broccoli", image: "broccoli.jpg" },
              { id: 11821, name: "bell pepper", localizedName: "bell pepper", image: "red-pepper.jpg" }
            ],
            equipment: [],
            length: { number: 7, unit: "minutes" }
          },
          {
            number: 5,
            step: "Add soy sauce and toss to coat. Serve immediately over cooked rice.",
            ingredients: [
              { id: 2073, name: "soy sauce", localizedName: "soy sauce", image: "soy-sauce.jpg" }
            ],
            equipment: []
          }
        ]
      }
    ],
    nutrition: {
      nutrients: [
        { name: "Calories", amount: 385, unit: "kcal", percentOfDailyNeeds: 19 },
        { name: "Fat", amount: 8, unit: "g", percentOfDailyNeeds: 12 },
        { name: "Carbohydrates", amount: 72, unit: "g", percentOfDailyNeeds: 24 },
        { name: "Protein", amount: 9, unit: "g", percentOfDailyNeeds: 18 }
      ],
      properties: [],
      caloricBreakdown: { percentProtein: 9, percentFat: 19, percentCarbs: 72 },
      weightPerServing: { amount: 350, unit: "g" }
    }
  }
];

export const mockIngredients: Ingredient[] = [
  // Pasta & Grains
  { id: 20420, name: "pasta", image: "fusilli.jpg" },
  { id: 20081, name: "flour", image: "flour.png" },
  { id: 20444, name: "rice", image: "uncooked-white-rice.png" },
  { id: 18064, name: "bread", image: "white-bread.jpg" },
  { id: 99025, name: "breadcrumbs", image: "breadcrumbs.jpg" },
  
  // Proteins
  { id: 1123, name: "egg", image: "egg.png" },
  { id: 5006, name: "chicken", image: "whole-chicken.jpg" },
  { id: 10023572, name: "ground beef", image: "fresh-ground-beef.jpg" },
  { id: 15076, name: "salmon", image: "salmon.png" },
  { id: 10862, name: "bacon", image: "bacon-raw.jpg" },
  { id: 1015062, name: "chicken breast", image: "chicken-breasts.png" },
  
  // Dairy
  { id: 1001, name: "butter", image: "butter-sliced.jpg" },
  { id: 1077, name: "milk", image: "milk.png" },
  { id: 1041009, name: "cheese", image: "cheddar-cheese.png" },
  { id: 1033, name: "parmesan", image: "parmesan.jpg" },
  { id: 1036, name: "mozzarella", image: "mozzarella.png" },
  { id: 1017, name: "cream", image: "sour-cream.jpg" },
  
  // Vegetables
  { id: 11215, name: "garlic", image: "garlic.jpg" },
  { id: 11282, name: "onion", image: "brown-onion.png" },
  { id: 11529, name: "tomato", image: "tomato.png" },
  { id: 11135, name: "cauliflower", image: "cauliflower.jpg" },
  { id: 11124, name: "carrot", image: "sliced-carrot.png" },
  { id: 11260, name: "mushrooms", image: "mushrooms.png" },
  { id: 11352, name: "potato", image: "potatoes-yukon-gold.png" },
  { id: 11090, name: "broccoli", image: "broccoli.jpg" },
  { id: 11291, name: "scallions", image: "spring-onions.jpg" },
  { id: 11297, name: "parsley", image: "parsley.jpg" },
  { id: 2044, name: "basil", image: "basil.jpg" },
  { id: 11821, name: "bell pepper", image: "red-pepper.jpg" },
  { id: 11457, name: "spinach", image: "spinach.jpg" },
  
  // Fruits
  { id: 9003, name: "apple", image: "apple.jpg" },
  { id: 9040, name: "banana", image: "bananas.jpg" },
  { id: 9050, name: "blueberries", image: "blueberries.jpg" },
  { id: 9152, name: "lemon", image: "lemon.png" },
  { id: 9316, name: "strawberries", image: "strawberries.png" },
  { id: 1009054, name: "rhubarb", image: "rhubarb.jpg" },
  
  // Spices & Seasonings
  { id: 2047, name: "salt", image: "salt.jpg" },
  { id: 1002030, name: "pepper", image: "pepper.jpg" },
  { id: 2010, name: "cinnamon", image: "cinnamon.jpg" },
  { id: 2021, name: "ginger", image: "ginger.png" },
  { id: 1032009, name: "red pepper flakes", image: "red-pepper-flakes.jpg" },
  { id: 2025, name: "nutmeg", image: "ground-nutmeg.jpg" },
  { id: 2028, name: "paprika", image: "paprika.jpg" },
  { id: 1002014, name: "cumin", image: "ground-cumin.jpg" },
  
  // Oils & Condiments
  { id: 4053, name: "olive oil", image: "olive-oil.jpg" },
  { id: 1034053, name: "extra virgin olive oil", image: "olive-oil.jpg" },
  { id: 2073, name: "soy sauce", image: "soy-sauce.jpg" },
  { id: 2046, name: "honey", image: "honey.png" },
  { id: 19335, name: "sugar", image: "sugar-in-bowl.png" },
  { id: 9152, name: "lemon juice", image: "lemon-juice.jpg" },
  
  // Baking
  { id: 18371, name: "baking powder", image: "white-powder.jpg" },
  { id: 18372, name: "baking soda", image: "white-powder.jpg" },
  { id: 19334, name: "brown sugar", image: "dark-brown-sugar.png" },
  { id: 2050, name: "vanilla extract", image: "vanilla-extract.jpg" },
  { id: 10019071, name: "chocolate chips", image: "chocolate-chips.jpg" },
  
  // Other
  { id: 14106, name: "white wine", image: "white-wine.jpg" },
  { id: 6194, name: "chicken broth", image: "chicken-broth.png" },
  { id: 11111, name: "coconut milk", image: "coconut-milk.png" },
  { id: 19911, name: "maple syrup", image: "maple-syrup.png" }
];
