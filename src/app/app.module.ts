import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { RouterModule } from '@angular/router';
import { ExampleComponent } from './example/example.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    ExampleComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: 'toolbar', component: ToolbarComponent},
      {path: 'example', component: ExampleComponent},
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
