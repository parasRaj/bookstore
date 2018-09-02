import { BookstoreModule } from './bookstore.module';

describe('BookstoreModule', () => {
  let bookstoreModule: BookstoreModule;

  beforeEach(() => {
    bookstoreModule = new BookstoreModule();
  });

  it('should create an instance', () => {
    expect(bookstoreModule).toBeTruthy();
  });
});
