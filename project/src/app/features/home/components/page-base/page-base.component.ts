import { Component, OnDestroy, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Subject } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { parseQueryParams } from '../../../helpers';

@Component({
  selector: "app-page-base",
  template: '',
  standalone: true,
  imports: [CommonModule]
})
export class PageBaseComponentimplements implements OnDestroy, OnInit{
  /**
   * Component destroyed stream
   */
  componentDestroyed$: Subject<void> = new Subject<void>();
  /**
   * Constructor
   * @param route 
   * @param router 
   */
  constructor(private route: ActivatedRoute,private router: Router,) {}
  /**
   * Al iniciar el componente
   */
  ngOnInit(): void {
    const fragment = this.route.snapshot.fragment;
    if (fragment) {
      const utm = fragment.split('#?');
      const obj = parseQueryParams(utm[0]);
      delete obj['t'];
      delete obj['prefill'];
      console.log('queryParams', obj);
      this.router.navigate(['.'], {relativeTo: this.route, queryParams: obj});
    }
  }
  /**
   * Destructor del componente
   */
  ngOnDestroy() {
    this.componentDestroyed$.next();
    this.componentDestroyed$.complete();
  }
}
