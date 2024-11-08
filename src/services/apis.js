// we can tell here that which link we have to call
const BASE_URL = process.env.REACT_APP_BASE_URL;
// below is the code like this we will call the apis: first services is created then apis.js then useEffect is used to call apiconnector
export const categories = {
  CATEGORIES_API: BASE_URL + "/course/showAllCategories",
};
