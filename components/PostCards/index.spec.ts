import { render } from '@testing-library/vue'
import '@testing-library/jest-dom'
import { describe, it, expect } from 'vitest'
import PostCards from './index.vue'

const mockPosts = [
    {
        title: 'Test Title 1',
        description: 'Test Description 1',
        preview: 'Test Preview 1',
        createdAt: '2022-01-01T00:00:00.000Z',
        image: 'test-image-1.jpg',
        id: 1
    },
    {
        title: 'Test Title 2',
        description: 'Test Description 2',
        preview: 'Test Preview 2',
        createdAt: '2022-01-02T00:00:00.000Z',
        image: 'test-image-2.jpg',
        id: 2
    }
]

describe('PostCard', () => {
    // Тестирование успешного рендера компонента
    it('renders the component successfully', async () => {
        const {getByText, findAllByTestId} = render(PostCards, {
            props: {
                posts: mockPosts
            },
        })

        const postElements = await findAllByTestId('post-wrapper')

        expect(postElements).toHaveLength(mockPosts.length)
        expect(getByText(mockPosts[0].title)).toBeInTheDocument()
        expect(getByText(mockPosts[1].title)).toBeInTheDocument()
    })
})
