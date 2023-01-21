import mongoose from "mongoose";

const itdtdpnSchema = mongoose.Schema({
    picture:String,
    subject:String,
    date:{
        type:Date
    },
    title:String,
    content:String,
    profile:String,
    name:String,
});

const Itdtdpn = mongoose.model("itdtdpns",itdtdpnSchema);

export default Itdtdpn;