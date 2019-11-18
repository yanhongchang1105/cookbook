export function get(url) {
    return fetch(url)
        .then(rs => rs.json())
        .then((result) => {
            return result
        })
}