const API = 'http://fitnesstrac-kr.herokuapp.com/api'

async function getUsers() {
    fetch(`${API}posts`)

    .then(response => response.json())
    .then(result => {
        return result;
    })
}