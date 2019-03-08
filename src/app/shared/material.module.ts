import { NgModule } from '@angular/core';
import {MatButtonModule, MatIconModule, MatToolbarModule, MatCardModule, MatGridListModule, MatInputModule, MatSidenavModule, MatListModule} from '@angular/material';

@NgModule({
  imports: [
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatCardModule,
    MatGridListModule,
    MatInputModule,
    MatSidenavModule,
    MatListModule
  ],
  exports: [
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatCardModule,
    MatGridListModule,
    MatInputModule,
    MatSidenavModule,
    MatListModule
  ],
})
export class MaterialModule { }
