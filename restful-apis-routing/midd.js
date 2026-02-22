export function validateYear(req, res, next) {
    const { year } = req.query;

    if (year) {
        const yearNum = Number(year);

        if (isNaN(yearNum)) {
            return res.status(400).json({ error: "Year must be a number" });
        }

        const currentYear = new Date().getFullYear();

        if (yearNum < 1000 || yearNum > currentYear) {
            return res.status(400).json({
                error: `Year must be between 1000 and ${currentYear}`
            });
        }
    }

    next();
}