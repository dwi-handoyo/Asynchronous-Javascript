# Asynchronous Javascript

Basically Javascipt is synchronous, single threaded language. Asynchronous here just to simplify the term on how to manage the execution sequence of coding lines. 

Asynchronous means not occuring in same time. This night be happened in cases below:

- Fetch data from server
- To execute somethin with a delay
- To execute something after an event

### 1. Callback

A callback is a function passed as an argument to another function.

        function superComplexProcess(callback){
          console.log("two");
          callback();
        }

        console.log("one");
        setTimeout(() => {
          superComplexProcess(three);
        },5000);

        function three(){
          console.log("three");
        }
        
### 2. Promise

        let done =true; // Please also try for done = false

        const prom = new Promise((resolve, reject) => {
                 if (done) {
                   resolve('Promise is fulfilled!');
                 } else {
                   reject('Promise is not fulfilled!');
                 }
        });

        prom
          .then(response => console.log('OK! : ' + response))
          .catch(response => console.log('NOT OK! : ' + response));

### 3. Async-Await
About asynchronous functions:
a. Functions that run asynchronously
b. Returns (implicitly) a promise
c. The way to write it is the same as a synchronous function (ordinary function)

        function tryPromise() {
          return new Promise((resolve, reject) => {
           const time = 3000;
           if (time < 5000) {
             setTimeout(() => {
               resolve('completed')
             }, time);
           } else {
             reject('failed, time is too long');
           }
          });
        }
        
        async function tryAsync() {
           try {
            const trial = await tryPromise();
            console.log(trial);
           } catch (err) {
            console.log(err);
           }
        }
        
        tryAsync();
        
