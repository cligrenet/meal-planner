import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import SignupPage from './pages/SignupPage';
import LoginPage from './pages/LoginPage';
import NotFound from './components/utilities/NotFound';
import PlanPage from './pages/PlanPage';
import RecipePage from './pages/RecipePage';
import IngredientForm from './components/forms/IngredientForm';
import Ingredients from './components/Ingredients';
import RecipeForm from './components/forms/RecipeForm';
import UserPage from './pages/UserPage';
import UserForm from './components/forms/UserForm';
import PlanForm from './components/forms/PlanForm';
import PlanDetails from './components/PlanDetails';
import RecipeDetails from './components/RecipeDetails';
import GroceryPage from './pages/GroceryPage';
import { useAppContext } from './lib/contextLib';

function AppRoutes() {
	const { isAuthenticated } = useAppContext();

	return (
		<Routes>
			{isAuthenticated ? (
				<Route exact path="/" element={<HomePage />} />
			) : (
				<Route exact path="/" element={<LoginPage />} />
			)}
			<Route exact path="/signup" element={<SignupPage />} />
			<Route exact path="/login" element={<LoginPage />} />
			<Route exact path="/plan" element={<PlanPage />} />
			<Route exact path="/recipe" element={<RecipePage />} />
			<Route exact path="/grocery" element={<GroceryPage />} />
			<Route exact path="/user" element={<UserPage />} />
			<Route exact path="/user/update" element={<UserForm />} />
			<Route exact path="/ingredients/create" element={<IngredientForm />} />
			<Route exact path="/ingredients" element={<Ingredients />} />
			<Route exact path="/recipes/create" element={<RecipeForm />} />
			<Route path="/recipes/:recipeId" element={<RecipeDetails />} />
			<Route path="/recipes/:recipeId/update" element={<RecipeForm />} />
			<Route exact path="/plans/create" element={<PlanForm />} />
			<Route path="/plans/:planId" element={<PlanDetails />} />
			<Route path="/plans/:planId/update" element={<PlanForm />} />
			<Route path="*" element={<NotFound />} />
		</Routes>
	);
}

export default AppRoutes;
