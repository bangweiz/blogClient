export interface BaseCategory {
  id: number
  title: string
}

export interface Category extends BaseCategory {
  created_on: string
  modified_on: string
}
