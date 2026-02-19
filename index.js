import {
  addComputedData,
  filterPersonsByWebDomain,
  obtainTotalsByCondition,
  obtainTotalsBySomeConditions,
} from './dataService.js';
import { fetchPersons } from './fetchPersons.js';
import { printSummary } from './printSummary.js';

const start = async () => {
  // Fetch persons data
  const persons = await fetchPersons({
    quantity: 50,
    seed: 'David',
    birthdayStart: '2005-01-01',
    birthdayEnd: '2009-12-31',
  });

  // Filter by .com website
  const filteredPersons = filterPersonsByWebDomain(persons, '.com');

  // Add computed data, age and continent
  const personsWithComputed = addComputedData(filteredPersons);

  // Totals by condition
  const personsByAge = obtainTotalsByCondition(personsWithComputed, 'age');
  const personsByContinent = obtainTotalsByCondition(personsWithComputed, 'continent');
  const personsByGender = obtainTotalsByCondition(personsWithComputed, 'gender');

  // Totals by some conditions
  const personsByConditions = obtainTotalsBySomeConditions(personsWithComputed, ['age', 'continent', 'gender']);

  // Print in console
  printSummary({
    persons,
    filteredPersons,
    personsByAge,
    personsByContinent,
    personsByGender,
    personsByConditions,
  });
};

start();
