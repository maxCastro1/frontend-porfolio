const articles = document.getElementsByClassName("article")
// const dataStatus = articles.getAttribute('data-status')
let activeIdenx = 0;


//  console.log(articles[0].dataset.status)

function handleRightClick(){
    for(let i=0; i < articles.length; i++ ){
        if(articles[i].dataset.status === "active"){
             activeIdenx = i;
        }
     }
     if(activeIdenx === articles.length - 1){
        articles[activeIdenx].dataset.status = "inactive"
        articles[activeIdenx - (articles.length - 1)].dataset.status = "active"
     }
     else{
        articles[activeIdenx].dataset.status = "inactive"
        articles[activeIdenx + 1].dataset.status = "active"
     }
  
}
function handleLeftClick(){
   
    for(let i=0; i < articles.length; i++ ){
        if(articles[i].dataset.status === "active"){
             activeIdenx = i;
        }
     }
     if(activeIdenx === 0){
        articles[activeIdenx].dataset.status = "inactive"
        articles[activeIdenx + (articles.length - 1)].dataset.status = "active"
     }
     else{
        articles[activeIdenx].dataset.status = "inactive"
        articles[activeIdenx - 1].dataset.status = "active"
     }
 }
 

