import React from 'react';
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';
import CardContent from '@material-ui/core/CardContent';
import Navbars from '../Components/Navbar/Navbars';
import Styles from "./Style.module.css";
import Contents from "../Components/Contents/Contents";
import Recommendations from '../Components/Recommendations/Recommendations';

export const home = () => {
    const content = "Contents";
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
    return (
        <div>
            <div style={{ position: "fixed", width: "100%" }}>
                <Navbars />
            </div>
            <div className={Styles.row}>
                {/* <img src={bgimg} alt="bgimg" /> */}
                <div className={Styles.column1} />
                <div className={Styles.column2}>
                <Card className={classes.root} variant="outlined">
                <CardContent>

                    {content}
                    <Contents />
                    <Contents />
                    <Contents />
                    <Contents />
                </CardContent>
                </Card>
                </div>
                <div className={Styles.column3}>
                    <Recommendations />
                </div>
                <div className={Styles.column4} />
            </div>
        </div>
    );
};