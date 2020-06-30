import { Component, OnInit, Optional, Self } from '@angular/core';
import { ControlValueAccessor, NgControl }   from '@angular/forms';

@Component({
  selector:    'srp-toggle-button',
  templateUrl: './toggle-button.component.html',
  styleUrls:   ['./toggle-button.component.scss']
})
export class ToggleButtonComponent implements OnInit, ControlValueAccessor {
  public selectedValue: boolean;

  constructor(@Optional() @Self() public ngControl: NgControl) {
    if (this.ngControl !== null) {
      this.ngControl.valueAccessor = this;
    }
  }

  public ngOnInit(): void {
    this.selectedValue = this.ngControl.control.value;
  }

  public registerOnChange(fn: any): void {
  }

  public registerOnTouched(fn: any): void {
  }

  public writeValue(value: any): void {

  }

  public setControlValue(event: any): void {
    this.ngControl?.control?.setValue(event.value);
  }
}
