import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCategoriaComponent } from './pages/admin/add-categoria/add-categoria.component';
import { AddExamenComponent } from './pages/admin/add-examen/add-examen.component';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { ViewCategoriasComponent } from './pages/admin/view-categorias/view-categorias.component';
import { ViewExamenesComponent } from './pages/admin/view-examenes/view-examenes.component';
import { WelcomeComponent } from './pages/admin/welcome/welcome.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { SignupComponent } from './pages/signup/signup.component';
import { UserDashboardComponent } from './pages/user/user-dashboard/user-dashboard.component';
import { AdminGuard } from './services/admin.guard';
import { NormalGuard } from './services/normal.guard';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent,
    pathMatch:'full'
  },
  {
    path:'signup',
    component:SignupComponent,
    pathMatch:'full'
  },
  {
    path:'login',
    component:LoginComponent,
    pathMatch:'full'
  },
  {
    path:'admin',
    component:DashboardComponent,
    // pathMatch:'full',
    canActivate:[AdminGuard],
    children:[{
      path:'profile',
      component:ProfileComponent
    },
    {
      path: '',
      component : WelcomeComponent
    },
    {
      path:'categorias',
      component:ViewCategoriasComponent
    },
    {
      path:'add-categoria',
      component:AddCategoriaComponent
    },
    {
      path:'examenes',
      component:ViewExamenesComponent
    },
    {
      path:'add-examen',
      component:AddExamenComponent
    }
      
    ]
  },
  {
    path:'user-dashboard',
    component:UserDashboardComponent,
    pathMatch:'full',
    canActivate:[NormalGuard]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
