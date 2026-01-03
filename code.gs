const headers = [
  'Company',
  'SpecificThing',
  'Peers',
  'Manager',
  'Director',
  'Talent',
  'VP+',
];
const startPositionOfSelectedRows = 1; // 1 if you want to add it to the first row
const startPositionOfSelectedColumns = 1; // 1, if you want to start at the first column
const totalNumberofSelectedRows = 1; // usually 1 as we are only selecting the first row
const totalNumberofSelectedColumns = headers.length; // where you want to end your column selection. This will dynamcially change based on your array size

function onChange(e) {
  //dataValidations
  if (!e) return;
  if (e.changeType !== 'INSERT_GRID') return;
  // defining the activeSpreadSheet service object
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  // defining all the available sheets
  const allSheetNames = ss.getSheets();
  // grabbing the last added sheet
  const lastAddedSheetObject = allSheetNames[allSheetNames.length - 1];
  // select the range where you want to add the data and then add the values
  lastAddedSheetObject
    .getRange(
      startPositionOfSelectedRows,
      startPositionOfSelectedColumns,
      totalNumberofSelectedRows,
      totalNumberofSelectedColumns
    )
    .setValues([headers]);
}
