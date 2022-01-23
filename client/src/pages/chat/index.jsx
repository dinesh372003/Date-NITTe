import React, { useState } from "react";

import Navbar from "../Components/Navbar";
import bg from "../../assets/images/bg.jpg";
import ChatList from "../Components/ChatComponents/ChatList";
import ChatRight from "../Components/ChatComponents/ChatRight";

import Styles from "./Style.module.css";

export const Chat = () => {
	const [Person, setPerson] = useState({});
	const changePerson = (value) => {
		setPerson(value);
	};
	return (
		<div className={Styles.bg} style={{ backgroundImage: `url(${bg})` }}>

			<Navbar />

			<div className={Styles.container}>
				<div className={Styles.content}>

					<div className={Styles.left}>

						<div className={Styles.top}>
							<div className={Styles.LeftTop}>
								Chats
							</div>
						</div>

						<div className={Styles.NameList}>

							<ChatList
								Name="Dinesh"
								LastMsg="Hello"
								Profile="logo192.png"
								changePerson={changePerson}
							/>

							<ChatList
								Name="Send"
								LastMsg="Hello"
								Profile="Send.png"
								changePerson={changePerson}
							/>

							<ChatList
								Name="Empty"
								LastMsg="Hello"
								changePerson={changePerson}
							/>

							<ChatList
								Name="Empty"
								LastMsg="Hello"
								changePerson={changePerson}
							/>

							<ChatList
								Name="Empty"
								LastMsg="Hello"
								changePerson={changePerson}
							/>

							<ChatList
								Name="Empty"
								LastMsg="Hello"
								changePerson={changePerson}
							/>

							<ChatList
								Name="Empty"
								LastMsg="Hello"
								changePerson={changePerson}
							/>

							<ChatList
								Name="Empty"
								LastMsg="Hello"
								changePerson={changePerson}
							/>

							<ChatList
								Name="Empty"
								LastMsg="Hello"
								changePerson={changePerson}
							/>

							<ChatList
								Name="Empty"
								LastMsg="Hello"
								changePerson={changePerson}
							/>

							<ChatList
								Name="Empty"
								LastMsg="Hello"
								changePerson={changePerson}
							/>

							<ChatList
								Name="Empty"
								LastMsg="Hello"
								changePerson={changePerson}
							/>

							<ChatList
								Name="Empty"
								LastMsg="Hello"
								changePerson={changePerson}
							/>

							<ChatList
								Name="Empty"
								LastMsg="Hello"
								changePerson={changePerson}
							/>

							<ChatList
								Name="Empty"
								LastMsg="Hello"
								changePerson={changePerson}
							/>

							<ChatList
								Name="Empty"
								LastMsg="Hello"
								changePerson={changePerson}
							/>

							<ChatList
								Name="Empty"
								LastMsg="Hello"
								changePerson={changePerson}
							/>

						</div>

					</div>

					<div className={Styles.right}>

						<ChatRight
							Person={Person}
						/>

					</div>

				</div>
			</div>
		</div>
	);
};

export default Chat;
