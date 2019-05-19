import { ProgressMiddleware } from './progress.middleware';

describe('ProgressMiddleware', () => {
  it('should be defined', () => {
    expect(new ProgressMiddleware()).toBeDefined();
  });
});
