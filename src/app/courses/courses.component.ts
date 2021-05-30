import { Component, OnInit } from '@angular/core';
import { Course } from 'src/models/Course';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  courses: Course[];
  constructor() {
    this.courses = [
      { id: 1, title: "Angular A-Z", category: "Angular", level: 0, language: "English", rating: 0, price: "$100.0", instructor: "Ali Amjad", numRatings: "(188,450)" },
      { id: 2, title: "Javascript for Beginners", category: "Javascript", level: 0, language: "English", rating: 0.6, price: "$100.0", instructor: "Ali Amjad", numRatings: "(188,450)" },
      { id: 3, title: "Advanced HTML", category: "HTMl", level: 2, language: "English", rating: 2.7, price: "$100.0", instructor: "Ali Amjad", numRatings: "(188,450)" },
      { id: 3, title: "Advanced HTML", category: "HTMl", level: 2, language: "English", rating: 4.8, price: "$100.0", instructor: "Ali Amjad", numRatings: "(188,450)" },
      { id: 3, title: "Advanced HTML", category: "HTMl", level: 2, language: "English", rating: 5, price: "$100.0", instructor: "Ali Amjad", numRatings: "(188,450)" },
      { id: 1, title: "Angular A-Z", category: "Angular", level: 0, language: "English", rating: 3.1, price: "$100.0", instructor: "Ali Amjad", numRatings: "(188,450)" },
      { id: 2, title: "Javascript for Beginners", category: "Javascript", level: 0, language: "English", rating: 1.6, price: "$100.0", instructor: "Ali Amjad", numRatings: "(188,450)" },
      { id: 3, title: "Advanced HTML", category: "HTMl", level: 2, language: "English", rating: 2.2, price: "$100.0", instructor: "Ali Amjad", numRatings: "(188,450)" },
    ];
    this.courses.sort((a, b) => (a.rating > b.rating ? -1 : ((a.rating < b.rating) ? 1 : 0)));
  }

  ngOnInit(): void {
  }

}
