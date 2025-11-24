import { useEffect, useState } from "react"

type UseApiReturn<T> = {
  data: T | null
  loading: boolean
  error: string | null
}


export function useApi<T = any>(url: string): UseApiReturn<T> {
  const [data, setData] = useState<T | null>(null)
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<string | null>(null)
  
  useEffect(() => {
    let cancelled = false
    
    const fetchData = async () => {
      try {
        setLoading(true)
        setError(null)
        const response = await fetch(url)
        const result = await response.json()
      
        if (response.status === 402) {
          throw new Error('API quota exceeded or invalid API key');
        }

        if (!cancelled) {
          // Se la risposta ha un campo "results", usa quello (es. ingredienti)
          // Altrimenti usa l'intero risultato (es. recipe details o array di ricette)
          setData(result.results !== undefined ? result.results : result)
        }
      } catch (err) {
        if (!cancelled) {
          setError((err as Error).message)
        }
      } finally {
        if (!cancelled) {
          setLoading(false)
        }
      }
    }
    
    if (url.length > 0 )  fetchData();


    return () => {
      cancelled = true
    }
  }, [url])
  
  return { data, loading, error }
}



// https://api.spoonacular.com BASE_URL
// /food/ingredients/search ENDPOINT
// ?API_KEY = ${API_KEY}
// query=${debouncedSearchingIng}&number=${resultnum}

export const getIngredientURL = (query: string, apiKey: string) => {
    const ENDPOINT = "/food/ingredients/search";
    const RESULTS_NUM = 100;

    return `${import.meta.env.VITE_BASE_URL}${ENDPOINT}?apiKey=${apiKey}&query=${query}&number=${RESULTS_NUM}`;
}


// https://api.spoonacular.com BASE_URL
// /recipes/findByIngredients ENDPOINT
// ingredients=${ingredientsString}&number=${RESULTS_NUM}

export const getRecipesByIngredientsURL = (ingredients: string[], apiKey: string) => {
    const ENDPOINT = "/recipes/findByIngredients";
    const RESULTS_NUM = 100;
    const ingredientsString = ingredients.join(',+');

    return `${import.meta.env.VITE_BASE_URL}${ENDPOINT}?apiKey=${apiKey}&ingredients=${ingredientsString}&number=${RESULTS_NUM}&addRecipeInformation=true`;
}


// https://api.spoonacular.com BASE_URL
// /recipes/{id}/information ENDPOINT

export const getRecipeInformationURL = (id: number, apiKey: string) => {
    const ENDPOINT = `/recipes/${id}/information`;

    return `${import.meta.env.VITE_BASE_URL}${ENDPOINT}?apiKey=${apiKey}&includeNutrition=false`;
}