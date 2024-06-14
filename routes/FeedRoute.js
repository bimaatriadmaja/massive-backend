import express from "express"; //IMG
import {
    getFeeds,
    getFeedById,
    saveFeed,
    updateFeed,
    deleteFeed
} from "../controllers/FeedController.js";

const router = express.Router();

router.get('/feeds', getFeeds);
router.get('/feeds/:id', getFeedById);
router.post('/feeds', saveFeed);
router.patch('/feeds/:id', updateFeed);
router.delete('/feeds/:id', deleteFeed);

export default router;//IMG