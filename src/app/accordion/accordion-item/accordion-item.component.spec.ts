import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccordionItemComponent } from './accordion-item.component';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('AccordionItemComponent', () => {
  let component: AccordionItemComponent;
  let fixture: ComponentFixture<AccordionItemComponent>;
  let debugElement: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccordionItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccordionItemComponent);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('expand element on click', () => {
    component.isExpanded = false;

    debugElement
      .query(By.css('.accordion-head'))
      .triggerEventHandler('click', null);
    
    expect(component.isExpanded).toBeTruthy;
  });
});
