import mongoose from 'mongoose';

const User = mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    isAdmin: { type: Boolean, default: false, required: true },
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.User || mongoose.model('User', User);
