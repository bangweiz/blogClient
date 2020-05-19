import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from "@angular/router";
import { AboutComponent } from "../components/visitor/about/about.component";
import { LoginComponent } from "../components/admin/login/login.component";
import { HomeComponent } from "../components/visitor/home/home.component";
import { AdminComponent } from "../components/admin/admin/admin.component";
import { FrontComponent } from "../components/visitor/front/front.component";
import { ListComponent } from "../components/modules/list/list.component";
import { AuthGuard } from "../guards/auth/auth.guard";
import { SingleComponent } from "../components/modules/single/single.component";
import { CategoryComponent } from "../components/admin/category/category.component";
import { DashboardComponent } from "../components/admin/dashboard/dashboard.component";
import { PostComponent } from "../components/admin/post/post.component";
import { NewPostComponent } from "../components/admin/new-post/new-post.component";

const childRoutes: Routes = [
  { path: 'about', component: AboutComponent, pathMatch: 'full' },
  { path: 'login', component: LoginComponent, pathMatch: 'full' },
  { path: 'posts', component: ListComponent, pathMatch: 'full' },
  { path: 'posts/:id', component: SingleComponent, pathMatch: 'full' },
  { path: '', component: FrontComponent }
]

const adminRoutes: Routes = [
  { path: 'categories', component: CategoryComponent, pathMatch: 'full', canActivate: [AuthGuard] },
  { path: 'dashboard', component: DashboardComponent, pathMatch: 'full', canActivate: [AuthGuard] },
  { path: 'posts/all', component: PostComponent, pathMatch: 'full', canActivate: [AuthGuard] },
  { path: 'posts/new', component: NewPostComponent, pathMatch: 'full', canActivate: [AuthGuard] },
  { path: 'posts', redirectTo: 'posts/all' }
]

const appRoutes: Routes = [
  { path: 'login', component: LoginComponent, pathMatch: 'full' },
  { path: 'admin', component: AdminComponent, children: adminRoutes, canActivate: [AuthGuard] },
  { path: '', component: HomeComponent, children: childRoutes },
]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
