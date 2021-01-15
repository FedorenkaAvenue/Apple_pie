import { GoogleLoginResponse } from "react-google-login";

export interface IProps {
    googleHandler: (res: GoogleLoginResponse) => void
    facebookHandler: (res: string) => void
}
