import React, {FC, useEffect} from "react";
import {useParams} from "react-router-dom";
import PositionHeading from "../../components/positions/PositionHeading/PositionHeading";
import PositionLocation from "../../components/positions/PositionLocation/PositionLocation";
import PositionDescription from "../../components/positions/PositionDescription/PositionDescription";
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {fetchPositionById} from "../../store/reducers/PositionActionCreator";

const PositionPage: FC = () => {
    const urlParams = useParams();
    const id = urlParams.positionId || 0;

    const dispatch = useAppDispatch();
    const {selectedPosition, isLoading, error} = useAppSelector(state => state.positionReducer);

    useEffect(() => {
        console.log('useEffect works')
        dispatch(fetchPositionById(+id));
    }, []);

    if (!selectedPosition) {
        return <h1>Loading...</h1>;
    }

    return (
        <>
            {isLoading && <h1>Loading...</h1>}
            {error && <h1>Something went wrong: {error}</h1>}
            <PositionHeading>{selectedPosition!.title}</PositionHeading>
            <PositionLocation>{selectedPosition!.location}</PositionLocation>
            <PositionDescription position={selectedPosition!}/>
        </>
    )
}

export default PositionPage;