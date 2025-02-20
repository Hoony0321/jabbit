export const API_MESSAGES = {
  READ_SUCCESS: '데이터 조회 성공',
  CREATE_SUCCESS: '데이터 생성 성공',
  UPDATE_SUCCESS: '데이터 수정 성공',
  DELETE_SUCCESS: '데이터 삭제 성공',
} as const;

export type ApiMessageKey = keyof typeof API_MESSAGES;
