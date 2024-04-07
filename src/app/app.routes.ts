import { Routes } from '@angular/router';
import { HomeComponent } from './components/main-pages/home/home.component';
import { InputComponent } from './components/main-pages/input/input.component';
import { NotFoundComponent } from './components/main-pages/not-found/not-found.component';

export const routes: Routes = [
    {path: "", title: "Home page", component: HomeComponent},
    {path: "home", title: "Home page", component: HomeComponent},
    {path: "input", title: "Input page", component: InputComponent},
    {path: "**", title: "Not Found", component: NotFoundComponent},
];
