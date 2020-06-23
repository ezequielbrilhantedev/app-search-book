export class APIResponse<T> {
  count: number;
  next: string;
  previous: string;
  results: Array<T>;
}
