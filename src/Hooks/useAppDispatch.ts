import { useDispatch } from "react-redux";
import { AppDispatch } from "../Store/types";

export const useAppDispatch = () => useDispatch<AppDispatch>()