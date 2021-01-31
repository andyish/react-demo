import { initialRecipeeState, RecipeeState } from "./ducks/recipees.duck";

export interface AppState {
  recipees: RecipeeState;
}

export const initialAppState: AppState = {
  recipees: initialRecipeeState,
}