const Schema = require('mongoose').Schema;

const accountSchema = new Schema(
  {
    user_id: String,
    apiKey: Object,
    apiSecret: Object,
    email: String,
  },
  { collection: 'account', versionKey: false },
);
accountSchema.set('timestamps', true);

module.exports = accountSchema;
