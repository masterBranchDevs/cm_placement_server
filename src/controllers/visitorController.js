const Visitor = require('../models/visitorModel');

const getVisitorCount = async (req, res) => {
    try {
        let visitor = await Visitor.findOne();
        if (!visitor) {
            visitor = new Visitor();
            await visitor.save();
        }
        res.json({ count: visitor.count });
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

const incrementVisitorCount = async (req, res) => {
    try {
        if (!req.cookies.visitor) {
            let visitor = await Visitor.findOne();
            if (!visitor) {
                visitor = new Visitor();
            }
            visitor.count += 1;
            await visitor.save();

            // Set a cookie to expire in 1 year
            res.cookie('visitor', 'true', { maxAge: 365 * 24 * 60 * 60 * 1000, httpOnly: true });
        }
        res.json({ message: 'Visitor count incremented' });
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

module.exports = {
    getVisitorCount,
    incrementVisitorCount
};