// function getInParallel(apiCalls) {
  
//     Promise.all(apiCalls).then(values => {
//     console.log(values);
//   });
//   }
//   let promise = getInParallel([() => Promise.resolve("First API call!"),
//                                () => Promise.resolve("Second API call!")]);
//   if(promise) {
//     promise.then((result) => console.log(result)).catch((err) => console.log(err));
//   }
//   module.exports.getInParallel = getInParallel;

// async function firstSuccessfulPromise(promiseArray) {
//     try{
//       return Promise.race(promiseArray);
//        }catch(e){
//          console.log(e)
//        }
    
     
//   }
  
//   let promise = firstSuccessfulPromise([new Promise((resolve, reject) => reject()), 
//                 new Promise((resolve, reject) => resolve("Success!"))]);
//   promise.then(result => console.log(result));
  
//   module.exports.firstSuccessfulPromise = firstSuccessfulPromise;

function formatDate(userDate) {
    
    let arr = userDate.split('/');
    let year = arr[2];
    let month = arr[0];
    let day = arr[1];
    if(+month <10){
        month = '0'+ month;
    }
    if(+day <10){
        day = '0'+ day;
    }
    let formatString = [month + day + year].join('');
    return formatString;

  }
  
console.log(formatDate("1/3/2014"));