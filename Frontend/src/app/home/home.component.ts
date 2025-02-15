import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [CommonModule,  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  categories = [
    { name: "Web Development",image: "Web Designing Course In Khanna.jpeg" },
    { name: "Data Science", image: "Data Science Course.jpeg" },
    { name: "Cyber Security", image: "What Is Cyber Security Insurance; How Protect Your Digital Assets.jpeg" },
    { name: "Graphic Design", image: "UI UX design Course social media poster design.jpeg" }
  ];

  reviews = [
    { name: "John Doe", feedback: "This platform changed my career!" },
    { name: "Jane Smith", feedback: "High-quality courses and great instructors." },
    { name: "Alex Johnson", feedback: "Loved the hands-on projects and real-world learning." }
  ];

  goals = [
    { name: "Become a Developer", description: "Master programming skills", image: "" },
    { name: "Become a Data Analyst", description: "Learn Data Science", image: "" },
    { name: "Become a Designer", description: "Graphic & UI/UX design", image: "" },
    { name: "Start a Business", description: "Entrepreneurship & marketing", image: "" }
  ];

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
