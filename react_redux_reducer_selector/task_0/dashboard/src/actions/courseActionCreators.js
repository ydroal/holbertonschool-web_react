import { SELECT_COURSE, UNSELECT_COURSE } from './courseActionTypes';
// import { bindActionCreators } from 'redux';

// selectCourseアクションクリエーター
export const selectCourse = (index) => {
  return { type: SELECT_COURSE, index };
};

// unSelectCourseアクションクリエーター
export const unSelectCourse = (index) => {
  return { type: UNSELECT_COURSE, index };
};

// Thunkアクションクリエーター
export const dispatchSelectCourse = (index) => {
  return (dispatch) => {
    dispatch(selectCourse(index));
  };
};

// Thunkアクションクリエーター（unselectCourse アクションをディスパッチするための関数）
export const dispatchUnselectCourse = (index) => {
  return (dispatch) => {
    dispatch(unSelectCourse(index));
  };
};

// ストアからdispatch関数を取得
// const dispatch = store.dispatch;

// アクションクリエーターをバインド
// const boundActionCreators = bindActionCreators({
//   selectCourse,
//   unSelectCourse
// }, dispatch);

// バインドされたアクションクリエーターをエクスポートする
// export default boundActionCreators;