/** @format */

import styled from "styled-components";

export const Wrapper = styled.div`
  padding-bottom: 10rem;
`;

export const Sessions = styled.div`
  display: flex;
  flex-wrap: wrap; /* Allows items to wrap on smaller screens */
  gap: 16px; /* Adds space between items */
  justify-content: space-between; /* Even spacing */
`;

export const Session = styled.div`
  flex: 1 1 calc(33.33% - 16px); /* Responsive width (3 per row) */
  min-width: 250px; /* Ensures items don't get too small */
  background: #3498db;
  color: white;
  padding: 20px;
  text-align: center;
  border-radius: 8px;
`;
