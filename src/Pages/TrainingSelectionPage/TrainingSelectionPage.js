//libs
import {
  FAELoading,
  FAETitle,
  FAEText,
  FAEPrice,
  FAEShadowBox,
  FAEDialogueBox,
} from "@findanexpert-fae/components";
import React, { useEffect, Children, useState } from "react";
import { connect } from "react-redux";
import { useLocation, useParams } from "react-router";
import { bindActionCreators } from "redux";

//src
import {
  makeNextPageFalse,
  saveAddress,
} from "../../redux/actions/addressSelectionPageActions";
import { getTrainingDetails } from "../../redux/actions/trainingSelectionPageActions";
import { addSpaces, getCookies, getFileSrcFromPublicFolder, NoResult } from "../../utils";
import history from "../../history";

//scss
import "./TrainingSelectionPage.scss";
import { BiBorderBottom } from "react-icons/bi";
import $, { isEmptyObject } from "jquery"

const loaderImage = getFileSrcFromPublicFolder("loader.GIF");

const TrainingSelectionPage = ({
  serviceDescription = {}, 
  error,
  loading,
  getTrainingDetails,
  trainingList,
  userCountryId,
  saveAddress,
  makeNextPageFalse,
  bookingId,
  cartId,
  nextPage,
  userId
}) => {
  const { service } = useParams();
  const serviceName = addSpaces(service, "-");
  const location = useLocation();
  const {
    state: { serviceId, voucherId },
  } = location ;
  const [open, setOpen] = useState(false);
  const [content, setContent] = useState("");
  const [loader, setLoader] = useState(false);
  const userSignedInStatus = (userId !== "" && userId !== undefined) || getCookies("userId") !== undefined ? true : false;
  const { currencySymbol,isInClinic,isInHouse,price,hasAttributes, duration, meta_Description,isServiceAvailable, isOnline,hasProducts
  } = (serviceDescription !== null &&  serviceDescription !== undefined) ? serviceDescription :{};


  console.log(serviceDescription,isEmptyObject(serviceDescription), 'serviceDescription')
  console.log("allllll----------------------->",serviceDescription)

  useEffect(() => {
    if (nextPage) {
      setLoader(false);
      makeNextPageFalse();
      !userSignedInStatus && localStorage.setItem("redirectUrl", `/booking/${service}/summary`)
      !userSignedInStatus   ?  localStorage.setItem('stateObject', JSON.stringify({bookingId: bookingId, cartId: cartId, serviceId})) :
      localStorage.setItem('stateObject', JSON.stringify({bookingId: bookingId, cartId: cartId, serviceId }))
        history.push({
          pathname: `/booking/${service}/summary`,
          state: { bookingId: bookingId, cartId: cartId, serviceId },
        });
    }
  }, [bookingId, cartId, makeNextPageFalse, nextPage, service, serviceId]);

  useEffect(() => {
    getTrainingDetails({ serviceId });
  }, [getTrainingDetails, serviceId]);

  const handleChangeTrainingBooking = (trainingId) => {
    setLoader(true);
    saveAddress({
      addressId: 0,
      location: "",
      serviceId,
      userId: getCookies("userId"),
      cartId: "",
      trainingId,
      voucherId,
    });
  };
  
  const doPadding= trainingList?.length<4 ?(trainingList.length==1 ?{paddingBottom: 353}:{paddingBottom: 220}): {paddingBottom: 294}

  return (
    <div  >
       <div   className="col-md-12 image_div_height"  >
       <img src={serviceDescription?.imagePath} className="img-fluid img_fixer"   />
      </div>
      <div className="row">
          <div className="col-md-3"></div>
          <div className="col-md-6">
          <div style={{backgroundColor:"rgba(255, 0, 0, 0)"}}   className="fae--training-selection-page-main-container dpt dpb">
       
        

       <div  className="col-md-12 scroll_laser">
       <div className="fae--training-selection-page-wrapper" >
         <FAETitle style={{textTransform:"uppercase"}} label={serviceName} />
         {loading || loader ? (
           <FAELoading loaderImage={loaderImage} height="200px" type="svg" />
         ) : (
           ""
         )}
         {!loading && !loader
           ? Children.toArray(
               trainingList.map((subService) => {
                 const {
                   trainingEndDate,
                   trainingEndTime,
                   trainingStartDate,
                   trainingStartTime,
                   availableSeats,
                   location,
                   currencySymbol,
                   id,
                   trainingPrice,
                   discountedPrice,
                   trainingDescription,
                   trainingPercentDiscount,
                 } = subService;
                 return (
                   <FAEShadowBox
                     style={{
                       flexDirection: "column",
                       gap: "11px",
                       cursor: "pointer",
                     }}
                     primary
                     onClick={() => {
                       if (availableSeats <= 0) {
                         setOpen(true);
                         setContent(
                           "All seats are booked. Please try again later."
                         );
                       } else {
                         handleChangeTrainingBooking(id);
                       }
                     }} >
                     <div
                       style={{
                         display: "flex",
                         justifyContent: "space-between",
                         width: "100%", 
                         backgroundColor: "#d9bd3e",
                         padding: "9px 10%",
                       }} 
                       >
                       <div  style={{
                         display: "flex", 
                          }}
                          className="fae-training-grid">
                         <FAEText style={{paddingRight:"3px"}} >
                           Starting 
                         </FAEText>
                         <FAEText style={{fontSize:14, fontWeight:"bold"}} className="fae-training-bolder-text" >{trainingStartDate}</FAEText>
                       </div>
                       <div style={{  display: "flex", textAlign: "end" }} className="fae-training-grid">
                         <FAEText style={{paddingRight:"3px"}}>
                           Ending 
                         </FAEText>
                         <FAEText style={{fontSize:14, fontWeight:"bold"}} className="fae-training-bolder-text">{trainingEndDate}</FAEText>
                       </div>
                     </div>
                     {/* <div
                       style={{
                         display: "flex",
                         justifyContent: "space-between",
                         width: "80%",
                       }}
                     >
                       <div style={{ display: "flex", }}>
                         <FAEText >
                           Time
                         </FAEText>
                         <FAEText style={{fontSize:14, fontWeight:"bold"}} className="fae-training-bolder-text">
                           {trainingStartTime} - {trainingEndTime}
                         </FAEText>
                       </div>
                       <div style={{ display: "flex", textAlign: "end" }}>
                           <FAEText >
                             Remaining Seats
                           </FAEText>
                           <FAEText style={{fontSize:14, fontWeight:"bold"}} className="fae-training-bolder-text" >{availableSeats}</FAEText>
                        </div>
                     </div> */}
                     {/* <div
                       style={{
                         display: "flex",
                         justifyContent: "space-between",
                         width: "83%",
                         padding:10,
                         borderRadius:"5px",
                         border:"1px solid #d9bd3e"
                       }}
                     >
                       <div>
                         <FAEText >
                           Detail
                         </FAEText>
                        </div>
                       <div style={{  textAlign: "center",  margin:"auto"  }}> 
                         <FAEText  style={{fontSize:14, fontWeight:"bold"}}  className="fae-training-bolder-text">{trainingDescription}</FAEText>
                       </div>
                     </div> */}
                     <div
                       style={{
                         width: "80%",
                         display: "flex",
                         paddingBottom:20,
                         paddingTop:20,
                         borderBottom:"1px solid #00000057"
                        }} className="fae-training-grid" >
                       <div>
                         <FAEText style={{    paddingRight:"15px" }}>
                           Detail:
                         </FAEText>
                        </div>
                       <div style={{    paddingLeft:"15px" }}> 
                         <FAEText  style={{fontSize:14, fontWeight:"bold"}}  className="fae-training-bolder-text">{trainingDescription}</FAEText>
                       </div>
                     </div>
                     <div
                       style={{
                         width: "80%",
                         display: "flex",
                         paddingBottom:20,
                         paddingTop:20,
                         borderBottom:"1px solid #00000057"
                        }} className="fae-training-grid" >
                        <div >
                         <FAEText style={{ paddingRight:"15px" }}>
                            Location:
                          </FAEText> 
                         </div >
                         <div style={{ }}> 
                           <FAEText style={{fontSize:14, fontWeight:"bold"}} className="fae-training-bolder-text">{location}</FAEText>
                         </div>
                       </div>

                       <div
                       style={{
                         display: "flex",
                         justifyContent: "space-between",
                         width: "80%", 
                         paddingBottom:20, 
                       }}  >
                       <div style={{
                         display: "flex",}} className="fae-training-grid">
                          <FAEText style={{paddingRight:"3px"}}>
                             Remaining Seats 
                           </FAEText>
                           <FAEText style={{fontSize:14, fontWeight:"bold"}} className="fae-training-bolder-text" >{availableSeats}</FAEText>
                       </div>
                       <div style={{ display: "flex", textAlign: "end" }} className="fae-training-grid">
                         <FAEText style={{paddingRight:"3px"}} >
                           Price.
                         </FAEText>
                         <FAEPrice
                          style={{fontSize:14, fontWeight:"bold"}} className="fae-training-bolder-text"
                           price={trainingPrice}
                           discountedPrice={
                             trainingPercentDiscount !== 0
                               ? discountedPrice
                               : 0
                             }
                           currencySymbol={currencySymbol}
                         /><FAEText style={{paddingLeft:"3px"}}> </FAEText>
                       </div>
                     </div> 
                   </FAEShadowBox>
                 );
               })
             )
           : ""}
        {(!loading && trainingList.length ==0) && NoResult(loading, trainingList, "Training List Not Found." )}

       </div>
       </div>
       </div>
          </div>
          <div className="col-md-3"></div>
        </div>
      
      <FAEDialogueBox
        open={open}
        content={content}
        buttons={[
          {
            label: "Ok",
            onClick: () => {
              setOpen(false);
            },
          },
        ]}
      />
    </div>
  );
};

const mapStateToProps = ({
  serviceContentPageReducer: {
    serviceDescription   
  },
  trainingSelectionPageReducer: { error, loading, trainingList },
  defaultReducer: { userCountryId,  userId }, 
  addressSelectionPageReducer: { bookingId, cartId, nextPage },
}) => ({
  error,
  loading,
  userCountryId,
  serviceDescription,
  bookingId,
  cartId,
  nextPage,
  trainingList,
  userId
});

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    { getTrainingDetails, makeNextPageFalse, saveAddress },
    dispatch
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TrainingSelectionPage);
