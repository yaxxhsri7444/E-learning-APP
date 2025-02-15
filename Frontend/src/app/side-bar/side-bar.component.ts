import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-side-bar',
  imports: [CommonModule],
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.css'
})
export class SideBarComponent {
  isCollapsed: boolean = true;

  toggleSidebar() {
    this.isCollapsed = !this.isCollapsed;
  }
}
