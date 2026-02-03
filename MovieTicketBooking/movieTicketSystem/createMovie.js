import fs from 'fs';

function createMovie(req) {
    try {
        const { movieName,ticketPrice } = req.body;
        

    }
    catch (error) {
        console.error("Error creating movie:", error);
    }
}