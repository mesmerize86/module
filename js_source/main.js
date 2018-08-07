import userData from './content';

(function(){

  const user = {
    users: userData,
    init: function(){
      this.cacheDom();
      this.render();
      this.bindEvents();
    },
    cacheDom: function(){
      this.$ul = $('#user-list');
      this.$addButton = $('#add-user');
      this.$deleteButton = $('.remove');
      this.template = $('#user-template').html();
      this.$firstName = $('#first_name');
      this.$lastName = $('#last_name');
      this.$avatar = $('#avatar');
    },
    render: function(){
      var data = {
        users : this.users
      }
      this.$ul.html(Mustache.render(this.template, data));
    },
    bindEvents: function(){
      this.$addButton.on('click', this.addUser.bind(this));
      this.$ul.delegate('.remove', 'click', this.deleteUser.bind(this));
    },
    addUser: function(){
      let user = {};
      user.id = this.users.length + 1;
      user.first_name = this.$firstName.val();
      user.last_name = this.$lastName.val();
      user.avatar = this.$avatar.val();

      this.users.push(user);
      this.render();
      this.clearFields();
    },
    deleteUser: function(event){
      var index = $(event.target).attr('data-id');
      this.users.splice(index-1, 1);
      this.render();
    },
    clearFields: function(){
      this.$firstName.val('');
      this.$lastName.val('');
      this.$avatar.val('');
    }
  }

  user.init();
})();

