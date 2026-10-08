function areaOfCircle(radius) {
  if (radius < 0) {
    return "Radius cannot be negative.";
  }

  return Math.PI * radius * radius;
}

function generateRandomPassword(length) {
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=[]{}|;:,.<>?";
  let password = "";

  for (let i = 0; i < length; i++) {
    const position = Math.floor(Math.random() * characters.length);
    password += characters[position];
  }

  return password;
}

function calculateSalesTax(price, taxRate) {
  return price + (price * taxRate) / 100;
}

console.log("Area of circle with radius 10:", areaOfCircle(10));
console.log("Random password:", generateRandomPassword(20));
console.log("Total price with tax:", calculateSalesTax(120, 8.5));
