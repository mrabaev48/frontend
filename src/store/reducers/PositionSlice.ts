import {Position} from "../../models/Position";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {fetchPositionById, fetchPositions} from "./PositionActionCreator";

interface PositionState {
    positions: Position[];
    isLoading: boolean;
    error: string;
    selectedPosition?: Position;
}

const initialState: PositionState = {
    positions: [],
    isLoading: false,
    error: '',
    selectedPosition: undefined,
}

export const positionSlice = createSlice({
    name: 'positionSlice',
    initialState,
    reducers: {
    },
    extraReducers: {
        [fetchPositions.fulfilled.type]: (state, action: PayloadAction<Position[]>) => {
            state.isLoading = false;
            state.error = '';
            state.positions = action.payload;
        },
        [fetchPositions.pending.type]: (state) => {
            state.isLoading = true;
        },
        [fetchPositions.rejected.type]: (state, action: PayloadAction<string>) => {
            state.isLoading = false;
            state.error = action.payload;
        },
        [fetchPositionById.fulfilled.type]: (state, action: PayloadAction<Position>) => {
            console.log('from slice')
            state.isLoading = false;
            state.error = '';
            state.selectedPosition = action.payload;
        },
        [fetchPositionById.pending.type]: (state) => {
            state.isLoading = true;
        },
        [fetchPositionById.rejected.type]: (state, action: PayloadAction<string>) => {
            state.isLoading = false;
            state.error = action.payload;
        }
    }
});

export default positionSlice.reducer;