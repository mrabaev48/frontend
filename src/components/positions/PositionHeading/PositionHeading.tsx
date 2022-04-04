import React, {FC} from "react";
import classes from './PositionHeading.module.scss';

const PositionHeading:FC = ({ children }) => {
    return (
        <h2 className={classes.title}>{children}</h2>
    )
}

export default PositionHeading;