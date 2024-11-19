import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class AccordionService {
    private selectedItems$: BehaviorSubject<number[]> = new BehaviorSubject([]);
    private itemsCounter$: BehaviorSubject<number> = new BehaviorSubject(0);
    private isMulti$: BehaviorSubject<boolean> = new BehaviorSubject(false);

    getSelectedItems(): Observable<number[]> {
        return this.selectedItems$.asObservable();
    }

    setSelectedItem(itemIndex: number) {
        if (this.isMulti$.value) {
            this.addItemToMultiOption(itemIndex);
        } else {
            this.addItem(itemIndex);
        }
    }

    setMultipleOption(isMulti: boolean) {
        this.isMulti$.next(isMulti);
    }

    setItemsCounter(items: number) {
        this.itemsCounter$.next(items);
    }

    getItemsCounter(): Observable<number> {
        return this.itemsCounter$.asObservable();
    }

    private addItem(itemIndex: number) {
        const elementIndex = this.selectedItems$.value.indexOf(itemIndex);
        if (elementIndex < 0) {                                             //add new index
            this.selectedItems$.next([itemIndex]);
        } else {                                                            //remove from array
            this.selectedItems$.next([]);
        }
    }

    private addItemToMultiOption(itemIndex: number) {
        const elementIndex = this.selectedItems$.value.indexOf(itemIndex);

        if (elementIndex < 0) {                                             //add new index
            const items = this.selectedItems$.value;
            items.push(itemIndex);
            this.selectedItems$.next(items);
        } else {                                                            //remove from array
            const items = this.selectedItems$.value;
            items.splice(elementIndex, 1);
            this.selectedItems$.next(items);
        }
    }
}