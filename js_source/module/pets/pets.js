import petsTemplate from './pets-template.hbs';

  var pets = (function(){

    var $petsContainer = document.getElementById('pets-container');
    
    _render();

    function _render(){
      getAPIData();
    }
    
    function getAPIData(){
      $.ajax({
          method: 'GET',
          url: 'https://learnwebcode.github.io/json-example/pets-data.json',
          success: function(response){
            createHandlebarTemplate(response);
          },
          error: function(err){
            console.log('Cannot load pets data');
          }
        })
    }
    
    function createHandlebarTemplate(data){      
      $petsContainer.innerHTML = petsTemplate(data)  
    }  
});

module.exports = pets;
// (function(){
//   var pets = {
//     init: function(){
//       this.cacheDOM();
//       this.render();
//     },
//     cacheDOM: function(){
//       this.$petsContainer = document.getElementById('pets-container');
//     },
//     render: function(){
//       this.getAPIData();
//     },
//     getAPIData: function(){
//       var _self = this;
//       $.ajax({
//           method: 'GET',
//           url: 'https://learnwebcode.github.io/json-example/pets-data.json',
//           success: function(response){
//             _self.createHandlebarTemplate(response);
//           },
//           error: function(err){
//             console.log('Cannot load pets data');
//           }
//         })
//     },
//     createHandlebarTemplate: function(data){      
//       this.$petsContainer.innerHTML = petsTemplate(data)  
//     }
//     return {
//       init: init
//     }
//   }  
// })();