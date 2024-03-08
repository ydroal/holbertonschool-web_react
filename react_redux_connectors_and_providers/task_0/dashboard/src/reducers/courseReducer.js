import { Map, List } from 'immutable';
import { SELECT_COURSE, UNSELECT_COURSE, FETCH_COURSE_SUCCESS } from '../actions/courseActionTypes';
import { coursesNormalizer } from '../schema/courses';

export const initialState = Map({
  entities: Map(), // entitiesをMapとして初期化
});


export const courseReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_COURSE_SUCCESS:
      const courses = action.data.map(course => ({
        ...course,
        isSelected: false
      }));
      const normalizedCourses = coursesNormalizer(courses, [courses]);
      return state.merge({
        entities: normalizedCourses.entities
        // resultまたはidsキーは省略
      });
      
    case SELECT_COURSE:
    // 指定されたIDのコースのisSelectedプロパティをtrueに設定
    return state.setIn(['entities', 'courses', String(action.index), 'isSelected'], true);

    case UNSELECT_COURSE:
      // 指定されたIDのコースのisSelectedプロパティをfalseに設定
      return state.setIn(['entities', 'courses', String(action.index), 'isSelected'], false);
    
    default:
    return state;
  }
};



