// Sayfa yüklendiğinde

window.addEventListener("load", () => {

    document.body.classList.add("loaded");

});

// Menüye yumuşak geçiş

document.querySelectorAll('a[href^="#"]').forEach(link=>{

    link.addEventListener("click",function(e){

        e.preventDefault();

        const target=document.querySelector(this.getAttribute("href"));

        if(target){

            target.scrollIntoView({

                behavior:"smooth"

            });

        }

    });

});

// Hero resmi hafif büyüyüp küçülsün

const hero=document.querySelector(".hero-image img");

if(hero){

setInterval(()=>{

hero.style.transform="scale(1.03)";

setTimeout(()=>{

hero.style.transform="scale(1)";

},1000);

},3000);

}

// Ürün kartı hover efekti

document.querySelectorAll(".product-card").forEach(card=>{

card.addEventListener("mouseenter",()=>{

card.style.transition=".3s";

});

});

// Console mesajı 😊

console.log("Işıl Teknik Hırdavat Web Sitesi Hazır 🚀");
