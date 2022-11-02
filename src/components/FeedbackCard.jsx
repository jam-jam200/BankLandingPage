import React from "react";
import {quotes} from "../assets"

function FeedbackCard({ content, title, img }) {
  return (
    <div className="flex justify-between flex-col px-10 py-12 rounded-[20px] max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5 feedback-card">
        <img src={quotes} alt="double_quotes" className="w-[42px] object-contain h-[27px]"/>
    </div>
  );
}

export default FeedbackCard;
