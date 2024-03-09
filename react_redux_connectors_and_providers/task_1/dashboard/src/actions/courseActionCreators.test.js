import configureStore from 'redux-mock-store';
import { thunk } from 'redux-thunk';
import { selectCourse, unSelectCourse } from './courseActionCreators';
import { SELECT_COURSE, UNSELECT_COURSE } from './courseActionTypes';

const mockStore = configureStore([thunk]);

describe('Course Action Creators', () => {
  let store;

  beforeEach(() => {
    store = mockStore({});
  });

  it('selectCourse should create SELECT_COURSE action', () => {
    store.dispatch(selectCourse(1));
    expect(selectCourse(1)).toEqual({ type: SELECT_COURSE, index: 1 });
  })

  it('unSelectCourse should create UNSELECT_COURSE action', () => {
    store.dispatch(unSelectCourse(1));
    expect(unSelectCourse(1)).toEqual({ type: UNSELECT_COURSE, index: 1 });
  });
});