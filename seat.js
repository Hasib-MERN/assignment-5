

const allSeat = document.getElementsByClassName("seatSelect");

let count = 0;
for (const btn of allSeat) {
    btn.addEventListener("click", function (e) {
        count = count + 1;
        
        const totalSeat = document.getElementById("all-seat").innerText;
        const convertTotalSeat = parseInt(totalSeat);
       const emptySeat = convertTotalSeat - 1;

       document.getElementById("all-seat").innerText = emptySeat;
        
        const seatName = e.target.innerText;

        const totalPrice = document.getElementById("total-price")

        const li = document.createElement("li")

        const p = document.createElement("p");
        p.innerText = seatName;

        const p1 = document.createElement("p");
        p1.innerText = "Economy";

        const p2 = document.createElement("p");
        p2.innerText = 550;

        li.appendChild(p);
        li.appendChild(p1);
        li.appendChild(p2);

        totalPrice.appendChild(li);
 
        const t1 = document.getElementById("ticket-price").innerText;
        const t = parseInt(t1);

        const totalCost = document.getElementById("total-pri").innerText;
        const totalCostConvert = parseInt(totalCost);
        console.log(typeof totalCostConvert);
        const sum = totalCostConvert + parseInt(t);
        document.getElementById("total-pri").innerText = sum;
       

        const grandTotal = document.getElementById("grand-total").innerText;
        const converGrandTotal = parseInt(grandTotal);
        const sum2 = converGrandTotal + parseInt(t);

        setInnerText("seat-count", sum);
        setInnerText("grand-total", sum2);
        setInnerText("seat-count", count)
    })
}

function setInnerText(id, value) {
    document.getElementById(id).innerText = value;
}

console.log(sum2);




