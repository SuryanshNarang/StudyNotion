// we can tell here that which link we have to call
const BASE_URL= "http://localhost:4000/api/v1";
// below is the code like this we will call the apis: first services is created then apis.js then useEffect is used to call apiconnector
export const categories = {
  COURSE_CATEGORIES_API: BASE_URL + "/course/showAllCategory",
};
