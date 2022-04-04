import {FC} from "react";
import classes from './PositionLocation.module.scss';

const PositionLocation:FC = ({ children }) => {
    return (
        <p className={classes.location}>
            {children}
        </p>
    )
}

export default PositionLocation;