array = 
[
    {
        name : "danaka",
        height : 170,
        weight : 30
    },
    {
        name : "kanna",
        height : 152,
        weight : 42

    },
    {
        name : "takuya",
        height : 180,
        weight : 70

    },
    {
        name : "yuzuru",
        height : 188,
        weight : 73

    }


]

//しょうじゅん
array.sort(function(a, b){
    return a.height - b.height;
});
for(var i = 0; i < 4; i ++)
{
    console.log(array[i].height);
}

//こうじゅん
array.sort(function(f,s) {
    const nameF = f.name;
    const nameS = s.name;
        if(nameF > nameS ){ 
          return 1;
        }
        if(nameF < nameS ) { 
          return -1;
        }
        return 0;
});

for(var i = 0; i < 4; i ++)
{
    console.log(array[i].name);
}

//こうじゅん
array.sort(function(a, b){
    return b.weight - a.weight;
});


for(var i = 0; i < 4; i ++)
{
    console.log(array[i].weight);
}
