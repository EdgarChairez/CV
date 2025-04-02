import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavComponent } from "./nav/nav.component";
import { SobreMiComponent } from "./sobre-mi/sobre-mi.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavComponent, SobreMiComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'CV';
}
