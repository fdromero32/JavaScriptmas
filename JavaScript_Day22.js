function extractMatrixColumn(matrix, column) {
  let columnArray = [];
  matrix.map((m) => {
    columnArray.push(m[column]);
  });
  return columnArray;
}
