/** @format */

import React from "react";
import { Overlay } from "components/atom/Overlay";
import { ModalFooter, ModalStyle, ModalWrapper } from "./style";
import { ModalProps } from "./types";
import { CloseModalIcon, SpinnerIcon } from "components/atom/SvgIcon";
import NormalButton from "components/atom/button/NormalButton";

// Component
const Modal: React.FC<ModalProps> = (props) => {
  // props
  const {
    children,
    handleClose,
    primaryBtnLabel,
    secondaryBtnLabel,
    handleYesAction,
    isLoadingAction,
    modalWidth,
    hideFooter,

    ...otherProps
  } = props;

  // Data to display
  return (
    <Overlay>
      <ModalWrapper>
        <ModalStyle {...otherProps} width={modalWidth}>
          {handleClose && (
            <NormalButton
              onClick={handleClose}
              className="display-block ml-auto close-btn"
            >
              <CloseModalIcon width={30} height={30} />
            </NormalButton>
          )}

          {children}

          {!hideFooter && (
            <ModalFooter>
              {secondaryBtnLabel && (
                <NormalButton className="btn-11 btn--rounded-16 flex-row-ai-center">
                  {secondaryBtnLabel}
                </NormalButton>
              )}
              <NormalButton
                onClick={handleYesAction}
                className="btn-secondary btn--rounded-1"
              >
                {isLoadingAction ? (
                  <SpinnerIcon
                    width={22}
                    height={22}
                    className="with-spinner"
                  />
                ) : (
                  primaryBtnLabel
                )}
              </NormalButton>
            </ModalFooter>
          )}
        </ModalStyle>
      </ModalWrapper>
    </Overlay>
  );
};

export default Modal;
