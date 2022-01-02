import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const bundleDrop = sdk.getBundleDropModule(
  "0x7B4E4E8105A719a1c67A00f082Ef2D1D0Ef27a7c",
);

(async () => {
  try {
    await bundleDrop.createBatch([
      {
        name: "道可道，非常道",
        description: "This NFT will give you access to 道亦有DAO!",
        image: readFileSync("scripts/assets/dao-band.png"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})()