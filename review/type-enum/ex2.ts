/*
2. Intermediate
Create a `LevelUser` enum with the values: `Begginer`, `Intermediate`, `Pro` (use strings).
Create a `User` type with `nameUser: string` and `level: LevelUser`.
Write a function that returns a different welcome message depending on the level.
*/

enum LevelUser {
    Beginner = "BEGINNER",
    Intermediate = "INTERMEDIATE",
    Pro = "PRO"
};
/*
console.log(LevelUser) will show: 
{
  '0': 'Begginer',
  '1': 'Intermediate',
  '2': 'Pro',
  Begginer: 0,
  Intermediate: 1,
  Pro: 2
}
*/

type User = {
    nameUser: string;
    level: LevelUser
};

const user1: User = {
    nameUser: "Pedro",
    level: LevelUser.Pro
}

const user2: User = {
    nameUser: "Ronaldo",
    level: LevelUser.Beginner
}

function greetUser(user: User): string {

    switch(user.level) {
        
        case LevelUser.Beginner:
            return "Welcome to the team, rookie!";

        case LevelUser.Intermediate:
            return "So, you're back, soldier?";       
            
        case LevelUser.Pro:
            return "Welcome, boss!"            

        default:
            return "Not info about your level"
    };

};

console.log(greetUser(user1))
console.log(greetUser(user2))