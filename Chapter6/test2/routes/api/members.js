const express = require('express');
const router = express.Router();
const members = require('../../Members');

// Get All Members
router.get(
    '/',
    (request, response) => response.json(members)
);

// Get Single Member
router.get(
    '/:id',
    (request, response) => {
        const found = members.some(member => member.id === parseInt(request.params.id));

        if (found) {
            response.json(
                members.filter(
                    member => member.id === parseInt(request.params.id)
                )
            );
        } else {
            response.status(400).json({
                msg: `No member with the id of ${request.params.id} found`
            });
        }
    }
);

// Create Member
router.post(
    '/',
    (request, response) => {
        response.send(request.body)
    }
);

module.exports = router;