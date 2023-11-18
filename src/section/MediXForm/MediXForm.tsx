import React from 'react';
import { Card } from '../../components/atoms/Card/Card';

import styled from 'styled-components';

const StyledMediXform = styled.div`
  align-items: center;
  background-color: #ffffff;
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 80px;
  justify-content: center;
  padding: 54px 85px;
  position: relative;
  width: 100%;

  & .form-title {
    align-items: flex-start;
    display: inline-flex;
    flex: 0 0 auto;
    gap: 10px;
    position: relative;
  }

  & .text-wrapper-24 {
    color: var(--black-primary);
    font-family: Poppins, Helvetica;
    font-size: 48px;
    font-weight: 600;
    height: 100px;
    letter-spacing: 0;
    line-height: normal;
    margin-top: -1px;
    position: relative;
    width: 1180px;
  }
`;

export const MediXform = (): JSX.Element => {
  return (
    <StyledMediXform>
      <div className="form-title">
        <div className="text-wrapper-24">Strengths of MediXForm</div>
      </div>
      <Card
        title="XForm"
        description="XForm, a patented technology by kubeCRO, revolutionizes clinical trials by allowing various data formats without CRF coding, simplifying the process. It enables anyone to transform CRF into ECRF, cutting preparation time by over 70%. The technology supports text, images, and videos in a user-friendly form, making it both intuitive and efficient."
        style="default"
      />
      <Card
        title="Validation"
        description="In traditional EDC systems, researchers' responses were accepted as-is, leading to the generation of Queries whenever there was a mismatch with DVP. The Validation system observes in real time whether the data aligns with the DVP category and guides the correct range value if a response falls outside the category, thus completely eliminating system Queries. This innovative approach removes the need for CRA's Query management tasks, making the entire process more efficient and rational"
        style="reversed"
      />
      <Card
        title="migration"
        description="When changes occur in the questions or responses of a CRF, modifications to the database become necessary. In traditional systems, this required manual deletion or addition of data within the database to align with the altered format. However, with ECRF configured through XForm, the system automatically compares the versions before and after the changes, migrating the database accordingly. This eliminates the risk of data loss due to manual handling, making the process more stable and efficient."
        style="default"
      />
      <Card
        title="Media Assets"
        description="Traditional systems focused on collecting clinical information through text, but MediXForm's XForm technology enables the use of not only text but also images and videos as both questions and answers in clinical trials. This innovative capability of XForm's Attachment system allows for a more diverse and flexible approach to conducting clinical trials, greatly enhancing the versatility and richness of the clinical process."
        style="reversed"
      />
    </StyledMediXform>
  );
};
