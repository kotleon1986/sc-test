import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ResponseInterceptor } from '../core/interceptors/response.interceptor';

import { MatSnackBarModule } from '@angular/material/snack-bar'; 
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';


const modules = [
  CommonModule,
  HttpClientModule,
  ReactiveFormsModule,
  MatButtonModule,
  MatSnackBarModule,
  MatInputModule,
  MatCardModule,
  MatDividerModule
];

@NgModule({
  declarations: [],
  imports: [...modules],
  exports: [...modules],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ResponseInterceptor,
      multi: true,
    }
  ]
})
export class SharedModule { }
