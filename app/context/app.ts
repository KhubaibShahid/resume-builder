import { createContext, Dispatch, SetStateAction } from "react";

interface Template1Type {
    firstname : string,
    lastname : string,
    des: string,
    bio: string,
    prof: string,
    prof2: string,
    phone: number,
    email : string,
    address : string,
    job: string,
    degree1: string,
    degree2: string,
    organization1: string,
    organization2: string,
    year1: string,
    year2: string,
    lang1: string,
    lang2: string,
    skill1: string,
    skill2: string,
    skill3: string,
    company: string,
    exp: string
    id ?: string,
    useruid ?: string,
    resumeType ?: string

}

interface ObjType {
    obj : Template1Type,
    setObj : Dispatch<SetStateAction<Template1Type>>
}

const UserData = createContext<any | null>(null);

const User = createContext<any>(null);

export {UserData, User}