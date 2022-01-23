/* eslint-disable no-else-return */
import React from "react";

import Sent from "../SentMsg";
import Received from "../ReceivedMsg";

import Styles from "./Style.module.css";

function index({ Person }) {
	if (Person.Profile === undefined) {
		return (
			<div />
		);
	} else {
		const image = "images/".concat(Person.Profile);
		return (
			<div className={Styles.container}>

				<div className={Styles.top}>

					<img src={image} className={Styles.Profile} alt="Profile" />

					<div className={Styles.Name}>
						{Person.Name}
					</div>

				</div>

				<div className={Styles.Msges}>

					{/* Message will be in reverse order */}

					<Sent
						// This will be the recent message
						Msg="123"
					/>

					<Received
						Msg="abcd efgh ijkl mnop qrst uvw xyz abcd efgh ijk lmn opq rst uvw xyz hello abcd efgh ijkl mnop qrst uvw xyz"
					/>

					<Sent
						Msg="1234 56 789 54 654 234 6357 657 652 4356 74321 354 32 134 321 354 321 354 321 34 3"
					/>

					<Received
						Msg="abcd efgh ijkl mnop qrst uvw xyz abcd efgh ijk lmn opq rst uvw xyz hello abcd efgh ijkl mnop qrst uvw xyz"
					/>

					<Sent
						Msg="1234"
					/>

					<Received
						Msg="abcd"
					/>

					<Sent
						Msg="1234"
					/>

					<Received
						Msg="abcd"
					/>

					<Sent
						Msg="1234"
					/>

					<Received
						Msg="abcd"
					/>

					<Received
						Msg="abcd"
					/>

					<Sent
						Msg="1234"
					/>

					<Received
						Msg="abcd"
					/>

					<Sent
						Msg="1234"
					/>

					<Received
						Msg="abcd"
					/>

					<Sent
						Msg="1234"
					/>

					<Received
						Msg="abcd"
					/>

					<Sent
						Msg="1234"
					/>

					<Received
						// This will be the first message
						Msg="abcd"
					/>

				</div>

			</div>
		);
	}
}

export default index;
