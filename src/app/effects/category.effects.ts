import { Injectable } from "@angular/core"
import { Actions, ofType, createEffect } from "@ngrx/effects"
import { EMPTY } from "rxjs"
import { map, switchMap, catchError } from "rxjs/operators"

import {
  CategoryActionTypes, DeleteCategory, DeleteCategoryHandler,
  FetchCategories,
  FetchCategoriesHandler,
  NewCategory,
  NewCategoryHandler
} from "../actions/category.action";
import { CategoryService } from "../services/category.service";

@Injectable()
export class CategoryEffects {
  fetchCategories$ = createEffect(() => this.actions$.pipe(
    ofType(CategoryActionTypes.FETCH_CATEGORIES),
    switchMap((action: FetchCategories) => {
      return this.categoryService.fetchCategories().pipe(
        map(data => new FetchCategoriesHandler(data.data)),
        catchError(err => EMPTY)
      )
    })
  ))

  newCategory$ = createEffect(() => this.actions$.pipe(
    ofType(CategoryActionTypes.NEW_CATEGORY),
    switchMap((action: NewCategory) => {
      return this.categoryService.newCategory(action.payload).pipe(
        map(data => new NewCategoryHandler(data.data)),
        catchError(err => EMPTY)
      )
    })
  ))

  deleteCategory$ = createEffect(() => this.actions$.pipe(
    ofType(CategoryActionTypes.DELETE_CATEGORY),
    switchMap((action: DeleteCategory) => {
      return this.categoryService.deleteCategory(action.payload).pipe(
        map(data => new DeleteCategoryHandler(parseInt(data.data.id))),
        catchError(err => EMPTY)
      )
    })
  ))

  constructor(private actions$: Actions, private categoryService: CategoryService) {}
}
