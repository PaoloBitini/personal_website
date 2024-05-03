import {
  LanguageData,
  LanguageService,
} from 'src/app/services/language.service';

import { Component } from '@angular/core';

@Component({
  selector: 'web-language-menu',
  templateUrl: './language-menu.component.html',
  styleUrls: ['./language-menu.component.scss'],
})
export class LanguageMenuComponent {
  constructor(public languageService: LanguageService) {}

  public opened = false;

  dropdownClicked() {
    this.opened = !this.opened;
  }

  languageSelected(lang: LanguageData) {
    this.languageService.select(lang);
    this.dropdownClicked();
  }
}
