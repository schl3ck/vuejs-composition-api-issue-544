export interface ConfigTrain {
  name: string;
  url: string;
}

export interface Config {
  trains?: ConfigTrain[];
  envLabel?: string;
}
