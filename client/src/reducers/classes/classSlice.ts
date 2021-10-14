import { createSlice } from "@reduxjs/toolkit";
import { ClassDetails } from "../../pages/class/useViewClass";

export interface ClassState {
  classes: ClassDetails[];
}
