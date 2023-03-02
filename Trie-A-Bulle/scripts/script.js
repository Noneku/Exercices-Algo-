let Content = [10,20,5,30,40,13];

for (let i = 0; i < Content.length; i++) {
    for (let j = 0; j < i; j++) {
        if(Content[j] > Content[j+1]){
            Content[j+1] = Content[j];
        }
        
    }
     
    console.log(Content);
} 