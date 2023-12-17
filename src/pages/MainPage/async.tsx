import { lazy } from "react";

export const MainPageAsync = lazy(() => import('./index'));
export default MainPageAsync;