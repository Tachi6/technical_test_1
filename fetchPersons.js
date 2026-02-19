export const fetchPersons = async ({ quantity, seed, birthdayStart, birthdayEnd }) => {
  try {
    const resp = await fetch(
      `https://fakerapi.it/api/v2/persons?_quantity=${quantity}&_birthday_start=${birthdayStart}&_birthday_end=${birthdayEnd}&_seed=${seed}`,
    );
    const data = await resp.json();

    if (!resp.ok) {
      throw new Error(`${resp.status} - ${resp.statusText}`);
    }

    return data.data;
  } catch (error) {
    console.log(error);
  }
};
