import { Category } from "../models/category";
import {
  CategoryActionTypes,
  DeleteCategoryHandler,
  FetchCategoriesHandler,
  NewCategoryHandler
} from "../actions/category.action";

const initialState: Array<Category> = []

type CategoryActions = FetchCategoriesHandler | NewCategoryHandler | DeleteCategoryHandler

export function categoryReducer(state = initialState, action: CategoryActions) {
  switch (action.type) {
    case CategoryActionTypes.FETCH_CATEGORIES_HANDLER: return [...action.payload]
    case CategoryActionTypes.NEW_CATEGORY_HANDLER: return [...state, action.payload]
    case CategoryActionTypes.DELETE_CATEGORY_HANDLER: {
      return state.filter(c => {
        return c.id !== action.payload
      })
    }
    default: return [...state]
  }
}
