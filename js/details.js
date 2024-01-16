
export class Details{
    constructor(id,thumbnail, title, genre, platform,description, game_url){
        this.id=id;
        this.thumbnail=thumbnail;
        this.title=title;
        this.genre=genre;
        this.platform=platform;
        this.description=description;
        this.game_url=game_url;

    }
   async display(id){
    
    document.querySelector(".loading").style.display = "block";
        let options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': 'a12d3cfcc6msh30e52e725618cbdp11bfebjsn2fb8a85d2d31',
                'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
            }
        };
        
    let response =await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`, options)
    let result= await response.json();
    
    document.querySelector(".loading").style.display = "none";
    return result
 
    }
}

