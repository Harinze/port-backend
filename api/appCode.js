import express from 'express';
const router =  express.Router()


router.get("/", async (req, res)=> {
    try{
        res.status(200).json({message:`routed successfully`})

    }catch(error){console.log(error);
    res.status(500).json({message:`Error!`})
    }

})


export default router