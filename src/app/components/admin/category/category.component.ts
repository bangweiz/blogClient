import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from "@angular/forms";
import { Category } from "../../../models/category";
import { Store } from "@ngrx/store";
import { AppState } from "../../../reducers/index.reducer";
import {DeleteCategory, FetchCategories, NewCategory} from "../../../actions/category.action";
import {take} from "rxjs/operators";

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
  categoryForm: FormGroup
  categories: Array<Category> = []

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.categoryForm = new FormGroup({
      title: new FormControl('')
    })
    this.store.select('categories').pipe(take(1)).subscribe((categories: Array<Category>) => {
      if (categories.length === 0) {
        this.store.dispatch(new FetchCategories())
      }
    })
    this.store.select('categories').subscribe((categories: Array<Category>) => {
      this.categories = categories
    })
  }

  onSubmit = (): void => {
    this.store.dispatch(new NewCategory(this.categoryForm.value.title))
  }

  onDelete = (id: number) => {
    this.store.dispatch(new DeleteCategory(id))
  }
}
