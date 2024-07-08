numItemsPurchased = 0
debugPotionDescription = "Debug Potion - An expulsion type potion, great for evicting bugs."
debugPotionPrice = 404
debugPotionQuantity = 1
loopPotionDescription = "Loop Potion - A repetition type potion, effective for menial tasks."
loopPotionPrice = 222
loopPotionQuantity = 0
bytePotionDescription = "Byte Potion - A healing potion. Used to salve bites."
bytePotionPrice = 101
bytePotionQuantity = 1
salesTax = 0.07
addedTax = 0
discountCode = "MYSTIC10"
discountPercentage = 0.10
customerTotal = 0
customerItemization = ""

-- Function to add item to receipt
function addItem(description, price, quantity)
    if quantity > 0 then
        local itemTotal = price * quantity
        customerItemization = customerItemization .. string.format("%s x%d - $%.2f\n", description, quantity, itemTotal)
        customerTotal = customerTotal + itemTotal
        numItemsPurchased = numItemsPurchased + quantity
    end
end

-- Add items to receipt
addItem(debugPotionDescription, debugPotionPrice, debugPotionQuantity)
addItem(loopPotionDescription, loopPotionPrice, loopPotionQuantity)
addItem(bytePotionDescription, bytePotionPrice, bytePotionQuantity)

-- Apply discount if code is valid
if discountCode == "MYSTIC10" then
    local discount = customerTotal * discountPercentage
    customerTotal = customerTotal - discount
    print("Discount applied: -$" .. string.format("%.2f", discount))
end

-- Calculate and add tax
addedTax = customerTotal * salesTax
customerTotal = customerTotal + addedTax

-- Print receipt
print("Mystic Moon Potion Shop Receipt")
print("-------------------------------")
print("Customer Item(s):")
print(customerItemization)
print("Subtotal: $" .. string.format("%.2f", customerTotal - addedTax))
print("Tax: $" .. string.format("%.2f", addedTax))
print("Total: $" .. string.format("%.2f", customerTotal))
print("-------------------------------")
print("Number of items purchased: " .. numItemsPurchased)