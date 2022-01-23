/* eslint-disable max-len */
import React from "react";

import Styles from "./Style.module.css";

function index({ Msg }) {
	return (
		<div className={Styles.container}>
			<div className={Styles.content}>
				<div className={Styles.Msg}>

					{Msg}

				</div>
			</div>
		</div>
	);
}

export default index;
