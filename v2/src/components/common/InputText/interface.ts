import { ChangeEvent, ChangeEventHandler } from "react";

export interface IProps {
    val: string
    handleChange: (e: ChangeEvent<HTMLInputElement>) => void
    placeholder?: string
}
