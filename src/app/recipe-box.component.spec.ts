import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { RecipeBoxAppComponent } from '../app/recipe-box.component';

beforeEachProviders(() => [RecipeBoxAppComponent]);

describe('App: RecipeBox', () => {
  it('should create the app',
      inject([RecipeBoxAppComponent], (app: RecipeBoxAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'recipe-box works!\'',
      inject([RecipeBoxAppComponent], (app: RecipeBoxAppComponent) => {
    expect(app.title).toEqual('recipe-box works!');
  }));
});
