import React, {useState} from 'react'
import Modal from 'react-modal';
import CloseButton from '../../images/close.png';
import Success from '../../images/success.png';

const customStyles = {
  content: {
    width: '556px',
    height: '456px',
    borderRadius: '10px',
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: '#27272a'
  },
};

// Modal.setAppElement('SuperNFTInfo');

const SuperNFTInfo = () => {
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div className="w-[30rem]">
      <h1 className="text-5xl text-white">SuperRare NFT</h1>
      <p className="text-base text-gray-300 mt-8">Creator</p>
      <h3 className="text-white font-semibold text-xl">Ujjwal Chaurasia</h3>
      <div className="w-full h-px bg-gray-600 mt-8"></div>
      <p className="mt-8 text-base text-gray-300">About the NFT</p>
      <p className="text-white text-xl mt-4 w-full">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc et vitae ultrices scelerisque condimemtum viverra urna magna. Sed hac quis.</p>
      <h3 className="mt-8 text-xl text-white">Become an exclusive Rare hodler</h3>
      <div className="flex mt-8">
        <div>
          <p className="text-base text-gray-300">Available NFT Editions:</p>
          <h3 className="text-white text-4xl tracking-wide font-bold">10<span className="text-base font-normal">/30</span></h3>
        </div>
        <div className="ml-12">
          <p className="text-base text-gray-300">In your collection:</p>
          <h3 className="text-white text-4xl tracking-wide font-bold">0<span className="text-base font-normal">/30</span></h3>
        </div>
      </div>
      <div onClick={openModal} className="w-32 h-12 mt-8 border-2 rounded-3xl flex items-center justify-center text-white border-pink-600 cursor-pointer">Buy Now</div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
      <div className="mx-4">
        <img onClick={closeModal} className="w-4 float-right -mt-4 mb-8 cursor-pointer" src={CloseButton} alt="close" />
        <img className="mt-8" src={Success} alt="done" />
        <h2 className="text-white mt-8 text-lg">Hey, Sayantan Ghosh</h2>
        <h1 className="text-white mt-8 text-4xl font-light">Thanks for your purchase</h1>
        <h4 className="text-white mt-8 text-base font-light">By this purchase you've unlocked 6 benefits!</h4>
        <div className="flex items-center justify-center w-56 text-base mt-12 h-12 float-right rounded-3xl border-2 border-pink-500 text-white cursor-pointer">Checkout benefits</div>
      </div>
      </Modal>
    </div>
  )
}

export default SuperNFTInfo