'use strict';
var yeoman = require('yeoman-generator');
var makeCommonName = require('../../utils').makeCommonName;

module.exports = yeoman.generators.Base.extend({

  initializing: function () {
    this.argument('name', {
      required: true,
      type: String,
      desc: '路由名字,支持子路由 Product/Create'
    });


    makeCommonName.call(this, 'routes');

    this.log('创建路由 ' + this.name + '.');
  },

  writing: function () {




    this.template('route.js', 'src/' + this.subRoutes + 'index.js');


    this.composeWith('react-console:component', {args: [this.name]});

    if(!this.subModule){

      this.composeWith('react-console:constants', {args: [this.name]});

      this.composeWith('react-console:action', {args: [this.name]});

      this.composeWith('react-console:store', {args: [this.name]});

    }

  }
});
