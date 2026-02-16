export async function fetchRecommendedMovies() {
    const response = await fetchData('https://santosnr6.github.io/Data/favoritemovies.json');
    console.log(response)
    // return await response.json();
}

//datan som finns i fetch hamnar i response
//response.json(); skickar tillbaka datan till den som anropar funktionen


export async function fetchData(url) {
    try {
        const filmer = await fetch(url);
        const data = await filmer.json();
        return data;
    } catch(error){
        console.error(error.message);
        return []
    }

}

    



export async function blandade (filmer){
    const femFilmer = [];
    const slumpaIndex = blandade
    femFilmer = Math.floor(Math.random() * filmer.length -1);
    
    
    
    return femFilmer;
}



  for (let i = 0; i < 5; i++) {
    Math.floor(Math.random()-1)
    femFilmer.push(film)
  }

  
 
