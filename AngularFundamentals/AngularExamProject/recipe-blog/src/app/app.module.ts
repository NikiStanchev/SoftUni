import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { AppComponent } from './app.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { RecipeDetailsComponent } from './components/recipe-details/recipe-details.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { UploadComponent } from './components/upload/upload.component';
import { AuthenticationGuard } from './services/authenticationGuard.service';
import { AuthenticationService } from './services/authentication.service';
import { RecipeService } from './services/recipe.service';
import { UploadService } from './services/upload.service';

import { appRoutes } from '../routes';
import { environment } from '../environments/environment.prod';
import { RegisterComponent } from './components/register/register.component';

import { DateFormat } from './core/dateFormat.pipe';
import { CreatedBy } from './core/createdBy.pipe';
import { RecipeEditComponent } from './components/recipe-edit/recipe-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    GalleryComponent,
    RecipeDetailsComponent,
    NavbarComponent,
    LoginComponent,
    UploadComponent,
    RegisterComponent,
    DateFormat,
    CreatedBy,
    RecipeEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [
    AuthenticationGuard, 
    AuthenticationService, 
    RecipeService, 
    UploadService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
