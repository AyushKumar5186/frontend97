import React from "react";

const PinButton = ({ onClick }) => {
  return (
   
      <a
        id="multiMarketPin"
        title="Add to Multi Markets"
        className="cursor-pointer text-[#7e97a7] hover:text-[#759cb4]"
        onClick={onClick ? onClick : undefined}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="25"
          height="25"
          viewBox="0 0 25 25"
          className="align-middle"
        >
          <path
            fill="currentColor"
            d="M12.5 25C5.596 25 0 19.404 0 12.5S5.596 0 12.5 0 25 5.596 25 12.5 19.404 25 12.5 25zm0-1C18.85 24 24 18.85 24 12.5S18.85 1 12.5 1 1 6.15 1 12.5 6.15 24 12.5 24zm5.09-12.078c1.606.516 2.41 1.13 2.41 2.19 0 .373-.067.616-.2.73-.135.115-.403.173-.804.173H13.57l-.81 7.988h-.536l-.795-7.988H6.003c-.4 0-.67-.065-.803-.194-.133-.128-.2-.364-.2-.708 0-1.06.804-1.674 2.41-2.19.09 0 .18-.03.27-.086.49-.172.802-.444.936-.816L9.82 5.95v-.216c0-.23-.222-.415-.668-.558l-.067-.043h-.067c-.536-.143-.804-.387-.804-.73 0-.402.09-.652.268-.753.18-.1.49-.15.938-.15h6.16c.447 0 .76.05.938.15.178.1.268.35.268.752 0 .344-.268.588-.804.73h-.067l-.067.044c-.446.143-.67.33-.67.558v.215l1.206 5.07c.134.372.446.644.937.816.09.057.18.086.27.086z"
          />
        </svg>
      </a>
    
  );
};

export default PinButton;
