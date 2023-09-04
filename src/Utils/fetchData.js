export const exerciseOptions = {
        method: 'GET',
        url: 'https://exercisedb.p.rapidapi.com/exercises',
        headers: {
          'X-RapidAPI-Key': '14958b5dafmshd51556f37386871p1dd588jsna469b6c65bf9',
          'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
        }
      
};

export const youtubeOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '14958b5dafmshd51556f37386871p1dd588jsna469b6c65bf9',
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
  }
}

export const fetchData = async (url, options) => {
    const response = await fetch(url, options);
    const data = await response.json();
    return data
}