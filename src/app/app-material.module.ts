import { CommonModule } from '@angular/common';
import { MatButtonModule, MatCardModule, MatInputModule, MatProgressSpinnerModule, MatToolbarModule } from '@angular/material';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [CommonModule, MatToolbarModule, MatButtonModule, MatCardModule, MatProgressSpinnerModule, MatInputModule],
  exports: [CommonModule, MatToolbarModule, MatButtonModule, MatCardModule, MatProgressSpinnerModule, MatInputModule],
})
export class AppMaterialModule {
}
