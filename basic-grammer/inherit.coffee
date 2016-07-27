class Gadget
  constructor: (@name) ->
  sell: =>
    "Buy #{@name}"

class IPhone extends Gadget
  constructor: -> super("iphone")
  nosell: =>
    console.log 'nosell'
    super 4
    "Don't #{@sell()}"

iphone = new IPhone
iphone.nosell() #=> Don't Buy iphone
