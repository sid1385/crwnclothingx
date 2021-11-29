import { createSelector } from "reselect";

const user = (state) => state.user;

export const userSelector = createSelector(user, (user) => user.currentUser);
