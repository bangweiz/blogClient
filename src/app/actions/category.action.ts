import { Action } from "@ngrx/store";

import { Category } from "../models/category";

export enum CategoryActionTypes {
  FETCH_CATEGORIES = 'FETCH_CATEGORIES',
  FETCH_CATEGORIES_HANDLER = 'FETCH_CATEGORY_HANDLER',
  NEW_CATEGORY = 'NEW_CATEGORY',
  NEW_CATEGORY_HANDLER = 'NEW_CATEGORY_HANDLER',
  DELETE_CATEGORY = 'DELETE_CATEGORY',
  DELETE_CATEGORY_HANDLER = 'DELETE_CATEGORY_HANDLER'
}

export class NewCategory implements Action {
  readonly type = CategoryActionTypes.NEW_CATEGORY
  constructor(public payload: string) {}
}

export class NewCategoryHandler implements Action {
  readonly type = CategoryActionTypes.NEW_CATEGORY_HANDLER
  constructor(public payload: Category) {}
}

export class FetchCategories implements Action {
  readonly type = CategoryActionTypes.FETCH_CATEGORIES
  constructor() {}
}

export class FetchCategoriesHandler implements Action {
  readonly type = CategoryActionTypes.FETCH_CATEGORIES_HANDLER
  constructor(public payload: Array<Category>) {}
}

export class DeleteCategory implements Action {
  readonly type = CategoryActionTypes.DELETE_CATEGORY
  constructor(public payload: number) {
  }
}

export class DeleteCategoryHandler implements Action {
  readonly type = CategoryActionTypes.DELETE_CATEGORY_HANDLER
  constructor(public payload: number) {
  }
}
