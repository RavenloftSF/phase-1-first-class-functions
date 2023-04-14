function receivesAFunction(callback){
    console.log (callback)
    return callback()
}

function returnsANamedFunction (){
    return (receivesAFunction)
} 

function returnsAnAnonymousFunction (){
    return function(){
    }
}