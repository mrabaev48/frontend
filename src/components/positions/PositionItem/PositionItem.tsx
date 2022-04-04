import React, {FC} from "react";
import classes from './PositionItem.module.scss';
import {Position} from "../../../models/Position";

export interface IPositionItem {
    item: Position
}

const PositionItem:FC<IPositionItem> = ({
    item
                                        }) => {
    return (
        <li className={classes.item}>
            <div className={classes.detailsBlock}>
                <h2 className={classes.title}>{item.title}</h2>
                <p className={classes.location}>
                    {item.location}
                </p>
            </div>
            <div className={classes.showMoreBlock}>
                <button>
                    Show more
                </button>
            </div>
        </li>
    )
}

export default PositionItem;