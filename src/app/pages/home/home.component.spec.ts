import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { SharedModule } from 'src/app/shared/shared.module';
import { rootState } from 'src/store/root.state';

import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeComponent ],
      imports: [
        BrowserAnimationsModule,
        StoreModule.forRoot(rootState),
        SharedModule,
      ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the home component', () => {
    expect(component).toBeTruthy();
  });

  it('should display test title on top', () => {
    expect(fixture.nativeElement.querySelector('h2')?.textContent).toContain('Scalio Test');
  });

  it('should render the "Send" button', () => {
    expect(fixture.nativeElement.querySelector('button')?.textContent).toContain('Send');
  });

  it('should render "Send" button disabled', () => {
    expect(fixture.nativeElement.querySelector('button')?.disabled).toBeTruthy();
  })

  it('should call "fetchPost" method once button clicked', () => {
    spyOn(component, 'fetchPost');

    component.name.setValue(1);    

    fixture.detectChanges();

    fixture.nativeElement.querySelector('button')?.click();

    expect(component.fetchPost).toHaveBeenCalled();
  });
});
