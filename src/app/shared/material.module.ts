import { NgModule } from '@angular/core';
import {MatButtonModule, MatIconModule, MatToolbarModule, MatCardModule, MatGridListModule, MatInputModule} from '@angular/material';

@NgModule({
  imports: [
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatCardModule,
    MatGridListModule,
    MatInputModule
  ],
  exports: [
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatCardModule,
    MatGridListModule,
    MatInputModule
  ],
})
export class MaterialModule { }
