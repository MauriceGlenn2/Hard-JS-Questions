/**
 * Find all the post by a single user
 * 
 * call API https://jsonplaceholder.typicode.com/post and return all the post by any given user id
 */

async function postByUser (userId) {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts")
    const data = await response.json()
    
    const users = data.filter(element => element.userId === userId)
    console.log(users) 
}

postByUser(4)