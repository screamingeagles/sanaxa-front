import React from "react";
import { NavLink } from "react-router-dom";

import "./Button.css";

const Button = (props) => {
	if (props.href) {
		return (
			<a
				className={`button button--${props.size || "default"} ${
					props.inverse && "button--inverse"
				} ${props.danger && "button--danger"}`}
				href={props.href}>
				{props.children}
			</a>
		);
	}
	if (props.to) {
		return (
			<NavLink
				to={props.to}
				exact={props.exact}
				style={{
					backgroundColor: props.backgroundColor,
					color: props.color,
					border: props.backgroundColor,
					padding: props.padding,
					borderRadius: props.borderRadius,
					width: props.width,
					textAlign: props.textAlign,
				}}
				className={`button button--${props.size || "default"} ${
					props.inverse && "button--inverse"
				} ${props.danger && "button--danger"}`}>
				{props.children}
			</NavLink>
		);
	}
	return (
		<button
			style={{
				backgroundColor: props.backgroundColor,
				color: props.color,
				border: props.backgroundColor,
				padding: props.padding,
				borderRadius: props.borderRadius,
				width: props.width,
			}}
			className={`button button--${props.size || "default"} ${
				props.inverse && "button--inverse"
			} ${props.danger && "button--danger"}`}
			type={props.type}
			onClick={props.onClick}
			disabled={props.disabled}>
			{props.children}
		</button>
	);
};

export default Button;
