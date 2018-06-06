import {Directive, HostBinding, HostListener} from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})

export class DropdownDirective {
  @HostBinding('class.open') isToggled = false;

  @HostListener('click') toggleOn() {
    this.isToggled = !this.isToggled;
  }
}
