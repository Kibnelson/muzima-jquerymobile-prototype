	$(document).ready(function() {
		
	 var userLoginInput;
	 
	 var form = 
	
	{
		
		
	 _1text: { id: 'patientFirst', name: 'patientFirst', value:"",label:"First Name"},
	 
	_2text: { id: 'patientSecond', name: 'patientSecond', value:"",label:"Second Name"},
 
	_3text: { id: 'patientLast', name: 'patientLast', value:"",label:"Last Name"},
	
	_4text: { id: 'date', name: 'date', value:"",label:"Date of Birth"},
   
    _1radio: { id: 'sex', name: 'sex', value:"",label:"Sex"},
    
    _5text: { id: 'universalid', name: 'sex', value:"",label:"Id "},
    
    _6text: { id: 'address', name: 'adress', value:"",label:"address "},
    
    
    _7text: { id: 'phone', name: 'Phone', value:"",label:"Phone "},
    
    
    _8text: { id: 'Location', name: 'location', value:"",label:"Location "},
    
    
    _6text: { id: 'address', name: 'adress', value:"",label:"address "},
    
    
    _1button: { id: 'address', name: 'adress', value:"",label:"address "},
     
     
     
	};
		
	 $('#generatedForm').submit(function(){
	      
	        return false;
	    });
	
		
	 $('#login').submit(function(ev) {
		 
		 
		userLoginInput=$(this).serialize();
		
	
		
		// if validation is ok
		if($('#name').val()=="test")
		{
				
			$.mobile.changePage("#dashboard" );	
		}
		// there is an error in the login process
		else
		{
		
			$('#errorDiv').append("Error");
          showErrorDiv("Error");
			
		}
		
		
		return false;
		
    });
    
    $('#errorDiv').click(function() 
    {
    $('#errorDiv').text("");      
    });
    
	function showErrorDiv(message){
		
	 $('#errorDiv').append(message);
	   
	}
	
	
	 $('#patients').click(function() 
    {
   $.mobile.changePage("#mainPage" );	    
    });
    
    
    
    
    
   
    $('#suggestions li').live('click', function() {
		
			
			$.mobile.changePage("#userprofile" );	
  
    });



    $('#patients li').live('click', function() {
		
			
			$.mobile.changePage("#details" );	
  
    });


     $('#details').click(function() 
    {
  			$.mobile.changePage("#details" );	 
    });
     $('#form').click(function() 
    {
  			$.mobile.changePage("#userforms" );	 
    });
    
    
    
    
     $('#form1').click(function() 
    {
  			$.mobile.changePage("#fillform" );	 
    });
    
     $('#dashboard').click(function() 
    {
  			$.mobile.changePage("#dashboard" );	 
    });
     $('#dashboard1').click(function() 
    {
  			$.mobile.changePage("#dashboard" );	 
    }); 
    $('#dashboard2').click(function() 
    {
  			$.mobile.changePage("#dashboard" );	 
    });
    $('#dashboard3').click(function() 
    {
  			$.mobile.changePage("#dashboard" );	 
    });
 $('#dashboard4').click(function() 
    {
  			$.mobile.changePage("#dashboard" );	 
    });
    
    
    var test = $('#generatedForm');
		var html="";

	
		for(var x in form) 
		{
		
			
				if(x.substring(2)=="text")
                {
				
					html+=' <label for="'+form[x].id+'">'+form[x].label+':</label><div id="'+form[x].id+'" data-role="fieldcontain"><input type="'+x.substring(2)+'" name="'+form[x].name+'" id="'+form[x].id+'" value=""  /></div>';
	        
				}
				else 	if(x.substring(2)=="radio")
                {
				html+='<fieldset data-role="controlgroup" data-mini="true"><legend>'+form[x].label+':</legend><input type="radio" name="radio-mini" id="radio-mini-1" value="choice-1" checked="checked" /><label for="radio-mini-1">Female</label><input type="radio" name="radio-mini" id="radio-mini-2" value="choice-2"  /><label for="radio-mini-2">Male</label></fieldset>';
	        	 }
	        	 
	        	 else if(x.substring(2)=="button"){
					 html+='<div id="submitDiv" data-role="fieldcontain"> <input type="submit" value="Submit" data-inline="true"/></div>';
	        	
					 	}


		
		};



         test.append(html).trigger("create");




		
	});

	
		
