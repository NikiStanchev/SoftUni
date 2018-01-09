import { Routes } from '@angular/router';
import { GalleryComponent } from './app/components/gallery/gallery.component';
import { RecipeDetailsComponent } from './app/components/recipe-details/recipe-details.component';
import { RecipeEditComponent } from './app/components/recipe-edit/recipe-edit.component';
import { LoginComponent } from './app/components/login/login.component';
import { RegisterComponent } from './app/components/register/register.component';
import { UploadComponent } from './app/components/upload/upload.component';
import { AuthenticationGuard } from './app/services/authenticationGuard.service';

export const appRoutes: Routes = [
    { path: 'gallery', component: GalleryComponent},
    { path: 'upload', component: UploadComponent, canActivate: [AuthenticationGuard]},
    { path: 'recipe/:id', component: RecipeDetailsComponent, canActivate: [AuthenticationGuard]},
    { path: 'recipe-edit/:id', component: RecipeEditComponent, canActivate: [AuthenticationGuard]},
    { path: '', redirectTo: '/gallery', pathMatch: 'full'},
    { path: 'login', component: LoginComponent},
    { path: 'register', component: RegisterComponent}
];