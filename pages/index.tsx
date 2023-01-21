import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import GNB from "@/src/components/GNB/GNB";

export default function Home() {
  return (
    <>
      <GNB />{" "}
    </>
  );
}
