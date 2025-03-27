let slides = document.querySelectorAll(".carousel-item");
let slide_index = 0;
let testimonialData = document.getElementById("testimonial-data")
let testiominalWriter = document.getElementById("testiominal-writer")
let testimonialImg = document.getElementById("testinomialImg")
let i;
let slide_show = () => {
 for(i = 0; i < slides.length; i++){
    slides[i].classList.remove("active")
 }
 slides[slide_index].classList.add("active")
}

let change_slide = () => {
    slide_index ++;
    if(slide_index >= slides.length){
        slide_index = 0;
    }
    slide_show();
}

setInterval
(change_slide, 5000);


let testimonial = [
    {
      name: "Alice Johnson",
      review: "The food was absolutely delicious, and the ambiance was perfect for a cozy dinner. Will definitely come back!",
    },
    {
      name: "Mark Evans",
      review: "Great place with excellent service. The staff was friendly, and the food was served hot and fresh!",
    },
    {
      name: "Samantha Lee",
      review: "The flavors were amazing, but the waiting time was a bit long. Worth it for the taste, though!",
    },
    {
      name: "James Carter",
      review: "A hidden gem! The presentation of the dishes was beautiful, and everything tasted incredible.",
    },
    {
      name: "Olivia Martinez",
      review: "Good food, nice ambiance, but the service could be a bit faster. Overall, a great experience.",
    }
  ]


  function changeQuotes() {
    const index = Math.floor(Math.random() * testimonial.length);
    testimonialData.textContent = testimonial[index].name;
    testiominalWriter.textContent = testimonial[index].review;
  }

  changeQuotes()

  setInterval(() => {

    changeQuotes();

  }, 5000);
  