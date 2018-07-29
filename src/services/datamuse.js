const datamuseApiEndpoint = "https://api.datamuse.com/words?max=1000&";

export const getRhyme = async word => await get(`rel_rhy=${word}`)

export const get = async queryParams => await fetch(`${datamuseApiEndpoint}${queryParams}`)
    .then(response => response.json());

