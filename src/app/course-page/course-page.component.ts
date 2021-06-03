import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Course } from 'src/models/Course';
import { CommonService } from '../services/common.service';

@Component({
  selector: 'app-course-page',
  templateUrl: './course-page.component.html',
  styleUrls: ['./course-page.component.css']
})
export class CoursePageComponent implements OnInit {
  course: Course;

  constructor(private _Activatedroute: ActivatedRoute, private commonService: CommonService) { }

  ngOnInit(): void {
    this._Activatedroute.paramMap.subscribe(params => {
      var id = params.get('id') || 1;
      this.course = this.commonService.getAllCourses().filter(course=>course.id==id)[0];
    });
  }

}
