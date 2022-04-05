import axios from "axios";
import {Position} from "../../models/Position";
import {createAsyncThunk} from "@reduxjs/toolkit";
import {Exception} from "sass";

const BASE_API_URL = 'http://localhost:7000';

export const fetchPositions = createAsyncThunk(
    'positions/fetchAll',
    async (_, thunkAPI) => {
        try {
            const response = await axios.get<Position[]>(`${BASE_API_URL}/position`);
            return response.data;
        } catch (e) {
            return thunkAPI.rejectWithValue((e as Exception).message);
        }
    }
);

export const fetchPositionById = createAsyncThunk(
    'positions/fetchById',
    async (positionId: number, thunkAPI) => {
        try {
            console.log("ID: ", positionId)
            const response = await axios.get<Position>(`${BASE_API_URL}/position/${positionId}`);
            return response.data;
        } catch (e) {
            return thunkAPI.rejectWithValue((e as Exception).message);
        }
    }
)