import {FC} from "react";
import classes from './PositionDescriptionItem.module.scss';

const PositionDescriptionItem:FC = ({children}) => {
    return (
        <div className={classes.description}>
            {children}
        </div>
    )
}

export default PositionDescriptionItem;