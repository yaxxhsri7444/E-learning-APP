import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-course-carousel',
  imports: [CommonModule],
  templateUrl: './course-carousel.component.html',
  styleUrl: './course-carousel.component.css'
})
export class CourseCarouselComponent {
  trendingCourses  = [
    {
      title: "Full-Stack Web Development",
      image: "Web Designing Course In Khanna.jpeg",
      instructor: "John Doe",
      rating: 4.8
    },
    {
      title: "Data Science & AI",
      image: "Data Science Course.jpeg",
      instructor: "Jane Smith",
      rating: 4.7
    },
    {
      title: "Cyber Security Essentials",
      image: "What Is Cyber Security Insurance; How Protect Your Digital Assets.jpeg",
      instructor: "Alex Johnson",
      rating: 4.5
    },
    {
      title: "UI/UX Design Fundamentals",
      image: "UI UX design Course social media poster design.jpeg",
      instructor: "Emily White",
      rating: 4.6
    }
  ];
}
