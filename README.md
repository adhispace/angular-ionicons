## Angular Ionicons
This is a wrapper library to use ionicons in angular applications.

### How to use
*1. Install the npm package*
```sh
npm install angular-ionicons
```
*2. Import the module to `app.module.ts`*

```typescript
import { AngularIoniconsModule } from 'angular-ionicons';
```

*3. Import and setup needed icons*

For icon names, please refer to [ionicons](https://ionic.io/ionicons). For instance
if you need `accessibility-outline` icon, you have to import it as below.

```typescript
    import { IonAccessibilityOutline } from 'angular-ionicons';
```
Then setup the icons as below.

```typescript

import { IonAccessibilityOutline, IonAirplane } from 'angular-ionicons';

const icons = {
  IonAccessibilityOutline,
  IonAirplane
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

```
*4. Use it in your template*

Now use the icons as below

```htm
<ng-ionicon name="accessibility-outline"></ng-ionicon>
```
*5. Style your icons*

You can apply style to your icons similar to normal `HTML` elements.

```htm
<ng-ionicon style="color: yellow" name="accessibility-outline"></ng-ionicon>
```