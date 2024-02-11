import mongoose, {Schema} from "mongoose"

const subscriptionSchema = new Schema({
    subscribe: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    channel: {
        type: Schema.Types.ObjectId,
        ref: "USer"
    }
}, {timestamps: true})

export const Subscription = mongoose.model("Subscription", subscriptionSchema);