
let titleCount = 1;
let totalPriceCount = 0;


const ticketButton = document.querySelectorAll("h4");
 for (const item of ticketButton) {
    item.addEventListener("click" , function handleClick() {
        //get the value
        const title = item.innerText;
        const getPrice = document.getElementById("price-value");
        const price = parseFloat(getPrice.innerText);
        
        //can be clicked only once
        item.removeEventListener("click", handleClick);
        
        
        //change the color
        item.classList.add("bg-lime-400");
        
        //put it inside the div
        const titleContainer = document.getElementById("value-seat");
        const p = document.createElement("p");
        p.innerText = title;
        titleContainer.appendChild(p);
        titleCount++;
        
        const titleContainerTwo = document.getElementById("value-price");
        const p2 = document.createElement("p");
        p2.innerText = price;
        titleContainerTwo.appendChild(p2);
        
        const titleContainerThree = document.getElementById("value-class");
        const p3 = document.createElement("p");
        p3.innerText = "Economy";
        titleContainerThree.appendChild(p3);
        
        totalPriceCount += price;
        document.getElementById("total-price").innerText = totalPriceCount;
        document.getElementById("seat-count").innerText = titleCount - 1 ;
        document.getElementById("seat-left").innerText = 40 - (titleCount - 1) ;
        
        if (titleCount-1 > 4) {
         alert("You can only buy four ticket")
        }
        
    })
 }


 const btnTwo = document.getElementById("apply-button");
 btnTwo.addEventListener("click", function () {
    
    const couponElement = document.getElementById("apply-input").value;
    const couponCode = couponElement.split(" ").join("").toUpperCase();
    const couponCodeTwo = couponElement.charAt(0).toUpperCase() + couponElement.slice(1).split(" ").join("");
    

         if (totalPriceCount >= 2200) {
            if (couponCode === "NEW15") {
             const discount =  totalPriceCount * 0.15;
             const discountAmount = totalPriceCount - discount;
             document.getElementById("grand-total-price").innerText = discountAmount.toFixed(2);
             document.getElementById("apply-input").value = "";

            } else if (couponCodeTwo === "Coupon20"){
               const discountTwo =  totalPriceCount * 0.2;
             const discountAmountTwo = totalPriceCount - discountTwo;
             document.getElementById("grand-total-price").innerText = discountAmountTwo.toFixed(2);
             document.getElementById("apply-input").value = "";
            }else {
               alert("invalid coupon")
            }
         } else {
            document.getElementById("grand-total-price").innerText = totalPriceCount;
            
         }


         
          
 })
  
 document.getElementById("phone-number").addEventListener("keyup", function(event) {
    const text = event.target.value;
    const textTwo = isNaN(text);
    const OneTicket = titleCount - 1;
    
    const nextButton = document.getElementById("next-btn")
    if ( textTwo === false && OneTicket >= 1) {
        nextButton.removeAttribute("disabled");
    } else {
        alert("Please enter your number and buy at least one ticket")
    }
 })
 
 
 document.getElementById("next-btn").addEventListener("click", function () {
    const thankYou = document.getElementById("thank-you");
    const mainSection = document.getElementById("main-section");
    mainSection.classList.add("hidden")
    thankYou.classList.remove("hidden");
    const headerSection = document.getElementById("header-section");
    headerSection.classList.add("hidden")
 })
 
 document.getElementById("apply-button").addEventListener("click", function () {
   const divHide = document.getElementById("input-section");
   divHide.classList.add("hidden")
})

 