import { Map } from 'immutable';
import { courseReducer, initialState } from './courseReducer.js';
import { SELECT_COURSE, UNSELECT_COURSE, FETCH_COURSE_SUCCESS } from '../actions/courseActionTypes';
import { coursesNormalizer } from '../schema/courses';

describe('courseReducer', () => {
  // デフォルトの状態が空の配列を返すことをテスト
  it('default state should returns an empty array', () => {
    const state = courseReducer(undefined, {});
    expect(state.toJS()).toEqual(initialState.toJS());
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
    // アクションをディスパッチして更新されたステートを取得
    const updatedState = courseReducer(initialState, action);

    // 更新されたステートと期待される正規化されたデータを比較
    expect(updatedState.toJS()).toEqual({
      entities: {
        courses: {
          '1': { id: 1, name: "ES6", credit: 60, isSelected: false },
          '2': { id: 2, name: "Webpack", credit: 20, isSelected: false },
          '3': { id: 3, name: "React", credit: 40, isSelected: false }
        }
      }
    });
  });

  // SELECT_COURSEアクションが指定したアイテムを正しく更新することをテスト
  it('should SELECT_COURSE returns the data with the right item updated', () => {
    const initialState = courseReducer(initialState, {
      type: FETCH_COURSE_SUCCESS,
      data: [
        { id: 1, name: "ES6", credit: 60 },
        { id: 2, name: "Webpack", credit: 20 },
        { id: 3, name: "React", credit: 40 }
      ]
    });

    // SELECT_COURSEアクションを適用
    const action = { type: SELECT_COURSE, index: 2 };
    const updatedState = courseReducer(initialState, action);

    // 更新されたステートからcoursesを取得
    const courses = updatedState.getIn(['entities', 'courses']);
    const coursesJs = Map.isMap(courses) ? courses.toJS() : courses;

    // 期待されるcoursesオブジェクト
    const expectedCourses = {
      '1': { id: 1, name: "ES6", credit: 60, isSelected: false },
      '2': { id: 2, name: "Webpack", credit: 20, isSelected: true },
      '3': { id: 3, name: "React", credit: 40, isSelected: false }
    };

  expect(coursesJs).toEqual(expectedCourses);

});
  
  // UNSELECT_COURSEアクションが指定したアイテムを正しく更新することをテスト
  it('UNSELECT_COURSE should return the data with the right item updated', () => {
    const initialState = courseReducer(initialState, {
      type: FETCH_COURSE_SUCCESS,
      data: [
        { id: 1, name: "ES6", credit: 60 },
        { id: 2, name: "Webpack", credit: 20 },
        { id: 3, name: "React", credit: 40 }
      ]
    });

    // SELECT_COURSEアクションを適用
    const action = { type: UNSELECT_COURSE, index: 2 };
    const updatedState = courseReducer(initialState, action);

    // 更新されたステートからcoursesを取得
    const courses = updatedState.getIn(['entities', 'courses']);
    const coursesJs = Map.isMap(courses) ? courses.toJS() : courses;

    // 期待されるcoursesオブジェクト
    const expectedCourses = {
      '1': { id: 1, name: "ES6", credit: 60, isSelected: false },
      '2': { id: 2, name: "Webpack", credit: 20, isSelected: false },
      '3': { id: 3, name: "React", credit: 40, isSelected: false }
    };

  expect(coursesJs).toEqual(expectedCourses);
  });
});