import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { StoreModule } from '@ngrx/store';
import { postMock } from 'src/app/core/utils/post.mock';
import { SharedModule } from 'src/app/shared/shared.module';
import { rootState } from 'src/store/root.state';

import { DetailsComponent } from './details.component';

describe('DetailsComponent', () => {
  let component: DetailsComponent;
  let fixture: ComponentFixture<DetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        SharedModule,
        StoreModule.forRoot(rootState),
        RouterTestingModule,
      ],
      declarations: [ DetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the details component', () => {
    expect(component).toBeTruthy();
  });

  it('should display post data once available', () => {
    component.post = {...postMock};

    fixture.detectChanges();

    expect(fixture.nativeElement.querySelector('mat-card-title')?.textContent).toContain(postMock.title);    
  });
});
