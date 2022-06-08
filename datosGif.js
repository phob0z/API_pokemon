let urlgif = "http://api.giphy.com/v1/gifs/random?api_key=2TQwvh1oBR6NP6CNRWztxxgFc75Y2R7g";

const obtenerGif = async () => {
  try {
    let response = await fetch(urlgif);

    if(!response.ok)
    {
        throw new Error("Ourrio un Error al realizar la petición")
    }

    let data = await response.json();
    pintarGif(data);

  } catch (error) 
  {
    console.log(error);
  }
};


obtenerGif();

const pintarGif = (data) => 
{
  document.getElementById("gif").setAttribute("src", data.data.images.original.url);
};