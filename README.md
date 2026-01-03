# Google Sheets: Auto-add specific headers on a new tab

Automatically adds a predefined header row to the most recently added sheet tab in a Google Sheet, based on a defined starting location.

## Business problem

When working on projects where a new tab is created for each new item, it is often necessary to add the same predefined headers to every tab. Manually copying and pasting headers becomes repetitive and error-prone over time.

## Real-life use case

I use Google Sheets to track my job application process. Each company has its own tab, and every new tab requires the same set of headers.  
Before this script, I had to copy and paste headers from an existing tab each time. This script automatically inserts the headers as soon as a new tab is added.

## Setup

1. Open your Google Sheet
2. Go to **Extensions → Apps Script**
3. Paste `Code.gs` into the project
4. Go to **Triggers (⏰) → Add Trigger**
   - Choose function: `onChange`
   - Event source: **From spreadsheet**
   - Event type: **On change**
5. Save and authorize the script

## Configuration

Edit the following values to customize the headers and where they are written:

- `headers` – the list of header names
- `startPositionOfSelectedRows` – starting row number
- `startPositionOfSelectedColumns` – starting column number
- `totalNumberofSelectedRows` – number of rows to write

## Notes

**Important takeaway:**  
Using `.getActiveSheet()` does not reliably return the newly added sheet. In many cases, it points to the first sheet instead. So I used allSheetNames[allSheetNames.length - 1]
