import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUser } from "../../../Model/user.interface";
import { UserState } from "../../types";
import { fetchUsersAsync } from "./user.actions";


const initialUserState: UserState = {
   users: [],
   isLoading: false,
   error: '',
}

export const userSlice = createSlice({
   name: 'user',
   initialState: initialUserState,
   reducers: {},
   extraReducers: {
      [fetchUsersAsync.fulfilled.type]: (state, action: PayloadAction<IUser[]>) => {
         state.isLoading = false
         state.error = ''
         state.users = action.payload
      },
      [fetchUsersAsync.pending.type]: (state) => {
         state.isLoading = true
      },
      [fetchUsersAsync.rejected.type]: (state, action: PayloadAction<string>) => {
         state.isLoading = false
         state.error = action.payload
      }
   }
})

export const userReducer = userSlice.reducer

