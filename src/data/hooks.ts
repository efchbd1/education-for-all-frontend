import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "data/redux/store";

/**
 * Custom hook to dispatch Redux actions with type safety.
 * Returns the typed version of `useDispatch`.
 */
export const useAppDispatch = () => useDispatch<AppDispatch>();

/**
 * Custom hook to access Redux state with type safety.
 * Returns the typed version of `useSelector`.
 */
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
