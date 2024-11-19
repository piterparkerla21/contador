import { Component } from '@angular/core';
import { HeaderhijoComponent } from './header/headerhijo/headerhijo.component';
import { RouterOutlet } from '@angular/router';
import { AsidehijoComponent } from './aside/asidehijo/asidehijo.component';
import { FooterhijoComponent } from './footer/footerhijo/footerhijo.component';
/*import { PadreComponent } from "./padre/padre.component";
import { HijoComponent } from './usuarios/hijo/hijo.component';
import { HeaderhijoComponent } from "./header/headerhijo/headerhijo.component";*/


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderhijoComponent,AsidehijoComponent,FooterhijoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'contador GOLLL';
  subtitulo='PEDRO'
}
