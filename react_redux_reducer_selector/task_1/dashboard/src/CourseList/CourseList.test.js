import React from 'react';
import { shallow } from 'enzyme';
import { StyleSheetTestUtils } from 'aphrodite';
import CourseList from './CourseList';
import CourseListRow from './CourseListRow';

beforeAll(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});

afterAll(() => {
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

describe('CourseList', () => {
  // 子コンポーネントはインスタンス化されるが、DOMにはマウントされず、子コンポーネント自体はレンダリングされない
  // 子コンポーネントのレンダリングの成否は直接的にはこのテストには影響しない
  it('renders CourseList component without crashing', () => {
    shallow(<CourseList />);
  });

  describe('With CourseList Empty', () => {
    let wrapper;
    beforeEach(() => {
      wrapper = shallow(<CourseList listCourses={[]} />);
    });

    it('renders 3 rows', () => {
      expect(wrapper.find(CourseListRow).length).toBe(3);
    });

    it('includes "No course available yet" text', () => {
      expect(wrapper.contains(<CourseListRow textFirstCell="No course available yet" />)).toBe(true);
    });
  });

  describe('With CourseList containing elements', () => {
    let wrapper;
    const listCourses = [
      { id: 1, name: 'ES6', credit: 60 },
      { id: 2, name: 'Webpack', credit: 20 },
      { id: 3, name: 'React', credit: 40 }
    ];

    beforeEach(() => {
      wrapper = shallow(<CourseList listCourses={listCourses} />);
    });

    it('renders 5 rows', () => {
      expect(wrapper.find(CourseListRow).length).toBe(5);
    });
  });
});