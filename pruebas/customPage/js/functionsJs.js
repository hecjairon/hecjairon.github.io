/**
	*
**/
function openWindows( file, nameWindows, id, widthD, heightD ){

	if ( $( "#" + id ).hasClass( 'ui-dialog-content' ) ) {
	    
	    if( $( "#" + id ).dialogExtend("state") === "minimized"  || $( "#" + id ).dialogExtend("state") === "collapsed" ){

	    	$( "#" + id ).dialogExtend( "restore" );

	    }

	} else {
	    var posY = $("#menuBarMain").height() + 100;
	    var posX = ( $(window).width / 2 ) - ( $(window).width / 4 );
		$( "<div id=\"" + id + "\"></div>" ).load( file ).
			dialog({
				"title" : nameWindows,
				width: widthD,
    			height: heightD,
    			resizable: false,
    			modal : false,
    			position: { 
    				my: "center",
    				at: "center",
    				collision: 'none',
    				of: $('.contentW')
    			}, //[x,y] x = lef y = top
    			appendTo: ".contentW",
    			open: function( event, ui ) {
    				$("#"+id).css( {"overflow-x": 'hidden'} );
    			},
				close : function(ev, ui) {
	            			$(this).dialog('destroy').remove()
	                   },
			}).dialogExtend({
				"closable" : true, // enable/disable close button
				"maximizable" : true, // enable/disable maximize button
				"minimizable" : true, // enable/disable minimize button
				"collapsable" : false, // enable/disable collapse button
				"dblclick" : "collapse", // set action on double click. false, 'maximize', 'minimize', 'collapse'
				"titlebar" : "transparent", // false, 'none', 'transparent'
				"minimizeLocation" : "right", // sets alignment of minimized dialogues
				"icons" : { // jQuery UI icon class
					"close" : "ui-icon-circle-close",
					"maximize" : "ui-icon-circle-plus",
					"minimize" : "ui-icon-circle-minus",
					"restore" : "ui-icon-bullet"
				}
			}).parent().draggable({
    			containment: '.contentW'
			});
	}
}

function showAlert( title, message, typeMessage ){

	return "<div class=\"alert alert-" + typeMessage + " fade in\">"
    	+ "<a href=\"#\" class=\"close\" data-dismiss=\"alert\">&times;</a>"
    	+ "<strong> " + title + " </strong> "+ message
		+ "</div>";

}

function resetForm( idForm ){

	$("#" + idForm)[0].reset();
	$("#" +idForm+ " input:hidden, #" +idForm+ " textarea").val();

}

function settingDataTable(){

	var dataSetting = {
		"language": {
			"lengthMenu": "Exibir_MENU_ "
		},
		"bInfo" : false,
		"columnDefs": [
        {"className": "dt-center", "targets": "_all"}
      ]
	};

	return dataSetting;

}

$(document).ready( function() {

	var heightCollpse = ($(window).height() - 49) - ( $("#hecjaironTitle").height() + $("#menuBarIndex").height() );
	$(".contentW").css({
		"float": "left",
		"width": "100%",
		"height":   heightCollpse+"px",
	});
	$("footer").css({
		"margin-top":   heightCollpse+"px",
		"border-top" : "solid black 1px"
	});

});


jQuery.fn.capitalize = function() {
    $(this[0]).keyup(function(event) {
        var box = event.target;
        var txt = $(this).val();
        var stringStart = box.selectionStart;
        var stringEnd = box.selectionEnd;
        $(this).val(txt.replace(/^(.)|(\s|\-)(.)/g, function($word) {
            return $word.toUpperCase();
        }));
        box.setSelectionRange(stringStart , stringEnd);
    });

   return this;
}

