const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, alert) {
      for (const item in collection){
      alert(collection[item], item, collection);
      }
      return collection
    },

    map: function(collection, callback) {
      if(!(collection instanceof Array))
        collection = Object.values(collection)
      let returnArray = []
      for (let item of collection)
      {
        returnArray.push(callback(item))
      }
      return returnArray
    },

    reduce: function(collection, callback, accumulator) {
      let sum = (accumulator ? accumulator : collection[0]);
      let i = (sum === collection[0] ? 1 : 0)
      for (i; i < collection.length; i++){
      sum = callback(sum, collection[i], collection)
      }
      return sum
    },

    find: function(collection, search){
      for(let item of collection){
        if(search(item)){
          return item
        }
      }
    },

    filter: function(collection, search){
      let returnArray = []
      for (let item of collection){
        if (search(item)){
          returnArray.push(item)
        }
      }
      return returnArray
    },

    size: function(collection){
      const tempObj = Object.assign({}, collection)
      return Object.values(tempObj).length
    },

    first: function(collection, arg){
      if (!arg){
      return collection[0]
      }
      else 
      return collection.slice(0, arg)
    },

    last: function(collection, arg){
      if (!arg){
        return collection[collection.length-1]
      }
      else
      return collection.slice(arg * -1)
    },

    compact: function(collection){
      let returnArray = []
      for (let item of collection){
        if (Boolean(item) === true){
          returnArray.push(item)
        }
      }
      return returnArray
    },

    sortBy: function(collection, callback){
      let returnArray = [...collection];
      returnArray.sort(function(a,b){return callback(a) - callback(b)})

      return returnArray
    },

    flatten: function(collection, arg){
      if (arg){
          return [].concat(...collection)
      }
      else{
        while (collection.find(item => Array.isArray(item))){
          collection = [].concat(...collection)
        }
        return collection
      }
    },

    uniq: function(collection, isSorted, callback){
      let returnArray = [];
      let cbArray = []
      if (!callback){
        for (const item in collection){
          if (!(returnArray.includes(collection[item]))){
            returnArray.push(collection[item])
          }
        }
      } else{
        for (const item in collection){
          if (!(cbArray.includes(callback(collection[item])))){
            cbArray.push(callback(collection[item]))
            returnArray.push(collection[item])
          }
        }
      }
      return returnArray
    },

    keys: function(collection){
      let returnArray = []
      for (const key in collection){
        returnArray.push(key)
      }
      return returnArray
    },

    values: function(collection){
      let returnArray = []
      for (const key in collection){
        returnArray.push(collection[key])
      }
      return returnArray
    },
    

    functions: function(collection) {
      let returnArray = []
      for (const key in collection){
        if (typeof collection[key] === 'function') {
          returnArray.push(key)
        }
      }
      return returnArray
    },

  }
})()

