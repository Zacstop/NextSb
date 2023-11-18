import PropTypes from 'prop-types';
import React from 'react';
import { BackgroundOffWrapper } from "./BackgroundOffWrapper";
import { CloseL } from "./CloseL";
import { ElementBottomCtaCta } from "./ElementBottomCtaCta";
import { ElementButton } from "./ElementButton";
import { ElementIconContainer } from "./ElementIconContainer";
import styled from 'styled-components';

const StyledElementBottomSheet = styled.div`
  align-items: flex-start;
  background-color: #ffffff;
  border-radius: 24px 24px 0px 0px;
  box-shadow: var(--w-shadow-shadow-04);
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  position: relative;
  width: 360px;

  & .sheet-container {
    align-items: flex-start;
    align-self: stretch;
    display: flex;
    flex: 1;
    flex-direction: column;
    flex-grow: 1;
    position: relative;
    width: 100%;
  }

  & .frame {
    align-items: flex-start;
    align-self: stretch;
    border-radius: 24px 24px 0px 0px;
    display: flex;
    flex: 1;
    flex-direction: column;
    flex-grow: 1;
    position: relative;
    width: 100%;
  }

  & .handle {
    align-items: center;
    align-self: stretch;
    display: flex;
    flex: 0 0 auto;
    flex-direction: column;
    gap: 10px;
    padding: 8px 0px 0px;
    position: relative;
    width: 100%;

    & .rectangle {
      background-color: #7786973d;
      border-radius: 3px;
      height: 4px;
      position: relative;
      width: 40px;
    }
  }

  & .modal-bottom-sheet {
    align-items: flex-start;
    align-self: stretch;
    display: flex;
    flex: 0 0 auto;
    gap: 10px;
    padding: 22px 20px 12px;
    position: relative;
    width: 100%;

    & .div {
      align-items: flex-start;
      display: flex;
      flex: 1;
      flex-grow: 1;
      gap: 10px;
      position: relative;

      & .title {
        color: #070f16d1;
        flex: 1;
        font-family: var(--w-h5-bold-700-font-family);
        font-size: var(--w-h5-bold-700-font-size);
        font-style: var(--w-h5-bold-700-font-style);
        font-weight: var(--w-h5-bold-700-font-weight);
        letter-spacing: var(--w-h5-bold-700-letter-spacing);
        line-height: var(--w-h5-bold-700-line-height);
        margin-top: -1px;
        position: relative;
      }
    }
  }

  & .empty-area {
    align-self: stretch;
    flex: 1;
    flex-grow: 1;
    position: relative;
    width: 100%;
  }

  & .five-hundred-and-four-bottom-CTA-CTA {
    align-self: stretch !important;
    background-color: unset !important;
    flex: 0 0 auto !important;
    width: 100% !important;
  }

  & .frame-2 {
    align-items: flex-start;
    align-self: stretch;
    border-radius: 24px 24px 0px 0px;
    display: flex;
    flex: 1;
    flex-direction: column;
    flex-grow: 1;
    position: relative;
    width: 100%;
  }

  & .empty-area-2 {
    align-self: stretch;
    flex: 1;
    flex-grow: 1;
    position: relative;
    width: 100%;
  }

  & .element-bottom-CTA-CTA-2 {
    align-items: flex-start;
    align-self: stretch;
    display: flex;
    flex: 0 0 auto;
    flex-direction: column;
    position: relative;
    width: 100%;

    & .element-button-group-2 {
      align-items: flex-start;
      align-self: stretch;
      display: flex;
      flex: 0 0 auto;
      flex-direction: column;
      gap: 8px;
      padding: 0px 16px;
      position: relative;
      width: 100%;

      & .element-button-instance {
        align-self: stretch !important;
        flex: 0 0 auto !important;
        width: 100% !important;
      }

      & .auto-layout-button-wrapper {
        all: unset;
        align-items: center;
        align-self: stretch;
        background-color: #e5f4ff;
        border-radius: 12px;
        box-sizing: border-box;
        display: flex;
        flex: 0 0 auto;
        flex-direction: column;
        gap: 10px;
        justify-content: center;
        position: relative;
        width: 100%;

        & .icon-con-wrapper {
          all: unset;
          align-items: center;
          align-self: stretch;
          box-sizing: border-box;
          display: flex;
          height: 56px;
          justify-content: center;
          padding: 16px 20px;
          position: relative;
          width: 100%;

          & .label-wrapper {
            align-items: center;
            display: flex;
            flex: 1;
            flex-grow: 1;
            gap: 7px;
            justify-content: center;
            position: relative;

            & .text-wrapper {
              color: #2589f4;
              font-family: var(--w-h5-semibold-600-font-family);
              font-size: var(--w-h5-semibold-600-font-size);
              font-style: var(--w-h5-semibold-600-font-style);
              font-weight: var(--w-h5-semibold-600-font-weight);
              letter-spacing: var(--w-h5-semibold-600-letter-spacing);
              line-height: var(--w-h5-semibold-600-line-height);
              margin-top: -1px;
              position: relative;
              text-align: center;
              white-space: nowrap;
              width: fit-content;
            }
          }
        }
      }
    }

    & .component-285-instance {
      align-self: stretch !important;
      position: relative !important;
      width: 100% !important;
    }
  }

  & .close-l {
    height: 24px !important;
    position: relative !important;
    width: 24px !important;
  }

  & .empty-area-3 {
    align-self: stretch;
    flex: 1;
    flex-grow: 1;
    position: relative;
    width: 100%;
  }

  &.on {
    height: 484px;
  }

  &.off {
    height: 394px;
  }

  & .prop-on {
    background-color: #ffffff;
  }

  & .frame.prop-on .empty-area {
    background-color: #ffffff;
  }
`;

export const ElementBottomSheet = ({
  prop = true,
  prop1 = true,
  prop2 = "타이틀을 입력하세요",
  one,
  two,
  prop3,
  elementIconContainerIcon = <CloseL className="close-l" />,
}: Props): JSX.Element => {
  return (
    <StyledElementBottomSheet className={`element-bottom-sheet ${one}`}>
      <div className="sheet-container">
        {two === "off" && one === "on" && (
          <>
            <div className={`frame prop-${prop3}`}>
              {prop && (
                <div className="handle">
                  <div className="rectangle" />
                </div>
              )}

              <div className="modal-bottom-sheet">
                <div className="div">{prop3 === "on" && <div className="title">{prop2}</div>}</div>
                {prop1 && (
                  <ElementIconContainer icon={elementIconContainerIcon} prop="twenty-four" prop1="off" prop2="off" />
                )}
              </div>
              <div className="empty-area" />
            </div>
            <ElementBottomCtaCta className="five-hundred-and-four-bottom-CTA-CTA" prop11="off" prop2="one" />
          </>
        )}

        {two === "on" && (
          <>
            <div className="frame-2">
              {prop && (
                <div className="handle">
                  <div className="rectangle" />
                </div>
              )}

              <div className="modal-bottom-sheet">
                <div className="div">{prop3 === "on" && <div className="title">{prop2}</div>}</div>
                {prop1 && (
                  <ElementIconContainer icon={elementIconContainerIcon} prop="twenty-four" prop1="off" prop2="off" />
                )}
              </div>
              <div className="empty-area-2" />
            </div>
            <div className="element-bottom-CTA-CTA-2">
              <div className="element-button-group-2">
                <ElementButton
                  className="element-button-instance"
                  prop11="enabled"
                  prop2="Button"
                  prop21="l"
                  prop3="primary"
                />
                <button className="auto-layout-button-wrapper">
                  <button className="icon-con-wrapper">
                    <div className="label-wrapper">
                      <div className="text-wrapper">Button</div>
                    </div>
                  </button>
                </button>
              </div>
              <BackgroundOffWrapper background="off" className="component-285-instance" />
            </div>
          </>
        )}

        {one === "off" && (
          <>
            <>
              {prop && (
                <div className="handle">
                  <div className="rectangle" />
                </div>
              )}
            </>
            <div className="modal-bottom-sheet">
              <div className="div">{prop3 === "on" && <div className="title">{prop2}</div>}</div>
              {prop1 && (
                <ElementIconContainer
                  icon={<CloseL className="close-l" />}
                  prop="twenty-four"
                  prop1="off"
                  prop2="off"
                />
              )}
            </div>
            <div className="empty-area-3" />
            <BackgroundOffWrapper background="off" className="component-285-instance" />
          </>
        )}
      </div>
    </StyledElementBottomSheet>
  );
};

ElementBottomSheet.propTypes = {
  prop: PropTypes.bool,
  prop1: PropTypes.bool,
  prop2: PropTypes.string,
  one: PropTypes.oneOf(["off", "on"]),
  two: PropTypes.oneOf(["off", "on"]),
  prop3: PropTypes.oneOf(["off", "on"]),
};