import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

const NftModal = ({ show, onHide }) => {
  return (
    <Modal
      size="lg"
      show={show}
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <div className="bg-card-back border-1 border-pure-ping rounded-md p-2">
        <div className="flex justify-between">
          <h1 className="text-white font-Space-Grotesk text-xl">Findora Cue</h1>
          <img src="/assets/images/market/Cancle.svg" onClick={onHide}></img>
        </div>
        <Modal.Body>
          <div className="shadow-nft h-2 bg-nft-shadow"></div>
          <img src="/assets/images/market/Cue.svg" className="-mt-8 w-full" />
        </Modal.Body>
      </div>
    </Modal>
  );
};

export default NftModal;
