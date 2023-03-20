import * as express from 'express';
import index from './voucher/voucher.route.js'

const router = express.Router();
router.use(index)
export default router