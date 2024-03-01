import courseReducer from './courseReducer.js';
import { SELECT_COURSE, UNSELECT_COURSE, FETCH_COURSE_SUCCESS } from '../actions/courseActionTypes';

const initialState = [];

describe('courseReducer', () => {
  // デフォルトの状態が空の配列を返すことをテスト
  it('default state should returns an empty array', () => {
    const state = courseReducer(undefined, {});
    expect(state).toEqual(initialState);
  });

  it('FETCH_COURSE_SUCCESS should returns the data passed', () => {
    const action = {
      type: FETCH_COURSE_SUCCESS,
      data: [
        { id: 1, name: "ES6", credit: 60 },
        { id: 2, name: "Webpack", credit: 20 },
        { id: 3, name: "React", credit: 40 }
      ]
    };
    const expectedState = action.data.map(course => ({ ...course, isSelected: false }));
    const state = courseReducer(initialState, action);
    expect(state).toEqual(expectedState);
  });

  // SELECT_COURSEアクションが指定したアイテムを正しく更新することをテスト
  it('should SELECT_COURSE returns the data with the right item updated', () => {
    const initialState = [
      { id: 1, name: "ES6", isSelected: false, credit: 60 },
      { id: 2, name: "Webpack", isSelected: false, credit: 20 },
      { id: 3, name: "React", isSelected: false, credit: 40 }
    ];
    const action = { type: SELECT_COURSE, index: 2 };
    const updatedState = courseReducer(initialState, action);
    expect(updatedState[1].isSelected).toBe(true);
  });

  // UNSELECT_COURSEアクションが指定したアイテムを正しく更新することをテスト
  it('UNSELECT_COURSE should return the data with the right item updated', () => {
    const initialState = [
      { id: 1, name: "ES6", isSelected: false, credit: 60 },
      { id: 2, name: "Webpack", isSelected: true, credit: 20 },
      { id: 3, name: "React", isSelected: false, credit: 40 }
    ];
    const action = { type: UNSELECT_COURSE, index: 2 };
    const updatedState = courseReducer(initialState, action);
    expect(updatedState[1].isSelected).toBe(false);
  });
  });