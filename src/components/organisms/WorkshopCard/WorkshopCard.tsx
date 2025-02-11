/** @format */

import React, { AllHTMLAttributes } from "react";
import { Ctas, Description, Details, Top, Wrapper } from "./style";
import Typography from "components/atom/Typography";
import { Link } from "react-router";
import { ArrowRightIcon } from "components/atom/SvgIcon";

// Type defination
interface Props extends AllHTMLAttributes<HTMLDivElement> {
  $empty?: boolean;
}

// Component
const WorkshopCard: React.FC<Props> = (props) => {
  // Props
  const { $empty } = props;

  // Data to display
  if ($empty) return <Wrapper $empty={$empty}></Wrapper>;

  return (
    <Wrapper>
      <Top>
        <img
          src="/assets/images/workshop-img.png"
          alt=""
          className="workshop-image"
        />
      </Top>
      <Details>
        <div className="details-item">
          <Typography as="h6" className="h4" text="Type" />
          <Typography as="p" className="p4" text="Workshop" />
        </div>
        <div className="details-item">
          <Typography as="h6" className="h4" text="Date" />
          <Typography as="p" className="p4" text="Jan 9 - Jan 10, 2024" />
        </div>
        <div className="details-item">
          <Typography as="h6" className="h4" text="Duration" />
          <Typography as="p" className="p4" text="4 hours" />
        </div>
      </Details>
      <Description>
        <Typography as="h5" className="h5 mb-5">
          <>
            <span>By</span> Hamza Farooq
          </>
        </Typography>

        <Typography as="h4" className="h6 mw-350">
          Building LLM applications from scratch into Production
        </Typography>
      </Description>
      <Ctas>
        <Link to="#" className="details-link">
          See Details <ArrowRightIcon />
        </Link>
        <button className="details-cta">Join Now</button>
      </Ctas>
    </Wrapper>
  );
};

export default WorkshopCard;
