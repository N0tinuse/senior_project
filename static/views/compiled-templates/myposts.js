var Templates = {
"myposts":
  function template(locals) {
var jade_debug = [{ lineno: 1, filename: "jade/myposts/myposts.jade" }];
try {
var buf = [];
var jade_mixins = {};
var locals_ = (locals || {}),undefined = locals_.undefined;
jade_debug.unshift({ lineno: 0, filename: "jade/myposts/myposts.jade" });
jade_debug.unshift({ lineno: 1, filename: "jade/myposts/myposts.jade" });
buf.push("<div class=\"container\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 2, filename: "jade/myposts/myposts.jade" });
buf.push("<div class=\"panel panel-default\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 3, filename: "jade/myposts/myposts.jade" });
buf.push("<div class=\"panel-heading\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 4, filename: "jade/myposts/myposts.jade" });
buf.push("<h1>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 4, filename: jade_debug[0].filename });
buf.push("My Posts");
jade_debug.shift();
jade_debug.shift();
buf.push("</h1>");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.unshift({ lineno: 5, filename: "jade/myposts/myposts.jade" });
buf.push("<div class=\"row\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 6, filename: "jade/myposts/myposts.jade" });
buf.push("<div class=\"col-md-6\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 7, filename: "jade/myposts/myposts.jade" });
buf.push("<br/>");
jade_debug.shift();
jade_debug.unshift({ lineno: 8, filename: "jade/myposts/myposts.jade" });
buf.push("<table id=\"posted_projects\" class=\"table table-striped\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 9, filename: "jade/myposts/myposts.jade" });
buf.push("<div id=\"projects_loader\" class=\"text-center\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 10, filename: "jade/myposts/myposts.jade" });
buf.push("<img src=\"/static/views/img/ajax-loader.gif\"/>");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.shift();
buf.push("</table>");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.unshift({ lineno: 11, filename: "jade/myposts/myposts.jade" });
buf.push("<div class=\"col-md-6\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 12, filename: "jade/myposts/myposts.jade" });
buf.push("<div class=\"post_project_div\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 14, filename: "jade/myposts/myposts.jade" });
buf.push("<h2>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 14, filename: jade_debug[0].filename });
buf.push("Post New Project");
jade_debug.shift();
jade_debug.shift();
buf.push("</h2>");
jade_debug.shift();
jade_debug.unshift({ lineno: 15, filename: "jade/myposts/myposts.jade" });
buf.push("<input id=\"name\" type=\"text\" placeholder=\"Name\" class=\"form-control\"/>");
jade_debug.shift();
jade_debug.unshift({ lineno: 16, filename: "jade/myposts/myposts.jade" });
buf.push("<br/>");
jade_debug.shift();
jade_debug.unshift({ lineno: 17, filename: "jade/myposts/myposts.jade" });
buf.push("<input id=\"type\" type=\"text\" placeholder=\"Category\" class=\"form-control\"/>");
jade_debug.shift();
jade_debug.unshift({ lineno: 21, filename: "jade/myposts/myposts.jade" });
buf.push("<input id=\"test\" data-provide=\"typeahead\" class=\"typeahead\"/>");
jade_debug.shift();
jade_debug.unshift({ lineno: 22, filename: "jade/myposts/myposts.jade" });
buf.push("<br/>");
jade_debug.shift();
jade_debug.unshift({ lineno: 23, filename: "jade/myposts/myposts.jade" });
buf.push("<textarea id=\"description\" placeholder=\"Description\" class=\"form-control\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.shift();
buf.push("</textarea>");
jade_debug.shift();
jade_debug.unshift({ lineno: 24, filename: "jade/myposts/myposts.jade" });
buf.push("<br/>");
jade_debug.shift();
jade_debug.unshift({ lineno: 25, filename: "jade/myposts/myposts.jade" });
buf.push("<label>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 25, filename: jade_debug[0].filename });
buf.push("Budget Option:");
jade_debug.shift();
jade_debug.shift();
buf.push("</label>");
jade_debug.shift();
jade_debug.unshift({ lineno: 26, filename: "jade/myposts/myposts.jade" });
buf.push("<select id=\"budget_option\" class=\"form-control\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 27, filename: "jade/myposts/myposts.jade" });
buf.push("<option value=\"1\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 27, filename: jade_debug[0].filename });
buf.push("$250-750");
jade_debug.shift();
jade_debug.shift();
buf.push("</option>");
jade_debug.shift();
jade_debug.unshift({ lineno: 28, filename: "jade/myposts/myposts.jade" });
buf.push("<option value=\"2\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 28, filename: jade_debug[0].filename });
buf.push("$750-1500");
jade_debug.shift();
jade_debug.shift();
buf.push("</option>");
jade_debug.shift();
jade_debug.unshift({ lineno: 29, filename: "jade/myposts/myposts.jade" });
buf.push("<option value=\"3\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 29, filename: jade_debug[0].filename });
buf.push("$1500-3000");
jade_debug.shift();
jade_debug.shift();
buf.push("</option>");
jade_debug.shift();
jade_debug.unshift({ lineno: 30, filename: "jade/myposts/myposts.jade" });
buf.push("<option value=\"4\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 30, filename: jade_debug[0].filename });
buf.push("$3000-5000");
jade_debug.shift();
jade_debug.shift();
buf.push("</option>");
jade_debug.shift();
jade_debug.unshift({ lineno: 31, filename: "jade/myposts/myposts.jade" });
buf.push("<option value=\"5\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 31, filename: jade_debug[0].filename });
buf.push("$30-250");
jade_debug.shift();
jade_debug.shift();
buf.push("</option>");
jade_debug.shift();
jade_debug.unshift({ lineno: 32, filename: "jade/myposts/myposts.jade" });
buf.push("<option value=\"5\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 32, filename: jade_debug[0].filename });
buf.push("&gt$5000");
jade_debug.shift();
jade_debug.shift();
buf.push("</option>");
jade_debug.shift();
jade_debug.shift();
buf.push("</select>");
jade_debug.shift();
jade_debug.unshift({ lineno: 33, filename: "jade/myposts/myposts.jade" });
buf.push("<br/>");
jade_debug.shift();
jade_debug.unshift({ lineno: 34, filename: "jade/myposts/myposts.jade" });
buf.push("<label>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 34, filename: jade_debug[0].filename });
buf.push("Duration (Max 60 days):");
jade_debug.shift();
jade_debug.shift();
buf.push("</label>");
jade_debug.shift();
jade_debug.unshift({ lineno: 35, filename: "jade/myposts/myposts.jade" });
buf.push("<select id=\"duration\" class=\"form-control\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 36, filename: "jade/myposts/myposts.jade" });
for (var i = 1; i <= 60; i++)
{
jade_debug.unshift({ lineno: 37, filename: "jade/myposts/myposts.jade" });
jade_debug.unshift({ lineno: 37, filename: "jade/myposts/myposts.jade" });
buf.push("<option" + (jade.attr("value", i, true, false)) + ">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 37, filename: jade_debug[0].filename });
buf.push("" + (jade.escape((jade.interp = i) == null ? '' : jade.interp)) + "");
jade_debug.shift();
jade_debug.shift();
buf.push("</option>");
jade_debug.shift();
jade_debug.shift();
}
jade_debug.shift();
jade_debug.shift();
buf.push("</select>");
jade_debug.shift();
jade_debug.unshift({ lineno: 38, filename: "jade/myposts/myposts.jade" });
buf.push("<br/>");
jade_debug.shift();
jade_debug.unshift({ lineno: 39, filename: "jade/myposts/myposts.jade" });
buf.push("<button id=\"post_project\" type=\"button\" class=\"btn btn-default pull-right\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 41, filename: jade_debug[0].filename });
buf.push("Post Project");
jade_debug.shift();
jade_debug.shift();
buf.push("</button>");
jade_debug.shift();
jade_debug.unshift({ lineno: 42, filename: "jade/myposts/myposts.jade" });
buf.push("<br/>");
jade_debug.shift();
jade_debug.unshift({ lineno: 43, filename: "jade/myposts/myposts.jade" });
buf.push("<br/>");
jade_debug.shift();
jade_debug.unshift({ lineno: 44, filename: "jade/myposts/myposts.jade" });
buf.push("<br/>");
jade_debug.shift();
jade_debug.unshift({ lineno: 45, filename: "jade/myposts/myposts.jade" });
buf.push("<div id=\"log_message_div\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.shift();;return buf.join("");
} catch (err) {
  jade.rethrow(err, jade_debug[0].filename, jade_debug[0].lineno, ".container\n  .panel.panel-default\n    .panel-heading\n      h1 My Posts\n    .row\n      .col-md-6\n        br\n        table.table.table-striped#posted_projects\n          .text-center#projects_loader\n            img(src = '/static/views/img/ajax-loader.gif')\n      .col-md-6\n        .post_project_div\n\n          h2 Post New Project\n          input#name.form-control(type='text', placeholder='Name')\n          br\n          input#type.form-control(\n            type='text', \n            placeholder='Category'\n          )\n          input.typeahead(id=\"test\", data-provide=\"typeahead\")\n          br\n          textarea#description.form-control(placeholder = 'Description')\n          br\n          label Budget Option:\n          select#budget_option.form-control\n            option(value='1') $250-750\n            option(value='2') $750-1500\n            option(value='3') $1500-3000\n            option(value='4') $3000-5000\n            option(value='5') $30-250\n            option(value='5') &gt$5000\n          br\n          label Duration (Max 60 days):\n          select#duration.form-control\n            - for (var i = 1; i <= 60; i++)\n              option(value=i) #{i}\n          br\n          button#post_project.btn.btn-default.pull-right(\n            type='button'\n          ) Post Project\n          br\n          br\n          br\n          div#log_message_div\n");
}
},

"post_success":
  function template(locals) {
var jade_debug = [{ lineno: 1, filename: "jade/myposts/post_success.jade" }];
try {
var buf = [];
var jade_mixins = {};
var locals_ = (locals || {}),undefined = locals_.undefined;
jade_debug.unshift({ lineno: 0, filename: "jade/myposts/post_success.jade" });
jade_debug.unshift({ lineno: 1, filename: "jade/myposts/post_success.jade" });
buf.push("<div id=\"log_message\" class=\"alert alert-success\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 2, filename: "jade/myposts/post_success.jade" });
buf.push("Project successfully posted");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.shift();;return buf.join("");
} catch (err) {
  jade.rethrow(err, jade_debug[0].filename, jade_debug[0].lineno, "div(class=\"alert alert-success\" id=\"log_message\")\n  | Project successfully posted\n  \n\n\n");
}
},

"posted_projects":
  function template(locals) {
var jade_debug = [{ lineno: 1, filename: "jade/myposts/posted_projects.jade" }];
try {
var buf = [];
var jade_mixins = {};
var locals_ = (locals || {}),undefined = locals_.undefined,projectid = locals_.projectid,projectname = locals_.projectname,additionalstatus = locals_.additionalstatus,averagebid = locals_.averagebid,price = locals_.price,bidcount = locals_.bidcount,enddate = locals_.enddate;
jade_debug.unshift({ lineno: 0, filename: "jade/myposts/posted_projects.jade" });
jade_debug.unshift({ lineno: 1, filename: "jade/myposts/posted_projects.jade" });
buf.push("<tr>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 1, filename: jade_debug[0].filename });
buf.push("   ");
jade_debug.shift();
jade_debug.unshift({ lineno: 2, filename: "jade/myposts/posted_projects.jade" });
buf.push("<td>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 3, filename: "jade/myposts/posted_projects.jade" });
buf.push("<a" + (jade.attr("href", "project/" + (projectid) + "", true, false)) + ">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 4, filename: "jade/myposts/posted_projects.jade" });
buf.push("<b>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 4, filename: jade_debug[0].filename });
buf.push("" + (jade.escape((jade.interp = projectname) == null ? '' : jade.interp)) + "");
jade_debug.shift();
jade_debug.shift();
buf.push("</b>");
jade_debug.shift();
jade_debug.shift();
buf.push("</a>");
jade_debug.shift();
jade_debug.unshift({ lineno: 5, filename: "jade/myposts/posted_projects.jade" });
buf.push("<br/>");
jade_debug.shift();
jade_debug.unshift({ lineno: 6, filename: "jade/myposts/posted_projects.jade" });
buf.push("<ul class=\"bulletless\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 7, filename: "jade/myposts/posted_projects.jade" });
buf.push("<li>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 7, filename: jade_debug[0].filename });
buf.push("Status: ");
jade_debug.shift();
jade_debug.unshift({ lineno: 8, filename: "jade/myposts/posted_projects.jade" });
buf.push("<b>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 8, filename: jade_debug[0].filename });
buf.push("" + (jade.escape((jade.interp = additionalstatus) == null ? '' : jade.interp)) + "");
jade_debug.shift();
jade_debug.shift();
buf.push("</b>");
jade_debug.shift();
jade_debug.shift();
buf.push("</li>");
jade_debug.shift();
jade_debug.unshift({ lineno: 9, filename: "jade/myposts/posted_projects.jade" });
if ( averagebid)
{
jade_debug.unshift({ lineno: 10, filename: "jade/myposts/posted_projects.jade" });
jade_debug.unshift({ lineno: 10, filename: "jade/myposts/posted_projects.jade" });
buf.push("<li>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 10, filename: jade_debug[0].filename });
buf.push("Price: ");
jade_debug.shift();
jade_debug.unshift({ lineno: 11, filename: "jade/myposts/posted_projects.jade" });
buf.push("<b>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 11, filename: jade_debug[0].filename });
buf.push("$" + (jade.escape((jade.interp = price) == null ? '' : jade.interp)) + "");
jade_debug.shift();
jade_debug.shift();
buf.push("</b>");
jade_debug.shift();
jade_debug.shift();
buf.push("</li>");
jade_debug.shift();
jade_debug.shift();
}
jade_debug.shift();
jade_debug.unshift({ lineno: 12, filename: "jade/myposts/posted_projects.jade" });
buf.push("<li>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 12, filename: jade_debug[0].filename });
buf.push("Bids: ");
jade_debug.shift();
jade_debug.unshift({ lineno: 13, filename: "jade/myposts/posted_projects.jade" });
buf.push("<a" + (jade.attr("href", "project/" + (projectid) + "", true, false)) + ">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 14, filename: "jade/myposts/posted_projects.jade" });
buf.push("<b>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 14, filename: jade_debug[0].filename });
buf.push("" + (jade.escape((jade.interp = bidcount) == null ? '' : jade.interp)) + "");
jade_debug.shift();
jade_debug.shift();
buf.push("</b>");
jade_debug.shift();
jade_debug.shift();
buf.push("</a>");
jade_debug.shift();
jade_debug.shift();
buf.push("</li>");
jade_debug.shift();
jade_debug.unshift({ lineno: 15, filename: "jade/myposts/posted_projects.jade" });
buf.push("<li>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 15, filename: jade_debug[0].filename });
buf.push("End Date: ");
jade_debug.shift();
jade_debug.unshift({ lineno: 16, filename: "jade/myposts/posted_projects.jade" });
buf.push("<b>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 16, filename: jade_debug[0].filename });
buf.push("" + (jade.escape((jade.interp = enddate) == null ? '' : jade.interp)) + "");
jade_debug.shift();
jade_debug.shift();
buf.push("</b>");
jade_debug.shift();
jade_debug.shift();
buf.push("</li>");
jade_debug.shift();
jade_debug.shift();
buf.push("</ul>");
jade_debug.shift();
jade_debug.shift();
buf.push("</td>");
jade_debug.shift();
jade_debug.shift();
buf.push("</tr>");
jade_debug.shift();
jade_debug.shift();;return buf.join("");
} catch (err) {
  jade.rethrow(err, jade_debug[0].filename, jade_debug[0].lineno, "tr    \n  td\n    a(href=\"project/#{projectid}\") \n      b #{projectname}\n    br\n    ul.bulletless\n      li Status: \n        b #{additionalstatus}\n      if averagebid\n        li Price: \n          b $#{price}\n      li Bids: \n        a(href=\"project/#{projectid}\")\n          b #{bidcount}\n      li End Date: \n        b #{enddate}\n");
}
}
};