import express from 'express';
import config from '../config';
import middleware from '../middleware';
import initializeDb from '../db';

const router = express();

// Connect to db
initializeDb((db) => {
    // Internal middleware
    router.use(middleware({ config, db}));

    // API routes v1(/v1)

});

export default router;
