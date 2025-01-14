import React from "react";
import { Link } from "react-router-dom";

import { Button } from "@material-ui/core";

import Styles from "./Style.module.css";
import Logo from "../../../assets/images/logo.png";

function index() {
	return (
		<div className={Styles.container}>
			<div className={Styles.flexstart}>
				<img src={Logo} className={Styles.logo} alt="logo" />
				<div className={Styles.Name}>
					Date-NITTe
				</div>
			</div>
			<div className={Styles.flexend}>

				<Button className={Styles.button1} type="button">
					<Link to="/home" className={Styles.link}>
						<i className="fas fa-lg fa-home me-2" />
						Home
					</Link>
				</Button>

				<Button className={Styles.button1} type="button">
					<Link to="/chat" className={Styles.link}>
						<i className="fas fa-lg fa-paper-plane me-2" />
						Chat
					</Link>
				</Button>

				<Button className={Styles.button1} type="button">
					<i className="fas fa-lg fa-user-alt me-2" />
					Profile
				</Button>

				<div className="me-3" />
			</div>
		</div>
	);
}

export default index;
