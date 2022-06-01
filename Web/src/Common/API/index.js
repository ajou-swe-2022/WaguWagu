// ============== Login ============== //

export const POST_ACCOUNT_INFO = () => {
  return `https://diunbu3dmy.ap-northeast-1.awsapprunner.com/api/v1/biz/login`;
};

// ============== Enroll ============== //

export const GET_ID_DUP = (params) => {
  return `https://diunbu3dmy.ap-northeast-1.awsapprunner.com/api/v1/biz/users?email=${params}`;
};

export const POST_RESTAURANT_INFO = () => {
  return `https://diunbu3dmy.ap-northeast-1.awsapprunner.com/api/v1/restaurants`;
};

// ============== Admin (Store) ============== //

export const GET_RESTAURANT_INFO = (params) => {
  return `https://diunbu3dmy.ap-northeast-1.awsapprunner.com/api/v1/restaurants/${params}`;
};

export const PUT_RESTAURANT_INFO = (params) => {
  return `https://diunbu3dmy.ap-northeast-1.awsapprunner.com:443/api/v1/restaurants/${params.userID}`;
};

export const POST_MENU_INFO = (params) => {
  return `https://diunbu3dmy.ap-northeast-1.awsapprunner.com:443/api/v1/restaurant/${params.userID}/menu`;
};

export const PUT_MENU_INFO = (params) => {
  return `https://diunbu3dmy.ap-northeast-1.awsapprunner.com:443/api/v1/restaurants/${params.userID}/menu/${params.menuID}`;
};

export const DEL_MENU_INFO = (params) => {
  return `https://diunbu3dmy.ap-northeast-1.awsapprunner.com:443/api/v1/restaurants/${params.userID}/menu/${params.menuID}`;
};

// ============== Admin (Table) ============== //

export const GET_TABLE_INFO = (params) => {
  return `https://diunbu3dmy.ap-northeast-1.awsapprunner.com:443/api/v1/restaurants/${params}/tables`;
};

export const POST_TABLE_INFO = (params) => {
  return `https://diunbu3dmy.ap-northeast-1.awsapprunner.com:443/api/v1/restaurants/${params.userID}/tables`;
};

export const DEL_TABLE_INFO = (params) => {
  return `https://diunbu3dmy.ap-northeast-1.awsapprunner.com:443/api/v1/restaurants/${params.userID}/tables/${params.tableID}`;
};

export const PUT_TABLE_INFO = (params) => {
  return `https://diunbu3dmy.ap-northeast-1.awsapprunner.com:443/api/v1/restaurants/${params.userID}/tables/${params.tableID}`;
};
