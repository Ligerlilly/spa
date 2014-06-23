
describe("chat click Event", function () {
  var spyEvent; 
  $(function (){ spa.initModule( $('#spa') ) });
  jQuery.fx.off = true;
 
  it ('should invoke onClickChat event and extend chat slider', function () {
  	spyEvent = spyOnEvent( '.spa-shell-chat', 'click' );
  	$( '.spa-shell-chat' ).trigger( "click" );
    expect( 'click' ).toHaveBeenTriggeredOn( '.spa-shell-chat' );
    expect( spyEvent ).toHaveBeenTriggered(); 
    expect( $(".spa-shell-chat" ).height() ).toBe( 450 );
  });
  
  it ("should invoke onClickChat event and retract chat slider", function () {
  	spyEvent = spyOnEvent( '.spa-shell-chat', 'click' );
  	$( '.spa-shell-chat' ).trigger( "click" );
    expect( 'click' ).toHaveBeenTriggeredOn( '.spa-shell-chat' );
    expect( spyEvent ).toHaveBeenTriggered(); 
  	expect( $(".spa-shell-chat" ).height() ).toBe( 15 );
  });
      
  
});