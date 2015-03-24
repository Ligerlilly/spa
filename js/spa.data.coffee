spa.data = do->
  stateMap = { sio : null }
  makeSio = ->
    socket = io.connect( '/chat' )
    emit : ( event_name, data )->
      socket.emit( event_name, data)
      return
    on : ( event_name, callback )-> 
      socket.on( event_name, ->
        callback( arguments )
        return )
      return

  getSio = ->
    if not stateMap.sio
      stateMap.sio = makeSio()
    stateMap.sio 

  initModule = ->

  getSio     : getSio
  initModule : initModule




