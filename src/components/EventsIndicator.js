import React from 'react';
import dayjs from 'dayjs';
import styled from 'styled-components';

import { Icon } from '@chakra-ui/core';

const Event = styled.div`
  font-size: 0.6rem;
`

// Displays circle icon if day has an event
const EventIndicator = ({ event, day, currentMonth, currentYear }) => {
  const hasEvents =
    day === dayjs(event.start.dateTime).date() &&
    currentMonth === dayjs(event.start.dateTime).month() &&
    currentYear === dayjs(event.start.dateTime).year();

  return hasEvents ? (
    <>
      <Icon name="circle" fill="brand.blue_accent" />
      <Event>{event.summary}</Event>
    </>
  ) : null;
};

export default EventIndicator;
