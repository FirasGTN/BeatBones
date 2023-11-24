// // const prevstate = [
// //     {
// //         id : 1,
// //         name : "Crusher® ANC 2 Sensory Bass Headphones with Active Noise Canceling",
// //         price : 229.99,
// //         type : "headphone",
// //         bgimage: "https://jasper-pimstorage-skullcandy.s3.us-west-1.amazonaws.com/48338c411d1d5fca2437edf6d1abc7fb814620deb1ac2b4008b1d918b8db6dfe.jpg",
// //         image : "https://cdn11.bigcommerce.com/s-k11cg5mzh9/images/stencil/500x659/products/437/137680/fc0078efc5dd4e2b579dd153ea420bc4865818c9cfeab31652d4e20abdd9a3ee__60388.1699297787.png?c=2",
// //         colorCount : 1,
// //         color : [ "black"] ,
// //         colorOne : "#868c9e",
// //         colorTwo : "#4a4d57",
// //         colorThree : "rgb(31, 31, 31)",
// //     },
// //     {
// //         id : 2,
// //         name : "Crusher® Evo Sensory Bass Headphones with Personal Sound",
// //         price : 199.99,
// //         type : "headphone",
// //         bgimage: "https://jasper-pimstorage-skullcandy.s3.us-west-1.amazonaws.com/assets/2a564c7e0aae316e0943272adbba7fc89e8e9e5747918a467cfe813b3e7893ad.jpg",
// //         image : "https://cdn11.bigcommerce.com/s-fa8ae9fe8j/images/stencil/500x659/products/262/119829/4bf0568a00e5ca0cf776b2533d8c8d71cbb6185107a67a3ee57a14b901c2b7c2__49957.1699919711.png?c=2",
// //         colorCount : 2,
// //         color : ["black","grey"] ,
// //         colorOne : "#f6caf9",
// //         colorTwo : "#dc9ad8",
// //         colorThree : "#ae65a9",
// //     },
// //     {
// //         id : 3,
// //         name : "Burton Crusher® Evo Sensory Bass HeadphonesBurton Crusher® Evo Sensory Bass Headphones",
// //         price : 209.99,
// //         type : "headphone",
// //         bgimage: "https://jasper-pimstorage-skullcandy.s3.us-west-1.amazonaws.com/f53099c5ee7a5de46240b459f05c56c34bddd4912f969a10034e422939ab298e.jpg",
// //         image : "https://cdn11.bigcommerce.com/s-fa8ae9fe8j/images/stencil/500x659/products/233/96760/f86f17bbd37a1d9c3643a1670feacce2379f66fb2b5860fd49923cbd10b4235e__55797.1673303170.png?c=2",
// //         colorCount : 1,
// //         color : ["rgb(52, 65, 40)"] ,
// //         colorOne : "#ff5959",
// //         colorTwo : "#df1919",
// //         colorThree : "#b50000",
// //     },
// //     {
// //         id : 4,
// //         name : "TMNT PLYR® Multi-Platform Wireless",
// //         price : 149.99,
// //         type : "gaming",
// //         bgimage: "https://jasper-pimstorage-skullcandy.s3.us-west-1.amazonaws.com/assets/7ca12000eb59eef29441a5da06e44e74d4b7b73dce142d449b7f6f99a86cb1c8.jpg",
// //         image : "https://cdn11.bigcommerce.com/s-fa8ae9fe8j/images/stencil/500x659/products/260/119075/d4089e735a70967ecfc36d18ce723c1979ff6027edc8d4273bdddfc99bc4bc2e__46812.1698082624.png?c=2",
// //         colorCount : 1,
// //         color : ["#9fff22"] ,
// //         colorOne :  "rgb(121,255,7)",
// //         colorTwo :  "rgb(105, 219, 6)",
// //         colorThree : "rgb(69, 143, 3)",
// //     },
// //     {
// //         id : 5,
// //         name : "Street Fighter PLYR® Multi-Platform Wireless Gaming Headset",
// //         price : 159.99,
// //         type : "gaming",
// //         tbgimage : "https://jasper-pimstorage-skullcandy.s3.us-west-1.amazonaws.com/15364fcffa14efef11c4e6ed83c98f15635af15d299d7ae69c6129839df1ba11.jpg",
// //         bgimage: "https://jasper-pimstorage-skullcandy.s3.us-west-1.amazonaws.com/49a19884cd8f5c9df7aa72e22893f4868ae79921cd305501796a0980f083b264.jpg",
// //         image : "https://cdn11.bigcommerce.com/s-fa8ae9fe8j/images/stencil/500x659/products/226/118141/54b31367756de9da6f67f4ff6a1f6684663b1fbc5e01c3938bb96843f7667a3e__02506.1696546953.png?c=2",
// //         colorCount : 0,
// //         color : [""] ,
// //         colorOne : "rgb(255, 221, 0)",
// //         colorTwo : "rgb(255, 119, 0)",
// //         colorThree : "rgb(252, 22, 22)",
// //     },
// // ]

const prevstate = null;

const ToDoReducer = (state = prevstate, action) => {
  if (action.type === "GET_DATA") {
    return (state = action.payload);
  } else if (action.type === "FILTER") {
    const headphoneState = state.filter((item) => item.type === action.payload);
    return headphoneState;
  }

  return state;
};

export default ToDoReducer;
