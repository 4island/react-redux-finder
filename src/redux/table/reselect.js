import { createSelector } from 'reselect';
 const posSelector = state => state.filters.position;
 const ageSelector = state => state.filters.age;
 const nameSelector = state => state.filters.name;
 
 export const mapDataPlayer = createSelector(
  (state)=> state.player,
  (players)=> players.map((player)=>{
    return {
      name:player.name,
      position:player.position,
      team:player.nationality,
      age: getAge(player.dateOfBirth) 
    }
  })
)

export const filterDataPlayers = createSelector(
  [ posSelector, ageSelector, nameSelector, mapDataPlayer ],
  (position, age, name, players) => players.filter(p => {
    const posCondition = !position || position === p.position;
    const ageCondition = !age || parseInt(age, 10) === p.age;
    const nameCondition = !name || p.name.toLowerCase().includes(name.toLowerCase());
    return posCondition && ageCondition && nameCondition;
  })
);

function getAge(dateOfBirth){
  let today = new Date()
  let birth = dateOfBirth.split("-")
  let parsedBirth = new Date(parseInt(birth[0],10),parseInt(birth[1],10) - 1, parseInt(birth[2],10))
  if (today.getMonth() > parsedBirth.getMonth() && today.getDay() > parsedBirth.getDay())
  {
    return (today.getFullYear() - parsedBirth.getFullYear())
  }
  return (today.getFullYear() - (parsedBirth.getFullYear()-1))
}
