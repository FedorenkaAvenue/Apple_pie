import { Directive, Input, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';
import { StateService } from '@shared/services/state/state.service';

@Directive({
  selector: '[appIsAuthorized]'
})
export class IsAuthorizedDirective implements OnInit {

@Input() set appIsAuthorized(val) {
  this.isAuthorized = val;
  this.updateView();
};

private userToken: string;
private isAuthorized: string;

  constructor(
    private readonly templateRef: TemplateRef<any>,
    private readonly vcr: ViewContainerRef,
    private readonly stateService: StateService
  ) { }

  ngOnInit() {
    this.stateService.currentUser$.subscribe(el => {
      this.userToken = el;
      this.updateView();
    })
  }

  private updateView() {
    if(this.isAuthorized && this.userToken) {
      this.vcr.createEmbeddedView(this.templateRef);
    }
    else if(!this.isAuthorized && !this.userToken) {
      this.vcr.createEmbeddedView(this.templateRef);
    }
    else {
      this.vcr.clear();
    }
  }
}
