import axios from "axios"

const getVoucher = async() =>{
    return axios.get('https://jsonplaceholder.typicode.com/posts/1')
}

const verifyVoucher = async (voucher)=>{
    return axios.get(`https://jsonplaceholder.typicode.com/posts/${voucher}`)
}


export default {
    getVoucher
}