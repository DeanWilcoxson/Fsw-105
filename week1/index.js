var shopperObject = {
    firstName: "Dean",
    lastName: "Wilcoxson",
    preferredNickName: "Deanoe",
    age: 29,
    birthDate: "07/28/1991",
    driversLicenseNumber: "E3874612",
    groceryList: ["Apples", "Steak", "Milk", "Bread", "Cheddar_Cheese", ],
    fullName: function() {
        return this.firstName + " " + this.lastName;
    },
    isMale: true
};
console.log(shopperObject);