import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { WrapperComponent } from './wrapper/wrapper.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  imports: [CommonModule, RouterModule, TranslateModule, MatToolbarModule, MatIconModule],
  declarations: [FooterComponent, SidebarComponent, ToolbarComponent, WrapperComponent],
  exports: [FooterComponent, SidebarComponent, ToolbarComponent, WrapperComponent],
})
export class LayoutsModule { }

