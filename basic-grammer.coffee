# sum = (num...) ->
#         num.reduce(x,y) -> x + y

# sum 1,2,3

# class Gadget
#   @CITY = "beijing"

#   @create: (name, price) ->
#     new Gadget(name, price)

#   _price = 0

#   constructor: (@name, price) ->
#     _price = price

#   sell: =>
#     "Buy #{@name} with #{_price} in #{Gadget.CITY}"

# iphone = new Gadget("iphone", 4999)
# console.log iphone.name #=> "iphone"
# console.log iphone.sell() #=> "Buy iphone with 4999 in beijing"

# ipad = Gadget.create("ipad", 3999)
# console.log ipad.sell() #=> "Buy ipad with 3999 in beijing"

    if uri?
      item = pane.itemForURI(uri)
      item ?= opener(uri, options) for opener in @getOpeners() when not item
