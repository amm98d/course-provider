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
      '/assets/images/1.jpg',
      '/assets/images/2.png',
      '/assets/images/3.jpeg',
      '/assets/images/4.png',
      '/assets/images/5.png',
      '/assets/images/6.jpg',
      '/assets/images/7.jpg',
      '/assets/images/8.png',
      '/assets/images/9.jpg',
      '/assets/images/10.png',
      '/assets/images/11.jpg',
      '/assets/images/12.jpg',
      '/assets/images/13.jpg',
      '/assets/images/14.jpg',
      '/assets/images/15.jpg',
    ]
    this.allCourses = [
      { id: 1, title: "HTML Basics", category: "Html", level: 0, language: "English", rating: 5.0, price: "$9.99", instructor: "Angela Yu", numRatings: "(970,200)", imagePath: imagePaths[1], hours: Math.floor(Math.random() * 100) + 1 },
      { id: 2, title: "HTML 2.0", category: "Html", level: 1, language: "English", rating: 4.8, price: "$9.99", instructor: "Angela Yu", numRatings: "(370,200)", imagePath: imagePaths[2], hours: Math.floor(Math.random() * 100) + 1 },
      { id: 3, title: "Advanced HTML", category: "Html", level: 2, language: "English", rating: 4.1, price: "$99.99", instructor: "Angela Yu", numRatings: "(50,450)", imagePath: imagePaths[3], hours: Math.floor(Math.random() * 100) + 1 },
      { id: 4, title: "Javascript for Beginners", category: "JS", level: 0, language: "English", rating: 1.4, price: "$100.0", instructor: "Ali Amjad", numRatings: "(1,450)", imagePath: imagePaths[4], hours: Math.floor(Math.random() * 100) + 1 },
      { id: 5, title: "Jquery: JS Advanced", category: "JS", level: 2, language: "English", rating: 0.8, price: "$100.0", instructor: "Ali Amjad", numRatings: "(87)", imagePath: imagePaths[5], hours: Math.floor(Math.random() * 100) + 1 },
      { id: 6, title: "CSS for Beginners", category: "CSS", level: 0, language: "English", rating: 4.8, price: "$4.99", instructor: "Ninja Tutorials", numRatings: "(877,450)", imagePath: imagePaths[6], hours: Math.floor(Math.random() * 100) + 1 },
      { id: 7, title: "CSS Mastery", category: "CSS", level: 1, language: "English", rating: 3.1, price: "$100.0", instructor: "Ali Amjad", numRatings: "(18,450)", imagePath: imagePaths[7], hours: Math.floor(Math.random() * 100) + 1 },
      { id: 8, title: "DOT NET Fundamentals", category: "NET", level: 0, language: "English", rating: 5, price: "$10.0", instructor: "Fast Nuces", numRatings: "(4200)", imagePath: imagePaths[8], hours: Math.floor(Math.random() * 100) + 1 },
      { id: 9, title: "ASP NET CORE", category: "NET", level: 1, language: "English", rating: 5, price: "$10.0", instructor: "Fast Nuces", numRatings: "(3000)", imagePath: imagePaths[9], hours: Math.floor(Math.random() * 100) + 1 },
      { id: 10, title: "Angular A-Z", category: "Angular", level: 0, language: "English", rating: 0, price: "$300.0", instructor: "Easy Courses", numRatings: "(No ratings)", imagePath: imagePaths[10], hours: Math.floor(Math.random() * 100) + 1 },
      { id: 11, title: "Angular Complete Bootcamp", category: "Angular", level: 2, language: "English", rating: 5, price: "$9.99", instructor: "Fast Nuces", numRatings: "(10,001)", imagePath: imagePaths[11], hours: Math.floor(Math.random() * 100) + 1 },
      { id: 12, title: "React Redux", category: "React", level: 2, language: "English", rating: 5, price: "$250.0", instructor: "Angela Yu", numRatings: "(30,880)", imagePath: imagePaths[12], hours: Math.floor(Math.random() * 100) + 1 },
      { id: 13, title: "React - The Complete Guide", category: "React", level: 0, language: "English", rating: 5, price: "$1.99", instructor: "David Beckham", numRatings: "(1288,450)", imagePath: imagePaths[14], hours: Math.floor(Math.random() * 100) + 1 },
      { id: 14, title: "Vue JS Essentials with Vuex and Vue Router", category: "Vue", level: 0, language: "English", rating: 5, price: "$100.0", instructor: "Linus Torvalds", numRatings: "(2988,450)", imagePath: imagePaths[14], hours: Math.floor(Math.random() * 100) + 1 },
      { id: 15, title: "Vue JS", category: "Vue", level: 1, language: "English", rating: 2.2, price: "$100.0", instructor: "Ali Amjad", numRatings: "(2,450)", imagePath: imagePaths[15], hours: Math.floor(Math.random() * 100) + 1 },
    ];
  }

  getAllCourses(): Course[]{
    return this.allCourses;
  }

}
