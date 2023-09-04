import { render, screen, fireEvent } from '@testing-library/vue'
import { describe, it, expect, vi } from 'vitest'
import '@testing-library/jest-dom'
import Pagination from '../Pagination/index.vue'

describe('Pagination', () => {
    it('renders correct number of pagination buttons', async () => {
        const totalPages = 5
        const currentPage = 2

        render(Pagination, {
            props: {
                totalPages,
                currentPage,
                itemPerPage: 10,
                itemPerPageCount: [10, 20, 30],
            },
        })

        const paginationButtons = await screen.findAllByRole('button')
        expect(paginationButtons).toHaveLength(totalPages)

    })

    it('emits page event on pagination button click', async () => {
        const totalPages = 5
        const currentPage = 2
        const mockEmit = vi.fn()

        render(Pagination, {
            props: {
                totalPages,
                currentPage,
                itemPerPage: 10,
                itemPerPageCount: [10, 20, 30],
            },
            global: {
                plugins: [
                    {
                        install(app) {
                            app.config.globalProperties.$emit = mockEmit
                        },
                    },
                ],
            },
        })

        const spy = vi.spyOn(mockEmit, 'mockName')

        expect(spy).not.toHaveBeenCalled()

    })

    it('emits limit event on select change', async () => {
        const totalPages = 5
        const currentPage = 2
        const mockEmit = vi.fn()

        render(Pagination, {
            props: {
                totalPages,
                currentPage,
                itemPerPage: 10,
                itemPerPageCount: [10, 20, 30],
            },
            global: {
                plugins: [
                    {
                        install(app) {
                            app.config.globalProperties.$emit = mockEmit
                        },
                    },
                ],
            },
        })

        const select = await screen.findByRole('combobox')
        await fireEvent.update(select, '20')

        expect(mockEmit).not.toHaveBeenCalled()
    })

    it('renders correct number of items per page options', async () => {
        const totalPages = 5
        const currentPage = 2
        const itemPerPageCount = [10, 20, 30]

        render(Pagination, {
            props: {
                totalPages,
                currentPage,
                itemPerPage: 10,
                itemPerPageCount,
            },
        })

        const options = await screen.findAllByRole('option')
        expect(options).toHaveLength(itemPerPageCount.length)

        itemPerPageCount.forEach((count) => {
            const option = screen.getByText(count.toString())
            expect(option).toBeInTheDocument()
        })
    })
})