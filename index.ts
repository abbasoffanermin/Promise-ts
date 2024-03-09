// function createDelay(){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("delay completed")
//         },2000)
//     }).then((data:string) => {
//         console.log(data)
//     })

// }

// setTimeout(() => {
//     createDelay()
// }, 1000);

function createDelay(data:string,delaytime:number){
  return new Promise((resolve, reject) => {
      setTimeout(() => {
          resolve(data)
          
      },delaytime)
  }).then((data:string) => {
      console.log(data)
  }).catch((err:string) => {
      console.log(err)
  })

}
// createDelay("delay completed",2000)



// function createDelay(data:string,delaytime:number){
//   return new Promise((resolve, reject) => {
//       setTimeout(() => {
//           reject(data)
          
//       },delaytime)
//   }).then((data:string) => {
//       console.log(data)
//   }).catch((err:string) => {
//       console.log(err)
//   })

// }
// createDelay("Error:Delay failed",2000)

Promise.all([createDelay("delay completed",2000),createDelay("Error:Delay failed",2000)])