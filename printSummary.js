export const printSummary = ({
  persons,
  filteredPersons,
  personsByAge,
  personsByContinent,
  personsByGender,
  personsByConditions,
}) => {
  console.log('======SUMMARY======');
  console.log('');
  console.log(`TOTAL PERSONS FETCHED: ${persons.length}`);
  console.log(`TOTAL PERSONS FILTERED: ${filteredPersons.length}`);
  console.log('');
  console.log('TOTAL PERSONS BY AGE');
  console.table(personsByAge);
  console.log('');
  console.log('TOTAL PERSONS BY CONTINENT');
  console.table(personsByContinent);
  console.log('');
  console.log('TOTAL PERSONS BY GENDER');
  console.table(personsByGender);
  console.log('');
  console.log('TOTAL PERSONS BY AGE, CONTINENT AND GENDER');
  console.table(personsByConditions);
};
