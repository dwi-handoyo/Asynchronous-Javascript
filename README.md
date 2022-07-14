# Asynchronous Javascript

Asynchronous means not occuring in same time. This night be happened in cases below:

- Fetch data from server
- To execute somethin with a delay
- To execute something after an event

### 1. Callback

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

### 3. Async-Await
