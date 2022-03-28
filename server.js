const app = express()

app.use(cors())
app.use(express.json())
app.use(logger('dev'))

app.get('/', (req, res) => {
    res.send('This is root!')
})

//code here

app.listen(PORT, () => {
    console.log(`Express server listening on port ${PORT}`)
})