person.clone1 = 'Rick'
person.clone2 = 'Rick'
samePerson = person
person.age += 1
person.country = 'FR'
Object.freeze(person.clone1)
Object.freeze(person.clone2)
console.log(person)
console.log(samePerson)