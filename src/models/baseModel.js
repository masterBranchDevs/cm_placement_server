
const baseModel = {
  created_at: {
      type: Date,
      default: () => new Date().toISOString()
  },
  updated_at: {
    type: Date,
    default: null,
  },
  deleted_at: {
    type: Date,
    default: null,
  },
  is_deleted: {
    type: Boolean,
    default: false,
  }
};

module.exports = baseModel