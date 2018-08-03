import userData from './content';

var userProile = (function(){
  
  let users = userData;
  
  //cache DOM
  const $ul = $('#user-list');
  const $addButton = $('#add-user');
  const $deleteButton = $('.remove');
  const template = $('#user-template').html();
  const $firstName = $('#first_name');
  const $lastName = $('#last_name');
  const $avatar = $('#avatar');
  
  //bind events 
  $addButton.on('click', addUser.bind(this));
  $ul.delegate('.remove', 'click', deleteUser.bind(this));
  
  render();
  
  function render(){
    $ul.html(Mustache.render(template, {users: userData}));
  }
  
  //add user
  function addUser(){
    let user = {};
    user.id = users.length + 1;
    user.first_name = $firstName.val();
    user.last_name = $lastName.val();
    user.avatar = $avatar.val();

    users.push(user);
    render();
    clearFields();
  }
  
  //delete user
  function deleteUser(event){
    var index = $(event.target).attr('data-id');
    console.log(index-1);
    users.splice(index-1, 1);
    // console.log(users);
    render();
  }
  
  //clear Fields
  function clearFields(){
    $firstName.val('');
    $lastName.val('');
    $avatar.val('');
  }
})();

// (function(){
// 
//   const user = {
//     users: userData,
//     init: function(){
//       this.cacheDom();
//       this.render();
//       this.bindEvents();
//     },
//     cacheDom: function(){
//       this.$ul = $('#user-list');
//       this.$addButton = $('#add-user');
//       this.$deleteButton = $('.remove');
//       this.template = $('#user-template').html();
//       this.$firstName = $('#first_name');
//       this.$lastName = $('#last_name');
//       this.$avatar = $('#avatar');
//     },
//     render: function(){
//       var data = {
//         users : this.users
//       }
//       this.$ul.html(Mustache.render(this.template, data));
//     },
//     bindEvents: function(){
//       this.$addButton.on('click', this.addUser.bind(this));
//       this.$ul.delegate('.remove', 'click', this.deleteUser.bind(this));
//     },
//     addUser: function(){
//       let user = {};
//       user.id = this.users.length + 1;
//       user.first_name = this.$firstName.val();
//       user.last_name = this.$lastName.val();
//       user.avatar = this.$avatar.val();
// 
//       this.users.push(user);
//       this.render();
//       this.clearFields();
//     },
//     deleteUser: function(event){
//       var index = $(event.target).attr('data-id');
//       this.users.splice(index-1, 1);
//       this.render();
//     },
//     clearFields: function(){
//       this.$firstName.val('');
//       this.$lastName.val('');
//       this.$avatar.val('');
//     }
//   }
// 
//   user.init();
// })();