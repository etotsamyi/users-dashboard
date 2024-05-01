import { TStatisticsValuesByAge, TStatisticsValuesByGender } from "./statistics-block.types";

export const usersStatisticsByAgeDefault: TStatisticsValuesByAge = {
  usersFrom11To20: 0,
  usersFrom21To30: 0,
  usersFrom31To40: 0,
  usersFrom41To50: 0,
  usersFrom51: 0,
};

export const usersStatisticsByGenderDefault: TStatisticsValuesByGender = {
  maleUsers: 0,
  femaleUsers: 0,
};

export const usersFrom11To20FieldName = '11 to 20';
export const usersFrom21To30FieldName = '21 to 30';
export const usersFrom31To40FieldName = '31 to 40';
export const usersFrom41To50FieldName = '41 to 50';
export const usersFrom51FieldName = '50+';

export const maleUsersFieldName = 'Male';
export const femaleUsersFieldName = 'Female';
