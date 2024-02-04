import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

export const styles = StyleSheet.create({
  headerStyle: {
    backgroundColor: '#deb5b545',
    borderBottom: '1px solid #c0c0c0',
  },
  rowStyle: {
    backgroundColor: '#f5f5f5ab',
  },
  colSpan2: {
    textAlign: 'center',
  },
  rowChecked: {
    backgroundColor: '#e6e4e4',
  }
});


 function CourseListRow({ isHeader, textFirstCell, textSecondCell }) {
  // stateを管理。state変数 isChecked定義し、それを更新するための関数setIsCheckedを生成
  const [isChecked, setIsChecked] = useState(false);

  let content;

  if (isHeader) {
    if (textSecondCell === null) {
      content = <th colSpan="2" className={css(styles.colSpan2)}>{textFirstCell}</th>;
    } else {
      content = (
        <>
          <th className={css(styles.headerRow)}>{textFirstCell}</th>
          <th className={css(styles.headerRow)}>{textSecondCell}</th>
        </>
      );
    }
  } else {
    content = (
      <>
        <td>
          {textSecondCell === null ? (
            <input
              type="checkbox"
              checked={isChecked}
              onChange={() => setIsChecked(!isChecked)}
            />
          ) : null}
          {textFirstCell}
        </td>
        <td>{textSecondCell}</td>
      </>
    );
  }

  return (
    <tr className={css(isHeader ? styles.headerStyle : (isChecked ? styles.rowChecked : styles.rowStyle))}>
      {content}
    </tr>
  );
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