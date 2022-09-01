import React from "react";
import { getDeviceType } from "../../lib/getInfo";
export default function Arge() {
  return <div>{JSON.stringify(getDeviceType())}</div>;
}
