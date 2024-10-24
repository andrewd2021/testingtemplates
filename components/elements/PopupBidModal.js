
export default function PopupBidModal({ popUpBid, handlePopupBid, popUpBidSuccess, handlePopupBidSuccess }) {
    return (
        <>
            <div className={`modal fade popup ${popUpBid ? "show d-block" : ""}`} id="popup_bid" tabIndex={-1} role="dialog" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <button type="button" className="close" onClick={handlePopupBid} aria-label="Close">
                            <span aria-hidden="true">×</span>
                        </button>
                        <div className="modal-body space-y-20 pd-40">
                            <h3>Place a Bid</h3>
                            <p className="text-center">You must bid at least <span className="price color-popup">5.23 ETH</span>
                            </p>
                            <input type="text" className="form-control" placeholder="00.00 ETH" />
                            <p>Enter quantity. <span className="color-popup">1 available</span>
                            </p>
                            <input type="text" className="form-control quantity" defaultValue={1} />
                            <div className="hr" />
                            <div className="d-flex justify-content-between">
                                <p> Current Bid</p>
                                <p className="text-right price color-popup"> 5.23 ETH </p>
                            </div>
                            <a className="btn btn-primary" onClick={() => { handlePopupBid(); handlePopupBidSuccess() }}> Place a bid</a>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
