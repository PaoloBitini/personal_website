import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  constructor(private translateService: TranslateService) {}

  languages: LanguageData[] = [
    {
      name: 'it',
      path: '../../../assets/images/it.png',
    },
    {
      name: 'en',
      path: '../../../assets/images/us.png',
    },
  ];

  selectedLang: LanguageData = this.languages[1];

  get filteredLanguages(): LanguageData[] {
    return this.languages.filter((lang) => lang != this.selectedLang);
  }

  select(lang: LanguageData) {
    this.selectedLang = lang;
    this.translate(lang?.name);
  }

  translate(lang: string) {
    this.translateService.use(lang);
  }
}
export interface LanguageData {
  name: string;
  path: string;
}
