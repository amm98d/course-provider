import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CommonService } from '../services/common.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private commonService: CommonService) { }

  ngOnInit(): void {
  }

  onClick(category: string, level: number) {
    var newView = [category, level];
    this.commonService.emitter.emit(newView);
  }
}
