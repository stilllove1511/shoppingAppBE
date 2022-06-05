const mongoose = require('mongoose');

export default mongoose.model(
    'Role', 
    new mongoose.Schema({
        url: String
    }),
    'roles'
);

