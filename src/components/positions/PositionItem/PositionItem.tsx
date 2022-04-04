import React, {FC} from "react";
import classes from './PositionItem.module.scss';
import {Position} from "../../../models/Position";
import {Link, NavLink} from "react-router-dom";
import PositionHeading from "../PositionHeading/PositionHeading";
import PositionLocation from "../PositionLocation/PositionLocation";
import NavigationButton from "../../UI/NavigationButton";

export interface IPositionItem {
    item: Position
}

const PositionItem:FC<IPositionItem> = ({
    item
                                        }) => {
    return (
        <li className={classes.item}>
            <div className={classes.detailsBlock}>
                <PositionHeading>{item.title}</PositionHeading>
                <PositionLocation>
                    {item.location}
                </PositionLocation>
            </div>
            <div className={classes.showMoreBlock}>
                <NavigationButton to={`/${item.id}`}>
                    Show more
                </NavigationButton>
            </div>
        </li>
    )
}

export default PositionItem;