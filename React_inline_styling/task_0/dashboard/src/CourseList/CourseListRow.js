import React from 'react';
import PropTypes from 'prop-types';

 function CourseListRow({ isHeader, textFirstCell, textSecondCell }) {
  const headerStyle = { backgroundColor: '#deb5b545' };
  const rowStyle = { backgroundColor: '#f5f5f5ab' };

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

  return <tr style={isHeader ? headerStyle : rowStyle}>{content}</tr>;
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