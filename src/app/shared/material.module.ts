import { NgModule } from '@angular/core';
import {MatButtonModule, MatIconModule, MatToolbarModule, MatCardModule, MatGridListModule} from '@angular/material';

@NgModule({
  imports: [
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatCardModule,
    MatGridListModule
  ],
  exports: [
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatCardModule,
    MatGridListModule,
  ],
})
export class MaterialModule { }
