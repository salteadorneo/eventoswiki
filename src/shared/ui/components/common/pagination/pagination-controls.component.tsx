import { cn } from '@ui/utils/shadcn/utils'
import type { FC } from 'react'
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from './pagination.component'

interface Props {
  previousPageLink?: string
  nextPageLink?: string
  totalPages: number
  page: number
  className?: string
  generatePageLink(page: number): string
}
export const PaginationControls: FC<Props> = props => {
  const { previousPageLink, nextPageLink, totalPages, generatePageLink, page, className } = props
  const pages = Array(totalPages).fill(undefined)

  return (
    <Pagination className={cn(className)}>
      <PaginationContent className="w-full justify-between">
        <PaginationItem>
          <PaginationPrevious isDisabled={!previousPageLink} href={previousPageLink} />
        </PaginationItem>
        <PaginationItem className="overflow-x-auto">
          {pages.map((_, index) => {
            const pageNumber = index + 1
            return (
              <PaginationLink isActive={page === pageNumber} href={generatePageLink(pageNumber)}>
                {pageNumber}
              </PaginationLink>
            )
          })}
        </PaginationItem>
        <PaginationItem>
          <PaginationNext isDisabled={!nextPageLink} href={nextPageLink} />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  )
}
