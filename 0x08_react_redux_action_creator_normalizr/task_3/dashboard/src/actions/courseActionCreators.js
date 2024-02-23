import { SELECT_COURSE, UNSELECT_COURSE } from './courseActionTypes';

// selectCourseアクションクリエーター
const selectCourse = (index) => {
  return { type: SELECT_COURSE, index };
};

// unSelectCourseアクションクリエーター
const unSelectCourse = (index) => {
  return { type: UNSELECT_COURSE, index };
};

export { selectCourse, unSelectCourse };