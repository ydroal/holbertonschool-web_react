import React from 'react';
import { shallow } from 'enzyme';
import CourseListRow from './CourseListRow';

describe('CourseListRow', () => {

  it('renders one cell with colspan = 2 when isHeader is true and textSecondCell does not exist', () => {
    // プロパティにブール値や値がある場合にはそのまま渡せるが、文字列として"true"や"false"、"null"は渡せない
    // ブール値としてtrueやfalseを渡す場合は、""ではなく、中括弧を使ってリテラル値を指定する
    const wrapper = shallow(<CourseListRow isHeader={true} textFirstCell="Test" />);
    const th = wrapper.find('th');
    expect(th.length).toBe(1);
    expect(th.props().colSpan).toBe("2");
  });

  it('renders two cells when isHeader is true and textSecondCell is present', () => {
    const wrapper = shallow(<CourseListRow isHeader={true} textFirstCell="Test" textSecondCell="Test2" />);
    expect(wrapper.find('th').length).toBe(2);
  });

  it('renders correctly two td elements within a tr element when isHeader is false', () => {
    const wrapper = shallow(<CourseListRow isHeader={false} textFirstCell="Test" textSecondCell="Test2" />);
    expect(wrapper.find('td').length).toBe(2);
  });
});
