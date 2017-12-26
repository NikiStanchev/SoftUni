import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './main/submodules/home/home.component';
import { BlueComponent } from './main/submodules/blue/blue.component';
import { GreenComponent } from './main/submodules/green/green.component';
import { OrangeComponent } from './main/submodules/orange/orange.component';
import { RedComponent } from './main/submodules/red/red.component';
import { AttackComponent } from './main/submodules/attack/attack.component';
import { ErrorComponent } from './main/submodules/error/error.component';

import { AuthGuard } from './services/auth.guard';
import { TargetGuardGuard } from './services/target-guard.guard';

const routes: Routes = [
  {path:'', canActivate:[AuthGuard], pathMatch:'full', component:HomeComponent},
  {path:'attack', canActivate:[TargetGuardGuard], component:AttackComponent},
  {path:'blue', canActivate:[TargetGuardGuard], component:BlueComponent},
  {path:'green', canActivate:[TargetGuardGuard], component:GreenComponent},
  {path:'orange', canActivate:[TargetGuardGuard], component:OrangeComponent},
  {path:'red', canActivate:[TargetGuardGuard], component:RedComponent},
  {path:'error', component:ErrorComponent} 
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
