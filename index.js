import express from "express";
export const app = express();

const httpServer = app.listen(8080,'0.0.0.0', async () => {
    console.log(`Server running on port ${PORT}`);
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", async(req,res)=>{
    res.send("hola")
})