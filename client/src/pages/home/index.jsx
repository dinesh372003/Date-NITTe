/* eslint-disable arrow-body-style */
import React from "react";

import Navbar from "../Components/Navbar";
import Contents from "../Components/Contents";
import Recommendations from "../Components/Recommendations";

import Styles from "./Style.module.css";
import bg from "../../assets/images/bg.jpg";

export const Home = () => {
	return (
		<div className={Styles.bg} style={{ backgroundImage: `url(${bg})` }}>
			<Navbar />
			<div className={Styles.row}>

				<div className={Styles.column1} />

				<div className={Styles.column2}>
					<Contents />
					<Contents />
					<Contents />
					<Contents />
				</div>

				<div className={Styles.column3}>
					<Recommendations />
				</div>

				<div className={Styles.column4} />

			</div>
		</div>
	);
};
export default Home;
