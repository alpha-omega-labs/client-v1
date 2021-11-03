import React from "react";
import "./index.css";
import icons from "./../../assets/icons/index";
import imgs from './../../assets/imgs/index';
import { RightBars, LeftBars } from './bars';
import Button from '../ButtonWithRouter';
import { withContext } from "./../../provider/index";

export default withContext(({ ctx }) => (
  <section className="flex-container intro">
    <div>
      <h2>
        Send L1 coin and ERC-20 tokens in Genesis L1 network to{" "}
        <span className="ms-green">Multiple</span> Ethereum Addresses
      </h2>
      <p>
        With Multisend, you can distribute L1 coins and ERC-20 tokens to multiple wallet
        addresses at once with a single transaction fee in Genesis L1 network. MultiSends saves you an
        incredible amount of time, energy and money in coins and tokens distribution. 
      </p>
      {
        ctx.auth ? (
          <Button to="/send" customStyle="ms-btn wt-icon ms-green-bg">
        START SENDING <span className="send-arrow">↗</span>
      </Button>
        ) : (
          <Button to="/connect" customStyle="ms-btn wt-icon ms-green-bg">
        START SENDING <span className="send-arrow">↗</span>
      </Button>
        )
      }
    </div>
    <div>
      <img src={imgs.miniMultisend} alt="mini-multisend" />
    </div>
    <RightBars />
    <LeftBars />
  </section>
));
