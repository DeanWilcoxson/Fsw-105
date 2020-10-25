var shopperObject = {
    isMale: true,
    age: 29,
    firstName: "Dean",
    lastName: "Wilcoxson",
    preferredNickName: "Deanoe",
    birthDate: "07/28/1991",
    driversLicenseNumber: "E3874612",
    groceryList: ["Apples", "Steak", "Milk", "Bread", "Cheddar_Cheese", ],
    fullName: function() {
        return this.firstName + " " + this.lastName;
    }
};
console.log(shopperObject.fullName);