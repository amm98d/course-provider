import { Component, OnInit } from '@angular/core';
import { Course } from 'src/models/Course';
import { CommonService } from '../services/common.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  private imagePaths: string[];
  private allCourses: Course[];
  private activeCategory: string;
  private activeLevel: number;
  filteredCourses: Course[];

  constructor(private commonService: CommonService) {
    var imagePaths = [
      '',
      '/assets/images/1.png',
      '/assets/images/2.png',
      '/assets/images/3.jpeg',
      '/assets/images/4.jpg',
      '/assets/images/5.jpg',
      '/assets/images/6.jpg',
      '/assets/images/7.png',
      '/assets/images/8.jpg',
    ]
    this.allCourses = [
      { id: 1, title: "Angular A-Z", category: "Angular", level: 0, language: "English", rating: 0, price: "$100.0", instructor: "Ali Amjad", numRatings: "(188,450)", imagePath: imagePaths[1] },
      { id: 2, title: "Javascript for Beginners", category: "JS", level: 0, language: "English", rating: 0.6, price: "$100.0", instructor: "Ali Amjad", numRatings: "(188,450)", imagePath: imagePaths[2] },
      { id: 3, title: "Advanced HTML", category: "Html", level: 2, language: "English", rating: 2.7, price: "$100.0", instructor: "Ali Amjad", numRatings: "(188,450)", imagePath: imagePaths[3] },
      { id: 4, title: "CSS for Beginners", category: "CSS", level: 2, language: "English", rating: 4.8, price: "$100.0", instructor: "Ali Amjad", numRatings: "(188,450)", imagePath: imagePaths[4] },
      { id: 5, title: "React Tutorial", category: "React", level: 2, language: "English", rating: 5, price: "$100.0", instructor: "Ali Amjad", numRatings: "(188,450)", imagePath: imagePaths[5] },
      { id: 6, title: "Intermediate CSS", category: "CSS", level: 1, language: "English", rating: 3.1, price: "$100.0", instructor: "Ali Amjad", numRatings: "(188,450)", imagePath: imagePaths[6] },
      { id: 7, title: "NET CORE", category: "NET", level: 1, language: "English", rating: 1.6, price: "$100.0", instructor: "Ali Amjad", numRatings: "(188,450)", imagePath: imagePaths[7] },
      { id: 8, title: "Vue JS", category: "Vue", level: 2, language: "English", rating: 2.2, price: "$100.0", instructor: "Ali Amjad", numRatings: "(188,450)", imagePath: imagePaths[8] },
    ];
    this.activeCategory = 'all';
    this.activeLevel = -1;
    this.filteredCourses = this.allCourses;
  }

  ngOnInit(): void {
    this.commonService.emitter
      .subscribe((newView: any[]) => {
        // $('#dropdownMenuClickableInside').dropdown('toggle')
        this.activeCategory = newView[0];
        this.activeLevel = newView[1];
        this.filterCourses();
      });
  }

  filterCourses(): void {
    this.filteredCourses = this.allCourses;
    if (this.activeCategory != 'all')
      this.filteredCourses = this.filteredCourses.filter(course => course.category === this.activeCategory);
    if (this.activeLevel != -1)
      this.filteredCourses = this.filteredCourses.filter(course => course.level === this.activeLevel);
    this.filteredCourses.sort((a, b) => (a.rating > b.rating ? -1 : ((a.rating < b.rating) ? 1 : 0)));
  }
}
