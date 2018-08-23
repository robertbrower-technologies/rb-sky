# rb-sky

sky directive for Angular.

## Installation

To install this library, run:

```bash
$ npm install rb-sky --save
```

## Consuming your library

Add node_modules/rb-sky/assets/css/sky.css to the styles in your angular.json file:

```json
"styles": [
  "src/styles.css",
  "node_modules/rb-sky/assets/css/sky.css"
],
```

From your Angular `AppModule`:

```typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

// Import RbSkyModule
import { RbSkyModule } from 'rb-sky';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,

    // Specify RbSkyModule as an import
    RbSkyModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

Once RbSkyModule is imported, you can use its directive in your Angular application:

```xml
<!-- You can now use RbSkyModule directive in app.component.html -->
<h1>
  {{title}}
</h1>
<myComponent rbSky></myComponent>
```

## Demo

https://stackblitz.com/edit/angular-gitter-n6vzhc

## License

MIT © [Robert Brower](mailto:robertbrower.technologies@gmail.com)
