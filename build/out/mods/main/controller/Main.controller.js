jQuery.sap.require("zcust.lib.Controller"),zcust.lib.Controller.extend("sampleapp.mods.main.controller.Main",{onInit:function(){this.getRouter().attachRoutePatternMatched(this.onRoutePatternMatched,this),"dev"===jQuery.sap.getUriParameters().get("mode")?this.getLogger().setLevel(jQuery.sap.log.Level.DEBUG):this.getLogger().setLevel(jQuery.sap.log.Level.WARNING)},onRoutePatternMatched:function(a){var b=a.getParameter("name")},navToDetail:function(a){this.getRouter().navTo("detail")}});