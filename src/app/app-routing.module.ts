import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearCuentaComponent } from './componentes/crear-cuenta/crear-cuenta.component';
import { IniciarSesionComponent } from './componentes/iniciar-sesion/iniciar-sesion.component';
import { PortfolioComponent } from './componentes/portfolio/portfolio.component';
import { GuardGuard } from './servicios/guard.guard';

const routes: Routes = [
  {path: 'portfolio', component:PortfolioComponent, canActivate:[GuardGuard]},
  {path: 'iniciar-sesion', component:IniciarSesionComponent},
  {path: 'crear-cuenta', component:CrearCuentaComponent},
  {path:'',redirectTo:'iniciar-sesion',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }