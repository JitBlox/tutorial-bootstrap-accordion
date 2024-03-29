/**
* Generated by JitBlox - rapid interactive prototyping of modern web apps from your browser.
* Upgrade to a Pro plan to remove this header, see https://www.jitblox.com/plans for more.
* 
* Check out this JitBlox project, Tutorial: Bootstrap Accordion (final), at
* https://www.jitblox.com/project/4tvhtDS4Av/tutorial-bootstrap-accordion-final
*/

import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Character } from '../../model';

/**
* This custom component displays the details of the selected character.
*/
@Component({
  selector: 'app-character-detail',
  standalone: true,
  templateUrl: './character-detail.component.html',
  styleUrls: ['./character-detail.component.scss'],
  imports: [CommonModule]
})
export class CharacterDetailComponent {
  @Input() public character?: Character | null;

  constructor() {}
}
