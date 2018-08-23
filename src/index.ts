import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SkyDirective } from './sky.directive';

export * from './sky.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    SkyDirective
  ],
  exports: [
    SkyDirective
  ]
})
export class RbSkyModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: RbSkyModule,
      providers: []
    };
  }
}
