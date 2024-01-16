
export class DisplayGames{
    constructor(id, thumbnail, title, short_description, genre, platform){
        this.id=id;
        this.thumbnail= thumbnail;
        this.title=title;
        this.short_description=short_description;
        this.genre=genre;
        this.platform=platform;

    }
   async display(category="mmorpg"){
        
    document.querySelector(".loading").style.display = "block";
        let options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': 'a12d3cfcc6msh30e52e725618cbdp11bfebjsn2fb8a85d2d31',
                'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
            }
        };
    let response =await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=${category}`, options)
    document.querySelector(".loading").style.display = "none";
    let result= await response.json();
   
    return result
    
 
    }
}

