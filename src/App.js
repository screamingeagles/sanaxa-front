import React from "react";
import { BasketContext } from "./shared/context/basket-context";
import { useBasket } from "./shared/hooks/basket-hook";

import Layout from "./Customer/Layout/Layout";
import classes from "./App.module.css";

function App() {
	const {
		basketContent,
		setBasketData,
		showBasketHandler,
		showBasket,
		addQuantityToBasket,
		removeProduct,
		totalPrice,
		fetchBasket,
		cart,
		error,
		clearBasket,
		isLoading,
		restaurant,
	} = useBasket();

	return (
		<BasketContext.Provider
			value={{
				basketContent,
				setBasketData,
				showBasketHandler,
				showBasket,
				addQuantityToBasket,
				removeProduct,
				totalPrice,
				fetchBasket,
				cart,
				error,
				clearBasket,
				isLoading,
				restaurant,
			}}>
			<div className={classes.App}>
				<Layout />
			</div>
		</BasketContext.Provider>
	);
}

export default App;
