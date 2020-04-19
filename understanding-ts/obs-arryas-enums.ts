enum Role { ADMIN, READ_ONLY, AUTHOR };

const person = {
    name: 'Cliff',
    age: 33,
    hobbies: ['Basketball', 'Writing'],
    role: Role.ADMIN
};

let favoriteActivities: string[];
favoriteActivities = ['Sports'];

console.log(person.name);

for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase());
}