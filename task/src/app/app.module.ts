import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { Routes,RouterModule } from '@angular/router';
import { ErrorComponent } from './error/error.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ChildAComponent } from './child-a/child-a.component';
import { ChildBComponent } from './child-b/child-b.component';
import { PersonalComponent } from './personal/personal.component';
import { GrandchildAComponent } from './grandchild-a/grandchild-a.component';
import { GrandChildBComponent } from './grand-child-b/grand-child-b.component';
import { GrandchildA2Component } from './grandchild-a2/grandchild-a2.component';
import { GrandChildB2Component } from './grand-child-b2/grand-child-b2.component';

const appRoutes:Routes=[
{path:'',redirectTo:'Home',pathMatch: 'full'},
{path:'Home',component:HomeComponent},
{
  path:'About',component:AboutComponent
},
{path:'child-a',component:ChildAComponent,

  children:[
    {
      path: 'grandchild-a', // child route path
      component: GrandchildAComponent // child route component that the router renders
    }
  ]
},
{path:'child-b',component:ChildBComponent,
children:[{
  path:'grand-child-b',
  component:GrandChildBComponent
}]
},
{path:'Contact',component:ContactComponent},
{path:'Personal',component:PersonalComponent},
{path:'**',component:ErrorComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    ErrorComponent,
    SidebarComponent,
    ChildAComponent,
    ChildBComponent,
    PersonalComponent,
    GrandchildAComponent,
    GrandChildBComponent,
    GrandchildA2Component,
    GrandChildB2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
