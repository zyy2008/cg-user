import { useKeepOutlets, RunTimeLayoutConfig } from "@umijs/max";
import { APIS } from "@/services";

declare var apps: string;

declare global {
  interface Window {
    config?: any;
  }
}

export declare type AppInitialState = {
  satList: {
    pkId?: number;
    title: string;
    label: React.ReactNode;
    value: any;
  }[];
};

export const layout: RunTimeLayoutConfig = () => {
  return {
    title: "XX系统",
    layout: "side",
    // childrenRender: (_, props) => {
    //   const element = useKeepOutlets();
    //   return <>{element}</>;
    // },
  };
};

export async function getInitialState(): Promise<AppInitialState> {
  console.log("@222");
  return {
    satList: [],
  };
}

export const qiankun = {
  apps: apps || window?.config?.apps,
};
