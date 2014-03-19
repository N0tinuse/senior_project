var Templates = {
"about":
  function template(locals) {
var jade_debug = [{ lineno: 1, filename: "jade/about/about.jade" }];
try {
var buf = [];
var jade_mixins = {};
var locals_ = (locals || {}),undefined = locals_.undefined;
jade_debug.unshift({ lineno: 0, filename: "jade/about/about.jade" });
jade_debug.unshift({ lineno: 1, filename: "jade/about/about.jade" });
buf.push("<div class=\"container\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 2, filename: "jade/about/about.jade" });
buf.push("<h1>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 2, filename: jade_debug[0].filename });
buf.push("About");
jade_debug.shift();
jade_debug.shift();
buf.push("</h1>");
jade_debug.shift();
jade_debug.unshift({ lineno: 3, filename: "jade/about/about.jade" });
buf.push("<hr/>");
jade_debug.shift();
jade_debug.unshift({ lineno: 4, filename: "jade/about/about.jade" });
buf.push("<p>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 4, filename: jade_debug[0].filename });
buf.push("Learning Dollars is a website and cross-platform mobile app bridging open");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 5, filename: "jade/about/about.jade" });
buf.push(" courseware and paid work.");
jade_debug.shift();
jade_debug.shift();
buf.push("</p>");
jade_debug.shift();
jade_debug.unshift({ lineno: 6, filename: "jade/about/about.jade" });
buf.push("<b>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 6, filename: jade_debug[0].filename });
buf.push("Problem");
jade_debug.shift();
jade_debug.shift();
buf.push("</b>");
jade_debug.shift();
jade_debug.unshift({ lineno: 7, filename: "jade/about/about.jade" });
buf.push("<p>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 7, filename: jade_debug[0].filename });
buf.push("Learning Dollars seeks to solve an economic problem. The U.S. unemployment");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 8, filename: "jade/about/about.jade" });
buf.push(" rate is over 7%, yet companies struggle to find engineers. 80% of the");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 9, filename: "jade/about/about.jade" });
buf.push(" developing world has cell phones, yet clean water and shelter remain");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 10, filename: "jade/about/about.jade" });
buf.push(" problems. All at the same time, top-notch universities are putting their");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 11, filename: "jade/about/about.jade" });
buf.push(" courseware online. So why don’t we see people in poverty completing");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 12, filename: "jade/about/about.jade" });
buf.push(" classes on MIT OpenCourseWare and getting high paying gigs, whether by");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 13, filename: "jade/about/about.jade" });
buf.push(" freelancing or through corporate recruitment?");
jade_debug.shift();
jade_debug.shift();
buf.push("</p>");
jade_debug.shift();
jade_debug.unshift({ lineno: 14, filename: "jade/about/about.jade" });
buf.push("<b>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 14, filename: jade_debug[0].filename });
buf.push("Solution");
jade_debug.shift();
jade_debug.shift();
buf.push("</b>");
jade_debug.shift();
jade_debug.unshift({ lineno: 15, filename: "jade/about/about.jade" });
buf.push("<p>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 15, filename: jade_debug[0].filename });
buf.push("Learning Dollars wagers the reason is not because OpenCourseWare to paid");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 16, filename: "jade/about/about.jade" });
buf.push(" work is an impossible leap. Rather, the very notion of “completing an");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 17, filename: "jade/about/about.jade" });
buf.push(" online course to gain skills for immediate monetization” is just not");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 18, filename: "jade/about/about.jade" });
buf.push(" “a thing” among the unskilled or unemployed. We want to make it a thing.");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 19, filename: "jade/about/about.jade" });
buf.push(" In other words, we want to build a website and cross-platform mobile app");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 20, filename: "jade/about/about.jade" });
buf.push(" bridging OpenCourseWare and paid work. We want to aggregate ");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 21, filename: "jade/about/about.jade" });
buf.push(" OpenCourseWare into comprehensive modules. After completing modules, ");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 22, filename: "jade/about/about.jade" });
buf.push(" users will be presented with paid projects they can complete as well as");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 23, filename: "jade/about/about.jade" });
buf.push(" full-time jobs they can apply to.");
jade_debug.shift();
jade_debug.shift();
buf.push("</p>");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.shift();;return buf.join("");
} catch (err) {
  jade.rethrow(err, jade_debug[0].filename, jade_debug[0].lineno, ".container\n  h1 About\n  hr\n  p Learning Dollars is a website and cross-platform mobile app bridging open\n    |  courseware and paid work.\n  b Problem\n  p Learning Dollars seeks to solve an economic problem. The U.S. unemployment\n    |  rate is over 7%, yet companies struggle to find engineers. 80% of the\n    |  developing world has cell phones, yet clean water and shelter remain\n    |  problems. All at the same time, top-notch universities are putting their\n    |  courseware online. So why don’t we see people in poverty completing\n    |  classes on MIT OpenCourseWare and getting high paying gigs, whether by\n    |  freelancing or through corporate recruitment?\n  b Solution\n  p Learning Dollars wagers the reason is not because OpenCourseWare to paid\n    |  work is an impossible leap. Rather, the very notion of “completing an\n    |  online course to gain skills for immediate monetization” is just not\n    |  “a thing” among the unskilled or unemployed. We want to make it a thing.\n    |  In other words, we want to build a website and cross-platform mobile app\n    |  bridging OpenCourseWare and paid work. We want to aggregate \n    |  OpenCourseWare into comprehensive modules. After completing modules, \n    |  users will be presented with paid projects they can complete as well as\n    |  full-time jobs they can apply to.");
}
}
};