const arrayOfHealthWishes = [
 "Wishing you endless energy and vitality as you prioritize your health every day.",
 "May you always find the strength to stay active, eat well, and take care of your mind and body.",
 "I hope you enjoy restful nights and wake up feeling refreshed and ready to tackle each new day.",
 "May stress never weigh you down, and may peace and relaxation fill your life.",
 "Wishing you a long and healthy life full of happiness, laughter, and positive moments.",
 "May you always be surrounded by supportive people who encourage your well-being.",
 "I hope you find joy in every step of your health journey, and may your efforts bring you lasting health.",
 "Wishing you the wisdom to take care of your body and mind, and the happiness that comes from good health.",
 "May your heart stay strong, your mind clear, and your body in perfect harmony.",
 "Here’s to a life filled with good health, love, and endless opportunities for wellness.",
 ]
 const arrayOfimages = [
    "1.png",
    "2.png",
    "3.png",
    "4.png",
 ]
    
    
    document.getElementById('btn_health_wishes').addEventListener('click',() => {
        let index = Math.floor(Math.random() * arrayOfHealthWishes.length)
        document.getElementById("p-health-wishes").innerText=arrayOfHealthWishes[index]
    })

    let countOfPills = 5 
    document.getElementById("count-of-tablets").innerText = "💊".repeat (
     countOfPills
    )
    document.getElementById("btn_health_wishes").addEventListener("click",() =>{
        let index = Math.floor(Math.random() * arrayOfHealthWishes.length);
        document.getElementById("p-health-wishes").innerText = 
         arrayOfHealthWishes[index];


    countOfPills --;
    console.log(countOfPills);

    document.getElementById("count-of-tablets").innerText = "💊".repeat(countOfPills) + "❌".repeat(5 - countOfPills);
     console.log("💊".repeat(countOfPills) + "❌".repeat(5 - countOfPills));

     if (countOfPills == 0) {
        console.log("countOfPills = 0");
        document.getElementById("btn_health_wishes").style.display = "none"
    
     }
    })
    
    document.getElementById("btn-buy-tablets").addEventListener("click",() => {
        countOfPills = 5
        console.log(countOfPills);
        document.getElementById("count-of-tablets").innerText = "💊".repeat(
            countOfPills
        );
        document.getElementById("btn_health_wishes").style.display = "inline-block";
    });
    
    let gallaryImage = 1 
    document.getElementById("main-image").setAttribute('src',`img/gallary/${arrayOfimages[gallaryImage-1]}`)

    document.getElementById("right-arrow").addEventListener('click',()=>{
        gallaryImage++
        console.log(gallaryImage)
        
        if(gallaryImage == 4) gallaryImage = 1;
 

        document.getElementById("main-image").setAttribute('src',`img/gallary/${arrayOfimages[gallaryImage-1]}`)
    });
    document.getElementById("left-arrow").addEventListener('click',()=>{
        gallaryImage--
        console.log(gallaryImage)
        
        if(gallaryImage == 1) gallaryImage = 4;
        
        document.getElementById("main-image").setAttribute('src',`img/gallary/${arrayOfimages[gallaryImage-1]}`)
    });


const arrayOfVitamins = [
    {
        id:"1",
        title:"Вітамін A",
        photo:"vitamin-a.png",
        description:"Вітамін А — група близьких за хімічною будовою речовин, яка включає ретиноїди: ретинол (вітамін A1, аксерофтол), дегідроретинол (вітамін А2), ретиналь (ретинен, альдегід вітаміну A1), ретиноєву кислоту і кілька провітамінів — каротиноїдів, серед яких найважливішим є β-каротин.",
        rating:"4",
        type:"Кристалічні",
    },
    {
        id:"2",
        title:"Омега-3",
        photo:"",
        description:"поліненасичені жирні кислоти належать до родини ненасичених жирних кислот, що мають подвійний вуглець-вуглецевий зв'язок в омега-3 позиції, тобто біля третього атома вуглецю від метильного кінця жирної кислоти.",
        rating:"3",
        type:"водорозчинні",
    },
    {
        id:"3",
        title:"Вітамін D",
        photo:"vitamin-d.png",
        description:"иророзчинний вітамін, який перш за все сприяє засвоєнню кальцію, допомагаючи росту та мінералізації наших кісток. Його часто називають «сонячним вітаміном», і він утворюється у шкірі під впливом сонячного світла. Попри це, дефіцит вітаміну D є одним із найпоширеніших серед усіх поживних речовин у світі.",
        rating:"5",
        type:"жиророзчині",
    },
    {
        id:"4",
        title:"Вітамін С",
        photo:"vitamin-d.png",
        description:"відносно проста органічна кислота. Хімічна формула C6H8O6. Міститься у свіжих фруктах (яблука, сливи, персики тощо) та овочах. Відносять до водорозчинних вітамінів.",
        rating:"3",
        type:"Аскорбінова кислота",
    },
    {
        id:"5",
        title:"Вітамін B",
        photo:"vitamin.png",
        description:"аміни, розчинні у воді. Зазвичай розглядаються в комплексі (раніше вважалося, що це один вітамін, а не група). Отримали свою збірну назву тому, що в природних продуктах завжди існують разом. Спільно вітаміни групи B виконують головну функцію — участь у тканинному диханні та виробленні енергії, відіграють важливу роль у підтримці як ментального, так і емоційного здоров'я.",
        rating:"2",
        type:"Водорозчинні",
    },
]
//console.log(arrayOfVitamins);

arrayOfVitamins.forEach((item)=>{
    console.log(item);

    let divVitamin = document.createElement('div')
    divVitamin.innerText = item.title
    divVitamin.classList.add('vitamin')

    divVitamin.innerHTML = `
          <h3>${item.title}</h3>
          <hr>
          <img src="img/vitamins/${item.photo}" alt="">
          <p>${item.description}</p>
        <div>
              <p>${"💚".repeat(item.rating)+"🤍".repeat(5-item.rating)}</p>
              <p>${item.type}</p>
        </div> 
    `;

    document.getElementById("p-vitamins").appendChild(divVitamin);
});


