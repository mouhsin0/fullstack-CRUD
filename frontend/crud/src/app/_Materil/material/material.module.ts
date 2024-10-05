import { ModuleWithProviders, NgModule, Type } from '@angular/core';
import { CommonModule } from '@angular/common';

// import module of angular material 
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatTableModule} from '@angular/material/table';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatDialogModule} from '@angular/material/dialog';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';

const MaterialComponent: any[] | Type<any> | ModuleWithProviders<{}> = [

  MatButtonModule, MatFormFieldModule, MatIconModule, MatInputModule,
  MatSnackBarModule, MatTableModule, MatToolbarModule,MatDialogModule,
  MatSlideToggleModule

]



@NgModule({
  declarations: [],
  imports: [
    CommonModule, MaterialComponent
  ],

  exports: [MaterialComponent]
})
export class MaterialModule { }
