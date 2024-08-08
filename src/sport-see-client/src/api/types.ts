export type ApiResponse<T> = {
  data: T;
};

export type UserMainData = {
  id: number;
  userInfos: UserInfo;
  score: number;
  keyData: UserKeyData;
};

export type UserInfo = {
  firstName: string;
  lastName: string;
  age: number;
};

export type UserKeyData = {
  calorieCount: number;
  proteinCount: number;
  carbohydrateCount: number;
  lipidCount: number;
};

export type UserActivity = {
  userId: number;
  sessions: ActivitySession[];
};

export type ActivitySession = {
  day: string;
  kilogram: number;
  calories: number;
};

export type UserAverage = {
  userId: number;
  sessions: AverageSession[];
};

export type AverageSession = {
  day: number;
  sessionLength: number;
};

export type UserPerformance = {
  userId: number;
  kind: PerformanceKind;
  data: PerformanceData[];
};

export type PerformanceKind = {
  1: string;
  2: string;
  3: string;
  4: string;
  5: string;
  6: string;
};

export type PerformanceData = {
  value: number;
  kind: number;
};
