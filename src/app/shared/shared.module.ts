import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MaterialModule } from './material.module';
import { NgModule } from '@angular/core';

import { SidenavComponent } from './components';

@NgModule({
  declarations: [SidenavComponent],
  imports: [CommonModule, FormsModule, MaterialModule, RouterModule],
  exports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    RouterModule,
    SidenavComponent
  ]
})
export class SharedModule {}
