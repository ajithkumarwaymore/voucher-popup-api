import { json } from "express";
import voucherService from "../service/voucher.service.js";


const getVoucher = async(req, res) =>{
   try {
        console.log(req)
       const data = await voucherService.getVoucher();
       res.status(201).json({ status: 201, message: data.data })
   } catch(err) {
       
   }

}

const submitVoucher = async(req,res)=>{
    console.log(req)
    res.json({ status: 200, message: `From submitVoucher api` });
}


export default {
    getVoucher,
    submitVoucher
}