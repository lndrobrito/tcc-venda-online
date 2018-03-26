import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EditaClientePage } from './edita-cliente';

@NgModule({
  declarations: [
    EditaClientePage,
  ],
  imports: [
    IonicPageModule.forChild(EditaClientePage),
  ],
})
export class EditaClientePageModule {}
