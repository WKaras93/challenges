import { Component, Input, OnInit } from '@angular/core';
import { AccordionService } from '../accordion.service';

@Component({
  selector: 'app-accordion-item',
  templateUrl: './accordion-item.component.html',
  styleUrls: ['./accordion-item.component.css']
})
export class AccordionItemComponent implements OnInit {
  @Input() id;
  @Input() title = '';
  @Input() description = '';
  isExpanded: boolean;

  constructor(private accordionService: AccordionService) {
    this.isExpanded = false;
  }

  ngOnInit() {
    this.accordionService.getSelectedItems().subscribe((items) => {
      this.isExpanded = items.includes(this.id);
    })
  }

  public onExpandChange() {
    this.isExpanded = !this.isExpanded;
    this.accordionService.setSelectedItem(this.id);
  }
}
