module.exports = {
    deleteId(id) {
        return fetch(`http://localhost:3000/delete/${id}`, {
            method: 'DELETE',
        })
            .then((response) => {
                return response.json()
            })
    },
}