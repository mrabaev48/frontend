import React, {FC, useEffect} from "react";
import PositionList from "../../components/positions/PositionList/PositionList";
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {fetchPositions} from "../../store/reducers/PositionActionCreator";

const PositionsPage:FC = () => {
    const dispatch = useAppDispatch();
    const {positions, isLoading, error} = useAppSelector(state => state.positionReducer);

    useEffect(() => {
        console.log('use effect for all')
        dispatch(fetchPositions());
    }, []);

    return (
        <>
            {isLoading && <h1>Loading...</h1>}
            {error && <h1>Something went wrong: {error}</h1>}
            <PositionList
                positions={positions}
            />
        </>
    )
}

export default PositionsPage;