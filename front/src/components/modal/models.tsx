import { ReactNode } from "react"

export interface ModalProps {
    visible: boolean
    children: ReactNode | ReactNode[]
}