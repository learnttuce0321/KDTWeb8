let modifyInfo = {
    modifing: false,
    id: ''
}

function writeNote() {
    const name = document.querySelector('#userName').value
    const content = document.querySelector('#userContent').value
    const data = {
        name,
        content
    }

    if (modifyInfo.modifing) {
        const newData = { ...data, id: modifyInfo.id }
        console.log(newData)
        axios({
            method: 'PATCH',
            url: '/visitor/edit',
            data: newData
        }).then((response) => {
            window.location.replace('./visitor')
        })
    } else {
        axios({
            method: 'POST',
            url: '/visitor/write',
            data,
        }).then(() => {
            window.location.replace('./visitor')
        })
    }
}

const modifyBtn = (th) => {
    const id = th.parentNode.parentNode.id.split('_')[1]
    axios({
        method: 'GET',
        url: '/visitor/edit',
        params: {
            id
        }
    }).then((response) => {
        document.querySelector('#userName').value = response.data.data[0].name
        document.querySelector('#userContent').value = response.data.data[0].content

        modifyInfo.modifing = !modifyInfo.modifing
        modifyInfo.id = id
    })



}
const deleteBtn = (th) => {
    const id = th.parentNode.parentNode.id.split('_')[1]
    axios({
        method: 'DELETE',
        url: '/visitor/delete',
        data: {
            id
        }
    }).then(() => {
        window.location.replace('./visitor')
    })
}