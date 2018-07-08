import { Component, OnInit, Input } from '@angular/core';
import { NguCarousel } from '@ngu/carousel';

@Component({
  selector: 'app-testimonials-carousel',
  templateUrl: './testimonials-carousel.component.html',
  styleUrls: ['./testimonials-carousel.component.scss']
})
export class TestimonialsCarouselComponent implements OnInit {
  @Input('backgroundGray') public backgroundGray;
  public carouselOptions: NguCarousel;
  public testimonials = [{
    logo: 'http://via.placeholder.com/54x40',
    photo: 'http://via.placeholder.com/48x48',
    text: `"Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit modi voluptas vero iusto fuga quos totam eius,
    atis magnam tempora doloribus ducimus dolorem culpa animi beatae tenetur! Sapiente, quia tempora."`,
    title: 'Jhone Doe',
    subtitle: 'CEO'
  }, {
    logo: 'http://via.placeholder.com/54x40',
    photo: 'http://via.placeholder.com/48x48',
    text: `"Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit modi voluptas vero iusto fuga quos totam eius,
    atis magnam tempora doloribus ducimus dolorem culpa animi beatae tenetur! Sapiente, quia tempora."`,
    title: 'Adam Smith',
    subtitle: 'CEO'
  }, {
    logo: 'http://via.placeholder.com/54x40',
    photo: 'http://via.placeholder.com/48x48',
    text: `"Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit modi voluptas vero iusto fuga quos totam eius,
    atis magnam tempora doloribus ducimus dolorem culpa animi beatae tenetur! Sapiente, quia tempora."`,
    title: 'Jhone White',
    subtitle: 'CEO'
  }, {
    logo: 'http://via.placeholder.com/54x40',
    photo: 'http://via.placeholder.com/48x48',
    text: `"Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit modi voluptas vero iusto fuga quos totam eius,
    atis magnam tempora doloribus ducimus dolorem culpa animi beatae tenetur! Sapiente, quia tempora."`,
    title: 'Jessica Hiche',
    subtitle: 'CEO'
  }]
  constructor() { }

  ngOnInit() {
    this.carouselOptions = {
      grid: { xs: 1, sm: 2, md: 3, lg: 3, all: 0 },
      slide: 2,
      speed: 400,
      interval: 4000,
      point: {
        visible: true
      },
      load: 2,
      touch: true,
      loop: true
    }
  }

}
