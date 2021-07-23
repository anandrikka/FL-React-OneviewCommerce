import { Action } from "redux";
import { KeyValuePair } from "../../types";

export interface PayloadAction extends Action {
  payload: KeyValuePair
}

