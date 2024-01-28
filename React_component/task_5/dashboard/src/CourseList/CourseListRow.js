import React from 'react';
import PropTypes from 'prop-types';

 function CourseListRow({ isHeader, textFirstCell, textSecondCell }) {
  let content;

  if (isHeader) {
    if (textSecondCell === null) {
      content = <th colSpan="2">{textFirstCell}</th>;
    } else {
      content = (
        <>
          <th>{textFirstCell}</th>
          <th>{textSecondCell}</th>
        </>
      );
    }
  } else {
    content = (
      <>
        <td>{textFirstCell}</td>
        <td>{textSecondCell}</td>
      </>
    );
  }

  return <tr>{content}</tr>;
};

CourseListRow.propTypes = {
  isHeader: PropTypes.bool,
  textFirstCell: PropTypes.string.isRequired,
  textSecondCell: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string
  ])
};

CourseListRow.defaultProps = {
  isHeader: false,
  textSecondCell: null
}

export default CourseListRow;