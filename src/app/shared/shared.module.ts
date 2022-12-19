import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IsLoggedDirective } from './directives/is-logged.directive';
import { DecodificasessoPipe } from './pipes/decodificasesso.pipe';



@NgModule({
  declarations: [
    IsLoggedDirective,
    DecodificasessoPipe
  ],
  imports: [
    CommonModule
  ],
  exports:[
    IsLoggedDirective,
    DecodificasessoPipe
  ]
})
export class SharedModule { }
