import express from 'express'
import crypto from 'crypto'
import bcrypt from 'bcrypt'
const app = express();
const PORT = 8000;

let hash = ''
//ejs
app.set('view engine', 'ejs');
//body-parser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//router
app.get('/', (req, res) => {
    res.render('app');
});
app.post('/hash', (req, res) => {
    // const hash = createHashedPassword(req.body.pw)
    // console.log(hash)
    hash = bcryptPassword(req.body.pw)
    res.send(hash)
})
app.post('/pdkdf', (req, res) => {
    const pdkdf = createPbkdf(req.body.pw)
    console.log(pdkdf)
    res.send(pdkdf)
})
app.post('/verifyPassword', (req, res) => {
    const { pw } = req.body
    // const checkVerify = verifyPassword(pw, salt, dbpw)
    // console.log(checkVerify)
    const compare = comparePassword(pw)
    res.send(compare)
})

app.post('/cipher', (req, res) => {
    const { data } = req.body
    const encrypt = cipherEncrypt(data)
    console.log(encrypt)
    const decrypt = decipher(encrypt)
    console.log({
        encrypt,
        decrypt
    })
    res.json({
        encrypt,
        decrypt
    })
})

//server open
app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});

const createHashedPassword = (password) => {
    return crypto.createHash('sha512').update(password).digest('base64');
}
const salt = crypto.randomBytes(16).toString('base64')
const iterations = 100
const keyLen = 64
const digest = 'sha512'

const createPbkdf = (password) => {
    return crypto.pbkdf2Sync(password, salt, iterations, keyLen, digest).toString('base64')
}
const verifyPassword = (password, salt, dbPassword) => {
    const compare = crypto.pbkdf2Sync(password, salt, iterations, keyLen, digest).toString('base64')
    if (compare === dbPassword) {
        return true
    }
    return false
}
const algorithm = 'aes-256-cbc'
const key = crypto.randomBytes(32)
const iv = crypto.randomBytes(16)

const cipherEncrypt = (word) => {
    const cipher = crypto.createCipheriv(algorithm, key, iv)
    let encryptedWord = cipher.update(word, 'utf-8', 'base64')
    encryptedWord += cipher.final('base64')
    return encryptedWord
}
const decipher = (encryptedWord) => {
    const decipher = crypto.createDecipheriv(algorithm, key, iv)
    let decryptedWord = decipher.update(encryptedWord, 'base64', 'utf-8')
    decryptedWord += decipher.final('utf-8')
    return decryptedWord
}

const bsalt = 10

const bcryptPassword = (password) => {
    return bcrypt.hashSync(password, bsalt)
}
const comparePassword = (password) => {
    return bcrypt.compareSync(password, hash)
}