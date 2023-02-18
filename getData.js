// const options = {
//     method: 'GET',
//     headers: {
//       'X-RapidAPI-Key': '[REDDACTED]',
//       'X-RapidAPI-Host': 'mashape-community-urban-dictionary.p.rapidapi.com'
//     }
//   };

//Urban dictionary API for troll puposes options
  
  
  
  
  async function getData(word){
    try{
      const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
      const response = await fetch(url);
      const result = await response.json();
      return result[0].meanings[0].definitions[0].definition;
    }catch(err){
      console.log(err)
      return  "No definition found";
    }
}

  
  module.exports = getData;