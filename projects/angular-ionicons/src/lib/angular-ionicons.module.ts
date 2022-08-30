import { ModuleWithProviders, NgModule, Optional } from '@angular/core';
import { AngularIoniconsComponent } from './angular-ionicons.component';
import { Icons } from './icon.provider';

@NgModule({
  declarations: [AngularIoniconsComponent],
  exports: [AngularIoniconsComponent]
})
export class AngularIoniconsModule {

  constructor(@Optional() private icons: Icons) {
    if (!this.icons) {
      throw new Error(
        `No icons provided.`
      );
    }
  }

  static setup(icons: {[key: string]: string}): ModuleWithProviders<AngularIoniconsModule> {
    return {
      ngModule: AngularIoniconsModule,
      providers: [{provide: Icons, useValue: icons, multi: true}]
    }
  }
}
