
export const getGifs = async(category) => {

    const url = `https://api.giphy.com/v1/gifs/search?api_key=Np29O2TpK165aeinfRWn3BLA5zWJB6G9&q=${ category }&limit=10`;

    const resp = await fetch( url );

    const { data } = await resp.json();

    const gifs = data.map( img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url,
    }) )

    return gifs;

}