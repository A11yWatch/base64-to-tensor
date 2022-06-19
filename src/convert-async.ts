import { base64Replacer } from "./trim-base64";
import { decodeImageAsync } from "./decode";

let _sharp;

/**
 * This operation converts a base64 into a Tensor3D.
 *
 * @param base64 a valid base64 encoded string.
 * @returns tf.Tensor3D
 */
export const convertAsync = async (base64: string) => {
  if (!base64) {
    return null;
  }
  const bufferObject = Buffer.from(base64Replacer(base64), "base64");
  const arrayBuffer = new ArrayBuffer(bufferObject.length);
  const typedArray = new Uint8Array(arrayBuffer);

  for (let i = 0; i < bufferObject.length; ++i) {
    typedArray[i] = bufferObject[i];
  }

  return await decodeImageAsync(typedArray, 3);
};