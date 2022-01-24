/* eslint-disable arrow-body-style */
import React from "react";

import Navbar from "../Components/Navbar";

import Styles from "./Style.module.css";
import img from "../../assets/images/logo192.png";

export const Profile = () => {
	return (
		<div className={Styles.container}>

			<Navbar />

			<div className={Styles.sidebar}>

				<img className={Styles.Profile} src={img} alt="profile" />

				<div className={Styles.Name}>
					M.Dinesh
				</div>

				<div className="mt-1 mb-1" />

				<div className={Styles.list}>
					Personel Info
				</div>

				<div className={Styles.list}>
					Preference List
				</div>

			</div>
			<div className={Styles.right}>
				1234
			</div>
		</div>
	);
};

export default Profile;
