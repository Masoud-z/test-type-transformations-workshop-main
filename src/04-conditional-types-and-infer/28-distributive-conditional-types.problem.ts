import { Equal, Expect } from "../helpers/type-utils";

type Fruit = "apple" | "banana" | "orange";

type GetAppleOrBanana<T> = T extends "apple" | "banana"
  ? "apple" | "banana"
  : never;

type AppleOrBanana = GetAppleOrBanana<Fruit>;

type tests = [Expect<Equal<AppleOrBanana, "apple" | "banana">>];
