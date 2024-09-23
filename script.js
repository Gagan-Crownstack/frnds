// import {data1, data2} from './constant';

//Data 
const data=[
  {
      name: "#1 DATA",
      des1:`Using our data, insights and operations, we help the world’s  smallest vendors see outstanding growth in just a few months of activity – and shed light on what has been an operational “black hole” to the world’s largest consumer goods companies.`,
      des2:`Utilizing a holistic technology led platform, with a strong eﬃcient network of shared local warehouses, we align supply and demand across the ecosystem.`
  },
  {
      name:"#2 SALES",
      des1:"We utilize our data so that small vendors enjoy unprecedented sales growth based on our insights. We offer vendors direct promotions from our manufacturers which is tailored to their needs based on our data."

  },
  {
      name:"#3 PARTNERS",
      des1:`Partnerships with local wholesalers enable us to create an efficient network of regional warehouses with no capex.`,
      des2:`Partnerships with global manufacturers enable us to significantly grow their sales and market share while they provide promotions for the vendors.`
      
  },
  {
      name:"#4 CREDITS",
      des1:"Based on our network data and the unique needs of our value chain we have developed tailored AI-based credit scoring",
      des2:`And marketing algorithms enabling the micro, small and medium businesses in our value chain to enjoy responsible and relevant credit products from our financial partners such as micro-retailer consignment or Wholesaler credit.`
  },
  {
      name:"#5 TRADE FINANCE",
      des1:`The &frnds technology enables us to bundle the entire value chain into a portfolio lending opportunity for financial institutions. In addition, we can provide financing to each of the small stores. The process is powered by our unique AI algorithms, which combines risk score (credit score) and propensity score. This service is already impacting tens of thousands of our users, creating efficiency and much better product prices to consumers.​`
  }
]


const data2=[
  {
      id:1,
      heading:"FMCG & Financial Companies",
      subHeading:" Consortium partners include leading consumer brands and financial institutions",
      src:"./Public/hdimg1.svg",
      src2:""
  },
  {
    id:2,
    heading:"Distributors",
    subHeading:"Supply FMCG Products to wholesalers​ ",
    src:"./Public/hdimg2.svg",
},
{
  id:3,
  heading:` frnd& Local Wholesalers`,
  subHeading:`The &frnds platform powers the network of local wholesalers i.e. shared warehouse infrastructure model`,
  src:"./Public/hdimg3.svg",
},
{
  id:4,
  heading:"` frnd& Commerce Manager",
  subHeading:`&frnds commerce managers power the on-ground commerce network`,
  src:"./Public/hdimg4.svg",

},
{
  id:5,
  heading:"FMCG & Financial Companies",
  subHeading:"Network of millions of mom-and-pop shops (e.g. warungs, sari saris) ",
  src:"./Public/hdimg5.svg",
},
  
]




const hamButton = document.getElementById("hamBurger");

hamButton.addEventListener("click", () => {
//   nav.classList.remove("");
    let navbar= document.getElementById("navbar");
    let list=document.getElementById("navlist");
    let close= document.getElementById("close");
  navbar.classList.add("bg-sky-500")
  navbar.classList.add("absolute")
//   navbar.classList.add("top-0")
  navbar.classList.add("h-screen")
  navbar.classList.add("w-full")
  navbar.classList.add("flex-col")
  list.classList.remove("hidden")
  hamButton.classList.add("hidden")
  close.classList.remove("hidden")

});


document.getElementById('solutionDiv').innerHTML=data.map((point)=>
{return(
  
 ` 
            <button class="accordion">${point?.name}</button>
            <div class="panel">
               <p>${point?.des1}</p>
               <p>${point?.des2?point.des2:""}</p>
            </div>
  `)
}
).join('')

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

// console.log(data1,data2);

document.getElementById('steps').innerHTML = data2.map((step)=>{
  return(`
    <div class="step-div scroll-pt=${step.id*10} cursor-pointer hover:bg-sky-700">
            
               <div class="flex justify-center"> <img src=${step?.src} alt="hdimg1"></div>
            
            <div class="text-2xl lg:text-4xl font-bold">${step?.heading}</div>
            <div class="text-l lg:text-xl">${step?.subHeading}</div>
        </div> 
    
    `)
}).join('')


let slider= tns({
  container: ".slider-partner",
  "slideby": 1,
    "nav": false,

    responsive:{
      1600:{
        items:4,
        gutter:20,

      },
      1024:{
        items:3,
        gutter:20
      },
      768:{
        items:2,
        gutter:20
      },
      480:{
        items:1,
        gutter:20
      }
    }


})
