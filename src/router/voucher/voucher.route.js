import * as express from 'express';

import voucherController from '../../controller/voucher.controller.js';

const router = express.Router()

router.get('/voucher', voucherController.getVoucher);
router.post('/voucher',voucherController.submitVoucher);

export default router