import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'RecipeBook';
  loadedApp = 'recipe';

  onNavigate(appShow: string) {
    this.loadedApp = appShow;
  }
}
