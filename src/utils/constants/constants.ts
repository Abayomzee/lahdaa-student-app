export enum API_RESPONSE_MESSAGES {
  ERROR_OCCURED = "Sorry! An error occured",

  BUSINESS_EXIST = "Business aleady exist",
  BUSINESS_IS_NEW = "Business is new",
  BUSINESS_CREATED = "Business created successfully",
  BUSINESS_DELETED = "Business deleted successfully",
  BUSINESS_APRROVED = "Business approved successfully",
  BUSINESS_CREATE_ERROR = "An error occured while creating a business",

  UNAUTHORIZED = "Unauthorized",
  USER_CREATED = "User successfully created",
  USER_PROFILE_UPDATED = "User profile updated successfully",
  USER_LOGGED_IN = "User successfully logged in",
  USER_DELETED = "User deleted successfully",
  BUSINESS_VERIFIED = "User verified successfully",

  MEAL_CREATED = "Meal created successfully",
  MEAL_DELETED = "Meal deleted successfully",

  REVIEW_CREATED = "Review created successfully",

  EVENT_PROMOTED = "Event promoted successfully",
  EVENT_DELETED = "Event deleted successfully",

  PLAN_CREATED = "Plan successfully created",
  PLAN_EDITED = "Plan successfully edited",
  PLANS_FETCHED = "Plans successfully fetched",
  PLAN_DELETED = "Plan deleted successfully",
  PLAN_STAT_FETCHED = "Plans stat successfully fetched",
  PLAN_CREATE_ERROR = "An error occured while creating a plan",

  CATEGORY_CREATED = "Category created successfully",
}

export enum APPROVAL_STATUS {
  ACTIVE = "active",
  INACTIVE = "inactive",
  PENDING = "pending",
}

export enum USER_VERIFICATION_STATUS {
  VERIFIED = "true",
  UNVERIFIED = "false",
}

export enum MENU_STATUS {
  ACTIVE = "active",
  INACTIVE = "inactive",
  DRAFT = "draft",
}

export enum COUPON_STATUS {
  ACTIVE = "active",
  EXPIRED = "expired",
  PENDING = "pending",
}

export enum ADS_STATUS {
  ACTIVE = "active",
  PENDING = "pending",
}

export enum MENU_SORT_OPTION {
  MEAL_NAME = "mealName",
  LOCATION_ADDRESS = "locationAddress",
  VIEWS = "views",
}

export enum ADMIN_BUSINESS_FILTER_OPTION {
  CLAIMED = "claimed",
  UNCLAIMED = "claimed",
}

export enum ADMIN_BUSINESS_SORT_OPTION {
  DATE = "createdAt",
}

export enum ADMIN_USER_SORT_OPTION {
  DATE = "createdAt",
}

export enum ADMIN_EVENT_FILTER {
  ALL = "",
  UPCOMING = "upcoming",
  PAST = "past",
  TODAY = "today",
  PROMOTED = "promoted",
}

export enum ADMIN_RESOUCRE_FILTER {
  ALL = "",
  PUBLISHED = "published",
  DRAFT = "draft",
}

export enum ADMIN_REVENUE_FILTER {
  ALL = "",
  UPCOMING = "upcoming",
  PAST = "past",
  TODAY = "today",
  PROMOTION = "adsPromotion",
  TIER_SUBSCRIPTION = "tierSubscription",
}

export enum ADMIN_EVENT_SORT {
  DATE = "eventDate",
  FEE = "generalPrice",
  NAME = "eventName",
}

export enum ADMIN_ANALYTICS_SORT {
  ALL_USERS = "",
  ACTIVE_SUBSCRIPTION = "activeSubscription",
  NEW_SUBSCRIPTION = "newSubscription",
}

export enum USER_TYPES {
  USER = "user",
  VENDOR = "vendor",
  ADMIN = "admin",
}

export enum PLAN_SORT_OPTION {
  PLAN_PRICE = "planPrice",
}

export enum PAYMENT_TYPES {
  SUBSCRIPTION = "subscriptionPayment",
  ADS = "adsPayment",
  EVENT_AD = "eventAdsPayment",
  PROMOTION = "promotionPayment",
}

export enum PAYMENT_TYPE_DESCRIPTION {
  subscriptionPayment = "Subscription",
  adsPayment = "Ads",
  eventAdsPayment = "Event",
  promotionPayment = "Promotion",
}

export enum AD_TYPES {
  PROMOTE_BUSINESS = "promote-business",
  BOOST_CONTENT = "boost-content",
  BOOST_MEAL = "boost-meal",
  BOOST_EVENT = "boost-event",
}

export enum AD_GOAL_TYPES {
  GET_WEB_VISITORS = "get-web-visitor",
  GET_PAGE_VIEWS = "get-page-views",
}

export enum AD_TYPES_FOR_DISPLAY {
  PROMOTE_BUSINESS = "promote-business",
  BOOST_CONTENT = "boost-content",
  BOOST_MEAL = "boost-meal",
  BOOST_EVENT = "boost-event",
}

export enum RESOURCE_TYPE {
  USER = "user",
  VENDOR = "vendor",
}

export enum RESOURCE_STATUS {
  PUBLISHED = "published",
  UNPUBLISHED = "unpublished",
  DRAFT = "draft",
}

export enum RESOURCE_SORT_OPTION {
  TITLE = "title",
  VIEWS = "views",
}
