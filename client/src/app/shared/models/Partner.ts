import { Office } from "./Office";

export interface Partners {
    id: number
    urlName: string
    organization: string
    customerLocations: string
    willWorkRemotely: boolean
    website: string
    services: string
    offices: Office[]
}