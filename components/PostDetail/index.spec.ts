import { render, screen, fireEvent } from '@testing-library/vue'
import '@testing-library/jest-dom'
import { useRouter } from 'vue-router'
import {describe, vi, expect, it } from 'vitest'
import Detail from '../PostDetail/index.vue'

vi.mock('vue-router', () => ({
    useRouter: vi.fn(),
}))

describe('Detail', () => {
    it('renders post title and description', () => {
        const post = {
            title: 'Test Post',
            description: 'Test Description',
        }

        useRouter.mockReturnValue({
            back: vi.fn(),
        })

        render(Detail, {
            props: {
                post,
            },
        })

        const title = screen.getByText(post.title)
        const description = screen.getByText(post.description)

        expect(title).toBeInTheDocument()
        expect(description).toBeInTheDocument()
    })

    it('calls router.back() on button click', async () => {
        const post = {
            title: 'Test Post',
            description: 'Test Description',
        }

        const mockBack = vi.fn()

        useRouter.mockReturnValue({
            back: mockBack,
        })

        render(Detail, {
            props: {
                post,
            },
        })

        const backButton = await screen.findByRole('button', { name: /back/i })
        await fireEvent.click(backButton)

        expect(mockBack).toHaveBeenCalled()
    })
})