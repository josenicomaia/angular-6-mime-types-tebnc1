import { Component } from '@angular/core';

import * as mime from 'mime-types';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular 6';

  mimeType = mime.lookup('json') 
}
