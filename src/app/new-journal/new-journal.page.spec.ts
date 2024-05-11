import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NewJournalPage } from './new-journal.page';

describe('NewJournalPage', () => {
  let component: NewJournalPage;
  let fixture: ComponentFixture<NewJournalPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(NewJournalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
