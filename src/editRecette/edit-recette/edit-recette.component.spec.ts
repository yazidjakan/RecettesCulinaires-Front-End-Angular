import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditRecetteComponent } from './edit-recette.component';

describe('EditRecetteComponent', () => {
  let component: EditRecetteComponent;
  let fixture: ComponentFixture<EditRecetteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditRecetteComponent]
    });
    fixture = TestBed.createComponent(EditRecetteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
