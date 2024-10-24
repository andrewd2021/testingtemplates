
export default function PopupBidSuccess({ popUpBid, handlePopupBid, popUpBidSuccess, handlePopupBidSuccess }) {
    return (
        <>
            <div className={`modal fade popup ${popUpBidSuccess ? "show d-block" : ""}`} id="popup_bid_success" tabIndex={-1} role="dialog" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <button type="button" className="close" onClick={handlePopupBidSuccess} aria-label="Close">
                            <span aria-hidden="true">×</span>
                        </button>
                        <div className="modal-body space-y-20 pd-40">
                            <h3 className="text-center">Your Bidding
                                Successfuly Added</h3>
                            <p className="text-center">your bid <span className="price color-popup">(5.23ETH) </span> has been listing
                                to our database</p>
                            <a href="#" className="btn btn-primary"> Watch the listings</a>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
