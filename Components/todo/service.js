const tododao = require('./private/dao');

class TodoService {

    getlist() {
        return new Promise((resolve, reject) => {
            tododao.getData().then(data => {
                resolve(data);
            }).catch(err => {
                reject(err);
            })
        })
    }

    insertlist(todo) {
        return new Promise((resolve, reject) => {
            tododao.insertData({
                content: todo.content,
                date: todo.date,
            }).then(data => {
                resolve(data);
            }).catch(err => {
                reject(err);
            })
        })
    }

    deletelist(id) {
        return new Promise((resolve, reject) => {
            tododao.deleteData(id).then(data => {
                resolve(data);
            }).catch(err => {
                reject(err);
            })
        })
    }
}

module.exports = new TodoService();
