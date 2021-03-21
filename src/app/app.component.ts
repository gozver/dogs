import { Component, AfterViewChecked, ChangeDetectorRef } from '@angular/core';
import { TranslateService } from "@ngx-translate/core";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewChecked {
  selected: string = 'en';

  constructor(
    public translate: TranslateService,
    private cdRef: ChangeDetectorRef
  ) {
    translate.addLangs(['en', 'es']);
    translate.setDefaultLang('en');
    const browserLang = translate.getBrowserLang();
    translate.use(browserLang.match(/en|es/) ? browserLang: 'en');
  }

  ngAfterViewChecked(): void {
    this.cdRef.detectChanges();
  }
}
