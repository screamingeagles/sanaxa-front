import React, { useState } from "react";
import classes from "./CategoryView.module.css";
import Button from "../../../../shared/components/FormElements/Button";
import Modal from "./../../../../shared/components/UIElements/Modal";
import AddOnItems from "./../../Bucket/AddOnItems";

const CategoryView = (props) => {
	const [addingToCart, setAddingToCart] = useState(false);
	const [productId, setProductId] = useState(false);
	const [productName, setProductName] = useState(false);
	const [productPrice, setProductPrice] = useState(false);

	const addToCart = (id, name, price) => {
		console.log(id);
		setProductId(id);
		setProductName(name);
		setProductPrice(price);
		setAddingToCart(true);
	};

	const closeCart = () => {
		setAddingToCart(false);
	};

	return (
		<div className={classes.CategoryView}>
			<div>
				<Modal show={addingToCart} header='True' onCancel={closeCart}>
					<AddOnItems
						id={productId}
						img={props.img}
						name={productName}
						price={productPrice}
					/>
				</Modal>
				<h2>{props.category}</h2>
				{props.dishes.map((j) => {
					return (
						<React.Fragment>
							<div className={classes.CategoryView__Container}>
								<div className={classes.CategoryView__Container_ImageName}>
									<img src={props.img} alt={props.alt} height='80px' />
									<div>
										<h3>{j.foodList.name}</h3>
										<p>{props.shortDescription}</p>
									</div>
								</div>
								<div className={classes.CategoryView__Container_ButtonPrice}>
									<h3>${j.foodList.price}</h3>
									<div
										className={classes.AddToCart__Button}
										onClick={() =>
											addToCart(j._id, j.foodList.name, j.foodList.price)
										}>
										Add To Cart
										<span
											style={{
												fontWeight: "bold",
												height: "32px",
												fontSize: "28px",
												alignSelf: "Center",
												marginLeft: "12px",
											}}>
											+
										</span>
									</div>
								</div>
							</div>
						</React.Fragment>
					);
				})}
			</div>
		</div>
	);
};

export default CategoryView;