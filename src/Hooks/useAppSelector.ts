import { useSelector } from "react-redux";
import { TypedUseSelectorHook } from "react-redux";
import { StoreType } from "../Store/types";

export const useAppSelector: TypedUseSelectorHook<StoreType> = useSelector