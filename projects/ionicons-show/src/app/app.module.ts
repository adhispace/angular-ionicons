import { IonAirplaneOutline } from './../../../angular-ionicons/icons/airplane-outline';
import { IonAccessibility } from './../../../angular-ionicons/icons/accessibility';
import { IonAirplane } from 'projects/angular-ionicons/icons/airplane';
import { AngularIoniconsModule } from 'projects/angular-ionicons/src/lib/angular-ionicons.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { IonAccessibilityOutline } from 'projects/angular-ionicons/icons/accessibility-outline';
import { IonAtCircle } from 'projects/angular-ionicons/icons/at-circle';
import { IonArrowUndoOutline } from 'projects/angular-ionicons/icons/arrow-undo-outline';
import { IonArrowUndoSharp } from 'projects/angular-ionicons/icons/arrow-undo-sharp';

const icons = {
  IonAccessibilityOutline,
  IonAirplane,
  IonAirplaneOutline,
  IonAtCircle,
  IonArrowUndoOutline,
  IonArrowUndoSharp,
  IonAccessibility
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AngularIoniconsModule.setup(icons)
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
