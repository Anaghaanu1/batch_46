const categoryUrl="http://localhost:9800/events?category=fashion";
const electronicsUrl="http://localhost:9800/events?category=electronics";
const HomeUrl="http://localhost:9800/events?category=home";
const beautyUrl="http://localhost:9800/events?category=beauty_toy";


function getCategory() {
console.log("hello category");
fetch(categoryUrl,{method:'GET'})
.then((res)=>res.json())
.then((data)=>{
    data.map((item)=>{
        let element_li=document.createElement('li');//<li></li>
    let element_a=document.createElement('a');//<a></a>
       element_a.setAttribute("href","#");
     
    //    element_a.style.color="black";
        let text=document.createTextNode(item.product_name);
        element_a.appendChild(text);//<a>item</a>
        element_li.appendChild(element_a);//<li><a>item</a></li>


        console.log(text);
        
        document.getElementById('fashion').appendChild(element_li);
    })

})
}
function getElectronics() {
    
    fetch(electronicsUrl,{method:'GET'})
    .then((res)=>res.json())
    .then((data)=>{
        data.map((item)=>{
            let element_li=document.createElement('li');//<li></li>
        let element_a=document.createElement('a');//<a></a>
           element_a.setAttribute("href","#");
         
        //    element_a.style.color="black";
            let text=document.createTextNode(item.product_name);
            element_a.appendChild(text);//<a>item</a>
            element_li.appendChild(element_a);//<li><a>item</a></li>
    
    
            console.log(text);
            
            document.getElementById('electronics').appendChild(element_li);
        })
    
    })
    }

    function getBeauty() {
    
        fetch(beautyUrl,{method:'GET'})
        .then((res)=>res.json())
        .then((data)=>{
            data.map((item)=>{
                let element_li=document.createElement('li');//<li></li>
            let element_a=document.createElement('a');//<a></a>
               element_a.setAttribute("href","#");
             
            //    element_a.style.color="black";
                let text=document.createTextNode(item.product_name);
                element_a.appendChild(text);//<a>item</a>
                element_li.appendChild(element_a);//<li><a>item</a></li>
        
        
                console.log(text);
                
                document.getElementById('beauty').appendChild(element_li);
            })
        
        })
        }


        function getHome() {
    
            fetch(HomeUrl,{method:'GET'})
            .then((res)=>res.json())
            .then((data)=>{
                data.map((item)=>{
                    let element_li=document.createElement('li');//<li></li>
                let element_a=document.createElement('a');//<a></a>
                   element_a.setAttribute("href","#");
                 
                //    element_a.style.color="black";
                    let text=document.createTextNode(item.product_name);
                    element_a.appendChild(text);//<a>item</a>
                    element_li.appendChild(element_a);//<li><a>item</a></li>
            
            
                    console.log(text);
                    
                    document.getElementById('home').appendChild(element_li);
                })
            
            })
            }