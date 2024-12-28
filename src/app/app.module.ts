import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { RouterModule } from '@angular/router';
import { ExampleComponent } from './example/example.component';

import { AccordionComponent } from './accordion/accordion/accordion.component';
import { AccordionItemComponent } from './accordion/accordion-item/accordion-item.component';
import { ActiveIndexComponent } from './accordion/active-index/active-index.component';
import { PaymentCardComponent } from './payment-card/payment-card.component';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StarRatingComponent } from './star-rating/star-rating.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    ExampleComponent,
    AccordionComponent,
    AccordionItemComponent,
    ActiveIndexComponent,
    PaymentCardComponent,
    StarRatingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {path: 'toolbar', component: ToolbarComponent},
      {path: 'example', component: ExampleComponent},
    ]),
    BrowserAnimationsModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
