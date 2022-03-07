import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { ProfileComponent } from './components/profile/profile.component';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [ProfileComponent, HeaderComponent],
  imports: [CommonModule, AdminRoutingModule],
})
export class AdminModule {}
