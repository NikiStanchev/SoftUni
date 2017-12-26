import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { NavbarComponent } from './navbar.component';

@NgModule({
    declarations: [NavbarComponent],
    imports: [
        RouterModule, 
        CommonModule
    ],
    exports: [NavbarComponent]
})

export class CoreModule{}