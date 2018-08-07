module.exports =  function(birthYear){
    var age = new Date().getFullYear() - birthYear
    return (age > 0) ? age + ' years old' : 'is less than a year old'
  }

//   module.exports =  {
//     calculateAge: function(birthYear){
//       var age = new Date().getFullYear() - birthYear
//       return (age > 0) ? age + ' years old' : 'is less than a year old'
//     }
// }