
clone1 = person
clone2 = person
samePerson = person

person.age += 1
person.country = 'FR'
Object.freeze(clone1)

Object.freeze(clone2)
