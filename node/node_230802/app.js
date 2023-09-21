import express from 'express';
import multer from 'multer';
import path from 'path';

const app = express();
const PORT = 8000;
const upload = multer({
    //업로드 경로 지정
    // dest: 'uploads/'
});
const uploadDetail = multer({
    storage: multer.diskStorage({
        destination(req, file, done) {
            done(null, 'uploads');
        },
        filename(req, file, done) {
            // path.extname() 파일 확장자 가져옴
            // path.basename() 파일 이름 가져옴

            const ext = path.extname(file.originalname);
            //  이름을 바꿈
            done(
                null,
                path.basename(file.originalname, ext) + Date.now() + ext
            );
        },
    }),
    limits: {
        fileSize: 5 * 1024 * 1024,
    },
});
const uploadProfile = multer({
    storage: multer.diskStorage({
        destination(req, file, done) {
            done(null, 'uploads');
        },
        filename(req, file, done) {
            // path.extname() 파일 확장자 가져옴
            // path.basename() 파일 이름 가져옴

            const ext = path.extname(file.originalname);
            const fileName = req.body.userId;
            //  이름을 바꿈
            done(null, fileName + ext);
        },
    }),
    limits: {
        fileSize: 5 * 1024 * 1024,
    },
});

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/uploads', express.static('uploads'));
app.get('/', (req, res) => {
    res.render('index');
});
app.post('/uploadFile', uploadDetail.single('userFile'), (req, res) => {
    console.log(req.file);
    console.log(req.body);
    res.render('index', { data: req.body });
});
app.post('/uploadFile/ver1', uploadDetail.array('userFile'), (req, res) => {
    console.log(req.files);
    console.log(req.body);
    res.render('index', { data: req.body });
});
app.post(
    '/uploadFile/ver2',
    uploadDetail.fields([{ name: 'file1' }, { name: 'file2' }]),
    (req, res) => {
        console.log(req.files);
        console.log(req.body);
        res.render('index', { data: req.body });
    }
);
app.post('/dynamic', uploadDetail.single('dynamicUserFile'), (req, res) => {
    console.log(req.file);
    res.send(req.file);
});

app.post('/profile', uploadProfile.single('userPhoto'), (req, res) => {
    res.render('exercise1_show', {
        file: req.file,
    });
});

app.listen(PORT, () => {
    console.log(`localhost:${PORT}`);
});
