import mongoose, { Schema } from "mongoose";

const subscriptionSchema = new Schema(
  {
    subscriber: {
      type: Schema.Types.ObjectId, //one who is subscriber
      ref: "User",
    },
    channel: {
      type: Schema.Types.ObjectId,
      // one who is subscriber
      ref: "User",
    },
  },
  { timestamps: true }
);

export const SubscriptionSchema = mongoose.model(
  "Subscription",
  subscriptionSchema
);
