import React from 'react';
import PropTypes from 'prop-types';

 function CourseListRow({ isHeader, textFirstCell, textSecondCell }) {
  const headerStyle = { 
    backgroundColor: '#deb5b545',
    borderBottom: '1px solid #c0c0c0',
  };
  
  const rowStyle = { 
    backgroundColor: '#f5f5f5ab',
   };

   const colSpan2 = { 
    textAlign: 'center',
   };

  let content;

  if (isHeader) {
    if (textSecondCell === null) {
      content = <th colSpan="2" style={colSpan2}>{textFirstCell}</th>;
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