import { Routes } from '@angular/router';
import { LoginComponent } from './login/login';
import { RecuperarContrasenaComponent } from './recuperar-contrasena/recuperar-contrasena';
import { RegistroComponent } from './registro/registro';
import { Home } from './home/home'; 
import { Perfil } from './perfil/perfil';
import { Datosm2 } from './datosm2/datosm2';    
import { Pdfguardados } from './pdfguardados/pdfguardados';

export const routes: Routes = [
    { path: '', component: LoginComponent },
    { path: 'login', component: LoginComponent },
    { path: 'registro', component: RegistroComponent },
    { path: 'recuperar-contrasena', component: RecuperarContrasenaComponent },
    { path: 'home', component: Home },
    { path: 'perfil', component: Perfil},
    { path: 'datosm2', component: Datosm2},
    { path: 'pdfguardados', component: Pdfguardados}
];

