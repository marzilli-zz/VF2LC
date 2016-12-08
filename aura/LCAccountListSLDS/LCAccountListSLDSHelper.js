({
	//Fetch the expense list from the Apex controller
    getAccountList : function(component) {
		var action = component.get("c.getAccounts");
        
        //Set up the callback
        action.setCallback(this, function(response){
            var state = response.getState();
			if (component.isValid() && state === "SUCCESS") {
                component.set("v.accounts",response.getReturnValue() );
            }
    		});
    	  $A.enqueueAction(action);
	}
})