import mongoose from "mongoose";

const Schema = mongoose.Schema;

const OrderSchema = new Schema({
  buyer: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  products: [
    {
      type: Schema.Types.ObjectId,
      ref: "Product",
    },
  ],
});

export default OrderSchema;
