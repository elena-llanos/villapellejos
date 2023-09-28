import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  logoHeader:string = "assets/img/logo_header.png";
  contenidoAlt:string = "logo_de_los_villa";

}
