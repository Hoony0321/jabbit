export const API_SUCCESS_INFOS = {
  READ_SUCCESS: {
    statusCode: 200,
    message: '조회 성공',
  },
  CREATE_SUCCESS: {
    statusCode: 201,
    message: '생성 성공',
  },
  UPDATE_SUCCESS: {
    statusCode: 200,
    message: '수정 성공',
  },
  DELETE_SUCCESS: {
    statusCode: 200,
    message: '삭제 성공',
  },
} as const;

export const API_ERROR_INFOS = {
  NOT_FOUND_ERROR: {
    statusCode: 404,
    message: '조회 실패',
  },
  CREATE_ERROR: {
    statusCode: 500,
    message: '생성 실패',
  },
  UPDATE_ERROR: {
    statusCode: 500,
    message: '수정 실패',
  },
  DELETE_ERROR: {
    statusCode: 500,
    message: '삭제 실패',
  },
  UNKNOWN_ERROR: {
    statusCode: 500,
    message: '알 수 없는 오류',
  },
  UNAUTHORIZED_ERROR: {
    statusCode: 401,
    message: '인증 필요',
  },
  FORBIDDEN_ERROR: {
    statusCode: 403,
    message: '권한 없음',
  },
  BAD_REQUEST_ERROR: {
    statusCode: 400,
    message: '잘못된 요청',
  },
  FETCH_FAILED: {
    statusCode: 500,
    message: '데이터 조회 실패',
  },
} as const;

export type ApiSuccessInfoKeys = keyof typeof API_SUCCESS_INFOS;
export type ApiErrorInfoKeys = keyof typeof API_ERROR_INFOS;
