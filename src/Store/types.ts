import { IUser } from "../Model/user.interface";
import { rootReducer } from "./reducers/root.reducer";
import { setupStore } from "./store";

export type StoreType = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']

export type UserState = {
   users: IUser[]
   isLoading: boolean
   error: string
}
