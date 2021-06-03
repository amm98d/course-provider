import { EventEmitter, Injectable, Output } from '@angular/core';
import { Course } from 'src/models/Course';

@Injectable({
  providedIn: 'root'
})
export class CommonService{
  @Output() emitter: EventEmitter<any[]> = new EventEmitter();

  private imagePaths: string[];
  private allCourses: Course[];

  constructor() {
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
  }

  getAllCourses(): Course[]{
    return this.allCourses;
  }

}
