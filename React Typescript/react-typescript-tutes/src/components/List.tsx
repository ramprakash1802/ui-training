import { ReactNode } from "react"

interface ListProps <T> {
  items: T[],
  render: (item: T) => ReactNode
}

export const List = <T,>({ items, render }: ListProps<T>) => (
  <ul>
    {
      items.map(item => render(item))
    }
  </ul>
)