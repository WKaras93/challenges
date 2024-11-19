import { Component, OnInit, Input } from '@angular/core';
import { AccordionService } from '../accordion.service';

@Component({
  selector: 'app-active-index',
  templateUrl: './active-index.component.html',
  styleUrls: ['./active-index.component.css']
})
export class ActiveIndexComponent implements OnInit {
  @Input() isVisible;

  itemCounter = 0;
  indexes: number[] = [];
  openedItems: number[] = [];

  constructor(private _accordionService: AccordionService) { }

  ngOnInit() {
    this._accordionService.getItemsCounter().subscribe(_items => {
      this.itemCounter = _items;
      this._updateIndexes();
    });

    this._accordionService.getSelectedItems().subscribe(_items => {
      this.openedItems = _items.map(item => item + 1);
    });
  }

  isItemSelected(index): boolean {
    return this.openedItems.some(item => item === index);
  }

  private _updateIndexes() {
    this.indexes = [];

    for(let i=0; i<this.itemCounter; i++) {
      this.indexes.push(i+1);
    }
  }
}
