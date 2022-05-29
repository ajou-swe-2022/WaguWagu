import { USER_NAME, getCookie } from "@Common/Util/cookie";

export const loginMessage = "로그인 해주세요!";

export const greetingsMessage = `${decodeURI(getCookie(USER_NAME))}`;
