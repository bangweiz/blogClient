import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule,HTTP_INTERCEPTORS } from "@angular/common/http";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";

import { AppRoutingModule } from "./app-routing/app-routing.module";

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { AboutComponent } from './components/visitor/about/about.component';
import { LoginComponent } from './components/admin/login/login.component';
import { HomeComponent } from './components/visitor/home/home.component';
import { AdminComponent } from './components/admin/admin/admin.component';
import { FrontComponent } from './components/visitor/front/front.component';
import { appReducer } from "./reducers/index.reducer";
import { AuthEffects } from "./effects/auth.effects";
import { SpinnerComponent } from './components/modules/spinner/spinner.component';
import { SidebarComponent } from './components/layout/sidebar/sidebar.component';
import { AdminHeaderComponent } from './components/layout/admin-header/admin-header.component';
import { ListComponent } from './components/modules/list/list.component';
import { SingleComponent } from './components/modules/single/single.component';
import { DashboardComponent } from './components/admin/dashboard/dashboard.component';
import { CategoryComponent } from './components/admin/category/category.component';
import { CategoryEffects } from "./effects/category.effects";
import { AuthInterceptor } from "./interceptors/auth-interceptor";
import { NewPostComponent } from './components/admin/new-post/new-post.component';
import { PostComponent } from './components/admin/post/post.component';
import { PostsEffects } from "./effects/posts.effects";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    LoginComponent,
    HomeComponent,
    AdminComponent,
    FrontComponent,
    SpinnerComponent,
    SidebarComponent,
    AdminHeaderComponent,
    ListComponent,
    SingleComponent,
    DashboardComponent,
    CategoryComponent,
    NewPostComponent,
    PostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    StoreModule.forRoot(appReducer),
    StoreDevtoolsModule.instrument({ logOnly: false }),
    EffectsModule.forRoot([AuthEffects, CategoryEffects, PostsEffects])
  ],
  providers: [
    [
      { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
    ]
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
