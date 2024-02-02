'use server'
import {exec} from "child_process";

export async function pressKiBa() {
    exec("~/WebstormProjects/mocktailmaker/kiba.sh", (error: any, stdout: any, stderr: any) => {
      if (error) {
        console.error(`exec error: ${error}`);
        return;
      }
      console.log(`stdout: ${stdout}`);
      console.error(`stderr: ${stderr}`);
    });
  }

export async function pressCherry() {
    exec("~/WebstormProjects/mocktailmaker/cherry.sh", (error: any, stdout: any, stderr: any) => {
      if (error) {
        console.error(`exec error: ${error}`);
        return;
      }
      console.log(`stdout: ${stdout}`);
      console.error(`stderr: ${stderr}`);
    });
  }

export async function pressOrange() {
    exec("~/WebstormProjects/mocktailmaker/orange.sh", (error: any, stdout: any, stderr: any) => {
      if (error) {
        console.error(`exec error: ${error}`);
        return;
      }
      console.log(`stdout: ${stdout}`);
      console.error(`stderr: ${stderr}`);
    });
  }