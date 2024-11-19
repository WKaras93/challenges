import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccordionComponent } from './accordion.component';
import { ActiveIndexComponent } from '../active-index/active-index.component';
import { AccordionItemComponent } from '../accordion-item/accordion-item.component';
import { AccordionService } from '../accordion.service';

describe('AccordionComponent', () => {
  let component: AccordionComponent;
  let fixture: ComponentFixture<AccordionComponent>;
  let accordionService: AccordionService;
  let debugElement: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccordionComponent, ActiveIndexComponent, AccordionItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccordionComponent);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement;
    accordionService = debugElement.injector.get(
      AccordionService
    );

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('fill accordion item array', () => {
    expect(component.accordionItems.length > 0).toBeTruthy();
  });

  it('update setItemsCounter in service on init component', () => {
    const setItemsCounterParams = 5;
    const setItemsCounterSpy = spyOn(accordionService, 'setItemsCounter').and.callThrough();

    component.ngOnInit();

    expect(setItemsCounterSpy).toHaveBeenCalledWith(setItemsCounterParams);
  });

  it('update setMultipleOption in service on init component', () => {
    const setMultipleOptionParams = true;
    const setMultipleOptionSpy = spyOn(accordionService, 'setMultipleOption').and.callThrough();
    component.isMulti = true;

    component.ngOnInit();

    expect(setMultipleOptionSpy).toHaveBeenCalledWith(setMultipleOptionParams);
  });
});