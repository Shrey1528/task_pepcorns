import React from "react";
import { CommentsStyled } from "./css/CommentsStyled";
import { Icon } from "@iconify/react";

export const Comments = () => {
  return (
    <CommentsStyled>
      <div className="header">No Comments Found! Add One.</div>
      <div className="btn">
        <button>Add Comment</button>
      </div>
      <div className="navigation">
        <Icon icon="akar-icons:circle-chevron-left" />
        <Icon icon="akar-icons:circle-chevron-right" />
      </div>
    </CommentsStyled>
  );
};
