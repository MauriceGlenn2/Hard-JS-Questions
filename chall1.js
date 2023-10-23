/**
 * Show a rating
 *
 * Given a rating, displaya star (*) for each full rating and full-stop(.) for each
 * half rating
 *
 * showRating(3) -> "***"
 * showRating(4.5) -> "****."
 *
 */


function showRating(rating) {
    //initialise an empty string
    let ratings = ""
    //loop through the rounded down rating 
    for (let i = 0; i < Math.floor(rating); ++i) {
    //add a "*" for every iteration    
      ratings += "*";
     //if its not the last iteration add a space 
      if (i !== Math.floor(rating) - 1) {
        ratings += " ";
      }
    }
    //if number is not an integer add a full stop, return it
    if(!Number.isInteger(rating) ){
        ratings += " ."
    }
    return ratings
}
console.log(showRating())