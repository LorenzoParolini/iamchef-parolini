import { createBrowserRouter, type RouteObject } from "react-router";
import SearchPage from "./pages/search-page/SearchPage";
import DiscoverRecipes from "./pages/dicover-recipes/DiscoverRecipes";
import RecipeDetails from "./pages/recipe-details/RecipeDetails";
import SetApiPage from "./pages/set-api-page/SetApiPage";
import App from "./App";
import { ProtectedRoute } from "./components/ProtectedRoute";

// configurazione delle rotte dell'app
// "/" -> ricerca ingredienti (protetta)
// "/discover" -> risultati ricerca (protetta)
// "/recipe/:id" -> dettagli ricetta (protetta)
// "/set-api" -> configurazione api key (pubblica)

const routes: RouteObject[] = [
    {
        path: "/",
        element: <App />,
        children: [
            {
                index: true,
                element: <ProtectedRoute><SearchPage /></ProtectedRoute>,
            },
            {
                path: "discover",
                element: <ProtectedRoute><DiscoverRecipes /></ProtectedRoute>,
            },
            {
                path: "recipe/:id",
                element: <ProtectedRoute><RecipeDetails /></ProtectedRoute>,
            },
            {
                path: "set-api",
                element: <SetApiPage />,
            }
        ]
    }
];

export const router = createBrowserRouter(routes);