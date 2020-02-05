import axios from "axios";

function getTipo() {
    return axios.get('http://localhost:65398/TipoDocumento/GetTipo').then(res => {
        return res.data
    })
}

function postTipo(object) {
    return axios.post('http://localhost:65398/TipoDocumento/GetTipo', object).then(res => {
        return res.data
    })
}

export const TipoService = {
    getTipo,
    postTipo
}
