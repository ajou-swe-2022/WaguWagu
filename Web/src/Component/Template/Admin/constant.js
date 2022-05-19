import { ERROR_PAGE } from "@Common/";

// Text

export const MainTitle = "내 정보/매장 관리";

export const AccountManagementTitle = "계정 정보";

export const StoreManagementTitle = "매장 관리";

export const AccountManagement = [
  {
    title: "회원 정보",
    subtitle: "이름, 생년월일, 휴대폰 번호, 이메일을 설정하세요!",
    linkTo: ERROR_PAGE,
  },
  {
    title: "프로필 정보 설정",
    subtitle: "가계 정보, 닉네임, 프로필 이미지를 설정하세요!",
    linkTo: ERROR_PAGE,
  },
  {
    title: "비밀번호 변경",
    subtitle: "비밀번호를 변경하세요!",
    linkTo: ERROR_PAGE,
  },
];

export const StoreManagement = [
  {
    title: "매장 정보 관리",
    subtitle: "매장 대표 사진, 메뉴 등록, 메뉴 사진 등록, 자리 사진 등록",
    linkTo: "/admin/store",
  },
  {
    title: "예약 정보 관리 ",
    subtitle: "시간별 예약관리, 예약 가능한 좌석 설정",
    linkTo: "/admin/table",
  },
];
