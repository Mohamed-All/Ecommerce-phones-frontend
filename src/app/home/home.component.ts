import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
declare var $: any; // استدعاء jQuery
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink,],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {


  isScrolled = false; // حالة التمرير

  ngOnInit() {
    this.initializeSlickSlider();
  }

  initializeSlickSlider() {
    $('.slick-carousel').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      arrows: true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2
          }
        }
      ]
    });

    // تغيير لون الأزرار بعد تحميل الـ Slick
    this.styleSlickArrows();
  }

  styleSlickArrows() {
    const prevButton = $('.slick-prev');
    const nextButton = $('.slick-next');

  
    
  }

  }

