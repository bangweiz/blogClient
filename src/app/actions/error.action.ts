import { Action } from "@ngrx/store"

export enum ErrorActionTypes {
  CLEAR_ERROR = 'CLEAR_ERROR'
}

export class ClearError implements Action {
  readonly type = ErrorActionTypes.CLEAR_ERROR
  constructor() {}
}
