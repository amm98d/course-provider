import { Component, OnInit } from '@angular/core';
import { Course } from 'src/models/Course';
import { CommonService } from '../services/common.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  private activeCategory: string;
  private activeLevel: number;
  filteredCourses: Course[];

  constructor(private commonService: CommonService) {
    this.activeCategory = 'all';
    this.activeLevel = -1;
    this.filterCourses();
  }

  ngOnInit(): void {
    this.commonService.emitter
      .subscribe((newView: any[]) => {
        this.activeCategory = newView[0];
        this.activeLevel = newView[1];
        this.filterCourses();
      });
  }

  filterCourses(): void {
    this.filteredCourses = this.commonService.getAllCourses();
    if (this.activeCategory != 'all')
      this.filteredCourses = this.filteredCourses.filter(course => course.category === this.activeCategory);
    if (this.activeLevel != -1)
      this.filteredCourses = this.filteredCourses.filter(course => course.level === this.activeLevel);
    this.filteredCourses.sort((a, b) => (a.rating > b.rating ? -1 : ((a.rating < b.rating) ? 1 : 0)));
  }
}
