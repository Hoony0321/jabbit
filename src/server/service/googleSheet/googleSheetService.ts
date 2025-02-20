import { google } from 'googleapis';

const auth = new google.auth.GoogleAuth({
  credentials: {
    client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
    private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
  },
  scopes: ['https://www.googleapis.com/auth/spreadsheets'],
});

const sheetsClient = google.sheets({ version: 'v4', auth });
const spreadsheetId = process.env.GOOGLE_SPREADSHEET_ID;

export const readSheetData = async (sheetName: string, range: string) => {
  const response = await sheetsClient.spreadsheets.values.get({
    spreadsheetId,
    range: `${sheetName}!${range}`,
  });

  const headerRow = response.data.values?.[0];
  const dataRows = response.data.values?.slice(1);

  return { headerRow, dataRows };
};

export const findSheetDataById = async (
  sheetName: string,
  range: string,
  id: string,
) => {
  const response = await sheetsClient.spreadsheets.values.get({
    spreadsheetId,
    range: `${sheetName}!${range}`,
  });

  const headerRow = response.data.values?.[0];
  const dataRows = response.data.values?.slice(1);

  return {
    headerRow,
    dataRows: dataRows?.find((value) => value[0] === id),
  };
};

export const appendSheetData = async (
  sheetName: string,
  range: string,
  values: any[][],
) => {
  const response = await sheetsClient.spreadsheets.values.append({
    spreadsheetId,
    range: `${sheetName}!${range}`,
    valueInputOption: 'RAW',
    requestBody: { values },
  });

  return response.data;
};

export const updateSheetData = async (
  sheetName: string,
  range: string,
  values: any[][],
) => {
  const response = await sheetsClient.spreadsheets.values.update({
    spreadsheetId,
    range: `${sheetName}!${range}`,
    valueInputOption: 'RAW',
    requestBody: { values },
  });

  return response.data;
};

export const deleteSheetData = async (sheetName: string, range: string) => {
  const response = await sheetsClient.spreadsheets.values.clear({
    spreadsheetId,
    range: `${sheetName}!${range}`,
  });

  return response.data;
};
