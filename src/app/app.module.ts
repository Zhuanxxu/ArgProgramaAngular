import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderComponent } from './componentes/header/header.component';
import { PortadaComponent } from './componentes/portada/portada.component';
import { AcercaComponent } from './componentes/acerca/acerca.component';
import { FormacionComponent } from './componentes/formacion/formacion.component';
import { SkillsComponent } from './componentes/skills/skills.component';
import { ProyectosComponent } from './componentes/proyectos/proyectos.component';
import { IniciarSesionComponent } from './componentes/iniciar-sesion/iniciar-sesion.component';
import { PortfolioComponent } from './componentes/portfolio/portfolio.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { PortfolioService } from './servicios/portfolio.service';
import { InterceptorService } from './servicios/interceptor.service';
import { CrearCuentaComponent } from './componentes/crear-cuenta/crear-cuenta.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AcercaModalComponent } from './componentes/modals/acerca-modal/acerca-modal.component';
import { FileUploadComponent } from './componentes/file-upload/file-upload.component';
import { PortadaModalComponent } from './componentes/modals/portada-modal/portada-modal.component';
import { FormacionModalComponent } from './componentes/modals/formacion-modal/formacion-modal.component';
import { SkillModalsComponent } from './componentes/modals/skill-modals/skill-modals.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PortadaComponent,
    AcercaComponent,
    FormacionComponent,
    SkillsComponent,
    ProyectosComponent,
    IniciarSesionComponent,
    PortfolioComponent,
    CrearCuentaComponent,
    AcercaModalComponent,
    FileUploadComponent,
    PortadaModalComponent,
    FormacionModalComponent,
    SkillModalsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule,
    FormsModule
  ],
  providers: [PortfolioService,
  {provide:HTTP_INTERCEPTORS, useClass: InterceptorService, multi:true}
],
  bootstrap: [AppComponent]
})
export class AppModule { }
