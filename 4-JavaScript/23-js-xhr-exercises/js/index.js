var appkey="12000491-41fc68d8c365df909e022ceb6";
function getData(key,keyWord,category,language,orientation,minHeight,minWidth,color,safe,orderType,page,perPage){
    let url="https://pixabay.com/api/?key="+key+"&q="+keyWord+"&image_type=photo&category="+category+"&pretty=true"+(language!=""?"&lang="+language:"")+(orientation!=""?"&orientation="+orientation:"")+(language!=""?"&lang="+language:"")+(minHeight!=""?"&min_height="+minHeight:"")+(minWidth!=""?"&min_width="+minWidth:"")+(color!=""?"&colors="+color:"")+(safe!=""?"&safesearch="+safe:"")+(orderType!=""?"&order="+orderType:"")+(page!=""?"&page="+page:"")+(perPage!=""?"&per_page="+perPage:"");
    let xhr = new XMLHttpRequest();
    xhr.open('GET',url);
    xhr.send();
    xhr.onload = function() {
        if (xhr.status == 200) {
            let convertedObj=JSON.parse(xhr.response) 
            //let htmlText = ''
            console.log(convertedObj.hits)
            let counter = 0
            setInterval(() => {
                if(counter < convertedObj.hits.length){
                    document.write(`<a href="${convertedObj.hits[counter].pageURL} " target="_blank"><img src="${convertedObj.hits[counter].largeImageURL} " ></a>  `)
                    document.close()
                    counter++
                }else {
                    counter =0
                }
            }, 1000);
                //htmlText+='<img src="'+product.largeImageURL + '" width=80>    '
                //htmlText+='<a href="'+element.pageURL +'" target="_blank"><img src="'+element.largeImageURL + '" width=200></a>  '
                
            
            //document.write(htmlText)
        }else {
            console.log(xhr.status)
        }
    }

}



getData(appkey,prompt('Enter a key word'))
//getData(appkey,'flower','nature','fr', "horizontal",50,100,"red", "true","latest",2,4)