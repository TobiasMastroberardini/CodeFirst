import { animate, style, transition, trigger } from '@angular/animations';

export const slideInLeftAnimation = trigger('slideInLeft', [
  transition(':enter', [
    style({ transform: 'translateX(-100%)', opacity: 0 }),
    animate('1s ease-out', style({ transform: 'translateX(0)', opacity: 1 }))
  ])
]);
