import React from 'react';
import { shallow } from 'enzyme';
import CourseList from './CourseList';
import CourseListRow from './CourseListRow';

describe('CourseList', () => {
  // 子コンポーネントはインスタンス化されるが、DOMにはマウントされず、子コンポーネント自体はレンダリングされない
  // 子コンポーネントのレンダリングの成否は直接的にはこのテストには影響しない
  it('renders CourseList component without crashing', () => {
    shallow(<CourseList />);
  });

  it('renders the 5 different rows', () => {
    const wrapper = shallow(<CourseList />);
    expect(wrapper.find(CourseListRow).length).toBe(5);
  });
});