/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from "react";

import Styles from "./Style.module.css";

function index({
	Name,
	LastMsg,
	Profile = "Empty.png",
	changePerson,
}) {
	const image = "images/".concat(Profile);
	return (
		<div
			className={Styles.container}
			onClick={() => changePerson({ Name, Profile })}
		>

			<img className={Styles.image} src={image} alt="profile" />

			<div className={Styles.content}>

				<div className={Styles.Name}>
					{Name}
				</div>

				<div className={Styles.Message}>
					{LastMsg}
				</div>

			</div>
		</div>
	);
}

export default index;
