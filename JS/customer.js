// Select Net Balance
let netBalance = parseInt(document.getElementById("netBalance").innerText);

// Function For Sending Money
function sendMoney() {
    // Select The Name You want to Send Money To
    var Name = document.getElementById("Name").value;
    // Select The Value Of The Money You Want To Send
    var Value = parseInt(document.getElementById("Value").value);

    if (Value > 10000) {
        alert(" To Much Value. ")
    } else {
        var userAccount = Name + "BankBalance";
        var amount = parseInt(document.getElementById(userAccount).innerHTML) + Value;
        var netBalance = parseInt(document.getElementById("netBalance").innerText) - Value
        document.getElementById("netBalance").innerText = netBalance
        document.getElementById(userAccount).innerHTML = amount;
        alert(`Successful conversion..  
        $${Value} is sent to ${Name}@email.com.`)

        // Start Transaction Pop-Up 

        // Create List To Add All Operations.
        var createPTag = document.createElement("li");

        // Collect Data About Operation.
        var data = document.createTextNode(`$${Value} is sent to recepient with Email-id ${Name}@email.com on ${Date()}.`);
        createPTag.appendChild(data);

        // Put Above Sections In The Body Of Transaction
        var element = document.getElementById("transaction-PopUp");
        element.insertBefore(createPTag, element.firstChild);
    }
}