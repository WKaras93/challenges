import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.css']
})

export class StarRatingComponent implements OnInit {
  
  @Input() showRatingValue = false;
  @Input() votesNumber = 0;
  @Input() starNumber = 5;
  @Input() currentRate = 2.5;

  stars: number[] = [];
  showVotingBoard = false;

  ngOnInit(): void {
    this.createStars();
  }

  public getStarSymbol(starIndex: number): string {
    starIndex += 1;
    if (starIndex <= this.currentRate) {
      return 'star';
    } else if (starIndex - this.currentRate >= 0.5 && starIndex - this.currentRate < 1) {
      return 'star_half';
    }

    return 'star_border'; 
  }

  public onContainerFocus() {
    console.log('onContainerFocus')
    this.showVotingBoard = true;
  }

  public onContainerBlur() {
    console.log('onBlur')
    this.showVotingBoard = false;
  }

  private createStars(): void {
    this.stars = Array.from(Array(this.starNumber).keys());
  }
}
