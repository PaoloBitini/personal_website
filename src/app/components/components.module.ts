import { BubblesModule } from '../bubbles/bubbles.module';
import { CardComponent } from './card/card.component';
import { CommonModule } from '@angular/common';
import { DropdownMenuComponent } from './dropdown-menu/dropdown-menu.component';
import { FooterComponent } from './footer/footer.component';
import { GraphicsModule } from '../graphics/graphics.module';
import { HeaderComponent } from './header/header.component';
import { LanguageMenuComponent } from './language-menu/language-menu.component';
import { LogoContainerComponent } from './logo-container/logo-container.component';
import { MenuItemComponent } from './menu-item/menu-item.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SimpleMenuItemComponent } from './simple-menu-item/simple-menu-item.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { TranslateModule } from '@ngx-translate/core';
import { BlindsComponent } from './blinds/blinds.component';

@NgModule({
  declarations: [
    CardComponent,
    DropdownMenuComponent,
    FooterComponent,
    HeaderComponent,
    LanguageMenuComponent,
    LogoContainerComponent,
    MenuItemComponent,
    SimpleMenuItemComponent,
    ToolbarComponent,
    BlindsComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    TranslateModule,
    GraphicsModule,
    BubblesModule,
  ],
  exports: [
    CardComponent,
    DropdownMenuComponent,
    FooterComponent,
    HeaderComponent,
    LanguageMenuComponent,
    LogoContainerComponent,
    MenuItemComponent,
    SimpleMenuItemComponent,
    ToolbarComponent,
  ],
})
export class ComponentsModule {}
