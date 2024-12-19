import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExpertiseComponent } from './expertise/expertise.component';
import { ContactComponent } from './contact/contact.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';


const routes: Routes = [
  {path:'',component: HeaderComponent,
    children:[
      {path:'expertise',component:ExpertiseComponent},
      {path:'footer',component:FooterComponent},
      {path:'contact',component:ContactComponent}
    ]
  }
];




@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
