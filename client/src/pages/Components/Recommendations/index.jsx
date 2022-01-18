import React from "react";

import Styles from "./Style.module.css";
import img from "../../../assets/images/logo192.png";

function index() {
	return (
		<div className={Styles.container}>

			<div className={Styles.arrows1}>
				<i id={Styles.arrow1} className="fas fa-2x fa-chevron-left" />
			</div>

			<div className={Styles.cardscroll}>

				<div className={Styles.card}>
					<div className={Styles.cardinner}>

						<div className={Styles.cardfront}>
							<img src={img} className={Styles.profile} alt="img" />
							<div className={Styles.Name}>
								ABCD
							</div>
							<div className={Styles.description}>
								I am ABCD
							</div>
						</div>

						<div className={Styles.cardback}>
							<div className={Styles.wordwrap}>
								123456789101112131415161718192021222324252627282930
							</div>
						</div>

					</div>
				</div>

				<div className={Styles.card}>
					<div className={Styles.cardinner}>

						<div className={Styles.cardfront}>
							<img src={img} className={Styles.profile} alt="img" />
							<div className={Styles.Name}>
								EFGH
							</div>
							<div className={Styles.description}>
								Hi and hello
							</div>
						</div>

						<div className={Styles.cardback}>
							<div className={Styles.wordwrap}>
								ABDCEFGHIJKLMNOPQRSTUVWXYZ
							</div>
						</div>

					</div>
				</div>

				<div className={Styles.card}>
					<div className={Styles.cardinner}>
						<div className={Styles.cardfront}>
							<img src={img} className={Styles.profile} alt="img" />
							<div className={Styles.Name}>
								IJKL
							</div>
							<div className={Styles.description}>
								Hi and hello
							</div>
						</div>
						<div className={Styles.cardback}>
							<div className={Styles.wordwrap}>
								Hello this is helloabcd 123
							</div>
						</div>
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
