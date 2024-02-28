import { SELECT_COURSE, UNSELECT_COURSE } from './courseActionTypes';
import { bindActionCreators } from 'redux';

// selectCourseアクションクリエーター
const selectCourse = (index) => {
  return { type: SELECT_COURSE, index };
};

// unSelectCourseアクションクリエーター
const unSelectCourse = (index) => {
  return { type: UNSELECT_COURSE, index };
};

// ストアからdispatch関数を取得
const dispatch = store.dispatch;

// アクションクリエーターをバインド
const boundActionCreators = bindActionCreators({
  selectCourse,
  unSelectCourse
}, dispatch);

// バインドされたアクションクリエーターをエクスポートする
export default boundActionCreators;