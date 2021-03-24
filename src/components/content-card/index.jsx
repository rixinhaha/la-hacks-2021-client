import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
    min-height: 200px;
    background-color: white;
    border-radius: 5px;
`;

const ContentCard = ({ children }) => (
  <Card>
    {children}
  </Card>
);

export default ContentCard;
