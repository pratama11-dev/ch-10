/* eslint-disable */
import React, { useState } from "react";
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
} from "reactstrap";

function LeaderboardTable() {
  const [open, setOpen] = useState("0");

  const toggle = (id) => {
    open === id ? setOpen("0") : setOpen(id);
  };

  return (
    <div>
      <Accordion open={open} toggle={toggle}>
        <AccordionItem>
          <AccordionHeader targetId="1">Leaderboard Table</AccordionHeader>
          <AccordionBody accordionId="1">
            <p> Hello </p>
          </AccordionBody>
        </AccordionItem>
      </Accordion>
    </div>
  );
}

export default LeaderboardTable;
