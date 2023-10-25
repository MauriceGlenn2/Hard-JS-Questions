/**
 * First incomplete todos
 * 
 * call API https://jsonplaceholder.typicode.com/todos
 *  Retrun the first 6 incomplete todos for the result
 */

async function firstSixIncomplete () {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos"
      );
      const data = await response.json();
      console.log(data); 
      const incompletes = data.filter(elem => !elem.completed).slice(0, 6) 
     
      console.log(incompletes);
}

firstSixIncomplete()