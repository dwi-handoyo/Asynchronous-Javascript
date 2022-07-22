// Promise to replace Callback

const posts = [
 {title: 'Part One', body: 'This is part one.'},
 {title: 'Part Two', body: 'This is part two.'}
];

function getPosts() {
 setTimeout(() => {
 let output = '';
 posts.forEach((post, index) => {
  output += `<li>${post.title}</li>`;
  });
 document.body.innerHTML = output; 
 }, 1000);
}

getPosts();

function createPost(post){
 return new Promise((resolve, reject) => 
 setTimeout( () => {
  posts.push(post);
  const error = false; // try switch between false and true (or 0 and 1)
  if(!error){
   resolve();
  } else {
   reject('Something went wrong.');
  }
 }, 2000));
}

createPost({title: "Part Three", body: "This is part three"})
.then(getPosts)
.catch(err => console.log(err));

// output: (if error = false)
// Part One
// Part Two
// Part Three

//output: (if error = true)
// “Something went wrong”
