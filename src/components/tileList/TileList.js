import React from "react";
import { Tile } from "../tile/Tile";

export const TileList = ({data}) => {
  return (
    <div>
      {data.map((contact, index) => {
        const {name, ...rest} = contact;

        return <Tile key={index} name={name} description={rest}/>

      })}

    </div>
  );
};

export default TileList;