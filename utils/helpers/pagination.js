export const pagination = (current, last, width = 1) => {
    const left = current - width - 1
    const right = current + width + 1
    const range = []
    const rangeWithDots = []
    let l

    for (let i = 1; i <= last; i += 1) {
        if (i === 1 || i === last || (i >= left && i <= right)) {
            range.push(i)
        } else if (i < left) {
            i = left - 1
        } else if (i > right) {
            range.push(last)
            break
        }
    }

    range.forEach(i => {
        if (l) {
            if (i - l === 2) {
                rangeWithDots.push(l + 1)
            } else if (i - l !== 1) {
                rangeWithDots.push('...')
            }
        }
        rangeWithDots.push(i)
        l = i
    })

    return rangeWithDots
}
