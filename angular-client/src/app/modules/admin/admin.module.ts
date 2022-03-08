import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { ProfileComponent } from './components/profile/profile.component';
import { HeaderComponent } from './components/header/header.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [ProfileComponent, HeaderComponent],
  imports: [CommonModule, AdminRoutingModule, HttpClientModule],
})
export class AdminModule {}
