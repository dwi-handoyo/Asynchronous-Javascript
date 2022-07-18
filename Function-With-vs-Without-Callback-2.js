
//Tanpa Callback

const posts = [
  {title: 'Post One', body: 'This is post one.'},
  {title: 'Post Two', body: 'This is post two.'}
];

function getPosts(){
  setTimeout(() => {
    let output = '';
    posts.forEach((post, index) => {
      output += `<li>${post.title}</li>`;
    });
    document.body.innerHTML = output;
  }, 1000);
}

//digunakan setTimeout untuk menirukan (mimic) proses delay akibat javascript berkomunikasi dengan server

function createPost(post) {
 setTimeout(() => {
  posts.push(post);
   }, 2000);
}

createPost({title: 'Post Three', body: 'This is post three.'});

getPosts();

//Outputnya: 
Post One
Post Two

//Post Three tidak muncul karena ketika Post Three dibuat melalui fungsi createPost (2000 ms), proses menulis/menampilkan posts sudah terlebih dahulu terjadi (1000ms). Untuk menangani ini digunakan callback seperti di bawah ini.

//Without Callback

const posts = [
  {title: 'Post One', body: 'This is post one.'},
  {title: 'Post Two', body: 'This is post two.'}
];

function getPosts(){
  setTimeout(() => {
    let output = '';
    posts.forEach((post, index) => {
      output += `<li>${post.title}</li>`;
    });
    document.body.innerHTML = output;
  }, 1000);
}

function createPost(post, callback) {
 setTimeout(() => {
  posts.push(post);
  callback();
 }, 2000);
}

createPost({title: 'Post Three', body: 'This is post three.'}, getPosts);

getPosts();

//Outputnya: 
Post One
Post Two
Post Three
//Post Three muncul karena adanya callback

