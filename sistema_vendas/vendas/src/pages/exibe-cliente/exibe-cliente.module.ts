import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ExibeClientePage } from './exibe-cliente';

@NgModule({
  declarations: [
    ExibeClientePage,
  ],
  imports: [
    IonicPageModule.forChild(ExibeClientePage),
  ],
})
export class ExibeClientePageModule {}
