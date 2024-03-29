/**
* Generated by JitBlox - rapid interactive prototyping of modern web apps from your browser.
* Upgrade to a Pro plan to remove this header, see https://www.jitblox.com/plans for more.
* 
* Check out this JitBlox project, Tutorial: Bootstrap Accordion (final), at
* https://www.jitblox.com/project/4tvhtDS4Av/tutorial-bootstrap-accordion-final
*/

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './components/Layout/footer.component';
import { HeaderComponent } from './components/Layout/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [HeaderComponent, RouterOutlet, FooterComponent, CommonModule]
})
export class AppComponent {

  constructor() {}
}
