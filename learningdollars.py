# MODELS

import webapp2

from pages import MainPage, AboutPage, TeamPage, ModulesPage, ModulePage
from info import AccountInfo, ModuleInfo, ModulesInfo
from actions import UpdateModules

application = webapp2.WSGIApplication([
    # Views
    webapp2.Route(
        '/', 
        handler=MainPage, 
        name='main'
    ),
    webapp2.Route(
        '/about', 
        handler=AboutPage, 
        name='about'
    ),
    webapp2.Route(
        '/team', 
        handler=TeamPage, 
        name='team'
    ),
    webapp2.Route(
        '/modules', 
        handler=ModulesPage, 
        name='modules'
    ),
    webapp2.Route(
        '/<module_id:\d+>', 
        handler=ModulePage, 
        name='module'
    ),
    
    # Info
    webapp2.Route(
        '/accountinfo/<account_id:\d+>', 
        handler=AccountInfo, 
        name='account'
    ),
    webapp2.Route(
        '/moduleinfo/<module_id:\d+>', 
        handler=ModuleInfo, 
        name='module'
    ),
    webapp2.Route(
        '/modulesinfo', 
        handler=ModulesInfo, 
        name='modules'
    ),

    # Actions
    webapp2.Route(
        '/updatemodules', 
        handler=UpdateModules, 
        name='updatemodules'
    ),

], debug=True)
