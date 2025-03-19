/** @format */

// Utility || Helper endpoints
const getCountriesUrl = "/helper/get-all-countries";

// Auth endpoints
const registerStudentUrl = "/student-register";
const loginUrl = "/login";

// Workshop endpoints
const workshopUrl = "/course/get-all-courses-by-course-type";
const studentCoursesUrl = "/student/get-all-courses-by-course-type";

const studentUpcomingCoursesUrl = "/student/get-student-upcoming-classes";
const studentEnrolledCoursesUrl = "/student/get-student-enrolled-courses";
const studentOngoingCoursesUrl = "/student/get-student-ongoing-courses";
const studentCompletedCoursesUrl = "/student/get-student-completed-courses";
const studentCourseWishlistUrl = "/student/get-student-course-wishlist";

/* eslint import/no-anonymous-default-export: [2, {"allowObject": true}] */
export default {
  // Utility || Helper endpoints
  getCountriesUrl,

  // Auth endpoints
  registerStudentUrl,
  loginUrl,

  // Courses endpoints
  workshopUrl,
  studentCoursesUrl,
  studentOngoingCoursesUrl,
  studentUpcomingCoursesUrl,
  studentEnrolledCoursesUrl,
  studentCompletedCoursesUrl,
  studentCourseWishlistUrl,
};
