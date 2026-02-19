import { COUNTRY_CONTINENT } from './countryContinentData.js';

export const filterPersonsByWebDomain = (persons, domain) =>
  persons.filter((person) => person.website.slice(-4) === domain);

export const obtainAge = (date) => {
  const today = new Date();
  const birthday = new Date(date);

  if (today.getMonth() - birthday.getMonth() < 0) {
    return today.getFullYear() - birthday.getFullYear() - 1;
  }

  if (today.getMonth() - birthday.getMonth() === 0) {
    if (today.getDate() - birthday.getDate() < 0) {
      return today.getFullYear() - birthday.getFullYear() - 1;
    }
  }

  return today.getFullYear() - birthday.getFullYear();
};

export const addComputedData = (persons) =>
  persons.map((person) => ({
    ...person,
    age: obtainAge(person.birthday),
    continent: COUNTRY_CONTINENT[person.address.country_code] || 'Unknown',
  }));

export const obtainTotalsByCondition = (persons, condition) =>
  persons.reduce((acc, curr) => {
    acc[curr[condition]] = (acc[curr[condition]] || 0) + 1;

    return acc;
  }, {});

export const obtainTotalsBySomeConditions = (persons, conditions) =>
  persons.reduce((acc, curr) => {
    const key = conditions.map((field) => curr[field]).join(' - ');

    acc[key] = (acc[key] || 0) + 1;
    return acc;
  }, {});
