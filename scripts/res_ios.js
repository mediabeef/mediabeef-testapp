#!/usr/bin/env node

//
// This hook copies various resource files from our version control system directories into the appropriate platform specific location
//


// configure all the files to copy.  Key of object is the source file, value is the destination location.  It's fine to put all platforms' icons and splash screen files here, even if we don't build for all platforms on each developer's box.
var filestocopy = [
// ios
{ "res/icons/ios/icon-2x.png": "platforms/ios/BG Sample/Resources/icons/icon@2x.png" },
{ "res/icons/ios/icon-40-2x.png": "platforms/ios/BG Sample/Resources/icons/icon-40@2x.png" },
{ "res/icons/ios/icon-40.png": "platforms/ios/BG Sample/Resources/icons/icon-40.png" },
{ "res/icons/ios/icon-50.png": "platforms/ios/BG Sample/Resources/icons/icon-50.png" },
{ "res/icons/ios/icon-50-2x.png": "platforms/ios/BG Sample/Resources/icons/icon-50@2x.png" },
{ "res/icons/ios/icon-60.png": "platforms/ios/BG Sample/Resources/icons/icon-60.png" },
{ "res/icons/ios/icon-60-2x.png": "platforms/ios/BG Sample/Resources/icons/icon-60@2x.png" },
{ "res/icons/ios/icon-60-3x.png": "platforms/ios/BG Sample/Resources/icons/icon-60@3x.png" },
{ "res/icons/ios/icon-72.png": "platforms/ios/BG Sample/Resources/icons/icon-72.png" },
{ "res/icons/ios/icon-72-2x.png": "platforms/ios/BG Sample/Resources/icons/icon-72@2x.png" },
{ "res/icons/ios/icon-76.png": "platforms/ios/BG Sample/Resources/icons/icon-76.png" },
{ "res/icons/ios/icon-76-2x.png": "platforms/ios/BG Sample/Resources/icons/icon-76@2x.png" },
{ "res/icons/ios/icon-small.png": "platforms/ios/BG Sample/Resources/icons/icon-Small.png" },
{ "res/icons/ios/icon-small-2x.png": "platforms/ios/BG Sample/Resources/icons/icon-Small@2x.png" },
{ "res/icons/ios/icon.png": "platforms/ios/BG Sample/Resources/icons/icon.png" }
];

var fs = require('fs');
var path = require('path');

// no need to configure below
var rootdir = '';//process.argv[2];

filestocopy.forEach(function(obj) {
    Object.keys(obj).forEach(function(key) {
        var val = obj[key];
        var srcfile = path.join(rootdir, key);
        var destfile = path.join(rootdir, val);
        console.log("copying "+srcfile+" to "+destfile);
        var destdir = path.dirname(destfile);
        if (fs.existsSync(srcfile) && fs.existsSync(destdir)) {
            fs.createReadStream(srcfile).pipe(fs.createWriteStream(destfile));
        }
    });
});
