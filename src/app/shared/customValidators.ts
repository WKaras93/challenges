import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function minLengthValidator(minLength): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
        const length = control.value?.toString().length;
        return length < minLength ? {minLength: {value : control.value}} : null;
    };
}

export function maxLengthValidator(maxLength: number): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
        const length = control.value?.toString().length;
        return length > maxLength ? {maxLength: {value : control.value}} : null;
    };
}

export function exactLengthValidator(length: number): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
        const _length = control.value?.toString().length;
        return _length !== length ? {length: {value : control.value}} : null;
    };
}