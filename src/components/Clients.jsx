import React from "react";
import { clients } from "../constants";
import styles from "../style";

function Clients() {
  return (
    <section className={`${styles.flexCenter} my-4 `}>
      <div className={`${styles.flexCenter} w-full flex-wrap`}>
        {clients.map((client) => (
          <div
            key={client.id}
            className={`${styles.flexCenter} flex-1 sm:min-w-[192px] min-w-[120px] client px-8 py-8 rounded-[20px] max-w-[270px] md:mr-10 sm:mr-5 mr-0`}
          >
            <img
              src={client.logo}
              alt="clients"
              className="sm:w-[192px] w-[100px] object-contain cursor-pointer"
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Clients;
