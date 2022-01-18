import React from "react";

import Styles from "./Style.module.css";

function index() {
	return (
		<div className={Styles.container}>
			<div className={Styles.arrows1}>
				<i id={Styles.arrow1} className="fas fa-2x fa-chevron-left" />
			</div>
			<div className={Styles.cardscroll}>
				<div className={Styles.card}>
					<img src="images/logo192.png" className={Styles.profile} alt="img" />
					<div className={Styles.Name}>
						ABCD
					</div>
					<div className={Styles.description}>
						I am ABCD
					</div>
				</div>
				<div className={Styles.card}>
					<img src="images/logo192.png" className={Styles.profile} alt="img" />
					<div className={Styles.Name}>
						EFGH
					</div>
					<div className={Styles.description}>
						Hi and hello
					</div>
				</div>
				<div className={Styles.card}>
					<img src="images/logo192.png" className={Styles.profile} alt="img" />
					<div className={Styles.Name}>
						IJKL
					</div>
					<div className={Styles.description}>
						Hi and hello
					</div>
				</div>
			</div>
			<div className={Styles.arrows2}>
				<i id={Styles.arrow2} className="fas fa-2x fa-chevron-right" />
			</div>
		</div>
	);
}

export default index;
