import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EmployersComponent } from './employers.component';

EmployersComponent
describe('EmployersComponent', () => {
  let component: EmployersComponent;
  let fixture: ComponentFixture<EmployersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
