import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges
} from '@angular/core';


@Component({
             selector   : 'app-lifecycle-demo',
             templateUrl: './lifecycle-demo.component.html',
             styleUrls  : ['./lifecycle-demo.component.scss']
           })
export class LifecycleDemoComponent implements OnChanges,
                                               OnInit,
                                               DoCheck,
                                               AfterContentInit,
                                               AfterContentChecked,
                                               AfterViewInit,
                                               AfterViewChecked,
                                               OnDestroy {
  logs: string[] = [];
  @Input() count = 0;

  constructor() {
    this.log(`1 - constructor`);
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.log(`2 - ngOnChanges`);
    this.log(`2 - ngOnChanges - previous count: ${changes.count.previousValue}`);
    this.log(`2 - ngOnChanges - current count: ${changes.count.currentValue}`);
  }

  ngOnInit(): void {
    this.log(`3 - ngOnInit`);
  }

  ngDoCheck(): void {
    this.log(`4 - ngDoCheck`);
  }

  ngAfterContentInit(): void {
    this.log(`5 - ngAfterContentInit`);
  }


  ngAfterContentChecked(): void {
    this.log(`6 - ngAfterContentChecked`);
  }

  ngAfterViewInit(): void {
    this.log(`7 - ngAfterViewInit`);
  }

  ngAfterViewChecked(): void {
    this.log(`8 - ngAfterViewChecked`);
  }

  ngOnDestroy(): void {
    this.log(`9 - ngOnDestroy`);
  }

  log(message: string): void {
    this.logs.push(message);
    console.log(message);
  }
}
