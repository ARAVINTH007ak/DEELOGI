var xhr = new XMLHttpRequest();

xhr.open("GET","https://cors-anywhere.herokuapp.com/https://time.com/",true)
xhr.responseType="document";
const arr=[];
xhr.onload= function(){
    if(xhr.readyState==4 && xhr.status==200)
    {
    
        for (let index = 0; index < 6; index++) {
            
            var response=xhr.responseXML.querySelectorAll('.latest-stories__item-headline')[index].innerHTML
            

            var response1=xhr.responseXML.getElementsByClassName('latest-stories__item')[index].firstElementChild.getAttribute('href')


            arr.push({title:response,link:response1});
            
        }
        console.log(JSON.stringify(arr))
    }
}

xhr.onerror=function () {
    console.error(xhr.status,xhr.statusText);
}

xhr.send()




