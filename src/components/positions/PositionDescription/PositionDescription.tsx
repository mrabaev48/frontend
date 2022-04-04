import {FC} from "react";
import classes from './PositionDescription.module.scss';

const PositionDescription:FC = ({children}) => {
    return (
        <div className={classes.description}>
            {children}
        </div>
    )
}

export default PositionDescription;