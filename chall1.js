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

/**
 * 
 * To solve this problem in JavaScript and display a star '*' for each full rating
 *  and a full-stop '.' for each half rating, you can follow these hints:

Start by converting the input rating to an integer and a decimal part. 
You can use the Math.floor() function to get the integer part and subtract it from
 the original rating to get the decimal part.

Create a string variable to store the result.

Use a loop to add a star '*' to the result string for each full rating. 
You can use a for loop or a while loop to do this.

After the loop, check if the decimal part is greater than or equal to 0.25 
(which is halfway between 0 and 0.5). If it is, add a full-stop '.' to the result string.

Return the result string.

Remember that you can use the += operator to append characters to a string. This way, you can build the result string one character at a time in the loop.

These hints should help you create a JavaScript function to display stars and full-stops based on the input rating.
 */

function rating(stars) {
    let numStars = Math.floor(stars - )
}
