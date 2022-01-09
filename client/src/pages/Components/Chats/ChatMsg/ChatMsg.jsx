/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import Styles from "./Style.module.css";
import Sent from '../SentMessage/SentMessage';
import Received from '../ReceivedMessage/ReceivedMessage';

function ChatMsg({ Person }) {
    // const image = "images/".concat(Profile);
    const image = "images/".concat(Person.Profile);
    const [Persondetail, setPersondetail] = useState();
    useEffect(() => {
        if (Person.Name === undefined) {
            setPersondetail(false);
        } else {
            setPersondetail(true);
        }
    }, [Person]);
    const Name = Person.Name;
    return (
<div className={Styles.container}>
    {Persondetail ? (
        <div className={Styles.fit}>
            <div className={Styles.top}>
                <div className={Styles.img}>
                    <img className={Styles.image} src={image} alt="profile" />
                </div>
                <div className={Styles.Name}>
                    {Name}
                </div>
            </div>

            <div className={Styles.Msges}>
                <Sent
                    Msg="Hi I really Like you"
                />
                <Sent
                    Msg="Hi I really Like you"
                />
                <Sent
                    Msg="Hi I really Like you"
                />
                <Received
                    Msg="Is it?"
                />
                <Sent
                    Msg="Where can we meet?"
                />
                <Received
                    Msg="MIG at 9:30"
                />
                <Received
                    Msg="Or Orion Backside"
                />
                <Sent
                    Msg="Anywhere which is dark is fine"
                />
                <Received
                    Msg="Really!"
                />
                <Sent
                    Msg="Yeah"
                />
                <Received
                    Msg="Let's meet there"
                />
                <Received
                    Msg="Lets have fun"
                />
                <Received
                    Msg="I Love You"
                />
                <Sent
                    Msg="I Love You"
                />
                <Sent
                    Msg="I Love You"
                />
                <Sent
                    Msg="I Love You"
                />
                <Sent
                    Msg="I Love You"
                />
                <Sent
                    Msg="I Love You"
                />
                <Sent
                    Msg="I Love You"
                />
            </div>
        </div>
    )
    : (
    <div className="d-none">
        Chats
    </div>
    )}
</div>
    );
}

export default ChatMsg;