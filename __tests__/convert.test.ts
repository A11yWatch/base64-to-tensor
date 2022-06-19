import "@tensorflow/tfjs-backend-wasm";
import { convert } from "../src/convert";
import { SAMPLE } from "../__mocks__/sample";
import { ready, setBackend } from "@tensorflow/tfjs-core";

describe("convert base64 to tensor", () => {
  test("handle correct jpeg data", async () => {
    await setBackend("wasm"); // set tensorflow wasm backend
    await ready();

    const tensor = convert(SAMPLE);

    expect(tensor).toEqual({
      kept: false,
      isDisposedInternal: false,
      shape: [189, 300, 3],
      dtype: "int32",
      size: 170100,
      strides: [900, 3],
      dataId: { id: 1 },
      id: 0,
      rankType: "3",
    });
  });

  test("handle missing jpeg data", async () => {
    await setBackend("wasm"); // set tensorflow wasm backend
    await ready();

    const tensor = convert("");

    expect(tensor).toEqual(null);
  });
});
