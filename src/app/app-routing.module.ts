import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ServicesComponent } from './pages/services/services.component';
import { BlogComponent } from './pages/blog/blog.component';
import { ErrorComponent } from './pages/error/error.component';
import { AboutComponent } from './pages/about/about.component';


const routes: Routes = [
  {path: "", component:HomeComponent},
  {path: "contact", component:ContactComponent},
  {path: "service", component:ServicesComponent},
  {path: "blog", component:BlogComponent},
  {path: "about", component:AboutComponent},
  {path: "**", component:ErrorComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
