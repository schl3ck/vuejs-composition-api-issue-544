import { Config } from "@/config";
/**
 * config management functions.
 * Load config from backend and provide it to anyone needing it
 */
import axios from "axios";

let settings: Config = {};

/**
 * get JSON data from frontend URL on server
 *
 * @param filepath list of file paths (of the config files to be loaded)
 *   The content of all files will be merged in the order of listing. Later properties
 *   will overwrite earlier properties with the same name.
 * @returns resolving when config has been loaded
 */
export function load(filepaths: string[]) {
  // axios.get('/client/'  + filepaths[0]).then(r => {
  //   r = r;
  // });
  return Promise.all(filepaths.map((filepath) => axios.get(filepath))).then(
    (responses) => {
      settings = responses.reduce((accu, response) => {
        const data =
          typeof response.data === "string"
            ? JSON.parse(response.data)
            : response.data;
        accu = Object.assign(accu, data);
        return accu;
      }, {});

      return settings;
    }
  );
}

/**
 * return config settings
 *
 * @returns the config object
 */
export function get() {
  return settings;
}

export default { get, load };
