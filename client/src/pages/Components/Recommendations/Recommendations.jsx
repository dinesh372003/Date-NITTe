/* eslint-disable arrow-body-style */
import React, { useState } from 'react';
// import { CSSTransitionGroup } from 'react-transition-group';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Styles from './Style.module.css';

function Recommendation() {
    const useStyles = makeStyles({
        root: {
          minWidth: 275,
        },
        bullet: {
          display: 'inline-block',
          margin: '0 2px',
          transform: 'scale(0.8)',
        },
        title: {
          fontSize: 14,
        },
        pos: {
          marginBottom: 12,
        },
      });
    const classes = useStyles();
    const Person = [
        {
            image: "images/".concat("send.png"),
            Name: "Dinesh",
            Tags: ["Dancer"],
            Info: "I am Professional in Dancing and also love Music. I am doing B.Tech in Production Department ",
        },
        {
            image: "images/".concat("114120074.jpg"),
            Name: "M.Dinesh",
            Tags: ["Swimmer", "Bowler"],
            Info: "I am Professional in Swimming and also love playing Cricket. I am doing B.Tech in Production Department ",
        },
    ];
    const [Number, setNumber] = useState(0);
    const changeNumber = () => {
        if (Number < Person.length - 1) {
            setNumber(Number + 1);
        }
    };
    return (
<Card className={classes.root} variant="outlined">
    <CardContent>
        <div className={Styles.container}>
            <div>
                <img className={Styles.image} src={Person[Number].image} alt="profile" />
            </div>
            <div className={Styles.Name}>
                { Person[Number].Name }
            </div>
            <div className="mt-3">
                Tags :
                {Person[Number].Tags.map((tag) => {
                    return (
                    <div className={Styles.Tags}>{tag}</div>
                    );
                })}
            </div>
            <div className={Styles.Info}>{Person[Number].Info}</div>
            <div className={Styles.Symbols}>
                <button type="button" onClick={changeNumber} className={Styles.Thumbs}>
                    <i className="far fa-2x fa-thumbs-up" />
                </button>
                <button type="button" onClick={changeNumber} className={Styles.Dropdown}>
                    <i className="fas fa-2x fa-chevron-circle-down" />
                </button>
            </div>
        </div>
    </CardContent>
</Card>
    );
}

export default Recommendation;