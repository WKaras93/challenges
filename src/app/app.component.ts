import { Component, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'challenges';

  constructor(private _matIconRegistry: MatIconRegistry) {}

  ngOnInit(): void {
    this._matIconRegistry.setDefaultFontSetClass('material-symbols-outlined')
  }
}
