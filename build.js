var Metalsmith = require('metalsmith')
  , markdown   = require('metalsmith-markdown')
  , branch   = require('metalsmith-branch')
  , jade   = require('metalsmith-jade')
  , collections = require('metalsmith-collections')
  , permalinks  = require('metalsmith-permalinks')
  , templates  = require('metalsmith-templates')
  , redirect = require("metalsmith-redirect")
  , typogr = require("typogr")
  , marked = require('marked')
  , fs = require("fs")
  , moment = require("moment")
  , _ = require("lodash")
  , path = require('path')
  , extname = path.extname
  ;

Metalsmith(__dirname)
  .use(appendDate)
  .use(collections({
    pages: {
      pattern: "pages/*.md"
    },
    posts: {
      pattern: "posts/*.md",
      sortBy: "date",
      reverse: true
    }
  }))
  .use(markdown())
  .use(json())
  .use(branch("posts/*")
    .use(appendIntro)
    .use(permalinks({pattern: ':collection/:title'}))
  )
  .use(branch("archive.html")
    .use(permalinks({pattern: ':title'}))
  )
  .use(appendUrl)
  .use(templates({
    engine: "jade",
    _: _,
    pretty: false,
    typogr: typogr,
    moment: moment,
    domain: "http://www.briantakita.com",
    name: "Brian Takita",
    siteDescription: "Mission: Expand Consciousness",
    aboutSection: marked(fs.readFileSync(__dirname + "/src/partials/about.md").toString()),
    linksSection: marked(fs.readFileSync(__dirname + "/src/partials/links.md").toString())
  }))
  .use(redirect({
    '/posts/philosophy-existence-is-god': '/posts/philosophy-existence-is-god-god-exists'
  }))
  .destination('./build')
  .build(function(err) {
    if (err) {
      console.trace(err);
      throw err;
    }
  });

function json() {
  return function(files, metalsmith, done) {
    _.each(files, function(file, key){
      if (/.json/.test(extname(key))) {
        _.extend(file, JSON.parse(file.contents));
        if (file.filename) {
          var dir = path.dirname(key);
          delete files[key];
          files[path.resolve("/", dir, file.filename).slice(1)] = file;
        }
      }
    });
    done();
  };
}
function appendUrl(files, metalsmith, done) {
  for (file in files) {
    var path = files[file].path;
    if (path) {
      files[file].url = "/" + files[file].path;
    }
  }
  done();
}
function appendDate(files, metalsmith, done) {
  for (file in files) {
    var date = files[file].date;
    if (date) {
      var date2 = files[file].date = new Date(files[file].date);
      files[file].dateFormat = moment(date2).format('DD. MMMM YYYY');
      files[file].rfc822date = rfc822(date2);
    }
  }
  done();
}
function rfc822(date) {
  /* return a rfc822 representation of a javascript Date object
   http://www.w3.org/Protocols/rfc822/#z28
   */

  var days, months, pad, time, tzoffset;
  pad = function(i) {
    if (i < 10) {
      return '0' + i;
    } else {
      return i;
    }
  };
  tzoffset = function(offset) {
    var direction, hours, minutes;
    hours = Math.floor(offset / 60);
    minutes = Math.abs(offset % 60);
    direction = hours > 0 ? '-' : '+';
    return direction + pad(Math.abs(hours)) + pad(minutes);
  };
  months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', ' Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  time = [pad(date.getHours()), pad(date.getMinutes()), pad(date.getSeconds())].join(':');
  return [days[date.getDay()] + ',', pad(date.getDate()), months[date.getMonth()], date.getFullYear(), time, tzoffset(date.getTimezoneOffset())].join(' ');
}
function appendIntro(files, metalsmith, done) {
  for (file in files) {
    if (!files[file].intro) {
      var html = files[file].contents.toString()
        , intro = files[file].intro = getIntro(html);
      if (files[file].hasMore == null) {
        files[file].hasMore = html.length > intro.length;
      }
    }
  }
  done();
}
function getIntro(html) {
  var cutoff, cutoffs, i, idx, _i, _len;
  cutoffs = ['<span class="more', '<h2', '<hr'];
  idx = Infinity;
  for (_i = 0, _len = cutoffs.length; _i < _len; _i++) {
    cutoff = cutoffs[_i];
    i = html.indexOf(cutoff);
    if (i !== -1 && i < idx) {
      idx = i;
    }
  }
  if (idx !== Infinity) {
    return html.substr(0, idx);
  } else {
    return html;
  }
}