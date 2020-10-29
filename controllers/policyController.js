const Policy = require('../models/policyModel');


exports.create_policy_post = function (req, res) {
    const policy = new Policy(req.body);

    policy.save()
        .then(data => {
            res.status(200).json(data);
        })
        .catch(err => {
            res.status(400).send('There was an issue while trying to save the Policy');
        });
};
