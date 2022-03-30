import { Stack, Box } from "@chakra-ui/react";
import { PaginationItem } from "./PaginationItem";

interface PaginationProps {
    totalCountofRegisters: number;
    registersPerPage?: number;
    currentPage?: number;
    onPageChange : (page: number) => void;
}

const siblingsCount = 1

function generatePagesArray(from: number, to: number){
    return [...new Array(to - from)]
    .map((_, index) => {
        return from + index + 1;
    })
    .filter(page => page > 0)
}

export function Pagination({
    totalCountofRegisters,
    registersPerPage = 10,
    currentPage = 1,
    onPageChange
} : PaginationProps){
    const lastPage = Math.floor(totalCountofRegisters / registersPerPage)

    const previousPages = currentPage > 1 
        ? generatePagesArray(currentPage - 1 - siblingsCount, currentPage - 1)
        : []

    const nextPages = currentPage < lastPage
        ? generatePagesArray(currentPage,  Math.min(currentPage + siblingsCount, lastPage))
        : []

    return (
        <Stack
            direction={["column", "row"]}
            mt="8"
            justify="space-between"
            align="center"
            spacing="6"
        >
            <Box>
                <strong>0-10</strong> de <strong>100</strong>
            </Box>
            <Stack direction="row" spacing="2">
                <PaginationItem isCurrent number={1}/>
                <PaginationItem number={2}/>
                <PaginationItem number={3}/>
                <PaginationItem number={4}/>
            </Stack>

        </Stack>
    );
}