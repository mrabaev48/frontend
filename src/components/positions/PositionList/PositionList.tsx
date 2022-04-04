import React, {FC} from "react";
import classes from './PositionList.module.scss';
import {Position} from "../../../models/Position";
import PositionItem from "../PositionItem/PositionItem";

export interface IPositionListProps {
    positions: Position[];
}

const PositionList:FC<IPositionListProps> = ({
                                                 positions = []
                                             }) => {

    if (!positions.length) {
        return (
            <h1 className={classes.noItems}>There are no open positions</h1>
        )
    }

    return (
        <ul className={classes.positions}>
            {
                positions.map(position => <PositionItem key={position.id} item={position} />)
            }
        </ul>
    )
}

export default PositionList;