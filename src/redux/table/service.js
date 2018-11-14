export async function requestPlayer() {
  let response;
  try{
    response = await fetch("https://football-players-b31f2.firebaseio.com/players.json?print=pretty")
    return await response.json();
  }catch(err){
    return [];
  }
}