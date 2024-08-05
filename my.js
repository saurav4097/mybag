console.log("mybag");
const msg = document.querySelector(".searchinput");
const btn = document.querySelector(".searchicon");

const updateImage =  () => {
    let newSrc = `${msg.value}.jpg`;
    
    let box111=document.querySelectorAll(".box1");
    for(let i=0;i<4;i++){
    box111[i].innerHTML=`<pre>Appliances for your ${msg.value} |
    Up to 55% off</pre>
    <div class="image31" style="background-image: url('${msg.value}.jpg');">
    </div>
    <p>see more</p>`;}
   
   
};

btn.addEventListener("click", (evt) => {
    evt.preventDefault();
    updateImage();
});
