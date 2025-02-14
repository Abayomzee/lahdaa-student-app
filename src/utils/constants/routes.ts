export const appRoutes = Object.freeze({
  // Auth pages
  REGISTER: "/student/register",
  LOGIN: "/student/login",
  VERIFY: "/student/verify",
  // WORKSHOP: "/student/workshop",
  // SESSION: "/student/session",
  LEARNING: "/student/learning/:tab",
  WORKSHOP: "workshop",
  SESSION: "session",

  LEARNING_SESSION: "/student/learning?type=session",
  LEARNING_WORKSHOP: "/student/learning?type=workshop",
});
