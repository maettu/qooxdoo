// global conf
var common = {
  QOOXDOO_PATH: "..",
  APPLICATION : "framework",
  generatorJobs: [
    ["api", ""],
    ["api-data", "create api doc json data files"],
    ["api-verify", "creates an Apiviewer while checking internal links. Also creates an XML sitemap with a link for each class"],
    ["clean", "remove local cache and generated .js files (source/build)"],
    ["dependencies", ""],
    ["distclean", "remove the cache and all generated artefacts of this library (source, build, ...)"],
    ["fix", "normalize whitespace in .js files of the current library (tabs, eol, ...)"],
    ["images", "clip and combine all images used in the framework"],
    ["info", "collects environment information like the qooxdoo version etc., and prints it out"],
    ["lint", ""],
    ["lint-test", ""],
    ["pretty-test", "This is just to test pretty-printing - don't commit after running."],
    ["provider", "create a provider structure, with code, dependency info, etc."],
    ["test", ""],
    ["test-inline", ""],
    ["test-mobile", ""],
    ["test-mobile-source", ""],
    ["test-performance", "Create a Performance Test Runner for the qx.test.performance namespace"],
    ["test-performance-source", "Create a Performance Test Runner for the qx.test.performance namespace"],
    ["test-source", ""],
    ["translation", ""],
    ["validate-config", "validates the 'config.json' itself - if jobname arg is given checks dedicated job only"],
    ["validate-manifest", "validates the given filepath as manifest (defaults to './Manifest.json')"],
    ["watch-scss", "Demo job for watching compile-to-CSS files"],
  ]
};

// requires
var qxConf = require(common.QOOXDOO_PATH + '/tool/grunt/config/application.js');
var qxTasks = require(common.QOOXDOO_PATH + '/tool/grunt/tasks/tasks.js');

// grunt
module.exports = function(grunt) {
  var config = {
    qx: {
      let : {}
    },

    common : common,

    /*
    myTask: {
      options: {},
      myTarget: {
        options: {}
      }
    }
    */
  };

  var mergedConf = qxConf.mergeConfig(config);
  // console.log(mergedConf);
  // process.exit();
  grunt.initConfig(mergedConf);

  qxTasks.registerTasks(grunt, common.generatorJobs);

  grunt.loadNpmTasks('grunt-contrib-clean');
};
