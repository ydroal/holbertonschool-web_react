import { SELECT_COURSE, UNSELECT_COURSE, FETCH_COURSE_SUCCESS } from '../actions/courseActionTypes';

const initialState = [];

const courseReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_COURSE_SUCCESS:
      return action.data.map(course => ({
        ...course,
        isSelected: false
      }));
    case SELECT_COURSE:
    // 指定されたIDのコースのisSelectedプロパティをtrueに設定
      return state.map(course =>
        course.id === action.index ? { ...course, isSelected: true } : course
      );
    case UNSELECT_COURSE:
      // 指定されたIDのコースのisSelectedプロパティをfalseに設定
        return state.map(course =>
          course.id === action.index ? { ...course, isSelected: false } : course
        );
    default:
      return state;
  }
};

export default courseReducer;