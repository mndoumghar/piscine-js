person.clone1 = 'Rick'
person.clone2 = 'Rick'
person.samePerson = person.name
person.age += 1
person.country = 'FR'
Object.freeze(person.clone1)
Object.freeze(person.clone2)