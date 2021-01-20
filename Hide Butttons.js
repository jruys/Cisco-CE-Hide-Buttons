const xapi = require('xapi');
var expertMode;

function init(){
  console.log('Debug: expertMode 1.0');
  expertMode = true;
  toggleExpertMode();
}

function toggleExpertMode() {
  console.log('Debug: toggle, expertMode going in is ' + expertMode);
  if (expertMode) {
    xapi.command('UserInterface Extensions Panel Update', {PanelId: 'Expert', Name: 'Show'});
    xapi.command('UserInterface Extensions Panel Update', {PanelId: 'Expert', Color: '#666666'});

    xapi.Config.UserInterface.Features.Call.JoinWebex.set("Hidden");
    xapi.Config.UserInterface.Features.Share.Start.set("Hidden");
    xapi.Config.UserInterface.Features.Whiteboard.Start.set("Hidden");
  }
  else {
    xapi.command('UserInterface Extensions Panel Update', {PanelId: 'Expert', Name: 'Hide'});
    xapi.command('UserInterface Extensions Panel Update', {PanelId: 'Expert', Color: '#C2C2C2'});
    xapi.Config.UserInterface.Features.Call.JoinWebex.set("Auto");
    xapi.Config.UserInterface.Features.Share.Start.set("Auto");
    xapi.Config.UserInterface.Features.Whiteboard.Start.set("Auto");
  }
  expertMode=!expertMode;
}

xapi.event.on('UserInterface Extensions Panel Clicked', (event) => {
  if(event.PanelId == 'Expert'){
    console.log('Debug: got Expert toggle button');
    toggleExpertMode();
  }
});

init();
