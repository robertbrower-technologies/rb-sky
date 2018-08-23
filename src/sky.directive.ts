import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '[sky]'
})
export class SkyDirective {

  @HostBinding('class')
  get skyGradient() {
    return `sky-gradient-${(new Date()).getHours()}`;
  }

}
