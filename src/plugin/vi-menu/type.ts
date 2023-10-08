interface Tree {
  id: string
  label: string
  children?: Tree[]
  link?: string
  index: string,
  isGroup?:boolean
}
export type{ Tree }
