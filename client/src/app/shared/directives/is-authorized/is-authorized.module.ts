import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IsAuthorizedDirective } from './is-authorized.directive';



@NgModule({
  declarations: [IsAuthorizedDirective],
  imports: [
    CommonModule
  ],
  exports: [
    IsAuthorizedDirective
  ]
})
export class IsAuthorizedModule { }
