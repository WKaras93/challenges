import { Component, Input, OnInit } from '@angular/core';
import { AccordionItem } from 'src/app/models/accordion-item';
import { AccordionService } from '../accordion.service';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.css']
})
export class AccordionComponent implements OnInit{
  accordionItems: AccordionItem[] = [];
  itemsCounter = 5;
  @Input() isMulti = false;
  @Input() showActiveIndex = false;

  constructor(private _accordionService: AccordionService) { }

  ngOnInit() {
    this.updateAccordionItems();
    this._accordionService.setItemsCounter(this.itemsCounter);
    this._accordionService.setMultipleOption(this.isMulti);
  }

  private updateAccordionItems() {
    for(let i=0; i<this.itemsCounter; i++) {
      const item = new AccordionItem();
      item.title = `Example title for ${i} item`;
      item.description = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.";
      this.accordionItems.push(item);
    }
  }
}
