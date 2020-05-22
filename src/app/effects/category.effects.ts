import { Injectable } from "@angular/core"
import {Actions, ofType, createEffect, Effect} from "@ngrx/effects"
import { EMPTY } from "rxjs"
import {map, switchMap, catchError, take} from "rxjs/operators"

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
  @Effect()
  fetchCategories$ = this.actions$.pipe(
    ofType(CategoryActionTypes.FETCH_CATEGORIES),
    switchMap((action: FetchCategories) => {
      return this.categoryService.fetchCategories().pipe(
        map(data => new FetchCategoriesHandler(data.data)),
        catchError(err => EMPTY)
      )
    }),
    take(1)
  )

  @Effect()
  newCategory$ = this.actions$.pipe(
    ofType(CategoryActionTypes.NEW_CATEGORY),
    switchMap((action: NewCategory) => {
      return this.categoryService.newCategory(action.payload).pipe(
        map(data => new NewCategoryHandler(data.data)),
        catchError(err => EMPTY)
      )
    })
  )

  @Effect()
  deleteCategory$ = this.actions$.pipe(
    ofType(CategoryActionTypes.DELETE_CATEGORY),
    switchMap((action: DeleteCategory) => {
      return this.categoryService.deleteCategory(action.payload).pipe(
        map(data => new DeleteCategoryHandler(parseInt(data.data.id))),
        catchError(err => EMPTY)
      )
    })
  )

  constructor(private actions$: Actions, private categoryService: CategoryService) {}
}
