export interface Book {
  id: string;
  volumeInfo: {
    title?: string;
    authors: [];
    publishedDate: string;
    description: string;
  }
}
