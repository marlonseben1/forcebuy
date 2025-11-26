import type { PopoverProps } from "@mui/material";
import type { ReactNode } from "react";

export interface PopoverAction {
    label: string;
    icon: ReactNode;
    onClick: () => void;
}

export interface PopoverAcoesProps {
    id?: PopoverProps["id"];
    open: boolean;
    anchorEl: PopoverProps["anchorEl"];
    handleFecharPopoverAcoes: () => void;
    actions: PopoverAction[];
}
