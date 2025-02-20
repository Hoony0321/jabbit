export const ERROR_INFOS = {
  invalidRequest: { message: '잘못된 요청입니다.', statusCode: 400 },
  unauthorized: { message: '인증이 필요합니다.', statusCode: 401 },
  forbidden: { message: '접근이 금지되었습니다.', statusCode: 403 },
  notFound: { message: '찾을 수 없는 페이지입니다.', statusCode: 404 },
  fetchFailed: { message: '데이터를 가져오지 못했습니다.', statusCode: 500 },
  serverError: { message: '서버 오류가 발생했습니다.', statusCode: 500 },
  networkError: { message: '네트워크 오류가 발생했습니다.', statusCode: 503 },
  unknownError: { message: '알 수 없는 오류가 발생했습니다.', statusCode: 500 },

  // auth
  'auth.accessTokenFailed': {
    message: '액세스 토큰 발급에 실패했습니다.',
    statusCode: 400,
  },
  'auth.noCode': { message: '인증 코드를 받지 못했습니다.', statusCode: 400 },
  'auth.fetchUserInfoFailed': {
    message: '사용자 정보를 가져오지 못했습니다.',
    statusCode: 500,
  },
  'auth.invalidToken': {
    message: '유효하지 않은 토큰입니다.',
    statusCode: 401,
  },

  // google sheet
  'googleSheet.noData': {
    message: '데이터를 가져오지 못했습니다.',
    statusCode: 404,
  },
  'googleSheet.parseError': {
    message: '데이터를 파싱하지 못했습니다.',
    statusCode: 500,
  },
  'googleSheet.expertNotFound': {
    message: '전문가를 찾을 수 없습니다.',
    statusCode: 404,
  },
} as const;

export type ErrorInfoKey = keyof typeof ERROR_INFOS;
