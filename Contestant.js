class Contestant{
    constructor(){

    }

    getCount(){
        var contestantCountRef = database.ref('contestantCount');
        contestantCountRef.on("value",(data)=>{
          contestantCount = data.val();
        })
      }
    
      updateCount(count){
        database.ref('/').update({
          contestantCount: count
        });
      }
}