import React from "react";
import { Link } from "../src";

export default {
  component: Link,
  title: "Link",
};

export const internalLink = () => <Link href="">Go somewhere</Link>;

export const externalLink = () => (
  <Link href="https://www.google.com" external target="_blank">
    Go somewhere far away
  </Link>
);

export const buttonLink = () => (
  <Link href="" buttonStyle="accent">
    Button Link
  </Link>
);
