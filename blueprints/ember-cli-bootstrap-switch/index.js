module.exports = {
  normalizeEntityName: function() {},

  afterInstall: function() {
    var that = this;


    return that.addBowerPackageToProject('bootstrap-switch', "~3.3.1");
    //
    // return this.addBowerPackageToProject('rangy-1.3').then(function() {
    //   return this.addBowerPackageToProject('wysihtml5x').then(function() {
    //     return this.addBowerPackageToProject('bootstrap').then(function() {
    //       return that.addBowerPackageToProject('bootstrap3-wysihtml5-bower');
    //     });
    //   });
    // });

  }
};
