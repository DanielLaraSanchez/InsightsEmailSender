let array = ["hola", "hastaluego", "adios","hehe", "he"]
let push = [1,2,3,4,45]

let test = []
let test1 = []



  // test = push.slice(1,4)
  // test1 = array.slice(1,2)
  //
  // testt = test.concat(test1)
  //
  // console.log(testt)
  // console.log(push)

function testt(){
  for(i=0; i < array.length; i++){
    test.push(array[i])
    test.push(push[i])
  }
  return test
}

console.log(testt())

console.log(array )
